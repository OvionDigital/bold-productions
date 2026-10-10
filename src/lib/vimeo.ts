/**
 * Vimeo-gegevens tijdens de build via oEmbed (geen API-sleutel nodig): thumbnail voor de
 * klik-om-af-te-spelen-gevel (VimeoEmbed) en titel/duur/uploaddatum voor VideoObject-
 * structured data. Per build één request per video (gecachet); faalt het, dan
 * `null` en toont de gevel een donker vlak met de afspeelknop.
 */
export interface VimeoMeta {
  title: string;
  description?: string;
  /** Thumbnail-URL zonder breedte; zie thumbnailAt() */
  thumbnail: string;
  width: number;
  height: number;
  /** Seconden */
  duration?: number;
  /** ISO 8601 */
  uploadDate?: string;
}

const cache = new Map<string, Promise<VimeoMeta | null>>();

export function getVimeoMeta(id: string, hash?: string): Promise<VimeoMeta | null> {
  const key = `${id}/${hash ?? ''}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      (async () => {
        try {
          const page = `https://vimeo.com/${id}${hash ? `/${hash}` : ''}`;
          const res = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(page)}&width=1280`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          return {
            title: data.title,
            description: data.description || undefined,
            thumbnail: data.thumbnail_url,
            width: data.width,
            height: data.height,
            duration: data.duration || undefined,
            uploadDate: data.upload_date ? new Date(`${data.upload_date.replace(' ', 'T')}Z`).toISOString() : undefined,
          } satisfies VimeoMeta;
        } catch (err) {
          console.warn(`[vimeo] Geen gegevens voor video ${id}: ${(err as Error).message}`);
          return null;
        }
      })(),
    );
  }
  return cache.get(key)!;
}

/** Thumbnail op een bepaalde breedte (Vimeo-CDN: …-d_{breedte}) */
export const thumbnailAt = (url: string, width: number) => url.replace(/-d_\d+(x\d+)?/, `-d_${width}`);

/** Duur als ISO 8601 (PT1M30S) voor VideoObject */
export function isoDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ''}${s}S`;
}
