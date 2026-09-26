/**
 * Fade-in-up bij scrollen voor elementen met [data-animate]
 * (Webflow: .animate-on-scroll, start 'top 70%', eenmalig).
 * Ook: vloeiende anchor-links (#…) met 80px offset voor de vaste header.
 */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motionEnabled } from './env';
import { scrollToTarget } from './lenis';

export function initScrollAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
  const groups = document.querySelectorAll<HTMLElement>('[data-animate-stagger]');
  if (!motionEnabled) {
    [...elements, ...groups].forEach((el) => el.classList.add('is-visible'));
    return;
  }
  elements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 70%',
      once: true,
      onEnter: () => el.classList.add('is-visible'),
    });
  });

  // Groepen: kinderen na elkaar (volgorde als --animate-index, zie global.css).
  // Iets eerder starten (80%) zodat ook korte groepen onderaan de pagina afgaan.
  groups.forEach((group) => {
    [...group.children]
      .filter((child) => !child.hasAttribute('data-animate-skip'))
      .forEach((child, index) => (child as HTMLElement).style.setProperty('--animate-index', String(index)));
    ScrollTrigger.create({
      trigger: group,
      start: 'top 80%',
      once: true,
      onEnter: () => group.classList.add('is-visible'),
    });
  });
}

export function initAnchorLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      event.preventDefault();
      scrollToTarget(target);
    });
  });
}
