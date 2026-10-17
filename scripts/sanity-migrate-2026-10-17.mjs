#!/usr/bin/env node
/**
 * Eenmalige migratie (feedback klant 17 oktober 2026). Al gedraaid. Opnieuw draaien kan geen
 * kwaad (wat al gedaan is wordt overgeslagen); de tweede keer haalt stap 8 ook /events mee.
 *   npm run sanity:migrate-2026-10-17 -- --dry-run   alleen tonen wat er verandert
 *
 * 1. /events: het singleton 'homepage' wordt een gewone pagina (page-events-home, URL-pad
 *    "events") met dezelfde inhoud als secties. Het oude document blijft staan (niet meer in Studio).
 * 2. Startpagina's bovenaan in "Pagina's": listOrder op home (1), events (2), business (3).
 * 3. Klantlogo's: Events en/of Business met meerdere doelgroepen (categories,
 *    eventsAudiences, businessAudiences). Stond een logo in de vaste strip van een andere
 *    doelgroep (Proost bij Organisatoren), dan krijgt het die doelgroep erbij.
 * 4. Testimonials: geen diensten meer.
 * 5. Logostrips zonder vaste lijst (automatisch de doelgroep van de pagina, max. 10 willekeurig);
 *    uitgelichte case zonder vaste case op pagina's onder /events en /business (willekeurig
 *    passend). Landingspagina's buiten /events en /business houden hun vaste case.
 * 6. Menu: "Offerte aanvragen" onder "Contact" (Events en Business).
 * 7. mailto:mike@mikeampting.nl → mailto:mike@weareboldproductions.com.
 * 8. Alt-teksten naar de afbeelding zelf (Media, sanity.imageAsset.altText); afwijkende blijven.
 * Concepten (drafts.*) krijgen dezelfde wijzigingen, zodat publiceren niets terugdraait.
 */
import { createClient } from '@sanity/client';
import { randomBytes } from 'node:crypto';

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

const key = () => randomBytes(6).toString('hex');
const EVENTS_AUDIENCES = ['organisatoren', 'artiesten', 'zakelijke-events'];
const SERVICE_FIELDS = [
  'servicesOrganisatoren',
  'servicesArtiesten',
  'servicesZakelijkeEvents',
  'servicesFundament',
  'servicesCampagnes',
  'servicesContent',
  'servicesFotografie',
];
const OLD_MAIL = 'mailto:mike@mikeampting.nl';
const NEW_MAIL = 'mailto:mike@weareboldproductions.com';

const docs = await client.fetch(`*[_type in ["homepage", "page", "clientLogo", "testimonial", "siteNavigation"]]`);
const byId = new Map(docs.map((d) => [d._id, d]));
const published = (type) => docs.filter((d) => d._type === type && !d._id.startsWith('drafts.'));
/** Gepubliceerd document + concept (als dat er is) */
const withDraft = (id) => [byId.get(id), byId.get(`drafts.${id}`)].filter(Boolean);

const tx = client.transaction();
const log = [];
const patch = (id, ops, why) => {
  log.push(`${id}: ${why}`);
  tx.patch(id, ops);
};

