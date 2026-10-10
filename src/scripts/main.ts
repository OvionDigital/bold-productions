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
import { initAnchorLinks, initScrollAnimations } from './scroll-animations';

gsap.registerPlugin(ScrollTrigger);

// Niet-kritieke achtergronden (PageBackground) pas na window.load
const markLoaded = () => document.documentElement.classList.add('is-loaded');
if (document.readyState === 'complete') markLoaded();
else window.addEventListener('load', markLoaded, { once: true });

initLenis();
initScrollAnimations();
initAnchorLinks();
initMenu();
initNavbarAutoHide();
initHeroVideo();
initScrollHighlight();
initBackgroundVideos();
initCarousels();
initCinemaCursor();
initAccordions();
initContactForms();
initMultiselects();
initCaseFilters();
initHoverVideos();
initDrawShapes();

