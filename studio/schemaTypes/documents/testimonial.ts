import { defineType, defineField } from 'sanity';

/**
 * Herbruikbaar over pagina's (net als src/data/testimonials.ts nu). Een pagina kiest
 * en ordent een lijst referenties; de tekst zelf staat hier maar één keer.
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Naam', type: 'string', description: 'Leeg laten als alleen de organisatienaam getoond wordt.' }),
    defineField({ name: 'organisation', title: 'Organisatie', type: 'string' }),
    defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'organisation', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({ title: title || subtitle || 'Testimonial', subtitle, media }),
  },
});
