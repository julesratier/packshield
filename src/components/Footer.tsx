
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-packshield-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo variant="white" className="h-12 w-auto" />
            <p className="text-sm text-gray-300">
              Protégeons ce qui compte le plus avec des solutions de stockage premium.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Produits</h3>
            <ul className="space-y-2">
              <li><Link to="/products/mattress-bags" className="text-gray-300 hover:text-packshield-orange transition-colors">Housses de matelas</Link></li>
              <li><Link to="/products/furniture-covers" className="text-gray-300 hover:text-packshield-orange transition-colors">Housses de meubles</Link></li>
              <li><Link to="/products/storage-bags" className="text-gray-300 hover:text-packshield-orange transition-colors">Sacs de rangement</Link></li>
              <li><Link to="/products/bundles" className="text-gray-300 hover:text-packshield-orange transition-colors">Packs économiques</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-packshield-orange transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-300 hover:text-packshield-orange transition-colors">Guides de déménagement</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-packshield-orange transition-colors">FAQs</Link></li>
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
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Politique de confidentialité</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Conditions d'utilisation</Link>
            <Link to="/shipping" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Livraison</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
