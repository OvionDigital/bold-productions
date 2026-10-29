/**
 * Cloudflare Worker op mikeampting.nl en www.mikeampting.nl (oude WordPress-site van Mike):
 * elke oude pagina 301 naar de passende pagina op www.weareboldproductions.com, de rest naar
 * de homepage. Redirectplan goedgekeurd door de klant op 2026-10-29 (zie TODO.md).
 * Deploy: `npx wrangler deploy` in deze map (los van de site, niet in de Astro-build).
 */

const TARGET = 'https://www.weareboldproductions.com';

/** Oud pad (zonder / aan het eind, kleine letters) → nieuw pad */
const REDIRECTS = {
  // Pagina's
  '': '/',
  '/trouwfilm': '/trouwfilm',
  '/aftermovie-laten-maken': '/aftermovie-laten-maken',
  '/promotievideo-laten-maken': '/promotievideo-laten-maken',
  '/videograaf-doetinchem': '/videograaf-doetinchem',
  '/bandpromo': '/events/artiesten/bandpromo',
  '/zakelijke-events': '/events/zakelijke-events',
  '/contact': '/',
  '/over-ons': '/',
  '/portfolio': '/',
  '/privacybeleid': '/privacyverklaring',
  '/av': '/algemene-voorwaarden',

  // Albums
  '/album/album-aftermovie-maken': '/events/organisatoren/aftermovie',
  '/album/album-bandpromo-maken': '/events/artiesten/bandpromo',
  '/album/album-corporate-fotos': '/events/zakelijke-events/fotografie',
  '/album/stills-video-shoots': '/business/fotografie',

  // Portfolio: dezelfde case op de nieuwe site
  '/work/doorgedraaid-feestival': '/events/cases/doorgedraaid-feestival',
  '/work/dorpsfeest-wehl': '/events/cases/dorpsfeest-wehl',
  '/work/dorpsfeest-wehl-2023': '/events/cases/dorpsfeest-wehl',
  '/work/dorpsfeest-wehl-2025': '/events/cases/dorpsfeest-wehl',
  '/work/proost': '/events/cases/proost-band',
  '/work/saxypianoshow': '/events/cases/saxypianoshow',
  '/work/superminds': '/events/cases/superminds',

  // Portfolio zonder case: de passende dienst
  '/work/bruiloft-erik-mariska': '/trouwfilm',
  '/work/bruiloft-harmen-anky': '/trouwfilm',
  '/work/de-neie': '/events/organisatoren/aftermovie',
  '/work/bevrijdingsfestival-wageningen': '/events/organisatoren/aftermovie',
  '/work/zwarte-cross-2019': '/events/organisatoren/aftermovie',
  '/work/rijn-ijssel-open-dag': '/events/organisatoren/aftermovie',
  '/work/de-palomas': '/events/artiesten/bandpromo',
  '/work/the-pinheads-coverband-promo-2023-2024': '/events/artiesten/bandpromo',
  '/work/20yrs-q-railing': '/events/zakelijke-events/aftermovie',
  '/work/de-graafschap': '/events/zakelijke-events/aftermovie',
  '/work/boeklancering-simone-typhoon': '/events/zakelijke-events/aftermovie',
  '/work/q-railing-presentatiefilm': '/business/fundament/bedrijfsfilm',
  '/work/ten-brinke-interieurbeplanting': '/business/fundament/bedrijfsfilm',
  '/work/documentaire-michelle-kraaij': '/business/fundament/brandfilm',
  '/work/q-railing-q-disc': '/business/content/productvideo',
  '/work/compilatiefilm-nedap-schiphol': '/business/content/projectvideo',
  '/work/projectfilm-ten-brinke-interieurbeplanting': '/business/content/projectvideo',
  '/work/obelink': '/business/campagnes/commercial',
  '/work/q-clothing-campaign': '/business/campagnes/commercial',
  '/work/koopmans-pannenkoekdag': '/business/campagnes/merkactivatie',
  '/work/smarthub-vragenvuur': '/business/content/social-content',

  // Categorieën
  '/work_genre/video': '/events/cases',
  '/work_genre/fotografie': '/events/organisatoren/fotografie',
};

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    let path = pathname.toLowerCase().replace(/\/+$/, '');
    try {
      path = decodeURIComponent(path);
    } catch {
      // ongeldige codering: geen match, dus naar de homepage
    }
    return Response.redirect(TARGET + (REDIRECTS[path] ?? '/'), 301);
  },
};
