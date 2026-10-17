import type { InsertMenuOptions } from 'sanity';
import { heroSection } from './hero';
import { splitHeroSection } from './splitHero';
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
  splitHeroSection,
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
export const caseSectionTypes = sectionTypes.filter((t) => !['heroSection', 'splitHeroSection', 'breadcrumbsSection', 'caseGridSection', 'linkGroupsSection'].includes(t.name));

/**
 * Menu "Sectie toevoegen" (pagina's en cases): tabbladen per soort sectie en een raster met
 * een plaatje van elke sectie op de echte site (studio/static/sections/, gemaakt met
 * `npm run sanity:section-previews` in de root). Nieuw blok? Hier in een groep zetten en de
 * plaatjes opnieuw maken.
 */
export const sectionInsertMenu: InsertMenuOptions = {
  filter: true,
  groups: [
    { name: 'top', title: 'Bovenaan', of: ['heroSection', 'splitHeroSection', 'breadcrumbsSection'] },
    {
      name: 'text',
      title: 'Tekst',
      of: ['introHighlightSection', 'richTextSection', 'textMediaSection', 'timelineSection', 'faqSection', 'linkGroupsSection'],
    },
    {
      name: 'media',
      title: 'Beeld & video',
      of: ['imageFeatureSection', 'fullWidthImageSection', 'videoFeatureSection', 'polaroidStackSection', 'serviceTilesSection', 'teamSection'],
    },
    { name: 'proof', title: 'Klanten & cases', of: ['logoMarqueeSection', 'testimonialsSection', 'caseSpotlightSection', 'caseGridSection'] },
    { name: 'contact', title: 'Contact', of: ['contactSection', 'mapSection'] },
  ],
  views: [{ name: 'grid', previewImageUrl: (schemaTypeName) => `/static/sections/${schemaTypeName}.jpg` }, { name: 'list' }],
};
