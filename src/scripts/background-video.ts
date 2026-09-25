/**
 * Achtergrondvideo's ([data-bg-video] > video[data-src]).
 * Laadt de video pas als hij (bijna) in beeld komt en speelt alleen zolang hij
 * zichtbaar is. Bij ?static=1 en prefers-reduced-motion blijft de poster staan.
 */
import { motionEnabled } from './env';

export function initBackgroundVideos(): void {
  const videos = [...document.querySelectorAll<HTMLVideoElement>('[data-bg-video] video[data-src]')];
  if (!videos.length || !motionEnabled || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (!video.src && video.dataset.src) {
            video.src = video.dataset.src;
            video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
          }
          video.play().catch(() => {
            /* autoplay geweigerd: poster blijft staan */
          });
        } else if (!video.paused) {
          video.pause();
        }
      });
    },
    { rootMargin: '200px 0px' },
  );

  videos.forEach((video) => observer.observe(video));
}
