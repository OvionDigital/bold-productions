/**
 * Vimeo-achtergrondvideo's ([data-vimeo-bg]).
 * - src pas zetten na window.load (Webflow: "Lazy load hero iframe").
 * - Op ≤767px alleen als data-load-on-mobile="true" (homepage).
 * - Fade-in zodra Vimeo 'play' meldt, via postMessage (zonder player.js).
 * - Niet laden bij ?static=1 of prefers-reduced-motion: de poster blijft staan.
 */
import { motionEnabled } from './env';

const VIMEO_ORIGIN = 'https://player.vimeo.com';

export function initHeroVideo(): void {
  const wrappers = [...document.querySelectorAll<HTMLElement>('[data-vimeo-bg]')];
  if (!wrappers.length || !motionEnabled) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const targets = wrappers.filter((el) => !isMobile || el.dataset.loadOnMobile === 'true');
  if (!targets.length) return;

  window.addEventListener('message', (event) => {
    if (event.origin !== VIMEO_ORIGIN || typeof event.data !== 'string') return;
    let data: { event?: string; player_id?: string };
    try {
      data = JSON.parse(event.data);
    } catch {
      return;
    }
    const wrapper = targets.find((el) => el.querySelector('iframe')?.contentWindow === event.source);
    if (!wrapper) return;
    const iframe = wrapper.querySelector('iframe');
    if (data.event === 'ready' && iframe?.contentWindow) {
      iframe.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'play' }), VIMEO_ORIGIN);
      iframe.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'playProgress' }), VIMEO_ORIGIN);
    }
    if ((data.event === 'play' || data.event === 'playProgress') && !wrapper.classList.contains('is-playing')) {
      wrapper.classList.add('is-playing');
      iframe?.contentWindow?.postMessage(
        JSON.stringify({ method: 'removeEventListener', value: 'playProgress' }),
        VIMEO_ORIGIN,
      );
    }
  });

  const load = () => {
    targets.forEach((wrapper) => {
      const iframe = wrapper.querySelector<HTMLIFrameElement>('iframe[data-src]');
      if (iframe?.dataset.src) iframe.src = iframe.dataset.src;
    });
  };

  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load, { once: true });
}
