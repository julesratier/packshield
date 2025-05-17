
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPostMattrTransport from "./pages/BlogPost_MattrTransport";
import BlogPostTop8Housses from "./pages/BlogPost_Top8Housses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PartenaireAmazon from "./pages/PartenaireAmazon";
import AuthorProfile from "./pages/AuthorProfile";
import { ScrollToTop } from "./utils/ScrollToTop";
import Sitemap from "./components/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Sitemap />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/produits/:slug" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} /> {/* Keeping for backward compatibility */}
            <Route path="/product/:id" element={<ProductDetail />} /> {/* Keeping for backward compatibility */}
            <Route path="/blog" element={<Blog />} />
            
            {/* Blog posts with SEO-friendly slugs */}
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Legacy routes for specific blog posts - redirecting to new URLs */}
            <Route path="/blog/comment-transporter-son-matelas-efficacement-10" element={<BlogPostMattrTransport />} />
            <Route path="/blog/top-8-des-meilleures-housses-matelas-pour-les-demenagement-11" element={<BlogPostTop8Housses />} />
            <Route path="/blog/11" element={<BlogPostTop8Housses />} />
            <Route path="/blog/10" element={<BlogPostMattrTransport />} />
            
            {/* Product redirects for old URLs handled in ProductDetail component */}
            
            <Route path="/kit-rangement-sous-vide-2-sacs-2-coffres" element={<ProductDetail />} />
            <Route path="/kit-rangement-sous-vide-4-sacs-4-coffres" element={<ProductDetail />} />
            
            <Route path="/author/helene-mirmande" element={<AuthorProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/partenaire-amazon" element={<PartenaireAmazon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
