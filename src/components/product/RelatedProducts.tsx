
import { Link } from 'react-router-dom';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  amazonChoice?: boolean;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-packshield-navy mb-6">Vous pourriez aussi aimer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <div className="p-4">
                <h3 className="text-lg font-semibold text-packshield-navy mb-2">{product.title}</h3>
                <div className="text-lg font-bold text-packshield-navy">{product.price.toFixed(2)}€</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
