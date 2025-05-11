
import { useState, useEffect } from 'react';

interface ProductFeatureImagesProps {
  productId: number;
}

const ProductFeatureImages = ({ productId }: ProductFeatureImagesProps) => {
  // Seulement afficher les images pour le produit 3 (matelas Oxford 2 personnes)
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Ne charger les images que pour le produit 3
    if (productId === 3) {
      setImages([
        "/lovable-uploads/e80d83d5-e14c-480e-a990-1c8d9444dad3.png",
        "/lovable-uploads/38927fe9-9485-424c-85ae-e65c7529c567.png",
        "/lovable-uploads/4271c391-1443-45e2-b89e-139febe1d4de.png",
        "/lovable-uploads/fbce7f6e-114a-453f-8835-98297236d5ee.png",
        "/lovable-uploads/53f1d12a-7a7b-4b79-b2d4-68fcc8a0c5b7.png"
      ]);
    }
  }, [productId]);

  if (images.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-white border rounded-lg">
      <h3 className="text-xl font-semibold text-packshield-navy mb-6">Caractéristiques du produit</h3>
      <div>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img 
              src={image} 
              alt={`Caractéristique ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatureImages;
