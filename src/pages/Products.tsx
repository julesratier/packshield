import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, StarHalf, ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/utils/products';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [categoryFilters, setCategoryFilters] = useState({
    matelas2p: true,
    matelas1p: true,
    rangementSacs: true
  });
  const [sortOption, setSortOption] = useState('featured');
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filtrer les produits en fonction des filtres sélectionnés
  const filteredProducts = products.filter(product => {
    const matchesCategory = categoryFilters[product.category as keyof typeof categoryFilters];
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Trier les produits en fonction de l'option de tri sélectionnée
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // 'featured'
        return b.featured ? 1 : -1;
    }
  });

  const handleCategoryChange = (category: keyof typeof categoryFilters) => {
    setCategoryFilters({
      ...categoryFilters,
      [category]: !categoryFilters[category]
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-packshield-lightGrey py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy text-center">Nos Produits</h1>
          <p className="text-packshield-grey text-center mt-4 max-w-2xl mx-auto">
            Housses de matelas premium et solutions de stockage conçues pour garder vos biens en sécurité et protégés.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-packshield-navy mb-6">Filtres</h2>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-packshield-navy mb-3">Catégorie</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="matelas2p" 
                      checked={categoryFilters.matelas2p}
                      onCheckedChange={() => handleCategoryChange('matelas2p')}
                    />
                    <Label htmlFor="matelas2p" className="ml-2">Housse matelas 2 personnes</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="matelas1p" 
                      checked={categoryFilters.matelas1p}
                      onCheckedChange={() => handleCategoryChange('matelas1p')}
                    />
                    <Label htmlFor="matelas1p" className="ml-2">Housse matelas individuelle</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="rangementSacs" 
                      checked={categoryFilters.rangementSacs}
                      onCheckedChange={() => handleCategoryChange('rangementSacs')}
                    />
                    <Label htmlFor="rangementSacs" className="ml-2">Sacs de rangement</Label>
                  </div>
                </div>
              </div>
              
              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-packshield-navy mb-3">Fourchette de prix</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 50]}
                    max={50}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-packshield-grey">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="font-medium text-packshield-navy">Filtres</span>
              {filtersVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {/* Mobile Filters Panel */}
            {filtersVisible && (
              <div className="bg-white p-6 rounded-lg shadow-sm mt-2">
                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-packshield-navy mb-3">Catégorie</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="matelas2pMobile" 
                        checked={categoryFilters.matelas2p}
                        onCheckedChange={() => handleCategoryChange('matelas2p')}
                      />
                      <Label htmlFor="matelas2pMobile" className="ml-2">Housse matelas 2 personnes</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="matelas1pMobile" 
                        checked={categoryFilters.matelas1p}
                        onCheckedChange={() => handleCategoryChange('matelas1p')}
                      />
                      <Label htmlFor="matelas1pMobile" className="ml-2">Housse matelas individuelle</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="rangementSacsMobile" 
                        checked={categoryFilters.rangementSacs}
                        onCheckedChange={() => handleCategoryChange('rangementSacs')}
                      />
                      <Label htmlFor="rangementSacsMobile" className="ml-2">Sacs de rangement</Label>
                    </div>
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h3 className="font-medium text-packshield-navy mb-3">Fourchette de prix</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 50]}
                      max={50}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                    <div className="flex justify-between text-sm text-packshield-grey">
                      <span>{priceRange[0]}€</span>
                      <span>{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-end mb-6">
              <div className="flex items-center">
                <span className="mr-3 text-packshield-grey">Trier par :</span>
                <RadioGroup 
                  defaultValue="featured"
                  value={sortOption}
                  onValueChange={setSortOption}
                  className="flex space-x-4"
                >
                  <div className="flex items-center">
                    <RadioGroupItem value="featured" id="featured" />
                    <Label htmlFor="featured" className="ml-2">En vedette</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="priceAsc" id="priceAsc" />
                    <Label htmlFor="priceAsc" className="ml-2">Prix (croissant)</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="priceDesc" id="priceDesc" />
                    <Label htmlFor="priceDesc" className="ml-2">Prix (décroissant)</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="rating" id="rating" />
                    <Label htmlFor="rating" className="ml-2">Mieux notés</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            {/* Products */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-packshield-navy mb-2">Aucun produit trouvé</h3>
                <p className="text-packshield-grey">Essayez d'ajuster vos filtres pour trouver ce que vous cherchez.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden bg-packshield-lightGrey flex items-center justify-center">
                        {product.amazonChoice && <AmazonChoiceBadge />}
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-packshield-navy mb-2">{product.title}</h3>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-2">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                            ))}
                            {product.rating % 1 !== 0 && (
                              <StarHalf className="h-4 w-4 text-yellow-400" fill="currentColor" />
                            )}
                            {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" fill="currentColor" />
                            ))}
                          </div>
                          <span className="text-sm text-packshield-grey">({product.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-packshield-navy">{product.price.toFixed(2)}€</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
