
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { createBlogSlug } from '@/utils/blogSlug';

interface BlogRedirectorProps {
  slug: string | undefined;
  postId: number;
  title: string;
}

const BlogRedirector: React.FC<BlogRedirectorProps> = ({ slug, postId, title }) => {
  // Calculate the correct slug
  const correctSlug = createBlogSlug({ id: postId, title });
  
  // Handle direct ID URLs or old slug format - redirect to new slug URLs
  if (slug && slug !== correctSlug && (slug.includes('-') || !isNaN(Number(slug)))) {
    return <Navigate to={`/blog/${correctSlug}`} replace />;
  }
  
  return null;
};

export default BlogRedirector;
