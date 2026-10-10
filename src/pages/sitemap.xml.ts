/**
 * /sitemap.xml — alle indexeerbare pagina's (homepage + src/pages/[...slug] behalve noindex,
 * de 404 en de styleguide). Zelfde opzet als de Webflow-sitemap; lastmod uit Sanity
 * (laatste wijziging van de pagina) als die bekend is. Wordt bij elke build opnieuw gemaakt.
 */
import type { APIRoute } from 'astro';
import { getAllPages } from '../lib/pages';

const EXCLUDE = new Set(['404']);

export const GET: APIRoute = async ({ site }) => {
  const origin = site!.origin;
  const pages = (await getAllPages()).filter((page) => !page.meta.noindex && !EXCLUDE.has(page.slug));
  const urls: { loc: string; lastmod?: string }[] = [
    { loc: origin },
    ...pages.map((page) => ({ loc: `${origin}/${page.slug}`, lastmod: page.updatedAt })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
