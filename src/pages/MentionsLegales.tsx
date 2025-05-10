
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MentionsLegales = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-packshield-navy mb-4">Informations légales</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Raison sociale de l'éditeur :</p>
                  <p>Compagnie Colette SAS</p>
                </div>
                
                <div>
                  <p className="font-medium">Statut juridique de l'entreprise :</p>
                  <p>Société par actions simplifiée</p>
                </div>
                
                <div>
                  <p className="font-medium">RCS :</p>
                  <p>n° 897438693 Paris</p>
                </div>
                
                <div>
                  <p className="font-medium">Numéro de TVA :</p>
                  <p>FR96897438693</p>
                </div>
                
                <div>
                  <p className="font-medium">Siège social :</p>
                  <p>24 RUE DE CLICHY, 75009 PARIS</p>
                </div>
                
                <div>
                  <p className="font-medium">Adresse e-mail :</p>
                  <p>packshieldhelp@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;
