/**
 * Vaste SEO-gegevens (structured data), letterlijk overgenomen van de live site
 * (Webflow, ingericht door de SEO-specialist). Gebruikt door src/lib/structured-data.ts.
 * Per pagina komt daar het type bij (dienst, contactpagina, …) via `meta.schema`.
 */
import type { TestimonialId } from './testimonials';

export const organization = {
  name: 'Bold Productions',
  telephone: '+31 6 233 286 55',
  priceRange: '€2000 - €25000',
  address: {
    streetAddress: 'Koopmanslaan 6',
    addressLocality: 'Doetinchem',
    postalCode: '7005 BK',
    addressCountry: 'NL',
  },
  geo: { latitude: 51.9669, longitude: 6.2796 },
  sameAs: [
    'https://www.linkedin.com/company/weareboldproductions',
    'https://www.instagram.com/weareboldproductions',
    'https://www.tiktok.com/@weareboldproductions',
    'https://www.facebook.com/weareboldproductions',
    'https://vimeo.com/user124034017',
  ],
};

/** Oprichter; op /over/mike met omschrijving en expertise (`profile`). */
export const founder = {
  name: 'Mike Ampting',
  jobTitle: 'Creative Director & Videograaf',
  path: '/events/over-bold/mike',
  sameAs: ['https://www.linkedin.com/in/mikeampting/', 'https://www.instagram.com/mikeampting/'],
  description:
    'Oprichter van Bold Productions en specialist in eventcontent. Mike combineert videografie met strategische conceptontwikkeling om FOMO te creëren en ticketverkoop voor festivals en artiesten te stimuleren.',
  knowsAbout: [
    'Event Videografie',
    'Contentstrategie voor festivals',
    'Artiestenmarketing',
    'FOMO Marketing',
    'Conceptontwikkeling',
    'Social Media Content Creatie',
  ],
};

/** Contactpunt op de contactpagina */
export const contactPoint = {
  telephone: '+31 6 233 286 55',
  contactType: 'Klantenservice',
  areaServed: 'NL',
  availableLanguage: ['Dutch', 'English'],
};

/** Reviews op de homepage (selectie van live), uit src/data/testimonials.ts. Sinds oktober 2026 op /events. */
export const homepageReviews: TestimonialId[] = ['reinier-peters', 'merijn-peters', 'manon-diks', 'dorpsfeest-wehl', 'sam-janssen'];

/** Klanten van de organisatie (live: op de homepage, nu /events), letterlijk van live */
export const eventsCustomers = ['Zwarte Cross', 'Bospop', 'Soenda Festival', 'Drift', 'Smoorverliefd', 'Doorgedraaid', 'Proost!', 'Dorpsfeest Wehl'];

/** Aanbod van de organisatie (live: op de homepage, nu /events), met de nieuwe URL's */
export const eventsCatalog = {
  name: 'Diensten Bold Productions',
  items: [
    { name: 'Event Content', path: '/events/organisatoren' },
    { name: 'Artiesten & Bands', path: '/events/artiesten' },
    { name: 'Zakelijke Events', path: '/events/zakelijke-events' },
  ],
};

/** Werkgebied van alle diensten */
export const areaServed = 'NL';
