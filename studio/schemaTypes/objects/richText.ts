import { defineType, defineField, defineArrayMember } from 'sanity';

/**
 * Portable Text, beperkt tot wat src/lib/rich.ts kan renderen: paragrafen, tussenkoppen,
 * citaat, opsommingen (gewoon, ruim of genummerd) met vet/cursief en links, en Vimeo-
 * video's in de tekst. De Astro-kant zet dit om in src/lib/sanity/portableText.ts.
 * Een lege regel = witregel (zoals op de live site).
 */
export const richText = defineType({
  name: 'richText',
  title: 'Tekst',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normaal', value: 'normal' },
        { title: 'Kop 1 (paginatitel)', value: 'h1' },
        { title: 'Kop 2', value: 'h2' },
        { title: 'Kop 3', value: 'h3' },
        { title: 'Kop 4', value: 'h4' },
        { title: 'Kop 6 (klein)', value: 'h6' },
        { title: 'Citaat', value: 'blockquote' },
      ],
      lists: [
        { title: 'Opsomming', value: 'bullet' },
        { title: 'Opsomming met ruimte', value: 'spaced' },
        { title: 'Genummerd', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Vet', value: 'strong' },
          { title: 'Cursief', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [{ name: 'href', title: 'URL', type: 'string', validation: (r) => r.required() }],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'richVideo',
      title: 'Vimeo-video',
      fields: [
        defineField({ name: 'video', title: 'Video', type: 'vimeoVideo', validation: (r) => r.required() }),
        defineField({
          name: 'ratio',
          title: 'Verhouding',
          type: 'number',
          description: 'Hoogte gedeeld door breedte: 0.5625 = liggend 16:9, 1 = vierkant, 1.7778 = staand 9:16.',
          initialValue: 0.5625,
          validation: (r) => r.required().min(0.2).max(3),
        }),
        defineField({
          name: 'width',
          title: 'Breedte (%)',
          type: 'number',
          description: 'Breedte in procenten van de tekstkolom. Leeg = 100.',
          validation: (r) => r.min(10).max(100),
        }),
      ],
      preview: {
        select: { title: 'video.title', id: 'video.id' },
        prepare: ({ title, id }) => ({ title: `Video — ${title ?? ''}`, subtitle: id ? `vimeo.com/${id}` : '' }),
      },
    }),
  ],
});
