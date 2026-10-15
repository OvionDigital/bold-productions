/**
 * Verbergt de navbar bij scrollen naar beneden, toont 'm weer bij scrollen naar boven.
 * Blijft zichtbaar: bovenaan de pagina (binnen de eigen hoogte), met het menupaneel
 * open, of bij toetsenbordfocus in de navbar (CSS :focus-within).
 * Uit bij ?static=1 en prefers-reduced-motion: de navbar blijft dan gewoon vast staan.
 *
 * data-reveal-after="<selector>" (homepage: de split-hero): de navbar is verborgen tot dat
 * element voorbij is (CSS: .navbar[data-reveal-after]:not(.is-revealed)). Dit deel werkt
 * altijd, ook zonder beweging; daarna geldt het gewone verbergen/tonen.
 */
import { motionEnabled } from './env';

export function initNavbarAutoHide(): void {
  const navbar = document.querySelector<HTMLElement>('[data-navbar]');
  if (!navbar) return;

  // Beveiliging tegen dubbele init (dev-server hot-reload), zie menu.ts.
  if (navbar.dataset.autohideInitialized) return;
  navbar.dataset.autohideInitialized = 'true';

  const revealSelector = navbar.dataset.revealAfter;
  const revealTarget = revealSelector ? document.querySelector<HTMLElement>(revealSelector) : null;
  /** Voorbij het reveal-element (of er is er geen) */
  const revealed = () => !revealTarget || revealTarget.getBoundingClientRect().bottom <= navbar.offsetHeight;

  const threshold = navbar.offsetHeight;
  // Kleine scrollverschillen (bijv. een resync-schokje van Lenis vlak na het
  // sluiten van het menu) negeren we volledig, ook voor lastY: anders kan de
  // navbar per ongeluk verbergen op het moment dat iemand 'm net weer wil
  // gebruiken (bijv. de menuknop nogmaals aanklikken).
  const DEAD_ZONE = 8;
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = Math.max(0, window.scrollY);

    if (revealTarget) {
      const isRevealed = revealed();
      navbar.classList.toggle('is-revealed', isRevealed);
      if (!isRevealed) {
        navbar.classList.remove('is-hidden');
        lastY = y;
        return;
      }
    }
    if (!motionEnabled) return;

    const menuOpen = document.documentElement.classList.contains('is-menu-open');
    if (menuOpen || y <= threshold) {
      navbar.classList.remove('is-hidden');
      lastY = y; // altijd resyncen zodat we na sluiten vanaf de juiste positie meten
      return;
    }

    const delta = y - lastY;
    if (delta > DEAD_ZONE) {
      navbar.classList.add('is-hidden'); // naar beneden: verbergen
      lastY = y;
    } else if (delta < -DEAD_ZONE) {
      navbar.classList.remove('is-hidden'); // naar boven: tonen
      lastY = y;
    }
    // Binnen de dead zone: niets doen, ook lastY niet bijwerken.
  };

  if (!motionEnabled && !revealTarget) return;
  update();
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
