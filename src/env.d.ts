interface ImportMetaEnv {
  readonly PUBLIC_ENABLE_TRACKING?: string;
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
  /** 'true' in de preview-build (astro.preview.config.mjs), zie lib/preview.ts */
  readonly PUBLIC_SANITY_PREVIEW?: string;
  /** Studio-URL voor bewerk-links in de preview (standaard bold-productions.sanity.studio) */
  readonly PUBLIC_SANITY_STUDIO_URL?: string;
  /** Viewer-token: concepten ophalen in de preview-build */
  readonly SANITY_API_READ_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
