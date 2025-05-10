
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Package, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // This would normally come from an API or database
  const product = {
    id: parseInt(id || "1"),
    title: id === "1" ? "Premium Queen Mattress Bag" : id === "2" ? "King Size Mattress Cover" : "Double Pack Storage Bags",
    price: id === "1" ? 24.99 : id === "2" ? 29.99 : 19.99,
    rating: id === "1" ? 4.8 : id === "2" ? 4.7 : 4.9,
    reviews: id === "1" ? 127 : id === "2" ? 94 : 58,
    description: "Our premium mattress bag provides superior protection against dust, dirt, moisture, and pests. Perfect for moving, storage, or everyday protection. Made from thick, durable material that's built to last.",
    features: [
      "Heavy-duty waterproof material",
      "Clear vinyl for easy identification",
      "Extra thick for puncture resistance",
      "Secure zipper closure system",
      "Easy to clean and reuse"
    ],
    specifications: {
      "Material": "Heavy-duty polyethylene with vinyl reinforcement",
      "Thickness": "4 mil (extra thick)",
      "Color": "Blue / Gray (varies by product)",
      "Closure": "Full-length zipper with protective flap",
      "Size": id === "1" ? "Fits Queen Mattress (60\" x 80\" x 14\")" : id === "2" ? "Fits King Mattress (76\" x 80\" x 16\")" : "Various sizes available",
      "Package Contains": id === "3" ? "2 Storage Bags" : "1 Mattress Bag"
    },
    images: [
      id === "1" 
        ? "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png"
        : id === "2" 
          ? "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png" 
          : "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    amazonUrl: "https://amazon.com",
    relatedProducts: [
      {
        id: id === "1" ? 2 : 1,
        title: id === "1" ? "King Size Mattress Cover" : "Premium Queen Mattress Bag",
        image: id === "1" ? "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png" : "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
        price: id === "1" ? 29.99 : 24.99,
      },
      {
        id: 3,
        title: "Double Pack Storage Bags",
        image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
        price: 19.99,
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-packshield-lightGrey rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-packshield-orange' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-packshield-navy mb-3">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                ))}
              </div>
              <span className="text-packshield-grey">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            <div className="text-2xl font-bold text-packshield-navy mb-6">${product.price}</div>
            
            <p className="text-packshield-grey mb-6">{product.description}</p>
            
            <div className="space-y-3 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-packshield-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <div className="flex items-center text-packshield-navy mb-2">
                <Package className="h-5 w-5 mr-2" />
                <span className="font-medium">In Stock - Ready to Ship</span>
              </div>
              <div className="flex items-center text-packshield-navy">
                <Shield className="h-5 w-5 mr-2" />
                <span className="font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
            
            <a 
              href={product.amazonUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-packshield-orange hover:bg-packshield-orange/90 text-white text-center py-3 rounded-md transition-colors inline-block font-medium"
            >
              Buy on Amazon
            </a>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-3">
                    <div className="font-medium">{key}</div>
                    <div className="text-packshield-grey">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <p>Products are shipped directly from Amazon's fulfillment centers. Standard shipping options apply as per Amazon's policies.</p>
                <h4 className="font-medium">Return Policy</h4>
                <p>If you're not completely satisfied with your purchase, please refer to Amazon's return policy for this item. We stand behind the quality of our products and want you to be completely satisfied with your purchase.</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 bg-white border rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-packshield-navy mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="ml-2 font-medium">Excellent Protection</span>
                  </div>
                  <p className="text-sm mb-2">These mattress bags are incredibly sturdy. I was impressed by the thickness of the material. Worked perfectly for our move.</p>
                  <div className="text-xs text-packshield-grey">Sarah T. - 2 weeks ago</div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                    ))}
                    <span className="ml-2 font-medium">Good Quality</span>
                  </div>
                  <p className="text-sm mb-2">The bag is well-made and kept our mattress clean during our move. The only reason for 4 stars is that I wish the zipper was a bit more heavy-duty.</p>
                  <div className="text-xs text-packshield-grey">Michael R. - 1 month ago</div>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href={product.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-packshield-orange hover:text-packshield-navy transition-colors"
                >
                  See all reviews on Amazon
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-packshield-navy mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <Link to={`/product/${relatedProduct.id}`}>
                  <div className="aspect-video overflow-hidden bg-packshield-lightGrey">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-packshield-navy mb-2">{relatedProduct.title}</h3>
                    <div className="text-lg font-bold text-packshield-navy">${relatedProduct.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
