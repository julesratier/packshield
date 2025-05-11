
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { 
  products, 
  getProductDescription, 
  getProductFeatures, 
  getProductSpecifications 
} from '@/utils/productData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mattressSize, setMattressSize] = useState("140x200");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const productId = parseInt(id || "1");
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
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
            price={product.price}
            description={description}
            features={features}
            productId={productId}
            sizes={product.sizes}
            selectedSize={mattressSize}
            onSizeChange={setMattressSize}
          />
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <ProductTabs specifications={specifications} />
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
