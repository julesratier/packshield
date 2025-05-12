
import { Link } from 'react-router-dom';
import { Star, StarHalf } from "lucide-react";
import { Product } from '@/utils/products';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  // Calculer le prix original (prix + 3€)
  const getOriginalPrice = (price: number) => (price + 3).toFixed(2);
  
  return (
    <div>
      <h2 className="text-2xl font-semibold text-packshield-navy mb-6">Vous pourriez aussi aimer</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 relative">
            <Link to={`/product/${product.id}`}>
              <div className="aspect-square overflow-hidden bg-packshield-lightGrey flex items-center justify-center">
                {product.amazonChoice && <AmazonChoiceBadge />}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-packshield-navy mb-2">{product.title}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                    {product.rating % 1 !== 0 && (
                      <StarHalf className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    )}
                    {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-packshield-grey">({product.reviews})</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-through">{getOriginalPrice(product.price)}€</span>
                  <span className="text-xl font-bold text-packshield-navy">{product.price.toFixed(2)}€</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
