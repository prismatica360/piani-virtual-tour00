
import React from 'react';
import { CloseIcon } from './icons.tsx';
import { COMPARISON_DATA } from '../comparisonData.ts';
import { PRICING_PLANS } from '../constants.ts';

interface ComparisonModalProps {
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale"
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
          <h3 className="text-3xl font-bold text-white">Confronta i Piani</h3>
          <p className="text-lg text-slate-300 mt-1">Scopri nel dettaglio le differenze tra le nostre offerte.</p>
        </header>
        
        <div className="overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-900 z-10 shadow-md">
              <tr className="border-b-2 border-slate-700">
                <th className="p-4 text-lg font-semibold text-white w-1/2">Caratteristica</th>
                {PRICING_PLANS.map(plan => (
                  <th key={plan.id} className={`p-4 text-lg font-semibold text-center ${plan.styleClasses.titleColor}`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map(section => (
                <React.Fragment key={section.title}>
                  <tr className="bg-slate-950">
                    <td colSpan={4} className="p-3 pt-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      {section.title}
                    </td>
                  </tr>
                  {section.features.map(feature => (
                    <tr key={feature.name} className="border-b border-slate-800 last:border-b-0 hover:bg-slate-800/50">
                      <td className="p-4 text-slate-300">{feature.name}</td>
                      <td className="p-4 text-center text-2xl">{feature.base ? '✅' : '❌'}</td>
                      <td className="p-4 text-center text-2xl">{feature.standard ? '✅' : '❌'}</td>
                      <td className="p-4 text-center text-2xl">{feature.pro ? '✅' : '❌'}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        <footer className="p-4 bg-slate-900/50 border-t border-slate-700/50 text-center flex-shrink-0">
          <button
            onClick={onClose}
            className="py-2 px-6 rounded-lg font-semibold text-white bg-blue-600/20 hover:bg-blue-600/40 transition-colors"
          >
            Chiudi Confronto
          </button>
        </footer>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-scale { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
      `}</style>
    </div>
  );
};

export default ComparisonModal;