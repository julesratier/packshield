
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogLayout from '@/components/blog/BlogLayout';
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
        return "Comment déménager son matelas efficacement ?";
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

  // Default tags for blog posts
  const getDefaultTags = () => {
    if (post.id === 10) {
      return ['Transport', 'Matelas', 'Déménagement', 'Protection'];
    }
    if (post.id === 11) {
      return ['Housses', 'Matelas', 'Déménagement', 'Comparatif'];
    }
    if (post.id === 2) {
      return ['Protection', 'Meubles', 'Déménagement', 'Conseils'];
    }
    return ['Déménagement', 'Protection', 'Conseils'];
  };

  // Generate structured data for the blog post
  const generateStructuredData = () => {
    const currentUrl = `https://packshield.shop/blog/${slug}`;
    
    // Create the structured data objects
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author.name
        },
        "publisher": {
          "@type": "Organization",
          "name": "Packshield",
          "logo": {
            "@type": "ImageObject",
            "url": "https://packshield.shop/logo.png"
          }
        },
        "description": generateMetaDescription(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "keywords": post.tags?.join(', ')
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://packshield.shop"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://packshield.shop/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": currentUrl
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Packshield",
        "url": "https://packshield.shop",
        "logo": "https://packshield.shop/logo.png",
        "description": "Packshield offre des solutions innovantes pour la protection et le transport de matelas et meubles lors des déménagements.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33-X-XX-XX-XX-XX",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/packshield",
          "https://twitter.com/packshield",
          "https://www.linkedin.com/company/packshield"
        ]
      }
    ];

    return structuredData;
  };

  return (
    <>
      <Helmet
        title={generatePostTitle()}
        description={generateMetaDescription()}
        structuredData={generateStructuredData()}
      />
      
      {/* Handle redirects for old slug formats */}
      <BlogRedirector slug={slug} postId={post.id} title={post.title} />
      
      {/* Observer for active sections */}
      <BlogContentObserver 
        onSectionActive={setActiveSection}
        content={post.content} 
      />
      
      <div className="flex flex-col min-h-screen">
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
          tags={post.tags || getDefaultTags()}
        />
      </div>
    </>
  );
};

export default BlogPost;
