import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Error loading blog posts</h1>
            <p className="text-muted-foreground">{error}</p>
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
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {posts.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">No blog posts found.</p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:bg-accent cursor-pointer transition-colors">
                  <h2 className="text-2xl font-semibold mb-2">{post.frontmatter.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.frontmatter.description}</p>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.frontmatter.date).toLocaleDateString()}
                  </time>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}