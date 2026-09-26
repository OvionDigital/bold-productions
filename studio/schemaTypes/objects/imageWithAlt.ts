import { defineType, defineField } from 'sanity';

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Afbeelding',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt-tekst',
      description: 'Beschrijvend voor beeldmateriaal, organisatienaam voor logo’s, of leeg laten bij puur decoratief beeld.',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
});
