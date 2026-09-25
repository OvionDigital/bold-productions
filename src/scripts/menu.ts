/**
 * Menupaneel + accordeon (Webflow-IX "menu-open/close" en "menu_dropdown_icon").
 * - Openen: schaal 0→1 + fade vanuit rechtsboven, ease back.out(0.6).
 * - Sluiten via knop, overlay of Escape. Focus blijft binnen menu + knop.
 * - Tijdens open: Lenis gestopt en pagina-scroll vergrendeld; het paneel scrollt zelf.
 */
import { gsap } from 'gsap';
import { motionEnabled } from './env';
import { getLenis } from './lenis';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  const overlay = document.querySelector<HTMLElement>('[data-menu-overlay]');
  if (!toggle || !panel || !overlay) return;

  const duration = motionEnabled ? 0.5 : 0;
  let isOpen = false;

  const open = () => {
    isOpen = true;
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    overlay.hidden = false;
    document.documentElement.classList.add('is-menu-open');
    getLenis()?.stop();
    gsap.killTweensOf([panel, overlay]);
    gsap.fromTo(panel, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration, ease: 'back.out(0.6)' });
    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration, ease: 'power2.out' });
    panel.querySelector<HTMLElement>(FOCUSABLE)?.focus({ preventScroll: true });
  };

  const close = ({ returnFocus = true } = {}) => {
    if (!isOpen) return;
    isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    gsap.killTweensOf([panel, overlay]);
    gsap.to(panel, {
      opacity: 0,
      scale: 0,
      duration,
      ease: 'power2.inOut',
      onComplete: () => {
        panel.hidden = true;
      },
    });
    gsap.to(overlay, {
      opacity: 0,
      duration,
      ease: 'power2.inOut',
      onComplete: () => {
        overlay.hidden = true;
      },
    });
    document.documentElement.classList.remove('is-menu-open');
    getLenis()?.start();
    if (returnFocus) toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => (isOpen ? close() : open()));
  overlay.addEventListener('click', () => close());

  document.addEventListener('keydown', (event) => {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    // Focus-trap: knop + zichtbare elementen in het paneel
    const items = [toggle, ...panel.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
      (el) => el.offsetParent !== null || el === toggle,
    );
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Klik op een link in het paneel sluit het menu (ook bij anchors op dezelfde pagina)
  panel.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    link.addEventListener('click', () => close({ returnFocus: false }));
  });

  initAccordion(panel);
}

function initAccordion(panel: HTMLElement): void {
  panel.querySelectorAll<HTMLButtonElement>('[data-menu-accordion]').forEach((button) => {
    const targetId = button.getAttribute('aria-controls');
    const children = targetId ? document.getElementById(targetId) : null;
    if (!children) return;

    button.addEventListener('click', () => {
      const expand = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expand));
      gsap.to(children, {
        height: expand ? 'auto' : 0,
        duration: motionEnabled ? 0.3 : 0,
        ease: 'power2.inOut',
      });
    });
  });
}
