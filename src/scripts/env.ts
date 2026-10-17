/**
 * Omgevingsdetectie voor alle interacties.
 * - `?static=1` (screenshots/compare, Sanity-preview) zet alles uit.
 * - prefers-reduced-motion (iOS/macOS "Beweging beperken", Android "Animaties verwijderen")
 *   betekent minder beweging, niet geen: smooth scroll, verschuivingen, schaal, drift en
 *   automatisch spelende video's vallen weg; fades, de scroll-highlight en het tekenen van de
 *   B-lijnen blijven (CSS: global.css → "Minder beweging").
 * - De class `is-static` op <html> wordt al inline in <head> gezet (BaseLayout).
 */
export const isStatic = document.documentElement.classList.contains('is-static');

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mag er bewogen worden (Lenis, video's, drift, hover-video's)? */
export const motionEnabled = !isStatic && !prefersReducedMotion;

/** Effecten zonder verplaatsing (fade-in, scroll-highlight, lijntekening): ook bij minder beweging */
export const fadeEnabled = !isStatic;
