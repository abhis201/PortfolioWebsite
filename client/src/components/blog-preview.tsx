import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
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
      </motion.div>
    </section>
  );
} 