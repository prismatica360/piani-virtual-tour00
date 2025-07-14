
import React from 'react';
import { PricingPlan } from '../types.ts';
import { CheckIcon } from './icons.tsx';

interface PricingTierCardProps {
  plan: PricingPlan;
  onSelect: (plan: PricingPlan) => void;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({ plan, onSelect }) => {
  const { name, price, description, features, styleClasses } = plan;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(plan);
    }
  };

  return (
    <div
      onClick={() => onSelect(plan)}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`Scopri i dettagli del piano ${name}`}
      className={`relative flex flex-col rounded-2xl border ${styleClasses.border} ${styleClasses.bg} p-8 shadow-lg transition-all duration-300 ${styleClasses.hoverShadow} hover:-translate-y-2 w-full max-w-lg cursor-pointer focus:outline-none focus:ring-2 ${styleClasses.border} focus:ring-offset-2 focus:ring-offset-slate-950`}
    >
      <div className="flex-grow flex flex-col">
        <div>
            <h3 className={`text-2xl font-semibold ${styleClasses.titleColor}`}>{name}</h3>
            <p className={`mt-2 ${styleClasses.text}`}>{description}</p>
            <div className="mt-6">
                <span className="text-5xl font-extrabold text-white">{price}</span>
                { price !== 'Contattaci' && <span className={`ml-2 text-lg font-medium ${styleClasses.text}`}>una tantum</span> }
            </div>
            <p className="mt-8 text-sm font-semibold text-slate-400 uppercase">Cosa include:</p>
            <ul className="mt-4 space-y-4">
            {features.map((feature) => (
                <li key={feature.id} className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div className="ml-3 flex items-center justify-between w-full">
                    <span className={styleClasses.text}>{feature.name}</span>
                </div>
                </li>
            ))}
            </ul>
        </div>
        <div className="mt-auto pt-8">
             <div className="text-center py-2 px-4 rounded-lg border-2 border-dashed border-slate-700 text-slate-400">
                Clicca per scoprire tutti i dettagli
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTierCard;