import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ACC_ARTICLES, ACC_LEVELS, ACCArticle } from '../data/accArticles';
import { 
  ArrowLeft, ArrowRight, Calendar, Layers, ChevronDown, ChevronUp, 
  HelpCircle, BookOpen, AlertCircle, FileText, CheckCircle2, Share2, Sparkles, Network,
  Zap, Table, Clock, FileCheck, Calculator, Scale, ArrowDown, Activity, Check, ShieldCheck
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function ACCArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useModal();
  const [openAccordion, setOpenAccordion] = useState<boolean>(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const article = ACC_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Article non trouvé</h2>
        <p className="text-slate-600 mb-6">L'article recherché n'existe pas dans le hub de connaissances ACC.</p>
        <Link 
          to="/comprendre-acc" 
          className="bg-slate-900 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Retourner au Hub ACC
        </Link>
      </div>
    );
  }

  const currentLevelInfo = ACC_LEVELS.find(l => l.level === article.level);

  return (
    <div className="bg-[#F5F5F7] min-h-screen pb-20">
      {/* Top Banner & Header */}
      <div className="bg-slate-900 text-white pt-24 pb-12 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-blue-200/80 mb-6 font-medium">
            <Link to="/comprendre-acc" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1">
              <Network className="w-3.5 h-3.5" /> Hub ACC
            </Link>
            <span>/</span>
            <span className="text-slate-400">{article.levelLabel}</span>
            <span>/</span>
            <span className="text-[#CCFF00] font-semibold truncate max-w-xs">{article.h1}</span>
          </div>

          {/* DISPOSITIF 1 : BANDEAU DE SITUATION EN HAUT */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 mb-8 text-xs md:text-sm flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentLevelInfo?.badgeColorDark || 'bg-blue-500/20 text-blue-300 border-blue-500/40'}`}>
                Niveau : {article.levelLabel.split('·')[1]?.trim() || article.levelLabel} ({article.level})
              </span>

              {article.prerequisites.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 text-slate-300">
                  <span className="font-semibold text-slate-400">Prérequis :</span>
                  {article.prerequisites.map((req, idx) => (
                    <Link 
                      key={idx} 
                      to={`/comprendre-acc/${req.slug}`}
                      className="text-[#CCFF00] hover:underline font-medium flex items-center gap-1"
                    >
                      {req.title} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              ) : (
                <span className="text-slate-400 text-xs italic">
                  Aucun prérequis technique nécessaire
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-slate-400 shrink-0 text-xs font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Mis à jour le {article.lastUpdated}</span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {article.h1}
          </h1>

          <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-3xl">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-10">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Main Article Column */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* DISPOSITIF 2 : « L'ESSENTIEL » (3 PUCES AVANT TOUT LE RESTE) */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#CCFF00] shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#CCFF00] text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">L'essentiel en 30 secondes</h2>
              </div>
              <ul className="space-y-3">
                {article.essentiel.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm md:text-base leading-relaxed font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NIVEAU 1 : SCHÉMA / DIAGRAMME VISUEL (ZÉRO ÉQUATION) */}
            {article.schemaDiagram && (
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 md:p-8 border border-blue-800/60 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#CCFF00] text-slate-900 flex items-center justify-center font-bold">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#CCFF00]">Schéma explicatif visuel</span>
                    <h3 className="text-xl md:text-2xl font-bold">{article.schemaDiagram.title}</h3>
                  </div>
                </div>
                {article.schemaDiagram.subtitle && (
                  <p className="text-sm text-blue-200">{article.schemaDiagram.subtitle}</p>
                )}
                <div className="grid md:grid-cols-3 gap-4 pt-2">
                  {article.schemaDiagram.steps.map((st, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 relative flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-[#CCFF00] text-slate-900 font-extrabold flex items-center justify-center text-sm">
                          {st.number}
                        </span>
                        {st.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/30 text-blue-200 border border-blue-400/30 px-2 py-0.5 rounded-full">
                            {st.badge}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base mb-1">{st.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NIVEAU 2 : TABLEAU DE CRITÈRES D'ÉVALUATION */}
            {article.criteriaTable && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Table className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-emerald-600 font-bold">Grille d'évaluation & Tableau de critères</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{article.criteriaTable.title}</h3>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                      <tr>
                        {article.criteriaTable.headers.map((h, i) => (
                          <th key={i} className="p-3.5 border-b border-slate-800">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {article.criteriaTable.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          <td className="p-3.5 font-bold text-slate-900 bg-slate-50/80">{row.criterion}</td>
                          <td className="p-3.5 text-slate-700">{row.optionA}</td>
                          <td className="p-3.5 text-slate-700">{row.optionB}</td>
                          <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/60">{row.recommendation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* NIVEAU 2 : EXEMPLE CHIFFRÉ COMPLET */}
            {article.quantifiedExample && (
              <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 border border-emerald-700/50 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#CCFF00] text-slate-900 flex items-center justify-center font-bold">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#CCFF00]">Cas d'école · Exemple chiffré complet</span>
                    <h3 className="text-xl md:text-2xl font-bold">{article.quantifiedExample.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-emerald-100 leading-relaxed bg-white/10 p-4 rounded-2xl border border-white/10">
                  {article.quantifiedExample.context}
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {article.quantifiedExample.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-950/80 p-4 rounded-2xl border border-emerald-500/30 text-center space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">{m.label}</span>
                      <span className="text-xl md:text-2xl font-black text-[#CCFF00] block">{m.value}</span>
                      {m.detail && <span className="text-[10px] text-slate-400 block">{m.detail}</span>}
                    </div>
                  ))}
                </div>

                <div className="text-xs md:text-sm text-slate-200 leading-relaxed pt-2 border-t border-white/10 whitespace-pre-line">
                  {article.quantifiedExample.breakdown}
                </div>
              </div>
            )}

            {/* NIVEAU 3 : PROCÉDURE ÉTAPE PAR ÉTAPE (PIÈCES & DÉLAIS) */}
            {article.stepByStepProcedure && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-amber-600 font-bold">Feuille de route & Procédure administrative</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{article.stepByStepProcedure.title}</h3>
                  </div>
                </div>

                <div className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                  {article.stepByStepProcedure.steps.map((st, i) => (
                    <div key={i} className="relative pl-12 space-y-2">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-slate-900 text-[#CCFF00] font-black flex items-center justify-center text-sm border-4 border-white shadow-md">
                        {st.stepNumber}
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-bold text-slate-900 text-base">{st.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Délai : {st.delay}
                            </span>
                            <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                              {st.responsibleParty}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                          {st.desc}
                        </p>

                        {st.requiredDocs.length > 0 && (
                          <div className="pt-2 border-t border-slate-200/80">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                              <FileCheck className="w-3.5 h-3.5 text-amber-600" /> Pièces & Justificatifs requis :
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {st.requiredDocs.map((doc, dIdx) => (
                                <span key={dIdx} className="text-xs bg-white text-slate-800 font-medium px-2.5 py-1 rounded-lg border border-slate-300">
                                  📄 {doc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NIVEAU 4 : MODÈLE ET CALCUL REPRODUCTIBLE */}
            {article.reproducibleModel && (
              <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-8 border border-purple-500/40 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold border border-purple-500/40">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-purple-400">Modélisation mathématique & Calcul reproductible</span>
                    <h3 className="text-xl md:text-2xl font-bold">{article.reproducibleModel.title}</h3>
                  </div>
                </div>

                {/* Formula display */}
                <div className="bg-slate-900 p-5 rounded-2xl border border-purple-500/30 font-mono text-xs md:text-sm text-[#CCFF00] overflow-x-auto">
                  <span className="text-slate-400 text-[10px] block uppercase font-sans font-bold mb-1">Formule mathématique de référence :</span>
                  {article.reproducibleModel.formulaOrMethod}
                </div>

                {/* Variables Legend */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">Légende des variables d'entrée :</h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    {article.reproducibleModel.variables.map((v, i) => (
                      <div key={i} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-start justify-between gap-2">
                        <div>
                          <span className="font-mono font-bold text-white">{v.name}</span> <span className="text-slate-400 text-[10px]">({v.unit})</span>
                          <p className="text-slate-300 text-[11px]">{v.description}</p>
                        </div>
                        <span className="font-mono text-[#CCFF00] text-xs bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                          {v.sampleValue}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step by step worked calculation */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">Déroulé étape par étape du calcul :</h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    {article.reproducibleModel.stepByStepCalculation.map((stepStr, i) => (
                      <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono leading-relaxed">
                        <span className="text-purple-400 font-bold mr-2">Étape {i + 1}:</span>
                        {stepStr}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-purple-950/60 p-4 rounded-2xl border border-purple-500/50 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-purple-200">Résultat issu du modèle :</span>
                  <span className="text-lg md:text-xl font-black text-[#CCFF00] font-mono">{article.reproducibleModel.outcome}</span>
                </div>
              </div>
            )}

            {/* NIVEAU 4 : POSITION ARGUMENTÉE / ARBITRAGE TECHNIQUE */}
            {article.argumentedPosition && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-purple-600 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-purple-600 font-bold">Position d'expert & Arbitrage technique</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{article.argumentedPosition.title}</h3>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Le débat technique :</span>
                  <p className="text-sm font-semibold text-slate-800">{article.argumentedPosition.debate}</p>
                </div>

                <div className="bg-purple-50 p-5 rounded-2xl border border-purple-200 space-y-2">
                  <span className="text-xs font-extrabold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-purple-600" /> Notre position recommandée :
                  </span>
                  <p className="text-base font-bold text-purple-950 leading-relaxed">
                    {article.argumentedPosition.ourPosition}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Arguments clés à l'appui :</span>
                  <ul className="space-y-2">
                    {article.argumentedPosition.keyArguments.map((arg, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{arg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-2xl text-xs leading-relaxed space-y-1">
                  <span className="font-bold text-[#CCFF00] uppercase tracking-wider block text-[11px]">Réponse aux contre-arguments classiques :</span>
                  <p className="text-slate-300">{article.argumentedPosition.counterArgumentsAnswered}</p>
                </div>
              </div>
            )}

            {/* DISPOSITIF 3 : CORPS EN PROFONDEUR CROISSANTE */}
            <div className="space-y-10">
              {article.contentSections.map((section, idx) => (
                <section key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    {section.h2}
                  </h2>

                  <div className="text-slate-700 text-base md:text-lg leading-relaxed space-y-4 font-normal">
                    {section.body.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Concrete Example Box */}
                  {section.exampleBox && (
                    <div className="bg-blue-50/80 rounded-2xl p-5 border border-blue-100 space-y-2">
                      <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        {section.exampleBox.title}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {section.exampleBox.content}
                      </p>
                    </div>
                  )}

                  {/* DISPOSITIF 4 : ENCADRÉS « LE DÉTAIL RÉGLEMENTAIRE », REPLIÉS PAR DÉFAUT */}
                  {section.regulatoryNote && (
                    <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-50/80">
                      <button
                        onClick={() => setOpenAccordion(!openAccordion)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-100 transition-colors text-sm"
                      >
                        <div className="flex items-center gap-2 text-slate-800">
                          <AlertCircle className="w-4 h-4 text-blue-600" />
                          <span>{section.regulatoryNote.title}</span>
                          {section.regulatoryNote.decreeRef && (
                            <span className="text-xs bg-slate-200 text-slate-700 font-mono px-2 py-0.5 rounded">
                              {section.regulatoryNote.decreeRef}
                            </span>
                          )}
                        </div>
                        {openAccordion ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                      </button>

                      {openAccordion && (
                        <div className="p-4 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                          {section.regulatoryNote.content}
                        </div>
                      )}
                    </div>
                  )}

                  {/* DISPOSITIF 6 : « POUR ALLER PLUS LOIN » EN FIN DE SECTION */}
                  {section.linkToMore && (
                    <div className="pt-2 border-t border-slate-100">
                      <Link 
                        to={`/comprendre-acc/${section.linkToMore.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <span>Pour aller plus loin : {section.linkToMore.label}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* DISPOSITIF 5 : GLOSSAIRE À L'USAGE */}
            {article.glossaryTerms && article.glossaryTerms.length > 0 && (
              <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800">
                <h3 className="text-lg font-bold text-[#CCFF00] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Termes clés développés dans cet article
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {article.glossaryTerms.map((term, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 text-xs space-y-1">
                      <span className="font-bold text-white font-mono text-sm">{term.term}</span>
                      <p className="text-slate-300 leading-snug">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MAILLAGE INTERNE ET LIENS DE FIN D'ARTICLE */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Maillage & Navigation recommandée
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {article.relatedLinks.map((link, idx) => (
                  <Link 
                    key={idx}
                    to={`/comprendre-acc/${link.slug}`}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-[#CCFF00] hover:bg-slate-50 transition-all group flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        link.relationType === 'montée' ? 'bg-purple-100 text-purple-700' :
                        link.relationType === 'rattrapage' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {link.relationType === 'montée' ? 'Niveau supérieur ↑' : link.relationType === 'rattrapage' ? 'Prérequis ↓' : 'Sujet proche →'}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Niveau {link.level}</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-blue-600 text-sm leading-snug">
                      {link.title}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-blue-600 font-bold">
                      Consulter la fiche <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA bottom */}
            <div className="bg-[#CCFF00] rounded-3xl p-8 md:p-10 text-slate-900 space-y-4 text-center relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Une question technique sur votre étude ACC ?
              </h3>
              <p className="text-slate-800 text-base font-medium max-w-xl mx-auto">
                Nos ingénieurs modélisent votre courbe de charge au pas 30 minutes et simulent votre boucle d'autoconsommation collective.
              </p>
              <button 
                onClick={openModal}
                className="bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all inline-flex items-center gap-2 text-base"
              >
                Demander une étude de faisabilité <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </main>

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" /> Sommaire du document
                </h3>
                <nav className="space-y-2 text-xs md:text-sm">
                  {article.contentSections.map((sec, idx) => (
                    <a 
                      key={idx} 
                      href={`#section-${idx}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelectorAll('h2')[idx + 1];
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg transition-colors leading-snug font-medium"
                    >
                      {sec.h2}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Levels Checklist */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4 text-xs">
                <h4 className="font-bold text-[#CCFF00] uppercase tracking-wider text-xs">
                  Parcours progressif ACC
                </h4>
                <div className="space-y-3">
                  {ACC_LEVELS.map((lvl) => (
                    <div 
                      key={lvl.level} 
                      className={`p-3 rounded-xl border ${
                        article.level === lvl.level 
                          ? 'bg-slate-800 border-[#CCFF00] text-white' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="font-bold text-sm mb-1">{lvl.title}</div>
                      <div className="text-[11px] leading-tight text-slate-300">{lvl.question}</div>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/comprendre-acc" 
                  className="block text-center text-[#CCFF00] hover:underline font-bold text-xs pt-2"
                >
                  Voir tous les 28 articles du Hub →
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
