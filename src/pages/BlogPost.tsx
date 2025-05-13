
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { extractTableOfContents, prepareBlogContent } from '@/utils/blogUtils';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState("");
  
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
      
      <h2 id="why-proper-storage">Why Proper Storage Matters</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <div class="tip-box">
        <p><strong>Pro Tip:</strong> Consider using vacuum-sealed bags for smaller fabric items before placing them in storage containers. This reduces the volume by up to 75% and provides extra protection against moisture.</p>
      </div>
      
      <h2 id="best-practices">Best Practices for Long-Term Storage</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
      
      <ul>
        <li>Clean thoroughly before storing</li>
        <li>Use proper protective covers</li>
        <li>Store in a climate-controlled environment when possible</li>
        <li>Keep items elevated off the floor</li>
        <li>Avoid direct exposure to sunlight</li>
      </ul>
      
      <blockquote>
        <p>"Proper storage is an investment that pays off by protecting the lifespan and quality of your furniture and belongings."</p>
      </blockquote>
      
      <h2 id="choosing-products">Choosing the Right Storage Products</h2>
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
      
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      
      <h2 id="conclusion">Conclusion</h2>
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

  // Parse content to extract table of contents
  const tableOfContents = extractTableOfContents(post.content);

  // Prepare blog content with consistent styling
  const preparedContent = prepareBlogContent(post.content);

  // Function to handle social media sharing
  const shareOnFacebook = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = post.title + " - Packshield";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Intersection Observer to highlight active section in table of contents
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('h2[id]').forEach(header => observer.observe(header));
    
    return () => observer.disconnect();
  }, [post.content]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Function to handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Article Content */}
          <main className="lg:w-2/3">
            {/* Back to Blog */}
            <div className="mb-10">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Back to Blog</span>
              </Link>
            </div>
            
            {/* Article */}
            <article className="prose prose-lg max-w-3xl mx-auto">
              <div className="bg-packshield-lightGrey p-6 rounded-xl mb-10">
                <p className="text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: preparedContent }}
              />
            </article>
            
            {/* Tags */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2">
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Storage Tips
                </span>
                <span className="bg-packshield-lightGrey text-packshield-navy px-4 py-2 rounded-full text-sm">
                  Protection
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 max-w-3xl mx-auto">
              <h4 className="font-medium text-packshield-navy mb-3">Share this article</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" onClick={shareOnFacebook} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnTwitter} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={shareOnLinkedIn} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-16 p-8 bg-packshield-lightGrey rounded-xl max-w-3xl mx-auto">
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xl font-semibold text-packshield-navy">{post.author.name}</h4>
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
          <aside className="lg:w-1/3 space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Table of Contents */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <ListOrdered className="h-5 w-5 text-packshield-orange" />
                <h4 className="text-xl font-semibold text-packshield-navy">Table of Contents</h4>
              </div>
              
              <nav className="mt-4">
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full py-2 px-4 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? 'bg-packshield-lightGrey text-packshield-orange font-medium'
                            : 'hover:bg-gray-50 text-packshield-grey'
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Related Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-packshield-navy mb-6">Related Articles</h4>
              <div className="space-y-6">
                {post.relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
                        {relatedPost.title}
                      </h5>
                      <p className="text-sm text-packshield-grey mt-2">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
