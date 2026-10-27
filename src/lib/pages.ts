/**
 * Alle pagina's (homepage = slug 'home', de rest via src/pages/[...slug].astro): uit Sanity
 * als dat geconfigureerd en gevuld is, anders uit src/data (pages + cases). Beide
 * leveren PageData (lib/sections.ts); hier komen kruimelpad en deelafbeelding erbij.
 */
import { getImage } from 'astro:assets';
import { pages as localPages } from '../data/pages';
import { cases as localCases } from '../data/cases';
import { casePages } from './cases';
import { buildBreadcrumbs, type PageData, type PageSection } from './sections';
import { getCmsPages } from './sanity/pages';
import { isRemoteImage, sanityImageUrl } from './sanity/image';
import { isPreview } from './preview';
import { sitemapGroups } from './sitemap';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import type { Accent } from '../components/ui/Button.astro';

export interface BuiltPage {
  slug: string;
  title: string;
  updatedAt?: string;
  meta: { title: string; description: string; ogImage?: string; noindex: boolean; canonical?: string };
  accent: Accent;
  breadcrumbs: Crumb[];
  sections: PageSection[];
}

/**
 * Deelafbeelding (1200×630): eigen keuze, bij cases de casefoto (hero), anders leeg =
 * de vaste Bold-afbeelding uit BaseLayout. Zelfde verdeling als live.
 */
async function ogImageFor(page: PageData): Promise<string | undefined> {
  const own = page.meta.ogImage;
  if (typeof own === 'string') return own;
  if (own) return (await getImage({ src: own, width: 1200, height: 630, fit: 'cover', format: 'jpg' })).src;
  if (!/^(events|business)\/cases\//.test(page.slug)) return undefined;
  const hero = page.sections.find((s) => s.type === 'hero');
  if (!hero) return undefined;
  const src = hero.props.image.src;
  if (isRemoteImage(src)) return sanityImageUrl(src.src, { width: 1200, height: 630, format: 'jpg' });
  const image = await getImage({ src, width: 1200, height: 630, fit: 'cover', format: 'jpg' });
  return image.src;
}

/** Slug van de homepage (/): src/pages/index.astro, niet /home */
export const HOME_SLUG = 'home';
/** De Events-homepage (/events): een gewone pagina, maar altijd aanwezig (terugval src/data) */
export const EVENTS_SLUG = 'events';

let cache: Promise<BuiltPage[]> | undefined;

/** Eén keer per build; in de preview per verzoek (concepten moeten meteen zichtbaar zijn). */
export function getAllPages(): Promise<BuiltPage[]> {
  if (isPreview) return buildAllPages();
  cache ??= buildAllPages();
  return cache;
}

async function buildAllPages(): Promise<BuiltPage[]> {
  const cms = await getCmsPages();
  const source: PageData[] = cms?.length ? cms : [...localPages, ...localCases.flatMap(casePages)];
  // Homepage of /events nog niet in Sanity: die uit src/data
  for (const slug of [HOME_SLUG, EVENTS_SLUG]) {
    if (!source.some((p) => p.slug === slug)) source.push(localPages.find((p) => p.slug === slug)!);
  }
  const bySlug = new Map<string, Pick<PageData, 'title' | 'breadcrumbTitle'>>(source.map((p) => [p.slug, p]));
  const built: BuiltPage[] = await Promise.all(
    source.map(async (page) => ({
      slug: page.slug,
      title: page.breadcrumbTitle || page.title,
      updatedAt: page.updatedAt,
      meta: {
        title: page.meta.title,
        description: page.meta.description,
        ogImage: await ogImageFor(page),
        noindex: Boolean(page.meta.noindex),
        canonical: page.meta.canonical,
      },
      accent: page.accent ?? 'orange',
      breadcrumbs: buildBreadcrumbs(page, bySlug),
      sections: page.sections,
    })),
  );
  // Sitemap-pagina: linkoverzicht met `auto: 'site'` krijgt alle pagina's (altijd actueel)
  const groups = sitemapGroups(built.map((page) => ({ slug: page.slug, title: page.title, noindex: page.meta.noindex || Boolean(page.meta.canonical) })));
  for (const page of built) {
    page.sections = page.sections.map((section) =>
      section.type === 'linkGroups' && section.props.auto === 'site' ? { ...section, props: { ...section.props, groups } } : section,
    );
  }
  return built;
}

/** Alle pagina's van src/pages/[...slug].astro (zonder de homepage) */
export const getRoutedPages = async () => (await getAllPages()).filter((page) => page.slug !== HOME_SLUG);

export const getHomePage = async () => (await getAllPages()).find((page) => page.slug === HOME_SLUG)!;
