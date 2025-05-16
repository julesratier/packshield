
import { useEffect } from 'react';

interface BlogContentObserverProps {
  onSectionActive: (sectionId: string) => void;
  content: string;
}

const BlogContentObserver: React.FC<BlogContentObserverProps> = ({ onSectionActive, content }) => {
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onSectionActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('h2[id]').forEach(header => observer.observe(header));
    
    return () => observer.disconnect();
  }, [content, onSectionActive]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default BlogContentObserver;
