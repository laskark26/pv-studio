import { Stethoscope, Landmark, Building2, Factory, Sprout, Briefcase, Zap, ShieldCheck, TrendingDown } from 'lucide-react';

export interface SecteurData {
  id: string;
  title: string;
  icon: any;
  shortDesc: string;
  image: string;
  context: string;
  solution: string;
  benefits: {
    label: string;
    value: string;
    icon: any;
  }[];
}

export const secteurs: SecteurData[] = [
  {
    id: "sante",
    title: "Santé & Médico-social",
    icon: Stethoscope,
    shortDesc: "Hôpitaux, cliniques, EHPAD. Consommation continue et diurne idéale pour le solaire.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    context: "Les établissements de santé (hôpitaux, cliniques, EHPAD) présentent un profil énergétique particulièrement adapté à l'autoconsommation solaire. Leurs besoins en électricité sont intenses, continus tout au long de la journée (éclairage, ventilation, équipements médicaux), et coïncident parfaitement avec la courbe de production photovoltaïque. Face à la hausse des coûts de l'énergie, sécuriser son budget de fonctionnement devient vital pour maintenir la qualité des soins.",
    solution: "Nous concevons des centrales solaires en toiture ou sur ombrières de parking pour les établissements de santé. Via notre modèle de Tiers-Investissement (PPA), l'établissement ne supporte aucun coût initial (CAPEX) et bénéficie d'une électricité verte, locale et à tarif garanti sur 20 ans, tout en offrant un confort thermique (ombrières) aux patients et au personnel.",
    benefits: [
      { label: "Baisse des coûts", value: "Immédiate", icon: TrendingDown },
      { label: "Sécurisation budget", value: "Long terme", icon: ShieldCheck },
      { label: "Investissement", value: "0 €", icon: Zap }
    ]
  },
  {
    id: "collectivites",
    title: "Collectivités",
    icon: Landmark,
    shortDesc: "Bâtiments publics, écoles, centres sportifs. Exemplarité et maîtrise du budget public.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
    context: "Les collectivités territoriales doivent montrer l'exemple en matière de transition écologique, tout en faisant face à de fortes contraintes budgétaires. Le patrimoine public (écoles, gymnases, mairies) dispose de vastes toitures, mais la consommation de chaque bâtiment est souvent irrégulière (ex: une école fermée en été).",
    solution: "L'Autoconsommation Collective (ACC) est la solution reine pour les collectivités. En créant une boucle énergétique locale, une mairie peut équiper le toit de son école et partager l'électricité produite avec la piscine municipale ou l'EHPAD voisin. Le surplus est ainsi valorisé, permettant de verdir le territoire sans gaspiller d'énergie, tout en maîtrisant les finances publiques.",
    benefits: [
      { label: "Budget maîtrisé", value: "Garanti", icon: ShieldCheck },
      { label: "Impact local", value: "Fort", icon: Building2 },
      { label: "Décarbonation", value: "Accélérée", icon: TrendingDown }
    ]
  },
  {
    id: "tertiaire",
    title: "Tertiaire & Foncières",
    icon: Building2,
    shortDesc: "Bureaux, centres commerciaux. Valorisation des actifs et respect du décret tertiaire.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    context: "Le secteur tertiaire est sous la pression du Décret Tertiaire, imposant des réductions drastiques de consommation énergétique (-40% d'ici 2030). Pour les foncières et les propriétaires d'immobilier d'entreprise, l'enjeu est de valoriser leurs actifs, d'attirer des locataires exigeants sur les critères ESG, et de se conformer à la loi sans pour autant augmenter les charges de manière prohibitive.",
    solution: "Nos solutions solaires (PPA ou Clé en main) permettent d'améliorer immédiatement l'étiquette énergétique des bâtiments. Les toitures ou les parkings des centres commerciaux et parcs de bureaux se transforment en centrales de production. Via l'ACC, le propriétaire peut même revendre cette énergie verte à ses locataires à un tarif compétitif, créant une nouvelle ligne de revenus tout en les fidélisant.",
    benefits: [
      { label: "Décret Tertiaire", value: "Conforme", icon: ShieldCheck },
      { label: "Valeur verte", value: "Hausse", icon: TrendingDown },
      { label: "Attractivité locative", value: "Renforcée", icon: Building2 }
    ]
  },
  {
    id: "industrie",
    title: "Industrie & Logistique",
    icon: Factory,
    shortDesc: "Grandes toitures exploitables et consommation intensive pour un ROI rapide.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    context: "Les sites industriels et les plateformes logistiques sont de très grands consommateurs d'électricité et possèdent souvent des toitures immenses, plates et dégagées. L'envolée des prix de l'énergie pèse lourdement sur la compétitivité de l'industrie française, qui doit par ailleurs décarboner sa chaîne de production pour répondre aux donneurs d'ordres.",
    solution: "Nous concevons des centrales solaires de grande puissance (souvent supérieures à 1 MWc). La consommation industrielle permet de maximiser le taux d'autoconsommation (proche de 100%). Que ce soit en Tiers-Investissement pour préserver la trésorerie ou en contrat EPC (Clé en main) pour maximiser le TRI (souvent inférieur à 6 ans), l'industrie retrouve visibilité et compétitivité.",
    benefits: [
      { label: "Compétitivité", value: "Améliorée", icon: TrendingDown },
      { label: "Indépendance", value: "Maximisée", icon: ShieldCheck },
      { label: "Retour S/ Invest.", value: "< 6 ans", icon: Zap }
    ]
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: Sprout,
    shortDesc: "Hangars agricoles, serres. Synergie entre exploitation et production d'énergie.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    context: "Le monde agricole fait face à des défis économiques et climatiques immenses. Les exploitations nécessitent souvent de nouveaux bâtiments (hangars de stockage, stabulations) mais les coûts de construction sont élevés. De plus, certaines activités (chambres froides, traite, ventilation, irrigation) sont très énergivores.",
    solution: "Le photovoltaïque agricole permet de financer tout ou partie de la construction de bâtiments neufs. Écologie Collective accompagne les exploitants avec des hangars solaires clés en main ou financés par des tiers. La toiture devient un actif qui génère une énergie revendue ou autoconsommée pour faire tourner l'exploitation à moindre coût, dans une logique d'agrivoltaïsme intelligent.",
    benefits: [
      { label: "Nouveau Hangar", value: "Financé", icon: Building2 },
      { label: "Revenu", value: "Complémentaire", icon: TrendingDown },
      { label: "Facture", value: "Réduite", icon: Zap }
    ]
  },
  {
    id: "coproprietes",
    title: "Copropriétés",
    icon: Briefcase,
    shortDesc: "Autoconsommation collective pour réduire les charges des parties communes.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000&auto=format&fit=crop",
    context: "Dans les copropriétés, les charges liées aux parties communes (ascenseurs, éclairages, VMC, parkings) subissent de plein fouet l'inflation énergétique. Les conseils syndicaux cherchent des solutions pour maîtriser ces coûts et valoriser le patrimoine, mais les démarches en assemblée générale (AG) peuvent être complexes.",
    solution: "Grâce à l'Autoconsommation Collective, nous équipons les toits des immeubles pour alimenter directement les parties communes. Le surplus peut être partagé avec les copropriétaires volontaires pour leur consommation privative. Nous accompagnons le syndic et le conseil syndical de A à Z : étude, montage juridique, constitution de la PMO, et présentation pédagogique en AG.",
    benefits: [
      { label: "Charges Communes", value: "Baisse", icon: TrendingDown },
      { label: "Valeur Appart.", value: "Hausse", icon: Building2 },
      { label: "Démarche", value: "Clé en main", icon: ShieldCheck }
    ]
  }
];
