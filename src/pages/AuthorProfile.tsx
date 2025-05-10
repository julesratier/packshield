
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';

const AuthorProfile = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample recent posts by this author
  const recentPosts = [
    {
      id: 10,
      title: "Comment transporter son matelas efficacement ?",
      excerpt: "Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée.",
      image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
      date: "10 Mai 2025",
      readTime: "6 min de lecture",
      category: "blog"
    },
    {
      id: 11,
      title: "Top 8 des meilleures housses matelas pour les déménagement",
      excerpt: "Protéger son matelas pendant un déménagement est essentiel pour éviter les salissures, les déchirures, ou l'humidité.",
      image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
      date: "8 Mai 2025",
      readTime: "7 min de lecture",
      category: "blog"
    },
    {
      id: 2,
      title: "Moving Day Tips: Protect Your Furniture",
      excerpt: "Essential tips to ensure your furniture stays protected during the moving process.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80",
      date: "5 Mai 2025",
      readTime: "4 min de lecture",
      category: "moving"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png"
                  alt="Hélène Mirmande" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy mb-2">Hélène Mirmande</h1>
                <p className="text-packshield-orange font-medium mb-4">Responsable Produits chez Packshield</p>
                <p className="text-packshield-grey mb-6">
                  Sarah est spécialisée dans la conception de produits pour la maison et la décoration. 
                  Elle accorde une grande importance à la qualité et imagine des solutions simples et pratiques, 
                  pensées pour faciliter le quotidien.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-packshield-navy mb-6">Articles récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogPostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthorProfile;
