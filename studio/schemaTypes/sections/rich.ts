import { defineType, defineField, defineArrayMember } from 'sanity';
import { anchorIdField, gradientField, plainText, titleField } from '../fields';

/** Timeline.astro — kop + genummerde stappen (foto | tekst) + slotknop. */
export const timelineSection = defineType({
  name: 'timelineSection',
  title: 'Tijdlijn (genummerde stappen)',
  type: 'object',
  fields: [
    titleField(),
    gradientField('yellow'),
    defineField({ name: 'intro', title: 'Intro-tekst', type: 'richText' }),
    defineField({
      name: 'steps',
      title: 'Stappen',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'timelineStep',
          title: 'Stap',
          fields: [
            defineField({ name: 'number', title: 'Nummer (bijv. 01)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'text', title: 'Tekst', type: 'richText' }),
            defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
            defineField({ name: 'cta', title: 'Knop (optioneel)', type: 'ctaButton' }),
          ],
          preview: { select: { title: 'title', subtitle: 'number', media: 'image' } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: 'cta', title: 'Slotknop (optioneel)', type: 'ctaButton' }),
    defineField({ name: 'reverse', title: 'Foto rechts i.p.v. links', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', count: 'steps.length', media: 'steps.0.image' },
    prepare: ({ title, count, media }) => ({ title: `Tijdlijn — ${title ?? ''}`, subtitle: `${count ?? 0} stappen`, media }),
  },
});

/** TextMedia.astro — tekst naast foto of Vimeo-video, optioneel met contactformulier. */
export const textMediaSection = defineType({
  name: 'textMediaSection',
  title: 'Tekst met foto of video',
  type: 'object',
  fields: [
    defineField({
      name: 'showContactForm',
      title: 'Contactformulier i.p.v. tekst',
      type: 'boolean',
      description: 'Toont naast het beeld het standaard contactformulier. Titel, tekst en knop hieronder vervallen dan; gebruik de intro erboven.',
      initialValue: false,
    }),
    defineField({
      name: 'intro',
      title: 'Gecentreerde intro erboven (optioneel)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        titleField(),
        gradientField('orange'),
        defineField({ name: 'text', title: 'Tekst', type: 'richText' }),
      ],
    }),
    defineField({ ...titleField('Titel', false), hidden: ({ parent }) => parent?.showContactForm }),
    defineField({ ...gradientField('orange'), hidden: ({ parent }) => parent?.showContactForm }),
    defineField({ name: 'body', title: 'Tekst', type: 'richText', hidden: ({ parent }) => parent?.showContactForm }),
    defineField({ name: 'cta', title: 'Knop (optioneel)', type: 'ctaButton', hidden: ({ parent }) => parent?.showContactForm }),
    defineField({
      name: 'mediaType',
      title: 'Beeld',
      type: 'string',
      options: {
        list: [
          { title: 'Foto (staand)', value: 'image' },
          { title: 'Vimeo-video (vierkant)', value: 'vimeo' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'imageWithAlt',
      description: 'Staande foto (verhouding 2:3).',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
      validation: (r) =>
        r.custom((value, ctx) => ((ctx.parent as { mediaType?: string })?.mediaType === 'image' && !value ? 'Kies een foto.' : true)),
    }),
    defineField({
      name: 'video',
      title: 'Vimeo-video',
      type: 'vimeoVideo',
      hidden: ({ parent }) => parent?.mediaType !== 'vimeo',
      validation: (r) =>
        r.custom((value, ctx) => ((ctx.parent as { mediaType?: string })?.mediaType === 'vimeo' && !value ? 'Vul de Vimeo-video in.' : true)),
    }),
    defineField({ name: 'reverse', title: 'Beeld links i.p.v. rechts', type: 'boolean', initialValue: false }),
    defineField({ name: 'triangles', title: 'Driehoekjes rond het beeld', type: 'boolean', initialValue: false }),
    anchorIdField(),
  ],
  preview: {
    select: { title: 'title', introTitle: 'intro.title', form: 'showContactForm', media: 'image', body: 'body' },
    prepare: ({ title, introTitle, form, media, body }) => ({
      title: `${form ? 'Contactformulier' : 'Tekst + beeld'} — ${title || introTitle || ''}`,
      subtitle: plainText(body),
      media,
    }),
  },
});

/** ServiceTiles.astro — kop + staande beeldtegels die naar (dienst)pagina's linken. */
export const serviceTilesSection = defineType({
  name: 'serviceTilesSection',
  title: 'Beeldtegels (links naar diensten)',
  type: 'object',
  fields: [
    titleField(),
    gradientField('yellow'),
    defineField({ name: 'text', title: 'Tekst (optioneel)', type: 'richText' }),
    defineField({
      name: 'items',
      title: 'Tegels',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceTile',
          title: 'Tegel',
          fields: [
            defineField({ name: 'label', title: 'Titel', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'href', title: 'Link (bijv. /events/aftermovie)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'image', title: 'Foto (staand, 2:3)', type: 'imageWithAlt', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'href', media: 'image' } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'title', count: 'items.length', media: 'items.0.image' },
    prepare: ({ title, count, media }) => ({ title: `Beeldtegels — ${title ?? ''}`, subtitle: `${count ?? 0} tegels`, media }),
  },
});
