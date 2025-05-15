
import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedPost } from './BlogLayout';

interface BlogRelatedPostsProps {
  posts: RelatedPost[];
}

const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start space-x-4 group">
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h5 className="font-medium text-packshield-navy group-hover:text-packshield-orange transition-colors">
              {post.title}
            </h5>
            <p className="text-sm text-packshield-grey mt-2">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogRelatedPosts;
