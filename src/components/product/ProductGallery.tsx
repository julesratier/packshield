
import { useState, useEffect } from 'react';
import AmazonChoiceBadge from '@/components/AmazonChoiceBadge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
  title: string;
  amazonChoice?: boolean;
}

const ProductGallery = ({ images, title, amazonChoice }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>([]);

  // Préchargement des images
  useEffect(() => {
    // Initialiser le tableau de statut de chargement
    setIsLoaded(new Array(images.length).fill(false));

    // Précharger toutes les images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, [images]);

  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden flex items-center justify-center relative cursor-pointer">
            {amazonChoice && <AmazonChoiceBadge />}
            <img 
              src={images[selectedImage]} 
              alt={title} 
              className="w-full h-full object-contain"
              style={{ 
                opacity: isLoaded[selectedImage] ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md z-10"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="h-5 w-5 text-packshield-navy" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md z-10"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="h-5 w-5 text-packshield-navy" />
                </button>
              </>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-0 bg-white/95 backdrop-blur">
          <div className="w-full h-full flex items-center justify-center p-4">
            <img 
              src={images[selectedImage]} 
              alt={title} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
      
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
              style={{ 
                opacity: isLoaded[index] ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </button>
        ))}
      </div>
      
      {/* Hidden preload container */}
      <div className="hidden">
        {images.map((src, index) => (
          <img key={`preload-${index}`} src={src} alt="Préchargement" />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
