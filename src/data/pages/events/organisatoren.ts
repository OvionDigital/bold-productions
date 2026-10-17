/**
 * /events — opbouw van de pagina; de inhoud zelf staat in src/data/events.ts
 * (handgebouwd en pixel-gecontroleerd, ook gebruikt op /styleguide).
 */
import type { PageData } from '../../../lib/sections';
import {
  biggerThanTheDay,
  caseSpotlight,
  cinema,
  contactSection,
  faq,
  hero,
  meta,
  services,
  testimonials,
  timeline,
  trustedBy,
} from '../../events';

export const page: PageData = {
  slug: 'events/organisatoren',
  title: 'Organisatoren',
  meta,
  sections: [
    { type: 'hero', props: hero },
    { type: 'breadcrumbs' },
    { type: 'logoMarquee', props: trustedBy },
    { type: 'textMedia', props: biggerThanTheDay },
    { type: 'timeline', props: timeline },
    { type: 'caseSpotlight', props: caseSpotlight },
    { type: 'testimonials', props: testimonials },
    { type: 'imageFeature', props: cinema },
    { type: 'serviceTiles', props: services },
    { type: 'faq', props: faq },
    { type: 'textMedia', props: contactSection, form: { name: 'contact' } },
  ],
};
