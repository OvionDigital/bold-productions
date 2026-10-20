#!/usr/bin/env node
/**
 * Eenmalige migratie (Business-pagina's gevuld, 20 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-20 -- --dry-run   alleen tonen wat er verandert
 *
 * 1. Dienst "Beeldenbank" heet "Contentcreatie" (/business/content/contentcreatie) en
 *    "Portret- en teamfoto's" staat op /business/fotografie/zakelijk-portret (zoals in Webflow):
 *    links en labels in menu en footer (siteNavigation, ook een concept) bijwerken.
 * 2. De twee placeholderpagina's op de oude URL's verwijderen (de nieuwe pagina's komen uit
 *    npm run sanity:seed). Alleen als de klant ze niet heeft aangepast (geen concept, nog de
 *    placeholdertekst); anders blijven ze staan en meldt het script dat.
 * Daarna: npm run sanity:seed -- --force --only=<de Business-doelgroep- en dienstpagina's>.
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

const renames = [
  { from: '/business/content/beeldenbank', to: '/business/content/contentcreatie', label: ['Beeldenbank', 'Contentcreatie'] },
  { from: '/business/fotografie/portret-en-teamfotos', to: '/business/fotografie/zakelijk-portret' },
];
const obsolete = ['page-business--content--beeldenbank', 'page-business--fotografie--portret-en-teamfotos'];
const placeholderText = 'Deze pagina is in aanbouw.';

const log = [];
const tx = client.transaction();

// 1. Menu en footer
function rewrite(value) {
  if (Array.isArray(value)) return value.map(rewrite);
  if (value && typeof value === 'object') {
    const out = Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rewrite(v)]));
    const rename = renames.find((r) => out.href === r.from);
    if (rename) {
      out.href = rename.to;
      if (rename.label && out.label === rename.label[0]) out.label = rename.label[1];
    }
    return out;
  }
  return value;
}
for (const id of ['siteNavigation', 'drafts.siteNavigation']) {
  const doc = await client.getDocument(id);
  if (!doc) continue;
  const next = rewrite(doc);
  if (JSON.stringify(next) === JSON.stringify(doc)) continue;
  const { _id, _type, _rev, _createdAt, _updatedAt, ...fields } = next;
  tx.patch(id, (p) => p.set(fields));
  log.push(`${id}: links/labels Contentcreatie en zakelijk-portret`);
}

// 2. Placeholders op de oude URL's
for (const id of obsolete) {
  const [doc, draft] = await Promise.all([client.getDocument(id), client.getDocument(`drafts.${id}`)]);
  if (!doc && !draft) continue;
  if (draft || !JSON.stringify(doc).includes(placeholderText)) {
    log.push(`${id}: NIET verwijderd (concept of aangepast door de klant), controleer handmatig`);
    continue;
  }
  tx.delete(id);
  log.push(`${id}: verwijderd`);
}

log.forEach((l) => console.log('-', l));
if (dryRun) console.log(`\n(dry-run: ${log.length} wijzigingen, niets geschreven)`);
else if (log.length) {
  await tx.commit();
  console.log('\n✓ Klaar');
} else console.log('Niets te doen.');
