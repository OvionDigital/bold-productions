/**
 * Sanity-afbeeldingen lopen NIET via astro:assets: Astro's build-pipeline schrijft
 * verwerkte varianten van een externe URL naar een pad dat die URL naspiegelt
 * (dist/https:/cdn.sanity.io/…), en dat breekt op Windows (';' is geen geldig
 * teken in een pad). Zie CmsPicture.astro. In plaats daarvan gebruiken we Sanity's
 * eigen CDN-transforms (?w=&auto=format&q=), die AVIF/WebP serveren op basis van de
 * Accept-header van de browser — zelfde eindresultaat, geen build-time bewerking nodig.
 * Lokale afbeeldingen (src/assets) blijven gewoon via astro:assets lopen.
 */
import type { ImageMetadata } from 'astro';

/** In elke GROQ-query achter een image-veld te plakken, bijv. `heroImage${imageProjection}`. */
export const imageProjection = `{
  "src": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  alt
}`;

export interface SanityImageRef {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Wat CmsPicture/Hero als "afbeelding uit Sanity" herkennen (geen `format`, dat heeft alleen ImageMetadata). */
export interface RemoteImage {
  src: string;
  width: number;
  height: number;
}

export function toRemoteImage(img: SanityImageRef): RemoteImage {
  return { src: img.src, width: img.width, height: img.height };
}

export function isRemoteImage(src: ImageMetadata | RemoteImage): src is RemoteImage {
  return !('format' in src);
}

/** Sanity CDN-transform: schaalt (en croppt bij `height`), serveert het beste formaat voor de browser. */
export function sanityImageUrl(base: string, { width, height, quality = 80 }: { width: number; height?: number; quality?: number }): string {
  const url = new URL(base);
  url.searchParams.set('w', String(Math.round(width)));
  if (height) {
    url.searchParams.set('h', String(Math.round(height)));
    url.searchParams.set('fit', 'crop');
  }
  url.searchParams.set('auto', 'format');
  url.searchParams.set('q', String(quality));
  return url.toString();
}
