import { motion } from 'framer-motion';
import { Link } from 'wouter';
import ProjectCard from '@/components/project-card';
import { getAllProjects } from '@/data/projects';

export default function Projects() {
  // Get all projects from the shared data
  const projects = getAllProjects();

  // Scroll to top on mount (optional, can be removed if not needed)
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-8">
          <Link href="/" className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
            ← Back to Portfolio
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Projects</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto px-4 sm:px-6">
          Explore a selection of my most impactful projects, each crafted with modern technologies and a focus on clean code, scalability, and outstanding user experience. Click any project to view the code or live demo!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 