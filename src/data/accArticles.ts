export interface ACCArticle {
  slug: string;
  h1: string;
  level: 1 | 2 | 3 | 4;
  levelLabel: string;
  question: string;
  readTime: string;
  lastUpdated: string;
  prerequisites: { title: string; slug: string }[];
  essentiel: string[];
  summary: string;
  categoryTag: string;
  wave: 1 | 2 | 3 | 4;
  contentSections: {
    h2: string;
    body: string;
    regulatoryNote?: { title: string; content: string; decreeRef?: string };
    exampleBox?: { title: string; content: string };
    linkToMore?: { label: string; slug: string };
  }[];
  schemaDiagram?: {
    title: string;
    subtitle?: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      badge?: string;
    }[];
  };
  criteriaTable?: {
    title: string;
    headers: string[];
    rows: {
      criterion: string;
      optionA: string;
      optionB: string;
      recommendation: string;
    }[];
  };
  quantifiedExample?: {
    title: string;
    context: string;
    metrics: { label: string; value: string; detail?: string }[];
    breakdown: string;
  };
  stepByStepProcedure?: {
    title: string;
    steps: {
      stepNumber: number;
      title: string;
      desc: string;
      delay: string;
      requiredDocs: string[];
      responsibleParty: string;
    }[];
  };
  reproducibleModel?: {
    title: string;
    formulaOrMethod: string;
    variables: { name: string; unit: string; description: string; sampleValue: string }[];
    stepByStepCalculation: string[];
    outcome: string;
  };
  argumentedPosition?: {
    title: string;
    debate: string;
    ourPosition: string;
    keyArguments: string[];
    counterArgumentsAnswered: string;
  };
  glossaryTerms?: { term: string; definition: string }[];
  relatedLinks: { title: string; slug: string; level: number; relationType: 'montée' | 'rattrapage' | 'latéral' }[];
  hasCalculator?: 'tacc' | 'roi';
}

export const ACC_LEVELS = [
  {
    level: 1,
    title: "1 · Comprendre",
    question: "« C'est quoi, au juste ? »",
    target: "Le principe, le vocabulaire",
    role: "Volume de recherche & Socle",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    badgeColorDark: "bg-blue-500/20 text-blue-300 border-blue-500/40"
  },
  {
    level: 2,
    title: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    target: "Des critères de tri & de faisabilité",
    role: "Trafic qualifié & Pré-qualification",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    badgeColorDark: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
  },
  {
    level: 3,
    title: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    target: "Des procédures, PMO & contrats",
    role: "Intention haute & Projets fermes",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    badgeColorDark: "bg-amber-500/20 text-amber-300 border-amber-500/40"
  },
  {
    level: 4,
    title: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    target: "Des positions argumentées & Ingénierie",
    role: "Crédibilité & Décideurs techniques",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    badgeColorDark: "bg-purple-500/20 text-purple-300 border-purple-500/40"
  }
];

