#!/usr/bin/env node
/**
 * Visuele vergelijking: live site vs. lokale build.
 *
 * Maakt full-page screenshots op 375, 768 en 1440 px van de live pagina en van
 * `astro preview`, en zet ze naast elkaar met een diff in compare/<pagina>/.
 * Open compare/index.html voor het overzicht.
 *
 * Gebruik:
 *   npm run compare                          # homepage, alle breedtes
 *   npm run compare -- --path=/events        # andere pagina
 *   npm run compare -- --widths=375,1440     # subset van breedtes
 *   npm run compare -- --no-build            # dist/ niet opnieuw bouwen
 *
 * Vereist eenmalig: npx playwright install chromium
 */
import { spawn } from 'node:child_process';
import { mkdir, writeFile, readdir, readFile, stat } from 'node:fs/promises';
import http from 'node:http';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'compare');
const LIVE_ORIGIN = 'https://www.weareboldproductions.com';
const LOCAL_PORT = 4399;
const LOCAL_ORIGIN = `http://localhost:${LOCAL_PORT}`;

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.replace(/^--/, '').split('=');
    return [key, value ?? true];
  }),
);
const pagePath = typeof args.path === 'string' ? args.path : '/';
const widths = typeof args.widths === 'string' ? args.widths.split(',').map(Number) : [375, 768, 1440];
const slug = pagePath === '/' ? 'home' : pagePath.replace(/^\/|\/$/g, '').replace(/\//g, '__');

/** CSS die beweging en overlays op de live (Webflow) site uitzet, zodat alles zichtbaar is. */
const LIVE_STATIC_CSS = `
  *, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }
  .animate-on-scroll { opacity: 1 !important; transform: none !important; }
  .scroll-highlight .char, .scroll-highlight .word { opacity: 1 !important; text-shadow: none !important; }
  .carousel { transform: none !important; }
  .cursor-cinema, .popcorn-trail { display: none !important; }
  #cookiefirst-root, .cookiefirst-root, [data-cookiefirst-widget], div[class*="cookiefirst"] { display: none !important; }
  .video-hero-loader { display: none !important; }
`;

/** Gedeelde CSS voor beide kanten: video/iframes verbergen voor stabiele beelden. */
const SHARED_CSS = `
  iframe { visibility: hidden !important; }
  video, .bg-video__poster { visibility: hidden !important; }
`;

function log(...parts) {
  console.log('[compare]', ...parts);
}

function run(command, commandArgs, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, commandArgs, { cwd: ROOT, stdio: 'inherit', shell: true, ...options });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`))));
  });
}

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === 404) return;
    } catch {
      /* nog niet up */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server ${url} kwam niet op binnen ${timeoutMs}ms`);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

/** Minimale statische server voor dist/ met nette URL's zoals Cloudflare Pages (/pad → pad.html). */
function startStaticServer() {
  const dist = path.join(ROOT, 'dist');
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, LOCAL_ORIGIN).pathname);
    const candidates = urlPath.endsWith('/')
      ? [path.join(dist, urlPath, 'index.html')]
      : [path.join(dist, urlPath), path.join(dist, `${urlPath}.html`),path.join(dist, urlPath, 'index.html')];
    for (const file of candidates) {
      if (!file.startsWith(dist)) break;
      try {
        if ((await stat(file)).isFile()) {
          res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
          res.end(await readFile(file));
          return;
        }
      } catch {
        /* volgende kandidaat */
      }
    }
    res.writeHead(404).end('Not found');
  });
  return new Promise((resolve) => server.listen(LOCAL_PORT, () => resolve(server)));
}

/** Scrollt langzaam door de pagina zodat lazy afbeeldingen laden, en terug naar boven. */
async function preloadLazyContent(page) {
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight * 0.75));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    // Forceer het laden van resterende lazy afbeeldingen
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => img.setAttribute('loading', 'eager'));
    await Promise.all(
      [...document.images].filter((img) => !img.complete).map((img) => new Promise((r) => { img.onload = img.onerror = r; })),
    );
    await document.fonts.ready;
  });
  await page.waitForTimeout(600);
}

async function screenshot(browser, { url, width, file, extraCss }) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
    isMobile: width < 768,
    hasTouch: width < 768,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
  await page.addStyleTag({ content: SHARED_CSS + (extraCss ?? '') });
  await preloadLazyContent(page);
  await page.screenshot({ path: file, fullPage: true });
  await context.close();
}

