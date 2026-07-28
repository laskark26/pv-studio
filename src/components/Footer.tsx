import React from 'react';
import { Sun, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openSimulationModal, openModal } = useModal();

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-12 rounded-t-[3rem] px-6 md:px-12 mt-12 mx-3 md:mx-5 relative overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/[0.03] whitespace-nowrap pointer-events-none w-full text-center tracking-tighter">
        ÉCOLOGIE COLLECTIVE
      </div>

      {/* Top Banner Call-to-Action for Simulation */}
      <div className="max-w-7xl mx-auto relative z-10 mb-16 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Modèle Tiers-Investisseur 0€ CAPEX
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Simulez le potentiel solaire et l'économie d'énergie de votre site
          </h3>
          <p className="text-slate-400 text-sm max-w-xl">
            Évaluez en 2 minutes la puissance installable, vos économies sur la facture électrique et le tarif préférentiel garanti.
          </p>
        </div>
        <button
          onClick={openSimulationModal}
          className="bg-[#CCFF00] text-slate-900 font-extrabold px-6 py-3.5 rounded-2xl hover:bg-[#b3e600] transition-all flex items-center gap-2 shadow-lg shrink-0 text-sm md:text-base group"
        >
          <Calculator className="w-5 h-5" />
          Simulateur ACC Tiers-Invest
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-white/10 pb-12">
        <div className="col-span-2 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sun className="w-6 h-6 text-[#CCFF00]" />
            Écologie Collective
          </h3>
          <p className="text-slate-400 max-w-sm mb-6 text-sm">
            Opérateur de transition énergétique dédié aux centrales photovoltaïques en autoconsommation collective et PPA.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-sm font-semibold">IN</button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-sm font-semibold">X</button>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Outils & Simulateur</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <button 
                onClick={openSimulationModal}
                className="text-left font-bold text-[#CCFF00] hover:underline flex items-center gap-1.5 transition-colors group"
              >
                <Calculator className="w-4 h-4 shrink-0" />
                <span>Simulateur ACC Tiers-Invest</span>
              </button>
            </li>
            <li>
              <button 
                onClick={openModal}
                className="text-left hover:text-white transition-colors"
              >
                Étude de faisabilité
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Entreprise</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
            <li><Link to="/autoconsommation-collective" className="hover:text-white transition-colors">Comprendre l'ACC</Link></li>
            <li><Link to="/secteurs" className="hover:text-white transition-colors">Secteurs</Link></li>
            <li><Link to="/nos-projets" className="hover:text-white transition-colors">Nos projets</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Légal</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <div>© 2026 Écologie Collective. Tous droits réservés.</div>
        <div className="text-xs font-mono">FRANCE</div>
      </div>
    </footer>
  );
}
