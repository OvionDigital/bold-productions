import { defineType, defineField } from 'sanity';

const accent = { type: 'string' as const, options: { list: ['orange', 'yellow', 'green'] } };

export const ctaButton = defineType({
  name: 'ctaButton',
  title: 'Knop',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'href', title: 'Link', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'accent', title: 'Accentkleur', ...accent }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});
