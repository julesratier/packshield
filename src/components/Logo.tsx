
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'navy' | 'white' | 'colored';
}

const Logo = ({ className = "h-10 w-auto", variant = 'colored' }: LogoProps) => {
  // Use the appropriate logo based on variant
  let logoSrc = "/lovable-uploads/d3fa32c1-109f-44d2-a7fa-1157cc2badad.png";
  
  if (variant === 'white') {
    logoSrc = "/lovable-uploads/6b5c4769-9005-4cea-bf80-318b61cc853a.png";
  }

  return (
    <Link to="/">
      <img src={logoSrc} alt="Packshield Logo" className={className} />
    </Link>
  );
};

export default Logo;
