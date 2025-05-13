
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPostMattrTransport = () => {
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

  // Related posts
  const relatedPosts = [
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
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="h-96 md:h-[550px]">
          <img
            src="/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png"
            alt="Comment transporter son matelas efficacement ?"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">🚚 Comment transporter son matelas efficacement ?</h1>
              <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>10 Mai 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>6 min de lecture</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>Hélène Mirmande</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto">
          {/* Article Content */}
          <main className="lg:w-2/3">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Retour au Blog</span>
              </Link>
            </div>
            
            {/* Introduction Box */}
            <div className="bg-[#F1F0FB] p-6 md:p-8 rounded-lg mb-8 border-l-4 border-packshield-orange">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-packshield-navy leading-relaxed mb-0">
                  Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée… jusqu'à ce qu'on s'y confronte. Encombrant, fragile et exposé à la saleté, un matelas mal protégé peut facilement se tacher, se déformer ou s'endommager. Voici nos conseils pour un <strong>transport serein et efficace</strong>.
                </p>
              </div>
            </div>
            
            {/* Article */}
            <article className={cn(
              "prose prose-lg max-w-none",
              "prose-headings:text-packshield-navy prose-headings:font-bold prose-headings:leading-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-6",
              "prose-p:text-packshield-grey prose-p:leading-relaxed prose-p:mb-6",
              "prose-ul:my-6 prose-li:text-packshield-grey"
            )}>
              <hr className="my-8" />
              
              <h2>✅ 1. Préparez votre matelas avant le transport</h2>
              
              <p>Avant de déplacer votre matelas, quelques précautions sont à prendre :</p>
              
              <ul className="space-y-2 pl-6 mb-8">
                <li className="text-lg text-packshield-grey"><strong>Aérez-le</strong> pendant quelques heures.</li>
                <li className="text-lg text-packshield-grey"><strong>Nettoyez-le rapidement</strong> à l'aide d'un aspirateur pour retirer poussière et acariens.</li>
                <li className="text-lg text-packshield-grey">Assurez-vous qu'il est <strong>parfaitement sec</strong>, sans humidité résiduelle.</li>
              </ul>
              
              <p className="text-packshield-navy bg-[#FEF7CD] p-4 rounded-md">👉 Cette étape permet d'éviter les odeurs désagréables et réduit les risques de moisissures, surtout si le transport dure plus d'une journée.</p>
              
              <hr className="my-8" />
              
              <h2>✅ 2. Utilisez une housse de protection adaptée</h2>
              
              <p>Ne transportez jamais un matelas à nu :</p>
              
              <ul className="space-y-2 pl-6 mb-8">
                <li className="text-lg text-packshield-grey">Optez pour une <strong>housse de déménagement zippée</strong>, résistante et imperméable.</li>
                <li className="text-lg text-packshield-grey">Les modèles dotés de <strong>poignées intégrées</strong> facilitent grandement la manutention, notamment dans les escaliers.</li>
                <li className="text-lg text-packshield-grey">Choisissez un matériau <strong>épais mais respirant</strong>, qui évite la condensation pendant le trajet.</li>
              </ul>
              
              <p className="text-packshield-navy bg-[#D3E4FD] p-4 rounded-md">💡 Les housses Packshield sont conçues spécialement pour répondre à ces exigences.</p>
              
              <hr className="my-8" />
              
              <h2>✅ 3. Transportez le matelas à plat si possible</h2>
              
              <p>Si votre véhicule le permet, il est préférable de <strong>placer le matelas à plat</strong> pour éviter qu'il ne se plie ou s'affaisse :</p>
              
              <ul className="space-y-2 pl-6 mb-8">
                <li className="text-lg text-packshield-grey">Positionnez-le sur une surface plane (fond de camion, sommier démonté, etc.).</li>
                <li className="text-lg text-packshield-grey"><strong>Évitez de poser des objets lourds dessus</strong>, surtout au centre.</li>
              </ul>
              
              <p>Si vous devez le <strong>transporter debout</strong>, veillez à bien le caler à l'aide de sangles ou entre deux meubles, afin qu'il ne glisse pas ni ne se déforme.</p>
              
              <hr className="my-8" />
              
              <h2>✅ 4. Protégez-le des chocs, de l'humidité et de la saleté</h2>
              
              <p>Durant le transport, plusieurs risques peuvent endommager votre matelas :</p>
              
              <ul className="space-y-2 pl-6 mb-8">
                <li className="text-lg text-packshield-grey"><strong>Protégez les coins</strong> avec des renforts ou du carton si vous devez passer par des cages d'escalier étroites.</li>
                <li className="text-lg text-packshield-grey"><strong>Ne posez jamais le matelas directement au sol</strong>, surtout à l'extérieur.</li>
                <li className="text-lg text-packshield-grey"><strong>Évitez de déménager par temps de pluie</strong>, ou prévoyez une bâche supplémentaire pour une protection maximale.</li>
              </ul>
              
              <hr className="my-8" />
              
              <h2>✅ 5. Déballez-le rapidement à l'arrivée</h2>
              
              <p>Une fois le matelas arrivé à destination :</p>
              
              <ul className="space-y-2 pl-6 mb-8">
                <li className="text-lg text-packshield-grey">Retirez la housse de transport dès que possible pour lui permettre de <strong>respirer</strong>.</li>
                <li className="text-lg text-packshield-grey">Laissez-le <strong>à plat pendant quelques heures</strong> avant de le réutiliser.</li>
                <li className="text-lg text-packshield-grey">Vérifiez qu'il <strong>n'a subi aucune déformation</strong> durant le transport.</li>
              </ul>
              
              <hr className="my-8" />
              
              <h2>🧠 En résumé</h2>
              
              <blockquote className="bg-[#F2FCE2] p-6 rounded-md mb-8 border-l-4 border-packshield-orange">
                <p className="mb-2">✔️ Nettoyez et aérez le matelas avant le transport</p>
                <p className="mb-2">✔️ Protégez-le avec une housse zippée et résistante</p>
                <p className="mb-2">✔️ Transportez-le à plat ou bien calé debout</p>
                <p className="mb-2">✔️ Évitez les chocs, la pluie et les sols sales</p>
                <p className="mb-0">✔️ Déballez-le rapidement pour qu'il retrouve sa forme</p>
              </blockquote>
              
              <hr className="my-8" />
              
              <p>
                Un matelas bien transporté, c'est un matelas préservé. Pour cela, <strong>une housse adaptée est indispensable</strong>. Les <strong>housses Packshield</strong> associent robustesse, praticité et design pensé pour une manutention simplifiée.
              </p>
              
              <p>
                <a href="https://amzn.to/43aXBYX" target="_blank" rel="noopener noreferrer" className="text-packshield-orange hover:underline text-lg font-medium">
                  ➡️ Découvrez nos modèles sur Amazon
                </a>
              </p>
            </article>
            
            {/* Tags */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Déménagement
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Matelas
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Protection
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-10">
              <h4 className="font-medium text-packshield-navy mb-3 text-lg">Partager cet article</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" onClick={shareOnFacebook}>
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnTwitter}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 4h16v16H4z"></path>
                    <path d="M4 4l16 16"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnLinkedIn}>
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-12 p-8 bg-packshield-lightGrey rounded-lg">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4 border-2 border-white shadow">
                  <AvatarImage src="/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png" alt="Hélène Mirmande" />
                  <AvatarFallback>HM</AvatarFallback>
                </Avatar>
                <div>
                  <Link to="/author/helene-mirmande" className="font-semibold text-packshield-navy text-lg hover:text-packshield-orange transition-colors">Hélène Mirmande</Link>
                  <p className="text-packshield-grey">Responsable Produits chez Packshield</p>
                </div>
              </div>
              <p className="mt-4 text-packshield-grey leading-relaxed">
                Sarah est spécialisée dans la conception de produits pour la maison et la décoration. 
                Elle accorde une grande importance à la qualité et imagine des solutions simples et pratiques, 
                pensées pour faciliter le quotidien.
              </p>
            </div>

            {/* You might also like */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-packshield-navy mb-6">Vous pourriez aimer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {post.title}
                      </h5>
                      <p className="text-sm text-packshield-grey mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Related Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-packshield-navy mb-6 pb-2 border-b">Articles Similaires</h4>
              <div className="space-y-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {relatedPost.title}
                      </h5>
                      <p className="text-sm text-packshield-grey mt-1">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-packshield-navy mb-6 pb-2 border-b">Catégories</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog?category=moving" className="flex items-center justify-between text-packshield-grey hover:text-packshield-orange transition-colors group">
                    <span>Déménagement</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=storage" className="flex items-center justify-between text-packshield-grey hover:text-packshield-orange transition-colors group">
                    <span>Stockage</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=mattresses" className="flex items-center justify-between text-packshield-grey hover:text-packshield-orange transition-colors group">
                    <span>Matelas</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=nouveautes" className="flex items-center justify-between text-packshield-grey hover:text-packshield-orange transition-colors group">
                    <span>Nouveautés</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=tips" className="flex items-center justify-between text-packshield-grey hover:text-packshield-orange transition-colors group">
                    <span>Conseils & Guides</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="bg-packshield-navy p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-4">Abonnez-vous à notre Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Restez informé des derniers conseils et nouveautés produits.
              </p>
              <form>
                <div className="mb-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-packshield-orange"
                  />
                </div>
                <Button className="w-full bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                  S'abonner
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Helper functions for social sharing
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

export default BlogPostMattrTransport;
