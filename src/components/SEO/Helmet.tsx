
import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async';

interface HelmetProps {
  title: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>[] | Record<string, any>;
  children?: React.ReactNode;
}

const Helmet: React.FC<HelmetProps> = ({ 
  title, 
  description, 
  canonical,
  structuredData,
  children 
}) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {children}
    </ReactHelmet>
  );
};

export default Helmet;
