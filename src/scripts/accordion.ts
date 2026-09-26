/**
 * Generiek accordeon: <button data-accordion-trigger aria-controls="…" aria-expanded>.
 * Klapt het bijbehorende paneel open/dicht (hoogte 0 ↔ auto, 0,3 s) en zet aria-expanded.
 * Zonder JS staan panelen open (CSS verbergt ze alleen onder html.js).
 * Webflow-IX: faq_item_question (odd/even click).
 */
import { gsap } from 'gsap';
import { motionEnabled } from './env';

export function initAccordions(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]').forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    trigger.addEventListener('click', () => {
      const expand = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(expand));
      gsap.killTweensOf(panel);
      gsap.fromTo(
        panel,
        { height: panel.offsetHeight },
        { height: expand ? 'auto' : 0, duration: motionEnabled ? 0.3 : 0, ease: 'power2.inOut' },
      );
    });
  });
}
