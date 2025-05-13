
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/utils/products';
import ProductFilters from '@/components/products/ProductFilters';
import ProductSorting from '@/components/products/ProductSorting';
import ProductGrid from '@/components/products/ProductGrid';
import ProductHeader from '@/components/products/ProductHeader';

// Helper function to generate product slugs
const getProductSlug = (product) => {
  switch (product.id) {
    case 1:
      return "/produits/housse-matelas-plastique-epais";
    case 2:
      return "/produits/housse-matelas-1-personne";
    case 3:
      return "/produits/housse-protection-matelas-tissu";
    case 4:
      return "/produits/housse-matelas-tissu-1-personne";
    case 5:
      return "/produits/kit-rangement-compact";
    case 6:
      return "/produits/kit-rangement-mini";
    default:
      return `/produits/${product.id}`;
  }
};

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [categoryFilters, setCategoryFilters] = useState({
    matelas2p: true,
    matelas1p: true,
    rangementSacs: true
  });
  const [sortOption, setSortOption] = useState('featured');

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

  // Add URLs to products
  const productsWithUrls = sortedProducts.map(product => ({
    ...product,
    url: getProductSlug(product)
  }));

  const handleCategoryChange = (category: string) => {
    setCategoryFilters({
      ...categoryFilters,
      [category]: !categoryFilters[category as keyof typeof categoryFilters]
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <ProductHeader 
        title="Nos produits" 
        description="Housses de matelas premium et solutions de stockage conçues pour garder vos biens en sécurité et protégés."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters 
            categoryFilters={categoryFilters}
            priceRange={priceRange}
            onCategoryChange={handleCategoryChange}
            onPriceChange={setPriceRange}
          />
          
          <div className="flex-1">
            <ProductSorting 
              sortOption={sortOption} 
              onSortChange={setSortOption} 
            />
            
            <ProductGrid products={productsWithUrls} />
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
