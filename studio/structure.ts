import type { StructureResolver } from 'sanity/structure';

/**
 * "Homepage (/)" is de pagina met URL-pad "home" (keuze Events/Business, uit secties).
 * "Events-homepage (/events)" is een singleton met vaste onderdelen (de vroegere homepage). "Pagina's" zijn vrij op te
 * bouwen uit secties (src/pages/[...slug].astro). Testimonials, klantlogo's en cases
 * zijn herbruikbare inhoud die pagina's per sectie kiezen.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bold Productions')
    .items([
      S.listItem()
        .title('Homepage (/)')
        .id('page-home')
        .child(S.document().schemaType('page').documentId('page-home')),
      S.listItem()
        .title('Events-homepage (/events)')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.documentTypeListItem('page')
        .title("Pagina's")
        .child(S.documentTypeList('page').title("Pagina's").defaultOrdering([{ field: 'slug.current', direction: 'asc' }])),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('clientLogo').title("Klantlogo's"),
      S.documentTypeListItem('caseStudy')
        .title('Cases')
        .child(S.documentTypeList('caseStudy').title('Cases').defaultOrdering([{ field: 'sortOrder', direction: 'asc' }])),
      S.documentTypeListItem('teamMember')
        .title('Team')
        .child(S.documentTypeList('teamMember').title('Team').defaultOrdering([{ field: 'sortOrder', direction: 'asc' }])),
    ]);
