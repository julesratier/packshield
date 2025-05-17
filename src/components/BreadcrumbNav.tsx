
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbNavProps {
  items: {
    title: string;
    href?: string;
  }[];
  className?: string;
  light?: boolean;
  textColor?: string;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, className, light = false, textColor }) => {
  const textColorStyle = textColor ? { color: textColor } : undefined;
  
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className={light ? 'text-gray-300' : undefined}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link 
              to="/" 
              className={light ? 'hover:text-white' : 'hover:text-[#142947]'}
              style={textColorStyle}
            >
              <Home size={16} strokeWidth={2} aria-hidden="true" style={textColorStyle} />
              <span className="sr-only">Accueil</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator 
              className={light ? undefined : undefined} 
              style={textColorStyle}
            />
            <BreadcrumbItem>
              {index === items.length - 1 ? (
                <BreadcrumbPage 
                  className={light ? 'text-white' : 'font-medium'} 
                  style={textColorStyle}
                >
                  {item.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink 
                  asChild 
                  className={light ? 'hover:text-white' : 'hover:text-[#142947]'}
                  style={textColorStyle}
                >
                  <Link to={item.href || '#'} style={textColorStyle}>{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
