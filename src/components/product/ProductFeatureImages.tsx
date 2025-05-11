
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
