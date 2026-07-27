import React from 'react';
import { Network, Zap, Users, ShieldCheck, FileText, ArrowRight, Activity, Scale, Map, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function ComprendreACC() {
  const { openModal } = useModal();

  return (
    <>
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col min-h-[60vh] md:min-h-[70vh]">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=3000&auto=format&fit=crop" 
              alt="Grid network" 
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/90"></div>
            
            {/* Huge Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Comprendre
            </div>
          </div>
          
          {/* Hero Section */}
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                <Network className="w-4 h-4" /> Autoconsommation Collective (ACC)
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Le réseau énergétique de demain, <span className="text-[#CCFF00]">déployé aujourd'hui.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed font-medium mb-10 max-w-3xl">
                L'autoconsommation collective permet de partager l'électricité produite localement entre plusieurs consommateurs proches. Une révolution réglementaire et technologique qui redessine notre rapport à l'énergie.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#principe"
                  className="bg-[#CCFF00] text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base shadow-xl shadow-[#CCFF00]/10"
                >
                  Découvrir le fonctionnement <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Le Principe */}
      <section id="principe" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Le principe fondamental :<br/>Un partage virtuel via le réseau public
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Contrairement à une installation classique où un bâtiment consomme uniquement sa propre production (autoconsommation individuelle), l'ACC introduit la notion de <strong className="text-slate-900">boucle énergétique locale</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              L'électricité produite (par exemple via des panneaux photovoltaïques sur le toit d'une usine ou d'un hôpital) est injectée sur le réseau public Enedis. Elle est ensuite répartie virtuellement et facturée aux différents consommateurs participant à l'opération (bâtiments voisins, logements, etc.) en fonction de clés de répartition prédéfinies.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Pas de câblage privé", desc: "L'opération utilise l'infrastructure existante (le réseau public de distribution)." },
                { title: "Comptage intelligent", desc: "Les compteurs communicants (Linky, PME-PMI) mesurent précisément les flux au pas de 30 minutes." },
                { title: "Traçabilité garantie", desc: "La distribution virtuelle est certifiée et encadrée par le gestionnaire de réseau (Enedis)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-[#CCFF00]/20 rounded-[3rem] blur-3xl opacity-50"></div>
            <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-8 text-center">Architecture de la boucle</h3>
              
              <div className="flex flex-col gap-6 relative">
                {/* Ligne réseau virtuel */}
                <div className="absolute left-[39px] top-12 bottom-12 w-0.5 bg-dashed border-l-2 border-white/20 border-dashed"></div>

                {/* Producteur */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#CCFF00] flex items-center justify-center shrink-0 shadow-lg shadow-[#CCFF00]/20">
                    <Zap className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex-1">
                    <div className="text-white font-bold text-lg">Producteur(s)</div>
                    <div className="text-blue-200 text-sm">Toitures solaires, ombrières</div>
                  </div>
                </div>

                {/* Réseau Public */}
                <div className="flex items-center gap-6 relative z-10 pl-2">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border-4 border-slate-900">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-blue-600/20 rounded-2xl p-4 border border-blue-500/30 flex-1">
                    <div className="text-white font-bold">Réseau public (Enedis)</div>
                    <div className="text-blue-200 text-xs mt-1">Comptage Linky au pas 30 min</div>
                  </div>
                </div>

                {/* Consommateurs */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex-1">
                    <div className="text-white font-bold text-lg">Consommateurs</div>
                    <div className="text-blue-200 text-sm">Copropriétés, entreprises, public</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cadre Réglementaire & PMO */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              L'organisation juridique : La PMO
            </h2>
            <p className="text-lg text-slate-600">
              L'autoconsommation collective exige une structure pour lier les participants. C'est le rôle de la <strong className="text-slate-900">Personne Morale Organisatrice (PMO)</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Statut juridique flexible</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                La PMO peut prendre différentes formes selon le projet : syndicat des copropriétaires, association, coopérative, bailleur social, ou SAS. Elle est le point de contact unique avec Enedis.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Clés de répartition</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                La PMO définit comment l'énergie est partagée. Les clés de répartition peuvent être <strong className="text-slate-900">statiques</strong> (pourcentage fixe par participant) ou <strong className="text-slate-900">dynamiques</strong> (au prorata de la consommation instantanée).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Map className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Périmètre réglementaire</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                La loi limite la distance entre les participants : <strong className="text-slate-900">2 km</strong> en règle générale, extensible à <strong className="text-slate-900">20 km</strong> en zone rurale sur dérogation ministérielle. Puissance max : 3 MWc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Pourquoi choisir l'Autoconsommation Collective ?
            </h2>
          </div>
          <div className="flex-1 text-slate-600 text-lg">
            Au-delà de l'impact écologique évident, l'ACC répond à des enjeux économiques majeurs pour les acteurs privés et publics.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-[2rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors"></div>
            <ShieldCheck className="w-12 h-12 text-[#CCFF00] mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Bouclier Tarifaire Long Terme</h3>
            <p className="text-blue-100 relative z-10 leading-relaxed">
              En fixant le prix de l'électricité produite localement via un contrat long terme (PPA), vous désensibilisez une part importante de votre facture face à l'hyper-volatilité des marchés de l'énergie.
            </p>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-colors"></div>
            <Activity className="w-12 h-12 text-[#CCFF00] mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Optimisation des Toitures</h3>
            <p className="text-blue-100 relative z-10 leading-relaxed">
              Même si votre bâtiment consomme peu (ex: école en été), l'ACC permet de rentabiliser une grande toiture en vendant ou partageant le surplus avec des voisins gros consommateurs estivaux (ex: supermarché, EHPAD).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#CCFF00] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Abstract graphic */}
          <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-white/20 rounded-full blur-sm"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Prêt à créer votre propre boucle énergétique locale ?
            </h2>
            <p className="text-xl text-slate-800 mb-10 font-medium">
              Nos experts vous accompagnent du dimensionnement technique jusqu'à la création et la gestion de la PMO.
            </p>
            <button 
              onClick={openModal}
              className="bg-slate-900 text-white font-bold px-10 py-5 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 text-lg shadow-xl shadow-slate-900/20"
            >
              Demander une étude de faisabilité <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
