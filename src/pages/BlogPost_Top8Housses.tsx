import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Linkedin, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { extractTableOfContents, prepareBlogContent } from '@/utils/blogUtils';

const BlogPostTop8Housses = () => {
  const [activeSection, setActiveSection] = useState("");
  
  // Blog post content
  const post = {
    id: 11,
    title: "Top 8 des meilleures housses matelas pour les déménagement",
    content: `
      <p>Choisir la bonne housse de matelas pour un déménagement est essentiel pour protéger votre literie pendant le transport. Une housse de qualité protège contre la poussière, l'humidité, les déchirures et les taches, préservant ainsi votre investissement. Voici notre sélection des meilleures options disponibles sur le marché.</p>
      
      <h2 id="pourquoi-proteger">Pourquoi protéger son matelas lors d'un déménagement ?</h2>
      <p>Avant de découvrir notre sélection, rappelons pourquoi il est crucial de bien protéger votre matelas :</p>
      
      <ul>
        <li>Les matelas sont des investissements coûteux qui méritent d'être protégés</li>
        <li>Ils sont particulièrement vulnérables à la saleté, la poussière et l'humidité</li>
        <li>Le transport peut facilement endommager leur structure et leur revêtement</li>
        <li>Une fois abîmé, un matelas ne peut généralement pas être réparé</li>
      </ul>
      
      <div class="tip-box">
        <p><strong>Conseil important :</strong> Ne vous contentez jamais d'une simple couverture ou d'une bâche pour protéger votre matelas ! Ces solutions improvisées n'offrent pas la protection nécessaire et peuvent même créer de la condensation.</p>
      </div>
      
      <h2 id="criteres-selection">Critères de sélection d'une bonne housse de matelas</h2>
      <p>Nous avons évalué les housses selon plusieurs critères essentiels :</p>
      
      <ul>
        <li><strong>Matériau :</strong> imperméabilité, résistance et respirabilité</li>
        <li><strong>Fermeture :</strong> système de fermeture sécurisé et hermétique</li>
        <li><strong>Ergonomie :</strong> présence de poignées pour faciliter le transport</li>
        <li><strong>Durabilité :</strong> qualité des coutures et résistance générale</li>
        <li><strong>Rapport qualité-prix :</strong> équilibre entre caractéristiques et coût</li>
      </ul>
      
      <h2 id="meilleures-housses">Notre top 8 des meilleures housses de matelas</h2>
      
      <p>Après avoir testé plus de 20 modèles différents, voici notre sélection des 8 meilleures housses pour protéger efficacement votre matelas lors d'un déménagement :</p>
      
      <h2 id="packshield-premium">1. Housse Packshield Premium - Notre coup de cœur</h2>
      <p>La housse Packshield Premium combine protection optimale et praticité avec ses 6 poignées de transport renforcées et son tissu imperméable respirant. Sa fermeture éclair sur trois côtés facilite l'installation tandis que son traitement anti-moisissures en fait l'option idéale pour les stockages de longue durée.</p>
      
      <blockquote>
        <p>"La housse Packshield est devenue notre référence pour la protection des matelas. Sa conception répond parfaitement aux contraintes d'un déménagement professionnel."</p>
        <p>- Marc Leroy, Déménageur professionnel</p>
      </blockquote>
      
      <h2 id="conclusion">Conclusion: faites le bon choix pour votre matelas</h2>
      <p>Investir dans une housse de qualité est un petit prix à payer pour protéger un matelas qui vous a coûté plusieurs centaines d'euros. Prenez en compte la taille exacte de votre matelas, ses particularités (comme l'épaisseur pour les matelas à mémoire de forme) et vos besoins spécifiques (stockage long terme ou simple déménagement).</p>
      
      <p>Quelle que soit l'option choisie, n'oubliez pas que la protection de votre literie pendant un déménagement n'est pas un détail à négliger, mais un investissement dans la durabilité de votre confort quotidien.</p>
    `,
    image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
    date: "8 Mai 2025",
    readTime: "7 min de lecture",
    category: "Guides d'achat",
    author: {
      name: "Hélène Mirmande",
      avatar: "/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png",
      role: "Responsable Produits chez Packshield"
    },
    relatedPosts: [
      {
        id: 10,
        title: "Comment transporter son matelas efficacement ?",
        image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
        date: "10 Mai 2025"
      },
      {
        id: 2,
        title: "Moving Day Tips: Protect Your Furniture",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        date: "5 Mai 2025"
      }
    ]
  };

  // Extract table of contents
  const tableOfContents = extractTableOfContents(post.content);
  
  // Prepare blog content with consistent styling
  const preparedContent = prepareBlogContent(post.content);

  // Social sharing functions
  const shareOnFacebook = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = post.title + " - Packshield";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Intersection Observer to highlight active section in table of contents
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('h2[id]').forEach(header => observer.observe(header));
    
    return () => observer.disconnect();
  }, [post.content]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Article Content */}
          <main className="lg:w-3/4">
            {/* Back to Blog */}
            <div className="mb-10">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Retour au Blog</span>
              </Link>
            </div>
            
            {/* Article */}
            <article className="prose prose-lg max-w-3xl mx-auto">
              <div className="bg-packshield-lightGrey p-6 rounded-xl mb-10">
                <p className="text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                  Choisir la bonne housse de matelas pour un déménagement est essentiel pour protéger votre literie pendant le transport. Une housse de qualité protège contre la poussière, l'humidité, les déchirures et les taches, préservant ainsi votre investissement.
                </p>
              </div>
              
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: preparedContent }}
              />
            </article>
            
            {/* Tags */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2">
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Guides d'achat
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Matelas
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Déménagement
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 max-w-3xl mx-auto">
              <h4 className="font-medium text-packshield-navy mb-3">Partager cet article</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" onClick={shareOnFacebook} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnTwitter} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 4h16v16H4z"></path>
                    <path d="M4 4l16 16"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnLinkedIn} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-16 p-8 bg-packshield-lightGrey rounded-xl max-w-3xl mx-auto">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>HM</AvatarFallback>
                </Avatar>
                <div>
                  <Link to="/author/helene-mirmande" className="text-xl font-semibold text-packshield-navy hover:text-packshield-orange transition-colors">
                    {post.author.name}
                  </Link>
                  <p className="text-packshield-grey">{post.author.role}</p>
                </div>
              </div>
              <p className="mt-4 text-packshield-grey">
                Hélène est spécialisée dans la conception de produits pour la maison et la décoration. 
                Elle accorde une grande importance à la qualité et imagine des solutions simples et pratiques, 
                pensées pour faciliter le quotidien.
              </p>
            </div>
          </main>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Table of Contents */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <ListOrdered className="h-5 w-5 text-packshield-orange" />
                <h4 className="text-xl font-semibold text-packshield-navy">Table des matières</h4>
              </div>
              
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full py-2 px-4 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? 'bg-packshield-lightGrey text-packshield-orange font-medium'
                            : 'hover:bg-gray-50 text-packshield-grey'
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Related Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-packshield-navy mb-6">Articles Similaires</h4>
              <div className="space-y-6">
                {post.relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {relatedPost.title}
                      </h5>
                      <p className="text-sm text-packshield-grey mt-2">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostTop8Housses;
