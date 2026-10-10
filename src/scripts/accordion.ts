/**
 * Generiek accordeon: <button data-accordion-trigger aria-controls="…" aria-expanded>.
 * Zet aria-expanded op de knop en data-open op het paneel; de animatie (hoogte via
 * grid-template-rows 0fr ↔ 1fr) en het verbergen staan in de CSS van het component.
 * Geen hoogtemeting of inline hoogte in JS, dus de pagina eromheen blijft rustig.
 * Zonder JS staan panelen open. Bij reduced motion staat de transitie uit (global.css).
 */
export function initAccordions(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]').forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    trigger.addEventListener('click', () => {
      const expand = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(expand));
      panel.toggleAttribute('data-open', expand);
    });
  });
}
