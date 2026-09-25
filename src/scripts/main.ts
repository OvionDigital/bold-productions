/**
 * Enige JS-entry voor interacties (één bundel per pagina).
 * Elke module initialiseert alleen als de bijbehorende elementen bestaan.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenis';
import { initAnchorLinks, initScrollAnimations } from './scroll-animations';

gsap.registerPlugin(ScrollTrigger);

initLenis();
initScrollAnimations();
initAnchorLinks();

// TODO(stap 7): menu, hero-video, scroll-highlight, carousel, background-video, cinema-cursor
