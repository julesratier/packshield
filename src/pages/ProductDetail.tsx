
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import CustomerReviews from '@/components/product/CustomerReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import ProductFeatureImages from '@/components/product/ProductFeatureImages';
import { 
  products, 
  getProductDescription, 
  getProductFeatures, 
  getProductSpecifications 
} from '@/utils/products';

// Helper function to get product ID from path
const getProductIdFromPath = (path) => {
  // Handle the old URL structure
  if (path.includes('/product/')) {
    return parseInt(path.split('/product/')[1]);
  }

  // Handle the new URL structure
  if (path.includes('/produits/housse-matelas-plastique-epais')) {
    return 1;
  } else if (path.includes('/produits/housse-matelas-1-personne')) {
    return 2;
  } else if (path.includes('/produits/housse-protection-matelas-tissu')) {
    return 3;
  } else if (path.includes('/produits/housse-matelas-tissu-1-personne')) {
    return 4;
  } else if (path.includes('/produits/kit-rangement-compact')) {
    return 5;
  } else if (path.includes('/produits/kit-rangement-mini')) {
    return 6;
  }

  // Default
  return 1;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mattressSize, setMattressSize] = useState("140x200");
  const location = useLocation();
  
  // Scroll to top on page load or when ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, location.pathname]);
  
  // Get product ID from either params or path
  const productId = id ? parseInt(id) : getProductIdFromPath(location.pathname);
  const product = products.find(p => p.id === productId) || products[0];
  
  // Récupérer des produits associés (excluant le produit actuel)
  const relatedProducts = products
    .filter(p => p.id !== productId)
    .sort(() => 0.5 - Math.random()) // Mélange aléatoire
    .slice(0, 3); // Prendre les 3 premiers

  const description = getProductDescription(productId);
  const features = getProductFeatures(productId);
  const specifications = getProductSpecifications(productId);

  // Get the correct images based on product type and selected size
  const getProductImages = () => {
    if (productId === 3) {
      return product.additionalImages[mattressSize as keyof typeof product.additionalImages] || [];
    }
    return Array.isArray(product.additionalImages) ? product.additionalImages : [];
  };

  const productImages = getProductImages();

  // Get the price based on product and size
  const getPrice = () => {
    if (productId === 3) {
      switch (mattressSize) {
        case "140x200": return 29.90;
        case "160x200": return 33.90;
        case "180x200": return 36.90;
        default: return product.price;
      }
    }
    return product.price;
  };

  // Generate back link based on current product
  const backToProductsLink = '/produits';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to={backToProductsLink} className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour aux produits</span>
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <ProductGallery 
            images={productImages} 
            title={product.title} 
            amazonChoice={product.amazonChoice} 
          />

          {/* Product Info */}
          <ProductInfo 
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            price={getPrice()}
            description={description}
            features={features}
            productId={productId}
            sizes={product.sizes}
            selectedSize={mattressSize}
            onSizeChange={setMattressSize}
          />
        </div>

        {/* Product Details Tabs */}
        <div className="mb-8">
          <ProductTabs specifications={specifications} />
        </div>
        
        {/* Customer Reviews */}
        <CustomerReviews reviews={[]} productId={productId} />
        
        {/* Product Feature Images */}
        <ProductFeatureImages productId={productId} />

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
