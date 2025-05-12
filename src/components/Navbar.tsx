
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Logo from './Logo';
import { products } from '@/utils/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      // Navigate to the first result
      navigate(`/product/${searchResults[0].id}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    setIsSearchOpen(false);
    setSearchQuery('');
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
              Produits
            </Link>
            <Link to="/blog" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              Blog
            </Link>
            <Link to="/about" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              À propos
            </Link>
            <Link to="/contact" className="text-packshield-navy hover:text-packshield-orange font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Search button */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5 text-packshield-navy" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="mr-2">
              <Search className="h-5 w-5 text-packshield-navy" />
            </Button>
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
                Produits
              </Link>
              <Link to="/blog" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                Blog
              </Link>
              <Link to="/about" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                À propos
              </Link>
              <Link to="/contact" className="px-4 py-2 rounded-md hover:bg-packshield-lightGrey text-packshield-navy font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Rechercher un produit</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="flex w-full items-center space-x-2">
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Tapez pour rechercher..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-packshield-orange"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <Button type="submit" className="bg-packshield-orange hover:bg-packshield-orange/90">
                <Search className="h-4 w-4 mr-2" /> Rechercher
              </Button>
            </div>
          </form>
          
          {searchResults.length > 0 && (
            <div className="mt-4 max-h-60 overflow-auto">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Résultats</h4>
              <div className="space-y-2">
                {searchResults.map(product => (
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img src={product.image} alt={product.title} className="w-10 h-10 object-contain mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{product.title}</p>
                      <p className="text-xs text-gray-500">{product.price.toFixed(2)}€</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {searchQuery && searchResults.length === 0 && (
            <div className="mt-4 p-4 text-center">
              <p className="text-gray-500">Aucun résultat trouvé pour "{searchQuery}"</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
