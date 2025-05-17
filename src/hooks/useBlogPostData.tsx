
import { useMemo } from 'react';
import { fetchBlogPostData } from '@/services/blogPostService';
import { BlogPostData } from '@/models/BlogPost';

/**
 * Custom hook to fetch and process blog post data based on slug
 * @param slug - The URL slug for the blog post
 * @returns Blog post data and table of contents
 */
const useBlogPostData = (slug: string | undefined): BlogPostData => {
  // Use memoization to avoid unnecessary recalculations
  const blogData = useMemo(() => {
    return fetchBlogPostData(slug);
  }, [slug]);

  return blogData;
};

export default useBlogPostData;
