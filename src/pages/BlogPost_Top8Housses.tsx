
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPostTop8Housses = () => {
  // Social sharing functions
  const shareOnFacebook = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = "🛡️ Top 8 des meilleures housses matelas pour les déménagement - Packshield";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src="/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png"
            alt="Top 8 des meilleures housses matelas pour les déménagement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">🛡️ Top 8 des meilleures housses matelas pour les déménagement</h1>
              <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>8 Mai 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>7 min de lecture</span>
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <main className="lg:w-2/3">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Retour au Blog</span>
              </Link>
            </div>
            
            {/* Article */}
            <article className="prose prose-lg max-w-none">
              <p>
                Protéger son matelas pendant un déménagement est essentiel pour éviter les salissures, les déchirures, ou l'humidité. Une bonne housse de protection facilite aussi la manutention. Voici notre sélection des <strong>10 meilleures housses de matelas</strong> pour un transport en toute sérénité.
              </p>
              
              <hr />
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">🥇 1. Packshield - Housse Matelas Déménagement Oxford</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png" alt="Packshield Oxford" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">A partir de 24,90€</p>
                    <p className="font-bold text-packshield-orange mb-3">✔️ Notre recommandation</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Matériau épais et imperméable</li>
                      <li>Fermeture zippée sur 3 côtés</li>
                      <li>Disponible pour 4 tailles classiques de matelas</li>
                      <li>4 poignées pour un transport facile</li>
                    </ul>
                    <p className="italic">💬 Réutilisable et parfaitement adapté pour le stockage</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/43aXBYX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">🥈 2. Packshield - Housse Matelas Déménagement en Plastique Epais</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/b323c980-aa6b-4070-bbee-120046d73b76.png" alt="Packshield Plastique" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">A partir de 18,90€</p>
                    <p className="font-bold text-packshield-orange mb-3">✔️ Notre recommandation</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Plastique épais et résistant</li>
                      <li>Fermeture zippée sur toute la longueur</li>
                      <li>Pas de poignée</li>
                    </ul>
                    <p className="italic">💬 Parfaite pour les déménagements en intérieur comme en extérieur.</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/43aXBYX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">🥉 3. Mottez - Housse de Protection pour matelas</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/d6f9c36b-c58d-4d55-af51-02baf83f3398.png" alt="Mottez" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">10,90 €</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Modèle économique à usage unique</li>
                      <li>Adaptée pour un transport rapide</li>
                      <li>Simple mais sans zip</li>
                    </ul>
                    <p className="italic">💬 Bon choix pour les petits budgets.</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/4k6fDT4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">4. U-Haul - Mattress Bag</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/9a4ded5e-204c-4a62-9483-6656f2cc3143.png" alt="U-Haul" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">56,55€</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Plastique épais</li>
                      <li>Existe en version ventilée ou non</li>
                      <li>Plastique très épais</li>
                      <li>Très populaire aux USA</li>
                    </ul>
                    <p className="italic">💬 Pratique, mais souvent à importer en France, d'où un prix élevé</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/3S1x8bb" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">5. Weidebach - Housse de Protection pour Matelas</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/5183795d-dc66-4a5f-9f97-8995292acad1.png" alt="Weidebach" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">18,99€</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Plastique imperméable</li>
                      <li>Lavable et réutilisable</li>
                      <li>Qualité allemande</li>
                    </ul>
                    <p className="italic">💬 Un bon rapport qualité-prix. Absence de poignées</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/3ZccRn7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">6. Garoop - Housse Matelas en plastique avec Fermeture Éclair</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/72a86fbd-6156-474c-b877-ccb5418a2d67.png" alt="Garoop" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">16,99€</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Fermeture 3 côtés</li>
                      <li>Housse blanche en PE résistante</li>
                      <li>Convient aux matelas jusqu'à 25 cm d'épaisseur</li>
                    </ul>
                    <p className="italic">💬 Bonne alternative milieu de gamme.</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/3SxkgJW" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">7. Joycemall - Housse en matière bâche</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/484686e0-7a1f-4de4-9bd8-254b4c32f52c.png" alt="Joycemall" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">43,32€</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Spécialisée pour le stockage longue durée</li>
                      <li>Très résistante</li>
                      <li>8 poignées</li>
                    </ul>
                    <p className="italic">💬 Idéale si le matelas est exposé à des conditions difficiles.</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/4j0cBih" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-packshield-navy mb-4">8. Zouway - Protege Matelas Imperméable à Double Fermeture éclair</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img src="/lovable-uploads/79907d83-9cb4-44b6-a259-a6dd909ea447.png" alt="Zouway" className="w-full rounded-lg" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-medium mb-2">14,99€</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Assez facile d'utilisation</li>
                      <li>Solution économique</li>
                      <li>Fermeture éclair sur un côté</li>
                    </ul>
                    <p className="italic">💬 Plutôt adaptée aux matelas en mousse à mémoire de forme.</p>
                    <div className="mt-4">
                      <a 
                        href="https://amzn.to/3GNHCsa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-4 rounded-md inline-block"
                      >
                        Découvrir sur Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-packshield-navy mb-4">🧠 En résumé</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-packshield-lightGrey">
                      <th className="py-2 px-4 border">Modèle</th>
                      <th className="py-2 px-4 border">Étanche</th>
                      <th className="py-2 px-4 border">Réutilisable</th>
                      <th className="py-2 px-4 border">Fermeture</th>
                      <th className="py-2 px-4 border">Poignées</th>
                      <th className="py-2 px-4 border">Prix indicatif</th>
                      <th className="py-2 px-4 border">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Packshield Oxford</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">Zip 3 côtés</td>
                      <td className="py-2 px-4 border">✅ (4 poignées)</td>
                      <td className="py-2 px-4 border">24,90€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Packshield Plastique Épais</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">Zip complet</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">18,90€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Mottez</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">❌ (ouverte)</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">10,90€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">U-Haul Mattress Bag</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">❌ (ouverte)</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">56,55€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Weidebach</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">Zip simple</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">18,99€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Garoop</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">Zip 3 côtés</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">16,99€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Joycemall</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border">Zip complet</td>
                      <td className="py-2 px-4 border">✅ (8 poignées)</td>
                      <td className="py-2 px-4 border">43,32€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">Zouway</td>
                      <td className="py-2 px-4 border text-center">✅</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">Zip simple</td>
                      <td className="py-2 px-4 border text-center">❌</td>
                      <td className="py-2 px-4 border">14,99€</td>
                      <td className="py-2 px-4 border">⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
            
            {/* Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Déménagement
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Matelas
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Comparatif
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8">
              <h4 className="font-medium text-packshield-navy mb-3">Partager cet article</h4>
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
            <div className="mt-12 p-6 bg-packshield-lightGrey rounded-lg">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src="/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png" alt="Hélène Mirmande" />
                  <AvatarFallback>HM</AvatarFallback>
                </Avatar>
                <div>
                  <Link to="/author/helene-mirmande" className="font-semibold text-packshield-navy hover:text-packshield-orange transition-colors">Hélène Mirmande</Link>
                  <p className="text-packshield-grey">Responsable Produits chez Packshield</p>
                </div>
              </div>
              <p className="mt-4 text-packshield-grey">
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
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {post.title}
                      </h5>
                      <p className="text-sm text-packshield-grey">{post.date}</p>
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
              <h4 className="text-xl font-semibold text-packshield-navy mb-4">Articles Similaires</h4>
              <div className="space-y-4">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {relatedPost.title}
                      </h5>
                      <p className="text-sm text-packshield-grey">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-packshield-navy mb-4">Catégories</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog?category=moving" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Déménagement
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=storage" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Stockage
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=mattresses" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Matelas
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=nouveautes" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Nouveautés
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=tips" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Conseils & Guides
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

export default BlogPostTop8Housses;
