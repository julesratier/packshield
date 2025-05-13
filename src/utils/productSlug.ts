
import { Product } from './products/types';

// Create a slug from a product title and ID
export const createProductSlug = (product: Pick<Product, 'id' | 'title'>) => {
  const slug = product.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
  
  return `${slug}-${product.id}`;
};

// Extract product ID from a slug
export const getProductIdFromSlug = (slug: string) => {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

// Get the full product URL
export const getProductUrl = (product: Pick<Product, 'id' | 'title'>) => {
  return `/produits/${createProductSlug(product)}`;
};
