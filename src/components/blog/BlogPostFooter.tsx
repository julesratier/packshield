
import React from 'react';
import { Facebook, Linkedin, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface BlogPostFooterProps {
  tags: string[];
  title: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
    slug?: string;
  };
  language?: 'en' | 'fr';
}

const BlogPostFooter: React.FC<BlogPostFooterProps> = ({ 
  tags, 
  title, 
  author,
  language = 'en'
}) => {
  const shareLabel = language === 'en' ? 'Share this article' : 'Partager cet article';

  const shareOnFacebook = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = title + " - Packshield";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Generate a fallback from first letters of author names
  const generateFallback = (name: string) => {
    return name.split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <div className="w-full">
      {/* Tags section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index}
              className="bg-packshield-lightGrey hover:bg-packshield-lightGrey/80 text-packshield-navy px-4 py-2 rounded-full text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Share buttons section */}
      <div className="mb-8">
        <h4 className="font-medium text-packshield-navy mb-3">{shareLabel}</h4>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareOnFacebook} 
            className="hover:bg-packshield-lightGrey hover:text-packshield-orange transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareOnTwitter} 
            className="hover:bg-packshield-lightGrey hover:text-packshield-orange transition-colors"
          >
            <Share className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareOnLinkedIn} 
            className="hover:bg-packshield-lightGrey hover:text-packshield-orange transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Author card section */}
      <div className="p-8 bg-packshield-lightGrey rounded-xl shadow-sm">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 mr-4 border-2 border-white shadow-sm">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{generateFallback(author.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-xl font-semibold text-packshield-navy">{author.name}</h4>
            <p className="text-packshield-grey">{author.role}</p>
          </div>
        </div>
        {author.bio && (
          <p className="mt-4 text-packshield-grey leading-relaxed">
            {author.bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPostFooter;
