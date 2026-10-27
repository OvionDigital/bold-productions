import { defineType, defineField, defineArrayMember, type SanityClient } from 'sanity';
import { accentOptions } from '../fields';

/**
 * Singleton "Menu, footer & contact" (structure.ts, documentId 'siteNavigation'). Drie delen van de
 * site, elk met eigen menu en footer — gelijk aan src/data/navigation.ts (dat geldt zolang een deel
 * hier leeg is). Gelezen door src/lib/sanity/navigation.ts. Het logo linkt altijd naar de homepage
 * van dat deel; juridische links staan vast in de code. Social media (`socials`) en contactgegevens
 * (`contact`) gelden voor de hele site: footer, WhatsApp-knop en de organisatie in de structured
 * data (getSocials/getContact; platforms gelijk aan socialPlatforms in src/data/navigation.ts).
 */

const socialPlatforms = [
  { title: 'LinkedIn', value: 'linkedin' },
  { title: 'Instagram', value: 'instagram' },
  { title: 'Vimeo', value: 'vimeo' },
  { title: 'TikTok', value: 'tiktok' },
];

/** Paden die geen Sanity-pagina zijn maar wel bestaan */
const FIXED_PATHS = ['/', '/events', '/styleguide', '/sitemap.xml'];

/** Waarschuwing (geen fout) als een interne link naar geen enkele pagina of case wijst. */
async function checkInternalLink(href: string, getClient: (o: { apiVersion: string }) => SanityClient): Promise<true | string> {
  const path = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  if (FIXED_PATHS.includes(path)) return true;
  const slug = path.slice(1);
  const caseMatch = slug.match(/^(events|business)\/cases\/(.+)$/);
  const count = await getClient({ apiVersion: '2025-01-01' }).fetch<number>(
    caseMatch
      ? 'count(*[_type == "caseStudy" && ($category in categories || category == $category) && slug.current == $slug])'
      : 'count(*[_type == "page" && slug.current == $slug])',
    caseMatch ? { category: caseMatch[1], slug: caseMatch[2] } : { slug },
  );
  return count > 0 ? true : `Er is geen pagina met het adres ${path}. Klopt de link?`;
}

const hrefField = (title = 'Link') =>
  defineField({
    name: 'href',
    title,
    type: 'string',
    description: 'Pagina op de site: begin met / (bijv. /events/organisatoren). Andere site: https://…',
    validation: (r) => [
      r.required().error('Vul een link in.'),
      r
        .custom((value?: string) =>
          !value || /^(\/|https?:\/\/|mailto:|tel:|#)/.test(value) ? true : 'Begin met / (pagina op de site), https:// (andere site), mailto: of tel:.',
        )
        .error(),
      r
        .custom(async (value: string | undefined, ctx) => (value?.startsWith('/') ? checkInternalLink(value, ctx.getClient) : true))
        .warning(),
    ],
  });

const labelField = (title = 'Tekst') => defineField({ name: 'label', title, type: 'string', validation: (r) => r.required() });

const linkPreview = { select: { title: 'label', subtitle: 'href' } };

const menuLink = defineArrayMember({
  name: 'menuLink',
  title: 'Link',
  type: 'object',
  fields: [labelField(), hrefField()],
  preview: linkPreview,
});

const menuGroup = defineArrayMember({
  name: 'menuGroup',
  title: 'Menu-item',
  type: 'object',
  fields: [
    labelField(),
    hrefField(),
    defineField({
      name: 'inHeader',
      title: 'Ook in de balk bovenaan (grote schermen)',
      type: 'boolean',
      description: 'Uit = alleen in het uitklapmenu (de knop "Menu").',
      initialValue: false,
    }),
    defineField({
      name: 'children',
      title: 'Dropdown-items',
      type: 'array',
      description: 'Leeg = gewone link zonder dropdown.',
      of: [menuLink],
    }),
  ],
  preview: {
    select: { title: 'label', href: 'href', children: 'children', inHeader: 'inHeader' },
    prepare: ({ title, href, children, inHeader }) => ({
      title,
      subtitle: [href, children?.length ? `${children.length} dropdown-items` : null, inHeader ? 'ook in de balk' : null]
        .filter(Boolean)
        .join(' · '),
    }),
  },
});

const footerColumn = defineArrayMember({
  name: 'footerColumn',
  title: 'Kolom',
  type: 'object',
  fields: [
    labelField('Kop'),
    hrefField('Link van de kop'),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'footerLink',
          title: 'Link',
          type: 'object',
          fields: [labelField(), hrefField(), defineField({ name: 'bold', title: 'Vet', type: 'boolean', initialValue: false })],
          preview: linkPreview,
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'label', links: 'links' },
    prepare: ({ title, links }) => ({ title, subtitle: `${links?.length ?? 0} links` }),
  },
});

