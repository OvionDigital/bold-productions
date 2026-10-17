#!/usr/bin/env node
/**
 * Voorbeeldplaatjes voor het menu "Sectie toevoegen" in Sanity Studio: per bloktype een
 * schermafbeelding van die sectie op de echte (lokaal gebouwde) site, 1440 breed, op halve grootte.
 * Uitvoer: studio/static/sections/<bloktype>.jpg (Studio serveert die op /static/…; gebruikt in
 * studio/schemaTypes/sections/index.ts → sectionInsertMenu). Daarna `cd studio && npx sanity deploy`.
 *
 *   npm run sanity:section-previews              (bouwt eerst de site)
 *   npm run sanity:section-previews -- --no-build
 *
 * Vereist eenmalig: npx playwright install chromium
 */
import { spawn } from 'node:child_process';
import { mkdir, readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT_DIR = path.join(ROOT, 'studio', 'static', 'sections');
const PORT = 4398;
const ORIGIN = `http://localhost:${PORT}`;
const VIEWPORT = { width: 1440, height: 900 };
/** Ruimte boven de sectie, zodat de kop niet tegen de rand staat */
const MARGIN = 48;
/** Lager dan dit krijgt onder wat pagina erbij, zodat de sectie niet als een streep oogt */
const MIN_HEIGHT = 420;

/**
 * Bloktype in Sanity → CSS-klasse van de sectie, met de pagina waar hij het mooist staat.
 * Staat hij daar niet (meer), dan de eerste pagina in dist/ waar hij wel staat.
 * `scroll`: zo ver de sectie in scrollen (deel van de hoogte), voor sticky secties.
 * `fromTop`: vanaf de bovenkant van de pagina (kruimelpad onder de navbar).
 */
const SECTIONS = {
  heroSection: { selector: '.hero', page: '/events/organisatoren' },
  splitHeroSection: { selector: '.split-hero', page: '/' },
  breadcrumbsSection: { selector: '.breadcrumbs', page: '/privacyverklaring', fromTop: true },
  logoMarqueeSection: { selector: '.logo-marquee', page: '/events' },
  introHighlightSection: { selector: '.intro', page: '/events' },
  richTextSection: { selector: '.rich-section', page: '/privacyverklaring' },
  textMediaSection: { selector: '.text-media', page: '/events' },
  timelineSection: { selector: '.timeline', page: '/events' },
  testimonialsSection: { selector: '.testimonials', page: '/events' },
  polaroidStackSection: { selector: '.polaroids', page: '/events', scroll: 0.45 },
  caseSpotlightSection: { selector: '.case-spotlight', page: '/events/organisatoren' },
  imageFeatureSection: { selector: '.image-feature', page: '/events/organisatoren' },
  serviceTilesSection: { selector: '.service-tiles--services', page: '/events/organisatoren' },
  teamSection: { selector: '.service-tiles--team', page: '/events/over-bold' },
  faqSection: { selector: '.faq', page: '/events/organisatoren' },
  fullWidthImageSection: { selector: '.full-image', page: '/events/cases/de-live-formule' },
  videoFeatureSection: { selector: '.video-feature', page: '/events/organisatoren/aftermovie' },
  contactSection: { selector: '.contact-section', page: '/events/contact' },
  mapSection: { selector: '.map-section', page: '/events/contact' },
  caseGridSection: { selector: '.case-grid', page: '/events/cases' },
  linkGroupsSection: { selector: '.link-groups', page: '/sitemap' },
};

/** Alles zichtbaar en stil; vaste navbar, skiplink en zwevende knop weg */
const CSS = `
  *, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }
  [data-animate], [data-animate-stagger] > * { opacity: 1 !important; transform: none !important; }
  .navbar, body > .whatsapp, .skip-link { display: none !important; }
`;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.woff2': 'font/woff2', '.mp4': 'video/mp4',
};

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: 'inherit', shell: true });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} ${args.join(' ')} stopte met ${code}`))));
  });
}

/** dist/ serveren met nette URL's (/pad → pad.html), zoals Cloudflare Pages */
function startServer() {
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, ORIGIN).pathname);
    const candidates = [path.join(DIST, urlPath), path.join(DIST, `${urlPath}.html`), path.join(DIST, urlPath, 'index.html')];
    for (const file of candidates) {
      try {
        const body = await readFile(file);
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
        res.end(body);
        return;
      } catch {
        /* volgende kandidaat */
      }
    }
    res.writeHead(404).end();
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

/** Alle pagina's in dist/ als URL-pad */
async function allPaths(dir = DIST, base = '') {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) paths.push(...(await allPaths(path.join(dir, entry.name), `${base}/${entry.name}`)));
    else if (entry.name.endsWith('.html')) paths.push(entry.name === 'index.html' ? base || '/' : `${base}/${entry.name.slice(0, -5)}`);
  }
  return paths;
}

async function main() {
  if (!process.argv.includes('--no-build')) await run('npm', ['run', 'build']);
  if (!existsSync(DIST)) throw new Error('dist/ ontbreekt: eerst npm run build');
  await mkdir(OUT_DIR, { recursive: true });

  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 0.5 });
  const paths = await allPaths();
  const failed = [];

  try {
    for (const [type, { selector, page: preferred, scroll = 0, fromTop = false }] of Object.entries(SECTIONS)) {
      let found = false;
      for (const candidate of [preferred, ...paths.filter((p) => p !== preferred)]) {
        await page.goto(`${ORIGIN}${candidate}?static=1`, { waitUntil: 'load' });
        const element = page.locator(`main ${selector}`).first();
        if (!(await element.count())) continue;
        await page.addStyleTag({ content: CSS });
        // Lazy beelden direct laden
        await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = 'eager')));
        // Sectie bovenaan het venster (sticky secties: een stuk erin), dan een afbeelding van het venster
        const height = await page.evaluate(
          ({ sel, scroll, fromTop, margin }) => {
            const rect = document.querySelector(`main ${sel}`).getBoundingClientRect();
            const top = rect.top + window.scrollY;
            window.scrollTo(0, fromTop ? 0 : Math.max(0, top - margin + rect.height * scroll));
            return fromTop ? top + rect.height : rect.height * (1 - scroll) + margin;
          },
          { sel: selector, scroll, fromTop, margin: MARGIN },
        );
        await page.waitForLoadState('networkidle').catch(() => {});
        await page.waitForTimeout(500);
        await page.screenshot({
          path: path.join(OUT_DIR, `${type}.jpg`),
          type: 'jpeg',
          quality: 72,
          clip: { x: 0, y: 0, width: VIEWPORT.width, height: Math.min(VIEWPORT.height, Math.max(MIN_HEIGHT, height)) },
        });
        console.log(`✓ ${type} (${candidate})`);
        found = true;
        break;
      }
      if (!found) failed.push(type);
    }
  } finally {
    await browser.close();
    server.close();
  }
  if (failed.length) {
    console.error(`\nGeen pagina gevonden met: ${failed.join(', ')}`);
    process.exit(1);
  }
  console.log(`\n✓ ${Object.keys(SECTIONS).length} plaatjes in studio/static/sections/. Daarna: cd studio && npx sanity deploy`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
