import { defineType, defineField, defineArrayMember } from 'sanity';
import { accentOptions } from '../fields';
import { sectionTypes } from '../sections';

/**
 * URL-paden die al door een vaste Astro-pagina in src/pages/ gebruikt worden.
 * Moet gelijk blijven aan RESERVED_SLUGS in src/lib/sanity/pages.ts.
 */
const RESERVED_SLUGS = ['styleguide'];

const slugify = (input: string) =>
  input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/-*\/-*/g, '/')
    .replace(/^[-/]+|[-/]+$/g, '')
    .slice(0, 96);

/**
 * Een pagina die de klant zelf opbouwt uit de bestaande secties. Header, menu, footer
 * en WhatsApp-knop staan er automatisch omheen (BaseLayout). Gebouwd door
 * src/pages/[...slug].astro.
 */
export const page = defineType({
  name: 'page',
  title: 'Pagina',
  type: 'document',
  groups: [
    { name: 'content', title: 'Inhoud', default: true },
    { name: 'settings', title: 'Instellingen & SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Paginanaam',
      type: 'string',
      group: ['content', 'settings'],
      description: 'Intern en in het kruimelpad. De zichtbare koppen stel je in per sectie.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-pad',
      type: 'slug',
      group: ['content', 'settings'],
      description:
        'Het adres van de pagina na weareboldproductions.com/, zonder slash aan begin of eind. Bijv. "events/aftermovie" of "over-ons". Een slash maakt een subpagina.',
      options: { source: 'title', slugify },
      validation: (r) =>
        r.required().custom((value?: { current?: string }) => {
          const slug = value?.current ?? '';
          if (!slug) return 'Vul een URL-pad in.';
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(slug)) {
            return 'Alleen kleine letters, cijfers, streepjes en slashes (bijv. "events/aftermovie"), geen slash aan begin of eind.';
          }
          if (RESERVED_SLUGS.includes(slug)) return `"/${slug}" bestaat al als vaste pagina. Kies een ander pad.`;
          if (slug.startsWith('cases/')) return 'Paden onder /cases/ zijn voor cases. Maak een case aan onder "Cases".';
          return true;
        }),
    }),
    defineField({
      name: 'sections',
      title: 'Secties',
      type: 'array',
      group: 'content',
      description: 'Bouw de pagina op met blokken. Sleep om de volgorde te wijzigen. Begin normaal met een Hero.',
      of: sectionTypes.map((t) => defineArrayMember({ type: t.name })),
      options: {
        insertMenu: { filter: true, views: [{ name: 'list' }] },
      },
      validation: (r) => [
        r.required().min(1).error('Voeg minimaal één sectie toe.'),
        r
          .custom((sections?: { _type: string }[]) =>
            // Kruimelpad of tekstsectie bovenaan (juridische pagina's, 404) krijgen zelf ruimte onder de navbar
            !sections?.length || ['heroSection', 'breadcrumbsSection', 'richTextSection'].includes(sections[0]._type)
              ? true
              : 'Begin met een Hero, kruimelpad of tekstsectie; andere secties vallen bovenaan onder de vaste navigatiebalk.',
          )
          .warning(),
        r
          .custom((sections?: { _type: string }[]) =>
            (sections ?? []).filter((s) => s._type === 'heroSection').length <= 1 ? true : 'Gebruik maximaal één Hero per pagina.',
          )
          .error(),
      ],
    }),

    // ─── Instellingen & SEO ─────────────────────────────────────────
    defineField({
      name: 'accent',
      title: 'Accentkleur van de pagina',
      type: 'string',
      group: 'settings',
      description: 'Events oranje, artiesten geel, zakelijk groen.',
      options: { list: accentOptions, layout: 'radio', direction: 'horizontal' },
      initialValue: 'orange',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'breadcrumbTitle',
      title: 'Naam in kruimelpad (optioneel)',
      type: 'string',
      group: 'settings',
      description: 'Leeg = paginanaam.',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Paginatitel (Google en browsertabblad)',
      type: 'string',
      group: 'settings',
      description: 'Bijv. "Aftermovie laten maken? | Bold Productions". Ideaal 50–60 tekens.',
      validation: (r) => [r.required(), r.max(70).warning('Langer dan 70 tekens wordt in Google afgekapt.')],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Metabeschrijving (Google)',
      type: 'text',
      rows: 3,
      group: 'settings',
      description: 'Ideaal 120–160 tekens.',
      validation: (r) => [
        r.custom((value?: string) => (value?.trim() ? true : 'Zonder beschrijving kiest Google zelf een stukje tekst van de pagina.')).warning(),
        r.max(170).warning('Langer dan 170 tekens wordt in Google afgekapt.'),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Deelafbeelding (optioneel)',
      type: 'image',
      group: 'settings',
      description: 'Getoond bij delen op social media en WhatsApp. Leeg = de hero-foto.',
    }),
    defineField({
      name: 'noindex',
      title: 'Verbergen voor Google',
      type: 'boolean',
      group: 'settings',
      description: 'Aan = de pagina is wel bereikbaar, maar wordt niet in zoekmachines opgenomen.',
      initialValue: false,
    }),
  ],
  orderings: [{ title: 'URL-pad', name: 'slugAsc', by: [{ field: 'slug.current', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', slug: 'slug.current', media: 'sections.0.image' },
    prepare: ({ title, slug, media }) => ({ title, subtitle: slug ? `/${slug}` : '(nog geen URL-pad)', media }),
  },
});
