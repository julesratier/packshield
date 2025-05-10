import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  const [emailInput, setEmailInput] = useState('');

  const featuredProducts = [
    {
      id: 1,
      title: "Housse Premium pour Matelas Queen",
      image: "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
      price: 24.99,
      rating: 4.8,
      reviews: 127,
      amazonUrl: "https://amazon.com",
    },
    {
      id: 2,
      title: "Protection Matelas King Size",
      image: "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png",
      price: 29.99,
      rating: 4.7,
      reviews: 94,
      amazonUrl: "https://amazon.com",
    },
    {
      id: 3,
      title: "Lot de 2 Sacs de Rangement",
      image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      price: 19.99,
      rating: 4.9,
      reviews: 58,
      amazonUrl: "https://amazon.com",
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Comment bien stocker un matelas",
      excerpt: "Découvrez les meilleures pratiques pour stocker votre matelas afin de prolonger sa durée de vie et maintenir sa qualité.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      date: "8 Mai 2025",
      readTime: "5 min de lecture"
    },
    {
      id: 2,
      title: "Jour de déménagement : Protégez vos meubles",
      excerpt: "Conseils essentiels pour assurer la protection de vos meubles pendant le processus de déménagement.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "5 Mai 2025",
      readTime: "4 min de lecture"
    },
    {
      id: 3,
      title: "Pourquoi la qualité du stockage est importante",
      excerpt: "Comprendre l'importance des solutions de stockage de haute qualité pour vos biens précieux.",
      image: "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      date: "1 Mai 2025",
      readTime: "6 min de lecture"
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
        <div className="absolute inset-0 bg-[url('/lovable-uploads/657da3f0-0cc3-4d05-9bb4-a9ec2c5d92c4.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Protégez ce qui compte vraiment</h1>
            <p className="text-lg md:text-xl mb-8">
              Housses de matelas premium et solutions de stockage conçues pour protéger vos biens précieux de la poussière, de la saleté et de l'humidité.
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

      {/* Features Section */}
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
                <Truck className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Livraison rapide</h3>
              <p className="text-packshield-grey">Livraison rapide directement à votre porte quand vous en avez le plus besoin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">Produits Vedettes</h2>
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
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-sm text-packshield-grey">({product.reviews})</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-packshield-navy">${product.price}</span>
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

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 bg-packshield-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Ne nous croyez pas sur parole - écoutez les clients qui font confiance à Packshield pour leurs besoins de stockage.
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
                "J'ai utilisé les housses de matelas Packshield lors de notre récent déménagement. Elles ont gardé nos matelas propres et protégés tout au long du processus. Je les utiliserai certainement à nouveau !"
              </p>
              <div className="font-medium">Sarah T.</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "Ces sacs de rangement sont incroyablement durables. Je les utilise pour le stockage saisonnier et ils ont parfaitement tenu le coup. Tout reste propre et protégé."
              </p>
              <div className="font-medium">Michel R.</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "La qualité des produits Packshield est exceptionnelle. J'ai essayé d'autres marques auparavant, mais rien ne se compare à l'épaisseur et à la durabilité de ces housses."
              </p>
              <div className="font-medium">Jennifer L.</div>
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
