#!/usr/bin/env node
/**
 * Controle van de structured data (lijst "Oplevering" in de specificatie van de SEO-specialist).
 *   npm run check:schema                          over dist/ (eerst npm run build)
 *   npm run check:schema -- --base=https://preview.bold-productions.pages.dev
 *                                                 dezelfde pagina's, maar opgehaald van die omgeving
 *   npm run check:schema -- --list                per pagina de typen in de @graph
 *
 * Per pagina: hoogstens één JSON-LD-script met één @graph, geen pages.dev, alle URL's absoluut op
 * www.weareboldproductions.com, pagina-url = canonical, @id-verwijzingen bestaan (op de pagina of op
 * de homepage), Organization/WebSite alleen op /, Person alleen op de Mike-pagina's, kruimelpad-stappen
 * zijn indexeerbare pagina's, geen schema op noindex- en juridische pagina's.
 */
import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://www.weareboldproductions.com';
const LEGAL = ['/privacyverklaring', '/cookiebeleid', '/algemene-voorwaarden'];
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));
const base = args.base?.replace(/\/$/, '');

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const paths = walk('dist')
  .filter((f) => f.endsWith('.html'))
  .map((f) => '/' + path.relative('dist', f).replaceAll('\\', '/').replace(/\.html$/, '').replace(/(^|\/)index$/, ''))
  .map((p) => (p === '/' ? p : p.replace(/\/$/, '')))
  .filter((p) => p !== '/styleguide')
  .sort();

async function load(p) {
  if (!base) return fs.readFileSync(path.join('dist', p === '/' ? 'index.html' : `${p}.html`), 'utf8');
  const res = await fetch(base + p, { redirect: 'manual' });
  if (res.status !== 200 && !(p === '/404' && res.status === 404)) throw new Error(`${p}: HTTP ${res.status}`);
  return res.text();
}

const pages = new Map();
for (const p of paths) {
  const html = await load(p);
  const scripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  pages.set(p, {
    html,
    scripts,
    canonical: html.match(/<link rel="canonical" href="([^"]+)"/)?.[1],
    noindex: /<meta name="robots" content="noindex"/.test(html),
    graph: scripts.length ? JSON.parse(scripts[0])['@graph'] ?? [] : [],
  });
}

const indexable = new Set([...pages].filter(([p, page]) => !page.noindex && page.canonical === new URL(p, ORIGIN).href).map(([p]) => new URL(p, ORIGIN).href));
const homeIds = new Set(pages.get('/').graph.map((n) => n['@id']).filter(Boolean));
const errors = [];
const typeCount = {};

for (const [p, page] of pages) {
  const err = (msg) => errors.push(`${p}: ${msg}`);
  const types = page.graph.map((n) => n['@type']);
  types.forEach((t) => (typeCount[t] = (typeCount[t] ?? 0) + 1));
  if ('list' in args) console.log(`${p.padEnd(52)} ${types.join(', ') || '—'}`);

  if (page.scripts.length > 1) err(`${page.scripts.length} JSON-LD-scripts`);
  if (page.scripts.some((s) => s.includes('pages.dev'))) err('pages.dev in het schema');
  if ((page.noindex || LEGAL.includes(p)) && page.scripts.length) err('schema op een noindex- of juridische pagina');
  if (!page.scripts.length) continue;

  const json = page.scripts[0];
  for (const m of json.matchAll(/"(https?:\/\/[^"]+)"/g)) {
    const href = m[1];
    if (/weareboldproductions\.com/.test(href) && !href.startsWith(ORIGIN)) err(`URL niet op ${ORIGIN}: ${href}`);
  }
  const ids = new Set(page.graph.map((n) => n['@id']).filter(Boolean));
  for (const m of json.matchAll(/\{"@id":"([^"]+)"\}/g)) {
    if (!ids.has(m[1]) && !homeIds.has(m[1])) err(`verwijzing naar onbekende @id ${m[1]}`);
  }
  const pageNode = page.graph.find((n) => n['@id'] === `${page.canonical}#webpage`);
  if (!pageNode) err('geen pagina-node met @id <canonical>#webpage');
  for (const n of page.graph) if (n.url && /Page$/.test(n['@type']) && n.url !== page.canonical) err(`url ${n.url} ≠ canonical ${page.canonical}`);
  if (p !== '/' && (types.includes('Organization') || types.includes('WebSite'))) err('Organization/WebSite buiten de homepage');
  if (!/\/over-bold\/mike$/.test(p) && types.includes('Person')) err('Person buiten de Mike-pagina’s');
  const crumbs = page.graph.find((n) => n['@type'] === 'BreadcrumbList');
  // Kruimelpad: onder /events en /business vanaf Events/Business (geen Home), daarbuiten vanaf Home;
  // op /, /events en /business zelf geen
  const branch = /^\/(events|business)(\/|$)/.exec(p)?.[1];
  const branchRoot = branch && p === `/${branch}`;
  if (p === '/' || branchRoot) {
    if (crumbs) err('BreadcrumbList op een startpagina');
    if (pageNode?.breadcrumb) err('breadcrumb op een startpagina');
  } else if (!crumbs) err('geen BreadcrumbList');
  else {
    const first = crumbs.itemListElement[0]?.item;
    const expected = branch ? `${ORIGIN}/${branch}` : `${ORIGIN}/`;
    if (first !== expected) err(`kruimelpad begint bij ${first}, verwacht ${expected}`);
  }
  for (const item of crumbs?.itemListElement ?? []) {
    if (item.item && !indexable.has(item.item)) err(`kruimelpadstap ${item.item} is geen indexeerbare pagina`);
  }
  const service = page.graph.find((n) => n['@type'] === 'Service');
  if (service && /\||\?$/.test(service.name)) err(`Service-naam "${service.name}" is geen dienstnaam`);
  const video = page.graph.find((n) => n['@type'] === 'VideoObject');
  if (video && !(video.uploadDate && video.thumbnailUrl && video.name && video.embedUrl)) err('VideoObject mist velden');
}

console.log(`\n${pages.size} pagina's${base ? ` van ${base}` : ' uit dist/'}; typen: ${Object.entries(typeCount).map(([t, n]) => `${t} ${n}`).join(', ')}`);
if (errors.length) {
  console.error(`\n${errors.length} fout(en):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log('Geen fouten.');
