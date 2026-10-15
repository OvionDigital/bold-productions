import { defineType, defineField } from 'sanity';
import { targetingFields, targetingFieldset, targetingLabel } from '../taxonomy';

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Klantlogo',
  type: 'document',
  fieldsets: [{ ...targetingFieldset, title: 'Events of Business en doelgroep' }],
  fields: [
    defineField({ name: 'name', title: 'Organisatienaam', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      validation: (r) => r.required(),
    }),
    // Logo's: alleen soort + doelgroep, geen diensten
    ...targetingFields({ services: false }),
  ],
  preview: {
    select: { title: 'name', media: 'image', category: 'category', eventsAudience: 'eventsAudience', businessAudience: 'businessAudience' },
    prepare: ({ title, media, ...doc }) => ({ title, subtitle: targetingLabel(doc), media }),
  },
});
