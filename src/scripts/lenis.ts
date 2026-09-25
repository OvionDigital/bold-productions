/**
 * Smooth scroll met Lenis, gekoppeld aan GSAP's ticker en ScrollTrigger.
 * Uit bij ?static=1 en prefers-reduced-motion.
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motionEnabled } from './env';

let lenis: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (!motionEnabled) return null;

  lenis = new Lenis({
    // Scrollen binnen het menupaneel niet overnemen
    prevent: (node: HTMLElement) => node.closest('[data-lenis-prevent]') !== null,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

/** Scroll naar een element; valt terug op native scroll zonder Lenis. */
export function scrollToTarget(target: HTMLElement, offset = -80): void {
  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: motionEnabled ? 'smooth' : 'auto' });
  }
}
