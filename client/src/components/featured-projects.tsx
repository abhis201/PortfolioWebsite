import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from 'wouter';
import ProjectCard from '@/components/project-card';
import { type Project } from '@/data/projects';

export default function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), [projects]);
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/30 to-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Featured Projects</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my best work, focused on modern web technologies, clean code, and real-world impact. Click any project to view the code or live demo!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 overflow-visible">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} enhancedHover={true} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/projects" className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
            View All Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
} 