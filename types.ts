
export interface Feature {
  id: string;
  name: string;
  shortDescription: string;
}

export interface DetailedFeatureSection {
  title: string;
  items: string[];
}

export interface PricingPlan {
  id: 'base' | 'standard' | 'pro';
  name: string;
  price: string;
  description: string;
  features: Feature[];
  styleClasses: {
    bg: string;
    border: string;
    text: string;
    titleColor: string;
    hoverShadow: string;
    buttonBg: string;
    buttonHoverBg: string;
  };
  detailedFeatures: DetailedFeatureSection[];
}

export interface ComparisonFeature {
  name: string;
  base: boolean;
  standard: boolean;
  pro: boolean;
}

export interface ComparisonSection {
  title: string;
  features: ComparisonFeature[];
}