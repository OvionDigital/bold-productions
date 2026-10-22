#!/usr/bin/env node
/**
 * Eenmalige migratie (popcorn-cursor, 22 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-22b -- --dry-run   alleen tonen wat er verandert
 *
 * De popcorn-cursor (imageFeatureSection.cinemaCursor) hoort alleen bij secties over de
 * bioscoop. Uit bij de Business-overzichten (campagnes, content, fotografie; tekst gaat
 * niet over de bios) en bij "Is het aftermovie of after movie?". Ook concepten.
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

// Pagina → titel van de image-feature zonder popcorn
const targets = {
  'page-business--campagnes': 'Eerst de vraag achter de vraag.',
  'page-business--content': 'Meer posten is geen strategie',
  'page-business--fotografie': 'Meelopen in plaats van (te veel)',
  'page-aftermovie-laten-maken': 'Is het aftermovie of after movie?',
};

const tx = client.transaction();
const log = [];

for (const [base, title] of Object.entries(targets)) {
  for (const id of [base, `drafts.${base}`]) {
    const doc = await client.getDocument(id);
    if (!doc) continue;
    const set = {};
    for (const section of doc.sections ?? []) {
      if (section._type !== 'imageFeatureSection' || !section.cinemaCursor) continue;
      if (!(section.title ?? '').startsWith(title)) continue;
      set[`sections[_key=="${section._key}"].cinemaCursor`] = false;
    }
    if (Object.keys(set).length) {
      tx.patch(id, (p) => p.set(set));
      log.push(`${id}: ${JSON.stringify(set)}`);
    }
  }
}

console.log(log.length ? log.join('\n') : 'Niets te doen.');
if (log.length && !dryRun) {
  await tx.commit();
  console.log('Opgeslagen.');
}
