/**
 * Carousel-knoppen ([data-carousel]): één item per klik scrollen (scroll-snap lijnt uit)
 * en de knoppen uitschakelen aan het begin en eind (Owl: .disabled).
 */
import { motionEnabled } from './env';

export function initCarousels(): void {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    const prev = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (!track || !prev || !next) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
    };

    const step = () => {
      const item = track.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const go = (direction: 1 | -1) =>
      track.scrollBy({ left: direction * step(), behavior: motionEnabled ? 'smooth' : 'auto' });

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  });
}
