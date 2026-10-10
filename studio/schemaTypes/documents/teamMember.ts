import { defineType, defineField } from 'sanity';

/** Teamlid ("De mensen achter Bold"). Pagina's kiezen teamleden in het blok "Team". */
export const teamMember = defineType({
  name: 'teamMember',
  title: 'Teamlid',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Naam', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Omschrijving', type: 'text', rows: 2, description: 'Bijv. "Brabantse gezelligheid". Enter = nieuwe regel.' }),
    defineField({ name: 'image', title: 'Foto (staand)', type: 'imageWithAlt', validation: (r) => r.required() }),
    defineField({
      name: 'video',
      title: 'Video bij hover (optioneel)',
      type: 'file',
      options: { accept: 'video/webm,video/mp4' },
      description: 'Korte, stille video (WebM of MP4, liefst onder 2 MB). Speelt af als je over de foto beweegt.',
    }),
    defineField({ name: 'sortOrder', title: 'Volgorde', type: 'number', description: 'Laag = eerst.' }),
  ],
  orderings: [{ title: 'Volgorde', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
});
