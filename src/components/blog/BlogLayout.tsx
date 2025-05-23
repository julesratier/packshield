import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSidebar from './BlogSidebar';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { prepareBlogContent, removeFirstParagraph } from '@/utils/blogUtils';
import BlogPostFooter from './BlogPostFooter';

interface Author {
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
  tags?: string[];
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
  language = 'en',
  tags = ['Transport', 'Matelas', 'Déménagement', 'Protection']
}) => {
  // Prepare blog content with consistent styling and remove the first paragraph
  const preparedContent = removeFirstParagraph(prepareBlogContent(content));

  // Translation dictionary
  const translations = {
    shareArticle: language === 'en' ? 'Share this article' : 'Partager cet article',
    relatedArticles: language === 'en' ? 'Related Articles' : 'Articles Similaires',
    tableOfContents: language === 'en' ? 'Table of Contents' : 'Table des matières'
  };

  // Get shortened title for breadcrumb
  const getBreadcrumbTitle = () => {
    if (typeof id === 'number') {
      switch (id) {
        case 10:
          return "Déménager son matelas sans stress";
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

  // Extract first paragraph for the highlight block
  const getFirstParagraph = () => {
    // For blog about mattress transport, use the specific text
    if (id === 10 || (typeof id === 'string' && id.includes('transporter-matelas'))) {
      return "À première vue, déménager un matelas peut sembler simple. Mais quiconque s'est déjà retrouvé à le faire passer dans une cage d'escalier étroite ou à tenter de le glisser dans un coffre trop petit sait combien l'exercice peut devenir complexe. Mal protégé, sans housse matelas de déménagement, il risque salissures, déchirures, voire déformations. Ce guide vous accompagne pas à pas pour un transport sans accroc, seul ou avec l'aide de professionnels.";
    }
    
    // For other blogs, extract first paragraph or a portion of content
    const firstSentence = content.split('.')[0] + '.';
    return firstSentence.length > 30 ? firstSentence : content.substring(0, 150) + '...';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        {/* Dark blue filter overlay for better title readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-packshield-navy/70 to-packshield-navy/50 z-10"></div>
        <div className="h-96 md:h-[500px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 flex justify-center">
                <BreadcrumbNav items={breadcrumbItems} light={true} textColor="#8A898C" />
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
                  {author.slug ? (
                    <Link to={`/author/${author.slug}`} className="hover:text-packshield-orange transition-colors">
                      {author.name}
                    </Link>
                  ) : (
                    <span>{author.name}</span>
                  )}
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
            {/* Article */}
            <article className="prose prose-lg max-w-3xl mx-auto">
              {/* Highlight Intro Block */}
              <div className="bg-[#f5f5fb] rounded-xl p-6 mb-8 shadow-sm border border-[#e5deff]">
                <p className="font-sans text-slate-700 m-0">
                  {getFirstParagraph().split('housse matelas de déménagement').map((text, index, array) => {
                    if (index === array.length - 1) return text;
                    return (
                      <React.Fragment key={index}>
                        {text}
                        <Link to="/blog/classement-meilleures-housses-matelas-demenagement" className="text-packshield-orange hover:underline">
                          housse matelas de déménagement
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </p>
              </div>
              
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: preparedContent }}
              />

              {/* Author and sharing section */}
              <div className="mt-16">
                <BlogPostFooter 
                  tags={tags} 
                  title={title} 
                  author={author}
                  language={language}
                />
              </div>
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
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BlogLayout;
