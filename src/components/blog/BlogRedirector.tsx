
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
  
  // Execute redirection if the current slug doesn't match the correct one
  if (slug && slug !== correctSlug) {
    return <Navigate to={`/blog/${correctSlug}`} replace />;
  }
  
  return null;
};

export default BlogRedirector;