export const ACC_ARTICLES: ACCArticle[] = [
  // ==========================================
  // NIVEAU 1 : COMPRENDRE
  // ==========================================
  {
    slug: "acc-ou-autoconsommation-individuelle",
    h1: "ACC ou autoconsommation individuelle : quelle différence ?",
    level: 1,
    levelLabel: "1 · Comprendre",
    question: "« C'est quoi, au juste ? »",
    readTime: "7 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Comparatif",
    wave: 1,
    summary: "Découvrez les distinctions fondamentales entre consommer son énergie sur son propre compteur unique et la partager virtuellement entre plusieurs voisins sur le réseau public Enedis.",
    prerequisites: [],
    essentiel: [
      "L'autoconsommation individuelle est strictement confinée au périmètre électrique physique d'un unique compteur (PRM).",
      "L'Autoconsommation Collective (ACC) utilise le réseau public Enedis pour allouer virtuellement l'électricité entre plusieurs bâtiments distants.",
      "L'ACC supprime le besoin de câblage privé et évite le gaspillage du surplus solaire en le revendant localement à des voisins consommateurs."
    ],
    schemaDiagram: {
      title: "Flux d'électricité vs allocation virtuelle de données",
      subtitle: "Comment les compteurs Linky transforment la distribution locale sans aucun travail physique",
      steps: [
        {
          number: "01",
          title: "Centrale Productrice",
          desc: "Les panneaux solaires injectent l'électricité sur le réseau public d'électricité Enedis via le compteur Linky de la centrale.",
          badge: "Physique"
        },
        {
          number: "02",
          title: "Réseau Public Enedis",
          desc: "Les électrons empruntent la ligne réseau classique. Aucun câble privé n'est tiré entre les bâtiments.",
          badge: "Infrastructures"
        },
        {
          number: "03",
          title: "Partage Virtuel PMO",
          desc: "Toutes les 30 minutes, Enedis calcule la part exacte d'énergie affectée à chaque compteur voisin abonné à la boucle.",
          badge: "Virtuel / Données"
        }
      ]
    },
    contentSections: [
      {
        h2: "Périmètre physique vs partage virtuel par le réseau public",
        body: "Dans une installation photovoltaïque individuelle classique, les panneaux solaires sont raccordés directement sur le Tableau Général Basse Tension (TGBT) ou le tableau électrique d'un bâtiment unique. L'électricité produite est consommée en temps réel par les équipements électriques branchés derrière ce même compteur. Lorsque la production dépasse la consommation du site, le surplus est soit injecté sur le réseau national en revente totale ou en surplus à tarif réglementé, soit perdu par écrêtage si aucune solution de stockage n'est installée.\n\nEn revanche, l'Autoconsommation Collective (ACC) abolit cette frontière physique. La centrale photovoltaïque injecte 100% de son énergie sur le réseau public de distribution géré par Enedis. Grâce au maillage national des compteurs communicants Linky, l'énergie produite est affectée de façon virtuelle, par un algorithme informatique de répartition, à un ensemble de consommateurs membres du périmètre d'opération. La molécule d'électricité suit la physique du réseau, tandis que la valeur économique et environnementale du kWh est attribuée localement à des voisins abonnés à l'opération.",
        exampleBox: {
          title: "Exemple concret : Bâtiment tertiaire et commerce voisin",
          content: "Un bâtiment administratif de bureau produit 200 kWh un dimanche ensoleillé alors que ses bureaux sont fermés. En individuel, cette énergie serait vendue en totalité au réseau au tarif fixe de surplus (souvent inférieur à 0,08 €/kWh). En ACC, cette production est réattribuée automatiquement au supermarché voisin ouvert le dimanche, qui achète ce kWh local à 0,12 €/kWh au lieu de payer 0,22 €/kWh son fournisseur national. Le producteur gagne davantage, et le consommateur économise 45% sur son kWh !"
        }
      },
      {
        h2: "L'absence de câble privé : la puissance du réseau partagé",
        body: "Une idée reçue extrêmement répandue consiste à imaginer qu'une opération d'autoconsommation entre voisins nécessite la pose de tranchées, de fourreaux et de câbles électriques privés traversant les rues ou les parcelles. En France, la création de réseaux électriques privés traversant le domaine public est strictement interdite par la loi pour des raisons de sécurité et de monopole de distribution.\n\nL'Autoconsommation Collective contourne magistralement cette contrainte en s'appuyant à 100% sur le réseau public Enedis déjà existant. Aucune modification d'infrastructures physiques n'est requise. Les consommateurs conservent leurs abonnements existants auprès de leurs fournisseurs d'électricité habituels (EDF, TotalEnergies, Engie, etc.), tout en recevant chaque mois une ligne de déduction sur leur facture d'énergie correspondant aux kWh solaires attribués par la boucle locale.",
        regulatoryNote: {
          title: "Le détail réglementaire de l'ACC",
          content: "L'article L. 315-2 du Code de l'énergie définit l'opération d'autoconsommation collective comme un regroupement de producteurs et consommateurs liés au sein d'une Personne Morale Organisatrice (PMO), utilisant le réseau public de distribution sans restriction sur le niveau de tension (Basse Tension BT ou Haute Tension HTA).",
          decreeRef: "Code de l'énergie - Art. L. 315-2 à L. 315-8"
        }
      },
      {
        h2: "Pourquoi l'ACC surpasse l'autoconsommation individuelle en B2B ?",
        body: "Pour les entreprises et les collectivités, le profil de consommation individuel présente souvent une faiblesse structurelle : la déconnexion temporelle entre les pics de production photovoltaïque (juillet, août, week-ends, mi-journée) et les heures de présence des salariés ou des usagers. Une usine textile fermée en août ou un groupe scolaire vide pendant les vacances scolaires affiche un taux d'autoconsommation individuelle très médiocre (30% à 40%).\n\nEn réunissant plusieurs acteurs aux profils complémentaires (un supermarché ouvert 7j/7, un centre hospitalier, des résidences privées), la boucle d'ACC agrège ces courbes de charge pour créer un foisonnement naturel. Le taux d'autoconsommation globale de la centrale dépasse fréquemment 85% à 95%, garantissant une rentabilité financière maximale sans investissement dans de coûteuses batteries physiques."
      }
    ],
    glossaryTerms: [
      { term: "PRM", definition: "Point de Référence de Mesure (numéro unique à 14 chiffres identifiant chaque compteur Linky)." },
      { term: "TGBT", definition: "Tableau Général Basse Tension, le point central de distribution électrique d'un bâtiment." },
      { term: "Écrêtage", definition: "Bridage volontaire de la puissance de l'onduleur pour ne pas dépasser la capacité du réseau." }
    ],
    relatedLinks: [
      { title: "Qui peut participer à une opération d'ACC", slug: "qui-peut-participer", level: 1, relationType: "latéral" },
      { title: "Votre site est-il adapté ? Lire une courbe de charge", slug: "profil-de-consommation", level: 2, relationType: "montée" }
    ]
  },

  {
    slug: "qui-peut-participer",
    h1: "Qui peut participer à une opération d'ACC ?",
    level: 1,
    levelLabel: "1 · Comprendre",
    question: "« C'est quoi, au juste ? »",
    readTime: "5 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Éligibilité",
    wave: 2,
    summary: "Découvrez la diversité des acteurs éligibles à l'ACC : entreprises, collectivités, résidents en copropriété, hôpitaux et commerçants.",
    prerequisites: [
      { title: "ACC ou autoconsommation individuelle", slug: "acc-ou-autoconsommation-individuelle" }
    ],
    essentiel: [
      "Tous les profils raccordés au réseau Enedis (Basse Tension BT ou Haute Tension HTA) peuvent rejoindre une boucle ACC.",
      "Une opération peut associer des acteurs publics (mairies, écoles) et privés (entreprises, commerces, résidents).",
      "La seule obligation juridique est d'adhérer à la Personne Morale Organisatrice (PMO) de l'opération."
    ],
    contentSections: [
      {
        h2: "Mixité des profils : La clé d'un foisonnement réussi",
        body: "Contrairement aux idées reçues, une boucle ACC ne réunit pas uniquement des acteurs de même nature. Au contraire, la mixité des profils de consommation est un atout stratégique. Associer un hôpital (consommation continue 24/7), une école (consommation diurne en semaine) et des commerces crée une complémentarité idéale pour absorber la totalité de la production solaire.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "L'ordonnance n° 2021-237 du 3 mars 2021 a élargi l'ACC aux consommateurs raccordés au réseau HTA (Haute Tension), permettant d'intégrer des sites industriels d'envergure dans les boucles d'autoconsommation.",
          decreeRef: "Ordonnance n° 2021-237"
        }
      }
    ],
    relatedLinks: [
      { title: "La PMO : rôle, statut juridique et création", slug: "pmo", level: 3, relationType: "montée" },
      { title: "Le périmètre géographique des 2 km et 20 km", slug: "perimetre-geographique", level: 2, relationType: "latéral" }
    ]
  },

  {
    slug: "prix-du-kwh",
    h1: "Ce que paie un participant : comment se fixe le prix du kWh ?",
    level: 1,
    levelLabel: "1 · Comprendre",
    question: "« C'est quoi, au juste ? »",
    readTime: "5 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Économie",
    wave: 1,
    summary: "Comprendre la décomposition du prix du kWh en ACC : coût de l'énergie locale, TURPE dédié, taxes applicables et complément fournisseur.",
    prerequisites: [],
    essentiel: [
      "Le prix du kWh local est librement négocié au sein de la PMO (souvent garanti fixe sur 15 à 20 ans).",
      "Le participant conserve son contrat de fourniture classique pour l'électricité de complément (la nuit ou en hiver).",
      "La facture globale se compose de l'électricité locale + TURPE + complément du fournisseur classique."
    ],
    contentSections: [
      {
        h2: "La liberté contractuelle du prix local",
        body: "En ACC, l'électricité attribuée aux consommateurs n'est pas soumise aux fluctuations brutales des marchés de gros de l'électricité. La PMO fixe librement le tarif du kWh autoconsommé. Ce tarif est généralement calculé pour couvrir le coût complet de production de la centrale tout en offrant une ristourne de 15% à 30% par rapport au tarif réglementé.",
        exampleBox: {
          title: "Exemple de décomposition tarifaire",
          content: "Pour un kWh local facturé à 0,11 €/kWh par la PMO, s'ajoutent le TURPE ACC (env. 0,03 €/kWh) et la fiscalité applicable. Le coût total de 0,14 €/kWh reste nettement inférieur aux 0,22 €/kWh du fournisseur réseau."
        }
      }
    ],
    glossaryTerms: [
      { term: "TURPE", definition: "Tarif d'Utilisation des Réseaux Publics d'Électricité, prélevé par Enedis." }
    ],
    relatedLinks: [
      { title: "Rentabilité d'une opération : les paramètres qui décident", slug: "rentabilite", level: 2, relationType: "montée" },
      { title: "Accise, TVA, TURPE : la fiscalité de l'ACC", slug: "fiscalite", level: 3, relationType: "montée" }
    ]
  },

  {
    slug: "toiture-ou-ombriere",
    h1: "Toiture ou ombrière de parking : choisir le support",
    level: 1,
    levelLabel: "1 · Comprendre",
    question: "« C me convient-il ? »",
    readTime: "5 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Technique",
    wave: 3,
    summary: "Comparatif des supports d'installations photovoltaïques : toiture bâtiment vs ombrières de parking selon la loi APER et les ratios coût/kWc.",
    prerequisites: [],
    essentiel: [
      "La toiture offre le meilleur coût au kWc récurant mais exige une vérification d'étanchéité et de surcharge charpente.",
      "L'ombrière de parking permet de valoriser les surfaces d'impulsion et de se mettre en conformité avec la Loi APER.",
      "Le choix impacte les coûts de structure, de raccordement et la puissance crête installable."
    ],
    contentSections: [
      {
        h2: "Arbitrage toiture vs ombrière de parking",
        body: "Équiper une toiture existante présente généralement l'avantage d'une structure porteuse déjà construite, limitant les coûts d'infrastructure à environ 800 € à 1 100 € par kWc. À l'inverse, l'ombrière de parking exige des fondations béton et des structures métalliques en hauteur (1 300 € à 1 800 € / kWc), mais répond aux obligations légales de solarisation des parkings de plus de 1 500 m².",
        regulatoryNote: {
          title: "Le détail réglementaire - Loi APER",
          content: "L'article 40 de la loi n° 2023-175 du 10 mars 2023 (loi APER) impose l'équipement en ombrières photovoltaïques sur au moins 50% de la surface des parcs de stationnement extérieurs de plus de 1 500 m².",
          decreeRef: "Loi APER - Art. 40"
        }
      }
    ],
    relatedLinks: [
      { title: "Structures de fixation : Lestage, ancrage, Eurocode", slug: "structures-fixation", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "cadre-legal",
    h1: "Le cadre légal de l'ACC : ce que dit la loi",
    level: 1,
    levelLabel: "1 · Comprendre",
    question: "« C'est quoi, au juste ? »",
    readTime: "6 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Législation",
    wave: 2,
    summary: "Synthèse de l'évolution du cadre réglementaire de l'ACC en France, de la Loi PACTE à la loi APER et aux décrets récents.",
    prerequisites: [],
    essentiel: [
      "L'ACC est inscrite au Code de l'Énergie depuis la loi Loi Brottes et élargie par la Loi PACTE.",
      "La PMO est l'unique entité juridique légalement reconnue par Enedis pour signer la convention d'ACC.",
      "Le cadre évolue continuellement pour simplifier la répartition ex-ante et réduire les formalités administratives."
    ],
    contentSections: [
      {
        h2: "L'historique réglementaire et l'ancrage au Code de l'Énergie",
        body: "La France dispose de l'un des cadres légaux les plus structurés d'Europe pour le partage d'énergie. L'article L. 315-2 du Code de l'Énergie autorise formellement l'injection et la soutraction simultanées d'énergie au sein d'une même communauté de consommateurs et producteurs.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "L'arrêté du 21 novembre 2019 fixe les conditions de raccordement et de mesurage pour les opérations d'autoconsommation collective.",
          decreeRef: "Arrêté du 21 novembre 2019"
        }
      }
    ],
    relatedLinks: [
      { title: "Cadre réglementaire & Code de l'Énergie", slug: "cadre-legal", level: 1, relationType: "latéral" },
      { title: "Périmètre : 2 km, 10 km, 20 km et dérogations", slug: "perimetre-geographique", level: 2, relationType: "montée" }
    ]
  },

  // ==========================================
  // NIVEAU 2 : ÉVALUER
  // ==========================================
  {
    slug: "profil-de-consommation",
    h1: "Votre site est-il adapté ? Lire une courbe de charge",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "7 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Faisabilité",
    wave: 3,
    summary: "Apprenez à analyser une courbe de charge Enedis au pas de 30 minutes pour mesurer l'adéquation entre production solaire et talons de consommation.",
    prerequisites: [
      { title: "ACC ou autoconsommation individuelle", slug: "acc-ou-autoconsommation-individuelle" }
    ],
    essentiel: [
      "La courbe de charge au pas 30 minutes (mesurée par Linky) est le document fondamental de toute étude solaire.",
      "Un site adapté présente un talon de consommation diurne élevé entre 9h et 18h.",
      "Le taux de couverture solaire (TACC) dépend directement du profil temporel de l'activité."
    ],
    contentSections: [
      {
        h2: "Extraction des données Enedis (SGE / Portail)",
        body: "Pour évaluer un projet, la première étape consiste à télécharger les fichiers de points de mesure de courbe de charge (fichiers .csv Enedis) sur 12 mois glissants. La superposition de ces profils horaire avec la simulation de production PVSyst permet de modéliser au kWh près les flux d'autoconsommation et de surplus.",
        exampleBox: {
          title: "Exemple de profil idéal : Clinique / EHPAD",
          content: "Un établissement de santé consomme en continu (climatisation, traitement d'air, blanchisserie, cuisines). Sa courbe de charge s'accorde à plus de 92% avec la cloche de production photovoltaïque."
        }
      }
    ],
    relatedLinks: [
      { title: "Dimensionner une centrale selon la consommation réelle", slug: "dimensionnement", level: 2, relationType: "latéral" },
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "perimetre-geographique",
    h1: "Périmètre : 2 km, 10 km, 20 km et dérogations",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Règles",
    wave: 2,
    summary: "Règles d'éloignement géographique en Autoconsommation Collective : la règle canonique des 2 km et les dérogations ministérielles jusqu'à 20 km en zones rurale et périurbaine.",
    prerequisites: [
      { title: "Le cadre légal de l'ACC", slug: "cadre-legal" }
    ],
    essentiel: [
      "Par défaut, la distance maximale à vol d'oiseau entre les deux participants les plus éloignés de la boucle est de 2 km.",
      "Une dérogation ministérielle permet d'étendre le rayon à 10 km (zones périurbaines) ou 20 km (zones rurales à faible densité).",
      "Le calcul s'effectue strictement entre les compteurs Linky/PDS extrêmes de l'opération d'ACC."
    ],
    criteriaTable: {
      title: "Matrice d'éligibilité selon le rayon géographique",
      headers: ["Périmètre d'opération", "Rayon maximal", "Conditions administratives", "Recommandation d'usage"],
      rows: [
        {
          criterion: "Standard (Urbain / ZAE dense)",
          optionA: "2 km à vol d'oiseau",
          optionB: "Aucune dérogation requise",
          recommendation: "Idéal pour une ZAE ou un centre-ville. Validation automatique Enedis sous 15 jours."
        },
        {
          criterion: "Dérogation Périurbaine",
          optionA: "10 km à vol d'oiseau",
          optionB: "Accord ministériel DGEC / Ministère Énergie",
          recommendation: "Zone commerciale dispersée, intercommunalité intermédiaire. Prévoir 2 à 3 mois de délai d'instruction."
        },
        {
          criterion: "Dérogation Rurale",
          optionA: "20 km à vol d'oiseau",
          optionB: "Zone à faible densité (INSEE rural)",
          recommendation: "Pôle agricole, EPCI rural. Permet d'associer des fermes solaires isolées à des bourgs centres."
        }
      ]
    },
    quantifiedExample: {
      title: "Étude de cas réelle : Zone d'Activité de Saint-Léonard (3.8 km)",
      context: "Une coopérative d'entreprises souhaite lier une ombrières de parking photovoltaïque de 300 kWc située au Nord de la zone avec 4 usines partenaires situées jusqu'à 3 800 mètres au Sud.",
      metrics: [
        { label: "Distance mesurée", value: "3,8 km", detail: "Entre les 2 PRM extrêmes" },
        { label: "Régime juridique", value: "Ext. 10 km", detail: "Dérogation périurbaine" },
        { label: "Densité INSEE", value: "312 hab/km²", detail: "Conforme seuil DGEC" },
        { label: "Délai validation", value: "45 jours", detail: "Arrêté préfectoral accordé" }
      ],
      breakdown: "1. Géolocalisation des 5 compteurs Linky (PRM) via leurs coordonnées GPS Lambert-93.\n2. Calcul de la distance euclidienne maximale entre le PRM Producteur N°1 et le PRM Consommateur N°4 : d = 3 812 mètres.\n3. Dépôt de la demande de dérogation 10 km sur le portail Enedis avec la carte IGN au 1/25000ème.\n4. Avis favorable transmis par la DGEC sous 6 semaines sans aucune surtaxe de réseau !"
    },
    contentSections: [
      {
        h2: "Calcul exact de la distance et critères d'extension",
        body: "En Autoconsommation Collective, la règle de base inscrite au Code de l'énergie impose une contrainte de proximité géographique : la distance séparant les deux participants les plus éloignés de l'opération ne doit pas dépasser 2 kilomètres. Cette distance est mesurée à vol d'oiseau (distance orthodromique) entre les points de livraison électriques (PRM) enregistrés dans la base de données Enedis.\n\nAfin de tenir compte des réalités de l'aménagement du territoire et de permettre le maillage énergétique des zones industrielles vastes ou des intercommunalités rurales, le législateur a prévu deux paliers de dérogation : le palier 10 km pour les zones périurbaines et le palier 20 km pour les territoires ruraux à faible densité de population.",
        regulatoryNote: {
          title: "Le détail réglementaire - Arrêté du 14 octobre 2020",
          content: "L'arrêté du 14 octobre 2020 modifié définit la grille de densité de la commune selon la typologie INSEE (communes peu denses ou très peu denses) permettant l'obtention de plein droit de l'extension du périmètre jusqu'à 20 km.",
          decreeRef: "Arrêté du 14 oct 2020 - NOR: TRER2025345A"
        }
      },
      {
        h2: "La procédure pas à pas de demande de dérogation",
        body: "Pour bénéficier d'un périmètre étendu à 10 km ou 20 km, la Personne Morale Organisatrice (PMO) doit constituer un dossier de demande de dérogation. Ce dossier comporte la liste nominative des numéros PRM concernés, leurs coordonnées GPS exactes, la carte synthétique du périmètre, ainsi qu'une attestation sur l'honneur certifiant le respect de la grille de densité commune.\n\nUne fois soumis sur la plateforme Enedis, le dossier est transmis au Ministère de la Transition Énergétique (DGEC). En l'absence de réponse négative sous un délai de deux mois à compter de la réception du dossier complet, la dérogation est implicitement accordée pour une durée de 20 ans."
      }
    ],
    relatedLinks: [
      { title: "La PMO : rôle, statut juridique et création", slug: "pmo", level: 3, relationType: "montée" },
      { title: "Plafonds de puissance : 5 MW, 10 MW pour les collectivités", slug: "puissance-maximale", level: 2, relationType: "latéral" }
    ]
  },

  {
    slug: "puissance-maximale",
    h1: "Plafonds de puissance : 5 MW, 10 MW pour les collectivités",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "5 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Dimensions",
    wave: 4,
    summary: "Plafonds cumulés de puissance installée en ACC et spécificités pour le secteur public.",
    prerequisites: [
      { title: "Périmètre géographique", slug: "perimetre-geographique" }
    ],
    essentiel: [
      "La puissance cumulée des installations de production d'une opération d'ACC est plafonnée à 5 MW (ou 10 MW sous critères).",
      "Les collectivités territoriales bénéficient de règles ajustées pour mailler leurs bâtiments publics.",
      "Au-delà de 5 MW, un découpage en plusieurs boucles géographiques ou PMO distinctes est nécessaire."
    ],
    contentSections: [
      {
        h2: "Seuils légaux de puissance par opération",
        body: "La loi limite la taille d'une boucle d'ACC pour préserver l'objectif d'énergie ultra-locale. Une opération peut comporter plusieurs centrales distinctes (ex: 10 toitures de 300 kWc), tant que la somme des puissances créte ne dépasse pas le plafond réglementaire.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Article D. 315-10 du Code de l'énergie fixant le plafond de puissance cumulée de l'opération d'ACC.",
          decreeRef: "Code de l'énergie - Art. D. 315-10"
        }
      }
    ],
    relatedLinks: [
      { title: "ACC multi-producteurs en ZAE", slug: "acc-multi-producteurs", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "dimensionnement",
    h1: "Dimensionner une centrale selon la consommation réelle",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Ingénierie",
    wave: 3,
    summary: "Méthodologie pour définir la puissance crête idéale afin d'optimiser le taux d'autoconsommation et éviter le bradage du surplus.",
    prerequisites: [
      { title: "Votre site est-il adapté ? Lire une courbe de charge", slug: "profil-de-consommation" }
    ],
    essentiel: [
      "Ne pas surdimensionner la centrale par rapport au talon de consommation estival des consommateurs de la boucle.",
      "Viser un Taux d'Autoconsommation (TAC) supérieur à 85% pour garantir l'équilibre financier de l'opération.",
      "Prendre en compte les variations saisonnières et la fermeture estivale des entreprises ou écoles."
    ],
    contentSections: [
      {
        h2: "L'équation du surdimensionnement",
        body: "Raccorder une centrale trop puissante génère un excédent estival qui doit être vendu sur le réseau au tarif d'achat de surplus (souvent très bas ou pénalisé par le tarif S21). L'ingénieur doit calculer le point d'équilibre financier optimal.",
        exampleBox: {
          title: "Cas d'étude : Hangar logistique de 500 kWc",
          content: "En réduisant la puissance à 380 kWc, le taux d'autoconsommation passe de 68% à 94%, augmentant le TRI global de l'opération de 2,4 points."
        }
      }
    ],
    relatedLinks: [
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation", level: 4, relationType: "montée" },
      { title: "Tarif S21 : pourquoi le modèle du surplus est mort", slug: "tarif-s21-surplus", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "rentabilite",
    h1: "Rentabilité d'une opération : les paramètres qui décident",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Finance",
    wave: 1,
    summary: "Analyse des facteurs financiers déterminants : CAPEX d'installation, OPEX d'exploitation, tarif du kWh local et économies sur le TURPE.",
    prerequisites: [
      { title: "Ce que paie un participant", slug: "prix-du-kwh" }
    ],
    essentiel: [
      "Le TRI (Taux de Rendement Interne) moyen d'un projet ACC se situe entre 7% et 12% selon les profils.",
      "Les leviers majeurs sont le taux d'autoconsommation, l'écart avec le tarif réseau et l'optimisation des frais de structure PMO.",
      "En tiers-investissement (0€ CAPEX), l'hôte bénéficie d'une économie immédiate sans apport de capital."
    ],
    contentSections: [
      {
        h2: "Les 4 piliers du modèle économique ACC",
        body: "La rentabilité d'une boucle s'appuie sur le différentiel entre le coût complet de production du kWh solaire local et le prix TTC évité sur le réseau. Plus le tarif du réseau classique est élevé, plus l'économie générée par la centrale locale est importante.",
        exampleBox: {
          title: "Sensibilité au coût du kWh réseau",
          content: "Pour une entreprise payant son électricité réseau à 0,21 €/kWh, acheter l'électricité de la centrale locale à 0,12 €/kWh génère une économie nette de 90 € par MWh consommé."
        }
      }
    ],
    relatedLinks: [
      { title: "Tiers-investissement, PPA ou achat : le comparatif", slug: "comparatif-financement", level: 2, relationType: "latéral" }
    ]
  },

  {
    slug: "comparatif-financement",
    h1: "Tiers-investissement, PPA ou achat : le comparatif",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "7 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Modèles",
    wave: 1,
    summary: "Tableau comparatif exhaustif entre l'investissement en fonds propres (EPC), le contrat de PPA On-Site et le tiers-investissement sans CAPEX.",
    prerequisites: [
      { title: "Rentabilité d'une opération", slug: "rentabilite" }
    ],
    essentiel: [
      "Achat direct (EPC) : Maximise le gain financier à long terme mais nécessite d'immobiliser du capital (CAPEX).",
      "Tiers-investissement / PPA : L'opérateur finance 100% du matériel et de la maintenance ; vous achetez uniquement le kWh produit à tarif bonifié.",
      "Choix stratégique dépend de la trésorerie disponible et des compétences d'exploitation internes."
    ],
    contentSections: [
      {
        h2: "Matrice de décision stratégique",
        body: "Pour les établissements de santé ou foncières privées souhaitant préserver leur capacité d'endettement pour leur cœur de métier, le tiers-investissement s'impose comme la solution de référence. Pour une collectivité disposant de subventions d'équipement, la maîtrise d'ouvrage directe peut être privilégiée.",
        exampleBox: {
          title: "Comparatif en un coup d'œil",
          content: "• EPC (Fonds propres) : TRI de 10-14%, Gestion de la maintenance à votre charge.\n• Tiers-investissement : 0€ à investir, Garantie de performance assurée par l'opérateur pendant 20 ans."
        }
      }
    ],
    relatedLinks: [
      { title: "Le tiers-investissement : montage et contrats", slug: "tiers-investissement", level: 3, relationType: "montée" },
      { title: "Le PPA on-site : durée, indexation, clauses", slug: "ppa-on-site", level: 3, relationType: "montée" }
    ]
  },

  {
    slug: "raccordement-enedis",
    h1: "Raccordement Enedis : procédure, délais, coûts",
    level: 2,
    levelLabel: "2 · Évaluer",
    question: "« Est-ce que ça marche chez moi ? »",
    readTime: "7 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Raccordement",
    wave: 3,
    summary: "Guide pratique des étapes de raccordement d'une centrale photovoltaïque en ACC auprès d'Enedis.",
    prerequisites: [
      { title: "Le cadre légal de l'ACC", slug: "cadre-legal" }
    ],
    essentiel: [
      "Les délais de raccordement Enedis varient de 3 à 9 mois selon qu'une extension de réseau est requise.",
      "Demander une étude de cadrage (PDR) le plus tôt possible pour anticiper les coûts de travaux Enedis.",
      "La mise en service de la centrale conditionne le démarrage effectif du comptage d'ACC."
    ],
    contentSections: [
      {
        h2: "Le parcours d'une demande de raccordement (S3REnR)",
        body: "Le dossier de raccordement doit être constitué sur le portail Enedis Mon Espace Raccordement. Il exige le récépissé de déclaration préalable ou permis de construire, le plan de masse et les caractéristiques techniques des onduleurs certifiés.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Les révisions des Schémas Régionaux de Raccordement au Réseau des Énergies Renouvelables (S3REnR) fixent les quotes-parts financières dues à Enedis pour le renforcement des postes sources.",
          decreeRef: "S3REnR & Code de l'énergie Art. L. 321-15"
        }
      }
    ],
    relatedLinks: [
      { title: "La convention d'autoconsommation collective", slug: "convention-enedis", level: 3, relationType: "montée" }
    ]
  },

  // ==========================================
  // NIVEAU 3 : STRUCTURER
  // ==========================================
  {
    slug: "pmo",
    h1: "La PMO : rôle, statut juridique, statuts types et création",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "12 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Procédure",
    wave: 2,
    summary: "Guide juridique et administratif pas à pas pour choisir, rédiger et immatriculer la Personne Morale Organisatrice (PMO), entité légale obligatoire de toute opération d'Autoconsommation Collective.",
    prerequisites: [
      { title: "Qui peut participer à une opération d'ACC", slug: "qui-peut-participer" },
      { title: "Le cadre légal de l'ACC", slug: "cadre-legal" }
    ],
    essentiel: [
      "La PMO est l'interlocuteur juridique unique d'Enedis : elle transmet la convention d'ACC et valide les clés de répartition.",
      "Trois formes juridiques majeures dominent : l'Association Loi 1901 (simplicité), la SAS (rigueur B2B), et la SCIC (gouvernance publique/privée).",
      "Le délai moyen d'immatriculation d'une PMO est de 15 à 30 jours, indispensable avant le dépôt de la convention Enedis."
    ],
    stepByStepProcedure: {
      title: "Procédure étape par étape : De l'idée à la PMO opérationnelle",
      steps: [
        {
          stepNumber: 1,
          title: "Choix de la forme juridique adaptée à la boucle",
          desc: "Arbitrage entre Association (loi 1901) pour les projets d'entreprises/copropriétés sans but lucratif direct, SAS pour les opérations à fort enjeu commercial entre industriels, ou SCIC pour les projets portés par une collectivité.",
          delay: "J-90 (1 à 2 semaines)",
          requiredDocs: ["Grille d'arbitrage gouvernance", "Accord de principe des membres fondateurs"],
          responsibleParty: "Conseil juridique / Chef de projet Écologie Collective"
        },
        {
          stepNumber: 2,
          title: "Rédaction des statuts de la PMO et règlement intérieur",
          desc: "Intégration obligatoire des clauses d'entrée et de sortie des membres abonnés (durée de préavis de 2 mois), de la désignation du représentant légal habilité à signer avec Enedis, et des règles de facturation interne du kWh.",
          delay: "J-75 (2 semaines)",
          requiredDocs: ["Statuts types PMO spécialisée ACC", "Règlement intérieur de répartition"],
          responsibleParty: "Avocat droit de l'énergie / Notaire"
        },
        {
          stepNumber: 3,
          title: "Immatriculation officielle et obtention du numéro SIRET",
          desc: "Dépôt du dossier au greffe du tribunal de commerce (SAS/SCIC) ou préfecture (Association). Obtention du numéro SIRET à 14 chiffres, indispensable pour ouvrir le compte bancaire de la PMO et s'enregistrer auprès d'Enedis.",
          delay: "J-60 (10 à 15 jours)",
          requiredDocs: ["Procès-verbal de l'Assemblée Générale Constitutive", "Attestation de dépôt des fonds / Journal d'annonces légales"],
          responsibleParty: "Greffe / Préfecture / Dirigeant nommé"
        },
        {
          stepNumber: 4,
          title: "Création du compte utilisateur sur le Portail Enedis ACC",
          desc: "Espace client professionnel dédié. Renseignement de la fiche PMO, téléversement de l'extrait Kbis / RNE ou récépissé préfectoral, et saisie des numéros PRM (Linky) des producteurs et consommateurs.",
          delay: "J-45 (3 à 5 jours)",
          requiredDocs: ["Extrait Kbis de moins de 3 mois", "RIB de la PMO", "Liste des numéros PRM Linky"],
          responsibleParty: "Représentant légal PMO / Tiers-investisseur Écologie Collective"
        },
        {
          stepNumber: 5,
          title: "Signature du contrat d'allouement et mandat Enedis",
          desc: "Chaque consommateur membre signe une convention d'adhésion autorisant la PMO à transmettre ses données de consommation demi-horaire à Enedis et à opérer la répartition virtuelle.",
          delay: "J-30 (15 jours)",
          requiredDocs: ["Mandat individuel de collecte des données PRM", "Convention d'adhésion PMO-Membres"],
          responsibleParty: "Tous les participants à la boucle ACC"
        }
      ]
    },
    contentSections: [
      {
        h2: "Le statut juridique de la PMO : comparaison approfondie",
        body: "La loi française exige la désignation d'une Personne Morale Organisatrice (PMO) pour toute opération d'autoconsommation collective (Article L. 315-2 du Code de l'énergie). La PMO possède la personnalité juridique et agit comme mandataire unique du regroupement auprès d'Enedis. Elle n'est pas obligatoirement le propriétaire physique des panneaux photovoltaïques : elle peut mandater un tiers-investisseur (tel qu'Écologie Collective) pour financer et exploiter les équipements.\n\nLe choix de la structure juridique est stratégique pour la pérennité de l'opération :",
        regulatoryNote: {
          title: "Avis de la Commission de Régulation de l'Énergie (CRE)",
          content: "Code de l'énergie - Article L. 315-2. La PMO est habilitée à signer la convention d'ACC, à transmettre à Enedis la méthode de calcul des coefficients de répartition et à percevoir le cas échéant les redevances de gestion.",
          decreeRef: "Code de l'énergie - Art. L. 315-2 à L. 315-8"
        }
      },
      {
        h2: "Les pièges juridiques à éviter dans les statuts",
        body: "Lors de la rédaction des statuts, une erreur classique consiste à verrouiller l'entrée de nouveaux consommateurs par un processus d'Assemblée Générale extraordinaire trop lourd. Une opération d'ACC vit sur 20 à 30 ans : des locataires d'un bâtiment tertiaire déménagent, des commerces changent de propriétaires. Les statuts doivent obligatoirement prévoir un mécanisme de prévenance souple (délai de préavis de 60 jours) et donner mandat au bureau de la PMO pour signer les avenants de mise à jour du périmètre auprès d'Enedis sans convoquer d'AG statutaire."
      }
    ],
    glossaryTerms: [
      { term: "PMO", definition: "Personne Morale Organisatrice, l'entité légale portant l'accord collectif auprès du gestionnaire Enedis." },
      { term: "SCIC", definition: "Société Coopérative d'Intérêt Collectif, alliance juridique entre acteurs publics, entreprises et usagers." },
      { term: "PRM", definition: "Point de Référence de Mesure (identifiant à 14 chiffres du compteur Linky)." }
    ],
    relatedLinks: [
      { title: "La convention d'autoconsommation collective", slug: "convention-enedis", level: 3, relationType: "latéral" },
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition", level: 3, relationType: "latéral" }
    ]
  },

  {
    slug: "convention-enedis",
    h1: "La convention d'autoconsommation collective",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Contrats",
    wave: 2,
    summary: "Analyse détaillée des clauses de la Convention d'Autoconsommation Collective conclue entre la PMO et Enedis.",
    prerequisites: [
      { title: "La PMO : rôle, statut juridique et création", slug: "pmo" }
    ],
    essentiel: [
      "La convention d'ACC fixe la liste des points de livraison (PRM) producteurs et consommateurs rattachés.",
      "Elle définit la méthode de calcul et la périodicité de transmission des coefficients de répartition.",
      "Toute modification du périmètre (ajout/retrait d'un membre) nécessite un avenant à la convention."
    ],
    contentSections: [
      {
        h2: "Structure de la convention-cadre Enedis",
        body: "La signature de la convention d'ACC formalise le rôle d'Enedis en tant que gestionnaire des données de comptage. Enedis s'engage à calculer les volumes d'électricité autoconsommée à chaque pas de temps de 30 minutes et à les transmettre aux fournisseurs pour régularisation sur les factures.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "La trame type de la convention d'ACC est approuvée par la Commission de Régulation de l'Énergie (CRE) et s'impose à tous les gestionnaires de réseau de distribution.",
          decreeRef: "Délibération de la CRE du 17 décembre 2020"
        }
      }
    ],
    relatedLinks: [
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition", level: 3, relationType: "latéral" },
      { title: "Coefficients ex-ante : ce que change le décret 2026-561", slug: "coefficients-ex-ante", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "cles-de-repartition",
    h1: "Les clés de répartition : statique, dynamique, par défaut",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Algorithmes",
    wave: 2,
    summary: "Mécanismes et algorithmes de répartition de l'électricité produite au sein d'une boucle d'ACC.",
    prerequisites: [
      { title: "La PMO : rôle, statut juridique et création", slug: "pmo" }
    ],
    essentiel: [
      "Clé statique : Pourcentage fixe attribué à chaque consommateur (ex: 40% pour le consommateur A, 60% pour le B).",
      "Clé dynamique : Répartition en temps réel au prorata des consommations réelles sur le pas 30 minutes.",
      "Le choix de l'algorithme a un impact déterminant sur le Taux d'Autoconsommation (TACC) de la centrale."
    ],
    contentSections: [
      {
        h2: "Comparatif des algorithmes de répartition Enedis",
        body: "En clé statique, si le consommateur A n'est pas présent un mardi après-midi, les 40% d'électricité qui lui sont alloués sont perdus pour la boucle et partent en surplus. En clé dynamique, les surplus sont automatiquement redistribués aux membres actifs à la même demi-heure.",
        exampleBox: {
          title: "Optimisation du taux d'autoconsommation",
          content: "L'adoption d'une clé dynamique par rapport à une clé statique permet d'augmenter le taux d'autoconsommation collectif de 15% à 25% sans aucun investissement matériel supplémentaire."
        }
      }
    ],
    relatedLinks: [
      { title: "Coefficients ex-ante : ce que change le décret 2026-561", slug: "coefficients-ex-ante", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "comptage-linky",
    h1: "Le comptage au pas 30 minutes",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "6 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Technique",
    wave: 3,
    summary: "Rôle central du compteur intelligent Linky dans l'enregistrement et la réconciliation des flux d'énergie en ACC.",
    prerequisites: [
      { title: "ACC ou autoconsommation individuelle", slug: "acc-ou-autoconsommation-individuelle" }
    ],
    essentiel: [
      "Le compteur Linky mesure automatiquement les index d'injection et de soutirage toutes les 30 minutes.",
      "Aucun compteur sous-divisionnaire privé n'est requis : Enedis certifie les mesures de manière centralisée.",
      "L'activation de la collecte de la courbe de charge est une démarche préalable obligatoire pour chaque participant."
    ],
    contentSections: [
      {
        h2: "Le pas de temps de 30 minutes et le traitement SGE",
        body: "Toutes les 30 minutes, le compteur Linky enregistre l'énergie injectée par le producteur et l'énergie soutirée par chaque consommateur. Le Système de Gestion de l'Énergie d'Enedis (SGE) croise ensuite ces données avec la clé de répartition de la PMO pour attribuer la part d'énergie locale à chacun.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "L'obligation d'équipement en compteurs communicants (Linky ou PME-PMI) découle des articles R. 341-4 et suivants du Code de l'énergie.",
          decreeRef: "Code de l'énergie - Art. R. 341-4"
        }
      }
    ],
    relatedLinks: [
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition", level: 3, relationType: "latéral" }
    ]
  },

  {
    slug: "fiscalite",
    h1: "Accise, TVA, TURPE : la fiscalité de l'ACC",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Fiscalité",
    wave: 1,
    summary: "Régime fiscal des flux financiers et taxes applicables sur l'électricité autoconsommée en boucle locale.",
    prerequisites: [
      { title: "Ce que paie un participant", slug: "prix-du-kwh" }
    ],
    essentiel: [
      "Exonération d'Accise sur l'électricité (ex-TICFE) pour la part d'énergie produite et autoconsommée localement sous conditions de puissance.",
      "Application de la TVA classique (20% ou 5,5% sur l'abonnement) selon la nature du consommateur.",
      "Specificité du TURPE ACC (Option TURPE spécifique avec part fixe de gestion)."
    ],
    contentSections: [
      {
        h2: "Exonérations fiscales applicables",
        body: "L'électricité produite et directement autoconsommée au sein de la boucle bénéficie d'un régime fiscal favorable. L'Accise sur l'électricité (précédemment TICFE) est exonérée pour les centrales d'une puissance inférieure à 240 kWc sous réserve des règles de minimis.",
        regulatoryNote: {
          title: "Le détail réglementaire - Article 266 quinquies C du Code des douanes",
          content: "Exonération fiscale d'Accise pour l'électricité produite par des petites installations d'autoconsommation.",
          decreeRef: "Code des douanes - Art. 266 quinquies C"
        }
      }
    ],
    relatedLinks: [
      { title: "La part fixe et la vente à l'agrégateur", slug: "part-fixe-agregateur", level: 4, relationType: "montée" }
    ]
  },

  {
    slug: "tiers-investissement",
    h1: "Le tiers-investissement : montage et contrats",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Financement",
    wave: 1,
    summary: "Structure contractuelle d'une opération financée à 100% par un tiers-investisseur (0€ CAPEX).",
    prerequisites: [
      { title: "Tiers-investissement, PPA ou achat : le comparatif", slug: "comparatif-financement" }
    ],
    essentiel: [
      "Mise à disposition de la toiture ou du parking via un bail à construction ou une convention d'occupation temporaire (COT).",
      "Signature d'un contrat de vente d'électricité (PPA) garantissant le prix du kWh sur 20 à 25 ans.",
      "Transfert de propriété de la centrale à l'issue du bail à un coût symbolique ou valeur résiduelle."
    ],
    contentSections: [
      {
        h2: "Combinaison Bail Immobilier + Contrat PPA",
        body: "En tiers-investissement, le propriétaire foncier signe deux actes juridiques majeurs : la mise à disposition du toit (bail emphotéotique ou bail à construction de 25 à 30 ans) et le contrat d'achat d'électricité pour approvisionner les bâtiments voisins.",
        exampleBox: {
          title: "Garantie d'exploitation sans risque",
          content: "Si la centrale subit une panne d'onduleur, c'est le tiers-investisseur qui supporte le manque à gagner et prend en charge le remplacement sous 48h."
        }
      }
    ],
    relatedLinks: [
      { title: "Le PPA on-site : durée, indexation, clauses", slug: "ppa-on-site", level: 3, relationType: "latéral" }
    ]
  },

  {
    slug: "ppa-on-site",
    h1: "Le PPA on-site : durée, indexation, clauses",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Contrats",
    wave: 1,
    summary: "Rédiger et négocier un contrat de Corporate PPA (Power Purchase Agreement) On-Site.",
    prerequisites: [
      { title: "Le tiers-investissement : montage et contrats", slug: "tiers-investissement" }
    ],
    essentiel: [
      "Durée standard de 15 à 25 ans avec indexation fixe, sur l'ILC ou sur un indice d'inflation prédéfini.",
      "Clauses d'obligation d'achat (Take-or-Pay) et de transfert de garanties d'origine (GO).",
      "Clauses de sortie anticipée et rachat d'actif en cours de contrat."
    ],
    contentSections: [
      {
        h2: "Anatomie d'un PPA On-Site sur mesure",
        body: "Le PPA On-Site lie directement le producteur au consommateur hébergeant la centrale. Le prix du kWh y est fixé pour toute la durée du contrat, offrant une visibilité budgétaire inégalée par rapport aux variations du marché de l'énergie.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Cadre contractuel des PPA de vente directe selon l'article L. 331-1 du Code de l'énergie.",
          decreeRef: "Code de l'énergie - Art. L. 331-1"
        }
      }
    ],
    relatedLinks: [
      { title: "Tiers-investissement, PPA ou achat : le comparatif", slug: "comparatif-financement", level: 2, relationType: "rattrapage" }
    ]
  },

  {
    slug: "exploitation-maintenance",
    h1: "Exploitation et maintenance : ce que couvre un contrat O&M",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "7 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Maintenance",
    wave: 3,
    summary: "Supervision en temps réel, maintenance préventive et curative des centrales solaires en ACC.",
    prerequisites: [
      { title: "Raccordement Enedis : procédure, délais, coûts", slug: "raccordement-enedis" }
    ],
    essentiel: [
      "Monitoring 24/7 avec télé-alarmes sur les taux de conversion des onduleurs et jonctions.",
      "Maintenance préventive annuelle (thermographie infrarouge par drone, contrôle des serrages).",
      "Garantie de temps de rétablissement (GTR) pour préserver la production annuelle."
    ],
    contentSections: [
      {
        h2: "Supervision proactive et nettoyage des modules",
        body: "Un contrat O&M (Operations & Maintenance) rigoureux garantit la rentabilité de la centrale sur 25 ans. Les anomalies telles que les ombrages, la poussière ou les pannes de chaînes (strings) sont détectées automatiquement via la plateforme de télégestion.",
        exampleBox: {
          title: "Inspection par thermographie drone",
          content: "L'utilisation d'un drone thermique une fois par an permet d'identifier les 'hot spots' (cellules défaillantes) invisibles à l'œil nu avant qu'ils n'endommagent le panneau."
        }
      }
    ],
    relatedLinks: [
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation", level: 4, relationType: "montée" }
    ]
  },

  // ==========================================
  // NIVEAU 4 : MAÎTRISER
  // ==========================================
  {
    slug: "coefficients-ex-ante",
    h1: "Coefficients ex-ante : ce que change le décret 2026-561",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "12 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Expertise",
    wave: 2,
    summary: "Décryptage technique du Décret 2026-561 instaurant les coefficients de répartition ex-ante, leur modèle de calcul reproductible et le débat tranché sur l'arbitrage d'allocation.",
    prerequisites: [
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition" },
      { title: "La convention d'autoconsommation collective", slug: "convention-enedis" }
    ],
    essentiel: [
      "Le décret 2026-561 réforme les règles de transmission des coefficients de répartition à Enedis.",
      "Passage d'un modèle de régularisation a posteriori à un modèle d'allocation ex-ante paramétrable par la PMO.",
      "Fin des décalages de facturation de 6 mois pour les fournisseurs de complément grâce au calcul direct dans le SGE."
    ],
    reproducibleModel: {
      title: "Modèle de calcul de la clé d'allocation dynamique pondérée (Pas 30 minutes)",
      formulaOrMethod: "Alpha_i(t) = Min ( 1 , [ C_i(t) / Sum(C_k(t)) ] * P_totale(t) / P_inst(t) )",
      variables: [
        { name: "C_i(t)", unit: "kWh", description: "Consommation mesurée sur le PRM i sur la demi-heure t", sampleValue: "45.2" },
        { name: "Sum(C_k(t))", unit: "kWh", description: "Consommation totale cumulée des consommateurs actifs de la boucle", sampleValue: "180.0" },
        { name: "P_totale(t)", unit: "kWh", description: "Production totale injectée par la centrale solaire sur la demi-heure t", sampleValue: "120.0" },
        { name: "P_inst(t)", unit: "kWc", description: "Puissance crête totale raccordée de l'installation", sampleValue: "250.0" }
      ],
      stepByStepCalculation: [
        "1. Extraction des données d'index Linky par Enedis pour le pas de temps t (ex: 13h00 - 13h30).",
        "2. Calcul du ratio de soutirage individuel : R_1 = 45.2 / 180.0 = 0.2511 (soit 25,11% de la demande globale).",
        "3. Application du coefficient d'allocation à la production réelle : Vol_alloué = 0.2511 * 120.0 kWh = 30.13 kWh.",
        "4. Vérification de non-dépassement : Vol_alloué (30.13 kWh) < C_1 (45.2 kWh). Aucune énergie n'est gaspillée.",
        "5. Facturation par le producteur à 0,12 €/kWh soit 3,61 € HT pour la demi-heure."
      ],
      outcome: "Allocation exacte à 100% du surplus de production sans rejet réseau, garantissant un TACC théorique de 100% sur cet intervalle."
    },
    argumentedPosition: {
      title: "Position d'ingénierie : Clé dynamique pondérée vs Clé statique contractuelle",
      debate: "Certains acteurs de la gestion de copropriété préconisent encore la clé statique pour sa lisibilité sur la quittance de loyer, malgré une perte de rendement énergétique de 15% à 25%.",
      ourPosition: "Écologie Collective défend l'adoption exclusive de la clé dynamique pondérée automatisée ex-ante.",
      keyArguments: [
        "Elimination absolue du gaspillage photovoltaïque : chaque kWh produit trouve immédiatement un preneur réactif dans la boucle.",
        "Équité économique parfaite : aucun consommateur ne paie pour une énergie qu'il n'a pas consommée lors de sa fermeture.",
        "Transparence totale grâce aux API d'agrégation Linky qui automatisent le calcul sans charge de gestion administrative pour la PMO."
      ],
      counterArgumentsAnswered: "À la critique sur la 'complexité de compréhension par l'usager final', nous répondons que la complexité de calcul est entièrement masquée par l'algorithme : l'usager ne voit sur sa facture que la quantité totale de kWh locaux consommés et le montant des économies réalisées."
    },
    contentSections: [
      {
        h2: "Le saut technologique du Décret 2026-561",
        body: "Auparavant, le calcul des clés dynamiques ex-post entraînaient des décalages de régularisation pouvant aller jusqu'à plusieurs mois sur les factures d'électricité transmises par les fournisseurs de complément. L'introduction des coefficients ex-ante pré-déclarés permet un calcul instantané au pas 30 minutes dans le Système de Gestion de l'Énergie (SGE) d'Enedis.\n\nCe décret transforme l'ACC en une véritable solution industrielle capable de rivaliser en réactivité avec la fourniture de réseau traditionnelle.",
        regulatoryNote: {
          title: "Le détail réglementaire - Décret n° 2026-561",
          content: "Décret n° 2026-561 relatif à la simplification du calcul des flux d'autoconsommation collective et aux modalités de transmission des données de répartition.",
          decreeRef: "Décret n° 2026-561 du 26 juin 2026"
        }
      }
    ],
    glossaryTerms: [
      { term: "Ex-ante", definition: "Fixation des coefficients de répartition effectuée en amont de la période de consommation." },
      { term: "SGE", definition: "Système de Gestion de l'Énergie du gestionnaire de réseau Enedis." }
    ],
    relatedLinks: [
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation", level: 4, relationType: "latéral" }
    ]
  },

  {
    slug: "part-fixe-agregateur",
    h1: "La part fixe et la vente à l'agrégateur",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Monétisation",
    wave: 1,
    summary: "Stratégies d'arbitrage financier pour la valorisation du surplus d'énergie auprès d'un agrégateur de marché.",
    prerequisites: [
      { title: "Ce que paie un participant", slug: "prix-du-kwh" },
      { title: "Fiscalité de l'ACC", slug: "fiscalite" }
    ],
    essentiel: [
      "Le surplus non consommé au sein de la boucle ACC doit être vendu à un tiers (agrégateur ou acheteur obligé).",
      "Négociation des contrats de vente de surplus de marché (EPEX Spot / PPA Marché).",
      "Équilibre entre part fixe garantie et prime de flexibilité de réseau."
    ],
    contentSections: [
      {
        h2: "Valorisation du surplus sur EPEX Spot",
        body: "En dehors des tarifs d'achat subventionnés (S21), le surplus produit par une grande centrale (ex: 500 kWc à 2 MWc) est revendu sur les marchés de gros via un agrégateur. L'arbitrage consiste à valoriser les dépassements de production lors des pics de prix de marché.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Règles d'accès au marché de gros et contrats d'écart auprès de RTE et des agrégateurs agréés.",
          decreeRef: "Code de l'énergie - Art. L. 321-10"
        }
      }
    ],
    relatedLinks: [
      { title: "Tarif S21 : pourquoi le modèle du surplus est mort", slug: "tarif-s21-surplus", level: 4, relationType: "latéral" }
    ]
  },

  {
    slug: "taux-autoconsommation",
    h1: "Maximiser le TACC : ingénierie de courbe de charge et optimisation",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "12 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Optimisation",
    wave: 3,
    hasCalculator: "tacc",
    summary: "Méthodes d'ingénierie avancée pour maximiser le Taux d'Autoconsommation Collective (TACC) par le pilotage des charges, la modélisation dynamique et l'optimisation des foisonnements.",
    prerequisites: [
      { title: "Votre site est-il adapté ? Lire une courbe de charge", slug: "profil-de-consommation" },
      { title: "Dimensionner une centrale selon la consommation réelle", slug: "dimensionnement" }
    ],
    essentiel: [
      "Le TACC (Taux d'Autoconsommation Collective) mesure le ratio exact de l'énergie solaire produite qui est consommée au sein de la boucle.",
      "Le pilotage actif des consommations flexibles (froid, pompage, recharge IRVE) permet de dépasser 90% de TACC sans batterie.",
      "Chaque gain de 5% de TACC améliore le Taux de Rendement Interne (TRI) du projet de près de 1,2 point."
    ],
    reproducibleModel: {
      title: "Modèle de calcul du TACC et du Taux d'Autocouverture (TACR)",
      formulaOrMethod: "TACC = [ Sum(E_autoconsommée_i(t)) / E_produite_totale(t) ] * 100",
      variables: [
        { name: "E_produite_totale", unit: "kWh/an", description: "Production annuelle mesurée en sortie d'onduleur", sampleValue: "320000" },
        { name: "Sum(E_autoconsommée_i)", unit: "kWh/an", description: "Somme des kWh solaires alloués aux membres de la boucle sur les 17 520 demi-heures de l'année", sampleValue: "294400" },
        { name: "E_soutirée_totale", unit: "kWh/an", description: "Consommation globale cumulée des membres sur le réseau", sampleValue: "850000" }
      ],
      stepByStepCalculation: [
        "1. Extraction des 17 520 valeurs demi-horaires de la courbe de production P(t) et des courbes de consommation C_i(t).",
        "2. Pour chaque intervalle t, calcul du foisonnement instantané : Min [ P(t) , Sum(C_i(t)) ].",
        "3. Intégration annuelle des volumes autoconsommés : Vol_AC = 294 400 kWh.",
        "4. Calcul du TACC : TACC = (294 400 / 320 000) * 100 = 92.0 %.",
        "5. Calcul du Taux d'Autocouverture (TACR) : TACR = (294 400 / 850 000) * 100 = 34.6 %."
      ],
      outcome: "Modèle validé garantissant un amortissement du capital sur 7,8 ans avec un prix du kWh local fixé à 0,115 € HT."
    },
    argumentedPosition: {
      title: "Arbitrage d'ingénierie : Surdimensionner la centrale vs Sous-dimensionner pour viser 100% de TACC",
      debate: "Certains bureaux d'études sous-dimensionnent les centrales à 60% des besoins pour afficher un TACC flatteur de 98-100%, sacrifiant ainsi un potentiel massif de décarbonation du site.",
      ourPosition: "Écologie Collective préconise le surdimensionnement raisonné de la centrale associé à l'agrégation de consommateurs tiers voisins.",
      keyArguments: [
        "Economies d'échelle sur le CAPEX (€/kWc installé) : passer de 100 kWc à 300 kWc réduit le coût unitaire du kWc de 32%.",
        "Maximisation des kWh verts produits et injectés localement dans le tissu économique territorial.",
        "Même avec un TACC de 85% au lieu de 98%, la rentabilité globale en euros nets est supérieure de 65% sur 20 ans."
      ],
      counterArgumentsAnswered: "À l'argument selon lequel 'le surplus est mal valorisé', nous répondons que la structuration d'une PMO ouverte intégrant 2 à 3 consommateurs voisins supplémentaires permet de maintenir le TACC au-dessus de 90% tout en triplant la puissance installée."
    },
    contentSections: [
      {
        h2: "Effacement et déplacement des charges flexibles",
        body: "Pour maximiser le TACC, l'ingénierie ne se limite pas au dimensionnement passif des panneaux. Elle intègre des automates de pilotage de charge (BMS / GTB) qui déclenchent les équipements énergivores (groupes froids, recharge IRVE, climatisation) exactement lors des pics de production solaire.\n\nL'analyse fine des courbes de charge par intelligence artificielle permet d'anticiper les variations météorologiques et d'adapter en continu les consignes d'allouement.",
        exampleBox: {
          title: "Optimisation sur site industriel",
          content: "L'asservissement du démarrage de 4 compresseurs industriels sur la courbe de production solaire d'une centrale de 400 kWc a permis de faire passer le TACC de 78% à 96% sans perturber le rythme de production de l'usine."
        }
      }
    ],
    relatedLinks: [
      { title: "Stockage batterie en ACC : l'analyse qui conclut souvent non", slug: "stockage-batterie", level: 4, relationType: "latéral" }
    ]
  },

  {
    slug: "tarif-s21-surplus",
    h1: "Tarif S21 : pourquoi le modèle du surplus est mort",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Finance",
    wave: 1,
    summary: "Analyse critique du tarif arrêté S21 et démonstration de la supériorité du modèle 100% autoconsommation collective.",
    prerequisites: [
      { title: "Rentabilité d'une opération", slug: "rentabilite" },
      { title: "Dimensionner une centrale selon la consommation réelle", slug: "dimensionnement" }
    ],
    essentiel: [
      "L'arrêté S21 a fortement réduit le tarif d'achat réglementé du surplus pour les centrales B2B.",
      "Compter sur la revente de surplus à EDF OA pour équilibrer un business plan photovoltaïque est désormais un risque financier.",
      "L'ACC apporte une valorisation du kWh locale nettement supérieure (0,12 - 0,15 €/kWh vs 0,06 €/kWh en surplus)."
    ],
    contentSections: [
      {
        h2: "Déconstruction économique du guichet unique S21",
        body: "Historiquement, les développeurs concevaient des centrales de taille maximale en comptant sur le tarif d'achat garanti du surplus. Avec l'effondrement des tarifs d'achat et l'indexation sur les coûts de raccordement, le modèle du surplus pur est économiquement obsolète.",
        regulatoryNote: {
          title: "Le détail réglementaire - Arrêté S21",
          content: "L'Arrêté du 6 octobre 2021 (dit S21) et ses révisions successives instaurent une baisse progressive des tarifs d'injection pour inciter à l'autoconsommation intégrale.",
          decreeRef: "Arrêté du 6 octobre 2021 (S21)"
        }
      }
    ],
    relatedLinks: [
      { title: "La part fixe et la vente à l'agrégateur", slug: "part-fixe-agregateur", level: 4, relationType: "latéral" }
    ]
  },

  {
    slug: "stockage-batterie",
    h1: "Stockage batterie en ACC : l'analyse qui conclut souvent non",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "10 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Arbitrage",
    wave: 3,
    summary: "Étude technico-économique impartiale sur l'opportunité d'intégrer des batteries de stockage physiques dans une boucle d'ACC.",
    prerequisites: [
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation" }
    ],
    essentiel: [
      "Les batteries BESS (Battery Energy Storage System) affichent encore un coût amorti au kWh stocké trop élevé (0,09 à 0,14 €/kWh).",
      "Le 'foisonnement naturel' des consommations de plusieurs voisins remplace avantageusement le stockage physique.",
      "Les seules exceptions valables : effacement de pointe (peak shaving), secours réseau et contraintes fortes de réseau local."
    ],
    contentSections: [
      {
        h2: "Coût complet du stockage vs foisonnement naturel",
        body: "Au lieu d'investir 400 € par kWh de capacité batterie pour stocker du solaire de journée et le restituer le soir, l'ACC consiste à trouver un consommateur voisin qui travaille le jour. Le réseau public joue gratuitement le rôle de batterie virtuelle, sans dégradation chimique ni bilan carbone d'extraction minérale.",
        exampleBox: {
          title: "Modélisation du coût de cycle",
          content: "Coût de la batterie : 120 000 € pour 200 kWh. Durée de vie : 4 000 cycles. Coût amorti du kWh restitué : 0,11 €/kWh. Additionné au coût de production solaire (0,07 €/kWh), le kWh stocké revient à 0,18 €/kWh, réduisant à zéro l'intérêt économique face au réseau."
        }
      }
    ],
    relatedLinks: [
      { title: "Maximiser le TACC : ingénierie de courbe de charge", slug: "taux-autoconsommation", level: 3, relationType: "rattrapage" }
    ]
  },

  {
    slug: "acc-multi-producteurs",
    h1: "ACC multi-producteurs en ZAE : l'effet d'éviction",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Systèmes",
    wave: 4,
    summary: "Gestion des boucles complexes comportant plusieurs centrales solaires distinctes au sein d'une même Zone d'Activités Économiques (ZAE).",
    prerequisites: [
      { title: "Plafonds de puissance : 5 MW, 10 MW", slug: "puissance-maximale" },
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition" }
    ],
    essentiel: [
      "Une boucle d'ACC peut regrouper plusieurs producteurs d'électricité distribués sur la zone.",
      "L'effet d'éviction se produit lorsqu'une grande centrale sature la demande locale au détriment des petites centrales.",
      "La PMO doit mettre en place des règles de priorité d'injection (cascadage) pour préserver l'équité."
    ],
    contentSections: [
      {
        h2: "Algorithmes de cascadage et d'équité multi-producteurs",
        body: "Dans un parc d'activités regroupant 4 toitures photovoltaïques, l'ordre d'attribution des kWh aux consommateurs doit être arbitré équitablement pour éviter qu'un producteur majeur n'accapare la totalité des besoins locaux.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Code de l'énergie - Dispositions relatives aux boucles d'autoconsommation collective multi-producteurs.",
          decreeRef: "Code de l'énergie - Art. L. 315-3"
        }
      }
    ],
    relatedLinks: [
      { title: "Coefficients ex-ante : ce que change le décret 2026-561", slug: "coefficients-ex-ante", level: 4, relationType: "latéral" }
    ]
  },

  {
    slug: "structures-fixation",
    h1: "Lestage, ancrage, Eurocode : les structures en hauteur",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "8 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "BTP",
    wave: 3,
    summary: "Ingénierie de structure pour le montage de panneaux photovoltaïques sur toitures terrasse, étanchéité et ombrières de parking.",
    prerequisites: [
      { title: "Toiture ou ombrière de parking : choisir le support", slug: "toiture-ou-ombriere" }
    ],
    essentiel: [
      "Respect des normes Eurocode 1 (charges de vent et de neige) selon la zone géographique et la hauteur du bâtiment.",
      "Arbitrage entre toiture lestée (sans pénétration de l'étanchéité) et ancrage mécanique sur charpente.",
      "Expertise indispensables par un Bureau d'Études Structure (BES) agréé avant toute pose."
    ],
    contentSections: [
      {
        h2: "Contraintes mécaniques et étanchéité des toitures terrasses",
        body: "Sur toiture terrasse membrane bitume ou PVC, le système lesté est privilégié pour éviter de percer le complexe d'étanchéité. Cependant, le poids supplémentaire (15 à 30 kg/m²) doit être validé par la note de calcul de la charpente métallique ou béton.",
        regulatoryNote: {
          title: "Le détail réglementaire - Règles Eurocode 1 & DTU 43.1",
          content: "Calcul des surcharges climatiques et compatibilité des membranes de couverture selon les règles de l'art BTP.",
          decreeRef: "DTU 43.1 & NF EN 1991-1-4 (Eurocode 1)"
        }
      }
    ],
    relatedLinks: [
      { title: "Toiture ou ombrière de parking : choisir le support", slug: "toiture-ou-ombriere", level: 1, relationType: "rattrapage" }
    ]
  }
];
