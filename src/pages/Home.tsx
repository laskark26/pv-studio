import React from 'react';
import { ArrowRight, Calculator, Phone, Zap, Sun, Shield, Leaf, BarChart3, ChevronRight, CheckCircle2, Building2, Factory, Stethoscope, Landmark, Sprout, Briefcase, Handshake, PenTool } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Seo from '../components/Seo';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <Seo
        title="Écologie Collective — Autoconsommation collective et PPA on-site"
        description="Opérateur de transition énergétique. Nous concevons, finançons et exploitons des centrales photovoltaïques en autoconsommation collective et en PPA on-site, sans investissement initial."
        canonicalPath="/"
      />
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[90vh] bg-slate-900 flex flex-col">
          {/* Background Image with Slate Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=3000&auto=format&fit=crop" 
              alt="Centrales photovoltaïques sur toit" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
            
            {/* Huge Watermark Text */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 whitespace-nowrap pointer-events-none"
            >
              Écologie
            </motion.div>
          </div>

          {/* Hero Content */}
          <main className="relative z-20 flex-1 flex items-center px-6 md:px-12 pb-24 md:pb-0 pt-24 md:pt-32">
            <motion.div 
              className="max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-white mb-6 tracking-tight">
                L'énergie la moins chère <br />
                est la plus proche.
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
                Opérateur de transition énergétique. Nous concevons, finançons et exploitons des centrales photovoltaïques en autoconsommation collective et en PPA on-site.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={openModal}
                  className="w-full sm:w-auto bg-[#CCFF00] text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base shadow-xl shadow-[#CCFF00]/10"
                >
                  Initier une étude <ArrowRight className="w-5 h-5" />
                </button>
                <Link to="/nos-projets" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 text-base">
                  Voir nos références <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="hidden lg:flex absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-5 shadow-2xl items-center gap-5"
            >
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" alt="User" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm font-medium text-slate-300">Projets de transition engagés<br/>en région Auvergne-Rhône-Alpes</div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Secteurs Section */}
      <section id="secteurs" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-blue-600">
              Nos Segments d'Intervention
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Des solutions solaires pour chaque profil de consommation
            </h2>
          </div>
          <p className="text-slate-600 text-lg mt-6 md:mt-0 max-w-md">
            Nous ciblons particulièrement les sites à forte consommation diurne pour maximiser le taux d'autoconsommation et la rentabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: "sante", icon: Stethoscope, title: "Santé & Médico-social", desc: "Hôpitaux, cliniques, EHPAD. Consommation continue et diurne idéale pour le solaire." },
            { id: "collectivites", icon: Landmark, title: "Collectivités", desc: "Bâtiments publics, écoles, centres sportifs. Exemplarité et maîtrise du budget public." },
            { id: "tertiaire", icon: Building2, title: "Tertiaire & Foncières", desc: "Bureaux, centres commerciaux. Valorisation des actifs et décret tertiaire." },
            { id: "industrie", icon: Factory, title: "Industrie & Logistique", desc: "Grandes toitures exploitables et consommation intensive pour un ROI rapide." },
            { id: "agriculture", icon: Sprout, title: "Agriculture", desc: "Hangars agricoles, serres. Synergie entre exploitation et production d'énergie." },
            { id: "coproprietes", icon: Briefcase, title: "Copropriétés", desc: "Autoconsommation collective pour réduire les charges des parties communes." }
          ].map((item, idx) => (
            <Link key={idx} to={`/secteurs/${item.id}`} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-900 text-white group-hover:bg-[#CCFF00] group-hover:text-slate-900 transition-colors">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>En savoir plus</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modèles d'affaires */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Concrétisez votre transition,<br />sans contrainte
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Nous adaptons notre modèle d'accompagnement à votre stratégie financière et vos capacités d'investissement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tiers Investissement */}
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 text-[#CCFF00] font-bold px-4 py-2 rounded-full text-sm mb-8">
                <Handshake className="w-4 h-4" /> Modèle phare
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Tiers-Investissement</h3>
              <div className="text-5xl font-extrabold text-white mb-6">
                0€ <span className="text-xl text-blue-200 font-normal">de CAPEX</span>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Nous finançons, concevons et exploitons la centrale photovoltaïque sur votre toiture. Vous bénéficiez d'une énergie verte locale à un tarif compétitif et garanti sur le long terme (PPA), inférieur au prix du réseau.
              </p>
              <ul className="space-y-4">
                {['Aucun investissement initial', 'Risque technique et financier pris en charge', 'Délégation totale de l\'exploitation', 'Économies immédiates sur la facture'].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0" /> {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clé en main */}
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-4 py-2 rounded-full text-sm mb-8">
                <PenTool className="w-4 h-4" /> Solution EPC
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Clé en main</h3>
              <div className="text-5xl font-extrabold text-white mb-6">
                100% <span className="text-xl text-blue-200 font-normal">Propriétaire</span>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Vous portez l'investissement de la centrale. Nous agissons en tant que contractant général pour la conception, la construction et la mise en service, puis nous assurons l'exploitation-maintenance (O&M).
              </p>
              <ul className="space-y-4">
                {['Maximisation de la rentabilité de l\'actif', 'Pleine propriété de l\'infrastructure', 'Garanties de performance', 'Contrat de maintenance préventive/curative'].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0" /> {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="comprendre" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="inline-flex border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-blue-600">
            Pourquoi l'ACC ?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Conçu pour un avenir énergétique intelligent
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Réduction immédiate", desc: "Diminuez vos coûts énergétiques dès la première année grâce à une production locale optimisée.", color: "text-amber-500", bgIcon: "bg-amber-50", numberColor: "text-amber-50 group-hover:text-amber-100" },
            { icon: Leaf, title: "Décarbonation", desc: "Atteignez vos objectifs RSE et décret tertiaire avec une énergie propre et renouvelable.", color: "text-emerald-500", bgIcon: "bg-emerald-50", numberColor: "text-emerald-50 group-hover:text-emerald-100" },
            { icon: Shield, title: "Maîtrise totale", desc: "Gagnez en visibilité et sécurisez vos approvisionnements face à la volatilité des prix du marché.", color: "text-blue-500", bgIcon: "bg-blue-50", numberColor: "text-blue-50 group-hover:text-blue-100" },
            { icon: BarChart3, title: "Valorisation", desc: "Une infrastructure solaire augmente la valeur verte et l'attractivité de votre patrimoine immobilier.", color: "text-indigo-500", bgIcon: "bg-indigo-50", numberColor: "text-indigo-50 group-hover:text-indigo-100" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-slate-100">
              <div className={`absolute top-4 right-6 text-7xl font-bold transition-colors ${item.numberColor}`}>
                0{idx + 1}
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${item.bgIcon} ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section (Image Background Timeline) */}
      <section id="methodologie" className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="inline-flex border border-slate-300 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-slate-500">
            Notre Méthode
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            De la consultation à l'énergie propre
          </h2>
          <p className="text-slate-600">Nous gérons l'intégralité du projet, de l'étude préliminaire à la mise en service.</p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden bg-blue-900 p-8 md:p-12 lg:p-16">
          <img 
            src="https://images.unsplash.com/photo-1588508065123-287b28e0132b?q=80&w=2000&auto=format&fit=crop" 
            alt="Installation de panneaux solaires" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Audit et ingénierie',
                desc: 'Analyse de la toiture, recueil des courbes de charge via Enedis, et modélisation du productible.'
              },
              {
                step: '02',
                title: 'Montage & Financement',
                desc: 'Modélisation financière, montage juridique sur-mesure (PMO, PPA) et sécurisation du financement.'
              },
              {
                step: '03',
                title: 'Déploiement',
                desc: 'Coordination des travaux RGE, démarches administratives et paramétrage de la boucle.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white relative hover:bg-white/10 transition-colors">
                {idx !== 2 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 border-t-2 border-white/30 border-dashed"></div>
                )}
                <div className="text-5xl font-extrabold mb-4 opacity-40 text-[#CCFF00]">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data Section */}
      <section id="donnees" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="inline-flex border border-slate-300 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-slate-500">
            Analyse Type
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Observez votre potentiel instantanément
          </h2>
          <p className="text-slate-600 mt-4">
            Projection standard pour un bâtiment tertiaire (toiture 300 m²) en région lyonnaise.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-8 py-6 font-bold text-sm text-slate-900 uppercase tracking-wider">Indicateur technique</th>
                  <th className="px-8 py-6 font-bold text-sm text-slate-900 uppercase tracking-wider">Description</th>
                  <th className="px-8 py-6 font-bold text-sm text-slate-900 uppercase tracking-wider text-right">Valeur estimée</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">Puissance installée</td>
                  <td className="px-8 py-6 text-slate-500">Capacité crête de la centrale photovoltaïque en toiture.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-medium text-lg text-slate-900">36.00</span>
                    <span className="font-mono text-slate-400 ml-2">kWc</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">Production annuelle</td>
                  <td className="px-8 py-6 text-slate-500">Volume d'électricité produit injecté dans la boucle locale.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-medium text-lg text-slate-900">41 500</span>
                    <span className="font-mono text-slate-400 ml-2">kWh/an</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors bg-blue-50/30">
                  <td className="px-8 py-6 font-bold text-blue-900">Taux d'autoconsommation</td>
                  <td className="px-8 py-6 text-slate-600">Part de la production consommée simultanément par les résidents.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-bold text-2xl text-blue-600">92.5</span>
                    <span className="font-mono text-slate-400 ml-2">%</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">Taux de couverture</td>
                  <td className="px-8 py-6 text-slate-500">Part des besoins électriques de la copropriété couverte.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-medium text-lg text-slate-900">28.4</span>
                    <span className="font-mono text-slate-400 ml-2">%</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">Économie générée</td>
                  <td className="px-8 py-6 text-slate-500">Réduction cumulée estimée sur les factures (Année 1).</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-medium text-lg text-slate-900">8 750</span>
                    <span className="font-mono text-slate-400 ml-2">€/an</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-900">Investissement net</td>
                  <td className="px-8 py-6 text-slate-500">Coût total des travaux déduction faite des primes.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-medium text-lg text-slate-900">48 200</span>
                    <span className="font-mono text-slate-400 ml-2">€ TTC</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors bg-[#CCFF00]/10">
                  <td className="px-8 py-6 font-bold text-slate-900">Temps de Retour sur Investissement</td>
                  <td className="px-8 py-6 text-slate-600">En considérant une inflation énergétique de 3%/an.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-mono font-bold text-2xl text-slate-900">6.2</span>
                    <span className="font-mono text-slate-500 ml-2">années</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex items-start gap-3 text-sm text-slate-500">
            <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
            <p>
              Modèle d'investissement "Clé en main". Les calculs intègrent les frais de gestion, la maintenance annuelle et le TURPE. Données indicatives valant pré-étude de faisabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-12">
        <div className="bg-blue-900 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden shadow-2xl">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CCFF00]/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Des plans transparents.<br />
              Aucune surprise.
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-md">
              Demandez une étude gratuite de votre toiture. Nos experts analyseront les données d'ensoleillement et de consommation pour vous proposer le meilleur scénario.
            </p>
            <div className="space-y-6 font-mono text-white/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group hover:border-[#CCFF00]/50 transition-colors">
                  <Phone className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <span className="text-lg">01 89 16 45 30</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group hover:border-[#CCFF00]/50 transition-colors">
                  <Calculator className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <span className="text-lg">contact@ecologiecollective.fr</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 relative z-10 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Demande d'étude</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nom et Prénom</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" placeholder="Jean Dupont" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Fonction</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-700">
                  <option>Dirigeant / Décideur</option>
                  <option>Directeur RSE / Énergie</option>
                  <option>Gestionnaire de parc / Facility Manager</option>
                  <option>Représentant Copropriété / Syndic</option>
                  <option>Élu / Collectivité</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Adresse du site à équiper</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" placeholder="123 rue de la République..." />
              </div>
              <button 
                type="button" 
                onClick={openModal}
                className="w-full bg-[#CCFF00] text-slate-900 font-bold px-6 py-4 rounded-xl mt-8 hover:bg-[#b3e600] transition-all flex items-center justify-center gap-2"
              >
                Accéder au formulaire complet <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
