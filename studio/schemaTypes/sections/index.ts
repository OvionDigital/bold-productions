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
import {
  caseGridSection,
  contactSection,
  fullWidthImageSection,
  linkGroupsSection,
  mapSection,
  richTextSection,
  teamSection,
  videoFeatureSection,
} from './more';

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
  richTextSection,
  textMediaSection,
  timelineSection,
  testimonialsSection,
  polaroidStackSection,
  caseSpotlightSection,
  imageFeatureSection,
  serviceTilesSection,
  teamSection,
  faqSection,
  fullWidthImageSection,
  videoFeatureSection,
  contactSection,
  mapSection,
  caseGridSection,
  linkGroupsSection,
];

/** Blokken voor de inhoud van een case (onder de vaste kop met hero, intro en feiten). */
export const caseSectionTypes = sectionTypes.filter((t) => !['heroSection', 'breadcrumbsSection', 'caseGridSection', 'linkGroupsSection'].includes(t.name));
