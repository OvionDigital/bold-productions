import { defineDocuments, defineLocations, type PresentationPluginOptions } from 'sanity/presentation';

/**
 * Live voorbeeld (Presentation Tool, tab "Voorbeeld"): de site uit astro.preview.config.mjs in
 * een iframe, met concepten en klikbare teksten. Adres via SANITY_STUDIO_PREVIEW_URL (studio/.env,
 * zit in de build van `npx sanity deploy`); lokaal standaard `npm run preview:dev` in de site.
 *
 * Adres van de echte site (knop "Bekijk op de site"): SANITY_STUDIO_SITE_URL.
 */
export const PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4322';
export const SITE_URL = (process.env.SANITY_STUDIO_SITE_URL || 'https://www.weareboldproductions.com').replace(/\/$/, '');

/** URL-pad van een pagina ("home" = de homepage) */
export const pagePath = (slug?: string) => (slug === 'home' ? '/' : `/${slug ?? ''}`);
/** URL-pad van een case (gelijk aan caseUrl in src/data/cases.ts) */
export const casePath = (category?: string, slug?: string) => `/${category ?? 'events'}/cases/${slug ?? ''}`;

/** Welk document hoort bij de pagina die in het voorbeeld open staat (voor het zijpaneel) */
const mainDocuments = defineDocuments([
  { route: '/', filter: '_type == "page" && slug.current == "home"' },
  {
    route: '/:category/cases/:slug',
    filter: '_type == "caseStudy" && category == $category && slug.current == $slug',
  },
  {
    route: ['/:a', '/:a/:b', '/:a/:b/:c', '/:a/:b/:c/:d'],
    filter: '_type == "page" && slug.current == $slug',
    params: ({ path }) => ({ slug: path.replace(/^\//, '') }),
  },
]);

/** Op welke pagina('s) een document te zien is (balk "Gebruikt op …" boven het document) */
const locations = {
  page: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => (doc?.slug ? { locations: [{ title: doc.title || pagePath(doc.slug), href: pagePath(doc.slug) }] } : null),
  }),
  caseStudy: defineLocations({
    select: { title: 'title', slug: 'slug.current', category: 'category' },
    resolve: (doc) =>
      doc?.slug
        ? {
            locations: [
              { title: doc.title || 'Case', href: casePath(doc.category, doc.slug) },
              { title: 'Cases-overzicht', href: `/${doc.category ?? 'events'}/cases` },
            ],
          }
        : null,
  }),
  siteNavigation: defineLocations({
    locations: [
      { title: 'Homepage (neutraal menu en footer)', href: '/' },
      { title: 'Events (menu en footer)', href: '/events' },
      { title: 'Business (menu en footer)', href: '/business' },
    ],
  }),
};

export const presentationOptions: PresentationPluginOptions = {
  title: 'Voorbeeld',
  previewUrl: { initial: PREVIEW_URL },
  resolve: { mainDocuments, locations },
};
