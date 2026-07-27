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
    readTime: "4 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Comparatif",
    wave: 1,
    summary: "Découvrez les distinctions clés entre valoriser son énergie sur son propre compteur unique ou la partager virtuellement avec plusieurs voisins via le réseau Enedis.",
    prerequisites: [],
    essentiel: [
      "L'autoconsommation individuelle se limite au périmètre physique d'un seul compteur électrique (PRM).",
      "L'Autoconsommation Collective (ACC) utilise le réseau public Enedis pour distribuer virtuellement l'électricité entre plusieurs consommateurs.",
      "L'ACC permet d'éviter l'écrêtage ou la revente à bas prix en partageant le surplus solaire avec des voisins consommateurs."
    ],
    contentSections: [
      {
        h2: "Périmètre physique vs partage virtuel par le réseau",
        body: "Dans une installation photovoltaïque individuelle classique, les panneaux solaires sont raccordés directement sur le TGBT ou le tableau électrique du bâtiment. L'électricité produite est consommée en priorité par les appareils connectés sur ce même compteur. En revanche, l'Autoconsommation Collective (ACC) abolit cette contrainte physique : la centrale injecte son énergie sur le réseau public de distribution (Enedis), et l'énergie est attribuée de façon virtuelle, par calcul informatique, à plusieurs consommateurs abonnés.",
        exampleBox: {
          title: "Exemple concret : Bâtiment tertiaire et commerce voisin",
          content: "Un bâtiment administratif de bureau produit 150 kWh un dimanche ensoleillé alors que ses locaux sont fermés. En individuel, cette énergie serait vendue en totalité au réseau à tarif de surplus. En ACC, elle est réattribuée automatiquement au supermarché voisin ouvert le dimanche, réduisant sa facture en direct."
        }
      },
      {
        h2: "L'absence de câble privé : un avantage réseau majeur",
        body: "Une idée reçue fréquente consiste à imaginer la pose d'un câble privé entre les bâtiments pour partager le courant. Outre un coût de génie civil exorbitant, la création de réseaux électriques privés traversant le domaine public est strictement interdite. L'ACC s'appuie à 100% sur le réseau Enedis existant, sans aucun travaux de raccordement physique entre les participants.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "L'article L. 315-2 du Code de l'énergie définit l'opération d'autoconsommation collective comme un regroupement de producteurs et consommateurs liés au sein d'une Personne Morale Organisatrice (PMO), utilisant le réseau public de distribution sans restriction sur le niveau de tension (BT ou HTA).",
          decreeRef: "Code de l'énergie - Art. L. 315-2 à L. 315-8"
        }
      }
    ],
    glossaryTerms: [
      { term: "PRM", definition: "Point de Référence de Mesure (numéro d'identification du compteur Linky par Enedis)." },
      { term: "TGBT", definition: "Tableau Général Basse Tension, le point central de distribution électrique d'un bâtiment." }
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
    readTime: "6 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Règles",
    wave: 2,
    summary: "Règles d'éloignement géographique en ACC : la règle de base des 2 km et les extensions dérogatoires jusqu'à 20 km en zone rurale ou périurbaine.",
    prerequisites: [
      { title: "Le cadre légal de l'ACC", slug: "cadre-legal" }
    ],
    essentiel: [
      "Par défaut, la distance maximale entre le producteur le plus éloigné et le consommateur le plus éloigné est de 2 km.",
      "Une dérogation ministérielle permet de porter le périmètre à 10 km (zones périurbaines) ou 20 km (zones rurales).",
      "Le calcul de la distance s'effectue 'à vol d'oiseau' entre les points de livraison (PDL / PRM)."
    ],
    contentSections: [
      {
        h2: "Calcul de la distance et critères d'extension",
        body: "La distance maximale est mesurée entre les deux participants les plus distants de la boucle. Pour bénéficier d'une dérogation à 10 ou 20 km, la PMO doit déposer un dossier auprès de la DGEC (Direction Générale de l'Énergie et du Climat) prouvant la faible densité de population du territoire.",
        regulatoryNote: {
          title: "Le détail réglementaire - Arrêté du 14 octobre 2020",
          content: "L'arrêté du 14 octobre 2020 fixe les critères d'implantation des opérations d'autoconsommation collective étendues et précise la grille de densité INSEE requise.",
          decreeRef: "Arrêté du 14 oct 2020 - NOR: TRER2025345A"
        }
      }
    ],
    relatedLinks: [
      { title: "La PMO : rôle, statut juridique et création", slug: "pmo", level: 3, relationType: "montée" }
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
    h1: "La PMO : rôle, statut juridique et création",
    level: 3,
    levelLabel: "3 · Structurer",
    question: "« Comment ça se monte concrètement ? »",
    readTime: "9 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Procédure",
    wave: 2,
    summary: "Guide juridique pour choisir et créer la Personne Morale Organisatrice (PMO) indispensable à toute opération d'ACC.",
    prerequisites: [
      { title: "Qui peut participer à une opération d'ACC", slug: "qui-peut-participer" },
      { title: "Le cadre légal de l'ACC", slug: "cadre-legal" }
    ],
    essentiel: [
      "La PMO est légalement responsable d'envoyer la convention d'ACC et les clés de répartition à Enedis.",
      "Formes juridiques courantes : Association Loi 1901, SAS, Coopérative (SCIC/SCOP) ou directement le Syndicat de Copropriétaires.",
      "Le choix des statuts doit anticiper l'entrée ou la sortie de nouveaux consommateurs en cours de vie du projet."
    ],
    contentSections: [
      {
        h2: "Comparatif des structures juridiques de PMO",
        body: "Le choix de la structure dépend du niveau de gouvernance souhaité. Une Association Loi 1901 est idéale pour sa simplicité de gestion. Une SAS offre une rigueur commerciale renforcée pour la revente de kWh entre industriels. Une SCIC (Société Coopérative d'Intérêt Collectif) associe les citoyens et collectivités.",
        regulatoryNote: {
          title: "Le détail réglementaire",
          content: "Code de l'énergie - Article L. 315-2. La PMO doit être dotée d'une personnalité morale distincte capable de contracter avec Enedis et de représenter la communauté.",
          decreeRef: "Code de l'énergie - Art. L. 315-2"
        }
      }
    ],
    glossaryTerms: [
      { term: "PMO", definition: "Personne Morale Organisatrice, l'entité morale portant l'accord collectif auprès d'Enedis." },
      { term: "SCIC", definition: "Société Coopérative d'Intérêt Collectif, structure juridique associant acteurs publics, privés et usagers." }
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
    readTime: "10 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Expertise",
    wave: 2,
    summary: "Décryptage technique du Décret 2026-561 instaurant les coefficients de répartition ex-ante et leur impact sur le calcul Enedis.",
    prerequisites: [
      { title: "Les clés de répartition : statique, dynamique, par défaut", slug: "cles-de-repartition" },
      { title: "La convention d'autoconsommation collective", slug: "convention-enedis" }
    ],
    essentiel: [
      "Le décret 2026-561 modifie les règles de transmission des coefficients de répartition à Enedis.",
      "Passage à un modèle d'allocation ex-ante paramétrable permettant un ajustement prédictif fondé sur l'IA.",
      "Réduction drastique des délais de réconciliation comptable entre Enedis et les fournisseurs de complément."
    ],
    contentSections: [
      {
        h2: "Le saut technologique du Décret 2026-561",
        body: "Auparavant, le calcul des clés dynamiques ex-post entraînait des décalages de régularisation pouvant aller jusqu'à plusieurs mois sur les factures d'électricité. L'introduction des coefficients ex-ante pré-déclarés permet un calcul instantané au pas 30 minutes dans le SGE d'Enedis.",
        regulatoryNote: {
          title: "Le détail réglementaire - Décret n° 2026-561",
          content: "Décret n° 2026-561 relatif à la simplification du calcul des flux d'autoconsommation collective et aux modalités de transmission des données de répartition.",
          decreeRef: "Décret n° 2026-561 du 26 juin 2026"
        },
        exampleBox: {
          title: "Formule de calcul d'allocation ex-ante",
          content: "Coeff_i(t) = Min ( 1, C_i(t) / Sum(C_j(t)) ) * Alpha_i (avec correction dynamique de boucle fermée)."
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
    h1: "Maximiser le TACC : ingénierie de courbe de charge",
    level: 4,
    levelLabel: "4 · Maîtriser",
    question: "« Où sont les arbitrages fins ? »",
    readTime: "10 min",
    lastUpdated: "12 septembre 2026",
    categoryTag: "Optimisation",
    wave: 3,
    hasCalculator: "tacc",
    summary: "Méthodes d'ingénierie avancée pour maximiser le Taux d'Autoconsommation Collective (TACC) par le pilotage des charges.",
    prerequisites: [
      { title: "Votre site est-il adapté ? Lire une courbe de charge", slug: "profil-de-consommation" },
      { title: "Dimensionner une centrale selon la consommation réelle", slug: "dimensionnement" }
    ],
    essentiel: [
      "Le TACC (Taux d'Autoconsommation Collective) mesure le ratio de l'énergie produite directement consommée par la boucle.",
      "Mettre en place un pilotage actif des consommations flexibles (recharge de véhicules électriques, production de froid, pompage).",
      "Chaque gain de 5% de TACC améliore le TRI de la centrale de près de 1,2 point."
    ],
    contentSections: [
      {
        h2: "Effacement et déplacement des charges flexibles",
        body: "Pour maximiser le TACC, l'ingénierie ne se limite pas au dimensionnement passif des panneaux. Elle intègre des automates de pilotage de charge (BMS / GTB) qui déclenchent les équipements énergivores (groupes froids, recharge IRVE, climatisation) exactement lors des pics de production solaire.",
        exampleBox: {
          title: "Optimisation sur site industriel",
          content: "L'asservissement du démarrage de 4 compresseurs industriels sur la courbe de production solaire d'une centrale de 400 kWc a permis de faire passer le TACC de 78% à 96%."
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
