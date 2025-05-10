
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Package, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Ceci viendrait normalement d'une API ou d'une base de données
  const product = {
    id: parseInt(id || "1"),
    title: id === "1" ? "Housse Premium pour Matelas Queen" : id === "2" ? "Protection Matelas King Size" : "Lot de 2 Sacs de Rangement",
    price: id === "1" ? 24.99 : id === "2" ? 29.99 : 19.99,
    rating: id === "1" ? 4.8 : id === "2" ? 4.7 : 4.9,
    reviews: id === "1" ? 127 : id === "2" ? 94 : 58,
    description: "Notre housse de matelas premium offre une protection supérieure contre la poussière, la saleté, l'humidité et les nuisibles. Parfaite pour le déménagement, le stockage ou la protection quotidienne. Fabriquée à partir d'un matériau épais et durable conçu pour durer.",
    features: [
      "Matériau imperméable robuste",
      "Vinyle transparent pour une identification facile",
      "Épaisseur supplémentaire pour résistance aux perforations",
      "Système de fermeture à glissière sécurisé",
      "Facile à nettoyer et à réutiliser"
    ],
    specifications: {
      "Matériau": "Polyéthylène haute densité avec renforcement en vinyle",
      "Épaisseur": "4 mil (extra épais)",
      "Couleur": "Bleu / Gris (varie selon le produit)",
      "Fermeture": "Fermeture éclair sur toute la longueur avec rabat de protection",
      "Taille": id === "1" ? "Convient aux matelas Queen (60\" x 80\" x 14\")" : id === "2" ? "Convient aux matelas King (76\" x 80\" x 16\")" : "Différentes tailles disponibles",
      "Contenu du paquet": id === "3" ? "2 Sacs de Rangement" : "1 Housse de Matelas"
    },
    images: [
      id === "1" 
        ? "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png"
        : id === "2" 
          ? "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png" 
          : "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    amazonUrl: "https://amazon.com",
    relatedProducts: [
      {
        id: id === "1" ? 2 : 1,
        title: id === "1" ? "Protection Matelas King Size" : "Housse Premium pour Matelas Queen",
        image: id === "1" ? "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png" : "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
        price: id === "1" ? 29.99 : 24.99,
      },
      {
        id: 3,
        title: "Lot de 2 Sacs de Rangement",
        image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
        price: 19.99,
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour aux Produits</span>
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-packshield-orange' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} vue ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-packshield-navy mb-3">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                ))}
              </div>
              <span className="text-packshield-grey">{product.rating} ({product.reviews} avis)</span>
            </div>
            
            <div className="text-2xl font-bold text-packshield-navy mb-6">${product.price}</div>
            
            <p className="text-packshield-grey mb-6">{product.description}</p>
            
            <div className="space-y-3 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-packshield-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <div className="flex items-center text-packshield-navy mb-2">
                <Package className="h-5 w-5 mr-2" />
                <span className="font-medium">En stock - Prêt à expédier</span>
              </div>
              <div className="flex items-center text-packshield-navy">
                <Shield className="h-5 w-5 mr-2" />
                <span className="font-medium">Satisfaction garantie</span>
              </div>
            </div>
            
            <a 
              href={product.amazonUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-packshield-orange hover:bg-packshield-orange/90 text-white text-center py-3 rounded-md transition-colors inline-block font-medium"
            >
              Acheter sur Amazon
            </a>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Spécifications</TabsTrigger>
              <TabsTrigger value="shipping">Livraison & Retours</TabsTrigger>
              <TabsTrigger value="reviews">Avis Clients</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Spécifications du produit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-3">
                    <div className="font-medium">{key}</div>
                    <div className="text-packshield-grey">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Informations de livraison</h3>
              <div className="space-y-4">
                <p>Les produits sont expédiés directement depuis les centres de distribution d'Amazon. Les options de livraison standard s'appliquent conformément aux politiques d'Amazon.</p>
                <h4 className="font-medium">Politique de retour</h4>
                <p>Si vous n'êtes pas entièrement satisfait de votre achat, veuillez vous référer à la politique de retour d'Amazon pour cet article. Nous garantissons la qualité de nos produits et souhaitons que vous soyez entièrement satisfait de votre achat.</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Avis clients</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="ml-2 font-medium">Protection excellente</span>
                  </div>
                  <p className="text-sm mb-2">Ces housses de matelas sont incroyablement robustes. J'ai été impressionné par l'épaisseur du matériau. Parfait pour notre déménagement.</p>
                  <div className="text-xs text-packshield-grey">Sarah T. - Il y a 2 semaines</div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                    ))}
                    <span className="ml-2 font-medium">Bonne qualité</span>
                  </div>
                  <p className="text-sm mb-2">La housse est bien fabriquée et a gardé notre matelas propre pendant notre déménagement. La seule raison pour laquelle je donne 4 étoiles est que j'aurais aimé que la fermeture éclair soit un peu plus robuste.</p>
                  <div className="text-xs text-packshield-grey">Michel R. - Il y a 1 mois</div>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href={product.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-packshield-orange hover:text-packshield-navy transition-colors"
                >
                  Voir tous les avis sur Amazon
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-packshield-navy mb-6">Vous pourriez aussi aimer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <Link to={`/product/${relatedProduct.id}`}>
                  <div className="aspect-video overflow-hidden bg-packshield-lightGrey">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-packshield-navy mb-2">{relatedProduct.title}</h3>
                    <div className="text-lg font-bold text-packshield-navy">${relatedProduct.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
