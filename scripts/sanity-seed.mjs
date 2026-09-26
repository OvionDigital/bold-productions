#!/usr/bin/env node
/**
 * Zet de bestaande homepage-inhoud (src/data/home.ts, testimonials.ts, logos.ts)
 * eenmalig over naar Sanity, zodat de klant in Studio meteen de echte homepage ziet
 * in plaats van een lege pagina. Overschrijft (createOrReplace) bestaande documenten
 * met dezelfde id, dus opnieuw draaien is veilig.
 *
 * Gebruik (vanuit de root van de repo):
 *   node --env-file=.env scripts/sanity-seed.mjs
 * of: cd studio && npm run seed
 *
 * Vereist in .env: PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN
 * (token met Editor-rechten, aan te maken via sanity.io/manage → API → Tokens).
 */
import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const asset = (rel) => path.join(root, 'src/assets', rel);

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN } = process.env;
if (!PUBLIC_SANITY_PROJECT_ID || !SANITY_API_WRITE_TOKEN) {
  console.error(
    'Ontbrekende env-variabelen. Zet PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET en SANITY_API_WRITE_TOKEN in .env (zie .env.example).',
  );
  process.exit(1);
}

const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

/** Uploadcache: elk bestand maar één keer uploaden, ook als het meerdere keren gebruikt wordt. */
const uploaded = new Map();
async function uploadImage(relPath) {
  if (uploaded.has(relPath)) return uploaded.get(relPath);
  const buffer = await readFile(asset(relPath));
  const doc = await client.assets.upload('image', buffer, { filename: path.basename(relPath) });
  uploaded.set(relPath, doc);
  console.log('  ✓ geüpload:', relPath);
  return doc;
}

async function image(relPath, alt) {
  const doc = await uploadImage(relPath);
  return { _type: 'image', asset: { _type: 'reference', _ref: doc._id }, alt };
}

/** Rich-model (src/lib/rich.ts) → Portable Text. '\n' als span = { br: true } (zie portableText.ts). */
function key() {
  return Math.random().toString(36).slice(2, 10);
}
function segmentToSpan(seg) {
  if (typeof seg === 'string') return { _type: 'span', _key: key(), text: seg, marks: [] };
  if ('br' in seg) return { _type: 'span', _key: key(), text: '\n', marks: [] };
  const marks = [];
  if (seg.strong) marks.push('strong');
  if (seg.em) marks.push('em');
  return { _type: 'span', _key: key(), text: seg.text, marks };
}
function richToPortableText(blocks) {
  return blocks.map((block) => {
    if ('ul' in block) {
      // Elk item als eigen listItem-blok (Portable Text kent geen geneste lijst-array).
      return block.ul.map((item) => ({
        _type: 'block',
        _key: key(),
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: item.map(segmentToSpan),
        markDefs: [],
      }));
    }
    return { _type: 'block', _key: key(), style: 'normal', children: block.p.map(segmentToSpan), markDefs: [] };
  }).flat();
}

// ─── Klantlogo's (src/data/logos.ts) ──────────────────────────────────────
const logoFiles = {
  'vunzige-deuntjes': 'logos/vunzige-deuntjes.png',
  proost: 'logos/proost.png',
  'zin-in-de-zomer': 'logos/zin-in-de-zomer.png',
  'dorpsfeest-wehl': 'logos/dorpsfeest-wehl.png',
  soenda: 'logos/soenda.webp',
  bospop: 'logos/bospop.svg',
  'zwarte-cross': 'logos/zwarte-cross.svg',
  drift: 'logos/drift.svg',
  doorgedraaid: 'logos/doorgedraaid.png',
};
const logoNames = {
  'vunzige-deuntjes': 'Vunzige Deuntjes',
  proost: 'Proost',
  'zin-in-de-zomer': 'Zin in de Zomer',
  'dorpsfeest-wehl': 'Dorpsfeest Wehl',
  soenda: 'Soenda',
  bospop: 'Bospop',
  'zwarte-cross': 'Zwarte Cross',
  drift: 'Drift',
  doorgedraaid: 'Doorgedraaid',
};

