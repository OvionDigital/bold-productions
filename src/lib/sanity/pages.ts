/**
 * Pagina's die de klant zelf in Sanity opbouwt (documenttype `page`, zie
 * studio/schemaTypes/documents/page.ts). Gebouwd door src/pages/[...slug].astro:
 * één fetch voor alle pagina's tijdens de build, daarna statische HTML.
 */
import { sanityClient, isSanityConfigured } from './client';
import { isRemoteImage, sanityImageUrl } from './image';
import { mapSections, sectionsProjection, type PageSection } from './sections';
import type { Accent } from '../../components/ui/Button.astro';
import type { Crumb } from '../../components/layout/Breadcrumbs.astro';

/**
 * Paden die al een vaste pagina in src/pages/ hebben; een Sanity-pagina met zo'n pad
 * wordt niet gebouwd (Studio weigert ze ook, zie RESERVED_SLUGS in page.ts — gelijk houden).
 * Waarde = naam in het kruimelpad van een subpagina (bijv. /events/aftermovie).
 */
const STATIC_PAGES: Record<string, string> = {
  events: 'Events',
  styleguide: 'Styleguide',
};

const QUERY = `*[_type == "page" && defined(slug.current)] | order(slug.current asc) {
  title,
  "slug": slug.current,
  breadcrumbTitle,
  accent,
  metaTitle,
  metaDescription,
  noindex,
  "ogImage": ogImage.asset->url,
  "sections": sections[]${sectionsProjection}
}`;

interface PageDoc {
  title: string;
  slug: string;
  breadcrumbTitle?: string;
  accent?: Accent;
  metaTitle?: string;
  metaDescription?: string;
  noindex?: boolean;
  ogImage?: string;
  sections?: Parameters<typeof mapSections>[0];
}

export interface CmsPage {
  slug: string;
  meta: { title: string; description: string; ogImage?: string; noindex: boolean };
  accent: Accent;
  breadcrumbs: Crumb[];
  sections: PageSection[];
}

const fallbackLabel = (segment: string) => {
  const words = segment.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
};

/** Home › tussenliggende pagina's (met link als ze bestaan) › deze pagina. */
function buildBreadcrumbs(doc: PageDoc, bySlug: Map<string, PageDoc>): Crumb[] {
  const segments = doc.slug.split('/');
  const parents = segments.slice(0, -1).map((segment, i) => {
    const path = segments.slice(0, i + 1).join('/');
    const parent = bySlug.get(path);
    if (parent) return { label: parent.breadcrumbTitle || parent.title, href: `/${path}` };
    if (path in STATIC_PAGES) return { label: STATIC_PAGES[path], href: `/${path}` };
    return { label: fallbackLabel(segment) };
  });
  return [...parents, { label: doc.breadcrumbTitle || doc.title }];
}

/** Deelafbeelding: eigen keuze, anders de hero-foto (1200×630 via Sanity's CDN). */
function ogImageFor(doc: PageDoc, sections: PageSection[]): string | undefined {
  const heroSrc = sections.find((s) => s.type === 'hero')?.props.image.src;
  const base = doc.ogImage ?? (heroSrc && isRemoteImage(heroSrc) ? heroSrc.src : undefined);
  return base ? sanityImageUrl(base, { width: 1200, height: 630 }) : undefined;
}

/** Leeg als Sanity niet geconfigureerd is: dan bouwt [...slug].astro simpelweg geen pagina's. */
export async function getCmsPages(): Promise<CmsPage[]> {
  if (!isSanityConfigured || !sanityClient) return [];
  const docs = await sanityClient.fetch<PageDoc[]>(QUERY);
  const bySlug = new Map(docs.map((d) => [d.slug, d]));

  return docs
    .filter((doc) => {
      if (doc.slug in STATIC_PAGES) {
        console.warn(`[sanity] Pagina '/${doc.slug}' overgeslagen: dat pad is al een vaste pagina in src/pages/.`);
        return false;
      }
      return true;
    })
    .map((doc) => {
      const sections = mapSections(doc.sections, `/${doc.slug}`);
      return {
        slug: doc.slug,
        meta: {
          title: doc.metaTitle || `${doc.title} | Bold Productions`,
          description: doc.metaDescription ?? '',
          ogImage: ogImageFor(doc, sections),
          noindex: Boolean(doc.noindex),
        },
        accent: doc.accent ?? 'orange',
        breadcrumbs: buildBreadcrumbs(doc, bySlug),
        sections,
      };
    });
}
