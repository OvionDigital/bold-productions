import { defineType, defineField, defineArrayMember } from 'sanity';
import { anchorIdField, contactLinksField, gradientField, plainText, titleField } from '../fields';

/** Formulierkeuze (src/data/forms.ts) */
export const formOptions = [
  { title: 'Contactformulier', value: 'contact' },
  { title: 'Offerteformulier Events (uitgebreid)', value: 'offerte' },
  { title: 'Offerteformulier Business (uitgebreid)', value: 'offerte-business' },
  { title: 'Trouwfilmformulier (namen en pakket)', value: 'trouwfilm' },
];

export const messagePlaceholderField = () =>
  defineField({
    name: 'messagePlaceholder',
    title: 'Voorbeeldtekst in het berichtveld (optioneel)',
    type: 'string',
    description: 'Leeg = "Vertel ons over je event, datum en wensen…".',
  });

/** RichTextSection.astro — smalle kolom tekst met koppen, opsommingen en video's. */
export const richTextSection = defineType({
  name: 'richTextSection',
  title: 'Tekst (smalle kolom)',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Tekst',
      type: 'richText',
      description: 'Koppen worden oranje. Gebruik "Kop 2" voor de titel van het blok. Video’s via "+" in de tekst.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'align',
      title: 'Uitlijning',
      type: 'string',
      options: {
        list: [
          { title: 'Links', value: 'start' },
          { title: 'Gecentreerd', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'start',
    }),
    anchorIdField(),
  ],
  preview: {
    select: { content: 'content' },
    prepare: ({ content }) => ({ title: 'Tekst', subtitle: plainText(content) }),
  },
});

/** FullWidthImage.astro — brede foto (16:9) over de containerbreedte. */
export const fullWidthImageSection = defineType({
  name: 'fullWidthImageSection',
  title: 'Brede foto',
  type: 'object',
  fields: [defineField({ name: 'image', title: 'Foto (liggend, 16:9)', type: 'imageWithAlt', validation: (r) => r.required() })],
  preview: { select: { media: 'image', alt: 'image.alt' }, prepare: ({ media, alt }) => ({ title: 'Brede foto', subtitle: alt, media }) },
});

/** VideoFeature.astro — Vimeo-video over de containerbreedte. */
export const videoFeatureSection = defineType({
  name: 'videoFeatureSection',
  title: 'Brede video',
  type: 'object',
  fields: [
    defineField({ name: 'video', title: 'Vimeo-video', type: 'vimeoVideo', validation: (r) => r.required() }),
    defineField({
      name: 'ratio',
      title: 'Verhouding',
      type: 'number',
      description: 'Hoogte gedeeld door breedte: 0.5625 = 16:9, 0.5 = 2:1.',
      initialValue: 0.5625,
      validation: (r) => r.required().min(0.2).max(3),
    }),
  ],
  preview: { select: { title: 'video.title' }, prepare: ({ title }) => ({ title: `Brede video — ${title ?? ''}` }) },
});

/** ContactSection.astro — tekst met contactlinks naast een formulier. */
export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contactblok (tekst + links + formulier)',
  type: 'object',
  fields: [
    defineField({ name: 'content', title: 'Tekst', type: 'richText', validation: (r) => r.required() }),
    contactLinksField(),
    defineField({
      name: 'form',
      title: 'Formulier',
      type: 'string',
      options: { list: formOptions, layout: 'radio' },
      initialValue: 'contact',
      validation: (r) => r.required(),
    }),
    messagePlaceholderField(),
    anchorIdField('contact-section'),
  ],
  preview: {
    select: { content: 'content', form: 'form' },
    prepare: ({ content, form }) => ({ title: `Contactblok (${form === 'offerte' ? 'offerte' : form === 'offerte-business' ? 'offerte Business' : 'contact'})`, subtitle: plainText(content) }),
  },
});

/** MapSection.astro — "Waar vind je ons?" met Google Maps. */
export const mapSection = defineType({
  name: 'mapSection',
  title: 'Kaart (Google Maps)',
  type: 'object',
  fields: [
    titleField(),
    gradientField('orange'),
    defineField({ name: 'text', title: 'Tekst', type: 'richText' }),
    defineField({
      name: 'src',
      title: 'Embed-link van Google Maps',
      type: 'url',
      description: 'Google Maps → Delen → Kaart insluiten → alleen de link uit src="…".',
      validation: (r) => r.required().uri({ scheme: ['https'] }),
    }),
    defineField({ name: 'label', title: 'Omschrijving (toegankelijkheid)', type: 'string', initialValue: 'Kaart met de locatie van Bold Productions in Doetinchem' }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title: `Kaart — ${title ?? ''}` }) },
});

