import { defineType, defineField } from 'sanity';

/** Vimeo-video (hero-achtergrond of TextMedia). ID en hash staan in de Vimeo-link: vimeo.com/<id>/<hash>. */
export const vimeoVideo = defineType({
  name: 'vimeoVideo',
  title: 'Vimeo-video',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Vimeo video-ID',
      type: 'string',
      description: 'Het nummer uit de Vimeo-link, bijv. 1074314358 uit vimeo.com/1074314358/2fa6fd18b8.',
      validation: (r) => r.required().regex(/^\d+$/, { name: 'cijfers' }),
    }),
    defineField({
      name: 'hash',
      title: 'Vimeo unlisted-hash (optioneel)',
      type: 'string',
      description: 'Het deel na het nummer in de link (alleen bij niet-openbare video’s), bijv. 2fa6fd18b8.',
    }),
    defineField({
      name: 'title',
      title: 'Omschrijving (toegankelijkheid)',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
});
