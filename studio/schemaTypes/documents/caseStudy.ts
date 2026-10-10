import { defineType, defineField, defineArrayMember } from 'sanity';
import { caseSectionTypes } from '../sections';

const audienceOptions = [
  { title: 'Events', value: 'events' },
  { title: 'Artiesten', value: 'artiesten' },
  { title: 'Zakelijke events', value: 'zakelijke-events' },
  { title: 'Business', value: 'business' },
];

const serviceOptions = ['Promovideo', 'Eventvideo', 'Aftermovie', 'Social content', 'Fotografie', 'Bandpromo', 'Artiestenpromo', 'Casevideo', 'Recap'];

/**
 * Case: kaart (overzicht en "Uitgelichte case") én de detailpagina /cases/<slug>.
 * De pagina begint altijd met hero (titel, intro, foto), kruimelpad, introtekst en de
 * feitenbalk (klant, datum, doelgroep, dienst); daaronder de vrije secties.
 * Zelfde velden als src/data/cases.ts.
 */
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case',
  type: 'document',
  groups: [
    { name: 'card', title: 'Kaart & kop', default: true },
    { name: 'content', title: 'Inhoud' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', group: 'card', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'URL-pad (na /cases/)',
      type: 'slug',
      group: 'card',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Korte vraag/intro',
      type: 'string',
      group: 'card',
      description: 'Op de kaart en onder de titel in de hero.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      group: 'card',
      options: { hotspot: true },
      description: 'Liggende foto (3:2). Kaart én achtergrond van de hero.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'video',
      title: 'Vimeo-achtergrondvideo in de hero (optioneel)',
      type: 'vimeoVideo',
      group: 'card',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'audiences',
      title: 'Doelgroep',
      type: 'array',
      group: 'card',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: audienceOptions },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'services',
      title: 'Diensten',
      type: 'array',
      group: 'card',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: serviceOptions.map((s) => ({ title: s, value: s })) },
    }),
    defineField({ name: 'client', title: 'Klant', type: 'string', group: 'card' }),
    defineField({ name: 'date', title: 'Datum (zoals getoond, bijv. 6-7-2025)', type: 'string', group: 'card' }),
    defineField({ name: 'sortOrder', title: 'Volgorde in het overzicht', type: 'number', group: 'card', description: 'Laag = eerst.' }),
    defineField({
      name: 'introText',
      title: 'Introtekst (groot, oplichtend bij scrollen)',
      type: 'richText',
      group: 'content',
      description: 'Vetgedrukte woorden worden groen.',
    }),
    defineField({
      name: 'sections',
      title: 'Secties onder de feitenbalk',
      type: 'array',
      group: 'content',
      of: caseSectionTypes.map((t) => defineArrayMember({ type: t.name })),
      options: { insertMenu: { filter: true, views: [{ name: 'list' }] } },
    }),
    defineField({ name: 'metaTitle', title: 'Paginatitel (Google)', type: 'string', group: 'seo', description: 'Leeg = de titel.' }),
    defineField({ name: 'metaDescription', title: 'Metabeschrijving (Google)', type: 'text', rows: 3, group: 'seo', description: 'Leeg = de intro.' }),
  ],
  orderings: [{ title: 'Volgorde', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'intro', media: 'image' } },
});
