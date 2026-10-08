/**
 * Sectieblokken uit Sanity (studio/schemaTypes/sections/) → props van de bestaande
 * sectiecomponenten. Eén GROQ-projectie voor de hele `sections`-array en één mapper
 * per bloktype. PageSections.astro rendert het resultaat.
 *
 * Nieuw blok? Schema in studio/schemaTypes/sections/, projectie + mapper hier, en
 * een regel in PageSections.astro.
 *
 * Robuust tegen half ingevulde inhoud: een blok zonder verplichte inhoud (bijv. een
 * verwijderde testimonial of case) wordt overgeslagen met een waarschuwing in de
 * build-log, in plaats van de hele build te laten falen.
 */
import { imageProjection, toRemoteImage, type SanityImageRef } from './image';
import { portableTextToRich } from './portableText';
import type { HeroProps } from '../../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../../components/sections/LogoMarquee.astro';
import type { IntroHighlightProps } from '../../components/sections/IntroHighlight.astro';
import type { TimelineProps } from '../../components/sections/Timeline.astro';
import type { TestimonialsProps } from '../../components/sections/Testimonials.astro';
import type { PolaroidStackProps } from '../../components/sections/PolaroidStack.astro';
import type { TextMediaProps } from '../../components/sections/TextMedia.astro';
import type { CaseSpotlightProps } from '../../components/sections/CaseSpotlight.astro';
import type { ImageFeatureProps } from '../../components/sections/ImageFeature.astro';
import type { ServiceTilesProps } from '../../components/sections/ServiceTiles.astro';
import type { FaqProps } from '../../components/sections/Faq.astro';
import type { HeadingGradient } from '../../components/ui/Heading.astro';
import type { Accent } from '../../components/ui/Button.astro';
import type { IconName } from '../../components/ui/icons';

const ctaProjection = `{ label, href, accent }`;

/** Achter `sections` in een GROQ-query te plakken: `"sections": sections[]${sectionsProjection}`. */
export const sectionsProjection = `{
  _type,
  _key,
  _type == "heroSection" => {
    title, titleAccent, eyebrow, primaryCta, secondaryCta, buttonAccent,
    "image": image${imageProjection},
    video, videoOnMobile
  },
  _type == "logoMarqueeSection" => {
    title,
    "logos": select(
      count(logos) > 0 => logos[]->{ "image": image${imageProjection}, name },
      *[_type == "clientLogo"] | order(_createdAt asc) { "image": image${imageProjection}, name }
    )
  },
  _type == "introHighlightSection" => { content, anchorId },
  _type == "timelineSection" => {
    title, gradient, intro, reverse,
    "steps": steps[]{ number, title, text, "image": image${imageProjection}, "cta": cta${ctaProjection} },
    "cta": cta${ctaProjection}
  },
  _type == "testimonialsSection" => {
    eyebrow, title, gradient,
    "items": items[]->{ quote, name, organisation, "image": image${imageProjection} }
  },
  _type == "polaroidStackSection" => {
    eyebrow, title, gradient,
    "photos": photos[]${imageProjection}
  },
  _type == "textMediaSection" => {
    showContactForm, intro, title, gradient, body, "cta": cta${ctaProjection},
    mediaType, "image": image${imageProjection}, video,
    reverse, triangles, anchorId
  },
  _type == "caseSpotlightSection" => {
    title, gradient,
    "case": case->{ title, "slug": slug.current, intro, "image": image${imageProjection} }
  },
  _type == "imageFeatureSection" => {
    title, gradient, text, cinemaCursor,
    "image": image${imageProjection}
  },
  _type == "serviceTilesSection" => {
    title, gradient, text,
    "items": items[]{ label, href, "image": image${imageProjection} }
  },
  _type == "faqSection" => { title, gradient, items[]{ question, answer }, anchorId }
}`;

type Cta = { label?: string; href?: string; accent?: Accent };
type Vimeo = { id?: string; hash?: string; title?: string };
type Img = SanityImageRef | null | undefined;

/** Ruwe vorm van één sectie na `sectionsProjection` (alle velden optioneel: CMS-inhoud). */
type RawSection = { _type: string; _key: string } & Record<string, any>;

