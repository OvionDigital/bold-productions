import { heroSection } from './hero';
import {
  breadcrumbsSection,
  caseSpotlightSection,
  faqSection,
  imageFeatureSection,
  introHighlightSection,
  logoMarqueeSection,
  polaroidStackSection,
  testimonialsSection,
} from './simple';
import { serviceTilesSection, textMediaSection, timelineSection } from './rich';

/**
 * Alle blokken waarmee een pagina opgebouwd kan worden, in de volgorde van het
 * "Sectie toevoegen"-menu. Elk blok = één component in src/components/sections/
 * (mapping in src/lib/sanity/sections.ts). Nieuw blok? Hier én daar toevoegen.
 */
export const sectionTypes = [
  heroSection,
  breadcrumbsSection,
  logoMarqueeSection,
  introHighlightSection,
  textMediaSection,
  timelineSection,
  testimonialsSection,
  polaroidStackSection,
  caseSpotlightSection,
  imageFeatureSection,
  serviceTilesSection,
  faqSection,
];
