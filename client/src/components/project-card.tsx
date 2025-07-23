import React from "react";
import { motion } from "framer-motion";
import { Card } from '@/components/ui/card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  enhancedHover?: boolean;
}

const ProjectCard = React.memo(function ProjectCard({ project, index = 0, enhancedHover = false }: ProjectCardProps) {
  const hoverClasses = enhancedHover 
    ? "hover:shadow-2xl hover:border-primary/40 hover:scale-105" 
    : "hover:shadow-lg hover:border-primary/40";

  return (
    <div className="relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card
          className={`p-6 h-full shadow-xl border-2 border-primary/20 bg-card/95 backdrop-blur-md rounded-xl flex flex-col justify-between group transition-all duration-150 will-change-transform will-change-shadow overflow-visible ${hoverClasses}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-lg font-semibold leading-tight flex-1 text-foreground overflow-x-auto scrollbar-hide whitespace-nowrap pr-2">
              {project.name}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="GitHub Repo"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mb-4 text-sm text-muted-foreground h-[6.35rem] overflow-y-auto pr-1 leading-tight">
            {project.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {project.skills.map((Icon, i) => (
              <Icon key={i} className="w-6 h-6 text-primary/80 bg-primary/10 rounded p-1" />
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition"
              >
                <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition"
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  );
});

export default ProjectCard;
