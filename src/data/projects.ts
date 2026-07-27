import { Zap, Building2, Handshake, Leaf, TrendingDown, Target, ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  segment: string;
  location: string;
  power: string;
  model: string;
  image: string;
  status: string;
  context: string;
  solution: string;
  results: {
    label: string;
    value: string;
    icon: any;
  }[];
}

export const projects: ProjectData[] = [
  {
    id: "chr-lyon",
    name: "Centre Hospitalier Régional",
    segment: "Santé & Médico-social",
    location: "Lyon (69)",
    power: "450",
    model: "Tiers-Investissement (PPA)",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    status: "En service",
    context: "Face à la flambée des coûts de l'énergie, le Centre Hospitalier Régional (CHR) cherchait une solution pour sécuriser son budget de fonctionnement sur le long terme. Les contraintes budgétaires empêchaient la mobilisation de capitaux (CAPEX), ceux-ci étant prioritairement alloués aux équipements médicaux et à la rénovation des parcours de soins. Le site disposait cependant de vastes toitures terrasses et de parkings extérieurs fortement exposés au soleil.",
    solution: "Écologie Collective est intervenue en tant que tiers-investisseur. Nous avons conçu, financé à 100% et installé une centrale photovoltaïque de 450 kWc, répartie entre les toitures des bâtiments principaux et des ombrières de parking (offrant par ailleurs un confort thermique aux véhicules des patients et du personnel). L'énergie produite est revendue directement au CHR via un contrat PPA (Power Purchase Agreement) sur 20 ans, à un tarif fixe et inférieur au prix du réseau.",
    results: [
      { label: "Économies annuelles", value: "22 %", icon: TrendingDown },
      { label: "Autoproduction", value: "18 %", icon: Target },
      { label: "CO2 évité/an", value: "35 t", icon: Leaf }
    ]
  },
  {
    id: "techplast-oyonnax",
    name: "Site Industriel TechPlast",
    segment: "Industrie",
    location: "Oyonnax (01)",
    power: "1 200",
    model: "Clé en main (EPC)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    status: "En construction",
    context: "L'industrie de la plasturgie est par nature particulièrement électro-intensive. L'usine TechPlast souhaitait retrouver de la compétitivité tout en entamant une démarche forte de décarbonation de sa chaîne de valeur pour répondre aux exigences de ses donneurs d'ordres. Disposant d'une trésorerie solide, la direction a opté pour la pleine propriété de son installation afin de maximiser le retour sur investissement de l'actif.",
    solution: "Notre bureau d'études a mené une analyse structurelle complexe des charpentes métalliques du site industriel pour valider la faisabilité technique. Écologie Collective intervient ici comme contractant général (modèle EPC). Nous avons dimensionné une centrale d'1,2 MWc optimisée pour la courbe de charge (fonctionnement 3x8). À la livraison, nous en assurerons l'exploitation et la maintenance avec une garantie de performance (PR) stricte.",
    results: [
      { label: "Retour sur investissement", value: "5,5 ans", icon: Zap },
      { label: "Taux d'autoconsommation", value: "98 %", icon: Target },
      { label: "Valorisation de l'actif", value: "+ 8 %", icon: Building2 }
    ]
  },
  {
    id: "groupe-scolaire-annecy",
    name: "Groupe Scolaire Lumière",
    segment: "Collectivité",
    location: "Annecy (74)",
    power: "120",
    model: "Autoconsommation Collective",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
    status: "En service",
    context: "La municipalité d'Annecy souhaitait équiper ses bâtiments publics de panneaux solaires, mais se heurtait à une problématique classique : l'école, disposant de la meilleure toiture, est fermée en été, au moment précis où la production solaire est à son maximum. À l'inverse, la piscine municipale voisine, très énergivore l'été, n'avait pas de toiture exploitable.",
    solution: "La solution technique et juridique de l'Autoconsommation Collective (ACC) a été déployée. Nous avons installé 120 kWc sur le groupe scolaire et créé une Personne Morale Organisatrice (PMO) régie par la commune. L'énergie produite est désormais partagée virtuellement (via le réseau Enedis existant) entre l'école, la mairie, et le centre aquatique. Le surplus est ainsi valorisé en local, sans perte.",
    results: [
      { label: "Bâtiments alimentés", value: "4", icon: Building2 },
      { label: "Énergie locale consommée", value: "100 %", icon: Target },
      { label: "Couverture besoins été (Piscine)", value: "35 %", icon: Zap }
    ]
  },
  {
    id: "parc-affaires-confluence",
    name: "Parc d'Affaires Confluence",
    segment: "Tertiaire & Foncière",
    location: "Lyon 2ème (69)",
    power: "350",
    model: "Tiers-Investissement (PPA)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    status: "En étude",
    context: "Soumis aux obligations du Décret Tertiaire, un important gestionnaire d'actifs immobiliers de la presqu'île lyonnaise cherchait à améliorer drastiquement la performance environnementale de son parc de bureaux de 15 000 m². L'objectif était d'obtenir une certification BREEAM élevée sans augmenter les charges de ses locataires professionnels, tout en préservant son budget de rénovation thermique.",
    solution: "Écologie Collective finance l'intégralité d'une infrastructure solaire de 350 kWc en toiture. Les locataires des bureaux (entreprises de services, agences) s'engagent dans un contrat d'achat d'électricité (PPA) à tarif préférentiel. Ce montage tripartite permet à la foncière de valoriser son actif (valeur verte) et de répondre à ses obligations légales, tandis que les locataires réduisent et sécurisent leurs charges.",
    results: [
      { label: "Gain Décret Tertiaire", value: "- 15 %", icon: TrendingDown },
      { label: "Économies locataires", value: "12 %", icon: Handshake },
      { label: "Investissement Foncière", value: "0 €", icon: Zap }
    ]
  },
  {
    id: "exploitation-agricole-bles",
    name: "Exploitation Agricole Les Blés",
    segment: "Agriculture",
    location: "Bourg-en-Bresse (01)",
    power: "250",
    model: "Clé en main (EPC)",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    status: "En construction",
    context: "Cette exploitation agricole moderne, spécialisée dans le stockage et le conditionnement de céréales, fait face à des besoins importants en ventilation et réfrigération, particulièrement au printemps et en été. Le dirigeant souhaitait construire un nouveau hangar de stockage tout en mutualisant les coûts de construction par la production d'énergie solaire.",
    solution: "L'intervention en modèle EPC a permis d'intégrer le lot photovoltaïque dès la conception architecturale du nouveau hangar. La toiture de 1 200 m² a été optimisée pour accueillir 250 kWc de panneaux solaires. Le profil de production solaire correspondant parfaitement à la courbe de consommation des ventilateurs de stockage, l'exploitation atteint une grande autonomie énergétique.",
    results: [
      { label: "Autonomie électrique", value: "45 %", icon: Target },
      { label: "Taux de rentabilité (TRI)", value: "11 %", icon: TrendingDown },
      { label: "Durée de vie garantie", value: "25 ans", icon: ShieldCheck }
    ]
  },
  {
    id: "residence-terrasses",
    name: "Résidence Les Terrasses",
    segment: "Copropriété",
    location: "Grenoble (38)",
    power: "36",
    model: "Autoconsommation Collective",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000&auto=format&fit=crop",
    status: "En service",
    context: "Les charges d'électricité des parties communes (ascenseurs, éclairages, VMC, parkings souterrains) pesaient lourdement sur le budget de cette copropriété de 54 logements des années 1990. Le conseil syndical, très proactif, cherchait une solution pour réduire les charges tout en amorçant la transition écologique de l'immeuble.",
    solution: "Après un audit en assemblée générale, un projet de 36 kWc en Autoconsommation Collective a été voté. Écologie Collective a géré le montage juridique (création de la Personne Morale Organisatrice) et technique. L'énergie alimente prioritairement les communs. Le surplus de production, notamment en journée, est réparti entre les 18 copropriétaires ayant choisi de rejoindre la boucle pour leur consommation individuelle.",
    results: [
      { label: "Baisse charges communs", value: "- 35 %", icon: TrendingDown },
      { label: "Économies résidents", value: "- 15 %", icon: Handshake },
      { label: "Surface de toiture", value: "200 m²", icon: Building2 }
    ]
  }
];
