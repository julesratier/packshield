
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBlogUrl } from '@/utils/blogSlug';

interface BlogPostCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author?: string;
  category?: string;
}

const BlogPostCard = ({ id, title, excerpt, image, date, readTime, author, category }: BlogPostCardProps) => {
  // Assurer que le titre et l'image correspondent aux articles réels
  const getCorrectTitle = () => {
    if (id === 10) {
      return "Comment déménager son matelas sans stress (ni mauvaise surprise)";
    }
    if (id === 11) {
      return "Top 8 des meilleures housses matelas pour les déménagement";
    }
    return title;
  };

  const getCorrectImage = () => {
    if (id === 10) {
      return "/lovable-uploads/4b62c8ae-6aa6-41f5-924e-b6fd5bd9744d.png";
    }
    if (id === 11) {
      return "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png";
    }
    return image;
  };

  return (
    <Link to={getBlogUrl({ id, title })} className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img 
          src={getCorrectImage()} 
          alt={getCorrectTitle()}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-packshield-grey mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-packshield-navy mb-2">{getCorrectTitle()}</h3>
        <p className="text-packshield-grey mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          {author && <span className="text-sm text-packshield-grey">Par {author}</span>}
          <span className="text-packshield-orange font-medium hover:text-packshield-navy flex items-center gap-1 ml-auto">
            Lire plus <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
