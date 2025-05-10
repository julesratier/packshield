
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PartenaireAmazon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy mb-8">Partenaire Amazon</h1>
          
          <div className="prose max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="mb-4">
                Compagnie Colette SAS, société éditrice de ce site, participe au Programme Partenaires Amazon.fr. Ce programme d'affiliation permet à des sites tiers de percevoir une rémunération sur les achats éligibles réalisés via des liens vers Amazon.fr.
              </p>

              <p className="mb-4">
                Certains liens présents sur ce site peuvent donc être des liens affiliés. Cela signifie qu'un achat effectué après avoir cliqué sur l'un de ces liens peut générer une commission pour Compagnie Colette SAS, sans coût supplémentaire pour l'utilisateur.
              </p>
              
              <h2 className="text-xl font-semibold text-packshield-navy my-4">Transparence et indépendance</h2>
              
              <p className="mb-4">
                Compagnie Colette SAS agit en toute indépendance d'Amazon et de ses filiales. La société n'est ni affiliée, ni partenaire, ni représentant d'Amazon. Aucune relation commerciale ou juridique n'existe entre ce site et Amazon, en dehors de l'adhésion au Programme Partenaires Amazon.fr.
              </p>

              <p className="mb-4">
                Toutes les recommandations de produits ou de services sont faites de manière autonome, sur la base de leur pertinence et de leur qualité supposée.
              </p>
              
              <h2 className="text-xl font-semibold text-packshield-navy my-4">Conformité avec les règles du programme</h2>
              
              <p className="mb-4">
                Conformément aux exigences du Programme Partenaires Amazon.fr, Compagnie Colette SAS :
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Indique de manière claire et explicite sa participation au Programme.</li>
                <li>Ne fait aucune déclaration trompeuse ou ambiguë concernant sa relation avec Amazon.</li>
                <li>N'utilise aucune méthode de promotion non autorisée (spamming, publicité mensongère, etc.).</li>
                <li>Respecte les pratiques en vigueur en matière de communication et de publicité en ligne.</li>
              </ul>
              
              <p>
                Pour toute question relative à cette politique d'affiliation, veuillez nous contacter via la page prévue à cet effet.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartenaireAmazon;
