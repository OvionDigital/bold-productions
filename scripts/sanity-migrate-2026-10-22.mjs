#!/usr/bin/env node
/**
 * Eenmalige migratie (Business-offerteformulier, 22 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-22 -- --dry-run   alleen tonen wat er verandert
 *
 * /business/offerte-aanvragen (ook een concept): het contactblok krijgt het eigen
 * Business-formulier ('offerte-business', src/data/forms.ts) en de hero-titel wordt
 * "Vertel ons wat je wilt bereiken".
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

const ids = ['page-business--offerte-aanvragen', 'drafts.page-business--offerte-aanvragen'];
const tx = client.transaction();
const log = [];

for (const id of ids) {
  const doc = await client.getDocument(id);
  if (!doc) continue;
  const set = {};
  for (const section of doc.sections ?? []) {
    const path = `sections[_key=="${section._key}"]`;
    if (section._type === 'contactSection' && section.form !== 'offerte-business') set[`${path}.form`] = 'offerte-business';
    if (section._type === 'heroSection') {
      if (section.title !== 'Vertel ons') set[`${path}.title`] = 'Vertel ons';
      if (section.titleAccent !== 'wat je wilt bereiken') set[`${path}.titleAccent`] = 'wat je wilt bereiken';
    }
  }
  if (Object.keys(set).length) {
    tx.patch(id, (p) => p.set(set));
    log.push(`${id}: ${JSON.stringify(set)}`);
  }
}

console.log(log.length ? log.join('\n') : 'Niets te doen.');
if (log.length && !dryRun) {
  await tx.commit();
  console.log('Opgeslagen.');
}
