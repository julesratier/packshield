
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
  return (
    <Link to={getBlogUrl(id, title)} className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-packshield-grey mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-packshield-navy mb-2">{title}</h3>
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
