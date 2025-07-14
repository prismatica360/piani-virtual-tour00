
import React, { useState } from 'react';
import { PRICING_PLANS } from './constants.ts';
import PricingTierCard from './components/PricingTierCard.tsx';
import PlanDetailModal from './components/PlanDetailModal.tsx';
import ComparisonModal from './components/ComparisonModal.tsx';
import { PricingPlan } from './types.ts';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };
  
  const openComparisonModal = () => setIsComparisonModalOpen(true);
  const closeComparisonModal = () => setIsComparisonModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-7xl">
          {PRICING_PLANS.map((plan) => (
            <PricingTierCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handlePlanSelect}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={openComparisonModal}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Confronta i Piani
          </button>
        </div>

      </main>
      
      {selectedPlan && (
        <PlanDetailModal
            plan={selectedPlan}
            onClose={handleCloseModal}
        />
      )}

      {isComparisonModalOpen && (
        <ComparisonModal onClose={closeComparisonModal} />
      )}
    </div>
  );
};

export default App;