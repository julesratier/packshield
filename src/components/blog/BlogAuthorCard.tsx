
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AuthorProps {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  slug?: string;
}

interface BlogAuthorCardProps {
  author: AuthorProps;
}

const BlogAuthorCard: React.FC<BlogAuthorCardProps> = ({ author }) => {
  // Generate a fallback from first letters of author names
  const generateFallback = (name: string) => {
    return name.split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <div className="mt-16 p-8 bg-packshield-lightGrey rounded-xl max-w-3xl mx-auto">
      <div className="flex items-center">
        <Avatar className="h-16 w-16 mr-4">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{generateFallback(author.name)}</AvatarFallback>
        </Avatar>
        <div>
          {author.slug ? (
            <Link to={`/author/${author.slug}`} className="text-xl font-semibold text-packshield-navy hover:text-packshield-orange transition-colors">
              {author.name}
            </Link>
          ) : (
            <h4 className="text-xl font-semibold text-packshield-navy">{author.name}</h4>
          )}
          <p className="text-packshield-grey">{author.role}</p>
        </div>
      </div>
      {author.bio && (
        <p className="mt-4 text-packshield-grey">
          {author.bio}
        </p>
      )}
    </div>
  );
};

export default BlogAuthorCard;
