#!/usr/bin/env node
/**
 * Eenmalige migratie (feedbackronde 22 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-22c -- --dry-run   alleen tonen wat er verandert
 *
 * - /events/contact en /business/contact: de eigen placeholder van het berichtveld
 *   ("Jouw bericht/vraag aan Bold Productions") weg, zodat de standaard van het
 *   contactformulier geldt ("Vertel ons over je idee, uitdaging en wensen.").
 * - Menu, footer & social media: de huidige sociale links invullen als de lijst nog leeg is.
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

const OLD_PLACEHOLDER = 'Jouw bericht/vraag aan Bold Productions';
const SOCIALS = [
  { platform: 'linkedin', url: 'https://www.linkedin.com/company/weareboldproductions' },
  { platform: 'instagram', url: 'https://www.instagram.com/weareboldproductions/' },
  { platform: 'vimeo', url: 'https://vimeo.com/user124034017' },
  { platform: 'tiktok', url: 'https://www.tiktok.com/@bold.productions' },
];

const tx = client.transaction();
const log = [];

for (const base of ['page-contact', 'page-business--contact']) {
  for (const id of [base, `drafts.${base}`]) {
    const doc = await client.getDocument(id);
    if (!doc) continue;
    const unset = (doc.sections ?? [])
      .filter((section) => section._type === 'contactSection' && section.messagePlaceholder === OLD_PLACEHOLDER)
      .map((section) => `sections[_key=="${section._key}"].messagePlaceholder`);
    if (unset.length) {
      tx.patch(id, (p) => p.unset(unset));
      log.push(`${id}: unset ${unset.join(', ')}`);
    }
  }
}

for (const id of ['siteNavigation', 'drafts.siteNavigation']) {
  const doc = await client.getDocument(id);
  if (!doc || doc.socials?.length) continue;
  const socials = SOCIALS.map((social, i) => ({ _type: 'socialLink', _key: `social${i}`, ...social }));
  tx.patch(id, (p) => p.set({ socials }));
  log.push(`${id}: socials (${socials.length})`);
}

console.log(log.length ? log.join('\n') : 'Niets te doen.');
if (log.length && !dryRun) {
  await tx.commit();
  console.log('Opgeslagen.');
}
