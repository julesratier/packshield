
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produits/:slug" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} /> {/* Keeping for backward compatibility */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Keeping for backward compatibility */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<BlogPost />} />
          <Route path="/blog/2" element={<BlogPost />} />
          <Route path="/blog/3" element={<BlogPost />} />
          <Route path="/blog/10" element={<BlogPostMattrTransport />} />
          <Route path="/blog/11" element={<BlogPostTop8Housses />} />
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
