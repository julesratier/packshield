import { createProductSlug } from './productSlug';

// Interface for blog post basic data
interface BlogPostBasic {
  id: number;
  title: string;
}

// Custom slugs for specific blog posts
const customSlugs: Record<number, string> = {
  10: 'transporter-matelas-efficacement',
  11: 'classement-meilleures-housses-matelas-demenagement',
  1: 'stocker-matelas-correctement',
  2: 'conseils-demenagement-protection-meubles',
  3: 'importance-stockage-qualite'
};

// Create a SEO-friendly slug from a blog post title and ID
export const createBlogSlug = (post: Pick<BlogPostBasic, 'id' | 'title'>) => {
  // If we have a custom slug for this ID, use it
  if (customSlugs[post.id]) {
    return customSlugs[post.id];
  }
  
  // Otherwise, fallback to the default slug creation using the product slug utility
  return createProductSlug({ id: post.id, title: post.title });
};

// Extract post ID from a slug
export const getBlogPostIdFromSlug = (slug: string) => {
  // Check for custom slugs first
  for (const [id, customSlug] of Object.entries(customSlugs)) {
    if (slug === customSlug) {
      return Number(id);
    }
  }
  
  // If not a custom slug, try to extract the ID from the old format
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

// Get the full blog post URL
export const getBlogUrl = (post: Pick<BlogPostBasic, 'id' | 'title'>) => {
  return `/blog/${createBlogSlug(post)}`;
};
