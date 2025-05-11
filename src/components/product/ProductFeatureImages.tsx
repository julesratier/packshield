
import { useState, useEffect } from 'react';

interface ProductFeatureImagesProps {
  productId: number;
}

const ProductFeatureImages = ({ productId }: ProductFeatureImagesProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Charger les images en fonction du produit
    if (productId === 3) {
      setImages([
        "/lovable-uploads/e80d83d5-e14c-480e-a990-1c8d9444dad3.png",
        "/lovable-uploads/38927fe9-9485-424c-85ae-e65c7529c567.png",
        "/lovable-uploads/4271c391-1443-45e2-b89e-139febe1d4de.png",
        "/lovable-uploads/fbce7f6e-114a-453f-8835-98297236d5ee.png",
        "/lovable-uploads/53f1d12a-7a7b-4b79-b2d4-68fcc8a0c5b7.png"
      ]);
    } else if (productId === 4) {
      // Images pour la housse matelas tissu oxford 1 personne - Nouveaux chemins
      setImages([
        "/lovable-uploads/3f4f241e-4c35-4006-a824-7344c342592d.png",
        "/lovable-uploads/fa8ab4cc-52bc-40d2-9b01-7cc2fcc4415b.png",
        "/lovable-uploads/f229ab7c-0d8b-428e-894d-8c3fc630eb3a.png",
        "/lovable-uploads/15b53996-e3be-42eb-90f7-49487696a43a.png",
        "/lovable-uploads/aaacb1c2-9364-4f06-843f-0c57a04911a6.png",
        "/lovable-uploads/e06bb97f-3264-4ae6-bd47-a960f157e455.png"
      ]);
    } else if (productId === 5 || productId === 6) {
      // Images pour les kits de rangement sous vide
      setImages([
        "/lovable-uploads/0857aaf1-b2cd-44d3-9cf7-059f98c36a4b.png",
        "/lovable-uploads/50d5d64f-d75b-4dac-8f68-587217478879.png",
        "/lovable-uploads/c6a4a189-4427-416e-b2e1-d82a476a191f.png",
        "/lovable-uploads/13a87d21-725d-4bdc-be4a-6313ed25eef0.png",
        "/lovable-uploads/cec3f5af-643e-4b7b-ad9a-4810e31d03b7.png",
        "/lovable-uploads/f4851c6f-c2b0-4cbb-994c-66fa9a8a360d.png"
      ]);
    }
  }, [productId]);

  useEffect(() => {
    // Démarrer le préchargement des images
    if (images.length > 0) {
      const preloadImages = () => {
        let loadedCount = 0;
        const totalImages = images.length;
        
        images.forEach(src => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setImagesLoaded(true);
            }
          };
        });
      };
      
      preloadImages();
    }
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-white border rounded-lg">
      <h3 className="text-xl font-semibold text-packshield-navy mb-6">Caractéristiques du produit</h3>
      <div className="space-y-0">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img 
              src={image} 
              alt={`Caractéristique ${index + 1}`} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
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

export default ProductFeatureImages;
