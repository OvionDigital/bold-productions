import { defineType, defineField, defineArrayMember } from 'sanity';
import { accentOptions } from '../fields';

/** SplitHero.astro — homepage: keuze tussen Bold Events en Bold Business. */
export const splitHeroSection = defineType({
  name: 'splitHeroSection',
  title: 'Keuzehero Events / Business (homepage)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Paginatitel voor Google (h1)',
      type: 'string',
      description: 'Niet zichtbaar als tekst: de tekst achter het logo in het midden.',
      initialValue: 'Bold Productions',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'halves',
      title: 'Helften (links, rechts)',
      type: 'array',
      validation: (r) => r.required().length(2).error('Precies twee helften: links en rechts.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'splitHeroHalf',
          fields: [
            defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 2, description: 'Enter = nieuwe regel.', validation: (r) => r.required() }),
            defineField({ name: 'ctaLabel', title: 'Knoptekst', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'href', title: 'Link (de hele helft)', type: 'string', description: 'Bijv. /events of /business.', validation: (r) => r.required() }),
            defineField({
              name: 'accent',
              title: 'Kleur',
              type: 'string',
              options: { list: accentOptions, layout: 'radio', direction: 'horizontal' },
              validation: (r) => r.required(),
            }),
            defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', description: 'Liggende foto; wordt grijs en vaag getoond.', validation: (r) => r.required() }),
            defineField({
              name: 'video',
              title: 'Vimeo-video bij hover (optioneel, alleen desktop)',
              type: 'vimeoVideo',
              options: { collapsible: true, collapsed: true },
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'href', media: 'image' } },
        }),
      ],
    }),
  ],
  preview: {
    select: { left: 'halves.0.title', right: 'halves.1.title' },
    prepare: ({ left, right }) => ({ title: `Keuzehero — ${left ?? ''} / ${right ?? ''}` }),
  },
});
