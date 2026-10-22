#!/usr/bin/env node
/**
 * Eenmalige migratie (testimonials met meerdere soorten en doelgroepen, 22 oktober 2026).
 * Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-22e -- --dry-run   alleen tonen wat er verandert
 *
 * - testimonial (ook concepten): category + eventsAudience/businessAudience → categories[] +
 *   eventsAudiences[]/businessAudiences[] (vinkjes).
 * - Business-pagina's (/business/…) waarvan de testimonialsectie alleen Events-testimonials had
 *   gekozen (overgenomen uit Events): lijst leeg = automatisch de Business-testimonials.
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

const tx = client.transaction();
const log = [];

const testimonials = await client.fetch(`*[_type == "testimonial"]{ _id, category, eventsAudience, businessAudience, categories }`);
// Soort per testimonial (ook al gemigreerde), voor de Business-pagina's hieronder
const categoryOf = new Map();
for (const doc of testimonials) {
  const category = doc.categories?.length ? doc.categories : doc.category ? [doc.category] : [];
  categoryOf.set(doc._id.replace(/^drafts\./, ''), category);
  if (!doc.category) continue;
  const single = doc.category === 'business' ? 'business' : 'events';
  const audience = single === 'business' ? doc.businessAudience : doc.eventsAudience;
  const set = doc.categories?.length ? {} : { categories: [single], ...(audience ? { [`${single}Audiences`]: [audience] } : {}) };
  tx.patch(doc._id, (p) => p.set(set).unset(['category', 'eventsAudience', 'businessAudience']));
  log.push(`${doc._id}: ${JSON.stringify(set)}`);
}

const pages = await client.fetch(`*[_type == "page" && slug.current match "business*"]{ _id, sections[_type == "testimonialsSection"]{ _key, "refs": items[]._ref } }`);
for (const page of pages) {
  for (const section of page.sections ?? []) {
    const refs = section.refs ?? [];
    if (refs.length && refs.every((ref) => !(categoryOf.get(ref) ?? []).includes('business'))) {
      tx.patch(page._id, (p) => p.unset([`sections[_key=="${section._key}"].items`]));
      log.push(`${page._id}: testimonials automatisch (was ${refs.length} Events-testimonials)`);
    }
  }
}

console.log(log.length ? log.join('\n') : 'Niets te doen.');
if (log.length && !dryRun) {
  await tx.commit();
  console.log('Opgeslagen.');
}
