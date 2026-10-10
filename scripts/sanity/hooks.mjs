/**
 * Node-loaderhooks zodat scripts/sanity-seed.ts de inhoud uit src/data rechtstreeks kan
 * importeren (zoals Astro/Vite dat doet), zonder extra dependencies:
 * - imports zonder extensie → .ts of /index.ts
 * - beeldbestanden (jpg/png/webp/avif/svg/gif) → { src, fsPath, format } i.p.v. de bytes,
 *   zodat het seed-script het bestand zelf kan uploaden.
 * Node strijkt de TypeScript-types zelf weg (Node ≥ 22.18 / 23.6).
 */
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const IMAGE = /\.(jpe?g|png|webp|avif|svg|gif)$/i;

export async function resolve(specifier, context, next) {
  if ((specifier.startsWith('.') || specifier.startsWith('/')) && context.parentURL?.startsWith('file:') && !/\.[cm]?[jt]s$|\.json$/.test(specifier) && !IMAGE.test(specifier)) {
    const base = new URL(specifier, context.parentURL);
    const path = fileURLToPath(base);
    for (const candidate of [`${path}.ts`, `${path}/index.ts`]) {
      if (existsSync(candidate) && statSync(candidate).isFile()) return next(pathToFileURL(candidate).href, context);
    }
  }
  return next(specifier, context);
}

export async function load(url, context, next) {
  if (IMAGE.test(url)) {
    const fsPath = fileURLToPath(url);
    const format = url.match(IMAGE)[1].toLowerCase().replace('jpeg', 'jpg');
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify({ src: fsPath, fsPath, format, width: 0, height: 0 })};`,
    };
  }
  return next(url, context);
}
