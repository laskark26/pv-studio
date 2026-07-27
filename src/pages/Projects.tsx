import React from 'react';
import { MapPin, Zap, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Les Terrasses du Parc",
      location: "Lyon 6ème (69)",
      power: "36",
      units: "54",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      status: "En service"
    },
    {
      id: 2,
      name: "Résidence Lumière",
      location: "Villeurbanne (69)",
      power: "42",
      units: "78",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2000&auto=format&fit=crop",
      status: "En construction"
    },
    {
      id: 3,
      name: "Le Jardin d'Hiver",
      location: "Annecy (74)",
      power: "24",
      units: "32",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
      status: "En service"
    },
    {
      id: 4,
      name: "Eco-Quartier Confluence",
      location: "Lyon 2ème (69)",
      power: "64",
      units: "112",
      image: "https://images.unsplash.com/photo-1518481612222-68bab8282f5c?q=80&w=2000&auto=format&fit=crop",
      status: "En étude"
    },
    {
      id: 5,
      name: "Domaine des Alpes",
      location: "Grenoble (38)",
      power: "85",
      units: "145",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000&auto=format&fit=crop",
      status: "En construction"
    },
    {
      id: 6,
      name: "Villa Nova",
      location: "Bron (69)",
      power: "18",
      units: "24",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000&auto=format&fit=crop",
      status: "En service"
    }
  ];

  return (
    <>
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
                Découvrez nos réalisations en copropriété. Des installations solaires optimisées, intégrées harmonieusement, pour une énergie locale et partagée.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'En service' ? 'bg-[#CCFF00]' : project.status === 'En construction' ? 'bg-amber-400' : 'bg-blue-400'}`}></div>
                  {project.status}
                </div>
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm font-medium">
                  <MapPin className="w-4 h-4" /> {project.location}
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Puissance</div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Zap className="w-4 h-4 text-blue-600" />
                      {project.power} kWc
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Logements</div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Building className="w-4 h-4 text-blue-600" />
                      {project.units} lots
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