/** Stelt live | lokaal | diff samen in de browser (canvas) en geeft het verschil in % terug. */
async function composite(browser, { liveFile, localFile, outFile }) {
  const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
  await page.goto(pathToFileURL(path.join(OUT_DIR, 'blank.html')).href);
  const result = await page.evaluate(
    async ({ liveSrc, localSrc }) => {
      const load = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      const [a, b] = await Promise.all([load(liveSrc), load(localSrc)]);
      const w = Math.max(a.width, b.width);
      const h = Math.max(a.height, b.height);
      const gap = 16;
      const label = 40;

      const read = (img) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0, 0, w, h);
      };
      const da = read(a);
      const db = read(b);
      const diff = new ImageData(w, h);
      let changed = 0;
      let changedOverlap = 0;
      const overlapEnd = Math.min(a.height, b.height) * w * 4;
      for (let i = 0; i < da.data.length; i += 4) {
        const d =
          Math.abs(da.data[i] - db.data[i]) + Math.abs(da.data[i + 1] - db.data[i + 1]) + Math.abs(da.data[i + 2] - db.data[i + 2]);
        const gray = (da.data[i] + da.data[i + 1] + da.data[i + 2]) / 12;
        if (d > 48) {
          changed++;
          if (i < overlapEnd) changedOverlap++;
          diff.data.set([255, 40, 40, 255], i);
        } else {
          diff.data.set([gray, gray, gray, 255], i);
        }
      }

      const out = document.createElement('canvas');
      out.width = w * 3 + gap * 2;
      out.height = h + label;
      const ctx = out.getContext('2d');
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, out.width, out.height);
      ctx.fillStyle = '#fff';
      ctx.font = '20px sans-serif';
      ctx.fillText(`LIVE (${a.width}×${a.height})`, 8, 28);
      ctx.fillText(`LOKAAL (${b.width}×${b.height})`, w + gap + 8, 28);
      ctx.fillText('DIFF', (w + gap) * 2 + 8, 28);
      ctx.drawImage(a, 0, label);
      ctx.drawImage(b, w + gap, label);
      ctx.putImageData(diff, (w + gap) * 2, label);

      return {
        dataUrl: out.toDataURL('image/png'),
        percent: (changed / (w * h)) * 100,
        percentOverlap: (changedOverlap / (w * Math.min(a.height, b.height))) * 100,
        heights: [a.height, b.height],
      };
    },
    {
      liveSrc: pathToFileURL(liveFile).href,
      localSrc: pathToFileURL(localFile).href,
    },
  );
  await writeFile(outFile, Buffer.from(result.dataUrl.split(',')[1], 'base64'));
  await page.close();
  return result;
}

async function writeIndex() {
  const dirs = (await readdir(OUT_DIR, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
  const sections = [];
  for (const dir of dirs) {
    const files = (await readdir(path.join(OUT_DIR, dir))).filter((f) => f.startsWith('compare-')).sort();
    sections.push(
      `<h2>${dir}</h2>` +
        files.map((f) => `<figure><figcaption>${f}</figcaption><a href="${dir}/${f}"><img src="${dir}/${f}" loading="lazy"></a></figure>`).join(''),
    );
  }
  const html = `<!doctype html><meta charset="utf-8"><title>Visuele vergelijking</title>
<style>body{background:#111;color:#eee;font:14px/1.4 sans-serif;margin:24px}img{max-width:100%;border:1px solid #333}figure{margin:0 0 32px}</style>
<h1>Visuele vergelijking — live | lokaal | diff</h1>${sections.join('')}`;
  await writeFile(path.join(OUT_DIR, 'index.html'), html);
}

async function main() {
  const pageDir = path.join(OUT_DIR, slug);
  await mkdir(pageDir, { recursive: true });
  await writeFile(path.join(OUT_DIR, 'blank.html'), '<!doctype html><title>blank</title>');

  if (!args['no-build'] || !existsSync(path.join(ROOT, 'dist'))) {
    log('astro build…');
    await run('npx', ['astro', 'build']);
  }

  log(`dist/ serveren op ${LOCAL_ORIGIN}`);
  const server = await startStaticServer();
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const summary = [];

  try {
    await waitForServer(LOCAL_ORIGIN);
    for (const width of widths) {
      const liveFile = path.join(pageDir, `live-${width}.png`);
      const localFile = path.join(pageDir, `local-${width}.png`);
      const sep = pagePath.includes('?') ? '&' : '?';

      log(`${width}px — live`);
      await screenshot(browser, { url: `${LIVE_ORIGIN}${pagePath}${sep}static=1`, width, file: liveFile, extraCss: LIVE_STATIC_CSS });
      log(`${width}px — lokaal`);
      await screenshot(browser, { url: `${LOCAL_ORIGIN}${pagePath}${sep}static=1`, width, file: localFile });

      const result = await composite(browser, { liveFile, localFile, outFile: path.join(pageDir, `compare-${width}.png`) });
      summary.push({ width, diff: `${result.percent.toFixed(2)}%`, diffGedeeld: `${result.percentOverlap.toFixed(2)}%`, hoogteLive: result.heights[0], hoogteLokaal: result.heights[1] });
    }
  } finally {
    await browser.close();
    server.close();
  }

  await writeIndex();
  console.table(summary);
  log(`Klaar. Open ${path.relative(ROOT, path.join(OUT_DIR, 'index.html'))}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
