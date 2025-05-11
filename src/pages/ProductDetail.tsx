
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import CustomerReviews from '@/components/product/CustomerReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import { 
  products, 
  getProductDescription, 
  getProductFeatures, 
  getProductSpecifications 
} from '@/utils/productData';

const oxfordMattressReviews = [
  {
    name: "Thierry.l",
    rating: 5,
    title: "Article conforme",
    date: "27 mars 2025",
    comment: "Fait le job, pratique et suffisamment solide"
  },
  {
    name: "Amazon Customer",
    rating: 5,
    title: "Pratique",
    date: "11 février 2025",
    comment: "Protège bien le matelas"
  },
  {
    name: "Van",
    rating: 5,
    title: "Produit de qualité",
    date: "29 janvier 2025",
    comment: "Housse correspondante aux dimensions indiquées. Utilisée pour un matelas standard, remisé dans un grenier. Mise en place facile grâce à la fermeture éclair 3 côtés. Housse qui semble de bonne facture et ne s'est pas déchirée. Munie de poignées, très pratiques pour le bouger une fois dans la housse. Pour le prix, je recommande !"
  },
  {
    name: "eliane rascalou",
    rating: 4,
    title: "Taille bien adapté au grand matelas",
    date: "9 février 2025",
    comment: "Produit de bonne qualité"
  },
  {
    name: "Agence T.",
    rating: 5,
    title: "Excellent produit",
    date: "23 avril 2025",
    comment: "Produit qualitatif. Adapté au matelas même très épais"
  },
  {
    name: "Florence5622",
    rating: 5,
    title: "Housse de protection",
    date: "4 mai 2025",
    comment: "Housse solide, non transparente, elle enveloppe bien le matelas."
  },
  {
    name: "Chereau",
    rating: 5,
    title: "facile d'utilisation",
    date: "7 janvier 2025",
    comment: "Excellent produit pour transporter et stoker un matelas, parfait pour protéger un matelas de Camping-car pendant l'hivernage …"
  },
  {
    name: "Soso",
    rating: 5,
    title: "Top",
    date: "10 avril 2025",
    comment: "Top"
  }
];

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
        <CustomerReviews reviews={oxfordMattressReviews} productId={productId} />

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
