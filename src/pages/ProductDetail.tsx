
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

// Helper function to create slug from product title
export const createProductSlug = (product: { id: number, title: string }) => {
  const slug = product.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
  
  return `${slug}-${product.id}`;
};

// Helper function to extract ID from slug
const getProductIdFromSlug = (slug: string) => {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

const ProductDetail = () => {
  const { slug, id: legacyId } = useParams<{ slug?: string, id?: string }>();
  const [mattressSize, setMattressSize] = useState("140x200");
  const location = useLocation();
  
  // Scroll to top on page load or when ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, legacyId, location.pathname]);
  
  // Parse ID from either the new slug format or the legacy ID parameter
  const productId = slug 
    ? getProductIdFromSlug(slug)
    : parseInt(legacyId || "1");
  
  const product = products.find(p => p.id === productId) || products[0];
  
  // Get related products (excluding the current product)
  const relatedProducts = products
    .filter(p => p.id !== productId)
    .sort(() => 0.5 - Math.random()) // Random shuffle
    .slice(0, 3); // Take first 3

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/produits" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
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
