import { ACC_ARTICLES } from '../data/accArticles';
import { secteurs } from '../data/secteurs';
import { projects } from '../data/projects';

/**
 * Liste des URLs du site, dérivée des fichiers de données.
 * Source unique pour le prérendu ET le sitemap : ajouter un article, un
 * secteur ou un projet suffit à l'inclure dans les deux.
 */

/**
 * Le hub ACC est servi sous deux préfixes. `/autoconsommation-collective`
 * est l'URL canonique (mot-clé dans l'URL) ; `/comprendre-acc` est conservé
 * pour ne casser aucun lien existant et pointe vers la version canonique.
 */
export const ACC_CANONICAL_PREFIX = '/autoconsommation-collective';
export const ACC_LEGACY_PREFIX = '/comprendre-acc';

export interface SiteRoute {
  /** Chemin réellement servi et prérendu. */
  path: string;
  /** Chemin canonique. Diffère de `path` pour les alias hérités. */
  canonicalPath: string;
  /** Date de dernière modification (ISO), pour le sitemap. */
  lastmod?: string;
  /** Priorité indicative dans le sitemap. */
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

/** Convertit « 12 mars 2025 » ou « 2025-03-12 » en ISO court. */
function toISODate(value?: string): string | undefined {
  if (!value) return undefined;

  const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

  const MOIS: Record<string, string> = {
    janvier: '01', février: '02', fevrier: '02', mars: '03', avril: '04',
    mai: '05', juin: '06', juillet: '07', août: '08', aout: '08',
    septembre: '09', octobre: '10', novembre: '11', décembre: '12',
    decembre: '12',
  };
  const fr = value.toLowerCase().match(/(\d{1,2})\s+([a-zéûà]+)\s+(\d{4})/);
  if (fr && MOIS[fr[2]]) {
    return `${fr[3]}-${MOIS[fr[2]]}-${fr[1].padStart(2, '0')}`;
  }
  return undefined;
}

const STATIC_ROUTES: SiteRoute[] = [
  { path: '/', canonicalPath: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/a-propos', canonicalPath: '/a-propos', priority: 0.6, changefreq: 'monthly' },
  { path: '/secteurs', canonicalPath: '/secteurs', priority: 0.8, changefreq: 'monthly' },
  { path: '/nos-projets', canonicalPath: '/nos-projets', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', canonicalPath: '/contact', priority: 0.7, changefreq: 'yearly' },
];

export function getAllRoutes(): SiteRoute[] {
  const routes: SiteRoute[] = [...STATIC_ROUTES];

  // Hub ACC : version canonique + alias hérité.
  routes.push({
    path: ACC_CANONICAL_PREFIX,
    canonicalPath: ACC_CANONICAL_PREFIX,
    priority: 0.9,
    changefreq: 'weekly',
  });
  routes.push({
    path: ACC_LEGACY_PREFIX,
    canonicalPath: ACC_CANONICAL_PREFIX,
    priority: 0.9,
    changefreq: 'weekly',
  });

  // Articles ACC, sous les deux préfixes.
  for (const article of ACC_ARTICLES) {
    const canonicalPath = `${ACC_CANONICAL_PREFIX}/${article.slug}`;
    const lastmod = toISODate(article.lastUpdated);

    routes.push({ path: canonicalPath, canonicalPath, lastmod, priority: 0.8, changefreq: 'monthly' });
    routes.push({
      path: `${ACC_LEGACY_PREFIX}/${article.slug}`,
      canonicalPath,
      lastmod,
      priority: 0.8,
      changefreq: 'monthly',
    });
  }

  for (const secteur of secteurs) {
    const path = `/secteurs/${secteur.id}`;
    routes.push({ path, canonicalPath: path, priority: 0.7, changefreq: 'monthly' });
  }

  for (const project of projects) {
    const path = `/nos-projets/${project.id}`;
    routes.push({ path, canonicalPath: path, priority: 0.6, changefreq: 'monthly' });
  }

  return routes;
}

/** Routes à prérendre : toutes, alias compris. */
export function getPrerenderPaths(): string[] {
  return getAllRoutes().map(r => r.path);
}

/** Routes à publier dans le sitemap : URLs canoniques uniquement, dédoublonnées. */
export function getSitemapRoutes(): SiteRoute[] {
  const seen = new Set<string>();
  return getAllRoutes()
    .filter(r => r.path === r.canonicalPath)
    .filter(r => {
      if (seen.has(r.canonicalPath)) return false;
      seen.add(r.canonicalPath);
      return true;
    });
}
