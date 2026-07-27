/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL publique du site (canonical, Open Graph, sitemap). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
