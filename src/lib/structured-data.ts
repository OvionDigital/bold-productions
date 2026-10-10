/**
 * Structured data (JSON-LD) per pagina, gelijk aan de opbouw op de live site:
 * - altijd: Person (Mike, oprichter) + ProfessionalService (de organisatie)
 * - per pagina via `meta.schema`: Service (+ OfferCatalog), WebPage, ContactPage of profiel (Mike)
 * - homepage: WebSite + Reviews
 * - nieuw t.o.v. live: BreadcrumbList op elke pagina met kruimelpad
 * FAQPage staat bij de FAQ-sectie zelf (Faq.astro), gegenereerd uit de zichtbare vragen.
 * Vaste gegevens: src/data/seo.ts.
 */
import { areaServed, contactPoint, founder, organization } from '../data/seo';

export type PageSchema =
  /** Dienstpagina. name/description: leeg = paginatitel/metabeschrijving */
  | { type: 'service'; serviceType: string; name?: string; description?: string; catalog?: { name: string; items: string[] } }
  /** Gewone pagina over de organisatie: als hoofdonderwerp (mainEntity) of als uitgever (publisher) */
  | { type: 'webpage'; relation?: 'mainEntity' | 'publisher' }
  /** Contactpagina met contactpunt */
  | { type: 'contact' }
  /** Profielpagina van de oprichter (/over/mike) */
  | { type: 'profile' };

export interface Review {
  body: string;
  author: string;
  authorType: 'Person' | 'Organization';
}

interface Context {
  site: URL;
  /** Pad van de pagina, bijv. '/events' of '/' */
  path: string;
  title: string;
  description: string;
  logoUrl: string;
  schema?: PageSchema;
  /** Kruimelpad zonder Home (zoals Breadcrumbs.astro); laatste = huidige pagina */
  breadcrumbs?: { label: string; href?: string }[];
  homeLabel?: string;
  /** Alleen op de homepage */
  website?: boolean;
  reviews?: Review[];
}

type Node = Record<string, unknown>;

export function buildStructuredData(ctx: Context): Node {
  const base = ctx.site.origin;
  const url = (path: string) => (path === '/' ? base : `${base}${path}`);
  const pageUrl = url(ctx.path);
  const orgId = { '@id': `${base}/#organization` };
  const founderId = { '@id': `${base}/#mikeampting` };
  const s = ctx.schema;

  const person: Node = {
    '@type': 'Person',
    ...founderId,
    name: founder.name,
    jobTitle: founder.jobTitle,
    ...(s?.type === 'profile' ? { description: founder.description } : {}),
    url: url(founder.path),
    worksFor: orgId,
    ...(s?.type === 'profile' ? { knowsAbout: founder.knowsAbout } : {}),
    sameAs: founder.sameAs,
  };

  const org: Node = {
    '@type': 'ProfessionalService',
    ...orgId,
    name: organization.name,
    founder: founderId,
    image: ctx.logoUrl,
    logo: ctx.logoUrl,
    url: base,
    telephone: organization.telephone,
    priceRange: organization.priceRange,
    address: { '@type': 'PostalAddress', ...organization.address },
    geo: { '@type': 'GeoCoordinates', ...organization.geo },
    sameAs: organization.sameAs,
  };

  const graph: Node[] = [];
  if (ctx.website) graph.push({ '@type': 'WebSite', '@id': `${base}/#website`, url: base, name: organization.name, inLanguage: 'nl-NL', publisher: orgId });
  graph.push(person, org);

  if (s?.type === 'service') {
    graph.push({
      '@type': 'Service',
      name: s.name || ctx.title,
      serviceType: s.serviceType,
      description: s.description || ctx.description,
      url: pageUrl,
      provider: orgId,
      author: founderId,
      areaServed: { '@type': 'Country', name: areaServed },
      ...(s.catalog?.items.length
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: s.catalog.name,
              itemListElement: s.catalog.items.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
            },
          }
        : {}),
    });
  } else if (s?.type === 'webpage') {
    graph.push({
      '@type': 'WebPage',
      name: ctx.title,
      description: ctx.description,
      url: pageUrl,
      [s.relation === 'publisher' ? 'publisher' : 'mainEntity']: orgId,
    });
  } else if (s?.type === 'contact') {
    graph.push({
      '@type': 'ContactPage',
      name: ctx.title,
      description: ctx.description,
      url: pageUrl,
      mainEntity: orgId,
      contactPoint: { '@type': 'ContactPoint', ...contactPoint },
    });
  } else if (s?.type === 'profile') {
    graph.push({ '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: ctx.title, description: ctx.description, mainEntity: founderId });
  }

  for (const review of ctx.reviews ?? []) {
    graph.push({
      '@type': 'Review',
      itemReviewed: orgId,
      author: { '@type': review.authorType, name: review.author },
      reviewBody: review.body,
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
    });
  }

  if (ctx.breadcrumbs?.length) {
    const items = [{ label: ctx.homeLabel ?? 'Home', href: '/' }, ...ctx.breadcrumbs];
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        // Laatste stap = deze pagina; tussenstappen zonder eigen pagina krijgen geen item
        ...(index === items.length - 1 ? { item: pageUrl } : item.href ? { item: url(item.href) } : {}),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
