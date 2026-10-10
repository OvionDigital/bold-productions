/**
 * Pagina's en cases uit Sanity (documenttypes `page` en `caseStudy`, zie
 * studio/schemaTypes/documents/). Eén fetch voor alles tijdens de build, daarna
 * statische HTML via src/pages/[...slug].astro (src/lib/pages.ts).
 */
import { sanityClient, isSanityConfigured } from './client';
import { caseCardProjection, mapSections, sectionsProjection, toCase, type RawCase } from './sections';
import { portableTextToRich } from './portableText';
import { casePage } from '../cases';
import type { Accent } from '../../components/ui/Button.astro';
import type { PageData } from '../sections';

/**
 * Paden die een vaste pagina in src/pages/ hebben; een Sanity-pagina met zo'n pad wordt
 * niet gebouwd (Studio weigert ze ook, zie RESERVED_SLUGS in page.ts — gelijk houden).
 */
const STATIC_PAGES = ['styleguide'];

const QUERY = `{
  "pages": *[_type == "page" && defined(slug.current)] | order(slug.current asc) {
    title,
    "slug": slug.current,
    breadcrumbTitle,
    accent,
    metaTitle,
    metaDescription,
    noindex,
    "ogImage": ogImage.asset->url,
    "sections": sections[]${sectionsProjection}
  },
  "cases": *[_type == "caseStudy" && defined(slug.current)] {
    ...${caseCardProjection},
    introText,
    metaTitle,
    metaDescription,
    "sections": sections[]${sectionsProjection}
  }
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

interface CaseDoc extends RawCase {
  introText?: unknown;
  metaTitle?: string;
  metaDescription?: string;
  sections?: Parameters<typeof mapSections>[0];
}

/** `null` als Sanity niet geconfigureerd is: dan gebruikt lib/pages.ts src/data. */
export async function getCmsPages(): Promise<PageData[] | null> {
  if (!isSanityConfigured || !sanityClient) return null;
  const { pages, cases } = await sanityClient.fetch<{ pages: PageDoc[]; cases: CaseDoc[] }>(QUERY);

  const result: PageData[] = pages
    .filter((doc) => {
      if (STATIC_PAGES.includes(doc.slug) || doc.slug.startsWith('cases/')) {
        console.warn(`[sanity] Pagina '/${doc.slug}' overgeslagen: dat pad is een vaste pagina of een case.`);
        return false;
      }
      return true;
    })
    .map((doc) => ({
      slug: doc.slug,
      title: doc.title,
      breadcrumbTitle: doc.breadcrumbTitle || undefined,
      accent: doc.accent,
      meta: {
        title: doc.metaTitle || `${doc.title} | Bold Productions`,
        description: doc.metaDescription ?? '',
        ogImage: doc.ogImage,
        noindex: Boolean(doc.noindex),
      },
      sections: mapSections(doc.sections, `/${doc.slug}`),
    }));

  for (const doc of cases) {
    const item = toCase(doc);
    if (!item) {
      console.warn(`[sanity] Case '${doc.slug ?? doc.title}' overgeslagen: titel, URL-pad of foto ontbreekt.`);
      continue;
    }
    result.push(
      casePage({
        ...item,
        meta: { title: doc.metaTitle || item.title, description: doc.metaDescription || item.intro },
        introText: portableTextToRich(doc.introText),
        sections: mapSections(doc.sections, `/cases/${item.slug}`),
      }),
    );
  }
  return result;
}
