/**
 * /robots.txt — alles toegestaan, met verwijzing naar de sitemap. De styleguide en
 * juridische pagina's houden zichzelf buiten Google met een noindex-meta (een Disallow
 * zou juist voorkomen dat Google die noindex ziet). De preview-build (concepten) sluit alles uit.
 */
import type { APIRoute } from 'astro';
import { isPreview } from '../lib/preview';

export const GET: APIRoute = ({ site }) =>
  new Response(isPreview ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
