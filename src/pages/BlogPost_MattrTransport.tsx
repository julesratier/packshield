
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Linkedin, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { extractTableOfContents, prepareBlogContent } from '@/utils/blogUtils';

const BlogPostMattrTransport = () => {
  const [activeSection, setActiveSection] = useState("");
  
  // Blog post content
  const post = {
    id: 10,
    title: "🚚 Comment transporter son matelas efficacement ?",
    content: `
      <p>
        Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée… jusqu'à ce qu'on s'y confronte. Encombrant, fragile et exposé à la saleté, un matelas mal protégé peut facilement se tacher, se déformer ou s'endommager. Voici nos conseils pour un <strong>transport serein et efficace</strong>.
      </p>
      
      <h2 id="preparation">✅ 1. Préparez votre matelas avant le transport</h2>
      
      <p>Avant de déplacer votre matelas, quelques précautions sont à prendre :</p>
      
      <ul>
        <li>
          <strong>Aérez-le</strong> pendant quelques heures.
        </li>
        <li>
          <strong>Nettoyez-le rapidement</strong> à l'aide d'un aspirateur pour retirer poussière et acariens.
        </li>
        <li>
          Assurez-vous qu'il est <strong>parfaitement sec</strong>, sans humidité résiduelle.
        </li>
      </ul>
      
      <p>👉 Cette étape permet d'éviter les odeurs désagréables et réduit les risques de moisissures, surtout si le transport dure plus d'une journée.</p>
      
      <h2 id="protection">✅ 2. Utilisez une housse de protection adaptée</h2>
      
      <p>Ne transportez jamais un matelas à nu :</p>
      
      <ul>
        <li>
          Optez pour une <strong>housse de déménagement zippée</strong>, résistante et imperméable.
        </li>
        <li>
          Les modèles dotés de <strong>poignées intégrées</strong> facilitent grandement la manutention, notamment dans les escaliers.
        </li>
        <li>
          Choisissez un matériau <strong>épais mais respirant</strong>, qui évite la condensation pendant le trajet.
        </li>
      </ul>
      
      <p>💡 Les housses Packshield sont conçues spécialement pour répondre à ces exigences.</p>
      
      <h2 id="transport">✅ 3. Transportez le matelas à plat si possible</h2>
      
      <p>Si votre véhicule le permet, il est préférable de <strong>placer le matelas à plat</strong> pour éviter qu'il ne se plie ou s'affaisse :</p>
      
      <ul>
        <li>
          Positionnez-le sur une surface plane (fond de camion, sommier démonté, etc.).
        </li>
        <li>
          <strong>Évitez de poser des objets lourds dessus</strong>, surtout au centre.
        </li>
      </ul>
      
      <p>Si vous devez le <strong>transporter debout</strong>, veillez à bien le caler à l'aide de sangles ou entre deux meubles, afin qu'il ne glisse pas ni ne se déforme.</p>
      
      <h2 id="precautions">✅ 4. Protégez-le des chocs, de l'humidité et de la saleté</h2>
      
      <p>Durant le transport, plusieurs risques peuvent endommager votre matelas :</p>
      
      <ul>
        <li>
          <strong>Protégez les coins</strong> avec des renforts ou du carton si vous devez passer par des cages d'escalier étroites.
        </li>
        <li>
          <strong>Ne posez jamais le matelas directement au sol</strong>, surtout à l'extérieur.
        </li>
        <li>
          <strong>Évitez de déménager par temps de pluie</strong>, ou prévoyez une bâche supplémentaire pour une protection maximale.
        </li>
      </ul>
      
      <h2 id="arrivee">✅ 5. Déballez-le rapidement à l'arrivée</h2>
      
      <p>Une fois le matelas arrivé à destination :</p>
      
      <ul>
        <li>
          Retirez la housse de transport dès que possible pour lui permettre de <strong>respirer</strong>.
        </li>
        <li>
          Laissez-le <strong>à plat pendant quelques heures</strong> avant de le réutiliser.
        </li>
        <li>
          Vérifiez qu'il <strong>n'a subi aucune déformation</strong> durant le transport.
        </li>
      </ul>
      
      <h2 id="resume">🧠 En résumé</h2>
      
      <blockquote>
        <p>✔️ Nettoyez et aérez le matelas avant le transport</p>
        <p>✔️ Protégez-le avec une housse zippée et résistante</p>
        <p>✔️ Transportez-le à plat ou bien calé debout</p>
        <p>✔️ Évitez les chocs, la pluie et les sols sales</p>
        <p>✔️ Déballez-le rapidement pour qu'il retrouve sa forme</p>
      </blockquote>
      
      <p>
        Un matelas bien transporté, c'est un matelas préservé. Pour cela, <strong>une housse adaptée est indispensable</strong>. Les <strong>housses Packshield</strong> associent robustesse, praticité et design pensé pour une manutention simplifiée.
      </p>
      
      <p>
        <a href="https://amzn.to/43aXBYX" target="_blank" rel="noopener noreferrer" className="text-packshield-orange hover:underline">➡️ Découvrez nos modèles sur Amazon</a>
      </p>
    `,
    image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
    date: "10 Mai 2025",
    readTime: "6 min de lecture",
    category: "Déménagement",
    author: {
      name: "Hélène Mirmande",
      avatar: "/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png",
      role: "Responsable Produits chez Packshield"
    },
    relatedPosts: [
      {
        id: 11,
        title: "Top 8 des meilleures housses matelas pour les déménagement",
        image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
        date: "8 Mai 2025"
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
    const text = "🚚 Comment transporter son matelas efficacement ? - Packshield";
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
          <main className="lg:w-2/3">
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
                  Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée… jusqu'à ce qu'on s'y confronte. Encombrant, fragile et exposé à la saleté, un matelas mal protégé peut facilement se tacher, se déformer ou s'endommager.
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
                  Déménagement
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Matelas
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Protection
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
              
              <nav className="mt-4">
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

export default BlogPostMattrTransport;
