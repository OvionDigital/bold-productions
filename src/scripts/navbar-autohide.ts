/**
 * Verbergt de navbar bij scrollen naar beneden, toont 'm weer bij scrollen naar boven.
 * Blijft zichtbaar: bovenaan de pagina (binnen de eigen hoogte), met het menupaneel
 * open, of bij toetsenbordfocus in de navbar (CSS :focus-within).
 * Uit bij ?static=1 en prefers-reduced-motion: de navbar blijft dan gewoon vast staan.
 */
import { motionEnabled } from './env';

export function initNavbarAutoHide(): void {
  const navbar = document.querySelector<HTMLElement>('[data-navbar]');
  if (!navbar || !motionEnabled) return;

  const threshold = navbar.offsetHeight;
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = Math.max(0, window.scrollY);
    const menuOpen = document.documentElement.classList.contains('is-menu-open');

    if (menuOpen || y <= threshold) {
      navbar.classList.remove('is-hidden');
    } else if (y > lastY) {
      navbar.classList.add('is-hidden'); // naar beneden: verbergen
    } else if (y < lastY) {
      navbar.classList.remove('is-hidden'); // naar boven: tonen
    }
    lastY = y;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
}
