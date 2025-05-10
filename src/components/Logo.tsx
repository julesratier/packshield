
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'navy' | 'white' | 'colored';
}

const Logo = ({ className = "h-10 w-auto", variant = 'colored' }: LogoProps) => {
  let logoSrc;
  
  switch (variant) {
    case 'navy':
      logoSrc = "/lovable-uploads/9be8b5ea-06ad-49bd-a48b-ac136612e599.png";
      break;
    case 'white':
      logoSrc = "/lovable-uploads/a799c1c5-fe52-4b0d-9416-39ed59f16339.png";
      break;
    case 'colored':
      logoSrc = "/lovable-uploads/a799c1c5-fe52-4b0d-9416-39ed59f16339.png";
      break;
    default:
      logoSrc = "/lovable-uploads/a799c1c5-fe52-4b0d-9416-39ed59f16339.png";
  }

  return (
    <Link to="/">
      <img src={logoSrc} alt="Packshield Logo" className={className} />
    </Link>
  );
};

export default Logo;
