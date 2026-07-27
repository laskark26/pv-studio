import React from 'react';
import { MapPin, Zap, ArrowRight, Building2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Seo from '../components/Seo';

export default function Projects() {
  return (
    <>
      <Seo
        title="Nos projets photovoltaïques"
        description="Nos réalisations en autoconsommation collective et tiers-investissement : centrales solaires en toiture et ombrières, du secteur hospitalier à l'industrie."
        canonicalPath="/nos-projets"
      />
      {/* Hero Section framed */}
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col min-h-[60vh] md:min-h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3000&auto=format&fit=crop" 
              alt="Projets d'autoconsommation" 
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/80"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Portfolio
            </div>
          </div>
          
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-flex border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                Nos Projets
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Ils ont franchi le pas de l'indépendance.
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                Découvrez nos réalisations sur tous les segments : santé, industrie, tertiaire, public et copropriété. Des centrales solaires optimisées en tiers-investissement ou clé en main.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Link to={`/nos-projets/${project.id}`} key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'En service' ? 'bg-[#CCFF00]' : project.status === 'En construction' ? 'bg-amber-400' : 'bg-blue-400'}`}></div>
                  {project.status}
                </div>
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start">
                  <Building2 className="w-3.5 h-3.5" />
                  {project.segment}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm font-medium">
                  <MapPin className="w-4 h-4" /> {project.location}
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Puissance</div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                      {project.power} kWc
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Modèle</div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                      <Handshake className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate" title={project.model}>{project.model}</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual affordance for clicking */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-blue-600 font-bold text-sm group-hover:text-blue-700 transition-colors">
                  Voir l'étude de cas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
