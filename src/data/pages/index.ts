/**
 * Alle pagina's uit src/data/pages (lokale bron als Sanity niet geconfigureerd is,
 * en de inhoud voor scripts/sanity-seed.ts). Nieuwe pagina? Bestand toevoegen en hier opnemen.
 * 'home' = de homepage (index.astro); 'events' = de Events-homepage (/events).
 */
import type { PageData } from '../../lib/sections';
import { page as p0 } from './events/organisatoren';
import { page as p1 } from './events/artiesten';
import { page as p2 } from './events/artiesten/artiestenpromo';
import { page as p3 } from './events/artiesten/bandpromo';
import { page as p4 } from './events/artiesten/fotografie';
import { page as p5 } from './events/artiesten/recap';
import { page as p6 } from './events/artiesten/social-content';
import { page as p7 } from './events/organisatoren/aftermovie';
import { page as p8 } from './events/organisatoren/eventvideos';
import { page as p9 } from './events/organisatoren/fotografie';
import { page as p10 } from './events/organisatoren/promovideos';
import { page as p11 } from './events/organisatoren/social-content';
import { page as p12 } from './events/zakelijke-events';
import { page as p13 } from './events/zakelijke-events/aftermovie';
import { page as p14 } from './events/zakelijke-events/casevideo';
import { page as p15 } from './events/zakelijke-events/fotografie';
import { page as p16 } from './events/zakelijke-events/promovideo';
import { page as p17 } from './events/cases';
import { page as p18 } from './events/over-bold';
import { page as p19 } from './events/over-bold/mike';
import { page as p20 } from './events/contact';
import { page as p21 } from './events/offerte-aanvragen';
import { page as p22 } from './aftermovie-laten-maken';
import { page as p23 } from './promotievideo-laten-maken';
import { page as p24 } from './videograaf-doetinchem';
import { page as p25 } from './trouwfilm';
import { page as p26 } from './sitemap';
import { page as p27 } from './privacyverklaring';
import { page as p28 } from './cookiebeleid';
import { page as p29 } from './algemene-voorwaarden';
import { page as p30 } from './404';
import { page as home } from './home';
import { page as eventsHome } from './events-home';
import { businessPages } from './business';

export const pages: PageData[] = [
  home,
  eventsHome,
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  ...businessPages,
];
