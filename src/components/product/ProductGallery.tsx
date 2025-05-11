
import { useState } from 'react';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';

interface ProductGalleryProps {
  images: string[];
  title: string;
  amazonChoice?: boolean;
}

const ProductGallery = ({ images, title, amazonChoice }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden flex items-center justify-center relative">
        {amazonChoice && <AmazonChoiceBadge />}
        <img 
          src={images[selectedImage]} 
          alt={title} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-packshield-orange' : 'border-transparent'}`}
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
