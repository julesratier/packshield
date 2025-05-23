
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Flag from '@/components/Flag';
import CustomFAQ from '@/components/CustomFAQ';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Helmet from '@/components/SEO/Helmet';
import { products } from '@/utils/products';
import { getProductUrl } from '@/utils/productSlug';

const Index = () => {
  // Get featured products from the central product data source
  const featuredProducts = products
    .filter(product => [1, 4, 5].includes(product.id))
    .map(product => ({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      amazonUrl: product.id === 1 ? "https://amzn.to/43aXBYX" : 
                 product.id === 4 ? "https://amzn.to/4jfN1Gh" :
                 product.id === 5 ? "https://amzn.to/4jPHo2D" : "https://amazon.fr"
    }));

  const blogPosts = [
    {
      id: 10,
      title: "Comment transporter son matelas efficacement ?",
      excerpt: "Découvrez les meilleures pratiques pour transporter votre matelas afin d'éviter les dommages et faciliter la manutention.",
      image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
      date: "10 Mai 2025",
      readTime: "6 min de lecture"
    },
    {
      id: 11,
      title: "Top 8 des meilleures housses matelas pour les déménagement",
      excerpt: "Notre comparatif complet des meilleures housses de protection pour votre matelas lors d'un déménagement.",
      image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
      date: "8 Mai 2025",
      readTime: "7 min de lecture"
    },
    {
      id: 2,
      title: "Moving Day Tips: Protect Your Furniture",
      excerpt: "Conseils essentiels pour assurer la protection de vos meubles pendant le processus de déménagement.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "5 Mai 2025",
      readTime: "4 min de lecture"
    }
  ];

  // Create FAQ structured data
  const createFaqStructuredData = () => {
    const faqItems = [
      {
        question: "Que propose Packshield ?",
        answer: "Packshield conçoit et commercialise des produits de qualité pour le déménagement et le stockage, pensés pour protéger vos biens efficacement. Tous nos produits sont imaginés en France, avec une attention particulière portée à la praticité, la résistance des matériaux, et l'esthétique."
      },
      {
        question: "Où puis-je acheter vos produits ?",
        answer: "Tous nos produits sont disponibles exclusivement sur Amazon. Packshield.shop est notre vitrine officielle, mais l'achat se fait directement via la plateforme Amazon pour vous garantir un paiement sécurisé, une livraison rapide, et un service client fiable."
      },
      {
        question: "Comment accéder à vos produits sur Amazon ?",
        answer: "Chaque fiche produit sur notre site contient un lien direct vers la page Amazon correspondante. Il vous suffit de cliquer sur le bouton \"Acheter sur Amazon\" pour finaliser votre commande."
      },
      {
        question: "Quels sont les délais de livraison ?",
        answer: "Les délais de livraison dépendent des conditions Amazon. En général, vous recevez votre commande en 1 à 3 jours ouvrés si vous êtes membre Prime, ou sous 3 à 5 jours en livraison standard."
      },
      {
        question: "Puis-je retourner un produit ?",
        answer: "Oui, tous les achats effectués sur Amazon bénéficient de leur politique de retour standard. Vous pouvez généralement retourner un produit sous 30 jours après réception."
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Les paiements sont gérés par Amazon. Vous pouvez payer avec carte bancaire, chèques-cadeaux Amazon, ou tout autre moyen proposé par Amazon dans votre région."
      },
      {
        question: "Comment vous contacter ?",
        answer: "Pour toute question avant ou après votre achat, vous pouvez nous écrire à contact@packshield-official.com. Si votre question concerne une commande en cours, nous vous recommandons également de contacter le service client Amazon pour une prise en charge rapide."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  };

  // Create organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Packshield",
    "url": "https://packshield.shop/",
    "logo": "https://packshield.shop/lovable-uploads/d3fa32c1-109f-44d2-a7fa-1157cc2badad.png",
    "description": "Packshield est une marque française spécialisée dans la conception de solutions premium pour la protection de matelas et le stockage d'affaires, offrant des produits durables et pratiques pour la maison.",
    "foundingDate": "2015",
    "slogan": "Protégeons ce qui compte le plus avec des solutions de stockage premium.",
    "sameAs": [
      "https://www.facebook.com/people/Packshield/100088566477762/",
      "https://amzn.to/3GQ0wyC"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "1248"
    }
  };

  // Create website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Packshield",
    "url": "https://packshield.shop/",
    "description": "Site officiel de Packshield, votre partenaire en solutions de protection et de stockage premium."
  };

  // Create product structured data for featured products
  const productsStructuredData = featuredProducts.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": "Produit de protection et stockage premium pour la maison, conçu par Packshield.",
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
      "url": product.amazonUrl,
      "priceCurrency": "EUR",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock"
    }
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet 
        title="Packshield - Housses de matelas et sacs de rangement premium"
        description="Protégez vos matelas et affaires avec Packshield. Housses de rangement premium contre la poussière, l'humidité et la saleté. Durables, pratiques, et esthétiques."
        structuredData={[
          organizationStructuredData,
          websiteStructuredData,
          ...productsStructuredData,
          createFaqStructuredData()
        ]}
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-packshield-navy text-white">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/53984721-50dd-4b8f-aa8e-386a447772dd.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Protégez ce qui compte vraiment</h1>
            <p className="text-lg md:text-xl mb-8">
              Housses de matelas premium et solutions de stockage conçues pour protéger de la poussière, de la saleté, de l'humidité et des nuisibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produits">
                <InteractiveHoverButton 
                  text="Voir nos produits" 
                  className="bg-packshield-orange hover:bg-packshield-orange text-white w-48"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - First */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">Nos meilleures ventes</h2>
            <Link to="/produits" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => {
              const fullProduct = products.find(p => p.id === product.id);
              const productUrl = fullProduct ? getProductUrl(fullProduct) : `/produits/${product.id}`;
              
              return (
                <Card key={product.id} className="product-card overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 rounded-xl">
                  <Link to={productUrl} className="block">
                    <div className="bg-packshield-lightGrey rounded-xl rounded-b-none">
                      <AspectRatio ratio={1 / 1}>
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-packshield-navy mb-2">{product.title}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} 
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : (i === Math.floor(product.rating) && product.rating % 1 > 0 ? 'text-yellow-400' : 'text-gray-300')}`} 
                                fill={i < Math.floor(product.rating) ? "currentColor" : (i === Math.floor(product.rating) && product.rating % 1 > 0 ? "currentColor" : "none")} />
                          ))}
                        </div>
                        <span className="text-sm text-packshield-grey">({product.reviews})</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-packshield-navy">{product.price.toFixed(2).replace('.', ',')}€</span>
                      </div>
                      <a 
                        href={product.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-packshield-orange hover:bg-packshield-orange/90 text-white text-center py-2 rounded-md transition-colors"
                      >
                        Acheter sur Amazon
                      </a>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Second */}
      <section className="py-16 md:py-20 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-packshield-navy mb-4">Pourquoi choisir Packshield ?</h2>
            <p className="text-packshield-grey max-w-2xl mx-auto">
              Nos solutions de protection premium sont conçues avec la qualité et la durabilité à l'esprit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Protection supérieure</h3>
              <p className="text-packshield-grey">Matériaux épais et durables qui protègent contre la poussière, l'humidité et les nuisibles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Qualité premium</h3>
              <p className="text-packshield-grey">Fabriqués à partir de matériaux de haute qualité conçus pour durer des années.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Facile à utiliser</h3>
              <p className="text-packshield-grey">Une conception simple qui rend l'emballage, le stockage et le déménagement sans tracas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Marque française</h3>
              <p className="text-packshield-grey">Tous nos produits sont conçus par une équipe en France pour mieux vous satisfaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-packshield-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Des milliers de clients sont satisfaits partout en France. Merci pour votre confiance ❤️ depuis 10 ans déjà.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "Super qualité pour cette housse qui me permet de laisser mon matelas sous le lit alors que les enfants viennent l'été. Le matelas est super, bien protégé et la housse 'est très solide"
              </p>
              <div className="font-medium">Avis sur Amazon - 3 septembre 2024</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "Avec notre matelas de 140*200cm pour le déménagement, cette protection est idéale. Facile à poser sur le matelas et le déplacement nickel. Je recommande"
              </p>
              <div className="font-medium">Avis sur Amazon - 21 décembre 2024</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "Je suis hyper satisfaite de mon achat ! Il faut savoir que j'habite un petit appartement donc peu de rangement et grâce à ces housses je peux stocker énormément de vêtements ou autre et Hop dans les placards ! C'est un gain de place considérable."
              </p>
              <div className="font-medium">Avis sur Amazon - 10 décembre 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-4 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">Notre Blog</h2>
            <Link to="/blog" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              Tous les articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-packshield-grey mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-packshield-navy mb-2">{post.title}</h3>
                  <p className="text-packshield-grey mb-4">{post.excerpt}</p>
                  <span className="text-packshield-orange font-medium hover:text-packshield-navy flex items-center gap-1">
                    Lire plus <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Startup Style */}
      <div className="mt-0">
        <CustomFAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