const menuFields = () => [
  defineField({
    name: 'cta',
    title: 'Knop rechtsboven',
    type: 'object',
    fields: [labelField(), hrefField()],
    options: { collapsible: false },
  }),
  defineField({
    name: 'menu',
    title: 'Menu',
    type: 'array',
    description: 'Volgorde = volgorde in het menu. Sleep om te verplaatsen.',
    of: [menuGroup],
  }),
  defineField({ name: 'footer', title: 'Footerkolommen', type: 'array', of: [footerColumn] }),
];

export const siteNavigation = defineType({
  name: 'siteNavigation',
  title: 'Menu, footer & contact',
  type: 'document',
  groups: [
    { name: 'events', title: 'Events', default: true },
    { name: 'business', title: 'Business' },
    { name: 'neutral', title: 'Homepage & algemeen' },
    { name: 'socials', title: 'Social media' },
    { name: 'contact', title: 'Contactgegevens' },
  ],
  fields: [
    defineField({
      name: 'events',
      title: 'Events (alle pagina’s onder /events)',
      type: 'object',
      group: 'events',
      options: { collapsible: false },
      fields: menuFields(),
    }),
    defineField({
      name: 'business',
      title: 'Business (alle pagina’s onder /business)',
      type: 'object',
      group: 'business',
      options: { collapsible: false },
      fields: menuFields(),
    }),
    defineField({
      name: 'neutral',
      title: 'Homepage, juridische pagina’s, sitemap en 404',
      type: 'object',
      group: 'neutral',
      options: { collapsible: false },
      description: 'Geen menu: alleen knoppen naar Bold Events en Bold Business.',
      fields: [
        defineField({
          name: 'buttons',
          title: 'Knoppen rechtsboven',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'navButton',
              title: 'Knop',
              type: 'object',
              fields: [
                labelField(),
                defineField({
                  name: 'shortLabel',
                  title: 'Korte tekst op een telefoon (optioneel)',
                  type: 'string',
                  description: 'Bijv. "Events" i.p.v. "Bold Events", zodat de knoppen naast het logo passen.',
                }),
                hrefField(),
                defineField({
                  name: 'accent',
                  title: 'Kleur',
                  type: 'string',
                  options: { list: accentOptions, layout: 'radio', direction: 'horizontal' },
                  initialValue: 'orange',
                }),
              ],
              preview: linkPreview,
            }),
          ],
        }),
        defineField({ name: 'footer', title: 'Footerkolommen', type: 'array', of: [footerColumn] }),
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Social media',
      type: 'array',
      group: 'socials',
      description:
        'Geldt voor de hele site: de iconen in de footer (Events, Business en algemeen) en de profielen die Google bij Bold Productions toont. Volgorde = volgorde in de footer. Leeg = de vaste lijst.',
      of: [
        defineArrayMember({
          name: 'socialLink',
          title: 'Account',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: { list: socialPlatforms },
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'url',
              title: 'Link naar het profiel',
              type: 'url',
              description: 'Volledige link, bijv. https://www.tiktok.com/@bold.productions',
              validation: (r) => r.required().uri({ scheme: ['https'] }),
            }),
          ],
          preview: {
            select: { platform: 'platform', url: 'url' },
            prepare: ({ platform, url }) => ({
              title: socialPlatforms.find((p) => p.value === platform)?.title ?? platform,
              subtitle: url,
            }),
          },
        }),
      ],
      validation: (r) =>
        r.custom((items?: { platform?: string }[]) => {
          const platforms = (items ?? []).map((item) => item.platform).filter(Boolean);
          return new Set(platforms).size === platforms.length ? true : 'Elk platform maar één keer.';
        }),
    }),
    defineField({
      name: 'contact',
      title: 'Contactgegevens',
      type: 'object',
      group: 'contact',
      options: { collapsible: false },
      description:
        'Geldt voor de hele site: de footer, de WhatsApp-knop en de gegevens van Bold Productions voor Google. Leeg veld = de vaste waarde.',
      fields: [
        defineField({ name: 'email', title: 'E-mailadres', type: 'string', validation: (r) => r.email() }),
        defineField({
          name: 'phone',
          title: 'Telefoonnummer',
          type: 'string',
          description: 'Zoals in de footer, bijv. +31 6 233 286 55. Ook het nummer achter de WhatsApp-knop.',
          validation: (r) => r.regex(/^\+\d[\d ]{7,}$/).error('Begin met + en de landcode, bijv. +31 6 233 286 55.'),
        }),
        defineField({ name: 'street', title: 'Straat en huisnummer', type: 'string' }),
        defineField({ name: 'postalCode', title: 'Postcode', type: 'string' }),
        defineField({ name: 'city', title: 'Plaats', type: 'string' }),
        defineField({ name: 'kvk', title: 'KvK-nummer', type: 'string', validation: (r) => r.regex(/^\d{8}$/).error('Acht cijfers.') }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Menu, footer & contact' }) },
});
