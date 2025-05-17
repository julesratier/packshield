
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogPostFooter from '@/components/blog/BlogPostFooter';
import BlogRedirector from '@/components/blog/BlogRedirector';
import BlogContentObserver from '@/components/blog/BlogContentObserver';
import { scrollToSection } from '@/utils/scrollUtils';
import useBlogPostData from '@/hooks/useBlogPostData';
import Helmet from '@/components/SEO/Helmet';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState("");
  
  // Get blog post data
  const { post, tableOfContents } = useBlogPostData(slug);

  // Generate a concise blog title without "Le Blog Packshield" prefix
  const generatePostTitle = () => {
    if (!post.title) return "Article de blog | Packshield";
    
    // Generate a concise version of the title
    switch (post.id) {
      case 10:
        return "Comment transporter son matelas efficacement ?";
      case 11:
        return "Top 8 des meilleures housses matelas pour déménagement";
      case 2:
        return "Protéger vos meubles lors d'un déménagement";
      default:
        return post.title;
    }
  };

  // Generate meta description from post content
  const generateMetaDescription = () => {
    if (!post.content) return "";
    
    // Extract first paragraph or first 160 characters
    // Since 'excerpt' doesn't exist on the post object, we'll create our own from content
    let description = post.content.split('.')[0];
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
    return description;
  };

  return (
    <>
      <Helmet
        title={generatePostTitle()}
        description={generateMetaDescription()}
      />
      
      {/* Handle redirects for old slug formats */}
      <BlogRedirector slug={slug} postId={post.id} title={post.title} />
      
      {/* Observer for active sections */}
      <BlogContentObserver 
        onSectionActive={setActiveSection}
        content={post.content} 
      />
      
      {/* Main blog layout */}
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
        language={(post.language as 'en' | 'fr') || 'en'}
      />
      
      {/* Footer content: Tags, Share buttons, Author card */}
      <BlogPostFooter 
        tags={post.tags} 
        title={post.title} 
        author={post.author}
        language={(post.language as 'en' | 'fr') || 'en'}
      />
    </>
  );
};

export default BlogPost;