// ─── Testimonials (src/data/testimonials.ts, subset op de homepage) ──────
const testimonialData = {
  'reinier-peters': {
    quote:
      'Een promo laten maken door BOLD Productions! Laagdrempelig contact met veel persoonlijke aandacht. Een supergave promo geschoten uiteindelijk met leuke mensen!',
    name: 'Reinier Peters',
    file: 'images/testimonials/reinier-peters.jpg',
  },
  'ralph-buisman': {
    quote:
      'Wanneer je next level content vraagt, maar er nog een schepje bovenop gedaan wordt. Fijn in de samenwerking, denkt volledig mee om uw event in video en zelfs fotografie nog mooier vast te leggen dan het al was.',
    name: 'Ralph Buisman',
    organisation: 'RHBFOTO',
    file: 'images/testimonials/ralph-buisman.jpg',
  },
  'merijn-peters': {
    quote:
      'Wij hebben Bold Productions de opdracht gegeven om een bandpromo te maken en het resultaat mag er zeker zijn! Wij zijn zeer tevreden en we kijken nu al uit naar een volgende samenwerking.',
    name: 'Merijn Peters',
    organisation: 'KARAKTER',
    file: 'images/testimonials/merijn-peters.jpg',
  },
  'manon-diks': {
    quote:
      'Bold snapt wat ik en de klant willen qua beeld zonder teveel te zeggen en voert dat uit in detail. Tevens zijn ze ook hele fijne jongens in de omgang! Altijd een feestje om samen te werken.',
    name: 'Manon Diks',
    organisation: 'De Live Formule',
    file: 'images/testimonials/manon-diks.jpg',
  },
  'dorpsfeest-wehl': {
    quote: 'Dankzij de foto’s en video’s leefde Dorpsfeest Wehl al weken vóór het eerste biertje. Tijdens het weekend voelden we de kracht van content.',
    organisation: 'Dorpsfeest Wehl',
    file: 'images/testimonials/dorpsfeest-wehl.jpg',
  },
};
const homepageTestimonialOrder = ['reinier-peters', 'ralph-buisman', 'merijn-peters', 'manon-diks', 'dorpsfeest-wehl'];

