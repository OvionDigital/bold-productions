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
import type { PageSchema } from './structured-data';

export interface BuiltPage {
  slug: string;
  updatedAt?: string;
  meta: { title: string; description: string; ogImage?: string; noindex: boolean; schema?: PageSchema };
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
  if (!page.slug.startsWith('cases/')) return undefined;
  const hero = page.sections.find((s) => s.type === 'hero');
  if (!hero) return undefined;
  const src = hero.props.image.src;
  if (isRemoteImage(src)) return sanityImageUrl(src.src, { width: 1200, height: 630, format: 'jpg' });
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
        updatedAt: page.updatedAt,
        meta: {
          title: page.meta.title,
          description: page.meta.description,
          ogImage: await ogImageFor(page),
          noindex: Boolean(page.meta.noindex),
          schema: page.meta.schema,
        },
        accent: page.accent ?? 'orange',
        breadcrumbs: buildBreadcrumbs(page, bySlug),
        sections: page.sections,
      })),
    );
  })();
  return cache;
}
