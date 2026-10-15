import { defineType, defineField, defineArrayMember } from 'sanity';
import { arrowIconField } from '../fields';

const gradient = {
  type: 'string' as const,
  options: { list: ['orange', 'yellow', 'green', 'accent', 'none'] },
  initialValue: 'orange',
};

/**
 * Singleton (in structure.ts vastgezet op documentId 'homepage', geen lijst).
 * Velden en groepering volgen 1-op-1 src/data/home.ts, zodat de Astro-kant
 * (src/lib/sanity/homepage.ts) dezelfde vorm teruggeeft als de huidige data-file.
 * Proefopzet: alleen de homepage. Andere pagina's volgen later op dezelfde manier.
 */
export const homepage = defineType({
  name: 'homepage',
  title: 'Events-homepage (/events)',
  type: 'document',
  groups: [
    { name: 'meta', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'trustedBy', title: "Vertrouwd door" },
    { name: 'intro', title: 'Intro' },
    { name: 'timeline', title: 'Bold in. Sold out.' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'backstage', title: 'Bold backstage' },
    { name: 'micDrop', title: "Mike's mic drop" },
  ],
  fields: [
    // ─── SEO ────────────────────────────────────────────────────────
    defineField({ name: 'metaTitle', title: 'Paginatitel', type: 'string', group: 'meta', validation: (r) => r.required() }),
    defineField({ name: 'metaDescription', title: 'Metabeschrijving', type: 'text', rows: 2, group: 'meta', validation: (r) => r.required() }),

    // ─── Hero ───────────────────────────────────────────────────────
    defineField({ name: 'heroTitle', title: 'Titel', type: 'string', group: 'hero', validation: (r) => r.required() }),
    defineField({ name: 'heroTitleAccent', title: 'Titel (cursief accent, tweede regel)', type: 'string', group: 'hero', validation: (r) => r.required() }),
    defineField({ name: 'heroEyebrow', title: 'Eyebrow', type: 'string', group: 'hero', validation: (r) => r.required() }),
    defineField({ name: 'heroPrimaryCta', title: 'Primaire knop', type: 'ctaButton', group: 'hero' }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Secundaire knop',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'href', title: 'Link (bijv. #first-section)', type: 'string', validation: (r) => r.required() }),
        arrowIconField(),
      ],
    }),
    defineField({ name: 'heroImage', title: 'Achtergrondfoto (LCP)', type: 'imageWithAlt', group: 'hero', validation: (r) => r.required() }),
    defineField({
      name: 'heroVideo',
      title: 'Vimeo-achtergrondvideo (optioneel)',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'id', title: 'Vimeo video-ID', type: 'string' }),
        defineField({ name: 'hash', title: 'Vimeo unlisted-hash', type: 'string' }),
        defineField({ name: 'title', title: 'Titel (toegankelijkheid)', type: 'string' }),
        defineField({ name: 'loadOnMobile', title: 'Ook op mobiel laden', type: 'boolean', initialValue: false }),
      ],
    }),

    // ─── Vertrouwd door ─────────────────────────────────────────────
    defineField({ name: 'trustedByTitle', title: 'Titel', type: 'string', group: 'trustedBy', initialValue: 'Vertrouwd door' }),
    defineField({
      name: 'trustedByLogos',
      title: "Logo's",
      type: 'array',
      group: 'trustedBy',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'clientLogo' }] })],
    }),

    // ─── Intro ──────────────────────────────────────────────────────
    defineField({ name: 'introContent', title: 'Tekst', type: 'richText', group: 'intro' }),

    // ─── Timeline ───────────────────────────────────────────────────
    defineField({ name: 'timelineTitle', title: 'Titel', type: 'string', group: 'timeline' }),
    defineField({ name: 'timelineGradient', title: 'Kleur titel', group: 'timeline', ...gradient, initialValue: 'yellow' }),
    defineField({ name: 'timelineIntro', title: 'Intro-tekst', type: 'richText', group: 'timeline' }),
    defineField({
      name: 'timelineSteps',
      title: 'Stappen',
      type: 'array',
      group: 'timeline',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'timelineStep',
          fields: [
            defineField({ name: 'number', title: 'Nummer (bijv. 01)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'text', title: 'Tekst', type: 'richText' }),
            defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
            defineField({ name: 'cta', title: 'Knop', type: 'ctaButton' }),
          ],
          preview: { select: { title: 'title', subtitle: 'number', media: 'image' } },
        }),
      ],
    }),
    defineField({ name: 'timelineCta', title: 'Slotknop', type: 'ctaButton', group: 'timeline' }),

    // ─── Testimonials ───────────────────────────────────────────────
    defineField({ name: 'testimonialsEyebrow', title: 'Eyebrow', type: 'string', group: 'testimonials' }),
    defineField({ name: 'testimonialsTitle', title: 'Titel', type: 'string', group: 'testimonials' }),
    defineField({ name: 'testimonialsGradient', title: 'Kleur titel', group: 'testimonials', ...gradient, initialValue: 'orange' }),
    defineField({
      name: 'testimonialsItems',
      title: 'Testimonials (volgorde = weergavevolgorde)',
      type: 'array',
      group: 'testimonials',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'testimonial' }] })],
    }),

    // ─── Bold backstage ─────────────────────────────────────────────
    defineField({ name: 'backstageEyebrow', title: 'Eyebrow', type: 'string', group: 'backstage' }),
    defineField({ name: 'backstageTitle', title: 'Titel', type: 'string', group: 'backstage' }),
    defineField({ name: 'backstageGradient', title: 'Kleur titel', group: 'backstage', ...gradient, initialValue: 'green' }),
    defineField({
      name: 'backstagePhotos',
      title: "Polaroid-foto's",
      type: 'array',
      group: 'backstage',
      of: [defineArrayMember({ type: 'imageWithAlt' })],
    }),

    // ─── Mike's mic drop ────────────────────────────────────────────
    defineField({ name: 'micDropTitle', title: 'Titel', type: 'string', group: 'micDrop' }),
    defineField({ name: 'micDropGradient', title: 'Kleur titel', group: 'micDrop', ...gradient, initialValue: 'yellow' }),
    defineField({ name: 'micDropBody', title: 'Tekst', type: 'richText', group: 'micDrop' }),
    defineField({ name: 'micDropCta', title: 'Knop', type: 'ctaButton', group: 'micDrop' }),
    defineField({
      name: 'micDropMediaType',
      title: 'Type media',
      type: 'string',
      group: 'micDrop',
      options: { list: ['vimeo', 'image'] },
      initialValue: 'vimeo',
    }),
    defineField({
      name: 'micDropVideo',
      title: 'Vimeo-video',
      type: 'object',
      group: 'micDrop',
      hidden: ({ parent }) => parent?.micDropMediaType !== 'vimeo',
      fields: [
        defineField({ name: 'id', title: 'Vimeo video-ID', type: 'string' }),
        defineField({ name: 'hash', title: 'Vimeo unlisted-hash', type: 'string' }),
        defineField({ name: 'title', title: 'Titel (toegankelijkheid)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'micDropImage',
      title: 'Foto (i.p.v. video)',
      type: 'imageWithAlt',
      group: 'micDrop',
      hidden: ({ parent }) => parent?.micDropMediaType !== 'image',
    }),
    defineField({ name: 'micDropTriangles', title: 'Driehoekjes rond het beeld', type: 'boolean', group: 'micDrop', initialValue: true }),
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
});
