
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'navy' | 'white' | 'colored';
}

const Logo = ({ className = "h-10 w-auto", variant = 'colored' }: LogoProps) => {
  // Utiliser la nouvelle image chargée comme logo par défaut
  const logoSrc = "/lovable-uploads/c3b924c6-e395-4e19-a08f-1d09b4111825.png";

  return (
    <Link to="/">
      <img src={logoSrc} alt="Packshield Logo" className={className} />
    </Link>
  );
};

export default Logo;
