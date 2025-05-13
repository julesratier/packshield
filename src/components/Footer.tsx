
import { Link } from 'react-router-dom';
import { Facebook, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-packshield-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 relative">
            <img 
              src="/lovable-uploads/87541f33-47b5-4643-be36-189e3a57519d.png" 
              alt="Packshield Logo" 
              className="h-12 w-auto" 
            />
            <p className="text-sm text-gray-300">
              Protégeons ce qui compte le plus avec des solutions de stockage premium.
            </p>
            <div className="absolute top-0 right-0 flex items-center space-x-4">
              <a href="https://www.facebook.com/people/Packshield/100088566477762/" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors flex items-center">
                <Facebook size={20} />
              </a>
              <a href="https://amzn.to/3GQ0wyC" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors flex items-center">
                <img 
                  src="/lovable-uploads/a0050990-b81b-48c8-8924-763122899b4f.png" 
                  alt="Amazon" 
                  width="20" 
                  height="20" 
                  className="invert brightness-0 hover:brightness-100" 
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Produits</h3>
            <ul className="space-y-2">
              <li><Link to="/product/3" className="text-gray-300 hover:text-packshield-orange transition-colors">Housse protection matelas en tissu</Link></li>
              <li><Link to="/product/1" className="text-gray-300 hover:text-packshield-orange transition-colors">Housse matelas en plastique épais</Link></li>
              <li><Link to="/product/5" className="text-gray-300 hover:text-packshield-orange transition-colors">Kit de rangement compact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-packshield-orange transition-colors">Blog</Link></li>
              <li><Link to="/#testimonials" className="text-gray-300 hover:text-packshield-orange transition-colors">Témoignages clients</Link></li>
              <li><Link to="/#faq" className="text-gray-300 hover:text-packshield-orange transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-packshield-orange transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Restez informé</h3>
            <p className="text-sm text-gray-300 mb-4">Abonnez-vous à notre newsletter pour les dernières mises à jour et offres</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white bg-opacity-10 py-2 px-3 rounded-l-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-packshield-orange"
              />
              <button className="bg-packshield-orange hover:bg-packshield-orange/90 text-white py-2 px-3 rounded-r-md transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Packshield. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Mentions légales</Link>
            <Link to="/partenaire-amazon" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Partenaire Amazon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
