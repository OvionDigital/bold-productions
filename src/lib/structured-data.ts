/**
 * Structured data (JSON-LD) per pagina, volgens de specificatie van de SEO-specialist (oktober 2026):
 * één <script> met één @graph, server-side, alle URL's op het productiedomein (Astro.site, ook op de
 * testomgeving) en elke `url` gelijk aan de canonical. Wat een pagina is volgt uit het URL-pad
 * (pageKindOf), de waarden uit bestaande velden: titel, metabeschrijving, h1 (hero), foto's, video.
 * - homepage: Organization (met de merken Bold Events en Bold Business), WebSite, WebPage
 * - overige pagina's: eigen pagina-node (isPartOf #website, breadcrumb) + BreadcrumbList, plus
 *   Service (dienstpagina), VideoObject (case met video) of Person (de Mike-pagina's)
 * - FAQPage uit de zichtbare vragen (Faq-sectie), waar die er is
 * - geen schema: juridische pagina's, 404, noindex-pagina's en kopieën met een andere canonical
 */
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { brands, founder, organization } from '../data/seo';
import { audiences, type Category } from '../data/taxonomy';
import { breadcrumbLabels, phoneDigits, type SiteContact } from '../data/navigation';
import { richToPlainText } from './rich';
import { getVimeoMeta, isoDuration, thumbnailAt } from './vimeo';
import { isRemoteImage, sanityImageUrl, type RemoteImage } from './sanity/image';
import type { PageSection } from './sections';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';

export type PageKind = 'home' | 'collection' | 'service' | 'case' | 'contact' | 'about' | 'profile' | 'webpage' | 'none';

/** Pagina's zonder schema (spec: juridisch; 404 is noindex) */
const WITHOUT_SCHEMA = new Set(['privacyverklaring', 'cookiebeleid', 'algemene-voorwaarden', '404']);

const isCategory = (value: string): value is Category => value === 'events' || value === 'business';

/** Soort pagina uit het URL-pad (tabel "Schema per paginatype" in de specificatie) */
export function pageKindOf(slug: string): PageKind {
  if (slug === 'home') return 'home';
  if (WITHOUT_SCHEMA.has(slug)) return 'none';
  const [root, second, third] = slug.split('/');
  // Losse pagina's buiten /events en /business: landingspagina's, sitemap
  if (!isCategory(root)) return 'webpage';
  if (!second) return 'collection';
  if (second === 'cases') return third ? 'case' : 'collection';
  if (second === 'contact' && !third) return 'contact';
  if (second === 'over-bold') return !third ? 'about' : third === founder.slug ? 'profile' : 'webpage';
  if (audiences[root].some((a) => a.value === second)) return third ? 'service' : 'collection';
  return 'webpage';
}

const PAGE_TYPES: Record<Exclude<PageKind, 'home' | 'none'>, string> = {
  collection: 'CollectionPage',
  service: 'WebPage',
  case: 'WebPage',
  contact: 'ContactPage',
  about: 'AboutPage',
  profile: 'ProfilePage',
  webpage: 'WebPage',
};

interface VideoInfo {
  name: string;
  description?: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  duration?: string;
}

/** Wat de structured data uit de secties van een pagina haalt */
export interface PageFacts {
  /** Tekst van de h1 (hero: titel + accentregel) */
  h1?: string;
  faq?: { question: string; answer: string }[];
  /** Eerste video met bediening (case), alleen als Vimeo een uploaddatum geeft */
  video?: VideoInfo;
  /** Portretfoto (Mike-pagina): eerste foto naast tekst */
  portrait?: string;
}

/** Absolute URL van een lokale of Sanity-afbeelding */
async function imageUrl(src: ImageMetadata | RemoteImage, site: URL, width: number): Promise<string> {
  if (isRemoteImage(src)) return sanityImageUrl(src.src, { width, format: 'jpg' });
  return new URL((await getImage({ src, width, format: 'jpg' })).src, site).href;
}

