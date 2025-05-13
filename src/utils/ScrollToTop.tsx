
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si nous avons un hash dans l'URL (ex: /#faq), faire défiler vers cet élément
    if (hash) {
      // Petit délai pour s'assurer que la page est entièrement chargée
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Sinon, défiler vers le haut de la page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
