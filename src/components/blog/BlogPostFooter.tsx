
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
    <div className="w-full">
      <BlogTags tags={tags} />
      <BlogShareButtons title={title} language={language} />
      <BlogAuthorCard author={author} />
    </div>
  );
};

export default BlogPostFooter;
