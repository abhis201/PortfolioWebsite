import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import BlogNav from "@/components/blog-nav";
import Cursor from "@/components/cursor";
import ParticleBackground from "@/components/particle-background";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { supabase, type Blog } from "@/lib/supabase";
import { checkEnvVars } from "@/lib/env-checker";
import { useQuery } from "@tanstack/react-query";

export default function Blog() {
  // Check environment variables on component mount
  React.useEffect(() => {
    checkEnvVars();
  }, []);

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Cursor />
        <ParticleBackground />
        <BlogNav />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Cursor />
        <ParticleBackground />
        <BlogNav />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-destructive mb-4">Error loading blog posts</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Cursor />
      <ParticleBackground />
      <BlogNav />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and experiences from my journey in technology and development.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                {blog.featured_image && (
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={blog.featured_image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {blog.tags?.[0] || 'General'}
                    </Badge>
                    {blog.tags && blog.tags.length > 1 && (
                      <Badge variant="outline" className="text-xs">
                        +{blog.tags.length - 1} more
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blog.published_at)}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = `/blog/${blog.slug}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {blogs?.length === 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </motion.div>
        )}
      </main>
    </motion.div>
  );
} 