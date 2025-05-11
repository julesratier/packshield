
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
      // Nouvelles images pour la housse matelas tissu oxford 2 personnes
      setImages([
        "/lovable-uploads/52bd6ec2-efc3-4c66-982e-2da1c5b665bf.png",
        "/lovable-uploads/458530f5-7e7d-43ba-9925-97579b38b2ef.png",
        "/lovable-uploads/ae0c10f2-47f9-46a5-ae79-299469c4cc39.png",
        "/lovable-uploads/ccfc164e-fb0b-43f1-85a1-1485209ae2f6.png",
        "/lovable-uploads/dde46268-6c9a-48e5-8b8e-2fc4d6a13bd4.png",
        "/lovable-uploads/35c60a39-e526-4061-b634-5c29c0050567.png"
      ]);
    } else if (productId === 4) {
      // Images mises à jour pour la housse matelas tissu oxford 1 personne - Nouvel ordre
      setImages([
        "/lovable-uploads/1aa6ffdd-f448-4d28-b6b1-3e756b8f6921.png",
        "/lovable-uploads/fb1fbcbc-914a-4512-bc02-332ec195bf78.png",
        "/lovable-uploads/4b374f04-f945-4b22-8c13-7c0a5ecb6907.png",
        "/lovable-uploads/6a737910-0ef9-4d04-826b-5a83060281cd.png",
        "/lovable-uploads/107d1ed5-1717-4c0a-8529-8c37e13bb8ee.png",
        "/lovable-uploads/5b3dfff2-dc47-422b-9dd2-b40528c57f4c.png"
      ]);
    } else if (productId === 5 || productId === 6) {
      // Images mises à jour pour les kits de rangement sous vide
      if (productId === 5) {
        // Nouvelles images pour le kit de rangement 4 sacs
        setImages([
          "/lovable-uploads/9bf86611-f2e3-4cbb-a7d7-dee74d19e63e.png",
          "/lovable-uploads/f15e90ea-9b8e-43d0-9ecb-447cbc6d13cd.png",
          "/lovable-uploads/2b2b3734-22dd-4be5-b59a-ecba78e67842.png",
          "/lovable-uploads/d79aa909-bf5d-4f34-aa04-09054d501bbe.png",
          "/lovable-uploads/1342376d-0101-4e05-b1b8-6ab1ea7a39ec.png",
          "/lovable-uploads/f7896086-8d9b-4c51-8457-5d67fbeaeafc.png"
        ]);
      } else {
        // Garder les images existantes pour le kit de rangement 2 sacs (ID 6)
        setImages([
          "/lovable-uploads/b557e3d0-aa0b-4294-8570-23d2c51e59b2.png",
          "/lovable-uploads/40bd4bc8-f5b7-47af-9edd-1109ee1eb6a8.png",
          "/lovable-uploads/a0f19279-812e-4e80-8dca-d4a98a1931ea.png",
          "/lovable-uploads/1a5b12d7-beec-45a2-8317-ab9f74ae692d.png",
          "/lovable-uploads/763e8bc1-77b8-4d6b-9157-caf246095514.png",
          "/lovable-uploads/de4efd90-a4e0-44a5-90de-d7c58053158a.png"
        ]);
      }
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
