import { defineType, defineField } from 'sanity';
import { multiTargetingFields, multiTargetingLabel, targetingFieldset } from '../taxonomy';

/**
 * Klantlogo voor de logostrips ("Vertrouwd door"). Events en/of Business en daaronder de
 * doelgroepen: een strip toont de logo's van de doelgroep van de pagina (max. 10, elke keer
 * een willekeurige keuze).
 */
export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Klantlogo',
  type: 'document',
  fieldsets: [{ ...targetingFieldset, title: 'Events en/of Business en doelgroepen' }],
  fields: [
    defineField({ name: 'name', title: 'Organisatienaam', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      validation: (r) => r.required(),
    }),
    ...multiTargetingFields(),
  ],
  preview: {
    select: { title: 'name', media: 'image', categories: 'categories', eventsAudiences: 'eventsAudiences', businessAudiences: 'businessAudiences' },
    prepare: ({ title, media, ...doc }) => ({ title, subtitle: multiTargetingLabel(doc), media }),
  },
});
