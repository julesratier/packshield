import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produits/housse-protection-matelas-tissu" element={<ProductDetail />} />
          <Route path="/produits/housse-matelas-plastique-epais" element={<ProductDetail />} />
          <Route path="/produits/housse-matelas-1-personne" element={<ProductDetail />} />
          <Route path="/produits/housse-matelas-tissu-1-personne" element={<ProductDetail />} />
          <Route path="/produits/kit-rangement-compact" element={<ProductDetail />} />
          <Route path="/produits/kit-rangement-mini" element={<ProductDetail />} />
          {/* Keep backward compatibility for a while */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/comment-transporter-matelas-efficacement" element={<BlogPostMattrTransport />} />
          <Route path="/blog/top-8-meilleures-housses-matelas-demenagement" element={<BlogPostTop8Housses />} />
          <Route path="/blog/moving-day-tips-protect-furniture" element={<BlogPost />} />
          {/* Keep backward compatibility for a while */}
          <Route path="/blog/:id" element={<BlogPost />} />
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
);

export default App;
