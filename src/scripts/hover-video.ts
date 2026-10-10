/**
 * Video die bij hover afspeelt ([data-hover-video] > video[data-src], teamtegels).
 * De bron laadt pas bij de eerste hover; bij verlaten pauzeert hij (Webflow team-hover-video).
 * Alleen met een muis en als beweging aan staat.
 */
import { motionEnabled } from './env';

export function initHoverVideos(): void {
  const items = [...document.querySelectorAll<HTMLElement>('[data-hover-video]')];
  if (!items.length || !motionEnabled || !window.matchMedia('(hover: hover)').matches) return;

  items.forEach((item) => {
    const video = item.querySelector<HTMLVideoElement>('video[data-src]');
    if (!video) return;
    item.addEventListener('mouseenter', () => {
      if (!video.src && video.dataset.src) video.src = video.dataset.src;
      video.currentTime = 0;
      video.play().catch(() => {
        /* afspelen geweigerd: foto blijft staan */
      });
    });
    item.addEventListener('mouseleave', () => video.pause());
  });
}
