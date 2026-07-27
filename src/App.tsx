import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ComprendreACC from './pages/ComprendreACC';
import Footer from './components/Footer';
import Header from './components/Header';
import { ModalProvider } from './context/ModalContext';
import StudyModal from './components/StudyModal';

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F5F5F7] font-sans text-slate-900 selection:bg-[#CCFF00] selection:text-slate-900 pb-4">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/comprendre-acc" element={<ComprendreACC />} />
            <Route path="/nos-projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <StudyModal />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}