/** Alle Vimeo-video's met bediening, in volgorde: rich text `{ video }`, tijdlijnstap, videosectie.
 * De hero-video en de video naast tekst (TextMedia) zijn decoratief en tellen niet mee. */
function playableVideos(value: unknown, found: { id: string; hash?: string; title: string }[] = []) {
  if (Array.isArray(value)) value.forEach((item) => playableVideos(item, found));
  else if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    for (const [key, child] of Object.entries(value)) {
      if (key === 'video' && child && typeof (child as { id?: unknown }).id === 'string') found.push(child as (typeof found)[number]);
      else playableVideos(child, found);
    }
  }
  return found;
}

export async function pageFacts(kind: PageKind, sections: PageSection[], site: URL): Promise<PageFacts> {
  const hero = sections.find((s) => s.type === 'hero');
  const h1 = hero ? [hero.props.title, hero.props.titleAccent].join(' ').replace(/\s+/g, ' ').trim() : undefined;
  const faq = sections.flatMap((s) =>
    s.type === 'faq' ? s.props.items.map((item) => ({ question: item.question, answer: richToPlainText(item.answer) })) : [],
  );

  let video: VideoInfo | undefined;
  if (kind === 'case') {
    const first = playableVideos(sections.filter((s) => s.type !== 'hero' && s.type !== 'splitHero'))[0];
    const meta = first ? await getVimeoMeta(first.id, first.hash) : null;
    if (first && meta?.uploadDate && meta.thumbnail) {
      video = {
        name: meta.title || first.title,
        // Zonder omschrijving bij Vimeo: de metabeschrijving van de pagina (buildStructuredData)
        description: meta.description,
        thumbnailUrl: thumbnailAt(meta.thumbnail, 1280),
        uploadDate: meta.uploadDate,
        embedUrl: `https://player.vimeo.com/video/${first.id}${first.hash ? `?h=${first.hash}` : ''}`,
        ...(meta.duration ? { duration: isoDuration(meta.duration) } : {}),
      };
    }
  }

  let portrait: string | undefined;
  if (kind === 'profile') {
    const media = sections.find((s) => s.type === 'textMedia' && s.props.media.type === 'image');
    if (media?.type === 'textMedia' && media.props.media.type === 'image') portrait = await imageUrl(media.props.media.src, site, 800);
  }

  return { h1: h1 || undefined, faq: faq.length ? faq : undefined, video, portrait };
}

interface Context {
  site: URL;
  slug: string;
  /** Absolute canonical van deze pagina */
  canonical: string;
  title: string;
  description: string;
  /** Naam van de pagina in het kruimelpad */
  name: string;
  /** Zichtbaar kruimelpad (Breadcrumbs.astro); alleen stappen naar indexeerbare pagina's */
  breadcrumbs?: Crumb[];
  facts: PageFacts;
  /** Absolute URL van de hoofdfoto (case: de casefoto) */
  primaryImage?: string;
  /** Homepage: gegevens van de organisatie */
  organization?: { logoUrl: string; contact: SiteContact; socials: readonly { href: string }[] };
}

type Node = Record<string, unknown>;

