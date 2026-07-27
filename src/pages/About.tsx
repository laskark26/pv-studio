import React from 'react';
import { Target, Shield, ArrowRight, Zap, Building2, Stethoscope, Factory, Landmark, Sprout, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import Seo from '../components/Seo';

export default function About() {
  const { openModal } = useModal();

  return (
    <>
      <Seo
        title="À propos"
        description="Écologie Collective, opérateur indépendant de l'autoconsommation collective : ingénieurs en génie électrique, experts en droit de l'énergie et spécialistes du financement."
        canonicalPath="/a-propos"
      />
      {/* Hero Section */}
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-blue-900 flex flex-col min-h-[55vh] md:min-h-[65vh]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=3000&auto=format&fit=crop" 
              alt="Opérateur photovoltaïque Écologie Collective" 
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/95 to-blue-900/90"></div>
            
            {/* Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Opérateur PV
            </div>
          </div>
          
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                Opérateur de Transition Énergétique
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Concevoir, financer et exploiter <span className="text-[#CCFF00]">vos centrales solaires.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed font-medium mb-8 max-w-3xl">
                Écologie Collective développe des solutions photovoltaïques performantes en <strong className="text-white">autoconsommation collective (ACC)</strong> et en <strong className="text-white">PPA on-site</strong> pour les sites professionnels et publics à forte consommation diurne.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openModal}
                  className="bg-[#CCFF00] text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-base shadow-lg"
                >
                  Étudier mon potentiel solaire <ArrowRight className="w-5 h-5" />
                </button>
                <Link 
                  to="/secteurs" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 text-base"
                >
                  Découvrir nos secteurs
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Strategy & Model Breakdown */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Deux modèles de déploiement flexibles
          </h2>
          <p className="text-lg text-slate-600">
            Que vous souhaitiez investir directement ou confier le portage financier de votre centrale à un tiers, nous nous adaptons à vos objectifs patrimoniaux et budgétaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">
                0€
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Modèle Tiers-Investissement
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zéro CAPEX (PPA On-Site / ACC)</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Écologie Collective finance 100% des études, de la construction et de l'exploitation de la centrale photovoltaïque. Vous consommez l'électricité produite sur place à un prix fixe et garanti sur 20 à 25 ans, inférieur au réseau.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Aucun impact sur la trésorerie ou la capacité d'endettement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bouclier tarifaire immédiat face à l'inflation de l'électricité</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Prise en charge complète de la maintenance sur toute la durée</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={openModal}
              className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-full hover:bg-blue-900 transition-colors text-sm flex items-center justify-center gap-2"
            >
              Simuler un PPA Tiers-Investisseur <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/20 rounded-full blur-3xl group-hover:bg-[#CCFF00]/30 transition-colors"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 font-bold text-xl">
                EPC
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Modèle Clé en Main
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Master EPC & Exploitation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Vous investissez dans votre propre centrale pour maximiser votre TRI. Écologie Collective prend en charge l'ingénierie globale, le permis de construire, les démarches Enedis, le raccordement et la création de la PMO d'ACC.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Valorisation maximale de vos actifs fonciers et immobiliers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Amortissement accéléré et rentabilité supérieure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Accompagnement clé-en-main de A à Z par nos ingénieurs</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={openModal}
              className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-full hover:bg-blue-900 transition-colors text-sm flex items-center justify-center gap-2"
            >
              Chiffrer une installation Clé en Main <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Multi-Segment Showcase */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 text-white py-20 px-6 md:px-12 rounded-[3rem] max-w-7xl mx-auto my-12 overflow-hidden relative border border-blue-800/50">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-[#CCFF00]/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 text-[#CCFF00] bg-[#CCFF00]/10">
            Secteurs cibles
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Une expertise dédiée aux profils à forte consommation diurne
          </h2>
          <p className="text-blue-100 text-lg">
            La clé d'un projet solaire rentable réside dans la concomitance entre la courbe de production photovoltaïque (jour) et les besoins réels du bâtiment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Stethoscope, title: "Santé & Médico-social", desc: "Hôpitaux, cliniques, EHPAD avec charges 24/7 et équipements médicaux.", link: "/secteurs/sante" },
            { icon: Factory, title: "Industrie & Logistique", desc: "Grandes toitures et ateliers avec consommation continue en journée.", link: "/secteurs/industrie" },
            { icon: Landmark, title: "Collectivités Locales", desc: "Bâtiments publics, écoles et gymnases mutualisés en boucles ACC.", link: "/secteurs/collectivites" },
            { icon: Building2, title: "Tertiaire & Foncières", desc: "Bureaux, centres commerciaux et mise en conformité Décret Tertiaire.", link: "/secteurs/tertiaire" },
            { icon: Sprout, title: "Agriculture & Hangars", desc: "Valorisant le foncier agricole, serres et bâtiments d'élevage.", link: "/secteurs/agriculture" },
            { icon: Briefcase, title: "Copropriétés", desc: "Réduction des charges des parties communes via le partage d'énergie.", link: "/secteurs/coproprietes" }
          ].map((item, idx) => (
            <Link 
              key={idx} 
              to={item.link} 
              className="bg-blue-950/70 p-6 rounded-2xl border border-blue-800/60 hover:border-[#CCFF00] transition-all group flex flex-col justify-between hover:bg-blue-900/90"
            >
              <div>
                <item.icon className="w-8 h-8 text-[#CCFF00] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed mb-4">{item.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#CCFF00] group-hover:translate-x-1 transition-transform">
                Voir l'approche <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values & Engineering Pillars */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Ingénierie & Faisabilité</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse détaillée de vos courbes de charge Enedis, étude de structure de toiture, modélisation 3D du gisement solaire et calcul précis des taux d'autoconsommation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Juridique & PMO ACC</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Création et administration de la Personne Morale Organisatrice (PMO), contractualisation des conventions Enedis, et rédaction des contrats de vente PPA d'électricité.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Exploitation & Performance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Monitoring en temps réel des rendements, télé-gestion des compteurs Linky, maintenance préventive/curative et répartition automatisée des flux financiers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