// ─── 1. /events als pagina ─────────────────────────────────────────────────────
const home = byId.get('homepage');
if (home && !byId.get('page-events-home')) {
  const fixMail = (cta) => (cta?.href === OLD_MAIL ? { ...cta, href: NEW_MAIL } : cta);
  const sections = [
    {
      _type: 'heroSection',
      _key: key(),
      title: home.heroTitle,
      titleAccent: home.heroTitleAccent,
      eyebrow: home.heroEyebrow,
      primaryCta: home.heroPrimaryCta,
      secondaryCta: home.heroSecondaryCta && { icon: 'arrow-down', ...home.heroSecondaryCta },
      image: home.heroImage,
      video: home.heroVideo?.id ? { _type: 'vimeoVideo', id: home.heroVideo.id, hash: home.heroVideo.hash, title: home.heroVideo.title } : undefined,
      videoOnMobile: Boolean(home.heroVideo?.loadOnMobile),
    },
    { _type: 'logoMarqueeSection', _key: key(), title: home.trustedByTitle || 'Vertrouwd door' },
    { _type: 'introHighlightSection', _key: key(), content: home.introContent, anchorId: 'first-section' },
    {
      _type: 'timelineSection',
      _key: key(),
      title: home.timelineTitle,
      gradient: home.timelineGradient,
      intro: home.timelineIntro,
      steps: (home.timelineSteps ?? []).map((step) => ({ _type: 'timelineStep', ...step })),
      cta: home.timelineCta,
      reverse: false,
    },
    {
      _type: 'testimonialsSection',
      _key: key(),
      eyebrow: home.testimonialsEyebrow,
      title: home.testimonialsTitle,
      gradient: home.testimonialsGradient,
      items: home.testimonialsItems,
    },
    {
      _type: 'polaroidStackSection',
      _key: key(),
      eyebrow: home.backstageEyebrow,
      title: home.backstageTitle,
      gradient: home.backstageGradient,
      photos: home.backstagePhotos,
    },
    {
      _type: 'textMediaSection',
      _key: key(),
      showContactForm: false,
      title: home.micDropTitle,
      gradient: home.micDropGradient,
      body: home.micDropBody,
      cta: fixMail(home.micDropCta),
      mediaType: home.micDropMediaType ?? 'vimeo',
      video: home.micDropVideo ? { _type: 'vimeoVideo', ...home.micDropVideo } : undefined,
      image: home.micDropImage,
      triangles: home.micDropTriangles ?? true,
      layout: 'margin',
    },
  ];
  log.push('page-events-home: nieuw (inhoud van het singleton homepage)');
  tx.create({
    _id: 'page-events-home',
    _type: 'page',
    title: 'Events',
    slug: { _type: 'slug', current: 'events' },
    accent: 'orange',
    metaTitle: home.metaTitle,
    metaDescription: home.metaDescription,
    schemaType: 'none',
    noindex: false,
    listOrder: 2,
    sections: JSON.parse(JSON.stringify(sections)),
  });
}
for (const doc of withDraft('homepage')) {
  if (doc.micDropCta?.href === OLD_MAIL) patch(doc._id, { set: { 'micDropCta.href': NEW_MAIL } }, 'mailto Mike');
}

// ─── 2. Startpagina's bovenaan ──────────────────────────────────────────────────
for (const [id, order] of [
  ['page-home', 1],
  ['page-business', 3],
]) {
  for (const doc of withDraft(id)) if (doc.listOrder !== order) patch(doc._id, { set: { listOrder: order } }, `listOrder ${order}`);
}

// Kruimelpad: /events/organisatoren heette nog "Events" (van vóór de herstructurering)
for (const doc of withDraft('page-events')) {
  if (doc.slug?.current === 'events/organisatoren' && doc.title === 'Events') patch(doc._id, { set: { title: 'Organisatoren' } }, 'titel Organisatoren');
}

// ─── 3. Klantlogo's: meerdere doelgroepen ───────────────────────────────────────
/** Doelgroepen per logo uit de vaste strips op /events/<doelgroep>/… */
const extraAudiences = new Map();
for (const page of published('page')) {
  const [category, audience] = (page.slug?.current ?? '').split('/');
  if (category !== 'events' || !EVENTS_AUDIENCES.includes(audience)) continue;
  for (const section of page.sections ?? []) {
    if (section._type !== 'logoMarqueeSection') continue;
    for (const ref of section.logos ?? []) {
      const set = extraAudiences.get(ref._ref) ?? new Set();
      set.add(audience);
      extraAudiences.set(ref._ref, set);
    }
  }
}
for (const logo of docs.filter((d) => d._type === 'clientLogo')) {
  if (Array.isArray(logo.categories)) continue;
  const baseId = logo._id.replace(/^drafts\./, '');
  const categories = logo.category ? [logo.category] : ['events'];
  const events = new Set(logo.category === 'events' && logo.eventsAudience ? [logo.eventsAudience] : []);
  if (categories.includes('events')) (extraAudiences.get(baseId) ?? []).forEach((a) => events.add(a));
  const business = logo.category === 'business' && logo.businessAudience ? [logo.businessAudience] : [];
  const set = { categories };
  if (categories.includes('events')) set.eventsAudiences = EVENTS_AUDIENCES.filter((a) => events.has(a));
  if (categories.includes('business')) set.businessAudiences = business;
  patch(logo._id, { set, unset: ['category', 'eventsAudience', 'businessAudience'] }, `logo → ${JSON.stringify(set)}`);
}

// ─── 4. Testimonials zonder diensten ────────────────────────────────────────────
for (const t of docs.filter((d) => d._type === 'testimonial')) {
  const present = SERVICE_FIELDS.filter((f) => f in t);
  if (present.length) patch(t._id, { unset: present }, `testimonial: ${present.join(', ')} weg`);
}

