/**
 * Pagina's en cases uit Sanity (documenttypes `page` en `caseStudy`, zie
 * studio/schemaTypes/documents/). Eén fetch voor alles tijdens de build, daarna
 * statische HTML via src/pages/[...slug].astro (src/lib/pages.ts).
 */
import { sanityClient, isSanityConfigured } from './client';
import { caseCardProjection, mapSections, sectionsProjection, toCase, type RawCase } from './sections';
import { portableTextToRich } from './portableText';
import { casePage } from '../cases';
import { caseCategories, caseIn, caseUrl } from '../../data/cases';
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
    _updatedAt,
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
    _updatedAt,
    metaTitle,
    metaDescription,
    "sections": sections[]${sectionsProjection}
  }
}`;

interface PageDoc {
  _updatedAt?: string;
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
  _updatedAt?: string;
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
      if (STATIC_PAGES.includes(doc.slug) || /^(events|business)\/cases\//.test(doc.slug)) {
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
      updatedAt: doc._updatedAt,
      meta: {
        title: doc.metaTitle || `${doc.title} | Bold Productions`,
        description: doc.metaDescription ?? '',
        ogImage: doc.ogImage ? `${doc.ogImage}?w=1200&h=630&fit=crop&fm=jpg` : undefined,
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
    // Eén pagina per soort (Events en/of Business); de tweede heeft een canonical naar de eerste
    for (const category of caseCategories(item)) {
      result.push({
        ...casePage(
          {
            ...item,
            meta: { title: doc.metaTitle || item.title, description: doc.metaDescription || item.intro },
            introText: portableTextToRich(doc.introText),
            sections: mapSections(doc.sections, caseUrl(caseIn(item, category))),
          },
          category,
        ),
        updatedAt: doc._updatedAt,
      });
    }
  }
  return result;
}
