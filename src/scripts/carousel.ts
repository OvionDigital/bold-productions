/**
 * Carousel ([data-carousel]):
 * - .is-scrollable als de items niet allemaal in beeld passen: alleen dan staan de
 *   pijlknoppen er en kan er gesleept worden (bijgewerkt bij resize).
 * - Pijlknoppen: één item per klik scrollen (scroll-snap lijnt uit) en uitschakelen
 *   aan het begin en eind (Owl: .disabled).
 * - Slepen met de muis (Owl: mouseDrag). Touch en trackpad scrollen al native.
 *   Tijdens het slepen staat scroll-snap uit (.is-dragging), bij loslaten lijnt de
 *   carousel uit op het dichtstbijzijnde item. Na een sleep wordt de klik genegeerd.
 */
import { motionEnabled } from './env';

/** Minimale verplaatsing (px) voordat een muisbeweging als slepen telt */
const DRAG_THRESHOLD = 5;

export function initCarousels(): void {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    const prev = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (!track || !prev || !next) return;

    // Beveiliging tegen dubbele init (bijv. dev-server hot-reload)
    if (carousel.dataset.carouselInitialized) return;
    carousel.dataset.carouselInitialized = 'true';

    const maxScroll = () => track.scrollWidth - track.clientWidth;

    const update = () => {
      carousel.classList.toggle('is-scrollable', maxScroll() > 1);
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= maxScroll() - 1;
    };

    const step = () => {
      const item = track.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const behavior: ScrollBehavior = motionEnabled ? 'smooth' : 'auto';
    const go = (direction: 1 | -1) => track.scrollBy({ left: direction * step(), behavior });

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    track.addEventListener('scroll', update, { passive: true });
    // Breedte van track of items verandert (resize, fonts, beelden): opnieuw bepalen
    new ResizeObserver(update).observe(track);
    update();

    // ─── Slepen met de muis ─────────────────────────────────────
    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let dragged = false;

    const finishSnap = () => {
      // Snap pas weer aan nadat de uitlijn-animatie klaar is, anders springt hij
      const release = () => track.classList.remove('is-dragging');
      track.addEventListener('scrollend', release, { once: true });
      // Vangnet: als er niets te scrollen viel, of de browser geen scrollend kent
      window.setTimeout(release, 600);
    };

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0 || !carousel.classList.contains('is-scrollable')) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      dragged = false;
    });

    track.addEventListener('pointermove', (event) => {
      if (pointerId !== event.pointerId) return;
      const dx = event.clientX - startX;
      if (!dragged) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return;
        dragged = true;
        track.classList.add('is-dragging');
        track.setPointerCapture(event.pointerId);
      }
      track.scrollLeft = startScroll - dx;
    });

    const endDrag = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      pointerId = null;
      if (!dragged) return;
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      // Uitlijnen op het dichtstbijzijnde item
      const target = Math.min(maxScroll(), Math.max(0, Math.round(track.scrollLeft / step()) * step()));
      track.scrollTo({ left: target, behavior });
      finishSnap();
    };

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

    // Na een sleepbeweging geen klik doorlaten (bijv. op links in kaarten)
    track.addEventListener(
      'click',
      (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
        dragged = false;
      },
      true,
    );

    // Voorkom dat de browser een afbeelding "vastpakt" bij het slepen
    track.addEventListener('dragstart', (event) => event.preventDefault());
  });
}
