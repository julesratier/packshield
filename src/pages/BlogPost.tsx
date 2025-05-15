
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogLayout from '@/components/blog/BlogLayout';
import { extractTableOfContents } from '@/utils/blogUtils';
import BlogTags from '@/components/blog/BlogTags';
import BlogShareButtons from '@/components/blog/BlogShareButtons';
import BlogAuthorCard from '@/components/blog/BlogAuthorCard';

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
      role: "Storage Expert",
      bio: "Sarah is a storage expert with over 10 years of experience in the moving and storage industry. She specializes in creating guides for proper item care and maintenance during storage and relocation."
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
    ],
    tags: ["Storage", "Storage Tips", "Protection"]
  };

  // Parse content to extract table of contents
  const tableOfContents = extractTableOfContents(post.content);

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
    <>
      <BlogLayout
        id={post.id}
        title={post.title}
        content={post.content}
        image={post.image}
        date={post.date}
        readTime={post.readTime}
        category={post.category}
        author={post.author}
        relatedPosts={post.relatedPosts}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        tableOfContents={tableOfContents}
      />
      
      {/* Tags, Share Buttons, and Author Card rendered outside of BlogLayout */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <BlogTags tags={post.tags} />
            <BlogShareButtons title={post.title} />
            <BlogAuthorCard author={post.author} />
          </div>
          <div className="lg:w-1/3"></div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
