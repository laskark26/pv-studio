import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import Seo from '../components/Seo';

export default function Contact() {
  const { openModal } = useModal();

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez Écologie Collective pour étudier le potentiel solaire de votre site : 01 89 16 45 30 — contact@ecologiecollective.fr. Étude de faisabilité gratuite."
        canonicalPath="/contact"
      />
      <div className="p-3 md:p-5">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=3000&auto=format&fit=crop" 
              alt="Contact us" 
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/80"></div>
            
            {/* Huge Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
              Contact
            </div>
          </div>
          
          {/* Hero Section */}
          <section className="relative z-20 flex-1 flex items-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-flex border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md bg-white/10">
                Contactez-nous
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Parlons de votre projet solaire.
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed font-medium mb-8">
                Que vous soyez syndic, membre du conseil syndical ou copropriétaire, notre équipe est à votre disposition pour répondre à vos questions.
              </p>
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-[#CCFF00] text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base shadow-xl shadow-[#CCFF00]/10"
              >
                Demander une étude gratuite <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Téléphone</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Du lundi au vendredi<br />
              9h00 - 18h00
            </p>
            <a href="tel:0189164530" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
              01 89 16 45 30
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Pour toute question générale<br />
              ou demande d'information
            </p>
            <a href="mailto:contact@ecologiecollective.fr" className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors">
              contact@ecologiecollective.fr
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Siège social</h3>
            <p className="text-slate-500 mb-4 text-sm">
              Écologie Collective<br />
              10 rue de la République<br />
              69002 Lyon
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors">
              Voir sur la carte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
