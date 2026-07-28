import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ComprendreACC from './pages/ComprendreACC';
import ACCArticleDetail from './components/ACCArticleDetail';
import Secteurs from './pages/Secteurs';
import SecteurDetail from './pages/SecteurDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import { ModalProvider } from './context/ModalContext';
import StudyModal from './components/StudyModal';
import SimulationModal from './components/SimulationModal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F5F5F7] font-sans text-slate-900 selection:bg-[#CCFF00] selection:text-slate-900 pb-4">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/autoconsommation-collective" element={<ComprendreACC />} />
            <Route path="/autoconsommation-collective/:slug" element={<ACCArticleDetail />} />
            <Route path="/comprendre-acc" element={<ComprendreACC />} />
            <Route path="/comprendre-acc/:slug" element={<ACCArticleDetail />} />
            <Route path="/nos-projets" element={<Projects />} />
            <Route path="/nos-projets/:id" element={<ProjectDetail />} />
            <Route path="/secteurs" element={<Secteurs />} />
            <Route path="/secteurs/:id" element={<SecteurDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <StudyModal />
          <SimulationModal />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}
