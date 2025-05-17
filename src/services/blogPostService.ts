
import { extractTableOfContents } from '@/utils/blogUtils';
import { getBlogPostIdFromSlug } from '@/utils/blogSlug';
import { getBlogPostById, getBlogPostMetaData } from '@/data/blogPostContent';
import { BlogPost, BlogPostData } from '@/models/BlogPost';

/**
 * Fetches blog post data based on the slug
 * @param slug - The URL slug for the blog post
 * @returns Blog post data and table of contents
 */
export const fetchBlogPostData = (slug: string | undefined): BlogPostData => {
  // Extract ID from slug or default to 1
  const id = slug ? getBlogPostIdFromSlug(slug) : 1;
  
  // Get content data for the post
  const contentData = getBlogPostById(id);
  
  // Get metadata for the post
  const metaData = getBlogPostMetaData(id);
  
  // Combine the data into a complete blog post
  const post: BlogPost = {
    id,
    title: contentData.title,
    content: contentData.content,
    image: contentData.image,
    date: metaData.date,
    readTime: metaData.readTime,
    category: metaData.category,
    author: metaData.author,
    relatedPosts: metaData.relatedPosts,
    tags: metaData.tags,
    language: contentData.language
  };
  
  // Parse content to extract table of contents
  const tableOfContents = extractTableOfContents(post.content);
  
  return {
    post,
    tableOfContents
  };
};
