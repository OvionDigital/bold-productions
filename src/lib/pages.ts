/**
 * Alle pagina's van src/pages/[...slug].astro (alles behalve de homepage): uit Sanity
 * als dat geconfigureerd en gevuld is, anders uit src/data (pages + cases). Beide
 * leveren PageData (lib/sections.ts); hier komen kruimelpad en deelafbeelding erbij.
 */
import { getImage } from 'astro:assets';
import { pages as localPages } from '../data/pages';
import { cases as localCases } from '../data/cases';
import { casePage } from './cases';
import { buildBreadcrumbs, type PageData, type PageSection } from './sections';
import { getCmsPages } from './sanity/pages';
import { isRemoteImage, sanityImageUrl } from './sanity/image';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import type { Accent } from '../components/ui/Button.astro';

export interface BuiltPage {
  slug: string;
  meta: { title: string; description: string; ogImage?: string; noindex: boolean };
  accent: Accent;
  breadcrumbs: Crumb[];
  sections: PageSection[];
}

/** Deelafbeelding: eigen keuze, anders de hero-foto (1200×630). */
async function ogImageFor(page: PageData): Promise<string | undefined> {
  if (page.meta.ogImage) return page.meta.ogImage;
  const hero = page.sections.find((s) => s.type === 'hero');
  if (!hero) return undefined;
  const src = hero.props.image.src;
  if (isRemoteImage(src)) return sanityImageUrl(src.src, { width: 1200, height: 630 });
  const image = await getImage({ src, width: 1200, height: 630, fit: 'cover', format: 'jpg' });
  return image.src;
}

let cache: Promise<BuiltPage[]> | undefined;

export function getAllPages(): Promise<BuiltPage[]> {
  cache ??= (async () => {
    const cms = await getCmsPages();
    const source: PageData[] = cms?.length ? cms : [...localPages, ...localCases.map(casePage)];
    const bySlug = new Map(source.map((p) => [p.slug, p]));
    return Promise.all(
      source.map(async (page) => ({
        slug: page.slug,
        meta: {
          title: page.meta.title,
          description: page.meta.description,
          ogImage: await ogImageFor(page),
          noindex: Boolean(page.meta.noindex),
        },
        accent: page.accent ?? 'orange',
        breadcrumbs: buildBreadcrumbs(page, bySlug),
        sections: page.sections,
      })),
    );
  })();
  return cache;
}