export type PageSection =
  | { type: 'hero'; key: string; props: HeroProps }
  | { type: 'breadcrumbs'; key: string }
  | { type: 'logoMarquee'; key: string; props: LogoMarqueeProps }
  | { type: 'introHighlight'; key: string; props: IntroHighlightProps }
  | { type: 'timeline'; key: string; props: TimelineProps }
  | { type: 'testimonials'; key: string; props: TestimonialsProps }
  | { type: 'polaroidStack'; key: string; props: PolaroidStackProps }
  | { type: 'textMedia'; key: string; props: TextMediaProps; contactForm: boolean }
  | { type: 'caseSpotlight'; key: string; props: CaseSpotlightProps }
  | { type: 'imageFeature'; key: string; props: ImageFeatureProps }
  | { type: 'serviceTiles'; key: string; props: ServiceTilesProps }
  | { type: 'faq'; key: string; props: FaqProps };

const hasImage = (img: Img): img is SanityImageRef => Boolean(img?.src);
const image = (img: SanityImageRef) => ({ src: toRemoteImage(img), alt: img.alt ?? '' });
const cta = (c: Cta | null | undefined) => (c?.label && c.href ? { label: c.label, href: c.href, accent: c.accent ?? undefined } : undefined);
const gradient = (g: unknown) => (g ?? undefined) as HeadingGradient | undefined;
const opt = <T>(v: T | null | undefined) => v ?? undefined;

class SkipSection extends Error {}
/** Verplichte inhoud: leeg (ook een lege lijst) = blok overslaan. */
function need<T>(value: T | null | undefined | false | '', what: string): T {
  if (!value || (Array.isArray(value) && value.length === 0)) throw new SkipSection(what);
  return value;
}

