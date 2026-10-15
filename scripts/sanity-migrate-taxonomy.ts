/**
 * Eenmalige migratie naar de indeling Events/Business → doelgroep → diensten
 * (src/data/taxonomy.ts, studio/schemaTypes/taxonomy.ts).
 *
 *  - Cases: uit de bestaande Sanity-velden `audiences`/`services` (dus met eventuele
 *    aanpassingen van de klant), daarna worden die oude velden verwijderd. Eén doelgroep
 *    (de eerste); diensten die niet bij die doelgroep horen vallen weg (afgesproken
 *    oktober 2026: Casevideo bij Pluggerz, Recap bij Doorgedraaid).
 *  - Testimonials en klantlogo's: uit src/data (testimonials.ts, logos.ts), alleen als er
 *    nog geen indeling is gekozen.
 * Documenten die al een `category` hebben worden niet aangeraakt. Ook concepten (drafts).
 *
 *   npm run sanity:migrate-taxonomy -- --dry-run   # alleen tonen wat er zou veranderen
 *   npm run sanity:migrate-taxonomy
 */
import { createClient } from '@sanity/client';
import { testimonials } from '../src/data/testimonials';
import { artistLogos, businessLogos, clientLogos } from '../src/data/logos';
import { services, type Targeting } from '../src/data/taxonomy';
import { targetingFields } from '../src/lib/sanity/taxonomy';

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

type Raw = { _id: string; _type: string; title?: string; name?: string; quote?: string; organisation?: string; audiences?: string[]; services?: string[] };

const baseId = (id: string) => id.replace(/^drafts\./, '');

/** Oude case-doelgroep → nieuwe indeling ('events' was live de doelgroep organisatoren). */
function fromLegacy(doc: Raw): Targeting {
  const old = doc.audiences?.[0];
  if (old === 'business') return { category: 'business', audience: 'fundament' };
  const audience = old === 'artiesten' || old === 'zakelijke-events' ? old : 'organisatoren';
  return { category: 'events', audience, services: doc.services ?? [] };
}

async function main() {
  console.log(`Sanity-project ${PUBLIC_SANITY_PROJECT_ID} (${PUBLIC_SANITY_DATASET || 'production'})${dryRun ? ' — dry-run' : ''}\n`);
  const docs = await client.fetch<Raw[]>(
    `*[_type in ["caseStudy", "testimonial", "clientLogo"] && !defined(category)]{ _id, _type, title, name, quote, organisation, audiences, services }`,
  );

  const testimonialById = new Map(Object.entries(testimonials).map(([id, t]) => [`testimonial-${id}`, t as Targeting]));
  const testimonialByQuote = new Map(Object.values(testimonials).map((t) => [t.quote, t as Targeting]));
  const logoByName = new Map([...clientLogos, ...artistLogos, ...businessLogos].map((l) => [l.alt, l]));

  const tx = client.transaction();
  const skipped: string[] = [];
  for (const doc of docs) {
    const label = `${doc._type} ${doc.title ?? doc.name ?? doc.organisation ?? doc._id}${doc._id.startsWith('drafts.') ? ' (concept)' : ''}`;
    let targeting: Targeting | undefined;
    if (doc._type === 'caseStudy') targeting = fromLegacy(doc);
    if (doc._type === 'testimonial') targeting = testimonialById.get(baseId(doc._id)) ?? testimonialByQuote.get(doc.quote ?? '');
    if (doc._type === 'clientLogo') targeting = logoByName.get(doc.name ?? '');
    if (!targeting) {
      skipped.push(label);
      continue;
    }
    const allowed = services[targeting.audience].map((s) => s.value);
    const offList = (targeting.services ?? []).filter((s) => !allowed.includes(s));
    const fields = targetingFields({ ...targeting, services: (targeting.services ?? []).filter((s) => allowed.includes(s)) });
    console.log(`• ${label}: ${JSON.stringify(fields)}${offList.length ? `  (weggelaten, hoort niet bij deze doelgroep: ${offList.join(', ')})` : ''}`);
    tx.patch(doc._id, (p) => {
      const patch = p.set(fields);
      return doc._type === 'caseStudy' ? patch.unset(['audiences', 'services']) : patch;
    });
  }
  if (skipped.length) console.log(`\nNiet gevonden in src/data, zelf indelen in Studio:\n${skipped.map((s) => `  - ${s}`).join('\n')}`);
  if (!docs.length) return console.log('Niets te migreren.');
  if (dryRun) return console.log('\n(dry-run: er is niets geschreven)');
  await tx.commit({ visibility: 'async' });
  console.log('\n✓ Klaar.');
}

main().catch((err) => {
  console.error('\nMigratie mislukt:', err.message);
  process.exit(1);
});
