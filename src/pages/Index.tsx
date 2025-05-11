
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Flag from '@/components/Flag';
import FAQ from '@/components/FAQ';
import { products } from '@/utils/products';

const Index = () => {
  const [emailInput, setEmailInput] = useState('');

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une implémentation réelle, cela enverrait l'email à un service
    alert(`Merci de vous être abonné avec ${emailInput} !`);
    setEmailInput('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-packshield-navy text-white">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/2ac141c6-466d-4973-8156-de9fb5067a85.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Protégez ce qui compte vraiment</h1>
            <p className="text-lg md:text-xl mb-8">
              Housses de matelas premium et solutions de stockage conçues pour protéger de la poussière, de la saleté, de l'humidité et des nuisibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                  Voir nos produits
                </Button>
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
            <Link to="/products" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <Card key={product.id} className="product-card overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="bg-packshield-lightGrey">
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
            ))}
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
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Protection supérieure</h3>
              <p className="text-packshield-grey">Matériaux épais et durables qui protègent contre la poussière, l'humidité et les nuisibles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Qualité premium</h3>
              <p className="text-packshield-grey">Fabriqués à partir de matériaux de haute qualité conçus pour durer des années.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Facile à utiliser</h3>
              <p className="text-packshield-grey">Une conception simple qui rend l'emballage, le stockage et le déménagement sans tracas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
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
      <section className="py-16 md:py-20 bg-packshield-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Des milliers de clients sont satisfaits partout en France. Merci pour votre confiance ❤️ depuis 10 ans déjà.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">Notre Blog</h2>
            <Link to="/blog" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              Tous les articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
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

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="py-16 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-packshield-navy mb-4">Restez informé</h2>
            <p className="text-packshield-grey mb-8">
              Abonnez-vous à notre newsletter pour les dernières mises à jour de produits, offres exclusives et conseils de stockage.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-grow py-2 px-4 rounded-l-md border-2 border-r-0 border-packshield-navy focus:outline-none focus:ring-2 focus:ring-packshield-orange"
                required
              />
              <button
                type="submit"
                className="bg-packshield-navy hover:bg-packshield-navy/90 text-white py-2 px-6 rounded-r-md transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
