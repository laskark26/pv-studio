/**
 * URL publique du site, source unique pour les canonical, l'Open Graph,
 * le JSON-LD et le sitemap.
 *
 * Surchargeable via VITE_SITE_URL (fichier .env ou variable de build).
 * Le domaine de production sert de repli.
 */
const FALLBACK_SITE_URL = 'https://ecologiecollective.fr';

function readEnvSiteUrl(): string | undefined {
  // import.meta.env en contexte Vite, process.env pour les scripts Node (prérendu, sitemap).
  const fromVite =
    typeof import.meta !== 'undefined' ? import.meta.env?.VITE_SITE_URL : undefined;
  const fromNode =
    typeof process !== 'undefined' ? process.env?.VITE_SITE_URL : undefined;

  return fromVite || fromNode;
}

/** Sans slash final, pour permettre la concaténation `${SITE_URL}/chemin`. */
export const SITE_URL = (readEnvSiteUrl() || FALLBACK_SITE_URL).replace(/\/+$/, '');

/** Construit une URL absolue à partir d'un chemin applicatif. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
