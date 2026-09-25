/**
 * Omgevingsdetectie voor alle interacties.
 * - `?static=1` (screenshots/compare) en prefers-reduced-motion schakelen beweging uit.
 * - De class `is-static` op <html> wordt al inline in <head> gezet (BaseLayout).
 */
export const isStatic = document.documentElement.classList.contains('is-static');

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mag er bewogen worden (Lenis, GSAP, marquee-JS)? */
export const motionEnabled = !isStatic && !prefersReducedMotion;
