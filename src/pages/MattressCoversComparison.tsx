
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ProductDetailComparison from '@/components/comparison/ProductDetailComparison';
import Helmet from '@/components/SEO/Helmet';
import { mattressCoversData } from '@/data/mattressCoversData';

// Product feature data
const productFeatures = {
  1: [
    "Matériau oxford épais et imperméable",
    "Fermeture zippée sur 3 côtés pour une installation facile",
    "Disponible en 4 tailles classiques de matelas",
    "Équipée de 4 poignées pour faciliter le transport",
    "Réutilisable et parfaite pour le stockage"
  ],
  2: [
    "Plastique épais et résistant à l'humidité",
    "Fermeture zippée sur toute la longueur pour une ouverture totale",
    "Protection efficace contre l'eau et les saletés",
    "Adapté aux déménagements intérieurs et extérieurs",
    "Prix plus abordable que le modèle Oxford"
  ],
  3: [
    "Solution économique à usage unique",
    "Idéal pour un transport rapide sur courte distance",
    "Simple à utiliser, sans fermeture éclair",
    "Prix très attractif pour les petits budgets",
    "Protection de base contre la poussière"
  ],
  4: [
    "Plastique très épais et robuste",
    "Disponible en version ventilée ou non",
    "Excellente résistance aux manipulations",
    "Bonne protection contre l'humidité",
    "Réputation établie de la marque aux États-Unis"
  ],
  5: [
    "Plastique imperméable de bonne qualité",
    "Lavable et réutilisable",
    "Qualité allemande réputée",
    "Fermeture éclair simple sur un côté",
    "Bon rapport qualité-prix"
  ],
  6: [
    "Fermeture sur 3 côtés pour faciliter l'installation",
    "Plastique PE résistant de couleur blanche",
    "Compatible avec les matelas jusqu'à 25 cm d'épaisseur",
    "Bonne protection contre la poussière et saletés",
    "Alternative milieu de gamme à prix raisonnable"
  ],
  7: [
    "Matière bâche très résistante pour une protection maximale",
    "Équipée de 8 poignées pour une manipulation facilité",
    "Parfaite pour le stockage longue durée",
    "Idéale pour les environnements potentiellement agressifs",
    "Protection efficace contre l'humidité ambiante"
  ],
  8: [
    "Double fermeture éclair pour faciliter l'insertion",
    "Solution économique et facile à utiliser",
    "Matériau imperméable protégeant contre les liquides",
    "Particulièrement adaptée aux matelas en mousse à mémoire de forme",
    "Prix compétitif par rapport aux autres options"
  ]
};

