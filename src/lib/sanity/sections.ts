/**
 * Sectieblokken uit Sanity (studio/schemaTypes/sections/) → PageSection (lib/sections.ts),
 * dus precies de props van de bestaande sectiecomponenten. Eén GROQ-projectie voor de
 * hele `sections`-array en één mapper per bloktype. PageSections.astro rendert het resultaat.
 *
 * Nieuw blok? Schema in studio/schemaTypes/sections/, projectie + mapper hier, type in
 * lib/sections.ts en een regel in PageSections.astro.
 *
 * Robuust tegen half ingevulde inhoud: een blok zonder verplichte inhoud (bijv. een
 * verwijderde testimonial of case) wordt overgeslagen met een waarschuwing in de
 * build-log, in plaats van de hele build te laten falen.
 */
import { imageProjection, toRemoteImage, type SanityImageRef } from './image';
import { portableTextToRich } from './portableText';
import { caseGridProps, caseIn, caseUrl, spotlightCandidates, type Case } from '../../data/cases';
import { logosForPath } from '../../data/logos';
import { matchingPath, targetingOfPath, type Targeting } from '../../data/taxonomy';
import { multiTargetingProjection, targetingProjection, toCaseTargets, toMultiTargeting, type RawMultiTargeting, type RawTargeting } from './taxonomy';
import type { FormChoice, PageSection } from '../sections';
import type { TextMediaProps } from '../../components/sections/TextMedia.astro';
import type { LinkGroup } from '../../components/sections/LinkGroups.astro';
import type { HeadingGradient } from '../../components/ui/Heading.astro';
import type { Accent } from '../../components/ui/Button.astro';
import type { IconName } from '../../components/ui/icons';
import { testimonialCarousel } from '../../data/testimonials';

const ctaProjection = `{ label, href, accent }`;

/** Kaartgegevens van een case (overzicht, uitgelichte case, casepagina). */
export const caseCardProjection = `{
  title,
  "slug": slug.current,
  intro,
  "image": image${imageProjection},
  ${targetingProjection},
  ${multiTargetingProjection},
  audiences,
  services,
  client,
  date,
  video
}`;

const allCasesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(coalesce(sortOrder, 999) asc, _createdAt asc) ${caseCardProjection}`;

/** Achter `sections` in een GROQ-query te plakken: `"sections": sections[]${sectionsProjection}`. */
export const sectionsProjection = `{
  _type,
  _key,
  _type == "heroSection" => {
    title, titleAccent, accentInline, eyebrow, primaryCta, secondaryCta, buttonAccent,
    "image": image${imageProjection},
    video, videoOnMobile
  },
  _type == "splitHeroSection" => {
    title,
    halves[]{ title, text, ctaLabel, href, accent, "image": image${imageProjection}, video }
  },
  _type == "logoMarqueeSection" => {
    title,
    "picked": count(logos) > 0,
    "logos": select(
      count(logos) > 0 => logos[]->{ "image": image${imageProjection}, name, ${multiTargetingProjection} },
      *[_type == "clientLogo"] | order(_createdAt asc) { "image": image${imageProjection}, name, ${multiTargetingProjection} }
    )
  },
  _type == "introHighlightSection" => { content, anchorId },
  _type == "richTextSection" => { content, align, anchorId },
  _type == "timelineSection" => {
    title, gradient, intro, reverse,
    "steps": steps[]{ number, title, text, "image": image${imageProjection}, video, "cta": cta${ctaProjection} },
    "cta": cta${ctaProjection}
  },
  _type == "testimonialsSection" => {
    eyebrow, title, gradient,
    "picked": count(items) > 0,
    "items": select(
      count(items) > 0 => items[]->{ quote, name, organisation, "image": image${imageProjection} },
      *[_type == "testimonial"] | order(_createdAt asc) { quote, name, organisation, "image": image${imageProjection}, ${multiTargetingProjection} }
    )
  },
  _type == "polaroidStackSection" => {
    eyebrow, title, gradient,
    "photos": photos[]${imageProjection}
  },
  _type == "textMediaSection" => {
    showContactForm, form, messagePlaceholder, intro, title, gradient, body, links[]{ label, href }, "cta": cta${ctaProjection},
    mediaType, "image": image${imageProjection}, video,
    reverse, triangles, layout, anchorId
  },
  _type == "caseSpotlightSection" => {
    title, gradient,
    "case": case->${caseCardProjection},
    "cases": select(!defined(case->_id) => ${allCasesQuery})
  },
  _type == "imageFeatureSection" => {
    title, gradient, text, cinemaCursor,
    "image": image${imageProjection}
  },
  _type == "serviceTilesSection" => {
    title, gradient, text,
    "items": items[]{ label, href, "image": image${imageProjection} }
  },
  _type == "teamSection" => {
    title, gradient,
    "members": members[]{ role, "member": member->{ name, role, "image": image${imageProjection}, "video": video.asset->url } }
  },
  _type == "faqSection" => { title, gradient, items[]{ question, answer }, anchorId },
  _type == "fullWidthImageSection" => { "image": image${imageProjection} },
  _type == "videoFeatureSection" => { video, ratio },
  _type == "contactSection" => { content, links[]{ label, href }, form, messagePlaceholder, anchorId },
  _type == "mapSection" => { title, gradient, text, src, label },
  _type == "caseGridSection" => { anchorId, "cases": ${allCasesQuery} },
  _type == "linkGroupsSection" => {
    eyebrow, title, isPageTitle, gradient, anchorId, allPages, casesGroupTitle, casesGroupIndex,
    groups[]{ title, links[]{ label, href } },
    "cases": select(defined(casesGroupTitle) => ${allCasesQuery})
  }
}`;

type Cta = { label?: string; href?: string; accent?: Accent };
type Vimeo = { id?: string; hash?: string; title?: string };
type Img = SanityImageRef | null | undefined;

/** Ruwe vorm van één sectie na `sectionsProjection` (alle velden optioneel: CMS-inhoud). */
type RawSection = { _type: string; _key: string } & Record<string, any>;

/** Ruwe case na `caseCardProjection` */
export interface RawCase extends RawTargeting, Omit<RawMultiTargeting, 'audiences'> {
  title?: string;
  slug?: string;
  intro?: string;
  image?: Img;
  audiences?: string[] | null;
  services?: string[] | null;
  client?: string | null;
  date?: string | null;
  video?: Vimeo | null;
}

const hasImage = (img: Img): img is SanityImageRef => Boolean(img?.src);
const image = (img: SanityImageRef) => ({ src: toRemoteImage(img), alt: img.alt ?? '' });
const cta = (c: Cta | null | undefined) => (c?.label && c.href ? { label: c.label, href: c.href, accent: c.accent ?? undefined } : undefined);
const gradient = (g: unknown) => (g ?? undefined) as HeadingGradient | undefined;
const opt = <T>(v: T | null | undefined) => v ?? undefined;
const contactLinks = (links: { label?: string; href?: string }[] | null | undefined) => {
  const list = (links ?? []).filter((l) => l.label && l.href).map((l) => ({ label: l.label!, href: l.href! }));
  return list.length ? list : undefined;
};
const vimeo = (v: Vimeo | null | undefined, fallbackTitle: string) => (v?.id ? { id: v.id, hash: opt(v.hash) || undefined, title: v.title || fallbackTitle } : undefined);
const formChoice = (name: unknown, messagePlaceholder: unknown): FormChoice => ({
  name: name === 'offerte' || name === 'offerte-business' || name === 'trouwfilm' ? name : 'contact',
  messagePlaceholder: typeof messagePlaceholder === 'string' && messagePlaceholder ? messagePlaceholder : undefined,
});

class SkipSection extends Error {}
/** Verplichte inhoud: leeg (ook een lege lijst) = blok overslaan. */
function need<T>(value: T | null | undefined | false | '', what: string): T {
  if (!value || (Array.isArray(value) && value.length === 0)) throw new SkipSection(what);
  return value;
}

/**
 * Oude velden (audiences[], services[]) van vóór de indeling Events/Business → doelgroep →
 * diensten. Alleen zolang nog niet elke case gemigreerd is (npm run sanity:migrate-taxonomy).
 */
function legacyTargeting(raw: RawCase): Targeting {
  const old = raw.audiences?.[0];
  if (old === 'business') return { category: 'business', audience: 'fundament' };
  const audience = old === 'artiesten' || old === 'zakelijke-events' ? old : 'organisatoren';
  return { category: 'events', audience, services: raw.services ?? [] };
}

/** Ruwe case → Case (zelfde vorm als src/data/cases.ts). `null` als titel, slug of foto ontbreekt. */
export function toCase(raw: RawCase | null | undefined): Case | null {
  if (!raw?.title || !raw.slug || !hasImage(raw.image)) return null;
  const targets = toCaseTargets(raw as RawMultiTargeting & RawTargeting);
  return {
    slug: raw.slug,
    title: raw.title,
    intro: raw.intro ?? '',
    // Decoratief: de titel staat al op de kaart en in de hero
    image: { src: toRemoteImage(raw.image), alt: '' },
    ...(targets[0] ?? legacyTargeting(raw)),
    targets,
    client: opt(raw.client),
    date: opt(raw.date),
    video: vimeo(raw.video, `${raw.title} – Bold Productions`),
  };
}

/** `path`: pad van de pagina (bijv. '/business/cases'), voor blokken die van de soort afhangen */
const mappers: Record<string, (s: RawSection, path: string) => PageSection> = {
  heroSection: (s) => {
    const img = need(hasImage(s.image) && s.image, 'achtergrondfoto ontbreekt');
    const video: Vimeo | undefined = s.video;
    return {
      type: 'hero',
      key: s._key,
      props: {
        title: need(s.title, 'titel ontbreekt'),
        titleAccent: s.titleAccent ?? '',
        accentInline: Boolean(s.accentInline),
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

  splitHeroSection: (s) => {
    type RawHalf = { title?: string; text?: string; ctaLabel?: string; href?: string; accent?: Accent; image?: Img; video?: Vimeo };
    const halves = ((s.halves ?? []) as RawHalf[])
      .filter((h) => h.title && h.ctaLabel && h.href && hasImage(h.image))
      .map((h) => ({
        title: h.title!,
        text: h.text ?? '',
        cta: { label: h.ctaLabel!, href: h.href! },
        accent: h.accent ?? 'orange',
        image: image(h.image as SanityImageRef),
        video: vimeo(h.video, h.title!),
      }));
    return {
      type: 'splitHero',
      key: s._key,
      props: { title: s.title || 'Bold Productions', halves: need(halves.length === 2 && halves, 'twee volledige helften nodig') },
    };
  },

  breadcrumbsSection: (s) => ({ type: 'breadcrumbs', key: s._key }),

  // Zelf gekozen logo's, of automatisch die van de soort/doelgroep van de pagina (max. 10 willekeurig: LogoMarquee)
  logoMarqueeSection: (s, path) => {
    const all = ((s.logos ?? []) as ({ image: Img; name?: string } & RawMultiTargeting)[])
      .filter((l) => hasImage(l?.image))
      .map((l) => ({ src: toRemoteImage(l.image as SanityImageRef), alt: l.name ?? l.image!.alt ?? '', ...toMultiTargeting(l) }));
    const logos = s.picked ? all : logosForPath(all, path);
    return {
      type: 'logoMarquee',
      key: s._key,
      props: { title: s.title ?? '', logos: need(logos.map(({ src, alt }) => ({ src, alt })), "geen logo's") },
    };
  },

  introHighlightSection: (s) => ({
    type: 'introHighlight',
    key: s._key,
    props: { id: opt(s.anchorId), content: portableTextToRich(s.content) },
  }),

  richTextSection: (s) => ({
    type: 'richText',
    key: s._key,
    props: { id: opt(s.anchorId), content: need(portableTextToRich(s.content), 'tekst ontbreekt'), align: s.align === 'center' ? 'center' : undefined },
  }),

  timelineSection: (s) => ({
    type: 'timeline',
    key: s._key,
    props: {
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      intro: portableTextToRich(s.intro),
      reverse: Boolean(s.reverse),
      steps: ((s.steps ?? []) as { number?: string; title?: string; text?: unknown; image: Img; video?: Vimeo; cta?: Cta }[])
        .filter((step) => hasImage(step.image) || step.video?.id)
        .map((step) => ({
          number: step.number || undefined,
          title: step.title ?? '',
          text: portableTextToRich(step.text),
          image: hasImage(step.image) ? image(step.image) : undefined,
          video: hasImage(step.image) ? undefined : vimeo(step.video, step.title ?? ''),
          cta: cta(step.cta),
        })),
      cta: cta(s.cta),
    },
  }),

  // Zelf gekozen testimonials, of automatisch die van de doelgroep/soort van de pagina (matchingPath)
  testimonialsSection: (s, path) => {
    const all = ((s.items ?? []) as (({ quote?: string; name?: string; organisation?: string; image: Img } & RawMultiTargeting) | null)[])
      .filter((t): t is NonNullable<typeof t> => Boolean(t?.quote) && hasImage(t?.image))
      .map((t) => ({ ...t, ...toMultiTargeting(t) }));
    return {
      type: 'testimonials',
      key: s._key,
      props: {
        eyebrow: s.eyebrow ?? '',
        title: s.title ?? '',
        gradient: gradient(s.gradient),
        carousel: testimonialCarousel,
        items: need(
          (s.picked ? all : matchingPath(all, path)).map((t) => ({
            quote: t.quote ?? '',
            name: opt(t.name),
            organisation: opt(t.organisation),
            image: image(t.image as SanityImageRef),
          })),
          'geen testimonials',
        ),
      },
    };
  },

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
    const withForm = Boolean(s.showContactForm);
    const video: Vimeo | undefined = s.video;
    const media: TextMediaProps['media'] =
      s.mediaType === 'vimeo'
        ? { type: 'vimeo', id: need(video?.id, 'Vimeo-ID ontbreekt'), hash: opt(video?.hash), title: video?.title ?? '' }
        : { type: 'image', ...image(need(hasImage(s.image) && s.image, 'foto ontbreekt')) };
    // Zonder keuze (oudere blokken): foto = rustig (zoals /events), video = standaard
    const calm = s.layout ? s.layout === 'section' : media.type === 'image';
    return {
      type: 'textMedia',
      key: s._key,
      form: withForm ? formChoice(s.form, s.messagePlaceholder) : undefined,
      props: {
        id: opt(s.anchorId),
        title: withForm ? undefined : opt(s.title),
        gradient: gradient(s.gradient),
        body: withForm ? undefined : portableTextToRich(s.body),
        links: withForm ? undefined : contactLinks(s.links),
        cta: withForm ? undefined : cta(s.cta),
        intro: s.intro?.title ? { title: s.intro.title, gradient: gradient(s.intro.gradient), text: portableTextToRich(s.intro.text) } : undefined,
        media,
        reverse: Boolean(s.reverse),
        triangles: Boolean(s.triangles),
        ...(calm ? { spacing: 'section' as const, animate: false } : {}),
      },
    };
  },

  // Vaste case, of elke keer een willekeurige die past bij de pagina (soort, doelgroep, dienst)
  caseSpotlightSection: (s, path) => {
    const fixed = toCase(s.case);
    const all = ((s.cases ?? []) as RawCase[]).map(toCase).filter((c): c is Case => c !== null);
    return {
      type: 'caseSpotlight',
      key: s._key,
      props: { title: s.title ?? '', gradient: gradient(s.gradient), items: need(fixed ? [caseIn(fixed, targetingOfPath(path).category)] : spotlightCandidates(all, path), 'geen (volledige) case') },
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

  teamSection: (s) => ({
    type: 'serviceTiles',
    key: s._key,
    props: {
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      variant: 'team',
      items: need(
        ((s.members ?? []) as { role?: string; member?: { name?: string; role?: string; image: Img; video?: string } | null }[])
          .filter((m) => m.member?.name && hasImage(m.member.image))
          .map(({ role, member }) => ({
            label: member!.name!,
            subtitle: role || member!.role || undefined,
            image: image(member!.image as SanityImageRef),
            video: opt(member!.video),
          })),
        'geen teamleden',
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

  fullWidthImageSection: (s) => ({
    type: 'fullWidthImage',
    key: s._key,
    props: { image: image(need(hasImage(s.image) && s.image, 'foto ontbreekt')) },
  }),

  videoFeatureSection: (s) => ({
    type: 'videoFeature',
    key: s._key,
    props: { video: need(vimeo(s.video, 'Video Bold Productions'), 'Vimeo-ID ontbreekt'), ratio: opt(s.ratio) },
  }),

  contactSection: (s) => ({
    type: 'contactSection',
    key: s._key,
    form: formChoice(s.form, s.messagePlaceholder),
    props: {
      id: opt(s.anchorId),
      content: portableTextToRich(s.content),
      links: ((s.links ?? []) as { label?: string; href?: string }[]).filter((l) => l.label && l.href).map((l) => ({ label: l.label!, href: l.href! })),
      formWidth: s.form === 'offerte' || s.form === 'offerte-business' ? 'narrow' : undefined,
    },
  }),

  mapSection: (s) => ({
    type: 'map',
    key: s._key,
    props: {
      title: s.title ?? '',
      gradient: gradient(s.gradient),
      text: portableTextToRich(s.text),
      src: need(s.src, 'kaartlink ontbreekt'),
      label: s.label ?? '',
    },
  }),

  linkGroupsSection: (s) => {
    const groups: LinkGroup[] = ((s.groups ?? []) as { title?: string; links?: { label?: string; href?: string }[] }[])
      .map((g) => ({
        title: g.title ?? '',
        links: (g.links ?? []).filter((l) => l.label && l.href).map((l) => ({ label: l.label!, href: l.href! })),
      }))
      .filter((g) => g.title && g.links.length);
    if (s.casesGroupTitle) {
      const links = ((s.cases ?? []) as RawCase[])
        .map(toCase)
        .filter((c): c is Case => c !== null)
        .map((c) => ({ label: c.title, href: caseUrl(c) }));
      const index = typeof s.casesGroupIndex === 'number' ? s.casesGroupIndex : groups.length;
      if (links.length) groups.splice(Math.max(0, Math.min(index, groups.length)), 0, { title: s.casesGroupTitle, links, auto: 'cases' });
    }
    return {
      type: 'linkGroups',
      key: s._key,
      props: {
        id: opt(s.anchorId),
        eyebrow: opt(s.eyebrow),
        title: opt(s.title),
        titleAs: s.isPageTitle ? ('h1' as const) : ('h2' as const),
        gradient: gradient(s.gradient),
        ...(s.allPages ? { auto: 'site' as const, groups } : { groups: need(groups, 'geen groepen') }),
      },
    };
  },

  caseGridSection: (s, path) => ({
    type: 'caseGrid',
    key: s._key,
    props: {
      ...caseGridProps(
        ((s.cases ?? []) as RawCase[]).map(toCase).filter((c): c is Case => c !== null),
        path.startsWith('/business') ? 'business' : 'events',
      ),
      id: opt(s.anchorId),
    },
  }),
};

/** `context` = pad van de pagina (voor blokken die van de soort afhangen en de waarschuwing in de build-log). */
export function mapSections(raw: RawSection[] | null | undefined, context: string): PageSection[] {
  const result: PageSection[] = [];
  for (const section of raw ?? []) {
    const mapper = mappers[section._type];
    if (!mapper) {
      console.warn(`[sanity] ${context}: onbekend bloktype '${section._type}' overgeslagen.`);
      continue;
    }
    try {
      result.push(mapper(section, context));
    } catch (err) {
      if (!(err instanceof SkipSection)) throw err;
      console.warn(`[sanity] ${context}: blok '${section._type}' overgeslagen (${err.message}).`);
    }
  }
  return result;
}
