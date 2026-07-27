import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Network, Zap, Users, ShieldCheck, FileText, ArrowRight, Search, Filter, BookOpen, Layers, Sparkles, CheckCircle2, Sun, Calendar, Clock } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { ACC_ARTICLES, ACC_LEVELS, ACCArticle } from '../data/accArticles';
import { generateHubBreadcrumbSchema, generateHubFAQSchema } from '../utils/schemaOrg';

export default function ComprendreACC() {
  const { openModal } = useModal();
  const [searchParams] = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWave, setSelectedWave] = useState<number | 'all'>('all');

  // Read level from search param if present
  useEffect(() => {
    const levelParam = searchParams.get('level');
    if (levelParam) {
      const parsed = parseInt(levelParam, 10);
      if ([1, 2, 3, 4].includes(parsed)) {
        setSelectedLevel(parsed);
      }
    }
  }, [searchParams]);

  // Filtered Articles based on search & tab level
  const filteredArticles = useMemo(() => {
    return ACC_ARTICLES.filter(article => {
      const matchesLevel = selectedLevel === 'all' || article.level === selectedLevel;
      const matchesWave = selectedWave === 'all' || article.wave === selectedWave;
      const matchesQuery = searchQuery === '' || 
        article.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.essentiel.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesLevel && matchesWave && matchesQuery;
    });
  }, [selectedLevel, selectedWave, searchQuery]);

  // JSON-LD Schemas
  const breadcrumbSchema = generateHubBreadcrumbSchema(selectedLevel);
  const faqSchema = generateHubFAQSchema();

  // Find latest update date across articles
  const latestUpdateDate = ACC_ARTICLES[0]?.lastUpdated || "12 septembre 2026";

  return (
    <>
      {/* JSON-LD Structured Data Markup (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header with Dark Blue Palette */}
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-blue-900 flex flex-col min-h-[55vh] md:min-h-[65vh]">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=3000&auto=format&fit=crop" 
              alt="Grid network" 
              className="w-full h-full object-cover mix-blend-overlay opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/95 to-blue-900/90"></div>
            
            {/* Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Comprendre ACC
            </div>
          </div>
          
          {/* Hero Section */}
          <section className="relative z-20 flex-1 flex items-center pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 border border-[#CCFF00]/40 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#CCFF00] backdrop-blur-md bg-blue-950/60">
                  <Network className="w-4 h-4" /> Hub de Connaissances · v2 Parcours Progressif
                </div>
                <div className="inline-flex items-center gap-1.5 border border-slate-700/80 rounded-full px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 backdrop-blur-md bg-slate-900/80">
                  <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Base à jour au <strong className="text-white">{latestUpdateDate}</strong></span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Comprendre l'Autoconsommation Collective <span className="text-[#CCFF00]">sans filtre.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed font-medium mb-10 max-w-3xl">
                Un hub d'ingénierie et de réglementation structuré en <strong className="text-white">4 niveaux progressifs</strong> (du cadrage initial aux arbitrages d'experts). 28 fiches thématiques pour maîtriser votre projet solaire.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Rechercher par mot-clé (ex: TURPE, PMO, Linky, PPA, Décret 2026-561...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-slate-900 pl-12 pr-4 py-4 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-[#CCFF00] text-sm md:text-base font-medium placeholder:text-slate-400"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* SECTION SIMPLIFIÉE : L'ACC EN UN COUP D'ŒIL */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-800/50">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            {/* Tag & Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#CCFF00]/20 text-[#CCFF00] border border-[#CCFF00]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> En résumé · Comprendre l'ACC sans jargon
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Qu'est-ce que l'Autoconsommation Collective ?
                </h2>
              </div>
              <button 
                onClick={() => openModal()}
                className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Simuler mon projet
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Core Concept Statement */}
            <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed mb-10 max-w-4xl border-l-4 border-[#CCFF00] pl-5 py-1">
              L'ACC permet à plusieurs acteurs (entreprises, collectivités, logements) situés dans un même périmètre de <strong className="text-white">partager localement l'électricité solaire</strong> produite par des toitures ou ombrières voisines, en utilisant le <strong className="text-white">réseau public Enedis existant</strong>.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#CCFF00]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mb-4 border border-amber-500/30">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">1. Production Solaire Locale</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Des panneaux photovoltaïques sont installés sur une toiture d'entreprise, un bâtiment public ou une ombrières de parking.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#CCFF00]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl mb-4 border border-blue-500/30">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">2. Partage via le Réseau Enedis</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Pas de câbles privés à tirer ! L'électricité circule sur le réseau public. Les compteurs Linky mesurent les flux toutes les 30 minutes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#CCFF00]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center font-bold text-xl mb-4 border border-[#CCFF00]/30">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">3. Gouvernance par la PMO</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  La PMO (Personne Morale Organisatrice) regroupe les membres et définit la clé de répartition ainsi que le tarif fixe du kWh local.
                </p>
              </div>
            </div>

            {/* Key Advantages Horizontal Bar */}
            <div className="bg-blue-900/60 rounded-2xl p-6 border border-blue-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00] text-slate-900 flex items-center justify-center font-black shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Pourquoi choisir l'Autoconsommation Collective ?</h4>
                  <p className="text-xs text-blue-200">Un modèle gagnant-gagnant pour tous les participants de la boucle locale.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 w-full md:w-auto text-xs font-semibold">
                <div className="flex items-center gap-2 bg-slate-900/60 px-4 py-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-[#CCFF00]">●</span> Prix fixe & maîtrisé
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 px-4 py-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-[#CCFF00]">●</span> Moins de frais de réseau
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 px-4 py-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-[#CCFF00]">●</span> Bilan carbone réduit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 Niveaux - Explanation Cards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Un parcours adapté à votre niveau de questionnement
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Le niveau n'est pas une difficulté mais une question différente. Choisissez l'entrée correspondant à votre besoin immédiat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACC_LEVELS.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl.level)}
              className={`p-6 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between group ${
                selectedLevel === lvl.level
                  ? 'bg-blue-900 text-white border-[#CCFF00] shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-md'
              }`}
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border ${
                  selectedLevel === lvl.level 
                    ? 'bg-[#CCFF00] text-slate-900 border-[#CCFF00]' 
                    : lvl.badgeColor
                }`}>
                  Niveau {lvl.level}
                </span>
                <h3 className={`text-xl font-extrabold mb-2 ${selectedLevel === lvl.level ? 'text-white' : 'text-slate-900'}`}>
                  {lvl.title.split('·')[1]?.trim()}
                </h3>
                <div className={`text-xs font-bold mb-3 ${selectedLevel === lvl.level ? 'text-[#CCFF00]' : 'text-blue-600'}`}>
                  {lvl.question}
                </div>
                <p className={`text-xs leading-relaxed ${selectedLevel === lvl.level ? 'text-blue-100' : 'text-slate-600'}`}>
                  {lvl.target}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
                selectedLevel === lvl.level ? 'border-blue-800 text-blue-200' : 'border-slate-100 text-slate-500'
              }`}>
                <span>{lvl.role}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Main Articles Hub Grid */}
      <section id="articles-grid" className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Controls & Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                <BookOpen className="w-4 h-4" /> Base de Connaissances (28 fiches)
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                Explorer les articles du Hub
              </h2>
            </div>

            {/* Level Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedLevel === 'all' 
                    ? 'bg-[#CCFF00] text-slate-900 shadow-lg' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Tous ({ACC_ARTICLES.length})
              </button>
              {ACC_LEVELS.map((lvl) => (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedLevel === lvl.level 
                      ? 'bg-[#CCFF00] text-slate-900 shadow-lg' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Niveau {lvl.level}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Count & Status */}
          <div className="mb-8 flex items-center justify-between text-xs text-slate-400">
            <span>
              Affichage de <strong className="text-white font-bold">{filteredArticles.length}</strong> article(s)
              {selectedLevel !== 'all' && ` (Niveau ${selectedLevel})`}
            </span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-[#CCFF00] hover:underline"
              >
                Réinitialiser la recherche
              </button>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link 
                key={article.slug}
                to={`/autoconsommation-collective/${article.slug}`}
                className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-3xl border border-slate-700/80 hover:border-[#CCFF00] transition-all group flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                      article.level === 1 ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' :
                      article.level === 2 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                      article.level === 3 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    }`}>
                      Niv. {article.level} · {article.categoryTag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#CCFF00] transition-colors leading-snug mb-3">
                    {article.h1}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-700/60">
                    {article.essentiel.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shrink-0 mt-1"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-[#CCFF00]" /> {article.lastUpdated}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#CCFF00] pt-1">
                    <span>Consulter la fiche</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center text-slate-400 bg-slate-800/40 rounded-3xl border border-slate-800">
              <p className="text-lg font-bold text-white mb-2">Aucun article ne correspond à votre recherche.</p>
              <p className="text-xs text-slate-400 mb-6">Essayez avec un autre terme ou réinitialisez le filtre de niveau.</p>
              <button 
                onClick={() => { setSelectedLevel('all'); setSearchQuery(''); }}
                className="bg-[#CCFF00] text-slate-900 font-bold px-6 py-2.5 rounded-full text-xs hover:bg-white transition-all"
              >
                Tout réinitialiser
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Phasage / Vagues de Déploiement */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-blue-600/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 text-blue-600 bg-blue-50">
            <Layers className="w-4 h-4" /> Phasage & Maillage Vertical
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Une démonstration d'expertise en 4 vagues
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Le parcours a été conçu pour faire monter en compétence le lecteur sur l'ensemble de la chaîne de valeur (économique, réglementaire et technique).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              vague: "Vague 1",
              title: "L'Axe Économique",
              desc: "Du coût du kWh jusqu'à la déconstruction du modèle S21 et la structuration fiscale.",
              pages: ["prix-du-kwh", "rentabilite", "fiscalite", "tarif-s21-surplus"]
            },
            {
              vague: "Vague 2",
              title: "L'Axe Réglementaire",
              desc: "Du cadre légal général aux finesses des coefficients ex-ante et de la PMO.",
              pages: ["cadre-legal", "qui-peut-participer", "pmo", "cles-de-repartition", "coefficients-ex-ante"]
            },
            {
              vague: "Vague 3",
              title: "L'Axe Technique",
              desc: "Du profil de consommation au raccordement Enedis et à la maintenance O&M.",
              pages: ["profil-de-consommation", "dimensionnement", "raccordement-enedis", "taux-autoconsommation"]
            },
            {
              vague: "Vague 4",
              title: "Arbitrages Avancés",
              desc: "Gestion multi-producteurs en ZAE, stockage batterie et structures BTP.",
              pages: ["puissance-maximale", "stockage-batterie", "acc-multi-producteurs", "structures-fixation"]
            }
          ].map((v, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  {v.vague}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{v.desc}</p>
              </div>
              <div className="text-[11px] text-slate-400 font-mono pt-3 border-t border-slate-100">
                {v.pages.length} fiches spécialisées
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden border border-blue-800/50">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Prêt à lancer votre projet d'Autoconsommation Collective ?
            </h2>
            <p className="text-base md:text-xl text-blue-100 font-medium">
              De l'analyse de courbe de charge au montage de la PMO, Écologie Collective sécurise votre boucle énergétique locale.
            </p>
            <button 
              onClick={openModal}
              className="bg-[#CCFF00] text-slate-900 font-bold px-10 py-5 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 text-lg shadow-xl shadow-[#CCFF00]/10"
            >
              Demander une étude de faisabilité <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
