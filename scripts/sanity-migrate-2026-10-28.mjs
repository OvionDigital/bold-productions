#!/usr/bin/env node
/**
 * Eenmalige migratie (28 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-28 -- --dry-run   alleen tonen wat er verandert
 *
 * Redirectplan en controle van de SEO-specialist:
 * 1. Zakelijke events › Promovideo heet in de URL voortaan promovideos (meervoud, zoals bij
 *    Organisatoren): /events/zakelijke-events/promovideo → /events/zakelijke-events/promovideos.
 *    Het URL-pad van de pagina en elke link ernaar (menu, footer, tegels) in alle documenten.
 * 2. Case-URL's zonder hoofdletters: TimestampArnhem → timestamp-arnhem (alle cases met een
 *    hoofdletter in het URL-pad krijgen hun pad in kleine letters met streepjes).
 * Gepubliceerd én concept.
 */
import { createClient } from '@sanity/client';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN } = process.env;
if (!PUBLIC_SANITY_PROJECT_ID || !SANITY_API_WRITE_TOKEN) {
  console.error('Zet PUBLIC_SANITY_PROJECT_ID en SANITY_API_WRITE_TOKEN in .env.');
  process.exit(1);
}
const dryRun = process.argv.includes('--dry-run');
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: SANITY_API_WRITE_TOKEN,
  useCdn: false,
  perspective: 'raw',
});

const OLD_SERVICE = /events\/zakelijke-events\/promovideo(?![a-z0-9-])/g;
const NEW_SERVICE = 'events/zakelijke-events/promovideos';
/** Gelijk aan slugify van de case in studio/schemaTypes/documents/caseStudy.ts, plus CamelCase → streepjes */
const caseSlug = (slug) =>
  slug
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Alle strings in een document met hun Sanity-patchpad (array-items op _key waar die er is) */
function* strings(value, path) {
  if (typeof value === 'string') yield [path, value];
  else if (Array.isArray(value))
    for (const [i, item] of value.entries()) yield* strings(item, `${path}[${item && typeof item === 'object' && item._key ? `_key=="${item._key}"` : i}]`);
  else if (value && typeof value === 'object')
    for (const [key, child] of Object.entries(value)) if (!key.startsWith('_')) yield* strings(child, path ? `${path}.${key}` : key);
}

const tx = client.transaction();
const log = [];

const all = await client.fetch(`*[!(_type match "sanity.*") && !(_id in path("_.**"))]`);
for (const doc of all) {
  const set = {};
  for (const [path, value] of strings(doc, '')) {
    if (OLD_SERVICE.test(value)) set[path] = value.replace(OLD_SERVICE, NEW_SERVICE);
    OLD_SERVICE.lastIndex = 0;
  }
  if (doc._type === 'caseStudy' && doc.slug?.current && /[A-Z]/.test(doc.slug.current)) set['slug.current'] = caseSlug(doc.slug.current);
  if (!Object.keys(set).length) continue;
  log.push(`${doc._id}:\n${Object.entries(set).map(([path, value]) => `  ${path} = ${value}`).join('\n')}`);
  tx.patch(doc._id, (p) => p.ifRevisionId(doc._rev).set(set));
}

if (!log.length) {
  console.log('Niets te doen.');
} else if (dryRun) {
  console.log(log.join('\n'));
  console.log(`\n--dry-run: ${log.length} document(en) niet gewijzigd.`);
} else {
  console.log(log.join('\n'));
  await tx.commit();
  console.log(`\n${log.length} document(en) gewijzigd.`);
}
