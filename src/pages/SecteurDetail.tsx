import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { secteurs } from '../data/secteurs';
import { useModal } from '../context/ModalContext';

export default function SecteurDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useModal();
  
  const secteur = secteurs.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!secteur) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Secteur introuvable</h1>
        <p className="text-slate-600 mb-8">Le secteur que vous recherchez n'existe pas ou a été retiré.</p>
        <button onClick={() => navigate('/secteurs')} className="bg-blue-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
          Retour aux secteurs
        </button>
      </div>
    );
  }

  const Icon = secteur.icon;

  return (
    <div className="pt-24 pb-20">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link to="/secteurs" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour aux secteurs
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main info */}
          <div className="flex-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {secteur.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
              {secteur.shortDesc}
            </p>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {secteur.benefits.map((result, idx) => {
                const BenefitIcon = result.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <BenefitIcon className="w-6 h-6 text-blue-600 mb-3" />
                    <div className="text-2xl font-extrabold text-slate-900 mb-1">{result.value}</div>
                    <div className="text-sm font-medium text-slate-500">{result.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[500px] shrink-0">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <img src={secteur.image} alt={secteur.title} className="w-full h-full object-cover" />
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
                Le Contexte & Les Enjeux
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {secteur.context}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-sm">2</span>
                Notre Approche
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {secteur.solution}
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 rounded-[2rem] p-10 md:p-12 text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Un projet dans le secteur {secteur.title} ?</h3>
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
