import { ACCArticle } from '../data/accArticles';

/**
 * Parses a French date string like "12 septembre 2026" into a ISO-8601 string "2026-09-12T08:00:00+02:00".
 */
export function parseFrenchDateToISO(dateStr: string): string {
  if (!dateStr) return new Date().toISOString();

  const monthMap: Record<string, string> = {
    janvier: '01',
    février: '02',
    fevrier: '02',
    mars: '03',
    avril: '04',
    mai: '05',
    juin: '06',
    juillet: '07',
    août: '08',
    aout: '08',
    septembre: '09',
    octobre: '10',
    novembre: '11',
    décembre: '12',
    decembre: '12',
  };

  const parts = dateStr.trim().toLowerCase().split(/\s+/);
  // Expected pattern: "12" "septembre" "2026"
  if (parts.length >= 3) {
    const day = parts[0].padStart(2, '0');
    const month = monthMap[parts[1]] || '01';
    const year = parts[2];
    if (!isNaN(Number(day)) && !isNaN(Number(year))) {
      return `${year}-${month}-${day}T08:00:00+02:00`;
    }
  }

  return new Date().toISOString();
}

/**
 * Generates the BreadcrumbList schema for an Article page.
 */
export function generateArticleBreadcrumbSchema(article: ACCArticle, baseUrl = 'https://ecologiecollective.fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': `${baseUrl}/`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Hub ACC',
        'item': `${baseUrl}/autoconsommation-collective`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.levelLabel,
        'item': `${baseUrl}/autoconsommation-collective?level=${article.level}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': article.h1,
        'item': `${baseUrl}/autoconsommation-collective/${article.slug}`
      }
    ]
  };
}

/**
 * Generates the Article schema for Schema.org.
 */
export function generateArticleSchema(article: ACCArticle, baseUrl = 'https://ecologiecollective.fr') {
  const publishedDate = '2026-01-15T08:00:00+01:00';
  const modifiedDate = parseFrenchDateToISO(article.lastUpdated);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}/autoconsommation-collective/${article.slug}`
    },
    'headline': article.h1,
    'description': article.summary,
    'datePublished': publishedDate,
    'dateModified': modifiedDate,
    'inLanguage': 'fr-FR',
    'author': {
      '@type': 'Organization',
      'name': 'Écologie Collective - Ingénierie ACC',
      'url': baseUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Écologie Collective',
      'url': baseUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo.png`
      }
    },
    'articleSection': article.categoryTag,
    'keywords': [
      article.categoryTag,
      'Autoconsommation Collective',
      'ACC',
      'Réseau Enedis',
      'Linky',
      'PMO',
      'Transition Énergétique'
    ]
  };
}

/**
 * Generates the FAQPage schema for an Article page.
 */
export function generateArticleFAQSchema(article: ACCArticle) {
  const questionsAndAnswers: { question: string; answer: string }[] = [];

  // Core question of the article
  if (article.question) {
    const cleanQ = article.question.replace(/[«»"]/g, '').trim();
    questionsAndAnswers.push({
      question: `Question clé ACC : ${cleanQ}`,
      answer: article.essentiel.join(' ')
    });
  }

  // Glossary terms
  if (article.glossaryTerms && article.glossaryTerms.length > 0) {
    article.glossaryTerms.forEach(term => {
      questionsAndAnswers.push({
        question: `Que signifie le terme "${term.term}" en Autoconsommation Collective ?`,
        answer: term.definition
      });
    });
  }

  // Content sections
  if (article.contentSections && article.contentSections.length > 0) {
    article.contentSections.forEach(sec => {
      questionsAndAnswers.push({
        question: sec.h2,
        answer: sec.body.length > 300 ? sec.body.substring(0, 300) + '...' : sec.body
      });
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questionsAndAnswers.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
}

/**
 * Generates the BreadcrumbList schema for the main Hub page.
 */
export function generateHubBreadcrumbSchema(selectedLevel?: number | 'all', baseUrl = 'https://ecologiecollective.fr') {
  const items = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Accueil',
      'item': `${baseUrl}/`
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Hub ACC',
      'item': `${baseUrl}/autoconsommation-collective`
    }
  ];

  if (selectedLevel && selectedLevel !== 'all') {
    items.push({
      '@type': 'ListItem',
      'position': 3,
      'name': `Niveau ${selectedLevel}`,
      'item': `${baseUrl}/autoconsommation-collective?level=${selectedLevel}`
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items
  };
}

/**
 * Generates the FAQPage schema for the main Hub page.
 */
export function generateHubFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': "Qu'est-ce que l'Autoconsommation Collective (ACC) ?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "L'Autoconsommation Collective (ACC) permet à plusieurs consommateurs et producteurs d'électricité situés dans un même périmètre d'échanger virtuellement de l'énergie solaire via le réseau public Enedis."
        }
      },
      {
        '@type': 'Question',
        'name': "Faut-il tirer des câbles privés entre les bâtiments pour l'ACC ?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "Non, aucun câble privé n'est nécessaire. L'ACC s'appuie à 100% sur le réseau public d'électricité Enedis et les compteurs communicants Linky."
        }
      },
      {
        '@type': 'Question',
        'name': "Qu'est-ce qu'une Personne Morale Organisatrice (PMO) en ACC ?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "La PMO est l'entité juridique (association, SAS, SCIC, copropriété) qui regroupe les membres de la boucle locale, conclut la convention avec Enedis et fixe les règles de répartition de l'énergie."
        }
      },
      {
        '@type': 'Question',
        'name': "Quelle est la distance maximale autorisée pour une opération d'ACC ?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': "Par défaut, la distance maximale est de 2 km à vol d'oiseau entre les participants extrêmes. Des dérogations ministérielles permettent d'étendre ce rayon à 10 km en zone périurbaine et jusqu'à 20 km en zone rurale."
        }
      }
    ]
  };
}
