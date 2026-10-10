/**
 * Vimeo-gevel ([data-vimeo-facade], VimeoEmbed.astro): bij een klik de thumbnail vervangen
 * door de echte speler (autoplay) en de focus erop zetten. Pas dan laadt Vimeo zijn
 * JavaScript en eventuele cookies. Zonder JS opent de link de video op vimeo.com.
 */
export function initVimeoFacades(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-vimeo-facade]').forEach((facade) => {
    facade.addEventListener('click', (event) => {
      event.preventDefault();
      const iframe = document.createElement('iframe');
      iframe.src = facade.dataset.vimeoFacade!;
      iframe.title = facade.dataset.title ?? '';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.className = 'vimeo-embed__iframe';
      facade.replaceWith(iframe);
      iframe.focus();
    });
  });
}
