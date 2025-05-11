
import { Check } from 'lucide-react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="space-y-3 mb-8 bg-packshield-lightGrey/30 p-4 rounded-lg">
      <h3 className="font-semibold text-packshield-navy mb-2">Caractéristiques</h3>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <Check className="h-5 w-5 text-packshield-orange mr-3 mt-0.5 flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
