import { defineType, defineField } from 'sanity';
import { accentOptions, arrowIconField } from '../fields';

/** Hero.astro — schermvullende kop bovenaan de pagina. */
export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero (bovenaan de pagina)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'text',
      rows: 2,
      description: 'Enter = nieuwe regel.',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'titleAccent', title: 'Titel, laatste regel (cursief accent, optioneel)', type: 'string' }),
    defineField({
      name: 'accentInline',
      title: 'Accent op dezelfde regel als de titel',
      type: 'boolean',
      description: 'Aan = "Gewoon even praten" op één regel i.p.v. het accent op een nieuwe regel.',
      initialValue: false,
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow (kleine tekst onder de titel)',
      type: 'text',
      rows: 2,
      description: 'Enter = nieuwe regel.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primaire knop (optioneel)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'href', title: 'Link', type: 'string', validation: (r) => r.required() }),
      ],
      options: { collapsible: true, collapsed: false },
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Tweede knop (optioneel)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          description: '"#first-section" scrolt naar de sectie met dat anker-ID.',
          initialValue: '#first-section',
          validation: (r) => r.required(),
        }),
        arrowIconField(),
      ],
      options: { collapsible: true, collapsed: false },
    }),
    defineField({
      name: 'buttonAccent',
      title: 'Kleur knoppen (optioneel)',
      type: 'string',
      description: 'Leeg = accentkleur van de pagina.',
      options: { list: accentOptions, layout: 'radio', direction: 'horizontal' },
    }),
    defineField({
      name: 'image',
      title: 'Achtergrondfoto',
      type: 'imageWithAlt',
      description: 'Liggende foto, minimaal 2048 px breed. Is ook de poster zolang de video laadt.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'video',
      title: 'Vimeo-achtergrondvideo (optioneel)',
      type: 'vimeoVideo',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'videoOnMobile',
      title: 'Video ook op mobiel laden',
      type: 'boolean',
      description: 'Uit = op mobiel alleen de foto (sneller).',
      initialValue: false,
      hidden: ({ parent }) => !parent?.video?.id,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'titleAccent', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({ title: `Hero — ${title ?? ''} ${subtitle ?? ''}`.trim(), media }),
  },
});
