/**
 * Bold Business (/business/…). De inhoud volgt nog; tot die tijd:
 * - /business: business-home.ts (Webflow /business).
 * - De vier doelgroepen en hun diensten (data/taxonomy.ts): placeholder
 *   (hero + korte tekst), noindex en dus buiten sitemap.xml. Menu en footer linken er al naar.
 * - Cases, Over Bold, Mike, Contact en Offerte aanvragen: dezelfde inhoud als onder /events,
 *   met links naar de Business-versies. /business/cases toont alleen Business-cases (nog geen:
 *   noindex zolang de lijst leeg is).
 */
import type { PageData, PageSection } from '../../lib/sections';
import { audiences, services, type Audience } from '../taxonomy';
import { cases, caseGridProps } from '../cases';
import { page as businessHome } from './business-home';
import { page as eventsCases } from './events/cases';
import { page as eventsOver } from './events/over-bold';
import { page as eventsMike } from './events/over-bold/mike';
import { page as eventsContact } from './events/contact';
import { page as eventsOfferte } from './events/offerte-aanvragen';
import heroImage from '../../assets/images/cases/mikexdeliveformule-finis-100-jaar-4.jpg';

const placeholderText = 'Deze pagina is in aanbouw. Binnenkort lees je hier meer over Bold Business.';

function placeholder(slug: string, title: string, eyebrow: string): PageData {
  return {
    slug,
    title,
    accent: 'yellow',
    meta: { title: `${title} | Bold Business`, description: placeholderText, noindex: true },
    sections: [
      { type: 'hero', props: { title, titleAccent: '', eyebrow, image: { src: heroImage, alt: '' }, accent: 'yellow' } },
      { type: 'breadcrumbs' },
      { type: 'richText', props: { id: 'first-section', content: [{ p: [placeholderText] }], align: 'center' } },
    ],
  };
}

/** Links naar de algemene Events-pagina's → de Business-versie (Cases, Over Bold, Contact, Offerte) */
function toBusinessLinks<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(/^\/events\/(cases|over-bold|contact|offerte-aanvragen)(?=[/?#]|$)/, '/business/$1') as T;
  }
  if (Array.isArray(value)) return value.map(toBusinessLinks) as T;
  // Afbeeldingen (astro:assets: src + width + format) en objecten met een prototype ongemoeid laten
  const isImage = (v: object) => 'src' in v && 'width' in v && 'format' in v;
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype && !isImage(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, toBusinessLinks(v)])) as T;
  }
  return value;
}

const copy = (page: PageData, slug: string, sections: PageSection[] = page.sections): PageData => ({
  ...page,
  slug,
  sections: toBusinessLinks(sections),
});

const businessCases = cases.filter((item) => item.category === 'business');

export const businessPages: PageData[] = [
  businessHome,
  ...audiences.business.flatMap((audience) => [
    placeholder(`business/${audience.value}`, audience.title, 'Bold Business'),
    ...services[audience.value as Audience].map((service) =>
      placeholder(`business/${audience.value}/${service.slug}`, service.title, audience.title),
    ),
  ]),
  {
    ...copy(
      eventsCases,
      'business/cases',
      eventsCases.sections.map((s) => (s.type === 'caseGrid' ? { ...s, props: caseGridProps(cases, 'business') } : s)),
    ),
    meta: { ...eventsCases.meta, noindex: businessCases.length === 0 },
  },
  copy(eventsOver, 'business/over-bold'),
  copy(eventsMike, 'business/over-bold/mike'),
  copy(eventsContact, 'business/contact'),
  copy(eventsOfferte, 'business/offerte-aanvragen'),
];
