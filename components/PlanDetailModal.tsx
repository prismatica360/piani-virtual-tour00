
import React from 'react';
import { PricingPlan } from '../types.ts';
import { CloseIcon, CheckIcon } from './icons.tsx';

interface PlanDetailModalProps {
  plan: PricingPlan;
  onClose: () => void;
}

const PlanDetailModal: React.FC<PlanDetailModalProps> = ({ plan, onClose }) => {

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`bg-slate-900 border ${plan.styleClasses.border} rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale`}
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <header className="p-6 border-b border-slate-700/50 flex-shrink-0 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            aria-label="Chiudi finestra"
          >
            <CloseIcon />
          </button>
          <h3 className={`text-3xl font-bold ${plan.styleClasses.titleColor}`}>{plan.name} - Dettaglio Completo</h3>
          <p className="text-lg text-slate-300 mt-1">{plan.description}</p>
        </header>
        
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="space-y-8">
            {plan.detailedFeatures.map((section) => (
              <div key={section.title}>
                <h4 className="text-xl font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="ml-3 text-slate-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
           {plan.id === 'pro' && (
             <div className="mt-8 p-4 text-center bg-slate-800/50 border border-slate-700 rounded-lg">
                  <p className="font-bold text-lg text-white">🎯 Risultato finale:</p>
                  <p className="text-slate-300 mt-2">Un tour immersivo, interattivo e pensato per <span className={`${plan.styleClasses.titleColor} font-semibold`}>far vendere</span>, non solo per far vedere. Lo showroom diventa un <span className="font-semibold text-white">venditore automatico</span>, accessibile sempre, da ovunque.</p>
             </div>
           )}
        </div>
         <footer className="p-4 bg-slate-900/50 border-t border-slate-700/50 text-center flex-shrink-0">
            <button
                onClick={onClose}
                className={`py-2 px-6 rounded-lg font-semibold text-white ${plan.styleClasses.buttonBg} ${plan.styleClasses.buttonHoverBg} transition-colors`}
            >
                Torna ai Piani
            </button>
        </footer>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
      `}</style>
    </div>
  );
};

export default PlanDetailModal;