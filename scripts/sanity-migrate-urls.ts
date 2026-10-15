/**
 * Eenmalige migratie van de URL-structuur (oktober 2026, src/lib/url-migration.ts):
 * alles onder /events, Events heet Organisatoren, /cases → /events/cases enz.
 *
 *  - Pagina's: URL-pad (slug) omzetten.
 *  - Pagina's, cases en de Events-homepage: elke interne link (tekst die met '/' begint:
 *    knoppen, linkgroepen, links in rich text) omzetten.
 * Ook concepten (drafts). Alleen gewijzigde velden worden geschreven. Draait maar één keer:
 * staat er al een pagina op 'events/organisatoren', dan stopt het script (een tweede keer
 * zou nieuwe links naar /events verkeerd omzetten).
 *
 *   npm run sanity:migrate-urls -- --dry-run   # alleen tonen wat er zou veranderen
 *   npm run sanity:migrate-urls
 * Daarna: npm run sanity:seed (nieuwe pagina's: homepage, Business).
 */
import { createClient } from '@sanity/client';
import { migratePath, migrateSlug } from '../src/lib/url-migration';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN } = process.env;
if (!PUBLIC_SANITY_PROJECT_ID || !SANITY_API_WRITE_TOKEN) {
  console.error('Ontbrekende env-variabelen. Zet PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET en SANITY_API_WRITE_TOKEN in .env (zie .env.example).');
  process.exit(1);
}

const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: SANITY_API_WRITE_TOKEN,
  useCdn: false,
  perspective: 'raw',
});
const dryRun = process.argv.includes('--dry-run');

type Doc = { _id: string; _type: string; slug?: { current?: string } } & Record<string, unknown>;

/** Alle interne paden in een waarde omzetten; `changes` verzamelt oud → nieuw voor het log. */
function migrateValue(value: unknown, changes: string[]): unknown {
  if (typeof value === 'string') {
    if (!value.startsWith('/')) return value;
    const next = migratePath(value);
    if (next !== value) changes.push(`${value} → ${next}`);
    return next;
  }
  if (Array.isArray(value)) return value.map((v) => migrateValue(v, changes));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, k.startsWith('_') ? v : migrateValue(v, changes)]));
  }
  return value;
}

async function main() {
  console.log(`Sanity-project ${PUBLIC_SANITY_PROJECT_ID} (${PUBLIC_SANITY_DATASET || 'production'})${dryRun ? ' — dry-run' : ''}\n`);
  const done = await client.fetch<number>(`count(*[_type == "page" && slug.current == "events/organisatoren"])`);
  if (done) {
    console.log('Al gemigreerd (er is een pagina events/organisatoren). Niets gedaan.');
    return;
  }

  const docs = await client.fetch<Doc[]>(`*[_type in ["page", "caseStudy", "homepage"]]`);
  const tx = client.transaction();
  let count = 0;
  for (const doc of docs) {
    const set: Record<string, unknown> = {};
    const log: string[] = [];
    if (doc._type === 'page' && doc.slug?.current) {
      const next = migrateSlug(doc.slug.current);
      if (next !== doc.slug.current) {
        set.slug = { ...doc.slug, current: next };
        log.push(`URL-pad ${doc.slug.current} → ${next}`);
      }
    }
    for (const [field, value] of Object.entries(doc)) {
      if (field.startsWith('_') || field === 'slug') continue;
      const changes: string[] = [];
      const next = migrateValue(value, changes);
      if (changes.length) {
        set[field] = next;
        log.push(...changes.map((c) => `${field}: ${c}`));
      }
    }
    if (!log.length) continue;
    count++;
    console.log(`• ${doc._type} ${doc.slug?.current ?? doc._id}${doc._id.startsWith('drafts.') ? ' (concept)' : ''}`);
    log.forEach((line) => console.log(`    ${line}`));
    tx.patch(doc._id, (p) => p.set(set));
  }
  console.log(`\n${count} documenten${dryRun ? ' (dry-run: er is niets geschreven)' : ''}.`);
  if (dryRun || !count) return;
  await tx.commit({ visibility: 'async' });
  console.log('✓ Klaar. Vergeet niet: npm run sanity:seed (nieuwe pagina\'s).');
}

main().catch((err) => {
  console.error('\nMigratie mislukt:', err.message);
  process.exit(1);
});
