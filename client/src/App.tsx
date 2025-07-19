import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./lib/theme-context";
import LoadingScreen from "@/components/loading-screen";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Admin from "@/pages/admin";
import NotFound from "@/pages/not-found";
import Certificates from '@/pages/certificates';
import Projects from '@/pages/projects';
import { motion, AnimatePresence } from "framer-motion";

function Router() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRenderPages, setShouldRenderPages] = useState(true);

  useEffect(() => {
    // Skip loading screen when navigating to home page
    if (location === '/') {
      setIsLoading(false);
      setShouldRenderPages(true);
      return;
    }

    // Show loading screen immediately and hide page content
    setIsLoading(true);
    setShouldRenderPages(false);
    
    // Show the new page after loading completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderPages(true);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {shouldRenderPages && (
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/admin" component={Admin} />
            <Route path="/certificates" component={Certificates} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
