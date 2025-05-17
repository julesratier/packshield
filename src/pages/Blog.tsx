
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Helmet from '@/components/SEO/Helmet';
import { getBlogUrl } from '@/utils/blogSlug';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Updated blog post data - assurons-nous d'avoir les mêmes IDs et titres que dans les redirections
  const blogPosts = [
    {
      id: 10,
      title: "Comment transporter son matelas efficacement ?",
      excerpt: "Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée.",
      image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
      date: "10 Mai 2025",
      readTime: "6 min de lecture",
      category: "blog",
      author: "Hélène Mirmande"
    },
    {
      id: 11,
      title: "Top 8 des meilleures housses matelas pour les déménagement",
      excerpt: "Protéger son matelas pendant un déménagement est essentiel pour éviter les salissures, les déchirures, ou l'humidité.",
      image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
      date: "8 Mai 2025",
      readTime: "7 min de lecture",
      category: "blog",
      author: "Hélène Mirmande"
    },
    {
      id: 2,
      title: "Moving Day Tips: Protect Your Furniture",
      excerpt: "Conseils essentiels pour assurer la protection de vos meubles pendant le processus de déménagement.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80",
      date: "5 Mai 2025",
      readTime: "4 min de lecture",
      category: "moving",
      author: "Hélène Mirmande"
    }
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Breadcrumb items
  const breadcrumbItems = [
    { title: 'Conseils', href: '/blog' }
  ];

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
        "name": "Conseils",
        "item": "https://packshield.shop/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet 
        title="Tout savoir sur la Protection de Matelas et le Rangement"
        description="Nos experts Packshield partagent leurs conseils pour bien choisir votre housse de matelas et organiser votre intérieur. Déménagement, stockage, entretien : on vous dit tout !"
        structuredData={breadcrumbStructuredData}
      />
      
      <Navbar />

      {/* Blog Header */}
      <div className="bg-packshield-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <BreadcrumbNav items={breadcrumbItems} light={true} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nos Conseils</h1>
            <p className="text-lg text-gray-200 mb-8">
              Conseils d'experts et astuces sur le stockage, le déménagement et la protection de vos biens.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-gray-300 focus-visible:ring-packshield-orange"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="h-14 bg-transparent justify-start">
              <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Tous
              </TabsTrigger>
              <TabsTrigger value="nouveautes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Nouveautés
              </TabsTrigger>
              <TabsTrigger value="blog" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Blog
              </TabsTrigger>
              <TabsTrigger value="moving" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Déménagement
              </TabsTrigger>
              <TabsTrigger value="storage" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Stockage
              </TabsTrigger>
              <TabsTrigger value="mattresses" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Matelas
              </TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Conseils & Guides
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-packshield-navy mb-2">Aucun article trouvé</h3>
            <p className="text-packshield-grey mb-4">Essayez d'ajuster votre recherche ou votre filtre de catégorie.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
