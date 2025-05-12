
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";

// Páginas
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tecnologia from "./pages/Tecnologia";
import TreinoLeitura from "./pages/TreinoLeitura";
import TimerRespiracao from "./pages/TimerRespiracao";
import Livros from "./pages/Livros";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";

// Componentes
import SpaceBackground from "./components/SpaceBackground";
import { BlogSidebar } from "./components/BlogSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SpaceBackground>
          <BrowserRouter>
            <div className="flex min-h-screen">
              <BlogSidebar />
              <main className="flex-1 p-6 md:p-10">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/tecnologia" element={<Tecnologia />} />
                  <Route path="/treino-leitura" element={<TreinoLeitura />} />
                  <Route path="/timer-respiracao" element={<TimerRespiracao />} />
                  <Route path="/livros" element={<Livros />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/sobre" element={<Sobre />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </SpaceBackground>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
