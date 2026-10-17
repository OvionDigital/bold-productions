/**
 * /events — de Events-homepage (tot oktober 2026 de homepage van de site). Sinds oktober 2026
 * een gewone pagina uit secties (in Sanity onder "Pagina's", id page-events-home); de inhoud
 * staat in src/data/home.ts. Reviews in de structured data: [...slug].astro.
 */
import type { PageData } from '../../lib/sections';
import { backstage, hero, intro, meta, micDrop, testimonials, timeline, trustedBy } from '../home';

export const page: PageData = {
  slug: 'events',
  title: 'Events',
  meta: { title: meta.title, description: meta.description },
  sections: [
    { type: 'hero', props: hero },
    { type: 'logoMarquee', props: trustedBy },
    { type: 'introHighlight', props: intro },
    { type: 'timeline', props: timeline },
    { type: 'testimonials', props: testimonials },
    { type: 'polaroidStack', props: backstage },
    { type: 'textMedia', props: micDrop },
  ],
};
