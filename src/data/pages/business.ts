/**
 * Bold Business (/business/…):
 * - /business: business-home.ts (Webflow /business).
 * - De vier doelgroepen en hun diensten (data/taxonomy.ts): business/<doelgroep>.ts en
 *   business/<doelgroep>/<dienst>.ts, teksten van boldproductions.webflow.io (oktober 2026).
 * - Cases, Over Bold, Mike, Contact en Offerte aanvragen: dezelfde inhoud als onder /events,
 *   met links naar de Business-versies; noindex zolang ze gelijk zijn aan de Events-versies. /business/cases toont alleen Business-cases (nog geen:
 *   noindex zolang de lijst leeg is).
 */
import type { PageData, PageSection } from '../../lib/sections';
import { cases, caseGridProps } from '../cases';
import { page as businessHome } from './business-home';
import { page as eventsCases } from './events/cases';
import { page as eventsOver } from './events/over-bold';
import { page as eventsMike } from './events/over-bold/mike';
import { page as eventsContact } from './events/contact';
import { page as eventsOfferte } from './events/offerte-aanvragen';
import { page as fundament } from './business/fundament';
import { page as brandfilm } from './business/fundament/brandfilm';
import { page as bedrijfsfilm } from './business/fundament/bedrijfsfilm';
import { page as employerBranding } from './business/fundament/employer-branding';
import { page as campagnes } from './business/campagnes';
import { page as commercial } from './business/campagnes/commercial';
import { page as merkactivatie } from './business/campagnes/merkactivatie';
import { page as werving } from './business/campagnes/werving';
import { page as content } from './business/content';
import { page as ai } from './business/content/ai';
import { page as contentcreatie } from './business/content/contentcreatie';
import { page as referentievideo } from './business/content/referentievideo';
import { page as socialContent } from './business/content/social-content';
import { page as productvideo } from './business/content/productvideo';
import { page as projectvideo } from './business/content/projectvideo';
import { page as fotografie } from './business/fotografie';
import { page as bedrijfsfotografie } from './business/fotografie/bedrijfsfotografie';
import { page as productfotografie } from './business/fotografie/productfotografie';
import { page as zakelijkPortret } from './business/fotografie/zakelijk-portret';
import { page as projectfotografie } from './business/fotografie/projectfotografie';

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

/** Kopie van een Events-pagina. Zelfde tekst en SEO als het origineel: noindex tot er eigen
 * Business-teksten zijn (anders ziet Google dubbele inhoud). */
const copy = (page: PageData, slug: string, sections: PageSection[] = page.sections): PageData => ({
  ...page,
  slug,
  meta: { ...page.meta, noindex: true },
  sections: toBusinessLinks(sections),
});

const businessCases = cases.filter((item) => item.category === 'business');

export const businessPages: PageData[] = [
  businessHome,
  fundament,
  brandfilm,
  bedrijfsfilm,
  employerBranding,
  campagnes,
  commercial,
  merkactivatie,
  werving,
  content,
  ai,
  contentcreatie,
  referentievideo,
  socialContent,
  productvideo,
  projectvideo,
  fotografie,
  bedrijfsfotografie,
  productfotografie,
  zakelijkPortret,
  projectfotografie,
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