const mappers: Record<string, (s: RawSection) => PageSection> = {
  heroSection: (s) => {
    const img = need(hasImage(s.image) && s.image, 'achtergrondfoto ontbreekt');
    const video: Vimeo | undefined = s.video;
    return {
      type: 'hero',
      key: s._key,
      props: {
        title: need(s.title, 'titel ontbreekt'),
        titleAccent: s.titleAccent ?? '',
        eyebrow: s.eyebrow ?? '',
        primaryCta: cta(s.primaryCta),
        secondaryCta: s.secondaryCta?.label
          ? { label: s.secondaryCta.label, href: s.secondaryCta.href ?? '#first-section', icon: opt(s.secondaryCta.icon) as IconName | undefined }
          : undefined,
        image: image(img),
        video: video?.id ? { id: video.id, hash: opt(video.hash), title: video.title ?? '', loadOnMobile: Boolean(s.videoOnMobile) } : undefined,
        accent: opt(s.buttonAccent),
      },
    };
  },

  breadcrumbsSection: (s) => ({ type: 'breadcrumbs', key: s._key }),

  logoMarqueeSection: (s) => ({
    type: 'logoMarquee',
    key: s._key,
    props: {
      title: s.title ?? '',
      logos: need(
        ((s.logos ?? []) as { image: Img; name?: string }[])
          .filter((l) => hasImage(l?.image))
          .map((l) => ({ src: toRemoteImage(l.image as SanityImageRef), alt: l.name ?? l.image!.alt ?? '' })),
        "geen logo's",
      ),
    },
  }),

  introHighlightSection: (s) => ({
    type: 'introHighlight',
    key: s._key,
    props: { id: opt(s.anchorId), content: portableTextToRich(s.content) },
  }),

  timelineSection: (s) => ({
    type: 'timeline',
    key: s._key,
    props: {
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      intro: portableTextToRich(s.intro),
      reverse: Boolean(s.reverse),
      steps: ((s.steps ?? []) as { number?: string; title?: string; text?: unknown; image: Img; cta?: Cta }[])
        .filter((step) => hasImage(step.image))
        .map((step) => ({
          number: step.number ?? '',
          title: step.title ?? '',
          text: portableTextToRich(step.text),
          image: image(step.image as SanityImageRef),
          cta: cta(step.cta),
        })),
      cta: cta(s.cta),
    },
  }),

  testimonialsSection: (s) => ({
    type: 'testimonials',
    key: s._key,
    props: {
      eyebrow: s.eyebrow ?? '',
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      carousel: { label: 'Testimonials', prevLabel: 'Vorige', nextLabel: 'Volgende' },
      items: need(
        ((s.items ?? []) as ({ quote?: string; name?: string; organisation?: string; image: Img } | null)[])
          .filter((t): t is NonNullable<typeof t> => Boolean(t?.quote) && hasImage(t?.image))
          .map((t) => ({
            quote: t.quote ?? '',
            name: opt(t.name),
            organisation: opt(t.organisation),
            image: image(t.image as SanityImageRef),
          })),
        'geen testimonials',
      ),
    },
  }),

  polaroidStackSection: (s) => ({
    type: 'polaroidStack',
    key: s._key,
    props: {
      eyebrow: s.eyebrow ?? '',
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      photos: need(((s.photos ?? []) as Img[]).filter(hasImage).map((p) => ({ src: toRemoteImage(p), alt: p.alt ?? '' })), "geen foto's"),
    },
  }),

  textMediaSection: (s) => {
    const form = Boolean(s.showContactForm);
    const video: Vimeo | undefined = s.video;
    const media: TextMediaProps['media'] =
      s.mediaType === 'vimeo'
        ? { type: 'vimeo', id: need(video?.id, 'Vimeo-ID ontbreekt'), hash: opt(video?.hash), title: video?.title ?? '' }
        : { type: 'image', ...image(need(hasImage(s.image) && s.image, 'foto ontbreekt')) };
    return {
      type: 'textMedia',
      key: s._key,
      contactForm: form,
      props: {
        id: opt(s.anchorId),
        title: form ? undefined : opt(s.title),
        gradient: gradient(s.gradient),
        body: form ? undefined : portableTextToRich(s.body),
        cta: form ? undefined : cta(s.cta),
        intro: s.intro?.title ? { title: s.intro.title, gradient: gradient(s.intro.gradient), text: portableTextToRich(s.intro.text) } : undefined,
        media,
        reverse: Boolean(s.reverse),
        triangles: Boolean(s.triangles),
        // Gelijk aan live: met foto (Webflow .image-5) als 'section' zonder inloopanimatie,
        // met video (homepage "Mike's mic drop") de standaard.
        ...(media.type === 'image' ? { spacing: 'section' as const, animate: false } : {}),
      },
    };
  },

  caseSpotlightSection: (s) => {
    const c = need(s.case as { title?: string; slug?: string; intro?: string; image: Img } | null, 'case ontbreekt');
    return {
      type: 'caseSpotlight',
      key: s._key,
      props: {
        title: s.title ?? '',
        gradient: gradient(s.gradient),
        item: {
          title: c.title ?? '',
          slug: c.slug ?? '',
          intro: c.intro ?? '',
          // Decoratief: de titel staat al in de kaart (zoals src/data/cases.ts)
          image: { src: toRemoteImage(need(hasImage(c.image) && c.image, 'casefoto ontbreekt')), alt: '' },
          audiences: [],
        },
      },
    };
  },

  imageFeatureSection: (s) => ({
    type: 'imageFeature',
    key: s._key,
    props: {
      id: s.cinemaCursor ? 'cinema' : undefined,
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      text: s.text ?? '',
      image: image(need(hasImage(s.image) && s.image, 'foto ontbreekt')),
    },
  }),

  serviceTilesSection: (s) => ({
    type: 'serviceTiles',
    key: s._key,
    props: {
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      text: s.text ? portableTextToRich(s.text) : undefined,
      items: need(
        ((s.items ?? []) as { label?: string; href?: string; image: Img }[])
          .filter((t) => t.label && t.href && hasImage(t.image))
          .map((t) => ({ label: t.label!, href: t.href!, image: image(t.image as SanityImageRef) })),
        'geen tegels',
      ),
    },
  }),

  faqSection: (s) => ({
    type: 'faq',
    key: s._key,
    props: {
      id: opt(s.anchorId),
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      items: need(
        ((s.items ?? []) as { question?: string; answer?: unknown }[])
          .filter((i) => i.question)
          .map((i) => ({ question: i.question!, answer: portableTextToRich(i.answer) })),
        'geen vragen',
      ),
    },
  }),
};

/** `context` = waar de sectie staat (voor de waarschuwing in de build-log). */
export function mapSections(raw: RawSection[] | null | undefined, context: string): PageSection[] {
  const result: PageSection[] = [];
  for (const section of raw ?? []) {
    const mapper = mappers[section._type];
    if (!mapper) {
      console.warn(`[sanity] ${context}: onbekend bloktype '${section._type}' overgeslagen.`);
      continue;
    }
    try {
      result.push(mapper(section));
    } catch (err) {
      if (!(err instanceof SkipSection)) throw err;
      console.warn(`[sanity] ${context}: blok '${section._type}' overgeslagen (${err.message}).`);
    }
  }
  return result;
}
