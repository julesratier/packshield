import { Product } from './products/types';

// Custom slugs for specific products
const customSlugs: Record<number, string> = {
  1: 'housse-protection-matelas-plastique-stockage-déménagement-2-personnes',
  2: 'housse-protection-matelas-plastique-stockage-déménagement-90cm',
  3: 'housse-déménagement-matelas-tissu-oxford-140cm',
  4: 'housse-déménagement-matelas-tissu-oxford-90cm',
  5: 'kit-rangement-sous-vide-4-sacs-4-coffres',
  6: 'kit-rangement-sous-vide-2-sacs-2-coffres'
};

// Old slugs for redirection
const oldSlugs: Record<number, string[]> = {
  1: ['housse-de-protection-pour-matelas-en-plastique-pais-matelas-2-personnes-1'],
  2: ['housse-de-protection-pour-matelas-en-plastique-pais-matelas-1-personne-2'],
  3: ['housse-de-protection-pour-matelas-en-tissu-oxford-4-poignes-matelas-2-personnes-3'],
  4: ['housse-de-protection-pour-matelas-en-tissu-oxford-4-poignes-matelas-1-personne-4'],
  5: ['kit-de-rangement-sous-vide-4-sacs-sous-vide-et-4-coffres-non-tisss-5'],
  6: ['kit-de-rangement-sous-vide-2-sacs-sous-vide-et-2-coffres-non-tisss-6']
};

// Create a slug from a product title and ID
export const createProductSlug = (product: Pick<Product, 'id' | 'title'>) => {
  // If we have a custom slug for this ID, use it
  if (customSlugs[product.id]) {
    return customSlugs[product.id];
  }
  
  // Otherwise, fallback to the default slug creation
  const slug = product.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
  
  return `${slug}-${product.id}`;
};

// Check if a slug is an old slug that needs redirection
export const isOldSlug = (slug: string): number | null => {
  for (const [id, slugs] of Object.entries(oldSlugs)) {
    if (slugs.includes(slug)) {
      return parseInt(id);
    }
  }
  return null;
};

// Extract product ID from a slug
export const getProductIdFromSlug = (slug: string) => {
  // Check for custom slugs first
  for (const [id, customSlug] of Object.entries(customSlugs)) {
    if (slug === customSlug) {
      return Number(id);
    }
  }
  
  // Check if it's an old slug that needs redirection
  const oldSlugId = isOldSlug(slug);
  if (oldSlugId) {
    return oldSlugId;
  }
  
  // If not a custom slug, try to extract the ID from the old format
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? 1 : id; // Default to 1 if parsing fails
};

// Get the full product URL
export const getProductUrl = (product: Pick<Product, 'id' | 'title'>) => {
  return `/produits/${createProductSlug(product)}`;
};

// Get a shortened display name for breadcrumbs
export const getProductShortName = (product: Pick<Product, 'id' | 'title'>) => {
  const shortTitles: Record<number, string> = {
    1: 'Housse Matelas Epais 2 personnes',
    2: 'Housse Matelas Epais 1 personne',
    3: 'Housse Tissu 2 personnes',
    4: 'Housse Tissu 1 personne',
    5: 'Kit Rangement 4 Sacs',
    6: 'Kit Rangement 2 Sacs'
  };
  
  return shortTitles[product.id] || product.title.split(' ').slice(0, 4).join(' ');
};
