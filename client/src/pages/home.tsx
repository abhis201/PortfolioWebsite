import React, { useEffect } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import BlogPreview from "@/components/blog-preview";
import Cursor from "@/components/cursor";
import ParticleBackground from "@/components/particle-background";
import { motion } from "framer-motion";
import FeaturedProjectsSection from '@/components/featured-projects';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDocker, FaGlobe } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { SiNextdotjs, SiGooglecloud } from 'react-icons/si';
import { Card } from "@/components/ui/card";
import { useState, useMemo, useCallback } from "react";

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A modern, fully responsive portfolio built with React, TypeScript, TailwindCSS, Framer Motion, and Wouter. Features a blog, admin panel, image uploads, and beautiful UI/UX.',
    skills: [FaReact, SiTypescript, SiTailwindcss, FaGithub, FaGlobe],
    github: 'https://github.com/abhishek-singh-7462215a/PortfolioWebsite',
    live: 'https://abhisheksingh.dev',
    featured: true,
  },
  {
    name: 'E-Commerce Platform',
    description: 'A scalable e-commerce platform with microservices architecture, built using Node.js, Express, MongoDB, React, and Docker. Implements JWT auth, payment integration, and CI/CD.',
    skills: [FaNodeJs, SiExpress, SiMongodb, FaReact, FaDocker, FaGithub],
    github: 'https://github.com/abhishek-singh-7462215a/ecommerce-platform',
    live: 'https://ecommerce.abhisheksingh.dev',
    featured: true,
  },
  {
    name: 'Serverless Blog Engine',
    description: 'A serverless blog engine using Next.js, Google Cloud Functions, Firestore, and TailwindCSS. Fast, scalable, and easy to deploy.',
    skills: [SiNextdotjs, SiGooglecloud, SiTailwindcss, FaGithub, FaGlobe],
    github: 'https://github.com/abhishek-singh-7462215a/serverless-blog',
    live: 'https://blog.abhisheksingh.dev',
    featured: true,
  },
];

// Memoized Featured Project Card for performance
const FeaturedProjectCard = React.memo(function FeaturedProjectCard({ project }: { project: any }) {
  const [showTooltip, setShowTooltip] = useState(false);
  // Memoize event handler
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

export default function Home() {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Memoize featured projects to avoid recalculating on every render
  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Cursor />
      <ParticleBackground />
      <Nav />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjectsSection projects={projects} />
        <BlogPreview />
        <Contact />
      </main>
    </motion.div>
  );
}