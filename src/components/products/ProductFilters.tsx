
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProductFiltersProps {
  categoryFilters: {
    matelas2p: boolean;
    matelas1p: boolean;
    rangementSacs: boolean;
  };
  priceRange: number[];
  onCategoryChange: (category: string) => void;
  onPriceChange: (values: number[]) => void;
}

const ProductFilters = ({
  categoryFilters,
  priceRange,
  onCategoryChange,
  onPriceChange
}: ProductFiltersProps) => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <>
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
                    onCheckedChange={() => onCategoryChange('matelas2p')}
                  />
                  <Label htmlFor="matelas2pMobile" className="ml-2">Housse matelas 2 personnes</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="matelas1pMobile" 
                    checked={categoryFilters.matelas1p}
                    onCheckedChange={() => onCategoryChange('matelas1p')}
                  />
                  <Label htmlFor="matelas1pMobile" className="ml-2">Housse matelas individuelle</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="rangementSacsMobile" 
                    checked={categoryFilters.rangementSacs}
                    onCheckedChange={() => onCategoryChange('rangementSacs')}
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
                  onValueChange={onPriceChange}
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

      {/* Desktop Filters */}
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
                  onCheckedChange={() => onCategoryChange('matelas2p')}
                />
                <Label htmlFor="matelas2p" className="ml-2">Housse matelas 2 personnes</Label>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="matelas1p" 
                  checked={categoryFilters.matelas1p}
                  onCheckedChange={() => onCategoryChange('matelas1p')}
                />
                <Label htmlFor="matelas1p" className="ml-2">Housse matelas individuelle</Label>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="rangementSacs" 
                  checked={categoryFilters.rangementSacs}
                  onCheckedChange={() => onCategoryChange('rangementSacs')}
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
                onValueChange={onPriceChange}
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
    </>
  );
};

export default ProductFilters;
