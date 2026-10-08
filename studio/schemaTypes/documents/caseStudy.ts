import { defineType, defineField } from 'sanity';

/**
 * Case (zelfde velden als src/data/cases.ts). Voor nu alleen gebruikt door het blok
 * "Uitgelichte case"; de kaart linkt naar /cases/[slug].
 */
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'URL-pad (na /cases/)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'intro', title: 'Korte vraag/intro', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      description: 'Liggende foto (3:2). Decoratief: de titel staat al op de kaart.',
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'intro', media: 'image' } },
});
