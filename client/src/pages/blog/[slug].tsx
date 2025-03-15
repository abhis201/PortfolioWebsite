import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface Post {
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  content: string;
}

export default function BlogPost() {
  const [_, params] = useRoute('/blog/:slug');
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      setLoading(true);
      setError(null);
      fetch(`/api/posts/${params.slug}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.statusText}`);
          }
          return res.json();
        })
        .then(data => setPost(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">
              {error || "Post not found"}
            </h1>
            <Link href="/blog">
              <Button className="mt-4">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <Card className="p-8 max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <article className="prose prose-stone dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
            <time className="text-muted-foreground">
              {new Date(post.frontmatter.date).toLocaleDateString()}
            </time>
            <div 
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </Card>
      </motion.div>
    </div>
  );
}