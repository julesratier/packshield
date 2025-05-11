
import { Star, StarHalf } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

const ProductRating = ({ rating, reviewCount }: ProductRatingProps) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center mr-3">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
        ))}
        {rating % 1 !== 0 && (
          <StarHalf className="h-5 w-5 text-yellow-400" fill="currentColor" stroke="currentColor" />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-gray-300" fill="currentColor" />
        ))}
      </div>
      <span className="text-packshield-grey">{rating} ({reviewCount} avis)</span>
    </div>
  );
};

export default ProductRating;
