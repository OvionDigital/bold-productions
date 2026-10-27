/**
 * Pagina-opbouw, los van waar de inhoud vandaan komt: een pagina is een lijst secties,
 * elk met het type van een sectiecomponent en precies diens props. Lokale data
 * (src/data/pages) en Sanity (lib/sanity/sections.ts) leveren allebei deze vorm;
 * components/sections/PageSections.astro rendert hem.
 *
 * Nieuwe sectie? Type hier, regel in PageSections.astro, schema + mapper voor Sanity
 * (studio/schemaTypes/sections, lib/sanity/sections.ts) en een voorbeeld op /styleguide.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { SplitHeroProps } from '../components/sections/SplitHero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { IntroHighlightProps } from '../components/sections/IntroHighlight.astro';
import type { TimelineProps } from '../components/sections/Timeline.astro';
import type { TestimonialsProps } from '../components/sections/Testimonials.astro';
import type { PolaroidStackProps } from '../components/sections/PolaroidStack.astro';
import type { TextMediaProps } from '../components/sections/TextMedia.astro';
import type { CaseSpotlightProps } from '../components/sections/CaseSpotlight.astro';
import type { ImageFeatureProps } from '../components/sections/ImageFeature.astro';
import type { ServiceTilesProps } from '../components/sections/ServiceTiles.astro';
import type { FaqProps } from '../components/sections/Faq.astro';
import type { RichTextSectionProps } from '../components/sections/RichTextSection.astro';
import type { FullWidthImageProps } from '../components/sections/FullWidthImage.astro';
import type { VideoFeatureProps } from '../components/sections/VideoFeature.astro';
import type { ContactSectionProps } from '../components/sections/ContactSection.astro';
import type { MapSectionProps } from '../components/sections/MapSection.astro';
import type { CaseGridProps } from '../components/sections/CaseGrid.astro';
import type { CaseFactsProps } from '../components/sections/CaseFacts.astro';
import type { LinkGroupsProps } from '../components/sections/LinkGroups.astro';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import { breadcrumbLabels } from '../data/navigation';
import type { Accent } from '../components/ui/Button.astro';
import type { ImageMetadata } from 'astro';

/** Welk formulier (src/data/forms.ts) en eventueel een andere placeholder voor het berichtveld */
export interface FormChoice {
  name: 'contact' | 'offerte' | 'offerte-business' | 'trouwfilm';
  messagePlaceholder?: string;
}

export type PageSection = (
  | { type: 'hero'; props: HeroProps }
  /** Homepage: keuze tussen Events en Business */
  | { type: 'splitHero'; props: SplitHeroProps }
  | { type: 'breadcrumbs' }
  | { type: 'logoMarquee'; props: LogoMarqueeProps }
  | { type: 'introHighlight'; props: IntroHighlightProps }
  | { type: 'timeline'; props: TimelineProps }
  | { type: 'testimonials'; props: TestimonialsProps }
  | { type: 'polaroidStack'; props: PolaroidStackProps }
  /** Met `form`: het formulier vervangt de tekstkolom */
  | { type: 'textMedia'; props: TextMediaProps; form?: FormChoice }
  | { type: 'caseSpotlight'; props: CaseSpotlightProps }
  | { type: 'imageFeature'; props: ImageFeatureProps }
  /** Ook teamleden (variant 'team') */
  | { type: 'serviceTiles'; props: ServiceTilesProps }
  | { type: 'faq'; props: FaqProps }
  | { type: 'richText'; props: RichTextSectionProps }
  | { type: 'fullWidthImage'; props: FullWidthImageProps }
  | { type: 'videoFeature'; props: VideoFeatureProps }
  | { type: 'contactSection'; props: ContactSectionProps; form: FormChoice }
  | { type: 'map'; props: MapSectionProps }
  | { type: 'caseGrid'; props: CaseGridProps }
  | { type: 'caseFacts'; props: CaseFactsProps }
  | { type: 'linkGroups'; props: LinkGroupsProps }
) & { key?: string };

export type PageSectionType = PageSection['type'];

/** Eén pagina: naam (kruimelpad), URL-pad zonder slashes aan begin/eind, SEO en secties. */
export interface PageData {
  /** Bijv. 'events/organisatoren/aftermovie' of 'events/cases/drift'; 'home' = de homepage (/) */
  slug: string;
  /** Naam van de pagina (kruimelpad, intern) */
  title: string;
  /** Afwijkende naam in het kruimelpad */
  breadcrumbTitle?: string;
  accent?: Accent;
  /** Laatste wijziging (ISO), voor sitemap.xml; uit Sanity */
  updatedAt?: string;
  meta: {
    title: string;
    description: string;
    /** Deelafbeelding; leeg = vaste Bold-afbeelding (cases: de casefoto) */
    ogImage?: string | ImageMetadata;
    noindex?: boolean;
    /** Pad van de hoofdversie als deze pagina een kopie is (case in een tweede soort): canonical, niet in de sitemap */
    canonical?: string;
  };
  sections: PageSection[];
}

/**
 * Kruimelpad: home › tussenliggende pagina's (met link als ze bestaan) › deze pagina.
 * De eerste stap is de home van dit deel van de site (het home-icoon): /events of /business,
 * anders de homepage. Zo leidt het kruimelpad niet terug naar de keuze Events/Business.
 * Op /events en /business zelf: geen kruimelpad (leeg).
 */
export function buildBreadcrumbs(page: Pick<PageData, 'slug' | 'title' | 'breadcrumbTitle'>, all: Map<string, Pick<PageData, 'title' | 'breadcrumbTitle'>>): Crumb[] {
  const segments = page.slug.split('/');
  const root = segments[0] === 'events' || segments[0] === 'business' ? segments[0] : undefined;
  if (root && segments.length === 1) return [];
  const rootPage = root ? all.get(root) : undefined;
  const home: Crumb = root ? { label: rootPage?.breadcrumbTitle || rootPage?.title || root, href: `/${root}` } : { label: breadcrumbLabels.home, href: '/' };
  const parents = segments.slice(0, -1).map((segment, i) => {
    const path = segments.slice(0, i + 1).join('/');
    const parent = all.get(path);
    if (parent) return { label: parent.breadcrumbTitle || parent.title, href: `/${path}` };
    const words = segment.replace(/-/g, ' ');
    return { label: words.charAt(0).toUpperCase() + words.slice(1) };
  });
  return [home, ...parents.slice(root ? 1 : 0), { label: page.breadcrumbTitle || page.title }];
}