// ─── 5. Logostrips en uitgelichte cases automatisch ─────────────────────────────
for (const page of docs.filter((d) => d._type === 'page')) {
  const slug = page.slug?.current ?? '';
  const underSection = /^(events|business)(\/|$)/.test(slug);
  const unset = [];
  for (const section of page.sections ?? []) {
    if (section._type === 'logoMarqueeSection' && section.logos?.length) unset.push(`sections[_key=="${section._key}"].logos`);
    if (section._type === 'caseSpotlightSection' && section.case && underSection) unset.push(`sections[_key=="${section._key}"].case`);
  }
  if (unset.length) patch(page._id, { unset }, `automatisch: ${unset.map((u) => u.split('.').pop()).join(', ')}`);
}

// ─── 6. Menu: Offerte aanvragen onder Contact ───────────────────────────────────
for (const nav of withDraft('siteNavigation')) {
  const set = {};
  for (const part of ['events', 'business']) {
    const menu = nav[part]?.menu;
    if (!menu) continue;
    const offerte = menu.find((g) => /offerte/i.test(g.label) && !g.children?.length);
    const contact = menu.find((g) => /^contact$/i.test(g.label));
    if (!offerte || !contact) continue;
    set[`${part}.menu`] = menu
      .filter((g) => g !== offerte)
      .map((g) =>
        g === contact
          ? { ...g, children: [...(g.children ?? []), { _key: key(), _type: 'menuLink', label: offerte.label, href: offerte.href }] }
          : g,
      );
  }
  if (Object.keys(set).length) patch(nav._id, { set }, 'Offerte aanvragen onder Contact');
}

// ─── 8. Alt-teksten naar de afbeelding zelf (Media) ─────────────────────────────
// Per afbeelding de meest gebruikte alt-tekst op het asset-document (altText); op de plekken
// met diezelfde tekst gaat het eigen veld leeg (de site valt terug op altText). Afwijkende
// teksten en bewust lege alt ("", decoratief) blijven op hun plek staan.
const usageDocs = await client.fetch(`*[_type in ["page", "caseStudy", "testimonial", "teamMember"]]`);
const usages = []; // { docId, path, assetId, alt }
const walk = (value, path, docId) => {
  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(item, `${path}[${item && typeof item === 'object' && item._key ? `_key=="${item._key}"` : i}]`, docId));
  } else if (value && typeof value === 'object') {
    const assetId = value.asset?._ref;
    if (typeof assetId === 'string' && assetId.startsWith('image-') && typeof value.alt === 'string') {
      usages.push({ docId, path: `${path}.alt`, assetId, alt: value.alt });
    }
    for (const [k, v] of Object.entries(value)) if (!k.startsWith('_') && k !== 'asset') walk(v, path ? `${path}.${k}` : k, docId);
  }
};
for (const doc of usageDocs) walk(doc, '', doc._id);
const assetIds = [...new Set(usages.map((u) => u.assetId))];
const assets = new Map((await client.fetch(`*[_id in $ids]{ _id, altText }`, { ids: assetIds })).map((a) => [a._id, a]));
const unsetByDoc = new Map();
for (const assetId of assetIds) {
  const own = usages.filter((u) => u.assetId === assetId && u.alt.trim());
  if (!own.length) continue;
  let altText = assets.get(assetId)?.altText;
  if (!altText) {
    const counts = new Map();
    own.forEach((u) => counts.set(u.alt, (counts.get(u.alt) ?? 0) + 1));
    altText = [...counts].sort((a, b) => b[1] - a[1])[0][0];
    patch(assetId, { set: { altText } }, `asset altText: ${altText.slice(0, 60)}`);
  }
  for (const u of own.filter((u) => u.alt === altText)) {
    unsetByDoc.set(u.docId, [...(unsetByDoc.get(u.docId) ?? []), u.path]);
  }
}
for (const [docId, paths] of unsetByDoc) patch(docId, { unset: paths }, `${paths.length}× alt → uit Media`);
const overrides = usages.filter((u) => u.alt.trim() && !(unsetByDoc.get(u.docId) ?? []).includes(u.path));
if (overrides.length) log.push(`(${overrides.length} afwijkende alt-teksten blijven per plek staan)`);

// ─── 7. E-mailadres elders ──────────────────────────────────────────────────────
const others = await client.fetch(`*[!(_type in ["homepage"]) && !(_type match "sanity.*")]`);
for (const doc of others) if (JSON.stringify(doc).includes('mikeampting.nl')) log.push(`LET OP ${doc._id}: bevat nog mikeampting.nl`);

console.log(log.join('\n'));
if (dryRun) {
  console.log(`\n(dry-run: ${log.length} wijzigingen, niets geschreven)`);
} else {
  await tx.commit({ visibility: 'sync' });
  console.log(`\n✓ ${log.length} wijzigingen geschreven`);
}
