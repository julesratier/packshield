
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              Products
            </Link>
            <Link to="/blog" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              Blog
            </Link>
            <Link to="/about" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-packshield-navy" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-packshield-navy" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-packshield-navy" />
              ) : (
                <Menu className="h-6 w-6 text-packshield-navy" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/products" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                Products
              </Link>
              <Link to="/blog" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                Blog
              </Link>
              <Link to="/about" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                Contact
              </Link>
              <div className="flex space-x-4 px-4 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5 text-packshield-navy" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5 text-packshield-navy" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
