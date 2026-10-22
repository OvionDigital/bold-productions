import { defineType, defineField } from 'sanity';
import { multiTargetingFields, multiTargetingLabel, targetingFieldset } from '../taxonomy';

/**
 * Herbruikbaar over pagina's (net als src/data/testimonials.ts nu). Een pagina kiest
 * en ordent een lijst referenties, of laat de lijst leeg: dan kiest de site automatisch op de
 * soort en doelgroep van de pagina (src/data/taxonomy.ts matchingPath). De tekst staat hier maar één keer.
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fieldsets: [{ ...targetingFieldset, title: 'Events en/of Business en doelgroepen' }],
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Naam', type: 'string', description: 'Leeg laten als alleen de organisatienaam getoond wordt.' }),
    defineField({ name: 'organisation', title: 'Organisatie', type: 'string' }),
    defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
    // Soorten + doelgroepen (vinkjes): een testimonial hoort niet bij een dienst
    ...multiTargetingFields(),
  ],
  preview: {
    select: { title: 'name', organisation: 'organisation', media: 'image', categories: 'categories', eventsAudiences: 'eventsAudiences', businessAudiences: 'businessAudiences' },
    prepare: ({ title, organisation, media, ...doc }) => ({
      title: title || organisation || 'Testimonial',
      subtitle: [organisation, multiTargetingLabel(doc)].filter(Boolean).join(' — '),
      media,
    }),
  },
});
