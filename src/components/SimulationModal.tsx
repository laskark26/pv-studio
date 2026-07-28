import React, { useEffect, useState } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Calculator, 
  Zap, 
  Euro, 
  TrendingDown, 
  ShieldCheck, 
  Building2, 
  Sun, 
  Leaf, 
  CheckCircle2, 
  Info, 
  Sparkles,
  HelpCircle,
  Clock,
  Send,
  Sliders,
  Lock,
  Unlock,
  FileText
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function SimulationModal() {
  const { isSimulationModalOpen, closeSimulationModal } = useModal();
  const [isRendered, setIsRendered] = useState(false);
  const [activeTab, setActiveTab] = useState<'calculator' | 'contact'>('calculator');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulation Parameters
  const [surface, setSurface] = useState<number>(1200); // m²
  const [projectType, setProjectType] = useState<'toiture' | 'ombriere' | 'sol'>('toiture');
  const [region, setRegion] = useState<'sud' | 'centre' | 'nord'>('centre');
  const [currentEnergyPrice, setCurrentEnergyPrice] = useState<number>(210); // €/MWh
  const [autoconsumptionRate, setAutoconsumptionRate] = useState<number>(85); // %

  // Contact form for detailed study
  const [contactData, setContactData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (isSimulationModalOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setActiveTab('calculator');
    } else {
      setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSimulationModalOpen]);

  if (!isRendered) return null;

  // --- CALCULATIONS ENGINE ---
  const regionYields = {
    sud: 1350,
    centre: 1150,
    nord: 1000
  };

  const typeFactor = {
    toiture: 1.0,
    ombriere: 0.95,
    sol: 1.05
  };

  const yieldPerKwp = regionYields[region] * typeFactor[projectType];

  // Surface needed per kWp (m² / kWc)
  const m2PerKwp = projectType === 'ombriere' ? 7.5 : 6.2;
  const kwpInstalled = Math.round((surface / m2PerKwp) * 10) / 10;

  // Annual energy production (MWh / year)
  const annualProductionMWh = Math.round((kwpInstalled * yieldPerKwp) / 1000);

  // Tiers-Investor CAPEX valuation equivalent
  const capexValuation = Math.round(kwpInstalled * 1000 * (kwpInstalled > 200 ? 0.95 : 1.15));

  // Proposed ACC Tiers-investor tariff (€/MWh)
  const accTariff = Math.round(Math.min(currentEnergyPrice * 0.72, 145));

  // Annual energy consumed in ACC (MWh)
  const accConsumedMWh = Math.round(annualProductionMWh * (autoconsumptionRate / 100));

  // Annual savings (€ / year)
  const priceDifferencePerMWh = currentEnergyPrice - accTariff;
  const annualSavings = Math.round(accConsumedMWh * Math.max(0, priceDifferencePerMWh));

  // 20-Year cumulative savings
  let cumulative20YearsSavings = 0;
  let currentYearSavings = annualSavings;
  for (let year = 1; year <= 20; year++) {
    cumulative20YearsSavings += currentYearSavings;
    currentYearSavings *= 1.03;
  }
  cumulative20YearsSavings = Math.round(cumulative20YearsSavings);

  // Carbon offsets
  const co2AvoidedTonnes = Math.round((annualProductionMWh * 0.08) * 10) / 10;
  const evKmEquivalent = Math.round(co2AvoidedTonnes * 6250);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ${isSimulationModalOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={closeSimulationModal}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl transition-all duration-300 overflow-hidden flex flex-col max-h-[92vh] ${isSimulationModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-white sticky top-0 z-20 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] text-slate-900 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Modèle Tiers-Investisseur — 0€ CAPEX
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Simulateur d'Autoconsommation Collective
              </h3>
            </div>
          </div>

          <button 
            onClick={closeSimulationModal}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors shrink-0 self-end md:self-center"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 md:px-8 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none py-2 shrink-0">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Sliders className="w-4 h-4" />
            1. Simulation & Caractéristiques
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-[#CCFF00] text-slate-900 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Send className="w-4 h-4" />
            2. Recevoir le Bilan PDF Gratuit
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-8">

          {/* TAB 1: CALCULATOR & INPUTS */}
          {activeTab === 'calculator' && (
            <div className="space-y-8">

              {/* Grid Layout: Inputs Left, Detailed Metrics Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-slate-700" />
                    Caractéristiques du site
                  </h4>

                  {/* Surface Slider */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-500" />
                        Surface disponible
                      </label>
                      <span className="text-lg font-extrabold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200">
                        {surface.toLocaleString('fr-FR')} m²
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="10000" 
                      step="50"
                      value={surface} 
                      onChange={(e) => setSurface(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>100 m²</span>
                      <span>2 500 m²</span>
                      <span>5 000 m²</span>
                      <span>10 000 m²</span>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Type d'aménagement</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'toiture', label: 'Toiture', desc: 'Bâtiment / Hangar' },
                        { id: 'ombriere', label: 'Ombrière', desc: 'Parking voitures' },
                        { id: 'sol', label: 'Centrale Sol', desc: 'Foncier / Terrain' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setProjectType(t.id as any)}
                          className={`p-3 rounded-xl border-2 text-left transition-all ${
                            projectType === t.id 
                              ? 'border-slate-900 bg-slate-900 text-white shadow-sm' 
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-sm">{t.label}</div>
                          <div className={`text-xs mt-0.5 ${projectType === t.id ? 'text-slate-300' : 'text-slate-400'}`}>
                            {t.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Region / Ensoleillement */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Localisation / Ensoleillement</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'sud', label: 'Sud / Littoral', yield: '1 350 kWh/kWc' },
                        { id: 'centre', label: 'Centre / Ouest', yield: '1 150 kWh/kWc' },
                        { id: 'nord', label: 'Nord / Est', yield: '1 000 kWh/kWc' }
                      ].map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRegion(r.id as any)}
                          className={`p-3 rounded-xl border-2 text-left transition-all ${
                            region === r.id 
                              ? 'border-slate-900 bg-slate-900 text-white shadow-sm' 
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-sm">{r.label}</div>
                          <div className={`text-xs mt-0.5 ${region === r.id ? 'text-slate-300' : 'text-slate-400'}`}>
                            {r.yield}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Energy Price slider */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <Euro className="w-4 h-4 text-slate-500" />
                        Prix actuel de votre électricité
                      </label>
                      <span className="text-base font-bold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200">
                        {currentEnergyPrice} €/MWh <span className="text-xs text-slate-500">({(currentEnergyPrice/1000).toFixed(2)} €/kWh)</span>
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="140" 
                      max="320" 
                      step="5"
                      value={currentEnergyPrice} 
                      onChange={(e) => setCurrentEnergyPrice(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>140 €/MWh</span>
                      <span>220 €/MWh</span>
                      <span>320 €/MWh</span>
                    </div>
                  </div>

                  {/* Autoconsumption Rate slider */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4 text-slate-500" />
                        Taux d'autoconsommation locale visé
                      </label>
                      <span className="text-base font-bold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200">
                        {autoconsumptionRate} %
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="100" 
                      step="5"
                      value={autoconsumptionRate} 
                      onChange={(e) => setAutoconsumptionRate(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                    <p className="text-xs text-slate-500">
                      En ACC, le surplus non consommé immédiatement par votre site est partagé avec les consommateurs voisins (périmètre 2km à 20km).
                    </p>
                  </div>
                </div>

                {/* Right Column: Key Technical Metrics */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-slate-700" />
                    Indicateurs clés du site
                  </h4>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Puissance crête installable</div>
                        <div className="text-lg font-extrabold text-slate-900">{kwpInstalled} kWc</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-700">
                        <Sun className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Production solaire annuelle estimée</div>
                        <div className="text-lg font-extrabold text-slate-900">{annualProductionMWh.toLocaleString('fr-FR')} MWh/an</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-700">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Valorisation de la centrale (financée à 100%)</div>
                        <div className="text-lg font-extrabold text-slate-900">~{capexValuation.toLocaleString('fr-FR')} €</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <Euro className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Empreinte Carbone évitée</div>
                        <div className="text-lg font-extrabold text-slate-900">{co2AvoidedTonnes} tonnes CO₂/an</div>
                        <div className="text-xs text-slate-500 mt-0.5">Équivalent à {evKmEquivalent.toLocaleString('fr-FR')} km en VE</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <Leaf className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-4 bg-[#0A0A0A] text-white rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-[#CCFF00] font-bold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        Garantie Écologie Collective
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Accès à une énergie verte locale sans investissement ni dette au bilan. Maintenance, assurance et exploitation assurées pendant 20-25 ans.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* END BANNER: Financial Results Lead Magnet (Moved to the bottom, blurred savings & tariff) */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden border border-slate-700 shadow-xl space-y-6">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CCFF00] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Résultats Financiers Estimés (Modèle Tiers-Investisseur)
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                    <Lock className="w-3.5 h-3.5" />
                    Données verrouillées — Lead Magnet
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
                  
                  {/* Column 1: Visible CAPEX */}
                  <div className="md:pr-4">
                    <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">Investissement Requis</span>
                    <div className="text-3xl lg:text-4xl font-extrabold text-[#CCFF00] mt-2">0 € CAPEX</div>
                    <p className="text-xs text-slate-300 mt-1">Financement, pose & maintenance pris en charge à 100%</p>
                  </div>

                  {/* Column 2: BLURRED Annual Savings */}
                  <div className="pt-4 md:pt-0 md:px-4 relative group cursor-pointer" onClick={() => setActiveTab('contact')}>
                    <span className="text-slate-400 text-xs uppercase font-bold tracking-wider flex items-center justify-center md:justify-start gap-1">
                      Économie Estimée / an
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                    <div className="relative mt-2">
                      <div className="text-3xl lg:text-4xl font-extrabold text-white blur-md select-none">
                        48 500 €<span className="text-sm font-normal text-slate-300">/an</span>
                      </div>
                      <div className="text-xs text-emerald-400 font-medium blur-sm select-none mt-1">
                        Économie cumulée 20 ans : ~970 000 €
                      </div>
                      
                      {/* Overlay badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-slate-900/90 text-[#CCFF00] border border-[#CCFF00]/40 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm group-hover:scale-105 transition-transform">
                          <Lock className="w-3.5 h-3.5" />
                          Débloquer les chiffres
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: BLURRED ACC Electricity Tariff */}
                  <div className="pt-4 md:pt-0 md:pl-4 relative group cursor-pointer" onClick={() => setActiveTab('contact')}>
                    <span className="text-slate-400 text-xs uppercase font-bold tracking-wider flex items-center justify-center md:justify-start gap-1">
                      Tarif Électricité ACC
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                    <div className="relative mt-2">
                      <div className="text-3xl lg:text-4xl font-extrabold text-white blur-md select-none">
                        135 <span className="text-lg font-normal text-slate-300">€/MWh</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 blur-sm select-none">
                        vs {currentEnergyPrice} €/MWh sur le réseau (-35%)
                      </p>

                      {/* Overlay badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-slate-900/90 text-[#CCFF00] border border-[#CCFF00]/40 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm group-hover:scale-105 transition-transform">
                          <Lock className="w-3.5 h-3.5" />
                          Débloquer le tarif
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Call-to-Action to unlock PDF report */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-slate-300 text-xs text-center sm:text-left">
                    <span className="font-bold text-white">Recevez votre rapport confidentiel complet :</span> courbe de charge, contrat PPA Tiers-investisseur et tableau de trésorerie sur 20 ans.
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('contact')}
                    className="w-full sm:w-auto bg-[#CCFF00] text-slate-900 font-extrabold py-3.5 px-6 rounded-2xl hover:bg-[#b3e600] transition-all flex items-center justify-center gap-2.5 shadow-lg text-sm shrink-0"
                  >
                    <Unlock className="w-4 h-4 text-slate-900" />
                    Débloquer mon Bilan PDF Gratuit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: CONTACT & DETAILED PDF STUDY */}
          {activeTab === 'contact' && (
            <div className="max-w-2xl mx-auto space-y-6">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-20 h-20 bg-[#CCFF00] text-slate-900 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Demande d'étude transmise avec succès !</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Votre rapport technico-économique détaillé avec l'estimation exacte de vos économies d'énergie en tiers-investissement est en cours de préparation par nos ingénieurs. Il vous sera envoyé sous 48h.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={closeSimulationModal}
                      className="bg-slate-900 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-slate-800 transition-all"
                    >
                      Fermer le simulateur
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-5 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFF00]/20 text-slate-900 text-xs font-extrabold mb-2">
                      <Unlock className="w-3.5 h-3.5 text-slate-900" />
                      Déblocage du Rapport PDF Complet
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      Demande d'étude de faisabilité & Bilan ACC
                    </h4>
                    <p className="text-xs text-slate-500">
                      Recevez votre simulation chiffrée complète (Économies annuelles exactes, tarif PPA Tiers-investisseur garanti, étude cadastrale solaire).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-slate-800">Données saisies pour votre simulation :</div>
                    <div className="text-slate-600">
                      • Surface : <strong>{surface.toLocaleString('fr-FR')} m²</strong> ({projectType})
                      <br />
                      • Puissance estimée : <strong>{kwpInstalled} kWc</strong> (~{annualProductionMWh} MWh/an)
                      <br />
                      • Investissement client : <strong className="text-emerald-700">0 € CAPEX (100% financé)</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Nom de l'entreprise ou entité</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Groupe Santé / Bâtiment Tertiaire"
                        value={contactData.company}
                        onChange={(e) => setContactData({...contactData, company: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Nom & Prénom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Marc Dupont"
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email professionnel</label>
                      <input 
                        type="email" 
                        required
                        placeholder="m.dupont@entreprise.fr"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Téléphone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="06 12 34 56 78"
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Précisions ou questions particulières (optionnel)</label>
                    <textarea 
                      rows={3}
                      placeholder="Adresse exacte du site, type de toiture (bac acier, étanchéité...), contraintes particulières..."
                      value={contactData.notes}
                      onChange={(e) => setContactData({...contactData, notes: e.target.value})}
                      className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#CCFF00] text-slate-900 font-extrabold py-4 px-6 rounded-xl hover:bg-[#b3e600] transition-all flex items-center justify-center gap-2 shadow-md text-base"
                  >
                    Débloquer mon Bilan PDF & Envoyer la demande
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
          * Les résultats affichés sont issus d'une modélisation moyenne et ne constituent pas un engagement contractuel. Seule une étude cadastre solaire approfondie validera les données d'autoconsommation.
        </div>

      </div>
    </div>
  );
}
