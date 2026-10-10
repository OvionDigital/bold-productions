import { defineType, defineField, defineArrayMember } from 'sanity';
import { anchorIdField, gradientField, plainText, titleField } from '../fields';

/** Breadcrumbs.astro — wordt automatisch gevuld op basis van het URL-pad. */
export const breadcrumbsSection = defineType({
  name: 'breadcrumbsSection',
  title: 'Kruimelpad',
  type: 'object',
  description: 'Home › … › deze pagina. Wordt automatisch opgebouwd uit het URL-pad; normaal direct onder de hero.',
  fields: [
    defineField({
      name: 'note',
      title: 'Opmerking (niet zichtbaar op de site)',
      type: 'string',
      description: 'Het kruimelpad vult zichzelf. Pas "Naam in kruimelpad" bij de pagina-instellingen aan om de tekst te wijzigen.',
      readOnly: true,
    }),
  ],
  preview: { prepare: () => ({ title: 'Kruimelpad (automatisch)' }) },
});

/** LogoMarquee.astro — "Vertrouwd door" met doorlopende logostrip. */
export const logoMarqueeSection = defineType({
  name: 'logoMarqueeSection',
  title: "Logostrip (Vertrouwd door)",
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', initialValue: 'Vertrouwd door', validation: (r) => r.required() }),
    defineField({
      name: 'logos',
      title: "Logo's",
      type: 'array',
      description: "Leeg laten = alle klantlogo's. Volgorde = weergavevolgorde.",
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'clientLogo' }] })],
      validation: (r) => r.unique(),
    }),
  ],
  preview: {
    select: { title: 'title', count: 'logos.length' },
    prepare: ({ title, count }) => ({ title: `Logostrip — ${title ?? ''}`, subtitle: count ? `${count} logo's` : "Alle logo's" }),
  },
});

/** IntroHighlight.astro — grote gecentreerde tekst die oplicht bij scrollen. */
export const introHighlightSection = defineType({
  name: 'introHighlightSection',
  title: 'Introtekst (oplichtend bij scrollen)',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Tekst',
      type: 'richText',
      description: 'Vetgedrukte woorden worden groen.',
      validation: (r) => r.required(),
    }),
    anchorIdField('first-section'),
  ],
  preview: {
    select: { content: 'content' },
    prepare: ({ content }) => ({ title: 'Introtekst', subtitle: plainText(content) }),
  },
});

/** PolaroidStack.astro — polaroids die bij scrollen over elkaar schuiven. */
export const polaroidStackSection = defineType({
  name: 'polaroidStackSection',
  title: "Polaroidstapel (foto's)",
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow (optioneel)', type: 'string', description: 'Kleine kop boven de titel, bijv. "Bold backstage".' }),
    titleField(),
    gradientField('green'),
    defineField({
      name: 'photos',
      title: "Foto's",
      type: 'array',
      of: [defineArrayMember({ type: 'imageWithAlt' })],
      options: { layout: 'grid' },
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'title', eyebrow: 'eyebrow', media: 'photos.0' },
    prepare: ({ title, eyebrow, media }) => ({ title: `Polaroids — ${title ?? ''}`, subtitle: eyebrow, media }),
  },
});

/** Testimonials.astro — carousel met testimonials. */
export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', validation: (r) => r.required() }),
    titleField(),
    gradientField('orange'),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      description: 'Kies bestaande testimonials (beheer ze onder "Testimonials"). Volgorde = weergavevolgorde.',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'testimonial' }] })],
      validation: (r) => r.required().min(1).unique(),
    }),
  ],
  preview: {
    select: { title: 'title', eyebrow: 'eyebrow', count: 'items.length' },
    prepare: ({ title, eyebrow, count }) => ({ title: `Testimonials — ${eyebrow ?? ''} ${title ?? ''}`, subtitle: `${count ?? 0} testimonials` }),
  },
});

/** CaseSpotlight.astro — kop met één grote casekaart. */
export const caseSpotlightSection = defineType({
  name: 'caseSpotlightSection',
  title: 'Uitgelichte case',
  type: 'object',
  fields: [
    titleField(),
    gradientField('green'),
    defineField({
      name: 'case',
      title: 'Case',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', caseTitle: 'case.title', media: 'case.image' },
    prepare: ({ title, caseTitle, media }) => ({ title: `Uitgelichte case — ${title ?? ''}`, subtitle: caseTitle, media }),
  },
});

/** ImageFeature.astro — brede foto met titel en tekst erover. */
export const imageFeatureSection = defineType({
  name: 'imageFeatureSection',
  title: 'Brede foto met tekst',
  type: 'object',
  fields: [
    titleField(),
    gradientField('green'),
    defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'image', title: 'Foto', type: 'imageWithAlt', validation: (r) => r.required() }),
    defineField({
      name: 'cinemaCursor',
      title: 'Popcorn-cursor',
      type: 'boolean',
      description: 'Muiscursor wordt popcorn boven deze sectie (zoals bij de bioscoop op /events). Maximaal één keer per pagina.',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
    prepare: ({ title, media }) => ({ title: `Brede foto — ${title ?? ''}`, media }),
  },
});

/** Faq.astro — accordeon met veelgestelde vragen (+ FAQ-structured data voor Google). */
export const faqSection = defineType({
  name: 'faqSection',
  title: 'Veelgestelde vragen',
  type: 'object',
  fields: [
    titleField(),
    gradientField('green'),
    defineField({
      name: 'items',
      title: 'Vragen',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'Vraag',
          fields: [
            defineField({ name: 'question', title: 'Vraag', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'answer', title: 'Antwoord', type: 'richText', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'question' } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
    anchorIdField('faq'),
  ],
  preview: {
    select: { title: 'title', count: 'items.length' },
    prepare: ({ title, count }) => ({ title: `FAQ — ${title ?? ''}`, subtitle: `${count ?? 0} vragen` }),
  },
});
