import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Zap, Building2, Handshake, ArrowRight, ShieldCheck, Home, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useModal } from '../context/ModalContext';
import Seo from '../components/Seo';

// Fix import logic since ShieldCheck wasn't exported in data
import { Leaf } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useModal();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <Seo
          title="Projet introuvable"
          description="Le projet que vous recherchez n'existe pas ou a été retiré."
          canonicalPath="/nos-projets"
          noIndex
        />
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Projet introuvable</h1>
        <p className="text-slate-600 mb-8">Le projet que vous recherchez n'existe pas ou a été retiré.</p>
        <button onClick={() => navigate('/nos-projets')} className="bg-blue-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
          Retour aux projets
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <Seo
        title={`${project.name} — ${project.location}`}
        description={`Centrale photovoltaïque de ${project.power} kWc — ${project.segment}, ${project.location}. Modèle ${project.model}.`}
        canonicalPath={`/nos-projets/${project.id}`}
        image={project.image}
      />
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <ol className="inline-flex flex-wrap items-center gap-1 bg-slate-100 border border-slate-200/80 rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <li>
              <Link 
                to="/" 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-slate-600 hover:text-blue-900 hover:bg-white transition-all cursor-pointer hover:underline underline-offset-4 group"
                title="Retourner à l'accueil"
              >
                <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span>Accueil</span>
              </Link>
            </li>

            <li aria-hidden="true" className="text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <Link 
                to="/nos-projets" 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-slate-600 hover:text-blue-900 hover:bg-white transition-all cursor-pointer hover:underline underline-offset-4 group"
                title="Voir tous nos projets"
              >
                <Zap className="w-3.5 h-3.5 text-[#99cc00] group-hover:scale-110 transition-transform" />
                <span>Nos projets</span>
              </Link>
            </li>

            <li aria-hidden="true" className="text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <span 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-blue-900 font-bold bg-blue-50 border border-blue-200/60 truncate max-w-xs"
                aria-current="page"
                title={project.name}
              >
                <span className="truncate">{project.name}</span>
              </span>
            </li>
          </ol>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main info */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
              <Building2 className="w-3.5 h-3.5" />
              {project.segment}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {project.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-lg">{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Zap className="w-5 h-5 text-[#99cc00]" />
                <span className="font-medium text-lg">{project.power} kWc</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Handshake className="w-5 h-5 text-indigo-500" />
                <span className="font-medium text-lg">{project.model}</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((result, idx) => {
                const Icon = result.label === "Durée de vie garantie" ? ShieldCheck : result.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <Icon className="w-6 h-6 text-blue-600 mb-3" />
                    <div className="text-3xl font-extrabold text-slate-900 mb-1">{result.value}</div>
                    <div className="text-sm font-medium text-slate-500">{result.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[500px] shrink-0">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-lg flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${project.status === 'En service' ? 'bg-[#CCFF00]' : 'bg-amber-400'}`}></div>
                {project.status}
              </div>
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">1</span>
                Le Contexte & L'Enjeu
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.context}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-sm">2</span>
                Notre Solution
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 rounded-[2rem] p-10 md:p-12 text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Un projet similaire pour votre structure ?</h3>
              <p className="text-blue-100 text-lg">Nos ingénieurs sont à votre disposition pour analyser gratuitement le potentiel solaire de votre foncier.</p>
            </div>
            <button 
              onClick={openModal}
              className="relative z-10 w-full sm:w-auto bg-[#CCFF00] text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base shadow-xl shrink-0"
            >
              Demander une étude <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
