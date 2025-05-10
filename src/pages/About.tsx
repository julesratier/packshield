
import { Shield, Award, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-packshield-navy text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de Packshield</h1>
            <p className="text-xl text-gray-200">
              Protéger ce qui compte le plus avec des solutions de stockage premium.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-packshield-navy mb-4">Notre histoire</h2>
              <p className="text-packshield-grey mb-4">
                Packshield est né d'une simple observation : les solutions de déménagement et de stockage sur le marché n'offraient pas une protection adéquate pour les articles de valeur comme les matelas et les meubles.
              </p>
              <p className="text-packshield-grey mb-4">
                Fondée en 2018, nous nous sommes fixés pour mission de créer des solutions de protection premium qui protègent véritablement vos biens de la poussière, de l'humidité et des dommages. Notre équipe combine l'expertise en science des matériaux, en conception de produits et en logistique pour fournir des produits de stockage qui dépassent les attentes.
              </p>
              <p className="text-packshield-grey">
                Aujourd'hui, nous sommes fiers d'être un nom de confiance dans les solutions de protection pour la maison, avec des milliers de clients satisfaits à travers le pays.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Entrepôt Packshield" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-packshield-navy mb-4">Notre mission</h2>
            <p className="text-xl text-packshield-grey">
              Fournir des produits de protection supérieurs qui aident les gens à garder leurs biens précieux en sécurité et en parfait état lors des déménagements ou du stockage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-packshield-navy text-center mb-12">Nos valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Protection de qualité</h3>
              <p className="text-packshield-grey">
                Nous nous engageons à créer des produits qui offrent une protection fiable pour vos biens précieux.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Excellence</h3>
              <p className="text-packshield-grey">
                Nous visons continuellement l'excellence dans tous les aspects de notre activité, de la conception des produits au service client.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Priorité au client</h3>
              <p className="text-packshield-grey">
                Nos clients sont au cœur de tout ce que nous faisons. Nous écoutons les retours et améliorons constamment nos produits.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 md:py-20 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-packshield-navy text-center mb-12">Notre équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Robert Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-packshield-navy">Robert Thompson</h3>
                <p className="text-packshield-grey">Fondateur & PDG</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Sarah Miller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-packshield-navy">Sarah Miller</h3>
                <p className="text-packshield-grey">Responsable Design Produit</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-packshield-navy">David Chen</h3>
                <p className="text-packshield-grey">Responsable des Opérations</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80" 
                  alt="Jennifer Taylor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-packshield-navy">Jennifer Taylor</h3>
                <p className="text-packshield-grey">Expérience Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-20 bg-packshield-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à protéger ce qui compte ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez notre gamme de produits de protection premium pour vos biens précieux.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                <Link to="/products">Acheter maintenant</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-packshield-navy">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
