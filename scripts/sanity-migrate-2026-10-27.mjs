#!/usr/bin/env node
/**
 * Eenmalige migratie (27 oktober 2026). Opnieuw draaien kan geen kwaad.
 *   npm run sanity:migrate-2026-10-27 -- --dry-run   alleen tonen wat er verandert
 *
 * Nieuwe structured data (specificatie van de SEO-specialist):
 * 1. Contactgegevens staan voortaan op één plek in Sanity (Menu, footer & contact → Contactgegevens),
 *    voor footer, WhatsApp-knop en de organisatie in de structured data. Vult lege velden met de
 *    waarden die tot nu toe in de code stonden (src/data/navigation.ts siteContact).
 * 2. "Soort pagina (voor Google)" en de dienstvelden zijn weg: de soort volgt nu uit het URL-pad.
 *    Haalt die velden uit alle pagina's, gepubliceerd en concept.
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

/** Gelijk aan siteContact in src/data/navigation.ts */
const CONTACT = {
  email: 'mike@weareboldproductions.com',
  phone: '+31 6 233 286 55',
  street: 'Koopmanslaan 6',
  postalCode: '7005 BK',
  city: 'Doetinchem',
  kvk: '80117686',
};
const OLD_FIELDS = ['schemaType', 'serviceType', 'serviceName', 'serviceDescription', 'catalogName', 'catalogItems'];

const tx = client.transaction();
const log = [];

const navs = await client.fetch(`*[_id in ["siteNavigation", "drafts.siteNavigation"]]{ _id, _rev, contact }`);
for (const nav of navs) {
  const missing = Object.entries(CONTACT).filter(([key]) => !nav.contact?.[key]?.trim());
  if (!missing.length) continue;
  log.push(`${nav._id}: contact ${missing.map(([key]) => key).join(', ')}`);
  tx.patch(nav._id, (p) =>
    p
      .ifRevisionId(nav._rev)
      .setIfMissing({ contact: {} })
      .set(Object.fromEntries(missing.map(([key, value]) => [`contact.${key}`, value]))),
  );
}

const pages = await client.fetch(
  `*[_type == "page" && (${OLD_FIELDS.map((f) => `defined(${f})`).join(' || ')})]{ _id, _rev, ${OLD_FIELDS.join(', ')} }`,
);
for (const page of pages) {
  const present = OLD_FIELDS.filter((field) => page[field] !== undefined && page[field] !== null);
  log.push(`${page._id}: weg ${present.join(', ')}`);
  tx.patch(page._id, (p) => p.ifRevisionId(page._rev).unset(present));
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
