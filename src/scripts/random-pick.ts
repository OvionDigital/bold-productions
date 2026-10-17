/**
 * Willekeurige keuze bij elk bezoek ([data-random-pick="N"]): de pagina bevat alle kandidaten,
 * de eerste N zijn zichtbaar en de rest heeft `hidden` (zonder JS, en bij ?static=1, blijft
 * dat zo). Het script kiest N willekeurige kandidaten in willekeurige volgorde en haalt de
 * rest weg. Met [data-random-list]-kinderen (logostrip: lijst + kopie voor de eindeloze
 * loop) krijgt elke lijst precies dezelfde keuze.
 * Gebruikt door LogoMarquee (max. 10 logo's) en CaseSpotlight (één passende case).
 */
import { isStatic } from './env';

export function initRandomPicks(): void {
  if (isStatic) return;
  document.querySelectorAll<HTMLElement>('[data-random-pick]').forEach((container) => {
    const keep = Math.max(1, Number(container.dataset.randomPick) || 1);
    const lists = [...container.querySelectorAll<HTMLElement>(':scope > [data-random-list]')];
    const targets = lists.length ? lists : [container];
    const count = targets[0]!.children.length;
    if (count < 2) return;

    // Fisher-Yates: eerlijke volgorde, daarvan de eerste `keep`
    const order = [...Array(count).keys()];
    for (let i = count - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j]!, order[i]!];
    }
    const chosen = order.slice(0, keep);

    targets.forEach((list) => {
      const items = [...list.children] as HTMLElement[];
      const picked = chosen.map((index) => items[index]).filter((item): item is HTMLElement => Boolean(item));
      picked.forEach((item) => (item.hidden = false));
      list.replaceChildren(...picked);
    });
  });
}
