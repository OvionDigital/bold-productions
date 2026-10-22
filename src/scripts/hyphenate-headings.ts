/**
 * Koppen krijgen alleen afbreekstreepjes (.is-hyphenated, global.css) als er een woord in
 * staat dat breder is dan de beschikbare regel. Zonder deze module breekt zo'n woord af
 * zonder streepje (overflow-wrap) en blijven korte woorden heel ("ON-MOGELIJK" kwam door
 * hyphens: auto, dat ook afbreekt als het woord op de volgende regel past).
 * Meet elk woord in een onzichtbare span met dezelfde letter; opnieuw bij een andere breedte.
 */
const SELECTOR = 'h1, h2, h3, h4, h5, h6, .heading';
const COPIED = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'fontStretch', 'letterSpacing', 'textTransform', 'fontFeatureSettings'] as const;

function availableWidth(el: HTMLElement): number {
  const parent = el.parentElement;
  if (!parent) return el.clientWidth;
  const style = getComputedStyle(parent);
  const parentWidth = parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  return Math.min(el.clientWidth || parentWidth, parentWidth);
}

function update(headings: HTMLElement[], probe: HTMLSpanElement): void {
  // Eerst alles lezen, dan pas klassen zetten (geen layout-thrashing)
  const results = headings.map((el) => {
    const words = (el.textContent ?? '').split(/\s+/).filter((word) => word.length > 3);
    if (!words.length || !el.offsetParent) return false;
    const style = getComputedStyle(el);
    for (const prop of COPIED) probe.style[prop] = style[prop];
    const longest = Math.max(
      ...words.map((word) => {
        probe.textContent = word;
        return probe.getBoundingClientRect().width;
      }),
    );
    return longest > availableWidth(el) + 0.5;
  });
  headings.forEach((el, i) => el.classList.toggle('is-hyphenated', results[i]));
}

export function initHyphenateHeadings(): void {
  const headings = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
  if (!headings.length) return;

  const probe = document.createElement('span');
  probe.setAttribute('aria-hidden', 'true');
  Object.assign(probe.style, { position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap', left: '-9999px', top: '0' });
  document.body.append(probe);

  const run = () => update(headings, probe);
  run();
  document.fonts?.ready.then(run);

  let width = window.innerWidth;
  let timer: number | undefined;
  window.addEventListener('resize', () => {
    if (window.innerWidth === width) return;
    width = window.innerWidth;
    clearTimeout(timer);
    timer = window.setTimeout(run, 150);
  });
}
