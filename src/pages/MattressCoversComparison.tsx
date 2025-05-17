
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ProductComparisonCard from '@/components/comparison/ProductComparisonCard';
import ProductDetailComparison from '@/components/comparison/ProductDetailComparison';
import Helmet from '@/components/SEO/Helmet';
import { mattressCoversData } from '@/data/mattressCoversData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const MattressCoversComparison = () => {
  const [activeTab, setActiveTab] = useState('cards');

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
          <p className="text-lg mb-6">
            Choisir la housse adéquate est une étape cruciale pour éviter les mauvaises surprises à l'arrivée. Plusieurs critères entrent en jeu : la robustesse du matériau pour prévenir les déchirures, son imperméabilité contre les taches et l'humidité, le type de fermeture pour une protection intégrale, la présence éventuelle de poignées facilitant le transport, et bien sûr, le budget.
          </p>
          <p className="text-lg mb-6">
            Notre équipe a récemment mené un test grandeur nature sur une sélection de housses de matelas pour déménagement. L'objectif était simple : évaluer leur résistance en conditions réelles, leur facilité d'utilisation et leur capacité à protéger efficacement un matelas standard lors d'un simulacre de déménagement comprenant des manipulations en intérieur et extérieur.
          </p>
        </div>

        {/* Toggle view */}
        <div className="mb-8">
          <Tabs defaultValue="cards" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="cards" className="px-8 py-2">Vue Carte</TabsTrigger>
                <TabsTrigger value="list" className="px-8 py-2">Vue Détaillée</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cards" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mattressCoversData.map(product => (
                  <ProductComparisonCard
                    key={product.id}
                    rank={product.rank}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    amazonLink={product.amazonLink}
                    verdict={product.verdict}
                    isBestChoice={product.isBestChoice}
                    isBestValue={product.isBestValue}
                    rating={product.rating}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-0 space-y-8">
              {mattressCoversData.map(product => (
                <ProductDetailComparison
                  key={product.id}
                  title={product.title}
                  rank={product.rank}
                  description={product.description}
                  features={productFeatures[product.id as keyof typeof productFeatures]}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Conclusion section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-packshield-lightGrey rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-packshield-navy mb-4">Notre conseil pour bien choisir</h2>
          <p className="mb-4">
            Après avoir testé ces huit options, notre recommandation dépend largement de vos besoins spécifiques :
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span><strong>Pour un investissement durable</strong> : La housse Packshield Oxford offre le meilleur équilibre entre protection, facilité d'utilisation et durabilité.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span><strong>Pour un bon rapport qualité-prix</strong> : La housse Packshield en plastique épais propose une excellente protection à un prix plus accessible.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span><strong>Pour les petits budgets</strong> : La housse Mottez est suffisante pour un déménagement simple et sans risque particulier.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 flex-shrink-0 bg-packshield-orange rounded-full mt-2.5 mr-3"></span>
              <span><strong>Pour un stockage de longue durée</strong> : La housse Joycemall offre la meilleure protection contre les éléments et facilite les déplacements occasionnels.</span>
            </li>
          </ul>
          <p>
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
