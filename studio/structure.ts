import type { StructureResolver } from 'sanity/structure';

/**
 * "Homepage" is een singleton: één document, geen lijst. "Pagina's" zijn vrij op te
 * bouwen uit secties (src/pages/[...slug].astro). Testimonials, klantlogo's en cases
 * zijn herbruikbare inhoud die pagina's per sectie kiezen.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bold Productions')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.documentTypeListItem('page')
        .title("Pagina's")
        .child(S.documentTypeList('page').title("Pagina's").defaultOrdering([{ field: 'slug.current', direction: 'asc' }])),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('clientLogo').title("Klantlogo's"),
      S.documentTypeListItem('caseStudy').title('Cases'),
    ]);
