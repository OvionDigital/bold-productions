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
import type { IconName } from '../components/ui/icons';

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

/** Knop in de navbar; `shortLabel` op schermen ≤767px (past naast het logo) */
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
  /** Knop onderaan het menupaneel naar het andere deel van de site (Events ↔ Business) */
  switchTo?: NavButton;
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

/** Cases, Over Bold en Contact (met Offerte aanvragen eronder): in beide delen, eigen pad */
function generalGroups(category: Category): NavGroup[] {
  return [
    {
      label: 'Cases',
      href: `/${category}/cases`,
      children: audiences[category].map((a) => ({ label: a.title, href: `/${category}/cases?filter=${a.value}` })),
    },
    { label: 'Over Bold', href: `/${category}/over-bold`, children: [{ label: 'Mike Ampting', href: `/${category}/over-bold/mike` }] },
    { label: 'Contact', href: `/${category}/contact`, children: [{ label: 'Offerte aanvragen', href: `/${category}/offerte-aanvragen` }] },
  ];
}

/** Wissel onderaan het menupaneel (kleuren als in de split-hero) */
const switchButtons: Record<Category, NavButton> = {
  events: { label: 'Naar Bold Business', href: '/business', accent: 'yellow' },
  business: { label: 'Naar Bold Events', href: '/events', accent: 'green' },
};

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

export const navigation: Record<SiteSection, SiteNavigation> = {
  events: {
    home: '/events',
    cta: ctaFor('events'),
    switchTo: switchButtons.events,
    nav: [...audiences.events.map((a) => audienceGroup('events', a)), ...generalGroups('events')],
    footer: [
      ...audiences.events.map((a) => ({ ...audienceGroup('events', a, eventsFooterLabels[a.value]), inHeader: undefined })),
      boldProductionsColumn('events'),
    ],
  },
  business: {
    home: '/business',
    cta: ctaFor('business'),
    switchTo: switchButtons.business,
    nav: [...audiences.business.map((a) => audienceGroup('business', a)), ...generalGroups('business')],
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

/**
 * Contactgegevens van Bold Productions: footer, WhatsApp-knop en de organisatie in de structured
 * data. In Sanity aan te passen (Menu, footer & contact → Contactgegevens, getContact()); dit is de
 * terugval per veld.
 */
export interface SiteContact {
  email: string;
  /** Zoals getoond, met landcode: '+31 6 233 286 55' */
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  kvk: string;
}

export const siteContact: SiteContact = {
  email: 'mike@weareboldproductions.com',
  phone: '+31 6 233 286 55',
  street: 'Koopmanslaan 6',
  postalCode: '7005 BK',
  city: 'Doetinchem',
  kvk: '80117686',
};

/** '+31 6 233 286 55' → '+31623328655' */
export const phoneDigits = (phone: string) => phone.replace(/[^\d+]/g, '');

/** Footerblok en WhatsApp-link uit de contactgegevens */
export const footerContact = (c: SiteContact) => ({
  heading: 'Contactgegevens',
  addressLabel: 'Adresgegevens:',
  address: [`${c.street},`, `${c.postalCode} ${c.city}`],
  contactLabel: 'Contactgegevens:',
  email: c.email,
  phone: { label: c.phone, href: `tel:${phoneDigits(c.phone)}` },
  whatsapp: { href: `https://wa.me/${phoneDigits(c.phone).replace('+', '')}?text=`, label: 'Chat via WhatsApp' },
});

export interface Social {
  label: string;
  href: string;
  icon: IconName;
}

/** Platforms die in Sanity gekozen kunnen worden (één icoon per platform, icons.ts); houd gelijk aan
 * studio/schemaTypes/documents/siteNavigation.ts */
export const socialPlatforms = [
  { value: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { value: 'instagram', label: 'Instagram', icon: 'instagram' },
  { value: 'vimeo', label: 'Vimeo', icon: 'vimeo' },
  { value: 'tiktok', label: 'TikTok', icon: 'tiktok' },
] as const satisfies readonly { value: string; label: string; icon: IconName }[];

/** Footer-iconen en sameAs; in Sanity aan te passen (Menu, footer & contact → Social media, getSocials()) */
export const socials: readonly Social[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/weareboldproductions', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/weareboldproductions/', icon: 'instagram' },
  { label: 'Vimeo', href: 'https://vimeo.com/user124034017', icon: 'vimeo' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@bold.productions', icon: 'tiktok' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacyverklaring', href: '/privacyverklaring' },
  { label: 'Cookiebeleid', href: '/cookiebeleid' },
  { label: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
  { label: 'Sitemap', href: '/sitemap' },
];

export const copyright = '© Bold Productions 2026';

/** Onderin de footer, naast het copyright (geen btw-nummer) */
export const kvkLabel = (kvk: string) => `KvK ${kvk}`;

/** Onderin de footer, opent in een nieuw tabblad */
export const credit = { label: 'Gebouwd door Ovion Digital', href: 'https://oviondigital.nl' };

export const footerLogoAlt = 'Bold Productions logo zwart.';
