import { defineType, defineField } from 'sanity';
import { targetingFields, targetingFieldset, targetingLabel } from '../taxonomy';

/**
 * Herbruikbaar over pagina's (net als src/data/testimonials.ts nu). Een pagina kiest
 * en ordent een lijst referenties; de tekst zelf staat hier maar één keer.
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fieldsets: [{ ...targetingFieldset, title: 'Events of Business en doelgroep' }],
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Naam', type: 'string', description: 'Leeg laten als alleen de organisatienaam getoond wordt.' }),
    defineField({ name: 'organisation', title: 'Organisatie', type: 'string' }),
    defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
    // Alleen soort + doelgroep: een testimonial hoort niet bij een dienst
    ...targetingFields({ services: false }),
  ],
  preview: {
    select: { title: 'name', organisation: 'organisation', media: 'image', category: 'category', eventsAudience: 'eventsAudience', businessAudience: 'businessAudience' },
    prepare: ({ title, organisation, media, ...doc }) => ({
      title: title || organisation || 'Testimonial',
      subtitle: [organisation, targetingLabel(doc)].filter(Boolean).join(' — '),
      media,
    }),
  },
});
