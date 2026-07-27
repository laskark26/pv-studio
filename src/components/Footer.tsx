import React from 'react';
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 rounded-t-[3rem] px-6 md:px-12 mt-12 mx-3 md:mx-5 relative overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/[0.03] whitespace-nowrap pointer-events-none w-full text-center tracking-tighter">
        ÉCOLOGIE COLLECTIVE
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-2 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sun className="w-6 h-6 text-[#CCFF00]" />
            Écologie Collective
          </h3>
          <p className="text-slate-400 max-w-sm mb-6">
            L'opérateur de rénovation énergétique dédié à l'autoconsommation collective en copropriété.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">IN</button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">X</button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Entreprise</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
            <li><Link to="/comprendre-acc" className="hover:text-white transition-colors">Comprendre l'ACC</Link></li>
            <li><Link to="/nos-projets" className="hover:text-white transition-colors">Nos projets</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Légal</h4>
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
