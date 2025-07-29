import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, type Blog } from "@/lib/supabase";

export default function BlogPreview() {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })
        .limit(3);
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

  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Blog
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, insights, and experiences from my journey in technology and development.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {isLoading ? (
          <Card className="p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Loading...</CardTitle>
              <CardDescription className="text-lg">Fetching latest blog posts.</CardDescription>
            </CardHeader>
          </Card>
        ) : error ? (
          <Card className="p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Error</CardTitle>
              <CardDescription className="text-lg">Could not load blog posts.</CardDescription>
            </CardHeader>
          </Card>
        ) : blogs && blogs.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center gap-8">
              {blogs.map((blog) => (
                <Card key={blog.id} className="h-full text-left w-full md:w-[400px] lg:w-[480px]">
                  {blog.featured_image && (
                    <div className="relative overflow-hidden rounded-t-lg mb-4">
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg mb-2 line-clamp-2">{blog.title}</CardTitle>
                    <CardDescription className="line-clamp-3 mb-2">{blog.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{blog.author}</span>
                      <span>{formatDate(blog.published_at)}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => window.location.href = `/blog/${blog.slug}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="/blog"
                className="inline-block px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition flex items-center gap-2"
              >
                View All Blogs
              </a>
            </div>
          </>
        ) : (
          <Card className="p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                I'm working on some interesting blog posts about technology, development, and my experiences.
                Check back soon for the first post!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => window.location.href = '/blog'}
                className="flex items-center gap-2 mx-auto"
              >
                Visit Blog
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </section>
  );
}