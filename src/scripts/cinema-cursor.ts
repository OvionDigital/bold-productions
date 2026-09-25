/**
 * Popcorn-cursor: binnen een sectie met id="cinema" volgt een 🍿 de muis en laat een
 * spoor van zwevende popcorn achter (Webflow-footercode). Alleen met muis (pointer: fine)
 * en zonder reduced motion. Het cursor-element wordt pas aangemaakt als #cinema bestaat.
 */
import { gsap } from 'gsap';
import { motionEnabled } from './env';

const EMOJI = '🍿';
const TRAIL_INTERVAL = 80;

export function initCinemaCursor(): void {
  const section = document.getElementById('cinema');
  if (!section || !motionEnabled || !window.matchMedia('(pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cinema-cursor';
  cursor.textContent = EMOJI;
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  const moveX = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power2.out' });
  const moveY = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power2.out' });
  window.addEventListener('mousemove', (e) => {
    moveX(e.clientX);
    moveY(e.clientY);
  });

  section.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
  section.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-active');
    document.querySelectorAll('.popcorn-trail').forEach((el) => el.remove());
  });

  let lastTrail = 0;
  section.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrail < TRAIL_INTERVAL) return;
    lastTrail = now;
    const pop = document.createElement('div');
    pop.className = 'popcorn-trail';
    pop.textContent = EMOJI;
    pop.setAttribute('aria-hidden', 'true');
    pop.style.left = `${e.clientX}px`;
    pop.style.top = `${e.clientY}px`;
    document.body.appendChild(pop);
    gsap.to(pop, {
      y: -50,
      x: (Math.random() - 0.5) * 50,
      opacity: 0,
      scale: 0.4,
      duration: 0.9,
      ease: 'power2.out',
      onComplete: () => pop.remove(),
    });
  });
}
