import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { secteurs } from '../data/secteurs';

export default function Secteurs() {
  return (
    <>
      {/* Hero Section framed */}
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col min-h-[50vh] md:min-h-[60vh]">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3000&auto=format&fit=crop" 
              alt="Architecture and sectors" 
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/90"></div>
            
            {/* Huge Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Secteurs
            </div>
          </div>
          
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                Nos Segments d'Intervention
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Des solutions solaires adaptées <span className="text-[#CCFF00]">à chaque métier.</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                Découvrez comment nous accompagnons les hôpitaux, les industriels, les collectivités, et les copropriétés vers l'indépendance énergétique.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secteurs.map(secteur => {
            const Icon = secteur.icon;
            return (
              <Link to={`/secteurs/${secteur.id}`} key={secteur.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="h-56 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={secteur.image} alt={secteur.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{secteur.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
                    {secteur.shortDesc}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-blue-600 font-bold text-sm group-hover:text-blue-700 transition-colors">
                    Découvrir notre approche <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
