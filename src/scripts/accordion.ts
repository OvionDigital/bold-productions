/**
 * Generiek accordeon: <button data-accordion-trigger aria-controls="…" aria-expanded>.
 * Zet aria-expanded op de knop en data-open op het paneel; tonen/verbergen en de animatie
 * staan in de CSS van het component (geen hoogtes meten of zetten in JS).
 *
 * De aangeklikte knop blijft exact op dezelfde plek in beeld: de scrollpositie wordt na het
 * klappen gecorrigeerd met het verschil (ook onder Lenis), zodat de pagina nooit verspringt,
 * wat de browser (scroll anchoring) of een ander script ook doet.
 * Zonder JS staan panelen open.
 */
import { getLenis } from './lenis';

export function initAccordions(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]').forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    trigger.addEventListener('click', () => {
      const expand = trigger.getAttribute('aria-expanded') !== 'true';
      const topBefore = trigger.getBoundingClientRect().top;
      trigger.setAttribute('aria-expanded', String(expand));
      panel.toggleAttribute('data-open', expand);

      const shift = trigger.getBoundingClientRect().top - topBefore;
      if (Math.abs(shift) < 0.5) return;
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(window.scrollY + shift, { immediate: true, force: true });
      else window.scrollBy(0, shift);
    });
  });
}
