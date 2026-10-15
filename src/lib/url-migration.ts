/**
 * Herstructurering oktober 2026: alles wat er was valt onder /events (Events wordt
 * Organisatoren), /business komt erbij, de homepage kiest tussen de twee.
 * Eén mapping voor de Sanity-migratie (scripts/sanity-migrate-urls.ts) en de
 * 301-redirects (public/_redirects). Paden zonder trailing slash.
 */

/** Oude eerste padsegmenten → nieuw voorvoegsel */
const PREFIXES: [string, string][] = [
  ['/events', '/events/organisatoren'],
  ['/artiesten', '/events/artiesten'],
  ['/zakelijke-events', '/events/zakelijke-events'],
  ['/cases', '/events/cases'],
  ['/over', '/events/over-bold'],
  ['/contact', '/events/contact'],
  ['/offerte-aanvragen', '/events/offerte-aanvragen'],
];

/**
 * Oud pad → nieuw pad (query en hash blijven staan); andere paden ongewijzigd.
 * Alleen voor inhoud van vóór de herstructurering: '/events' betekende toen organisatoren.
 */
export function migratePath(href: string): string {
  const match = /^(\/[^?#]*)(.*)$/.exec(href);
  if (!match) return href;
  const [, path, rest] = match;
  if (path.startsWith('/events/') && /^\/events\/(organisatoren|artiesten|zakelijke-events|cases|over-bold|contact|offerte-aanvragen)(\/|$)/.test(path)) {
    return href; // al nieuw
  }
  for (const [from, to] of PREFIXES) {
    if (path === from || path.startsWith(`${from}/`)) return `${to}${path.slice(from.length)}${rest}`;
  }
  return href;
}

/** Slug zonder slashes ('events/aftermovie') → nieuwe slug */
export const migrateSlug = (slug: string) => migratePath(`/${slug}`).slice(1);
