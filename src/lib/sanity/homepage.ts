/**
 * Haalt het 'homepage'-singleton op uit Sanity en geeft precies dezelfde vorm terug
 * als src/data/home.ts (hero, trustedBy, intro, timeline, testimonials, backstage,
 * micDrop, meta). index.astro gebruikt dit resultaat als het beschikbaar is en valt
 * anders terug op src/data/home.ts — zie getHomepageContent().
 */
import { sanityClient, isSanityConfigured } from './client';
import { imageProjection, toRemoteImage, type SanityImageRef } from './image';
import { portableTextToRich } from './portableText';
import type { HeroProps } from '../../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../../components/sections/LogoMarquee.astro';
import type { IntroHighlightProps } from '../../components/sections/IntroHighlight.astro';
import type { TimelineProps } from '../../components/sections/Timeline.astro';
import type { TestimonialsProps } from '../../components/sections/Testimonials.astro';
import type { PolaroidStackProps } from '../../components/sections/PolaroidStack.astro';
import type { TextMediaProps } from '../../components/sections/TextMedia.astro';

const QUERY = `*[_type == "homepage"][0]{
  metaTitle,
  metaDescription,

  heroTitle, heroTitleAccent, heroEyebrow, heroPrimaryCta, heroSecondaryCta,
  "heroImage": heroImage${imageProjection},
  heroVideo,

  trustedByTitle,
  "trustedByLogos": trustedByLogos[]->{
    "src": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    "alt": name
  },

  introContent,

  timelineTitle, timelineGradient, timelineIntro,
  "timelineSteps": timelineSteps[]{ number, title, text, "image": image${imageProjection}, cta },
  timelineCta,

  testimonialsEyebrow, testimonialsTitle, testimonialsGradient,
  "testimonialsItems": testimonialsItems[]->{
    quote, name, organisation, "image": image${imageProjection}
  },

  backstageEyebrow, backstageTitle, backstageGradient,
  "backstagePhotos": backstagePhotos[]${imageProjection},

  micDropTitle, micDropGradient, micDropBody, micDropCta,
  micDropMediaType, micDropVideo, "micDropImage": micDropImage${imageProjection},
  micDropTriangles
}`;

interface HomepageDoc {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroEyebrow: string;
  heroPrimaryCta?: { label: string; href: string };
  heroSecondaryCta?: { label: string; href: string };
  heroImage: SanityImageRef;
  heroVideo?: { id?: string; hash?: string; title?: string; loadOnMobile?: boolean };
  trustedByTitle: string;
  trustedByLogos: SanityImageRef[];
  introContent: unknown;
  timelineTitle: string;
  timelineGradient: TimelineProps['gradient'];
  timelineIntro: unknown;
  timelineSteps: { number: string; title: string; text: unknown; image: SanityImageRef; cta?: { label: string; href: string } }[];
  timelineCta?: { label: string; href: string; accent?: 'orange' | 'yellow' | 'green' };
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonialsGradient: TestimonialsProps['gradient'];
  testimonialsItems: { quote: string; name?: string; organisation?: string; image: SanityImageRef }[];
  backstageEyebrow: string;
  backstageTitle: string;
  backstageGradient: PolaroidStackProps['gradient'];
  backstagePhotos: SanityImageRef[];
  micDropTitle: string;
  micDropGradient: TextMediaProps['gradient'];
  micDropBody: unknown;
  micDropCta?: { label: string; href: string; accent?: 'orange' | 'yellow' | 'green' };
  micDropMediaType: 'vimeo' | 'image';
  micDropVideo?: { id?: string; hash?: string; title?: string };
  micDropImage?: SanityImageRef;
  micDropTriangles: boolean;
}

export interface HomepageContent {
  meta: { title: string; description: string; ogImage: string | undefined };
  hero: HeroProps;
  trustedBy: LogoMarqueeProps;
  intro: IntroHighlightProps;
  timeline: TimelineProps;
  testimonials: TestimonialsProps;
  backstage: PolaroidStackProps;
  micDrop: TextMediaProps;
}

/**
 * `null` als Sanity niet geconfigureerd is of het document nog niet bestaat
 * (bijv. voor de eerste keer seeden) — index.astro valt dan terug op src/data/home.ts.
 */
export async function getHomepageContent(): Promise<HomepageContent | null> {
  if (!isSanityConfigured || !sanityClient) return null;
  const doc = await sanityClient.fetch<HomepageDoc | null>(QUERY);
  if (!doc) return null;

  return {
    meta: { title: doc.metaTitle, description: doc.metaDescription, ogImage: undefined },
    hero: {
      title: doc.heroTitle,
      titleAccent: doc.heroTitleAccent,
      eyebrow: doc.heroEyebrow,
      primaryCta: doc.heroPrimaryCta,
      secondaryCta: doc.heroSecondaryCta,
      image: { src: toRemoteImage(doc.heroImage), alt: doc.heroImage.alt },
      video: doc.heroVideo?.id ? { id: doc.heroVideo.id, hash: doc.heroVideo.hash, title: doc.heroVideo.title ?? '', loadOnMobile: doc.heroVideo.loadOnMobile } : undefined,
    },
    trustedBy: {
      title: doc.trustedByTitle,
      logos: (doc.trustedByLogos ?? []).map((l) => ({ src: toRemoteImage(l), alt: l.alt })),
    },
    intro: { id: 'first-section', content: portableTextToRich(doc.introContent) },
    timeline: {
      title: doc.timelineTitle,
      gradient: doc.timelineGradient,
      intro: portableTextToRich(doc.timelineIntro),
      steps: (doc.timelineSteps ?? []).map((s) => ({
        number: s.number,
        title: s.title,
        text: portableTextToRich(s.text),
        image: { src: toRemoteImage(s.image), alt: s.image.alt },
        cta: s.cta,
      })),
      cta: doc.timelineCta,
    },
    testimonials: {
      eyebrow: doc.testimonialsEyebrow,
      title: doc.testimonialsTitle,
      gradient: doc.testimonialsGradient,
      carousel: { label: 'Testimonials', prevLabel: 'Vorige', nextLabel: 'Volgende' },
      items: (doc.testimonialsItems ?? []).map((t) => ({
        quote: t.quote,
        name: t.name,
        organisation: t.organisation,
        image: { src: toRemoteImage(t.image), alt: t.image.alt },
      })),
    },
    backstage: {
      eyebrow: doc.backstageEyebrow,
      title: doc.backstageTitle,
      gradient: doc.backstageGradient,
      photos: (doc.backstagePhotos ?? []).map((p) => ({ src: toRemoteImage(p), alt: p.alt })),
    },
    micDrop: {
      title: doc.micDropTitle,
      gradient: doc.micDropGradient,
      body: portableTextToRich(doc.micDropBody),
      cta: doc.micDropCta,
      media:
        doc.micDropMediaType === 'image' && doc.micDropImage
          ? { type: 'image', src: toRemoteImage(doc.micDropImage), alt: doc.micDropImage.alt }
          : { type: 'vimeo', id: doc.micDropVideo?.id ?? '', hash: doc.micDropVideo?.hash, title: doc.micDropVideo?.title ?? '' },
      triangles: doc.micDropTriangles,
    },
  };
}
