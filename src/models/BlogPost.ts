
// Define types for blog post data
export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  slug?: string;
}

export interface RelatedPost {
  id: number;
  title: string;
  image: string;
  date: string;
}

export interface TableOfContents {
  id: string;
  title: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  relatedPosts: RelatedPost[];
  tags?: string[];
  language?: 'en' | 'fr';
}

export interface BlogPostData {
  post: BlogPost;
  tableOfContents: TableOfContents[];
}
