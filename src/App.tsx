
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Wheel from "./pages/Wheel";
import TeamGenerator from "./pages/TeamGenerator";
import NamePicker from "./pages/NamePicker";
import YesNoPicker from "./pages/YesNoPicker";
import DiceRoller from "./pages/DiceRoller";
import CoinFlipper from "./pages/CoinFlipper";
import LabelSpinner from "./pages/LabelSpinner";
import ListShuffler from "./pages/ListShuffler";
import QuestionGenerator from "./pages/QuestionGenerator";
import SequenceGenerator from "./pages/SequenceGenerator";
import TimerSpinner from "./pages/TimerSpinner";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Feedback from "./pages/Feedback";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

const App = () => {
  // Initialize AdSense code once when the app loads
  useEffect(() => {
    // Check if AdSense script exists
    const existingScript = document.querySelector('script[src*="adsbygoogle"]');
    
    // If not already present, add AdSense script
    if (!existingScript) {
      const adsScript = document.createElement('script');
      adsScript.async = true;
      adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6502311177168321";
      adsScript.crossOrigin = "anonymous";
      document.head.appendChild(adsScript);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet>
          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "NumberPicker.Live",
                "url": "https://numberpicker.live",
                "description": "Free online random name picker and number generator tools for fair decision making in classrooms, events, and business.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://numberpicker.live/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            `}
          </script>
        </Helmet>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generator" element={<Index />} />
              <Route path="/wheel" element={<Wheel />} />
              <Route path="/teams" element={<TeamGenerator />} />
              <Route path="/names" element={<NamePicker />} />
              <Route path="/yesno" element={<YesNoPicker />} />
              <Route path="/dice" element={<DiceRoller />} />
              <Route path="/coin" element={<CoinFlipper />} />
              <Route path="/labels" element={<LabelSpinner />} />
              <Route path="/shuffle" element={<ListShuffler />} />
              <Route path="/questions" element={<QuestionGenerator />} />
              <Route path="/sequence" element={<SequenceGenerator />} />
              <Route path="/timer" element={<TimerSpinner />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
