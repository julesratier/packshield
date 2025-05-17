
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/utils/products';
import ProductFilters from '@/components/products/ProductFilters';
import ProductSorting from '@/components/products/ProductSorting';
import ProductGrid from '@/components/products/ProductGrid';
import ProductHeader from '@/components/products/ProductHeader';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Helmet from '@/components/SEO/Helmet';

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

  const handleCategoryChange = (category: string) => {
    setCategoryFilters({
      ...categoryFilters,
      [category]: !categoryFilters[category as keyof typeof categoryFilters]
    });
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { title: 'Boutique', href: '/produits' }
  ];

  // Structured data for breadcrumb
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://packshield.shop"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Boutique",
        "item": "https://packshield.shop/produits"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet 
        title="Housses de Matelas & Rangement Premium | Packshield"
        description="Découvrez notre sélection complète de housses de protection pour matelas (plastique, tissu) et de solutions de rangement sous vide Packshield®. Protégez efficacement vos biens !"
        structuredData={breadcrumbStructuredData}
      />
      
      <Navbar />
      
      <div className="bg-packshield-lightGrey py-10">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex justify-center">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy text-center">La boutique Packshield</h1>
          <p className="text-packshield-grey text-center mt-4 max-w-2xl mx-auto">
            Housses de matelas premium et solutions de stockage conçues pour garder vos biens en sécurité et protégés.
          </p>
        </div>
      </div>
      
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
            
            <ProductGrid products={sortedProducts} />
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
