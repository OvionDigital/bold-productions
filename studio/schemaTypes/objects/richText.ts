import { defineType } from 'sanity';

/**
 * Portable Text beperkt tot wat src/lib/rich.ts ondersteunt: paragrafen en bullet-
 * lijsten, met vet/cursief en interne of externe links. Geen koppen, quotes, afbeeldingen
 * of andere stijlen — die bestaan niet in het Rich-model dat de componenten renderen.
 * De Astro-kant zet dit om naar dat model in src/lib/sanity/portableText.ts.
 */
export const richText = defineType({
  name: 'richText',
  title: 'Tekst',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normaal', value: 'normal' }],
      lists: [{ title: 'Opsomming', value: 'bullet' }],
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
    },
  ],
});
