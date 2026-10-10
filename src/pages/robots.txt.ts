/**
 * /robots.txt — alles toegestaan, met verwijzing naar de sitemap. De styleguide en
 * juridische pagina's houden zichzelf buiten Google met een noindex-meta (een Disallow
 * zou juist voorkomen dat Google die noindex ziet).
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
