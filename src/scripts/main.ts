/**
 * Enige JS-entry voor interacties (één bundel per pagina).
 * Elke module initialiseert alleen als de bijbehorende elementen bestaan.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenis';
import { initMenu } from './menu';
import { initNavbarAutoHide } from './navbar-autohide';
import { initHeroVideo } from './hero-video';
import { initSplitHero } from './split-hero';
import { initScrollHighlight } from './scroll-highlight';
import { initBackgroundVideos } from './background-video';
import { initCarousels } from './carousel';
import { initCinemaCursor } from './cinema-cursor';
import { initAccordions } from './accordion';
import { initContactForms } from './contact-form';
import { initMultiselects } from './multiselect';
import { initCaseFilters } from './case-filter';
import { initHoverVideos } from './hover-video';
import { initDrawShapes } from './draw-shapes';
import { initVimeoFacades } from './vimeo-facade';
import { initRandomPicks } from './random-pick';
import { initAnchorLinks, initScrollAnimations } from './scroll-animations';

gsap.registerPlugin(ScrollTrigger);

// Niet-kritieke achtergronden (PageBackground) pas na window.load
const markLoaded = () => document.documentElement.classList.add('is-loaded');
if (document.readyState === 'complete') markLoaded();
else window.addEventListener('load', markLoaded, { once: true });

/**
 * Elke module apart starten: een fout in één module (bijv. een browser-API die op een oudere
 * iPhone ontbreekt) mag de andere animaties niet tegenhouden.
 */
const modules: [string, () => unknown][] = [
  // Eerst: bepaalt welke logo's/case er staan, vóór animaties en carousels meten
  ['random-pick', initRandomPicks],
  ['lenis', initLenis],
  ['scroll-animations', initScrollAnimations],
  ['anchor-links', initAnchorLinks],
  ['menu', initMenu],
  ['navbar-autohide', initNavbarAutoHide],
  ['hero-video', initHeroVideo],
  ['split-hero', initSplitHero],
  ['scroll-highlight', initScrollHighlight],
  ['background-video', initBackgroundVideos],
  ['carousel', initCarousels],
  ['cinema-cursor', initCinemaCursor],
  ['accordion', initAccordions],
  ['contact-form', initContactForms],
  ['multiselect', initMultiselects],
  ['case-filter', initCaseFilters],
  ['hover-video', initHoverVideos],
  ['draw-shapes', initDrawShapes],
  ['vimeo-facade', initVimeoFacades],
];

for (const [name, init] of modules) {
  try {
    init();
  } catch (error) {
    console.error(`[bold] ${name} niet gestart`, error);
  }
}
