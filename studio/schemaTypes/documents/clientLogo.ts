import { defineType, defineField } from 'sanity';

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Klantlogo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Organisatienaam', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: 'name', media: 'image' } },
});
