/**
 * Navigatie: hoofdmenu (header + menupaneel) en footer.
 * Teksten en URL's letterlijk van www.weareboldproductions.com.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup extends NavLink {
  children: NavLink[];
  /** Toon in de header-dropdowns (desktop ≥1280px). Anders alleen in het menupaneel. */
  inHeader?: boolean;
}

export const cta: NavLink = { label: 'Bold to Action', href: '/offerte-aanvragen' };

export const header = {
  menuLabel: 'Menu',
  logoAlt: 'Logo Bold Productions.',
  homeTitle: 'Naar home',
};

export const mainNav: NavGroup[] = [
  {
    label: 'Events',
    href: '/events',
    inHeader: true,
    children: [
      { label: "Promovideo's", href: '/events/promovideos' },
      { label: "Eventvideo's", href: '/events/eventvideos' },
      { label: 'Aftermovie', href: '/events/aftermovie' },
      { label: 'Social content', href: '/events/social-content' },
      { label: 'Fotografie', href: '/events/fotografie' },
    ],
  },
  {
    label: 'Artiesten',
    href: '/artiesten',
    inHeader: true,
    children: [
      { label: 'Bandpromo', href: '/artiesten/bandpromo' },
      { label: 'Artiestenpromo', href: '/artiesten/artiestenpromo' },
      { label: 'Recap', href: '/artiesten/recap' },
      { label: 'Social content', href: '/artiesten/social-content' },
      { label: 'Fotografie', href: '/artiesten/fotografie' },
    ],
  },
  {
    label: 'Zakelijke events',
    href: '/zakelijke-events',
    inHeader: true,
    children: [
      { label: "Promovideo's", href: '/zakelijke-events/promovideo' },
      { label: 'Aftermovie', href: '/zakelijke-events/aftermovie' },
      { label: 'Fotografie', href: '/zakelijke-events/fotografie' },
      { label: 'Casevideo', href: '/zakelijke-events/casevideo' },
    ],
  },
  {
    label: 'Cases',
    href: '/cases',
    children: [
      { label: 'Events', href: '/cases?filter=events' },
      { label: 'Artiesten', href: '/cases?filter=artiesten' },
      { label: 'Zakelijke events', href: '/cases?filter=zakelijke-events' },
    ],
  },
  {
    label: 'Over Bold',
    href: '/over',
    children: [{ label: 'Mike Ampting', href: '/over/mike' }],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [{ label: 'Offerte Aanvragen', href: '/offerte-aanvragen' }],
  },
];

export const footerColumns: NavGroup[] = [
  {
    label: 'Voor events',
    href: '/events',
    children: [
      { label: "Promovideo's", href: '/events/promovideos' },
      { label: "Eventvideo's", href: '/events/eventvideos' },
      { label: 'Aftermovie', href: '/events/aftermovie' },
      { label: 'Social content', href: '/events/social-content' },
      { label: 'Fotografie', href: '/events/fotografie' },
    ],
  },
  {
    label: 'Voor artiesten',
    href: '/artiesten',
    children: [
      { label: 'Bandpromo', href: '/artiesten/bandpromo' },
      { label: 'Artiestenpromo', href: '/artiesten/artiestenpromo' },
      { label: 'Recap', href: '/artiesten/recap' },
      { label: 'Social content', href: '/artiesten/social-content' },
      { label: 'Fotografie', href: '/artiesten/fotografie' },
    ],
  },
  {
    label: 'Voor zakelijke events',
    href: '/zakelijke-events',
    children: [
      { label: "Promovideo's", href: '/zakelijke-events/promovideo' },
      { label: 'Aftermovie', href: '/zakelijke-events/aftermovie' },
      { label: 'Fotografie', href: '/zakelijke-events/fotografie' },
      { label: 'Casevideo', href: '/zakelijke-events/casevideo' },
    ],
  },
  {
    label: 'Bold Productions',
    href: '/over',
    children: [
      { label: 'Cases', href: '/cases' },
      { label: 'Over Mike', href: '/over/mike' },
      { label: 'Contact', href: '/contact' },
      { label: 'Offerte aanvragen', href: '/offerte-aanvragen' },
    ],
  },
];

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
  { label: 'Sitemap', href: 'https://www.weareboldproductions.com/sitemap/' },
];

export const copyright = '© Bold Productions 2026';
