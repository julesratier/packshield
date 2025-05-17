import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import CustomerReviews from '@/components/product/CustomerReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import ProductFeatureImages from '@/components/product/ProductFeatureImages';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Helmet from '@/components/SEO/Helmet';
import { 
  products, 
  getProductDescription, 
  getProductFeatures, 
  getProductSpecifications 
} from '@/utils/products';
import { 
  createProductSlug, 
  getProductIdFromSlug, 
  getProductUrl,
  getProductShortName,
  isOldSlug
} from '@/utils/productSlug';

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

  // Check if redirect is needed for old slugs
  if (slug && isOldSlug(slug)) {
    const product = products.find(p => p.id === productId);
    if (product) {
      return <Navigate to={getProductUrl(product)} replace />;
    }
  }

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

  // Breadcrumb items
  const breadcrumbItems = [
    { title: 'Boutique', href: '/produits' },
    { title: getProductShortName(product) }
  ];

  // Product structured data
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Packshield"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviews
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": getPrice().toFixed(2),
      "availability": "https://schema.org/InStock"
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://packshield.shop"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Boutique",
        "item": "https://packshield.shop/produits"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": getProductShortName(product),
        "item": `https://packshield.shop/produits/${createProductSlug(product)}`
      }
    ]
  };

  // SEO title and descriptions based on product ID
  const getSEOData = () => {
    switch(productId) {
      case 1:
        return {
          title: "Housse transport matelas en plastique épais | Packshield",
          description: "En déménagement ou stockage, protégez efficacement votre matelas en 140cm 160cm ou 180cm avec notre housse en plastique épais Packshield®. Idéale contre la poussière, la saleté et l'humidité."
        };
      case 2:
        return {
          title: "Housse de protection déménagement matelas 1 place | Packshield",
          description: "Protégez efficacement votre matelas 2 personnes avec notre housse en plastique épais Packshield®. Idéale contre la poussière, la saleté et l'humidité."
        };
      case 3:
        return {
          title: "Housse transport et déménagement matelas 2 places | Packshield",
          description: "Facilitez le transport et protégez votre matelas 2 personnes avec notre housse en tissu oxford robuste et ses 4 poignées pratiques. Achetez sur Amazon."
        };
      case 4:
        return {
          title: "Housse de transport & déménagement Matelas 90cm | Packshield",
          description: "Facilitez le transport et protégez votre matelas 2 personnes avec notre housse en tissu oxford robuste et ses 4 poignées pratiques. Achetez sur Amazon."
        };
      case 5:
        return {
          title: "Kit Rangement Sous Vide 4 Sacs + 4 Coffres | Packshield",
          description: "Optimisez votre espace avec le kit de rangement sous vide Packshield : 4 sacs et 4 coffres non tissés. Compression maximale, protection contre poussière et insectes."
        };
      case 6:
        return {
          title: "Kit Rangement Sous Vide 2 Sacs + 2 Coffres | Packshield",
          description: "Optimisez votre espace avec le kit de rangement sous vide Packshield : 2 sacs et 2 coffres non tissés. Compression maximale, protection contre poussière et insectes."
        };
      default:
        return {
          title: product.title,
          description: "Découvrez nos produits de protection et stockage premium Packshield - qualité garantie pour protéger vos biens."
        };
    }
  };

  const seoData = getSEOData();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet 
        title={seoData.title}
        description={seoData.description}
        structuredData={[productStructuredData, breadcrumbStructuredData]}
      />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb moved outside the product details grid */}
        <div className="mb-6">
          <BreadcrumbNav items={breadcrumbItems} textColor="#8A898C" />
        </div>

        {/* Product Title Section */}
        <h1 className="text-3xl font-bold text-packshield-navy mb-6 md:hidden">
          {product.title}
        </h1>

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
