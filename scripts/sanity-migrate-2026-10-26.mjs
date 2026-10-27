#!/usr/bin/env node
/**
 * Eenmalige migratie (26 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-26 -- --dry-run   alleen tonen wat er verandert
 *
 * Foto's in de polaroidstapel (polaroidStackSection.photos) stonden als `_type: "image"`, het
 * schema verwacht `imageWithAlt`. Studio toonde ze als "Item van type image niet geldig voor
 * deze lijst" en kon ze niet bewerken. Zet het type goed, in gepubliceerde pagina's en concepten.
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

const docs = await client.fetch(`*[defined(sections[_type == "polaroidStackSection"])]{ _id, _rev, sections }`);
const tx = client.transaction();
const log = [];

for (const doc of docs) {
  const set = {};
  for (const section of doc.sections ?? []) {
    if (section._type !== 'polaroidStackSection') continue;
    for (const photo of section.photos ?? []) {
      if (photo._type !== 'image') continue;
      log.push(`${doc._id}: polaroid ${photo._key} image → imageWithAlt`);
      set[`sections[_key=="${section._key}"].photos[_key=="${photo._key}"]._type`] = 'imageWithAlt';
    }
  }
  if (Object.keys(set).length) tx.patch(doc._id, (p) => p.ifRevisionId(doc._rev).set(set));
}

if (!log.length) {
  console.log('Niets te doen.');
} else if (dryRun) {
  console.log(log.join('\n'));
  console.log(`\n--dry-run: ${log.length} wijziging(en) niet uitgevoerd.`);
} else {
  console.log(log.join('\n'));
  await tx.commit();
  console.log(`\n${log.length} wijziging(en) uitgevoerd.`);
}
