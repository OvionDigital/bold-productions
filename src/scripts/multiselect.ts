/**
 * Meerkeuze-dropdown in formulieren ([data-multiselect], een <details> met checkboxes):
 * de samenvatting toont de keuze ("Selecteer dienst(en)", één naam of "{n} … geselecteerd")
 * en het paneel sluit bij een klik erbuiten of Escape. Zonder JS werkt <details> gewoon.
 */
export function initMultiselects(): void {
  const roots = [...document.querySelectorAll<HTMLDetailsElement>('[data-multiselect]')];
  if (!roots.length) return;

  roots.forEach((root) => {
    const summary = root.querySelector<HTMLElement>('[data-multiselect-summary]');
    const boxes = [...root.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
    if (!summary) return;
    const placeholder = summary.dataset.placeholder ?? summary.textContent ?? '';
    const countLabel = summary.dataset.countLabel ?? '{n}';

    const update = () => {
      const selected = boxes.filter((box) => box.checked).map((box) => box.value);
      summary.textContent =
        selected.length === 0 ? placeholder : selected.length === 1 ? selected[0] : countLabel.replace('{n}', String(selected.length));
    };
    boxes.forEach((box) => box.addEventListener('change', update));
    root.closest('form')?.addEventListener('reset', () => requestAnimationFrame(update));

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && root.open) {
        root.open = false;
        summary.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    roots.forEach((root) => {
      if (root.open && !root.contains(event.target as Node)) root.open = false;
    });
  });
}