/** CaseGrid.astro — alle cases met filters op doelgroep en dienst. */
export const caseGridSection = defineType({
  name: 'caseGridSection',
  title: 'Casesoverzicht (met filters)',
  type: 'object',
  fields: [
    defineField({
      name: 'note',
      title: 'Opmerking (niet zichtbaar op de site)',
      type: 'string',
      description: 'Toont automatisch alle cases (volgorde: veld "Volgorde" bij de case), met filters op doelgroep en dienst.',
      readOnly: true,
    }),
    anchorIdField(),
  ],
  preview: { prepare: () => ({ title: 'Casesoverzicht (automatisch)' }) },
});

/** ServiceTiles.astro (variant team) — teamleden met video bij hover. */
export const teamSection = defineType({
  name: 'teamSection',
  title: 'Team (De mensen achter Bold)',
  type: 'object',
  fields: [
    titleField(),
    gradientField('yellow'),
    defineField({
      name: 'members',
      title: 'Teamleden',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'teamEntry',
          fields: [
            defineField({ name: 'member', title: 'Teamlid', type: 'reference', to: [{ type: 'teamMember' }], validation: (r) => r.required() }),
            defineField({
              name: 'role',
              title: 'Andere omschrijving op deze pagina (optioneel)',
              type: 'text',
              rows: 2,
              description: 'Leeg = de omschrijving van het teamlid.',
            }),
          ],
          preview: {
            select: { title: 'member.name', role: 'role', defaultRole: 'member.role', media: 'member.image' },
            prepare: ({ title, role, defaultRole, media }) => ({ title, subtitle: role || defaultRole, media }),
          },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'title', count: 'members.length' },
    prepare: ({ title, count }) => ({ title: `Team — ${title ?? ''}`, subtitle: `${count ?? 0} teamleden` }),
  },
});

/** LinkGroups.astro — linkoverzicht in kaarten per groep (sitemap). */
export const linkGroupsSection = defineType({
  name: 'linkGroupsSection',
  title: 'Linkoverzicht (sitemap)',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow (optioneel)', type: 'string' }),
    titleField('Titel (optioneel)', false),
    defineField({
      name: 'isPageTitle',
      title: 'Titel is de hoofdkop van de pagina (h1)',
      type: 'boolean',
      description: 'Aan als de pagina geen hero heeft, zoals de sitemap.',
      initialValue: false,
    }),
    gradientField('orange'),
    defineField({
      name: 'allPages',
      title: "Automatisch alle pagina's (sitemap)",
      type: 'boolean',
      description:
        "Aan: de groepen worden bij elke publicatie opgebouwd uit alle pagina's en cases (zonder pagina's die niet in Google mogen). Een nieuwe of verwijderde pagina staat er dan vanzelf goed in. De groepen hieronder worden dan niet gebruikt.",
      initialValue: false,
    }),
    defineField({
      name: 'groups',
      title: 'Groepen',
      hidden: ({ parent }) => Boolean((parent as { allPages?: boolean })?.allPages),
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'linkGroup',
          fields: [
            defineField({ name: 'title', title: 'Kop van de groep', type: 'string', validation: (r) => r.required() }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'linkItem',
                  fields: [
                    defineField({ name: 'label', title: 'Tekst', type: 'string', validation: (r) => r.required() }),
                    defineField({ name: 'href', title: 'Link', type: 'string', description: 'Bijv. "/events/aftermovie".', validation: (r) => r.required() }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'href' } },
                }),
              ],
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {
            select: { title: 'title', count: 'links.length' },
            prepare: ({ title, count }) => ({ title, subtitle: `${count ?? 0} links` }),
          },
        }),
      ],
    }),
    defineField({
      name: 'casesGroupTitle',
      hidden: ({ parent }) => Boolean((parent as { allPages?: boolean })?.allPages),
      title: 'Groep met alle cases (optioneel)',
      type: 'string',
      description: 'Vul een kop in (bijv. "Cases") voor een extra groep die automatisch alle cases toont. Leeg = geen casegroep.',
    }),
    defineField({
      name: 'casesGroupIndex',
      hidden: ({ parent }) => Boolean((parent as { allPages?: boolean })?.allPages),
      title: 'Positie van de casegroep',
      type: 'number',
      description: 'Na hoeveel groepen de casegroep komt (0 = als eerste). Leeg = als laatste.',
    }),
    anchorIdField(),
  ],
  preview: {
    select: { title: 'title', count: 'groups.length', allPages: 'allPages' },
    prepare: ({ title, count, allPages }) => ({ title: `Linkoverzicht — ${title ?? ''}`, subtitle: allPages ? "automatisch alle pagina's" : `${count ?? 0} groepen` }),
  },
});
