import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Technology from "./pages/Technology";
import ReadingTraining from "./pages/ReadingTraining";
import BreathingTimer from "./pages/BreathingTimer";
import Books from "./pages/Books";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Ted from "./pages/Ted";
import NasaGallery from "./pages/NasaGallery";

// Components
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
                  <Route path="/technology" element={<Technology />} />
                  <Route
                    path="/reading-training"
                    element={<ReadingTraining />}
                  />
                  <Route path="/breathing-timer" element={<BreathingTimer />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ted" element={<Ted />} />
                  <Route path="/nasa" element={<NasaGallery />} />
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
