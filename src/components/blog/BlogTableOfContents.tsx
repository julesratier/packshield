
import React from 'react';

interface BlogTableOfContentsProps {
  items: { id: string; title: string }[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const BlogTableOfContents: React.FC<BlogTableOfContentsProps> = ({
  items,
  activeSection,
  onSectionClick
}) => {
  return (
    <nav className="mt-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionClick(item.id)}
              className={`text-left w-full py-2 px-4 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-packshield-lightGrey text-packshield-orange font-medium'
                  : 'hover:bg-gray-50 text-packshield-grey'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogTableOfContents;
