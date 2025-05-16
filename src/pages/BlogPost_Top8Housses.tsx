
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlogSlug } from '@/utils/blogSlug';

const BlogPostTop8Housses = () => {
  const navigate = useNavigate();
  
  // Blog post info
  const post = {
    id: 11,
    title: "Top 8 des meilleures housses matelas pour les déménagement"
  };

  // Redirect to the new slug URL
  useEffect(() => {
    const slug = createBlogSlug(post);
    navigate(`/blog/${slug}`, { replace: true });
  }, [navigate]);

  // This is just a loading state while redirecting
  return <div className="container mx-auto px-4 py-16">Redirection...</div>;
};

export default BlogPostTop8Housses;
