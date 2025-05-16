
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPostTop8Housses = () => {
  const navigate = useNavigate();

  // Redirect to the new slug URL
  useEffect(() => {
    navigate(`/blog/classement-meilleures-housses-matelas-demenagement`, { replace: true });
  }, [navigate]);

  // This is just a loading state while redirecting
  return <div className="container mx-auto px-4 py-16">Redirection...</div>;
};

export default BlogPostTop8Housses;
