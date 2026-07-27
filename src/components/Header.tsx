import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const { openModal } = useModal();
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled 
          ? 'left-3 right-3 md:left-5 md:right-5 top-0 py-4 bg-blue-900/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 rounded-b-[2rem] md:rounded-b-[3rem] border-x border-b border-white/10' 
          : 'left-0 right-0 top-3 md:top-5 py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-white group">
          <Sun className="w-8 h-8 text-[#CCFF00] group-hover:rotate-45 transition-transform duration-500" strokeWidth={2.5} />
          <span className="font-bold text-xl tracking-tight">Écologie Collective</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link to="/a-propos" className="hover:text-[#CCFF00] transition-colors">À propos</Link>
          <Link to="/comprendre-acc" className="hover:text-[#CCFF00] transition-colors">Comprendre l'ACC</Link>
          <a href="/#secteurs" className="hover:text-[#CCFF00] transition-colors">Secteurs</a>
          <Link to="/nos-projets" className="hover:text-[#CCFF00] transition-colors">Nos projets</Link>
          <Link to="/contact" className="hover:text-[#CCFF00] transition-colors">Contactez nous</Link>
        </nav>
        <button 
          onClick={openModal}
          className="bg-[#CCFF00] text-slate-900 text-sm font-bold px-6 py-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 shrink-0"
        >
          Demander une étude
        </button>
      </div>
    </header>
  );
}
