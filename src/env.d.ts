interface ImportMetaEnv {
  readonly PUBLIC_ENABLE_TRACKING?: string;
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
