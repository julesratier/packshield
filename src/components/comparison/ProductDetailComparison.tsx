
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProductDetailComparisonProps {
  title: string;
  rank: number;
  description: string;
  features: string[];
}

const ProductDetailComparison: React.FC<ProductDetailComparisonProps> = ({
  title,
  rank,
  description,
  features
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white mb-8 relative overflow-hidden shadow-sm">
      {/* Badge for top 3 */}
      {rank <= 3 && (
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className={`absolute top-0 right-0 transform rotate-45 translate-y-4 -translate-x-1/4 w-32 text-center py-2 
            ${rank === 1 ? 'bg-amber-500' : rank === 2 ? 'bg-gray-400' : 'bg-amber-800'} text-white font-bold`}>
            #{rank}
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold text-packshield-navy mb-4 pr-16">{title}</h3>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-packshield-navy">Caractéristiques principales :</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailComparison;
