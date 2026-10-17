/**
 * B-outlines op de achtergrond ([data-draw-shape], PageBackground.astro): worden één keer
 * in hun geheel getekend zodra ze voor een deel in beeld zijn (niet mee met de scroll).
 * Eerst onzichtbaar maken (zonder transitie), bij in beeld de transitie aanzetten en de
 * lijn laten lopen. Ook bij prefers-reduced-motion (de lijn tekent zich, er verschuift niets);
 * bij ?static=1 blijven ze gewoon staan.
 */
import { fadeEnabled } from './env';

export function initDrawShapes(): void {
  const shapes = [...document.querySelectorAll<SVGSVGElement>('[data-draw-shape]')];
  if (!shapes.length || !fadeEnabled || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const shape = entry.target;
        observer.unobserve(shape);
        shape.classList.add('is-drawing');
        // Volgende frame: transitie staat, nu pas de lijn laten lopen
        requestAnimationFrame(() => requestAnimationFrame(() => shape.classList.remove('is-undrawn')));
      });
    },
    // Pas tekenen als de B een stuk boven de onderrand van het scherm uitkomt
    { rootMargin: '0px 0px -25% 0px' },
  );

  shapes.forEach((shape) => {
    // Ook een B die bij het laden al in beeld is (anker, terugknop) wordt getekend: de
    // observer meldt die meteen bij observe()
    shape.classList.add('is-undrawn');
    observer.observe(shape);
  });
}
