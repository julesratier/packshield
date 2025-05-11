
import { useState } from 'react';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  title: string;
  amazonChoice?: boolean;
}

const ProductGallery = ({ images, title, amazonChoice }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden flex items-center justify-center relative">
        {amazonChoice && <AmazonChoiceBadge />}
        <img 
          src={images[selectedImage]} 
          alt={title} 
          className="w-full h-full object-contain"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-5 w-5 text-packshield-navy" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-5 w-5 text-packshield-navy" />
            </button>
          </>
        )}
      </div>
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-packshield-orange scale-105' : 'border-transparent hover:border-packshield-orange/50'}`}
          >
            <img 
              src={image} 
              alt={`${title} vue ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
