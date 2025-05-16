
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlogSlug } from '@/utils/blogSlug';

const BlogPostMattrTransport = () => {
  const navigate = useNavigate();
  
  // Blog post info - assurons-nous que ces informations correspondent exactement à celles de la page Blog
  const post = {
    id: 10,
    title: "Comment transporter son matelas efficacement ?"
  };

  // Redirect to the new slug URL
  useEffect(() => {
    const slug = createBlogSlug(post);
    navigate(`/blog/${slug}`, { replace: true });
  }, [navigate]);

  // This is just a loading state while redirecting
  return <div className="container mx-auto px-4 py-16">Redirection...</div>;
};

export default BlogPostMattrTransport;
