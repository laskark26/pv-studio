import React, { useEffect, useState } from 'react';
import { X, ArrowRight, ArrowLeft, Building, UserCheck, Key, CheckCircle2, MapPin, Stethoscope, Landmark, Factory, Sprout, Users } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function StudyModal() {
  const { isModalOpen, closeModal } = useModal();
  const [isRendered, setIsRendered] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    address: '',
    units: '',
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (isModalOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
      setStep(1);
      setIsSubmitted(false);
      setFormData({ address: '', units: '', role: '', firstName: '', lastName: '', email: '', phone: '' });
    } else {
      setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  if (!isRendered) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={closeModal}
      />
      
      <div className={`relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl transition-all duration-300 overflow-hidden flex flex-col max-h-[90vh] ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              {isSubmitted ? "Demande confirmée" : "Étude de faisabilité"}
            </h3>
            {!isSubmitted && (
              <p className="text-slate-500 mt-1 text-sm md:text-base">
                Découvrez nos modèles tiers-investissement (0€ CAPEX) ou clé en main. Évaluez le potentiel solaire de votre site.
              </p>
            )}
          </div>
          <button 
            onClick={closeModal}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!isSubmitted && (
          <div className="w-full bg-slate-100 h-1.5">
            <div 
              className="bg-slate-900 h-1.5 transition-all duration-500 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-[#CCFF00]/20 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">C'est noté !</h4>
              <p className="text-slate-600">
                Nos experts analysent vos données et reviennent vers vous dans les 48h avec une première estimation de votre potentiel.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              {/* Step 1 */}
              <div className={`space-y-6 transition-all duration-500 ${step === 1 ? 'block' : 'hidden'}`}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Adresse du site à équiper</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      required={step === 1}
                      placeholder="Ex: 123 rue de la République, 69002 Lyon"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Surface de toiture estimée (en m²) ou nombre de lots</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      required={step === 1}
                      placeholder="Ex: 500 m² ou 50 lots"
                      value={formData.units}
                      onChange={e => setFormData({...formData, units: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`space-y-4 transition-all duration-500 ${step === 2 ? 'block' : 'hidden'}`}>
                <label className="block text-sm font-bold text-slate-700 mb-2">Quel est votre secteur d'activité ?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'sante', label: 'Santé & Médico-social', icon: Stethoscope, desc: 'Hôpital, EHPAD...' },
                    { id: 'industrie', label: 'Industrie & Logistique', icon: Factory, desc: 'Usine, entrepôt...' },
                    { id: 'collectivite', label: 'Collectivité', icon: Landmark, desc: 'Bâtiment public, école...' },
                    { id: 'tertiaire', label: 'Tertiaire & Foncières', icon: Building, desc: 'Bureaux, commerce...' },
                    { id: 'agriculture', label: 'Agriculture', icon: Sprout, desc: 'Exploitation, hangar...' },
                    { id: 'copro', label: 'Copropriété', icon: Users, desc: 'Syndicat, résidents...' }
                  ].map(role => (
                    <label 
                      key={role.id}
                      className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.role === role.label ? 'border-slate-900 bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50'}`}
                    >
                      <input 
                        type="radio" 
                        name="role" 
                        value={role.label}
                        checked={formData.role === role.label}
                        onChange={e => setFormData({...formData, role: e.target.value})}
                        className="sr-only"
                        required={step === 2}
                      />
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 transition-colors ${formData.role === role.label ? 'bg-[#CCFF00] text-slate-900' : 'bg-slate-100 text-slate-500'}`}>
                        <role.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`font-bold text-sm md:text-base text-slate-900`}>{role.label}</div>
                        <div className={`text-xs md:text-sm mt-0.5 text-slate-500`}>{role.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className={`space-y-5 transition-all duration-500 ${step === 3 ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Prénom</label>
                    <input 
                      type="text" 
                      required={step === 3}
                      placeholder="Jean"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nom</label>
                    <input 
                      type="text" 
                      required={step === 3}
                      placeholder="Dupont"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email professionnel ou personnel</label>
                  <input 
                    type="email" 
                    required={step === 3}
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Numéro de téléphone</label>
                  <input 
                    type="tel"
                    required={step === 3}
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" 
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Retour
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button 
                  type="submit"
                  className="bg-[#CCFF00] text-slate-900 font-bold px-8 py-3.5 rounded-xl hover:bg-[#b3e600] transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                >
                  {step === 3 ? "Envoyer ma demande" : "Étape suivante"} 
                  {step < 3 && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
