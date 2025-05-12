
import { Link } from 'react-router-dom';
import { Star } from "lucide-react";
import { Product } from '@/utils/products';

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
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="block bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="aspect-square bg-packshield-lightGrey flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-medium text-packshield-navy mb-1 line-clamp-2">{product.title}</h3>
              
              <div className="flex items-center mb-2">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-xs text-packshield-grey">({product.reviews})</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-through">{getOriginalPrice(product.price)}€</span>
                <span className="text-lg font-semibold text-packshield-navy">{product.price.toFixed(2)}€</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
