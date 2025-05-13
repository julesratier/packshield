
// Create a slug from a blog post title and ID
export const createBlogSlug = (id: number, title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
  
  return `${slug}-${id}`;
};

// Extract blog post ID from a slug
export const getBlogIdFromSlug = (slug: string) => {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

// Get the full blog post URL
export const getBlogUrl = (id: number, title: string) => {
  return `/blog/${createBlogSlug(id, title)}`;
};
