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
 * 3. Het losse menu-item "AI" (Business) weg; AI staat onder Content.
 * 4. Introteksten: spatie na een groen woord (was in Webflow een marge), ook in concepten.
 * 5. Typfouten in alle inhoud en alt-teksten; samengeplakte woorden in de algemene voorwaarden.
 * 6. Kopstructuur zonder sprongen; socials op de Mike-pagina als lijst met links i.p.v. h6.
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
  // 3. Geen los menu-item "AI" meer (staat al onder Content)
  if (next.business?.menu) next.business.menu = next.business.menu.filter((g) => !(g.href === '/business/content/ai' && !g.children?.length));
  if (JSON.stringify(next) === JSON.stringify(doc)) continue;
  const { _id, _type, _rev, _createdAt, _updatedAt, ...fields } = next;
  tx.patch(id, (p) => p.set(fields));
  log.push(`${id}: menu/footer bijgewerkt`);
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

// 4. Introteksten: spatie na een groen (vet) woord stond in Webflow als marge; nu in de tekst
const intros = await client.fetch('*[_type == "page" && count(sections[_type == "introHighlightSection"]) > 0]');
for (const doc of intros) {
  let changed = false;
  const sections = doc.sections.map((section) => {
    if (section._type !== 'introHighlightSection') return section;
    const content = (section.content ?? []).map((block) => {
      const children = (block.children ?? []).map((child, i, all) => {
        const prev = all[i - 1];
        const prevStrong = prev?.marks?.includes('strong');
        const strong = child.marks?.includes('strong');
        if (prevStrong && !strong && /^[\p{L}\p{N}]/u.test(child.text ?? '')) {
          changed = true;
          return { ...child, text: ` ${child.text}` };
        }
        return child;
      });
      return { ...block, children };
    });
    return { ...section, content };
  });
  if (!changed) continue;
  tx.patch(doc._id, (p) => p.set({ sections }));
  log.push(`${doc._id}: spaties na groene woorden in de introtekst`);
}

// 5. Typfouten (akkoord gebruiker 20 okt) in alle inhoud en alt-teksten; samengeplakte woorden
//    in de algemene voorwaarden (scripts/av-fixes.mjs)
const typos = [
  ['Meer over zakeijke portretten', 'Meer over zakelijke portretten'],
  ['verteld door jouw klants', 'verteld door jouw klanten'],
  ['beweegt en een verhaal verteld.', 'beweegt en een verhaal vertelt.'],
  ['emplyer branding', 'employer branding'],
  ['Rijn Ijssel', 'Rijn IJssel'],
  ['Vidoegraaf', 'Videograaf'],
];
const { fixMergedWords } = await import('./av-fixes.mjs');
const fixStrings = (value, fix) => {
  if (typeof value === 'string') return fix(value);
  if (Array.isArray(value)) return value.map((v) => fixStrings(v, fix));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, k.startsWith('_') || k === 'slug' ? v : fixStrings(v, fix)]));
  return value;
};
const fixTypos = (s) => typos.reduce((acc, [from, to]) => acc.split(from).join(to), s);
const textDocs = await client.fetch('*[_type in ["page", "caseStudy", "teamMember", "testimonial", "siteNavigation", "sanity.imageAsset"]]');
for (const doc of textDocs) {
  const isAv = doc._id.replace(/^drafts\./, '') === 'page-algemene-voorwaarden';
  const next = fixStrings(doc, (s) => (isAv ? fixMergedWords(fixTypos(s)) : fixTypos(s)));
  const { _id, _type, _rev, _createdAt, _updatedAt, ...fields } = next;
  const changedKeys = Object.keys(fields).filter((k) => JSON.stringify(fields[k]) !== JSON.stringify(doc[k]));
  if (!changedKeys.length) continue;
  tx.patch(doc._id, (p) => p.set(Object.fromEntries(changedKeys.map((k) => [k, fields[k]]))));
  log.push(`${doc._id}: tekstcorrecties (${changedKeys.join(', ')})`);
}

// 6. Kopstructuur zonder sprongen (h3 → h5 e.d.); de socials op de Mike-pagina zijn links in een
//    lijst, geen h6-koppen (en "mijn Linkedin" linkt in zijn geheel naar LinkedIn)
const headingFixes = {
  'Waarom de meeste reclamefilms niet werken': 'h4',
  'Waarom zoveel bedrijfsfilms niet werken': 'h4',
  'Waarom afschrikken goed is': 'h4',
  'En daarna?': 'h4',
  'Wat wij maken': 'h3',
  'Een dag in de Achterhoek': 'h3',
};
const blockText = (b) => (b.children ?? []).map((c) => c.text ?? '').join('').trim();
const fixBlocks = (value, onChange) => {
  if (Array.isArray(value)) return value.map((v) => fixBlocks(v, onChange));
  if (!value || typeof value !== 'object') return value;
  if (value._type === 'block') {
    const text = blockText(value);
    const target = headingFixes[text];
    if (target && /^h[3-6]$/.test(value.style ?? '') && value.style !== target) {
      onChange();
      return { ...value, style: target };
    }
    if (value.style === 'h6' && /^mijn (instagram|linkedin)$/i.test(text)) {
      onChange();
      const linkedin = /linkedin/i.test(text);
      const href = linkedin ? 'https://www.linkedin.com/in/mikeampting/' : 'https://www.instagram.com/mikeampting/';
      const markKey = value.markDefs?.find((d) => d.href === href)?._key ?? value.markDefs?.[0]?._key ?? 'link';
      return {
        ...value,
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        markDefs: [{ _key: markKey, _type: 'link', href }],
        children: [{ _key: value.children[0]._key, _type: 'span', marks: [markKey], text }],
      };
    }
    return value;
  }
  return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fixBlocks(v, onChange)]));
};
const allPages = await client.fetch('*[_type == "page"]');
for (const doc of allPages) {
  let changed = false;
  const sections = fixBlocks(doc.sections, () => (changed = true));
  if (!changed) continue;
  tx.patch(doc._id, (p) => p.set({ sections }));
  log.push(`${doc._id}: kopniveaus`);
}

log.forEach((l) => console.log('-', l));
if (dryRun) console.log(`\n(dry-run: ${log.length} wijzigingen, niets geschreven)`);
else if (log.length) {
  await tx.commit();
  console.log('\n✓ Klaar');
} else console.log('Niets te doen.');