async function main() {
  console.log(`Sanity-project ${PUBLIC_SANITY_PROJECT_ID} (${PUBLIC_SANITY_DATASET || 'production'})\n`);

  console.log("Klantlogo's uploaden...");
  const logoRefs = {};
  for (const [id, file] of Object.entries(logoFiles)) {
    const img = await image(file, logoNames[id]);
    await client.createOrReplace({ _id: `clientLogo-${id}`, _type: 'clientLogo', name: logoNames[id], image: img });
    logoRefs[id] = `clientLogo-${id}`;
  }

  console.log('\nTestimonials uploaden...');
  for (const [id, t] of Object.entries(testimonialData)) {
    const img = await image(t.file, t.name ?? t.organisation);
    await client.createOrReplace({
      _id: `testimonial-${id}`,
      _type: 'testimonial',
      quote: t.quote,
      name: t.name,
      organisation: t.organisation,
      image: img,
    });
  }

  console.log('\nHomepage-afbeeldingen uploaden...');
  const heroImage = await image(
    'images/home/hero-festival-optreden.jpg',
    'Actiefoto van een live-optreden tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
  );
  const timelineVoor = await image(
    'images/home/tijdlijn-voor-legends-of-rock.jpg',
    'Actiefoto van een zanger die het publiek bespringt tijdens Legends of Rock. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
  );
  const timelineTijdens = await image(
    'images/home/tijdlijn-tijdens-gitarist.jpg',
    'Gitarist tijdens een live-optreden. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
  );
  const timelineNa = await image(
    'images/home/tijdlijn-na-festivalgangers.jpg',
    'Sfeerbeeld van festivalgangers. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
  );
  const polaroidAlts = [
    'Cameraman van Bold Productions filmt backstage in roze licht.',
    'Dronepiloot van Bold Productions met FPV-bril in oranje licht.',
    'Cameraman filmt een rapper op een podium met vuureffecten.',
    'Twee fotografen van Bold Productions lopen met hun camera’s over een festivalterrein.',
    'Crew van Bold Productions poseert backstage met een artiest.',
    'Selfie van drie crewleden van Bold Productions in blauw licht.',
    'Cameraman van Bold Productions voor het podium tijdens een concert in groen licht.',
  ];
  const polaroids = [];
  for (let i = 1; i <= 7; i++) polaroids.push(await image(`images/polaroids/polaroid-${i}.jpg`, polaroidAlts[i - 1]));

  console.log('\nHomepage-document schrijven...');
  await client.createOrReplace({
    _id: 'homepage',
    _type: 'homepage',
    metaTitle: 'Bold Productions | Event & Artiesten Content',
    metaDescription:
      'High-end video en fotografie voor festivals, artiesten en zakelijke events. Content met maximale impact. Get Bold.',

    heroTitle: 'Video’s die je event',
    heroTitleAccent: 'laten leven',
    heroEyebrow: 'Ervoor. Tijdens. Erna',
    heroPrimaryCta: { label: 'Bold to action', href: '/offerte-aanvragen' },
    heroSecondaryCta: { label: 'Waarom zou je?', href: '#first-section' },
    heroImage,
    heroVideo: { id: '1180112930', hash: '2fa6fd18b8', title: 'Sfeervideo Bold Productions', loadOnMobile: true },

    trustedByTitle: 'Vertrouwd door',
    trustedByLogos: Object.values(logoRefs).map((id) => ({ _type: 'reference', _key: key(), _ref: id })),

    introContent: richToPortableText([
      { p: ['Je event moet slagen. Je steekt er tijd, geld en energie in. Die investeringen wil je terugverdienen. Maar mensen hebben keus. Veel keus. Agenda’s lopen snel vol.'] },
      {
        p: [
          'Daarom is ',
          { text: 'zichtbaarheid', strong: true, em: true },
          'van je event zo belangrijk. Je wil op de juiste ',
          { text: 'momenten,', strong: true },
          'op de juiste ',
          { text: 'plekken', strong: true },
          'bij de juiste ',
          { text: 'mensen', strong: true },
          'op het netvlies komen. Voor, tijdens en na het event.',
        ],
      },
    ]),

    timelineTitle: 'BOLD IN.\nSOLD OUT.',
    timelineGradient: 'yellow',
    timelineIntro: richToPortableText([
      {
        p: [
          'Bold Productions weet ',
          { text: 'wat', strong: true },
          ' je ',
          { text: 'wanneer', strong: true },
          ' moet laten zien. En vooral ',
          { text: 'hóe', strong: true },
          ' je het laat zien. Want met clichébeelden krijg je mensen niet meer in beweging. Pas als je met je videocontent ',
          { text: 'Bold', strong: true },
          ' durft te zijn, kom je niet alleen op het netvlies, maar ook in harten en hoofden. En pas dan ga je..',
        ],
      },
      { ul: [['tickets verkopen;'], ['sponsoren en partners overtuigen; '], ['en bezoekers laten terugkomen. ']] },
    ]),
    timelineSteps: [
      {
        _key: key(),
        number: '01',
        title: 'Voor je event',
        text: richToPortableText([{ p: ['Stap-voor-stap verhogen we de spanning. Met subtiele FOMO-triggers drukken we op de juiste buttons bij je doelgroep.'] }]),
        image: timelineVoor,
        cta: { label: 'Bekijk hoe', href: '/events/promovideos' },
      },
      {
        _key: key(),
        number: '02',
        title: 'Tijdens je event',
        text: richToPortableText([
          { p: ['De climax van al je werk wil je vastleggen. En meteen delen. ‘', { text: 'Waarom ben ik hier niet bij?', em: true }, '’, denkt je toekomstige bezoeker.'] },
        ]),
        image: timelineTijdens,
        cta: { label: 'Bekijk hoe', href: '/events/eventvideos' },
      },
      {
        _key: key(),
        number: '03',
        title: 'Na je event',
        text: richToPortableText([{ p: ['We laten de energie voortleven. Zo bind je bestaande bezoekers. En trigger je alvast nieuwe.'] }]),
        image: timelineNa,
        cta: { label: 'Bekijk hoe', href: '/events/aftermovie' },
      },
    ],
    timelineCta: { label: 'Make it Bold. Sell Tickets', href: '/offerte-aanvragen', accent: 'yellow' },

    testimonialsEyebrow: 'Dit deden we',
    testimonialsTitle: 'En dit vonden ze',
    testimonialsGradient: 'orange',
    testimonialsItems: homepageTestimonialOrder.map((id) => ({ _type: 'reference', _key: key(), _ref: `testimonial-${id}` })),

    backstageEyebrow: 'Bold backstage',
    backstageTitle: 'We kennen onze plek',
    backstageGradient: 'green',
    backstagePhotos: polaroids,

    micDropTitle: "Mike's mic drop",
    micDropGradient: 'yellow',
    micDropBody: richToPortableText([
      {
        p: [
          { text: '"De meeste content rondom events laat zien hoe druk het was. Maar niet hoe het voelde toen alles samenkwam. Terwijl dát juist het moment is waar mensen over napraten. Waar kaartverkoop op volgt. Waar sponsors trots van worden. Waar je publiek op terugkomt.', em: true },
          { br: true },
          { br: true },
          { text: 'Het gaat niet om zoveel mogelijk willen vastleggen. Het gaat om het vangen van de juiste momenten. Als dat lukt, hoef je niet uit te leggen hoe vet het was. Dan zien mensen het vanzelf. Of beter nog, dan ', em: true },
          { text: 'voelen', strong: true, em: true },
          { text: ' ze het.', em: true },
          { br: true },
          { br: true },
          { text: 'Bij Bold Productions hebben we oog voor die momenten. En de uitrusting om ze te vereeuwigen. Zodat jouw event voortleeft.”', em: true },
          { br: true },
          { br: true },
          { text: '- Mike Ampting', strong: true },
          { br: true },
          '(',
          { text: 'Creative Director - Bold Productions)', em: true },
        ],
      },
    ]),
    micDropCta: { label: 'Mail Mike', href: 'mailto:mike@mikeampting.nl', accent: 'yellow' },
    micDropMediaType: 'vimeo',
    micDropVideo: { id: '1180112439', hash: '5399f03c15', title: 'Video Mike Ampting, Bold Productions' },
    micDropTriangles: true,
  });

  console.log('\n✓ Klaar. Open Studio (npm run dev in studio/) en kijk bij "Homepage".');
}

main().catch((err) => {
  console.error('\nSeed mislukt:', err.message);
  process.exit(1);
});
