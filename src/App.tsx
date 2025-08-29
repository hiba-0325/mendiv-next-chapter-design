import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programmes from "./pages/Programmes";
import NotFound from "./pages/NotFound";
import Programmes from "./pages/programmes";
import MindRefreshPage from "./pages/mindrefreshment";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Contact from "./pages/contact";
import About from "./pages/about";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programmes" element={<Programmes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route
            path="/mind-refreshment-studio"
            element={<MindRefreshPage />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
