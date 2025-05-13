
import { Link } from 'react-router-dom';
import { Facebook, Mail } from 'lucide-react';
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
              <a href="https://www.facebook.com/people/Packshield/100088566477762/" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://amzn.to/3GQ0wyC" target="_blank" rel="noopener noreferrer" className="hover:text-packshield-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.42,14.75C18,15.14 17.3,15.14 16.89,14.75C16.46,14.34 16.46,13.64 16.89,13.23C17.3,12.8 18,12.8 18.42,13.23C18.83,13.64 18.83,14.34 18.42,14.75M12,17.5V19.5H7V17.5H12M13,9.5H8V12.5H13V9.5M16,7.5V10.5H14V7.5H16M11,7.5V12.5H6V7.5H11M18.42,7.75C17.3,6.61 15.33,6.61 14.22,7.75C13.09,8.87 13.09,10.84 14.22,11.95C15.33,13.06 17.3,13.06 18.42,11.95C19.53,10.84 19.53,8.87 18.42,7.75M21.12,7.75C19.28,5.9 16.34,5.9 14.5,7.75C12.66,9.59 12.66,12.53 14.5,14.36C16.34,16.2 19.28,16.2 21.12,14.36C22.96,12.53 22.96,9.59 21.12,7.75M5,15.5V14.39C5,13.6 5.18,12.81 5.5,12.1L2.1,4.9L4.2,4L7.64,11.32C8.11,10.72 8.73,10.23 9.5,9.89V7.5C9.5,6.53 10.29,5.8 11.25,5.8H18.65C20.54,5.8 22,7.29 22,9.21V16.3C22,16.31 22,16.31 22,16.32C21.12,17.9 19.35,19 17.35,19C15.34,19 13.56,17.88 12.69,16.3C11.82,17.88 10.05,19 8.04,19C7.38,19 6.74,18.87 6.18,18.64C5.24,19.77 4.5,19.5 4.5,19.5L4.74,17C4.74,17 4.99,16.94 5.27,16.77L5,16.3V15.5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Produits</h3>
            <ul className="space-y-2">
              <li><Link to="/product/3" className="text-gray-300 hover:text-packshield-orange transition-colors">Housse protection matelas en tissu</Link></li>
              <li><Link to="/product/1" className="text-gray-300 hover:text-packshield-orange transition-colors">Housse protection matelas en plastique épais</Link></li>
              <li><Link to="/product/5" className="text-gray-300 hover:text-packshield-orange transition-colors">Kit de rangement compact</Link></li>
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
            <Link to="/mentions-legales" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Mentions légales</Link>
            <Link to="/partenaire-amazon" className="text-sm text-gray-400 hover:text-packshield-orange transition-colors">Partenaire Amazon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