// Descriptions complètes pour chaque produit
const productDescriptions = {
  1: [
    "Dès la première prise en main, la housse Packshield en Oxford inspire confiance. Le **matériau épais et imperméable** est un gage de protection contre les aléas du déménagement : frottements contre les meubles, éclaboussures accidentelles, voire même une exposition rapide à une légère pluie lors du chargement ou du déchargement. Lors de notre test d'imperméabilité, l'eau perlait littéralement à la surface sans laisser la moindre trace d'humidité.",
    "La **fermeture zippée sur 3 côtés** s'est avérée extrêmement pratique. Elle permet d'insérer et de retirer le matelas sans forcer, une manœuvre qui peut souvent être délicate avec des housses moins bien conçues. On a particulièrement apprécié la qualité de la fermeture éclair, qui semblait robuste et conçue pour durer.",
    "La disponibilité en **4 tailles classiques de matelas** est un atout non négligeable, assurant de trouver la housse parfaitement adaptée à son couchage. De plus, les **4 poignées** stratégiquement placées sur les côtés ont transformé le transport. On a pu soulever et déplacer le matelas de manière stable et confortable, réduisant considérablement l'effort physique et le risque de l'échapper.",
    "Enfin, l'aspect **réutilisable et parfaitement adapté pour le stockage** est un avantage économique et écologique. Après notre simulation de déménagement, la housse est restée intacte et prête pour un futur usage ou pour protéger un matelas entreposé au grenier ou à la cave. Pour nous, la Packshield Oxford représente un investissement judicieux pour ceux qui recherchent une protection fiable et durable."
  ],
  2: [
    "Si le modèle Oxford mise sur la durabilité du tissu, cette version en **plastique épais et résistant** offre une barrière impénétrable contre l'humidité et les saletés. Lors de nos tests, même des projections d'eau plus importantes n'ont pas réussi à traverser le matériau. C'est un point crucial pour les déménagements où le risque d'exposition aux éléments est plus élevé.",
    "La **fermeture zippée sur toute la longueur** est un autre point fort. Elle permet une ouverture totale de la housse, facilitant encore davantage l'installation et le retrait du matelas, en particulier pour les modèles plus grands et plus lourds.",
    "Cependant, l'**absence de poignée** est un inconvénient notable. Lors de nos simulations de portage, on a senti une différence significative par rapport au modèle Oxford. La manipulation du matelas s'est avérée moins aisée et nécessitait une coordination plus précise entre les personnes.",
    "Malgré ce manque, la housse en plastique épais de Packshield remplit parfaitement sa fonction de protection. Elle est **parfaite pour les déménagements en intérieur comme en extérieur**, offrant une tranquillité d'esprit quant à l'intégrité du matelas. Son prix plus abordable en fait une option très intéressante pour ceux qui privilégient l'efficacité à un coût plus contenu."
  ],
  3: [
    "Le modèle Mottez se positionne clairement comme une solution **économique à usage unique**. Son prix attractif en fait une option envisageable pour un déménagement rapide et sur une courte distance, où le risque de dommages importants est limité.",
    "L'adaptation pour un **transport rapide** est son principal atout. La simplicité de la housse, sans fioritures ni fermeture éclair, permet d'envelopper rapidement le matelas. Cependant, cette simplicité est aussi sa principale faiblesse. L'absence de zip signifie que l'ouverture reste exposée à la poussière et aux potentielles saletés.",
    "Lors de nos tests de manipulation, on a constaté que la housse avait tendance à glisser légèrement et offrait une protection minimale contre les déchirures si elle était soumise à des frottements importants. Son caractère **usage unique** se justifie par la finesse du matériau, qui ne semble pas conçu pour résister à plusieurs manipulations ou à un stockage prolongé.",
    "En résumé, la housse Mottez est un **bon choix pour les petits budgets** et les déménagements ponctuels et peu risqués. Cependant, pour une protection plus sérieuse et une réutilisation possible, il faudra se tourner vers des options plus robustes."
  ],
  4: [
    "La marque U-Haul est très populaire aux États-Unis pour ses solutions de déménagement, et leur housse de matelas ne fait pas exception en termes de **plastique épais** et de sensation de robustesse. L'existence en **version ventilée ou non** est une fonctionnalité intéressante, permettant de choisir l'option la plus adaptée aux conditions de stockage ou de transport (la version ventilée peut aider à prévenir la condensation).",
    "Le **plastique très épais** inspire une grande confiance quant à la résistance aux déchirures et aux perforations. Cependant, le principal inconvénient pour le marché français est sa disponibilité, qui passe souvent par une **importation**, entraînant un **prix élevé**.",
    "Lors de nos tests, la housse a effectivement montré une excellente résistance aux manipulations et une bonne protection contre l'humidité. Cependant, l'absence de fermeture éclair rend l'installation et le retrait du matelas moins pratiques que les modèles zippés.",
    "En conclusion, la housse U-Haul est indéniablement **pratique** et robuste, mais son prix élevé dû à l'importation la rend moins compétitive face aux options disponibles localement."
  ],
  5: [
    "La housse Weidebach se distingue par son **plastique imperméable**, offrant une bonne protection contre les liquides et l'humidité. L'aspect **lavable et réutilisable** est un avantage économique et écologique, permettant d'amortir l'investissement sur plusieurs déménagements ou périodes de stockage. La mention de **qualité allemande** est souvent un gage de fiabilité et de durabilité.",
    "Lors de nos tests, le matériau s'est montré résistant aux frottements légers et a bien rempli sa fonction d'imperméabilité. Cependant, l'**absence de poignées** a rendu le transport du matelas moins aisé, similaire au modèle en plastique épais de Packshield. La **fermeture éclair simple** sur un seul côté facilite l'insertion, mais offre une protection moins complète contre la poussière que les fermetures sur trois côtés ou intégrales.",
    "Malgré l'absence de poignées, la housse Weidebach offre un **bon rapport qualité-prix** pour ceux qui recherchent une protection imperméable et réutilisable sans se ruiner."
  ],
  6: [
    "La housse Garoop propose une **fermeture sur 3 côtés**, un avantage significatif pour faciliter l'installation et le retrait du matelas. Le **plastique PE résistant** de couleur blanche semble suffisamment robuste pour un déménagement standard, et sa compatibilité avec les **matelas jusqu'à 25 cm d'épaisseur** la rend polyvalente.",
    "Lors de nos tests, la fermeture éclair a fonctionné correctement et le matériau a offert une protection satisfaisante contre la poussière et les saletés. Bien qu'elle n'ait pas la même épaisseur que certaines options plus coûteuses, elle représente une **bonne alternative milieu de gamme** pour ceux qui recherchent un bon compromis entre prix et fonctionnalités. L'**absence de poignées** est cependant un point à considérer si le transport du matelas implique de longues distances ou des escaliers."
  ],
  7: [
    "La housse Joycemall se positionne comme une solution **spécialisée pour le stockage longue durée**. Sa **matière bâche très résistante** inspire une confiance totale quant à sa capacité à protéger le matelas des éléments, de la poussière, et même d'une certaine humidité ambiante pendant une période prolongée.",
    "Les **8 poignées** sont un atout majeur. Leur nombre et leur disposition offrent une prise en main exceptionnelle, facilitant grandement les manipulations, même pour les matelas les plus lourds et les plus encombrants. C'est particulièrement **idéal si le matelas est exposé à des conditions difficiles** lors du stockage, comme dans un garage ou une cave.",
    "Bien que son prix soit plus élevé que la plupart des autres options, la robustesse et les fonctionnalités de la housse Joycemall justifient cet investissement pour ceux qui ont besoin d'une protection maximale pour un stockage de longue durée ou dans des environnements potentiellement agressifs."
  ],
  8: [
    "La housse Zouway se présente comme une **solution économique** avec une **double fermeture éclair**, ce qui pourrait théoriquement faciliter l'insertion du matelas. Lors de nos tests, l'utilisation s'est avérée **assez facile**, bien que la fermeture éclair sur un seul côté offre une ouverture moins large que les modèles à trois côtés ou intégrales.",
    "Son adaptation **plutôt aux matelas en mousse à mémoire de forme** suggère une certaine souplesse du matériau. L'imperméabilité est un avantage, protégeant contre les liquides. Cependant, la finesse du matériau et la fermeture éclair sur un seul côté nous font penser qu'elle serait moins adaptée aux déménagements impliquant de nombreuses manipulations ou des risques de frottements importants."
  ]
};

