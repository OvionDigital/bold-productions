/**
 * Vaste gegevens voor de structured data (src/lib/structured-data.ts), volgens de specificatie van
 * de SEO-specialist (oktober 2026). Adres, telefoon, e-mail, KvK en social media staan niet hier
 * maar in Sanity (Menu, footer & contact; getContact/getSocials), zodat footer en schema gelijk blijven.
 */
import type { Category } from './taxonomy';

export const organization = { name: 'Bold Productions' };

/** Bold Events en Bold Business: onderdelen van Bold Productions (Brand onder de Organization) */
export const brands: Record<Category, { name: string; path: string }> = {
  events: { name: 'Bold Events', path: '/events' },
  business: { name: 'Bold Business', path: '/business' },
};

/** Oprichter; alleen op de twee Mike-pagina's (/<soort>/over-bold/mike), steeds dezelfde @id */
export const founder = {
  slug: 'mike',
  name: 'Mike Ampting',
  jobTitle: 'Creative Director',
  sameAs: ['https://www.linkedin.com/in/mikeampting/', 'https://www.instagram.com/mikeampting/'],
};
