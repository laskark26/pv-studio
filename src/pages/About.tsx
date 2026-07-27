import React from 'react';
import Header from '../components/Header';
import { Target, Users, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=3000&auto=format&fit=crop" 
              alt="Team and solar" 
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/80"></div>
            
            {/* Huge Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Notre Vision
            </div>
          </div>
          
          {/* Hero Section */}
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-flex border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                Qui sommes-nous
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Accélérer la transition énergétique des copropriétés.
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                Écologie Collective est née d'une conviction : l'autoconsommation collective est le levier le plus puissant pour décarboner l'habitat partagé tout en redonnant du pouvoir d'achat aux résidents.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Notre Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Démocratiser l'accès à l'énergie solaire pour les copropriétés en levant les freins techniques, juridiques et financiers. Nous transformons les toits inexploités en centrales de production locales.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Notre Équipe</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Une alliance d'ingénieurs spécialisés en génie électrique, d'experts juridiques en droit de l'énergie et de spécialistes du financement de la rénovation globale.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Nos Engagements</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Indépendance totale vis-à-vis des installateurs et fournisseurs, transparence absolue sur la rentabilité des projets, et un accompagnement sur le long terme de l'exploitation.
            </p>
          </div>
        </div>
      </section>

      {/* Story / Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2rem] overflow-hidden bg-slate-200 aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
              alt="L'équipe au travail" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Une expertise pointue au service du collectif.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                Historiquement, équiper une copropriété en panneaux solaires relevait du parcours du combattant. Les réglementations complexes et la difficulté de répartir l'énergie entre les résidents bloquaient 90% des projets.
              </p>
              <p>
                Avec l'évolution du cadre légal de l'Autoconsommation Collective (ACC), une opportunité historique s'est ouverte. Écologie Collective a été fondée pour s'engouffrer dans cette brèche en proposant un modèle clé-en-main.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être le partenaire de confiance de dizaines de syndics et conseils syndicaux, construisant avec eux le réseau énergétique décentralisé de demain.
              </p>
            </div>
            
            <Link to="/" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Découvrir notre méthodologie <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
