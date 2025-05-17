
import React, { useEffect } from 'react';
import { products } from '@/utils/products';
import { createProductSlug } from '@/utils/productSlug';
import { createBlogSlug } from '@/utils/blogSlug';

const Sitemap: React.FC = () => {
  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = () => {
    const baseUrl = 'https://packshield.shop';
    
    // Static pages
    const staticPages = [
      '',
      '/produits',
      '/blog',
      '/about',
      '/contact',
      '/mentions-legales',
      '/partenaire-amazon',
    ];
    
    // Product pages
    const productPages = products.map(product => 
      `/produits/${createProductSlug({ id: product.id, title: product.title })}`
    );
    
    // Blog pages
    const blogPosts = [
      { id: 10, title: "Comment transporter son matelas efficacement ?" },
      { id: 11, title: "Top 8 des meilleures housses matelas pour les déménagement" },
      { id: 2, title: "Moving Day Tips: Protect Your Furniture" }
    ];
    
    const blogPages = blogPosts.map(post => 
      `/blog/${createBlogSlug({ id: post.id, title: post.title })}`
    );
    
    // Combine all URLs
    const allUrls = [...staticPages, ...productPages, ...blogPages];
    
    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;
    
    // For development purposes, log the XML
    console.log('Generated sitemap:', xml);
  };

  return null;
};

export default Sitemap;
