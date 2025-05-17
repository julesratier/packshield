
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductComparisonCardProps {
  rank: number;
  title: string;
  price: string;
  image: string;
  amazonLink: string;
  verdict: string;
  isBestChoice?: boolean;
  isBestValue?: boolean;
  rating?: number;
}

const ProductComparisonCard: React.FC<ProductComparisonCardProps> = ({
  rank,
  title,
  price,
  image,
  amazonLink,
  verdict,
  isBestChoice = false,
  isBestValue = false,
  rating = 4.5
}) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i}
      className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
    />
  ));

  return (
    <Card className="h-full relative transition-all duration-300 hover:shadow-lg border border-gray-200">
      {/* Badge Position */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isBestChoice && (
          <Badge className="bg-packshield-orange text-white font-bold px-3 py-1.5 flex items-center gap-1">
            <Star className="h-4 w-4 fill-white" /> Meilleur Choix
          </Badge>
        )}
        {isBestValue && (
          <Badge className="bg-green-600 text-white font-bold px-3 py-1.5 flex items-center gap-1">
            <Star className="h-4 w-4 fill-white" /> Meilleur Rapport Qualité-Prix
          </Badge>
        )}
        {rank <= 3 && (
          <Badge className={`
            ${rank === 1 ? 'bg-amber-500' : rank === 2 ? 'bg-gray-400' : 'bg-amber-800'} 
            text-white font-bold text-xl h-8 w-8 flex items-center justify-center p-0 rounded-full`}
          >
            {rank}
          </Badge>
        )}
      </div>

      {/* Product Image with Hover Effect */}
      <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-white relative">
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>

      <CardContent className="p-5">
        {/* Product Title */}
        <h3 className="text-xl font-bold text-packshield-navy mb-2 line-clamp-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {stars}
          </div>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-packshield-orange mb-4">
          {price}
        </div>

        {/* Verdict Box */}
        <div className="bg-packshield-lightGrey rounded-lg p-4 mb-4">
          <h4 className="text-sm font-semibold text-packshield-navy mb-1">NOTRE VERDICT</h4>
          <p className="text-sm italic text-packshield-grey">{verdict}</p>
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <a 
          href={amazonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"  
        >
          <InteractiveHoverButton 
            text="Acheter sur Amazon" 
            className="w-full font-semibold"
          />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProductComparisonCard;
