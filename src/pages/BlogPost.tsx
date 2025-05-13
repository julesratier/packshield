
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // Simulated blog post data (in a real application, this would come from a CMS)
  const post = {
    id: parseInt(id || "1"),
    title: id === "1" 
      ? "How to Properly Store a Mattress" 
      : id === "2" 
        ? "Moving Day Tips: Protect Your Furniture" 
        : "Why Quality Storage Matters",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Why Proper Storage Matters</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <h2>Best Practices for Long-Term Storage</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
      
      <ul>
        <li>Clean thoroughly before storing</li>
        <li>Use proper protective covers</li>
        <li>Store in a climate-controlled environment when possible</li>
        <li>Keep items elevated off the floor</li>
        <li>Avoid direct exposure to sunlight</li>
      </ul>
      
      <h2>Choosing the Right Storage Products</h2>
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
      
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      
      <h2>Conclusion</h2>
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    `,
    image: id === "1" 
      ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
      : id === "2" 
        ? "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80" 
        : "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "May 8, 2025",
    readTime: "5 min read",
    category: "Storage",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Storage Expert"
    },
    relatedPosts: [
      {
        id: id === "1" ? 2 : 1,
        title: id === "1" ? "Moving Day Tips: Protect Your Furniture" : "How to Properly Store a Mattress",
        image: id === "1" 
          ? "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
          : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        date: "May 5, 2025"
      },
      {
        id: 3,
        title: "Why Quality Storage Matters",
        image: "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        date: "May 1, 2025"
      }
    ]
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <main className="lg:w-2/3">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Back to Blog</span>
              </Link>
            </div>
            
            {/* Article */}
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  {post.category}
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Storage Tips
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-3 py-1 rounded-md text-sm">
                  Protection
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8">
              <h4 className="font-medium text-packshield-navy mb-3">Share this article</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-12 p-6 bg-packshield-lightGrey rounded-lg">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-packshield-navy">{post.author.name}</h4>
                  <p className="text-packshield-grey">{post.author.role}</p>
                </div>
              </div>
              <p className="mt-4 text-packshield-grey">
                Sarah is a storage expert with over 10 years of experience in the moving and storage industry. 
                She specializes in creating guides for proper item care and maintenance during storage and relocation.
              </p>
            </div>
          </main>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Related Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-packshield-navy mb-4">Related Articles</h4>
              <div className="space-y-4">
                {post.relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {relatedPost.title}
                      </h5>
                      <p className="text-sm text-packshield-grey">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-packshield-navy mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog?category=moving" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Moving Tips
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=storage" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=mattresses" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Mattress Care
                  </Link>
                </li>
                <li>
                  <Link to="/blog?category=tips" className="text-packshield-grey hover:text-packshield-orange transition-colors">
                    Tips & Guides
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="bg-packshield-navy p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Stay updated with the latest tips and product news.
              </p>
              <form>
                <div className="mb-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-packshield-orange"
                  />
                </div>
                <Button className="w-full bg-packshield-orange hover:bg-packshield-orange/90 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
