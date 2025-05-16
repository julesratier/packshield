
import React from 'react';
import { ListOrdered } from 'lucide-react';
import BlogTableOfContents from './BlogTableOfContents';
import BlogRelatedPosts from './BlogRelatedPosts';
import { RelatedPost } from './BlogLayout';

interface BlogSidebarProps {
  tableOfContents: { id: string; title: string }[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  relatedPosts: RelatedPost[];
  language?: 'en' | 'fr';
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  tableOfContents,
  activeSection,
  onSectionClick,
  relatedPosts,
  language = 'en'
}) => {
  const translations = {
    tableOfContents: language === 'en' ? 'Table of Contents' : 'Table des matières',
    relatedArticles: language === 'en' ? 'Related Articles' : 'Articles similaires'
  };

  return (
    <aside className="lg:w-1/3 space-y-8 lg:sticky lg:top-24 lg:self-start">
      {/* Table of Contents */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <ListOrdered className="h-5 w-5 text-packshield-orange" />
          <h4 className="text-xl font-semibold text-packshield-navy">{translations.tableOfContents}</h4>
        </div>
        
        <BlogTableOfContents 
          items={tableOfContents} 
          activeSection={activeSection} 
          onSectionClick={onSectionClick} 
        />
      </div>
      
      {/* Related Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h4 className="text-xl font-semibold text-packshield-navy mb-6">{translations.relatedArticles}</h4>
        <BlogRelatedPosts posts={relatedPosts} />
      </div>
    </aside>
  );
};

export default BlogSidebar;
