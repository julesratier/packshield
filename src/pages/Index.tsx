
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [emailInput, setEmailInput] = useState('');

  const featuredProducts = [
    {
      id: 1,
      title: "Premium Queen Mattress Bag",
      image: "/lovable-uploads/fe0be2fb-2a8e-4ec4-ad8e-a59455d65874.png",
      price: 24.99,
      rating: 4.8,
      reviews: 127,
      amazonUrl: "https://amazon.com",
    },
    {
      id: 2,
      title: "King Size Mattress Cover",
      image: "/lovable-uploads/37318197-cad1-42a4-ab26-25d470ce4a67.png",
      price: 29.99,
      rating: 4.7,
      reviews: 94,
      amazonUrl: "https://amazon.com",
    },
    {
      id: 3,
      title: "Double Pack Storage Bags",
      image: "/lovable-uploads/0a4f4094-9f22-41f6-a738-926999eff40e.png",
      price: 19.99,
      rating: 4.9,
      reviews: 58,
      amazonUrl: "https://amazon.com",
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How to Properly Store a Mattress",
      excerpt: "Learn the best practices for storing your mattress to extend its lifespan and maintain quality.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      date: "May 8, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Moving Day Tips: Protect Your Furniture",
      excerpt: "Essential tips to ensure your furniture stays protected during the moving process.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "May 5, 2025",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Why Quality Storage Matters",
      excerpt: "Understanding the importance of high-quality storage solutions for your valuable belongings.",
      image: "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      date: "May 1, 2025",
      readTime: "6 min read"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a service
    alert(`Thank you for subscribing with ${emailInput}!`);
    setEmailInput('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-packshield-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Protect What Matters Most</h1>
            <p className="text-lg md:text-xl mb-8">
              Premium mattress bags and storage solutions designed to shield your valuable belongings from dust, dirt, and moisture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                Shop Products
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-packshield-navy">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-packshield-navy mb-4">Why Choose Packshield?</h2>
            <p className="text-packshield-grey max-w-2xl mx-auto">
              Our premium protection solutions are designed with quality and durability in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Superior Protection</h3>
              <p className="text-packshield-grey">Thick, durable materials that shield against dust, moisture, and pests.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Premium Quality</h3>
              <p className="text-packshield-grey">Crafted from high-quality materials designed to last for years.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Easy to Use</h3>
              <p className="text-packshield-grey">Simple design makes packing, storing, and moving hassle-free.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-packshield-lightGrey flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-packshield-orange" />
              </div>
              <h3 className="text-xl font-semibold text-packshield-navy mb-2">Fast Shipping</h3>
              <p className="text-packshield-grey">Quick delivery straight to your door when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">Featured Products</h2>
            <Link to="/products" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-video overflow-hidden bg-packshield-lightGrey">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-packshield-navy mb-2">{product.title}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-sm text-packshield-grey">({product.reviews})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-packshield-navy">${product.price}</span>
                    </div>
                  </div>
                </Link>
                <div className="px-6 pb-6">
                  <a 
                    href={product.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-packshield-orange hover:bg-packshield-orange/90 text-white text-center py-2 rounded-md transition-colors"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 bg-packshield-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Don't just take our word for it - hear from customers who trust Packshield for their storage needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "I used Packshield mattress bags during our recent move. They kept our mattresses clean and protected through the whole process. Will definitely use again!"
              </p>
              <div className="font-medium">Sarah T.</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "These storage bags are incredibly durable. I've been using them for seasonal storage and they've held up perfectly. Everything stays clean and protected."
              </p>
              <div className="font-medium">Michael R.</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-gray-200">
                "The quality of Packshield products is outstanding. I've tried other brands before, but nothing compares to the thickness and durability of these bags."
              </p>
              <div className="font-medium">Jennifer L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-packshield-navy">From Our Blog</h2>
            <Link to="/blog" className="text-packshield-orange hover:text-packshield-navy flex items-center gap-1 font-medium">
              All Posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-packshield-grey mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-packshield-navy mb-2">{post.title}</h3>
                  <p className="text-packshield-grey mb-4">{post.excerpt}</p>
                  <span className="text-packshield-orange font-medium hover:text-packshield-navy flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-packshield-navy mb-4">Stay Updated</h2>
            <p className="text-packshield-grey mb-8">
              Subscribe to our newsletter for the latest product updates, exclusive offers, and storage tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Your email address"
                className="flex-grow py-2 px-4 rounded-l-md border-2 border-r-0 border-packshield-navy focus:outline-none focus:ring-2 focus:ring-packshield-orange"
                required
              />
              <button
                type="submit"
                className="bg-packshield-navy hover:bg-packshield-navy/90 text-white py-2 px-6 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
