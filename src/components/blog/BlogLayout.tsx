
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSidebar from './BlogSidebar';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { prepareBlogContent } from '@/utils/blogUtils';

interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface RelatedPost {
  id: number;
  title: string;
  image: string;
  date: string;
}

export interface BlogPostProps {
  id: number | string;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  relatedPosts: RelatedPost[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  tableOfContents: { id: string; title: string }[];
  language?: 'en' | 'fr';
}

const BlogLayout: React.FC<BlogPostProps> = ({
  id,
  title,
  content,
  image,
  date,
  readTime,
  category,
  author,
  relatedPosts,
  activeSection,
  onSectionClick,
  tableOfContents,
  language = 'en'
}) => {
  // Prepare blog content with consistent styling
  const preparedContent = prepareBlogContent(content);

  // Translation dictionary
  const translations = {
    backToBlog: language === 'en' ? 'Back to Blog' : 'Retour aux Conseils',
    shareArticle: language === 'en' ? 'Share this article' : 'Partager cet article',
    relatedArticles: language === 'en' ? 'Related Articles' : 'Articles Similaires',
    tableOfContents: language === 'en' ? 'Table of Contents' : 'Table des matières'
  };

  // Get shortened title for breadcrumb
  const getBreadcrumbTitle = () => {
    if (typeof id === 'number') {
      switch (id) {
        case 10:
          return "Transporter son matelas efficacement";
        case 11:
          return "Meilleures housses pour déménagement";
        case 2:
          return "Protéger vos meubles";
        default:
          return title.split(' ').slice(0, 4).join(' ');
      }
    }
    return title.split(' ').slice(0, 4).join(' ');
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { title: 'Conseils', href: '/blog' },
    { title: getBreadcrumbTitle() }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <BreadcrumbNav items={breadcrumbItems} light={true} />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
              <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Article Content */}
          <main className="lg:w-2/3">
            {/* Back to Blog */}
            <div className="mb-10">
              <Link to="/blog" className="flex items-center text-packshield-grey hover:text-packshield-orange transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>{translations.backToBlog}</span>
              </Link>
            </div>
            
            {/* Article */}
            <article className="prose prose-lg max-w-3xl mx-auto">
              <div className="bg-packshield-lightGrey p-6 rounded-xl mb-10">
                <p className="text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                  {content.split('.')[0]}.
                </p>
              </div>
              
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: preparedContent }}
              />
            </article>
          </main>
          
          {/* Sidebar */}
          <BlogSidebar 
            tableOfContents={tableOfContents}
            activeSection={activeSection}
            onSectionClick={onSectionClick}
            relatedPosts={relatedPosts}
            language={language}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogLayout;
