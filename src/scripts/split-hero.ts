/**
 * Split-hero op de homepage ([data-split-half]): bij hover of focus (≥1280, muis) krijgt de
 * helft .is-hovered en speelt haar Vimeo-video vanaf het begin; bij verlaten pauzeert hij.
 * Het iframe krijgt pas een src bij de eerste hover, en nooit vóór window.load.
 * Fade-in zodra Vimeo 'play' meldt (CSS: .vimeo-bg.is-playing). Via postMessage, zonder
 * player.js. Uit bij ?static=1 en prefers-reduced-motion: de foto blijft staan.
 */
import { motionEnabled } from './env';

const VIMEO_ORIGIN = 'https://player.vimeo.com';

export function initSplitHero(): void {
  const halves = [...document.querySelectorAll<HTMLElement>('[data-split-half]')];
  if (!halves.length || !motionEnabled) return;

  const desktop = window.matchMedia('(min-width: 1280px) and (hover: hover)');
  let pageLoaded = document.readyState === 'complete';
  if (!pageLoaded) window.addEventListener('load', () => (pageLoaded = true), { once: true });

  const players = halves.map((half) => {
    const wrapper = half.querySelector<HTMLElement>('[data-play-on-hover]');
    const iframe = wrapper?.querySelector<HTMLIFrameElement>('iframe') ?? null;
    return { half, wrapper, iframe, ready: false, wanted: false };
  });

  const post = (iframe: HTMLIFrameElement | null, method: string, value?: unknown) =>
    iframe?.contentWindow?.postMessage(JSON.stringify(value === undefined ? { method } : { method, value }), VIMEO_ORIGIN);

  window.addEventListener('message', (event) => {
    if (event.origin !== VIMEO_ORIGIN || typeof event.data !== 'string') return;
    const player = players.find((p) => p.iframe?.contentWindow === event.source);
    if (!player) return;
    let data: { event?: string };
    try {
      data = JSON.parse(event.data);
    } catch {
      return;
    }
    if (data.event === 'ready') {
      player.ready = true;
      post(player.iframe, 'addEventListener', 'play');
      // Muis is al weg voordat de speler klaar was: niet laten doorspelen
      if (!player.wanted) post(player.iframe, 'pause');
    }
    if (data.event === 'play') player.wrapper?.classList.add('is-playing');
  });

  players.forEach((player) => {
    const enter = () => {
      if (!desktop.matches) return;
      player.half.classList.add('is-hovered');
      player.wanted = true;
      if (!player.iframe || !pageLoaded) return;
      if (!player.iframe.src && player.iframe.dataset.src) {
        player.iframe.src = player.iframe.dataset.src; // autoplay=1: start vanzelf
      } else if (player.ready) {
        post(player.iframe, 'setCurrentTime', 0);
        post(player.iframe, 'play');
      }
    };
    const leave = () => {
      player.half.classList.remove('is-hovered');
      player.wanted = false;
      if (player.ready) post(player.iframe, 'pause');
    };
    player.half.addEventListener('mouseenter', enter);
    player.half.addEventListener('focus', enter);
    player.half.addEventListener('mouseleave', leave);
    player.half.addEventListener('blur', leave);
  });
}
