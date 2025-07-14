import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import BlogNav from "@/components/blog-nav";
import Cursor from "@/components/cursor";
import ParticleBackground from "@/components/particle-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react";
import { supabase, type BlogWithMedia } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export default function BlogPost() {
  const [, setLocation] = useLocation();
  const slug = window.location.pathname.split('/').pop();

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (blogError) throw blogError;

      const { data: mediaData, error: mediaError } = await supabase
        .from('blog_media')
        .select('*')
        .eq('blog_id', blogData.id)
        .order('order', { ascending: true });

      if (mediaError) throw mediaError;

      return {
        ...blogData,
        media: mediaData || []
      } as BlogWithMedia;
    },
    enabled: !!slug,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
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
              <p className="text-muted-foreground">Loading blog post...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Cursor />
        <ParticleBackground />
        <BlogNav />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-destructive mb-4">Blog post not found</p>
              <Button onClick={() => setLocation('/blog')}>Back to Blog</Button>
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
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => setLocation('/blog')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Blog Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {blog.tags?.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {blog.title}
            </h1>
            {blog.excerpt && (
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                {blog.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blog.published_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatReadingTime(blog.content)}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featured_image && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8">
            <CardContent className="p-0">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Media */}
        {blog.media && blog.media.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <Separator className="my-8" />
            <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blog.media.map((media) => (
                <div key={media.id} className="space-y-2">
                  {media.media_type === 'image' && (
                    <img
                      src={media.media_url}
                      alt={media.caption || 'Blog media'}
                      className="w-full rounded-lg"
                    />
                  )}
                  {media.media_type === 'video' && (
                    <video
                      src={media.media_url}
                      controls
                      className="w-full rounded-lg"
                    />
                  )}
                  {media.caption && (
                    <p className="text-sm text-muted-foreground italic">
                      {media.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </motion.div>
  );
} 