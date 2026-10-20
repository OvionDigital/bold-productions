/**
 * Groepen van de /sitemap-pagina, automatisch uit alle pagina's (LinkGroups met `auto: 'site'`).
 * Komt een pagina erbij, verandert ze of verdwijnt ze, dan klopt de sitemap bij de volgende
 * build vanzelf. Alleen indexeerbare pagina's (zoals sitemap.xml), zonder 404 en de sitemap zelf.
 *
 * Indeling: Algemeen (homepage, Events, Business) · per soort per doelgroep (doelgroeppagina,
 * dan de diensten in de volgorde van de taxonomie) · per soort de algemene pagina's (Over Bold,
 * cases, contact, offerte) · per soort de cases · landingspagina's · juridisch.
 */
import type { LinkGroup } from '../components/sections/LinkGroups.astro';
import { audiences, categories, services } from '../data/taxonomy';

export interface SitemapPage {
  slug: string;
  title: string;
  noindex: boolean;
}

const EXCLUDE = new Set(['404', 'sitemap']);
const LEGAL = ['privacyverklaring', 'cookiebeleid', 'algemene-voorwaarden'];
/** Volgorde van de algemene pagina's per soort (pad na /<soort>/) */
const GENERAL_ORDER = ['over-bold', 'over-bold/mike', 'cases', 'contact', 'offerte-aanvragen'];

const href = (slug: string) => (slug === 'home' ? '/' : `/${slug}`);
const byTitle = (a: SitemapPage, b: SitemapPage) => a.title.localeCompare(b.title, 'nl');
const toLinks = (list: SitemapPage[]) => list.map((page) => ({ label: page.title, href: href(page.slug) }));

export function sitemapGroups(all: SitemapPage[]): LinkGroup[] {
  const pages = all.filter((page) => !page.noindex && !EXCLUDE.has(page.slug));
  const used = new Set<string>();
  const take = (filter: (page: SitemapPage) => boolean) => {
    const found = pages.filter((page) => !used.has(page.slug) && filter(page));
    found.forEach((page) => used.add(page.slug));
    return found;
  };
  const groups: LinkGroup[] = [];
  const add = (title: string, list: SitemapPage[]) => {
    if (list.length) groups.push({ title, links: toLinks(list) });
  };

  add('Algemeen', take((page) => ['home', ...categories.map((c) => c.value)].includes(page.slug)).sort((a, b) => ['home', 'events', 'business'].indexOf(a.slug) - ['home', 'events', 'business'].indexOf(b.slug)));

  for (const category of categories) {
    for (const audience of audiences[category.value]) {
      const base = `${category.value}/${audience.value}`;
      const order = [base, ...services[audience.value].map((service) => `${base}/${service.slug}`)];
      const rank = (page: SitemapPage) => (order.includes(page.slug) ? order.indexOf(page.slug) : order.length);
      const list = take((page) => page.slug === base || page.slug.startsWith(`${base}/`)).sort((a, b) => rank(a) - rank(b) || byTitle(a, b));
      add(`${category.title} – ${audience.title}`, list);
    }
    const casesBase = `${category.value}/cases/`;
    const caseList = take((page) => page.slug.startsWith(casesBase)).sort(byTitle);
    const rank = (page: SitemapPage) => {
      const rest = page.slug.slice(category.value.length + 1);
      return GENERAL_ORDER.includes(rest) ? GENERAL_ORDER.indexOf(rest) : GENERAL_ORDER.length;
    };
    add(`${category.title} – Bold Productions`, take((page) => page.slug.startsWith(`${category.value}/`)).sort((a, b) => rank(a) - rank(b) || byTitle(a, b)));
    add(`${category.title} – Cases`, caseList);
  }

  const legal = take((page) => LEGAL.includes(page.slug)).sort((a, b) => LEGAL.indexOf(a.slug) - LEGAL.indexOf(b.slug));
  add("Diensten & landingspagina's", take(() => true).sort(byTitle));
  add('Juridisch', legal);
  return groups;
}
