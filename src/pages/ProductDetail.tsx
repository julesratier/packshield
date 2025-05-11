import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, StarHalf, Star, Package, ThumbsUp, ShoppingBag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [mattressSize, setMattressSize] = useState("140x200");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Updated product data with switched images and review counts
  const products = [
    {
      id: 1,
      title: "Housse de protection pour matelas en plastique épais - Matelas 2 personnes",
      image: "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png", // Switched with product 2
      additionalImages: [
        "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
        "Housse de protection pour matelas en plastique - Matelas 2 personnes - Image 2",
        "Housse de protection pour matelas en plastique - Matelas 2 personnes - Image 3"
      ],
      price: 21.90,
      rating: 4.5,
      reviews: 133,
      category: "matelas2p",
      featured: true,
      amazonChoice: false
    },
    {
      id: 2,
      title: "Housse de protection pour matelas en plastique épais - Matelas 1 personne",
      image: "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png", // Switched with product 1
      additionalImages: [
        "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
        "Housse de protection pour matelas en plastique épais - Matelas 1 personne - Image 2",
        "Housse de protection pour matelas en plastique épais - Matelas 1 personne - Image 3"
      ],
      price: 17.90,
      rating: 4.5,
      reviews: 133,
      category: "matelas1p",
      featured: true,
      amazonChoice: false
    },
    {
      id: 3,
      title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 2 personnes",
      image: "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png", // Nouvelle image principale
      additionalImages: {
        "140x200": [
          "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
          "/lovable-uploads/625f51dc-185c-496c-9cc8-593860582555.png", // Updated image for 140cm
          "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
          "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
          "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
          "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
        ],
        "160x200": [
          "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
          "/lovable-uploads/abd6a3cd-56a5-4417-8c4b-fb1859c12c9b.png", // Nouvelle image 2 pour 160cm
          "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
          "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
          "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
          "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
        ],
        "180x200": [
          "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
          "/lovable-uploads/c82c0160-ed55-4c12-a0ac-52be391099ee.png",
          "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
          "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
          "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
          "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
        ]
      },
      sizes: ["140x200", "160x200", "180x200"],
      price: 29.90,
      rating: 4.5,
      reviews: 355, // Updated review count
      category: "matelas2p",
      featured: true,
      amazonChoice: true
    },
    {
      id: 4,
      title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 1 personne",
      image: "/lovable-uploads/e5fdd6a6-494d-4b06-bd6a-c8bc4855a803.png",
      additionalImages: [
        "/lovable-uploads/e5fdd6a6-494d-4b06-bd6a-c8bc4855a803.png",
        "/lovable-uploads/6a2cdbe6-6983-4333-b99e-03a02241d408.png", // Oxford mattress 1 place - Image 2
        "/lovable-uploads/dce49061-e72d-4ffa-814e-a921f5df9dd8.png", // Oxford mattress 1 place - Image 3
        "/lovable-uploads/9f599893-9cc6-4a05-8f82-985b543f8c8d.png", // Oxford mattress 1 place - Image 4
        "/lovable-uploads/82ddd7e9-aed9-4271-bfac-33109fbde9be.png", // Oxford mattress 1 place - Image 5
        "/lovable-uploads/eb9361d4-37fa-494a-9374-f31bca0c120a.png"  // Oxford mattress 1 place - Image 6
      ],
      price: 24.90,
      rating: 4.5,
      reviews: 355, // Updated review count
      category: "matelas1p",
      featured: false,
      amazonChoice: false
    },
    {
      id: 5,
      title: "Kit de rangement sous vide - 4 sacs sous vide et 4 coffres non tissés",
      image: "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png", 
      additionalImages: [
        "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png",
        "/lovable-uploads/c5db4083-6963-4c79-a130-78d0af7018a2.png",
        "/lovable-uploads/fa391208-f7f3-4551-8747-af5cbb2e3039.png",
        "/lovable-uploads/50694c0f-48a0-4d8d-b845-36397926d112.png",
        "/lovable-uploads/ed1cbc56-1f8b-4341-b60a-4288d1316949.png",
        "/lovable-uploads/6711d68e-221c-4e6a-bd27-1f039876f830.png"
      ],
      price: 37.90,
      rating: 4.0,
      reviews: 450, // Updated review count
      category: "rangementSacs",
      featured: true,
      amazonChoice: false
    },
    {
      id: 6,
      title: "Kit de rangement sous vide - 2 sacs sous vide et 2 coffres non tissés",
      image: "/lovable-uploads/b268c516-e549-401b-a4be-3e36df6e9332.png",
      additionalImages: [
        "/lovable-uploads/b268c516-e549-401b-a4be-3e36df6e9332.png",
        "/lovable-uploads/40bd4bc8-f5b7-47af-9edd-1109ee1eb6a8.png", // 2SET image 2
        "/lovable-uploads/a0f19279-812e-4e80-8dca-d4a98a1931ea.png", // 2SET image 3
        "/lovable-uploads/1a5b12d7-beec-45a2-8317-ab9f74ae692d.png", // 2SET image 4
        "/lovable-uploads/763e8bc1-77b8-4d6b-9157-caf246095514.png", // 2SET image 5
        "/lovable-uploads/de4efd90-a4e0-44a5-90de-d7c58053158a.png"  // 2SET image 6
      ],
      price: 23.90,
      rating: 4.0,
      reviews: 450, // Updated review count
      category: "rangementSacs",
      featured: false,
      amazonChoice: false
    }
  ];

  const productId = parseInt(id || "1");
  const product = products.find(p => p.id === productId) || products[0];
  
  // Récupérer des produits associés (excluant le produit actuel)
  const relatedProducts = products
    .filter(p => p.id !== productId)
    .sort(() => 0.5 - Math.random()) // Mélange aléatoire
    .slice(0, 3); // Prendre les 3 premiers
  
  // Descriptions de produits personnalisées
  const getProductDescription = (productId: number) => {
    switch (productId) {
      case 1:
        return "Notre housse de protection pour matelas en plastique épais offre une protection supérieure contre la poussière, la saleté, l'humidité et les nuisibles. Parfaite pour le déménagement, le stockage ou la protection quotidienne de votre matelas deux personnes.";
      case 2:
        return "Notre housse de protection pour matelas en plastique épais offre une protection supérieure contre la poussière, la saleté, l'humidité et les nuisibles. Parfaite pour le déménagement, le stockage ou la protection quotidienne de votre matelas une personne.";
      case 3:
        return "Cette housse de matelas premium en tissu oxford résistant avec 4 poignées est idéale pour faciliter le transport et le déménagement. Protection optimale contre la poussière, l'humidité et les déchirures pour votre matelas deux personnes.";
      case 4:
        return "Cette housse de matelas premium en tissu oxford résistant avec 4 poignées est idéale pour faciliter le transport et le déménagement. Protection optimale contre la poussière, l'humidité et les déchirures pour votre matelas une personne.";
      case 5:
        return "Kit complet de rangement sous vide comprenant 4 sacs sous vide et 4 coffres non tissés. Solution parfaite pour maximiser votre espace de rangement tout en protégeant vos vêtements et linges de maison.";
      case 6:
        return "Kit complet de rangement sous vide comprenant 2 sacs sous vide et 2 coffres non tissés. Solution parfaite pour maximiser votre espace de rangement tout en protégeant vos vêtements et linges de maison.";
      default:
        return "Notre produit de protection offre une solution efficace pour préserver vos biens contre la poussière, la saleté, l'humidité et les nuisibles.";
    }
  };

  // Caractéristiques des produits personnalisées
  const getProductFeatures = (productId: number) => {
    const baseFeatures = [
      "Matériau imperméable robuste",
      "Facile à nettoyer et à réutiliser"
    ];
    
    switch (productId) {
      case 1:
      case 2:
        return [
          ...baseFeatures,
          "Plastique transparent pour une identification facile",
          "Épaisseur supplémentaire pour résistance aux perforations",
          "Système de fermeture à glissière sécurisé"
        ];
      case 3:
      case 4:
        return [
          ...baseFeatures,
          "Tissu Oxford premium de haute qualité",
          "4 poignées pour un transport facilité",
          "Fermeture éclair renforcée sur 3 côtés",
          "Design anti-poussière et anti-humidité"
        ];
      case 5:
      case 6:
        return [
          ...baseFeatures,
          "Sacs sous vide avec valve anti-retour",
          "Compression maximale pour gagner jusqu'à 80% d'espace",
          "Coffres non tissés avec fenêtre transparente",
          "Protection optimale contre la poussière et les insectes"
        ];
      default:
        return baseFeatures;
    }
  };

  // Spécifications des produits personnalisées
  const getProductSpecifications = (productId: number) => {
    switch (productId) {
      case 1:
        return {
          "Matériau": "Polyéthylène haute densité",
          "Épaisseur": "4 mil (extra épais)",
          "Couleur": "Bleu / Transparent",
          "Fermeture": "Fermeture éclair sur toute la longueur",
          "Taille": "Convient aux matelas 2 personnes (140-160cm x 190-200cm)",
          "Contenu du paquet": "1 Housse de Matelas"
        };
      case 2:
        return {
          "Matériau": "Polyéthylène haute densité",
          "Épaisseur": "4 mil (extra épais)",
          "Couleur": "Bleu / Transparent",
          "Fermeture": "Fermeture éclair sur toute la longueur",
          "Taille": "Convient aux matelas 1 personne (80-90cm x 190-200cm)",
          "Contenu du paquet": "1 Housse de Matelas"
        };
      case 3:
        return {
          "Matériau": "Tissu Oxford 600D",
          "Couleur": "Gris",
          "Fermeture": "Fermeture éclair sur 3 côtés avec rabat de protection",
          "Poignées": "4 poignées renforcées",
          "Taille": "Convient aux matelas 2 personnes (140-160cm x 190-200cm)",
          "Contenu du paquet": "1 Housse de Matelas"
        };
      case 4:
        return {
          "Matériau": "Tissu Oxford 600D",
          "Couleur": "Gris",
          "Fermeture": "Fermeture éclair sur 3 côtés avec rabat de protection",
          "Poignées": "4 poignées renforcées",
          "Taille": "Convient aux matelas 1 personne (80-90cm x 190-200cm)",
          "Contenu du paquet": "1 Housse de Matelas"
        };
      case 5:
        return {
          "Contenu": "4 sacs sous vide + 4 coffres de rangement",
          "Matériau sacs": "Polyéthylène et nylon",
          "Matériau coffres": "Tissu non tissé respirant",
          "Taille des sacs": "80cm x 100cm",
          "Taille des coffres": "45cm x 30cm x 20cm",
          "Valve": "Valve anti-retour double fermeture"
        };
      case 6:
        return {
          "Contenu": "2 sacs sous vide + 2 coffres de rangement",
          "Matériau sacs": "Polyéthylène et nylon",
          "Matériau coffres": "Tissu non tissé respirant",
          "Taille des sacs": "80cm x 100cm",
          "Taille des coffres": "45cm x 30cm x 20cm",
          "Valve": "Valve anti-retour double fermeture"
        };
      default:
        return {
          "Matériau": "Haute qualité",
          "Épaisseur": "Standard",
          "Couleur": "Variée",
          "Contenu du paquet": "1 produit"
        };
    }
  };

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
          <div className="space-y-4">
            <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden flex items-center justify-center relative">
              {product.amazonChoice && <AmazonChoiceBadge />}
              <img 
                src={productImages[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {productImages.map((image, index) => (
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
            
            {/* Product variant selection for product 3 */}
            {productId === 3 && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Taille</label>
                <Select value={mattressSize} onValueChange={setMattressSize}>
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Sélectionnez une taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="140x200">140cm x 200cm</SelectItem>
                    <SelectItem value="160x200">160cm x 200cm</SelectItem>
                    <SelectItem value="180x200">180cm x 200cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
                {product.rating % 1 !== 0 && (
                  <StarHalf className="h-5 w-5 text-yellow-400" fill="currentColor" stroke="currentColor" />
                )}
                {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" fill="currentColor" />
                ))}
              </div>
              <span className="text-packshield-grey">{product.rating} ({product.reviews} avis)</span>
            </div>
            
            <div className="text-2xl font-bold text-packshield-navy mb-6">{product.price.toFixed(2)}€</div>
            
            <p className="text-packshield-grey mb-6">{description}</p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
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
                <ThumbsUp className="h-5 w-5 mr-2" />
                <span className="font-medium">+5000 clients satisfaits</span>
              </div>
            </div>
            
            <Button 
              className="bg-packshield-orange hover:bg-packshield-orange/90 text-white w-full md:w-auto mb-4"
              onClick={() => window.open("https://amazon.fr", "_blank")}
            >
              <ShoppingBag className="mr-2 h-5 w-5" /> Acheter sur Amazon
            </Button>
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
                {Object.entries(specifications).map(([key, value]) => (
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
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" fill="currentColor" />
                    ))}
                    <span className="ml-2 font-medium">Bonne qualité</span>
                  </div>
                  <p className="text-sm mb-2">La housse est bien fabriquée et a gardé notre matelas propre pendant notre déménagement. La seule raison pour laquelle je donne 4 étoiles est que j'aurais aimé que la fermeture éclair soit un peu plus robuste.</p>
                  <div className="text-xs text-packshield-grey">Michel R. - Il y a 1 mois</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-packshield-navy mb-6">Vous pourriez aussi aimer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 relative">
                <Link to={`/product/${relatedProduct.id}`}>
                  <div className="aspect-square overflow-hidden bg-packshield-lightGrey flex items-center justify-center">
                    {relatedProduct.amazonChoice && <AmazonChoiceBadge />}
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-packshield-navy mb-2">{relatedProduct.title}</h3>
                    <div className="text-lg font-bold text-packshield-navy">{relatedProduct.price.toFixed(2)}€</div>
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