export function buildStructuredData(ctx: Context): Node | undefined {
  const kind = pageKindOf(ctx.slug);
  if (kind === 'none') return undefined;

  const base = ctx.site.origin;
  const url = (path: string) => new URL(path, ctx.site).href;
  const orgId = { '@id': `${base}/#organization` };
  const websiteId = { '@id': `${base}/#website` };
  const brandId = (category: Category) => ({ '@id': `${base}/#brand-${category}` });
  const pageId = { '@id': `${ctx.canonical}#webpage` };
  const breadcrumbId = { '@id': `${ctx.canonical}#breadcrumb` };
  const { facts } = ctx;
  const graph: Node[] = [];

  const faqPage = (): Node[] =>
    facts.faq
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${ctx.canonical}#faq`,
            mainEntity: facts.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
          },
        ]
      : [];

  if (kind === 'home') {
    const org = ctx.organization;
    graph.push(
      {
        '@type': 'Organization',
        ...orgId,
        name: organization.name,
        url: url('/'),
        brand: [brandId('events'), brandId('business')],
        ...(org
          ? {
              logo: { '@type': 'ImageObject', url: org.logoUrl },
              email: org.contact.email,
              telephone: phoneDigits(org.contact.phone),
              identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: org.contact.kvk },
              address: {
                '@type': 'PostalAddress',
                streetAddress: org.contact.street,
                postalCode: org.contact.postalCode,
                addressLocality: org.contact.city,
                addressCountry: 'NL',
              },
              sameAs: org.socials.map((social) => social.href),
            }
          : {}),
      },
      ...(Object.entries(brands) as [Category, (typeof brands)[Category]][]).map(([category, brand]) => ({
        '@type': 'Brand',
        ...brandId(category),
        name: brand.name,
        url: url(brand.path),
      })),
      { '@type': 'WebSite', ...websiteId, url: url('/'), name: organization.name, inLanguage: 'nl-NL', publisher: orgId },
      {
        '@type': 'WebPage',
        ...pageId,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        inLanguage: 'nl-NL',
        isPartOf: websiteId,
        about: orgId,
      },
      ...faqPage(),
    );
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  const category = ctx.slug.split('/')[0];
  const video = kind === 'case' ? facts.video : undefined;
  const mainEntity =
    kind === 'service'
      ? { '@id': `${ctx.canonical}#service` }
      : kind === 'profile'
        ? { '@id': `${base}/#${founder.slug}` }
        : video
          ? { '@id': `${ctx.canonical}#video` }
          : undefined;

  graph.push({
    '@type': PAGE_TYPES[kind],
    ...pageId,
    url: ctx.canonical,
    name: ctx.title,
    ...(ctx.description ? { description: ctx.description } : {}),
    inLanguage: 'nl-NL',
    isPartOf: websiteId,
    breadcrumb: breadcrumbId,
    ...(kind === 'about' || kind === 'contact' ? { about: orgId } : {}),
    ...(kind === 'case' && ctx.primaryImage ? { primaryImageOfPage: { '@type': 'ImageObject', url: ctx.primaryImage } } : {}),
    ...(mainEntity ? { mainEntity } : {}),
  });

  if (kind === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${ctx.canonical}#service`,
      name: facts.h1 || ctx.name,
      ...(ctx.description ? { description: ctx.description } : {}),
      url: ctx.canonical,
      provider: orgId,
      ...(isCategory(category) ? { brand: brandId(category) } : {}),
    });
  }

  if (video) {
    graph.push({ '@type': 'VideoObject', '@id': `${ctx.canonical}#video`, ...video, description: video.description || ctx.description || video.name });
  }

  if (kind === 'profile') {
    graph.push({
      '@type': 'Person',
      '@id': `${base}/#${founder.slug}`,
      name: founder.name,
      jobTitle: founder.jobTitle,
      ...(facts.portrait ? { image: facts.portrait } : {}),
      worksFor: orgId,
      sameAs: founder.sameAs,
    });
  }

  // Kruimelpad volgens de URL: Home › Events/Business › … › deze pagina (laatste zonder item).
  // Het zichtbare kruimelpad begint bij de home van het deel; op /events en /business is het leeg.
  const visible = ctx.breadcrumbs ?? [];
  const steps: Crumb[] = [
    { label: breadcrumbLabels.home, href: '/' },
    ...visible.slice(0, -1).filter((crumb) => crumb.href && crumb.href !== '/'),
    { label: ctx.name },
  ];
  graph.push({
    '@type': 'BreadcrumbList',
    ...breadcrumbId,
    itemListElement: steps.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.label,
      ...(step.href && index < steps.length - 1 ? { item: url(step.href) } : {}),
    })),
  });

  graph.push(...faqPage());
  return { '@context': 'https://schema.org', '@graph': graph };
}
