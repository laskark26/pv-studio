import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const { openModal } = useModal();
  const location = useLocation();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLightPage = location.pathname.startsWith('/nos-projets/') || location.pathname.startsWith('/secteurs/');
  
  const textColor = !isScrolled && isLightPage ? 'text-slate-900' : 'text-white';
  const navColor = !isScrolled && isLightPage ? 'text-slate-600' : 'text-white/90';
  const logoColor = !isScrolled && isLightPage ? 'text-[#CCFF00] drop-shadow-md' : 'text-[#CCFF00]';
  const linkHoverColor = !isScrolled && isLightPage ? 'hover:text-slate-900' : 'hover:text-[#CCFF00]';

  return (
    <header 
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled 
          ? 'left-3 right-3 md:left-5 md:right-5 top-0 py-4 bg-blue-900/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 rounded-b-[2rem] md:rounded-b-[3rem] border-x border-b border-white/10' 
          : 'left-0 right-0 top-3 md:top-5 py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className={`flex items-center gap-2.5 ${textColor} group transition-colors duration-300`}>
          <Sun className={`w-8 h-8 ${logoColor} group-hover:rotate-45 transition-all duration-500`} strokeWidth={2.5} />
          <span className="font-bold text-xl tracking-tight">Écologie Collective</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${navColor} transition-colors duration-300`}>
          <Link to="/a-propos" className={`${linkHoverColor} transition-colors`}>À propos</Link>
          <Link to="/autoconsommation-collective" className={`${linkHoverColor} transition-colors`}>Comprendre l'ACC</Link>
          <Link to="/secteurs" className={`${linkHoverColor} transition-colors`}>Secteurs</Link>
          <Link to="/nos-projets" className={`${linkHoverColor} transition-colors`}>Nos projets</Link>
          <Link to="/contact" className={`${linkHoverColor} transition-colors`}>Contactez nous</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={openModal}
            className="hidden sm:flex bg-[#CCFF00] text-slate-900 text-sm font-bold px-6 py-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg items-center gap-2 shrink-0"
          >
            Demander une étude
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-full transition-colors ${
              isScrolled || !isLightPage ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 mx-4 bg-blue-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl text-white space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-base">
            <Link to="/a-propos" className="hover:text-[#CCFF00] transition-colors py-1">À propos</Link>
            <Link to="/autoconsommation-collective" className="hover:text-[#CCFF00] transition-colors py-1">Comprendre l'ACC</Link>
            <Link to="/secteurs" className="hover:text-[#CCFF00] transition-colors py-1">Secteurs</Link>
            <Link to="/nos-projets" className="hover:text-[#CCFF00] transition-colors py-1">Nos projets</Link>
            <Link to="/contact" className="hover:text-[#CCFF00] transition-colors py-1">Contactez nous</Link>
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button 
              onClick={() => { setMobileMenuOpen(false); openModal(); }}
              className="w-full bg-[#CCFF00] text-slate-900 text-sm font-bold py-3.5 rounded-full hover:bg-white transition-all text-center"
            >
              Demander une étude
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
