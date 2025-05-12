
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ProductSortingProps {
  sortOption: string;
  onSortChange: (value: string) => void;
}

const ProductSorting = ({ sortOption, onSortChange }: ProductSortingProps) => {
  return (
    <div className="flex items-center justify-end mb-6">
      <div className="flex items-center">
        <span className="mr-3 text-packshield-grey">Trier par :</span>
        <RadioGroup 
          value={sortOption}
          onValueChange={onSortChange}
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
  );
};

export default ProductSorting;
