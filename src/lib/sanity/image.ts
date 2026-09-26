/**
 * Afbeeldingen uit Sanity blijven via astro:assets lopen (regel 7: alle beeld via
 * <Image>/<Picture> met AVIF/WebP + widths/sizes) — geen aparte Sanity-CDN-transforms.
 * We geven Astro's beeldpipeline de originele Sanity-URL + de echte breedte/hoogte/
 * bestandstype op (via GROQ met `imageProjection`); Astro doet zelf het downsizen,
 * cachen en omzetten naar AVIF/WebP, net als bij een lokale import. Vereist
 * `image: { domains: ['cdn.sanity.io'] }` in astro.config.mjs.
 */
import type { ImageMetadata } from 'astro';

/** In elke GROQ-query achter een image-veld te plakken, bijv. `heroImage${imageProjection}`. */
export const imageProjection = `{
  "src": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "format": asset->extension,
  alt
}`;

export interface SanityImageRef {
  src: string;
  width: number;
  height: number;
  format: string;
  alt: string;
}

/** Vult ImageMetadata zo in dat Picture/Image het als een normale (niet-lokale) afbeelding behandelen. */
export function toImageMetadata(img: SanityImageRef): ImageMetadata {
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    format: img.format as ImageMetadata['format'],
  };
}
