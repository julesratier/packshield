
import { createProductSlug } from './productSlug';

// Interface for blog post basic data
interface BlogPostBasic {
  id: number;
  title: string;
}

// Create a slug from a blog post title and ID
export const createBlogSlug = (post: Pick<BlogPostBasic, 'id' | 'title'>) => {
  return createProductSlug({ id: post.id, title: post.title });
};

// Extract post ID from a slug
export const getBlogPostIdFromSlug = (slug: string) => {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

// Get the full blog post URL
export const getBlogUrl = (post: Pick<BlogPostBasic, 'id' | 'title'>) => {
  return `/blog/${createBlogSlug(post)}`;
};
