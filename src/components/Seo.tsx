import React from 'react';
import { absoluteUrl, SITE_URL } from '../utils/siteUrl';

const SITE_NAME = 'Écologie Collective';

/**
 * Image Open Graph par défaut. À remplacer par un visuel hébergé en propre
 * (ex: /og-default.jpg dans public/) — un lien externe peut disparaître.
 */
const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop';

interface SeoProps {
  /** Titre de la page, sans le nom du site (ajouté automatiquement). */
  title: string;
  description: string;
  /** Chemin canonique. Pour les alias, passer le chemin canonique, pas l'URL courante. */
  canonicalPath: string;
  image?: string;
  /** `article` pour les pages éditoriales, `website` sinon. */
  type?: 'website' | 'article';
  /** Date ISO de dernière modification (pages `article`). */
  modifiedTime?: string;
  /** Empêche l'indexation (pages d'erreur). */
  noIndex?: boolean;
}

/**
 * Métadonnées de page. S'appuie sur le hoisting natif de React 19 : les
 * balises rendues ici sont remontées dans <head>, y compris au prérendu.
 */
export default function Seo({
  title,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  modifiedTime,
  noIndex = false,
}: SeoProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = absoluteUrl(canonicalPath);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export { SITE_NAME, SITE_URL };