// Fonction pour afficher du texte avec des parties en gras (** **)
const formatText = (text: string) => {
  return text.split('**').map((part, index) => {
    return index % 2 === 1 ? <strong key={index}>{part}</strong> : part;
  });
};

const MattressCoversComparison = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { title: 'Conseils', href: '/blog' },
    { title: 'Housse Matelas: Comparatif' }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://packshield.shop/blog/classement-meilleures-housses-matelas-demenagement"
    },
    "headline": "Protéger son Matelas pendant un Déménagement : Notre Test Grandeur Nature des Meilleures Housses",
    "image": "/lovable-uploads/9bf86611-f2e3-4cbb-a7d7-dee74d19e63e.png",
    "datePublished": "2025-05-01T08:00:00+08:00",
    "dateModified": "2025-05-10T08:00:00+08:00",
    "author": {
      "@type": "Organization",
      "name": "Packshield"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Packshield",
      "logo": {
        "@type": "ImageObject",
        "url": "https://packshield.shop/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet 
        title="Comparatif des 8 Meilleures Housses de Matelas - Test et Avis 2025"
        description="Notre équipe a testé les housses de matelas pour déménagement. Découvrez notre comparatif pour choisir la protection idéale selon robustesse, prix et facilité d'utilisation."
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero section */}
      <div className="relative bg-packshield-navy py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <BreadcrumbNav items={breadcrumbItems} light={true} textColor="#8A898C" />
            </div>
            
            <Badge className="mb-4 px-3 py-1 bg-packshield-orange text-white">Mise à jour Mai 2025</Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Comparatif des 8 Meilleures Housses de Matelas pour un Déménagement Réussi
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Protéger son matelas pendant un déménagement est essentiel. Notre équipe a testé pour vous les housses disponibles sur le marché français pour vous aider à faire le meilleur choix.
            </p>
          </div>
        </div>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-bg-transparent pattern-size-2"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6 text-packshield-grey">
            Choisir la housse adéquate est une étape cruciale pour éviter les mauvaises surprises à l'arrivée. Plusieurs critères entrent en jeu : la robustesse du matériau pour prévenir les déchirures, son imperméabilité contre les taches et l'humidité, le type de fermeture pour une protection intégrale, la présence éventuelle de poignées facilitant le transport, et bien sûr, le budget.
          </p>
          <p className="text-lg mb-6 text-packshield-grey">
            Notre équipe a récemment mené un test grandeur nature sur une sélection de housses de matelas pour déménagement. L'objectif était simple : évaluer leur résistance en conditions réelles, leur facilité d'utilisation et leur capacité à protéger efficacement un matelas standard lors d'un simulacre de déménagement comprenant des manipulations en intérieur et extérieur.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {mattressCoversData.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="md:flex">
                {/* Left side - Product Image */}
                <div className="md:w-1/3 p-6 flex items-center justify-center bg-white">
                  <a 
                    href={product.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-square overflow-hidden hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                
                {/* Right side - Product Info */}
                <div className="md:w-2/3 p-6 border-l border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {product.rank <= 3 && (
                          <Badge className={`${
                            product.rank === 1 ? 'bg-amber-500' : product.rank === 2 ? 'bg-gray-400' : 'bg-amber-800'
                          } text-white font-bold px-3 py-1.5`}>
                            #{product.rank}
                          </Badge>
                        )}
                        {product.isBestChoice && (
                          <Badge className="bg-packshield-orange text-white font-bold px-3 py-1.5">
                            Meilleur Choix
                          </Badge>
                        )}
                        {product.isBestValue && (
                          <Badge className="bg-green-600 text-white font-bold px-3 py-1.5">
                            Meilleur Rapport Qualité-Prix
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-packshield-navy mb-2">{product.title}</h2>
                      <p className="text-xl font-semibold text-packshield-orange mb-4">{product.price}</p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(product.rating || 0) ? '#FFD700' : 'none'} stroke="#FFD700" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Verdict box */}
                  <div className="bg-packshield-lightGrey rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-packshield-navy mb-1">NOTRE VERDICT</h3>
                    <p className="text-sm italic text-packshield-grey">{product.verdict}</p>
                  </div>
                  
                  {/* Buy Button */}
                  <div className="mt-4">
                    <a 
                      href={product.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <button className="group relative w-full cursor-pointer overflow-hidden rounded-md border-0 bg-packshield-orange p-2 text-center font-semibold text-white">
                        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                          Acheter sur Amazon
                        </span>
                        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                          <span>Acheter sur Amazon</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                        <div className="absolute left-[200%] top-[40%] h-0 w-0 scale-[1] rounded-lg bg-packshield-navy transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-packshield-navy"></div>
                        <div className="absolute inset-0 border border-transparent rounded-md transition-colors duration-300 group-hover:border-white pointer-events-none"></div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Product Description */}
              <div className="p-6 border-t border-gray-100">
                <div className="prose max-w-none text-packshield-grey">
                  {/* Utiliser les descriptions complètes du produit */}
                  {productDescriptions[product.id as keyof typeof productDescriptions]?.map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-packshield-grey">
                      {formatText(paragraph)}
                    </p>
                  ))}
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-packshield-navy mb-3">Caractéristiques principales :</h4>
                    <ul className="space-y-2">
                      {productFeatures[product.id as keyof typeof productFeatures].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
                          <span className="text-packshield-grey">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-packshield-lightGrey rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-packshield-navy mb-4">Notre conseil pour bien choisir</h2>
          <p className="mb-4 text-packshield-grey">
            Après avoir testé ces huit options, notre recommandation dépend largement de vos besoins spécifiques :
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span className="text-packshield-grey"><strong>Pour un investissement durable</strong> : La housse Packshield Oxford offre le meilleur équilibre entre protection, facilité d'utilisation et durabilité.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span className="text-packshield-grey"><strong>Pour un bon rapport qualité-prix</strong> : La housse Packshield en plastique épais propose une excellente protection à un prix plus accessible.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span className="text-packshield-grey"><strong>Pour les petits budgets</strong> : La housse Mottez est suffisante pour un déménagement simple et sans risque particulier.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span className="text-packshield-grey"><strong>Pour un stockage de longue durée</strong> : La housse Joycemall offre la meilleure protection contre les éléments et facilite les déplacements occasionnels.</span>
            </li>
          </ul>
          <p className="text-packshield-grey">
            Quelle que soit votre choix, protéger votre matelas lors d'un déménagement est un investissement judicieux qui prolongera sa durée de vie et vous assurera un sommeil sain dans votre nouveau foyer.
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MattressCoversComparison;
