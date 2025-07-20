import React, { useMemo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Card } from '@/components/ui/card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'wouter';

// Accept projects as a prop for reusability
const FeaturedProjectCard = React.memo(function FeaturedProjectCard({ project }: { project: any }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleButtonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  }, []);

  return (
    <div className="relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card
          className="p-6 h-full shadow-xl border-2 border-primary/20 bg-card/95 backdrop-blur-md rounded-xl flex flex-col justify-between group transition-all duration-150 will-change-transform will-change-shadow hover:shadow-2xl hover:border-primary/40 hover:scale-105 overflow-visible"
        >
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-lg font-semibold leading-tight flex-1 text-foreground">{project.name}</h3>
            {project.live && <FaExternalLinkAlt className="w-5 h-5 text-primary" title="Live Demo" />}
            <FaGithub className="w-5 h-5 text-muted-foreground" title="GitHub Repo" />
          </div>
          <div className="mb-4 text-sm text-muted-foreground h-[6.35rem] overflow-y-auto pr-1 leading-tight">
            {project.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {project.skills.map((Icon: any, i: number) => (
              <Icon key={i} className="w-6 h-6 text-primary/80 bg-primary/10 rounded p-1" />
            ))}
          </div>
          <div className="flex gap-2 mt-auto relative">
            {project.live && (
              <button
                type="button"
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition relative"
                onClick={handleButtonClick}
              >
                <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition relative"
              onClick={handleButtonClick}
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </button>
            {showTooltip && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-black text-white text-xs shadow-lg z-20 whitespace-nowrap">
                Links coming soon!
              </span>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
});

export default function FeaturedProjectsSection({ projects }: { projects: any[] }) {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 overflow-visible">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.name} project={project} />
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