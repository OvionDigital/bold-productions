/**
 * Cases: één bron voor alle plekken waar cases verschijnen (uitgelicht, overzicht,
 * detailpagina /cases/[slug]). Voorlopig statisch; later te vervangen door een
 * content collection of CMS met dezelfde velden.
 */
import type { ImageMetadata } from 'astro';
import pluggerz from '../assets/images/cases/pluggerz-zwarte-cross-2026.jpg';

export type Audience = 'events' | 'artiesten' | 'zakelijke-events';

export interface Case {
  slug: string;
  title: string;
  /** Korte vraag/intro onder de titel */
  intro: string;
  image: { src: ImageMetadata; alt: string };
  audiences: Audience[];
}

export const cases: Case[] = [
  {
    slug: 'pluggerz-x-zwarte-cross-2026',
    title: 'Pluggerz x Zwarte Cross 2026',
    intro: 'Hoe verkoop je oordoppen aan mensen die niets willen missen?',
    // Decoratief: de titel staat al in de kaart
    image: { src: pluggerz, alt: '' },
    audiences: ['events'],
  },
];

export const caseUrl = (slug: string) => `/cases/${slug}`;

export function getCase(slug: string): Case {
  const found = cases.find((c) => c.slug === slug);
  if (!found) throw new Error(`Case '${slug}' bestaat niet in src/data/cases.ts`);
  return found;
}
