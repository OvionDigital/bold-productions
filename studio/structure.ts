import type { StructureResolver } from 'sanity/structure';

/**
 * "Homepage" is een singleton: één document, geen lijst. Testimonials en
 * klantlogo's blijven gewone lijsten (herbruikbaar over meerdere pagina's).
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bold Productions')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('clientLogo').title("Klantlogo's"),
    ]);
