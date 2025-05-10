
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [categoryFilters, setCategoryFilters] = useState({
    mattressBags: true,
    storageBags: true,
    furnitureCovers: true
  });
  const [sortOption, setSortOption] = useState('featured');
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Premium Queen Mattress Bag",
      image: "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
      price: 24.99,
      rating: 4.8,
      reviews: 127,
      category: "mattressBags",
      amazonUrl: "https://amazon.com",
      featured: true
    },
    {
      id: 2,
      title: "King Size Mattress Cover",
      image: "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png",
      price: 29.99,
      rating: 4.7,
      reviews: 94,
      category: "mattressBags",
      amazonUrl: "https://amazon.com",
      featured: true
    },
    {
      id: 3,
      title: "Double Pack Storage Bags",
      image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      price: 19.99,
      rating: 4.9,
      reviews: 58,
      category: "storageBags",
      amazonUrl: "https://amazon.com",
      featured: false
    },
    {
      id: 4,
      title: "Twin Mattress Protective Cover",
      image: "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
      price: 18.99,
      rating: 4.6,
      reviews: 42,
      category: "mattressBags",
      amazonUrl: "https://amazon.com",
      featured: false
    },
    {
      id: 5,
      title: "Large Furniture Cover",
      image: "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png",
      price: 34.99,
      rating: 4.5,
      reviews: 31,
      category: "furnitureCovers",
      amazonUrl: "https://amazon.com",
      featured: true
    },
    {
      id: 6,
      title: "Heavy Duty Storage Bag - 3 Pack",
      image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      price: 27.99,
      rating: 4.7,
      reviews: 29,
      category: "storageBags",
      amazonUrl: "https://amazon.com",
      featured: false
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = categoryFilters[product.category as keyof typeof categoryFilters];
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products based on selected sort option
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
          <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy text-center">Our Products</h1>
          <p className="text-packshield-grey text-center mt-4 max-w-2xl mx-auto">
            Premium mattress bags and storage solutions designed to keep your belongings safe and protected.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-packshield-navy mb-6">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-packshield-navy mb-3">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="mattressBags" 
                      checked={categoryFilters.mattressBags}
                      onCheckedChange={() => handleCategoryChange('mattressBags')}
                    />
                    <Label htmlFor="mattressBags" className="ml-2">Mattress Bags</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="storageBags" 
                      checked={categoryFilters.storageBags}
                      onCheckedChange={() => handleCategoryChange('storageBags')}
                    />
                    <Label htmlFor="storageBags" className="ml-2">Storage Bags</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="furnitureCovers" 
                      checked={categoryFilters.furnitureCovers}
                      onCheckedChange={() => handleCategoryChange('furnitureCovers')}
                    />
                    <Label htmlFor="furnitureCovers" className="ml-2">Furniture Covers</Label>
                  </div>
                </div>
              </div>
              
              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-packshield-navy mb-3">Price Range</h3>
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
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
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
              <span className="font-medium text-packshield-navy">Filters</span>
              {filtersVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {/* Mobile Filters Panel */}
            {filtersVisible && (
              <div className="bg-white p-6 rounded-lg shadow-sm mt-2">
                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-packshield-navy mb-3">Category</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="mattressBagsMobile" 
                        checked={categoryFilters.mattressBags}
                        onCheckedChange={() => handleCategoryChange('mattressBags')}
                      />
                      <Label htmlFor="mattressBagsMobile" className="ml-2">Mattress Bags</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="storageBagsMobile" 
                        checked={categoryFilters.storageBags}
                        onCheckedChange={() => handleCategoryChange('storageBags')}
                      />
                      <Label htmlFor="storageBagsMobile" className="ml-2">Storage Bags</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="furnitureCoversMobile" 
                        checked={categoryFilters.furnitureCovers}
                        onCheckedChange={() => handleCategoryChange('furnitureCovers')}
                      />
                      <Label htmlFor="furnitureCoversMobile" className="ml-2">Furniture Covers</Label>
                    </div>
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h3 className="font-medium text-packshield-navy mb-3">Price Range</h3>
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
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
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
                <span className="mr-3 text-packshield-grey">Sort by:</span>
                <RadioGroup 
                  defaultValue="featured"
                  value={sortOption}
                  onValueChange={setSortOption}
                  className="flex space-x-4"
                >
                  <div className="flex items-center">
                    <RadioGroupItem value="featured" id="featured" />
                    <Label htmlFor="featured" className="ml-2">Featured</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="priceAsc" id="priceAsc" />
                    <Label htmlFor="priceAsc" className="ml-2">Price (Low to High)</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="priceDesc" id="priceDesc" />
                    <Label htmlFor="priceDesc" className="ml-2">Price (High to Low)</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="rating" id="rating" />
                    <Label htmlFor="rating" className="ml-2">Top Rated</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            {/* Products */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-packshield-navy mb-2">No products found</h3>
                <p className="text-packshield-grey">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-video overflow-hidden bg-packshield-lightGrey">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-packshield-navy mb-2">{product.title}</h3>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                            ))}
                          </div>
                          <span className="text-sm text-packshield-grey">({product.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-packshield-navy">${product.price}</span>
                        </div>
                      </div>
                    </Link>
                    <div className="px-6 pb-6">
                      <a 
                        href={product.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-packshield-orange hover:bg-packshield-orange/90 text-white text-center py-2 rounded-md transition-colors"
                      >
                        Buy on Amazon
                      </a>
                    </div>
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
