#!/usr/bin/env node
/**
 * Eenmalige migratie (cases met meerdere soorten en doelgroepen, 22 oktober 2026). Opnieuw
 * draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-22d -- --dry-run   alleen tonen wat er verandert
 *
 * caseStudy (ook concepten): category + eventsAudience/businessAudience (één keuze) →
 * categories[] + eventsAudiences[]/businessAudiences[] (vinkjes). De dienstvelden per
 * doelgroep blijven zoals ze zijn.
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

const docs = await client.fetch(`*[_type == "caseStudy" && defined(category)]{ _id, category, eventsAudience, businessAudience, categories }`);
const tx = client.transaction();
const log = [];

for (const doc of docs) {
  const category = doc.category === 'business' ? 'business' : 'events';
  const audience = category === 'business' ? doc.businessAudience : doc.eventsAudience;
  const set = doc.categories?.length ? {} : { categories: [category], ...(audience ? { [`${category}Audiences`]: [audience] } : {}) };
  tx.patch(doc._id, (p) => p.set(set).unset(['category', 'eventsAudience', 'businessAudience']));
  log.push(`${doc._id}: ${JSON.stringify(set)}`);
}

console.log(log.length ? log.join('\n') : 'Niets te doen.');
if (log.length && !dryRun) {
  await tx.commit();
  console.log('Opgeslagen.');
}
