/**
 * Indeling van de site én van cases, testimonials en klantlogo's: eerst de soort
 * (Events óf Business), dan één doelgroep binnen die soort, dan de diensten van die
 * doelgroep (meerdere; alleen cases). Klantlogo's: meerdere soorten en doelgroepen. Eén lijst per doelgroep: het menu,
 * het menupaneel, de footer (data/navigation.ts) en het CMS gebruiken allemaal deze.
 * URL's: /<soort>/<doelgroep>/<dienst>. Dienstwaarde = zoals op de site getoond
 * (feitenbalk, casesfilter), titel = zoals in het menu.
 * In Sanity: studio/schemaTypes/taxonomy.ts (gelijk houden).
 */
export type Category = 'events' | 'business';
export type EventsAudience = 'organisatoren' | 'artiesten' | 'zakelijke-events';
export type BusinessAudience = 'fundament' | 'campagnes' | 'content' | 'fotografie';
export type Audience = EventsAudience | BusinessAudience;

export interface Targeting {
  category: Category;
  audience: Audience;
  /** Uit services[audience] (waarden) */
  services?: string[];
}

/** Klantlogo's: bij meerdere soorten en doelgroepen tegelijk */
export interface MultiTargeting {
  categories: Category[];
  audiences: Audience[];
}

export interface Service {
  value: string;
  title: string;
  /** Laatste URL-segment: /<soort>/<doelgroep>/<slug> */
  slug: string;
}

export const categories: { value: Category; title: string }[] = [
  { value: 'events', title: 'Events' },
  { value: 'business', title: 'Business' },
];

export const audiences: Record<Category, { value: Audience; title: string }[]> = {
  events: [
    { value: 'organisatoren', title: 'Organisatoren' },
    { value: 'artiesten', title: 'Artiesten' },
    { value: 'zakelijke-events', title: 'Zakelijke events' },
  ],
  business: [
    { value: 'fundament', title: 'Fundament' },
    { value: 'campagnes', title: 'Campagnes' },
    { value: 'content', title: 'Content' },
    { value: 'fotografie', title: 'Fotografie' },
  ],
};

export const services: Record<Audience, Service[]> = {
  organisatoren: [
    { value: 'Promovideo', title: "Promovideo's", slug: 'promovideos' },
    { value: 'Eventvideo', title: "Eventvideo's", slug: 'eventvideos' },
    { value: 'Aftermovie', title: 'Aftermovie', slug: 'aftermovie' },
    { value: 'Social content', title: 'Social content', slug: 'social-content' },
    { value: 'Fotografie', title: 'Fotografie', slug: 'fotografie' },
  ],
  artiesten: [
    { value: 'Bandpromo', title: 'Bandpromo', slug: 'bandpromo' },
    { value: 'Artiestenpromo', title: 'Artiestenpromo', slug: 'artiestenpromo' },
    { value: 'Recap', title: 'Recap', slug: 'recap' },
    { value: 'Social content', title: 'Social content', slug: 'social-content' },
    { value: 'Fotografie', title: 'Fotografie', slug: 'fotografie' },
  ],
  'zakelijke-events': [
    { value: 'Promovideo', title: "Promovideo's", slug: 'promovideos' },
    { value: 'Aftermovie', title: 'Aftermovie', slug: 'aftermovie' },
    { value: 'Fotografie', title: 'Fotografie', slug: 'fotografie' },
    { value: 'Casevideo', title: 'Casevideo', slug: 'casevideo' },
  ],
  fundament: [
    { value: 'Brandfilm', title: 'Brandfilm', slug: 'brandfilm' },
    { value: 'Bedrijfsfilm', title: 'Bedrijfsfilm', slug: 'bedrijfsfilm' },
    { value: 'Employer branding', title: 'Employer branding', slug: 'employer-branding' },
  ],
  campagnes: [
    { value: 'Commercial', title: 'Commercial', slug: 'commercial' },
    { value: 'Merkactivatie', title: 'Merkactivatie', slug: 'merkactivatie' },
    { value: 'Werving', title: 'Werving', slug: 'werving' },
  ],
  content: [
    { value: 'AI', title: 'AI', slug: 'ai' },
    { value: 'Contentcreatie', title: 'Contentcreatie', slug: 'contentcreatie' },
    { value: 'Referentievideo', title: 'Referentievideo', slug: 'referentievideo' },
    { value: 'Social content', title: 'Social content', slug: 'social-content' },
    { value: 'Productvideo', title: 'Productvideo', slug: 'productvideo' },
    { value: 'Projectvideo', title: 'Projectvideo', slug: 'projectvideo' },
  ],
  fotografie: [
    { value: 'Bedrijfsfotografie', title: 'Bedrijfsfotografie', slug: 'bedrijfsfotografie' },
    { value: 'Productfotografie', title: 'Productfotografie', slug: 'productfotografie' },
    { value: "Portret- en teamfoto's", title: "Portret- en teamfoto's", slug: 'zakelijk-portret' },
    { value: 'Projectfotografie', title: 'Projectfotografie', slug: 'projectfotografie' },
  ],
};

export const audienceTitle = (audience: Audience) =>
  [...audiences.events, ...audiences.business].find((a) => a.value === audience)?.title ?? audience;

export const audienceUrl = (category: Category, audience: Audience) => `/${category}/${audience}`;

/**
 * Soort, doelgroep en dienst van een pagina uit haar URL-pad (/<soort>/<doelgroep>/<dienst>).
 * Wat niet uit het pad volgt ontbreekt: /events/cases → alleen de soort, /trouwfilm → niets.
 */
export function targetingOfPath(path: string): { category?: Category; audience?: Audience; service?: string } {
  const [first, second, third] = path.replace(/.html$/, '').split('/').filter(Boolean);
  if (first !== 'events' && first !== 'business') return {};
  const audience = audiences[first].find((a) => a.value === second)?.value;
  if (!audience) return { category: first };
  return { category: first, audience, service: services[audience].find((s) => s.slug === third)?.value };
}
export const serviceUrl = (category: Category, audience: Audience, service: Service) => `/${category}/${audience}/${service.slug}`;

/**
 * Automatisch kiezen voor een pagina (logostrip, testimonials): wat de soort én doelgroep van
 * het pad heeft; is dat er niet, dan wat de soort heeft (op een Business-pagina dus Business),
 * en anders alles.
 */
export function matchingPath<T extends MultiTargeting>(all: T[], path: string): T[] {
  const { category, audience } = targetingOfPath(path);
  const levels: ((item: T) => boolean)[] = [
    (item) => Boolean(category && audience) && item.categories.includes(category!) && item.audiences.includes(audience!),
    (item) => Boolean(category) && item.categories.includes(category!),
  ];
  for (const matches of levels) {
    const found = all.filter(matches);
    if (found.length) return found;
  }
  return all;
}
