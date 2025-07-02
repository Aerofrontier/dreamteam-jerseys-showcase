
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Football from "./pages/Football";
import Basketball from "./pages/Basketball";
import Baseball from "./pages/Baseball";
import NFL from "./pages/NFL";
import Formula1 from "./pages/Formula1";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/futbol" element={<Football />} />
          <Route path="/nfl" element={<NFL />} />
          <Route path="/nba" element={<Basketball />} />
          <Route path="/mlb" element={<Baseball />} />
          <Route path="/f1" element={<Formula1 />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
