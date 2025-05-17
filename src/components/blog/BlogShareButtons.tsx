
import React from 'react';
import { Facebook, Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogShareButtonsProps {
  url?: string;
  title: string;
  language?: 'en' | 'fr';
}

const BlogShareButtons: React.FC<BlogShareButtonsProps> = ({
  url = window.location.href,
  title,
  language = 'en'
}) => {
  const shareLabel = language === 'en' ? 'Share this article' : 'Partager cet article';

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const text = title + " - Packshield";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <h4 className="font-medium text-packshield-navy mb-3">{shareLabel}</h4>
      <div className="flex space-x-3">
        <Button variant="outline" size="icon" onClick={shareOnFacebook} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnTwitter} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
          <X className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnLinkedIn} className="hover:bg-packshield-lightGrey hover:text-packshield-orange">
          <Linkedin className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogShareButtons;
