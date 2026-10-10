/**
 * Casesoverzicht ([data-case-grid]): filterknoppen per groep (doelgroep, dienst).
 * Een case is zichtbaar als hij in elke groep past ('alle' = alles). ?filter=<doelgroep>
 * kiest vooraf een doelgroep (menulinks). Geen resultaten = melding. Webflow-gedrag,
 * maar een dienstfilter kijkt naar álle diensten van een case (live alleen de eerste).
 */
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initCaseFilters(): void {
  document.querySelectorAll<HTMLElement>('[data-case-grid]').forEach((grid) => {
    const groups = [...grid.querySelectorAll<HTMLElement>('[data-case-filter]')];
    const items = [...grid.querySelectorAll<HTMLElement>('[data-audiences]')];
    const empty = grid.querySelector<HTMLElement>('[data-case-empty]');
    const active: Record<string, string> = {};

    const apply = () => {
      let visible = 0;
      items.forEach((item) => {
        const match = Object.entries(active).every(([name, value]) => {
          if (value === 'alle') return true;
          const values = (name === 'audience' ? item.dataset.audiences : item.dataset.services)?.split('|') ?? [];
          return values.includes(value);
        });
        item.hidden = !match;
        if (match) visible++;
      });
      if (empty) empty.hidden = visible > 0;
      ScrollTrigger.refresh();
    };

    const select = (group: HTMLElement, value: string) => {
      const buttons = [...group.querySelectorAll<HTMLButtonElement>('button[data-value]')];
      const target = buttons.find((b) => b.dataset.value === value) ?? buttons[0];
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === target)));
      active[group.dataset.caseFilter ?? ''] = target?.dataset.value ?? 'alle';
    };

    groups.forEach((group) => {
      select(group, 'alle');
      group.addEventListener('click', (event) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-value]');
        if (!button) return;
        select(group, button.dataset.value ?? 'alle');
        apply();
      });
    });

    const preset = new URLSearchParams(window.location.search).get('filter');
    const audience = groups.find((g) => g.dataset.caseFilter === 'audience');
    if (preset && audience) {
      select(audience, preset);
      apply();
    }
  });
}
