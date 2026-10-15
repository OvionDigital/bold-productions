/**
 * Navigatie per deel van de site (sitemap oktober 2026):
 * - Events (/events/…): doelgroepen Organisatoren, Artiesten, Zakelijke events.
 * - Business (/business/…): doelgroepen Fundament, Campagnes, Content, Fotografie.
 * - Neutraal (homepage, juridische pagina's, sitemap, 404, landingspagina's): geen menu, alleen
 *   knoppen Bold Events en Bold Business (op de homepage pas zichtbaar na de split-hero).
 * Doelgroepen en diensten komen uit data/taxonomy.ts (één lijst per doelgroep), zodat menu,
 * menupaneel, footer en CMS altijd hetzelfde tonen. BaseLayout kiest de set op het pad.
 */
import { audiences, audienceUrl, services, serviceUrl, type Category } from './taxonomy';
import type { Accent } from '../components/ui/Button.astro';

export interface NavLink {
  label: string;
  href: string;
  /** Vet tonen (footer) */
  bold?: boolean;
}

export interface NavGroup extends NavLink {
  /** Leeg = losse link (menupaneel zonder uitklapper, header zonder dropdown) */
  children: NavLink[];
  /** Toon in de header-dropdowns (desktop ≥1280px). Anders alleen in het menupaneel. */
  inHeader?: boolean;
}

export type SiteSection = Category | 'neutral';

/** Knop in de navbar; `shortLabel` op schermen ≤479px (past naast het logo) */
export interface NavButton extends NavLink {
  accent: Accent;
  shortLabel?: string;
}

export interface SiteNavigation {
  /** Waar het logo naartoe linkt */
  home: string;
  /** Leeg = geen megamenu en geen menuknop/-paneel (neutraal) */
  nav: NavGroup[];
  /** Knop rechtsboven en bovenaan het menupaneel; neutraal geen */
  cta?: NavLink;
  /** Knoppen rechtsboven i.p.v. een menu (neutraal: de keuze Events/Business) */
  buttons?: NavButton[];
  footer: NavGroup[];
}

/** /events en alles eronder = events, idem business; de rest neutraal */
export function sectionOf(path: string): SiteSection {
  if (path === '/events' || path.startsWith('/events/')) return 'events';
  if (path === '/business' || path.startsWith('/business/')) return 'business';
  return 'neutral';
}

/** Link voor toetsenbordgebruikers die het menu overslaat (eerste Tab op de pagina) */
export const skipLinkLabel = 'Naar de inhoud';

export const breadcrumbLabels = {
  nav: 'Breadcrumb',
  home: 'Home',
};

export const header = {
  menuLabel: 'Menu',
  logoAlt: 'Logo Bold Productions.',
  homeTitle: 'Naar home',
};

/** Doelgroep met al haar diensten (menu en footer) */
const audienceGroup = (category: Category, audience: (typeof audiences)[Category][number], label = audience.title): NavGroup => ({
  label,
  href: audienceUrl(category, audience.value),
  inHeader: true,
  children: services[audience.value].map((service) => ({ label: service.title, href: serviceUrl(category, audience.value, service) })),
});

/** Cases, Over Bold, Contact en Offerte aanvragen: in beide delen, eigen pad */
function generalGroups(category: Category): NavGroup[] {
  return [
    {
      label: 'Cases',
      href: `/${category}/cases`,
      children: audiences[category].map((a) => ({ label: a.title, href: `/${category}/cases?filter=${a.value}` })),
    },
    { label: 'Over Bold', href: `/${category}/over-bold`, children: [{ label: 'Mike Ampting', href: `/${category}/over-bold/mike` }] },
    { label: 'Contact', href: `/${category}/contact`, children: [] },
    { label: 'Offerte aanvragen', href: `/${category}/offerte-aanvragen`, children: [] },
  ];
}

/** Footerkolom "Bold Productions" */
const boldProductionsColumn = (category: Category): NavGroup => ({
  label: 'Bold Productions',
  href: `/${category}/over-bold`,
  children: [
    { label: 'Cases', href: `/${category}/cases` },
    { label: 'Over Mike', href: `/${category}/over-bold/mike` },
    { label: 'Contact', href: `/${category}/contact` },
    { label: 'Offerte aanvragen', href: `/${category}/offerte-aanvragen`, bold: true },
  ],
});

const ctaFor = (category: Category): NavLink => ({ label: 'Bold to Action', href: `/${category}/offerte-aanvragen` });

/** Footerkoppen van Events (zoals live, "events" = organisatoren) */
const eventsFooterLabels: Record<string, string> = {
  organisatoren: 'Voor organisatoren',
  artiesten: 'Voor artiesten',
  'zakelijke-events': 'Voor zakelijke events',
};

const contentGroup = audiences.business.find((a) => a.value === 'content')!;
const aiService = services.content.find((s) => s.slug === 'ai')!;

export const navigation: Record<SiteSection, SiteNavigation> = {
  events: {
    home: '/events',
    cta: ctaFor('events'),
    nav: [...audiences.events.map((a) => audienceGroup('events', a)), ...generalGroups('events')],
    footer: [
      ...audiences.events.map((a) => ({ ...audienceGroup('events', a, eventsFooterLabels[a.value]), inHeader: undefined })),
      boldProductionsColumn('events'),
    ],
  },
  business: {
    home: '/business',
    cta: ctaFor('business'),
    nav: [
      ...audiences.business.map((a) => audienceGroup('business', a)),
      // Losse ingang in het menupaneel (sitemap), dezelfde pagina als Content › AI
      { label: aiService.title, href: serviceUrl('business', contentGroup.value, aiService), children: [] },
      ...generalGroups('business'),
    ],
    footer: [...audiences.business.map((a) => ({ ...audienceGroup('business', a), inHeader: undefined })), boldProductionsColumn('business')],
  },
  neutral: {
    home: '/',
    // Geen menu: alleen de keuze tussen de twee delen (kleuren als in de split-hero)
    nav: [],
    buttons: [
      { label: 'Bold Events', shortLabel: 'Events', href: '/events', accent: 'green' },
      { label: 'Bold Business', shortLabel: 'Business', href: '/business', accent: 'yellow' },
    ],
    footer: [
      {
        label: 'Bold Events',
        href: '/events',
        children: audiences.events.map((a) => ({ label: a.title, href: audienceUrl('events', a.value) })),
      },
      {
        label: 'Bold Business',
        href: '/business',
        children: audiences.business.map((a) => ({ label: a.title, href: audienceUrl('business', a.value) })),
      },
    ],
  },
};

export const contact = {
  heading: 'Contactgegevens',
  addressLabel: 'Adresgegevens:',
  address: ['Koopmanslaan 6,', '7005 BK Doetinchem'],
  contactLabel: 'Contactgegevens:',
  email: 'mike@weareboldproductions.com',
  phone: { label: '+31 6 233 286 55', href: 'tel:+31623328655' },
  whatsapp: { href: 'https://wa.me/31623328655?text=', label: 'Chat via WhatsApp' },
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/weareboldproductions', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/weareboldproductions/', icon: 'instagram' },
  { label: 'Vimeo', href: 'https://vimeo.com/user124034017', icon: 'vimeo' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@bold.productions', icon: 'tiktok' },
] as const;

export const legalLinks: NavLink[] = [
  { label: 'Privacyverklaring', href: '/privacyverklaring' },
  { label: 'Cookiebeleid', href: '/cookiebeleid' },
  { label: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
  { label: 'Sitemap', href: '/sitemap' },
];

export const copyright = '© Bold Productions 2026';

export const footerLogoAlt = 'Bold Productions logo zwart.';
