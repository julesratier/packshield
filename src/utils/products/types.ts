
export interface ProductSpecification {
  [key: string]: string;
}

export interface ProductImage {
  [key: string]: string[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  additionalImages: string[] | { [key: string]: string[] };
  price: number;
  rating: number;
  reviews: number;
  category: string;
  featured: boolean;
  amazonChoice: boolean;
  sizes?: string[];
}
