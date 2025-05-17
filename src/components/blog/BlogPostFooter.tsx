
import React from 'react';
import BlogTags from './BlogTags';
import BlogShareButtons from './BlogShareButtons';
import BlogAuthorCard from './BlogAuthorCard';

interface BlogPostFooterProps {
  tags: string[];
  title: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
    slug?: string;
  };
  language?: 'en' | 'fr';
}

const BlogPostFooter: React.FC<BlogPostFooterProps> = ({ 
  tags, 
  title, 
  author,
  language = 'en'
}) => {
  return (
    <div className="container mx-auto px-4 pb-16 relative z-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <BlogTags tags={tags} />
          <BlogShareButtons title={title} language={language} />
          <BlogAuthorCard author={author} />
        </div>
        <div className="lg:w-1/3"></div>
      </div>
    </div>
  );
};

export default BlogPostFooter;
