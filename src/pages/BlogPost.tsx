
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogPostFooter from '@/components/blog/BlogPostFooter';
import BlogRedirector from '@/components/blog/BlogRedirector';
import BlogContentObserver from '@/components/blog/BlogContentObserver';
import { scrollToSection } from '@/utils/scrollUtils';
import useBlogPostData from '@/hooks/useBlogPostData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState("");
  
  // Get blog post data
  const { post, tableOfContents } = useBlogPostData(slug);

  return (
    <>
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
