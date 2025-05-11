
import { Package, ThumbsUp, ShoppingBag } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProductRating from './ProductRating';
import ProductFeatures from './ProductFeatures';

interface ProductInfoProps {
  title: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
  features: string[];
  productId: number;
  sizes?: string[];
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
}

const ProductInfo = ({ 
  title,
  rating,
  reviews,
  price,
  description,
  features,
  productId,
  sizes,
  selectedSize,
  onSizeChange
}: ProductInfoProps) => {
  // Function to get the correct Amazon URL based on product ID and size
  const getAmazonUrl = () => {
    switch (productId) {
      case 1:
        return "https://amzn.to/43aXBYX";
      case 2:
        return "https://amzn.to/3RY4A2d";
      case 3:
        // For product 3, the URL depends on the selected size
        if (selectedSize === "140x200") {
          return "https://amzn.to/3RYvqaE";
        } else if (selectedSize === "160x200") {
          return "https://amzn.to/4mc3pKs";
        } else if (selectedSize === "180x200") {
          return "https://amzn.to/43nhUUa";
        }
        return "https://amzn.to/3RYvqaE"; // Default to 140x200 if no size selected
      case 4:
        return "https://amzn.to/4jfN1Gh";
      case 5:
      case 6:
        return "https://amzn.to/4jPHo2D";
      default:
        return "https://amazon.fr";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-packshield-navy mb-3">{title}</h1>
      
      {/* Product variant selection */}
      {productId === 3 && sizes && selectedSize && onSizeChange && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Taille</label>
          <Select value={selectedSize} onValueChange={onSizeChange}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Sélectionnez une taille" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map(size => (
                <SelectItem key={size} value={size}>{
                  size === "140x200" ? "140cm x 200cm" : 
                  size === "160x200" ? "160cm x 200cm" : 
                  size === "180x200" ? "180cm x 200cm" : size
                }</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      <ProductRating rating={rating} reviewCount={reviews} />
      
      <div className="text-2xl font-bold text-packshield-navy mb-6">{price.toFixed(2)}€</div>
      
      <p className="text-packshield-grey mb-6">{description}</p>
      
      <ProductFeatures features={features} />
      
      <div className="mb-8">
        <div className="flex items-center text-packshield-navy mb-2">
          <Package className="h-5 w-5 mr-2" />
          <span className="font-medium">En stock - Prêt à expédier</span>
        </div>
        <div className="flex items-center text-packshield-navy">
          <ThumbsUp className="h-5 w-5 mr-2" />
          <span className="font-medium">+5000 clients satisfaits</span>
        </div>
      </div>
      
      <Button 
        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white w-full md:w-auto mb-4"
        onClick={() => window.open(getAmazonUrl(), "_blank")}
      >
        <ShoppingBag className="mr-2 h-5 w-5" /> Acheter sur Amazon
      </Button>
    </div>
  );
};

export default ProductInfo;
