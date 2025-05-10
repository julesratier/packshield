
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "How to Properly Store a Mattress",
      excerpt: "Learn the best practices for storing your mattress to extend its lifespan and maintain quality.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "May 8, 2025",
      readTime: "5 min read",
      category: "storage",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Moving Day Tips: Protect Your Furniture",
      excerpt: "Essential tips to ensure your furniture stays protected during the moving process.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80",
      date: "May 5, 2025",
      readTime: "4 min read",
      category: "moving",
      author: "Michael Davis"
    },
    {
      id: 3,
      title: "Why Quality Storage Matters",
      excerpt: "Understanding the importance of high-quality storage solutions for your valuable belongings.",
      image: "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "May 1, 2025",
      readTime: "6 min read",
      category: "storage",
      author: "Jennifer Lee"
    },
    {
      id: 4,
      title: "Long-Term Storage Guide: Keeping Items Fresh",
      excerpt: "Expert advice on maintaining the quality of your items during extended storage periods.",
      image: "https://images.unsplash.com/photo-1569597967185-9c13c1f8bce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "April 27, 2025",
      readTime: "7 min read",
      category: "storage",
      author: "Robert Taylor"
    },
    {
      id: 5,
      title: "Seasonal Storage: What You Need to Know",
      excerpt: "The complete guide to storing seasonal items efficiently and safely.",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmFnZSUyMGJveGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80",
      date: "April 20, 2025",
      readTime: "5 min read",
      category: "tips",
      author: "Emily Wilson"
    },
    {
      id: 6,
      title: "Common Mistakes When Storing Mattresses",
      excerpt: "Avoid these critical errors that could damage your mattress in storage.",
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWF0dHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80",
      date: "April 15, 2025",
      readTime: "4 min read",
      category: "mattresses",
      author: "Thomas Brown"
    },
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Blog Header */}
      <div className="bg-packshield-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Packshield Blog</h1>
            <p className="text-lg text-gray-200 mb-8">
              Expert tips and insights on storage, moving, and protecting your belongings.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-gray-300 focus-visible:ring-packshield-orange"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="h-14 bg-transparent justify-start">
              <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                All Posts
              </TabsTrigger>
              <TabsTrigger value="moving" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Moving
              </TabsTrigger>
              <TabsTrigger value="storage" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Storage
              </TabsTrigger>
              <TabsTrigger value="mattresses" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Mattresses
              </TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-packshield-orange data-[state=active]:border-b-2 data-[state=active]:border-packshield-orange rounded-none">
                Tips & Guides
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-packshield-navy mb-2">No articles found</h3>
            <p className="text-packshield-grey mb-4">Try adjusting your search or category filter.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-packshield-grey">By {post.author}</span>
                    <span className="text-packshield-orange font-medium hover:text-packshield-navy flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <section className="bg-packshield-lightGrey py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-packshield-navy mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-packshield-grey mb-6">
              Get the latest articles, tips, and product updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
                required
              />
              <Button className="bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
