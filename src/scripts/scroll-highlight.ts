/**
 * Scroll-highlight ([data-scroll-highlight]): SplitType in woorden + letters;
 * letters starten op 15% dekking en lichten bij scrollen op met een korte witte gloed.
 * Overgenomen uit de Webflow-footercode (start top 80%, eind bottom 30%, scrub).
 * Uit bij ?static=1 en prefers-reduced-motion: tekst blijft volledig zichtbaar.
 */
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { motionEnabled } from './env';

export function initScrollHighlight(): void {
  if (!motionEnabled) return;
  document.querySelectorAll<HTMLElement>('[data-scroll-highlight]').forEach((el) => {
    const text = new SplitType(el, { types: 'words,chars' });
    if (!text.chars?.length) return;

    gsap.set(text.chars, { opacity: 0.15 });
    gsap.to(text.chars, {
      keyframes: [
        { opacity: 1, textShadow: '0 0 16px rgba(255, 255, 255, 0.9)', duration: 0.3 },
        { textShadow: '0 0 0 rgba(255, 255, 255, 0)', duration: 0.7 },
      ],
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: true,
      },
    });
  });
}
