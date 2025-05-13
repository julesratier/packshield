
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';

interface ProductGridProps {
  products: Array<{
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
    amazonChoice?: boolean;
    url?: string;
  }>;
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="product-card overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <Link to={product.url || `/produits/${product.id}`} className="block">
            <div className="bg-packshield-lightGrey relative">
              {product.amazonChoice && (
                <div className="absolute top-2 left-2 z-10">
                  <AmazonChoiceBadge />
                </div>
              )}
              <AspectRatio ratio={1 / 1}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium text-packshield-navy mb-2 line-clamp-2">{product.title}</h3>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm text-packshield-grey">({product.reviews})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-packshield-navy">{product.price.toFixed(2).replace('.', ',')}€</span>
                <button className="bg-packshield-orange hover:bg-packshield-orange/90 text-white text-sm px-3 py-1 rounded-md transition-colors">
                  Voir plus
                </button>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
