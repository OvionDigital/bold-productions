import type { StructureResolver } from 'sanity/structure';

/**
 * "Pagina's": alle pagina's, ook de homepage (URL-pad "home" = /) en /events en /business;
 * die drie staan bovenaan (verborgen veld listOrder), de rest op URL-pad. Elke pagina is
 * vrij op te bouwen uit secties (src/pages/[...slug].astro). Testimonials, klantlogo's,
 * cases en team zijn herbruikbare inhoud die pagina's per sectie kiezen. "Menu, footer & contact"
 * is een singleton (menu's per deel van de site, social media en contactgegevens).
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bold Productions')
    .items([
      S.documentTypeListItem('page')
        .title("Pagina's")
        .child(
          S.documentTypeList('page')
            .title("Pagina's")
            .defaultOrdering([
              { field: 'listOrder', direction: 'asc' },
              { field: 'slug.current', direction: 'asc' },
            ]),
        ),
      S.listItem()
        .title('Menu, footer & contact')
        .id('siteNavigation')
        .child(S.document().schemaType('siteNavigation').documentId('siteNavigation')),
      S.divider(),
      S.documentTypeListItem('caseStudy')
        .title('Cases')
        .child(S.documentTypeList('caseStudy').title('Cases').defaultOrdering([{ field: 'sortOrder', direction: 'asc' }])),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('clientLogo').title("Klantlogo's"),
      S.documentTypeListItem('teamMember')
        .title('Team')
        .child(S.documentTypeList('teamMember').title('Team').defaultOrdering([{ field: 'sortOrder', direction: 'asc' }])),
    ]);
