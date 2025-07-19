import { useEffect } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import BlogPreview from "@/components/blog-preview";
import Cursor from "@/components/cursor";
import ParticleBackground from "@/components/particle-background";
import { motion } from "framer-motion";
import { Card } from '@/components/ui/card';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaDatabase, FaCloud, FaDocker, FaGlobe, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSpring, SiRedux, SiExpress, SiKubernetes, SiGooglecloud, SiApachekafka } from 'react-icons/si';
import { Link } from 'wouter';

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

export default function Home() {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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
        {/* Featured Projects Section */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.filter(p => p.featured).map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card
                    className="p-6 h-full shadow-xl border-2 border-primary/20 bg-card/95 backdrop-blur-md rounded-xl flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]"
                    onClick={() => window.open(project.live || project.github, '_blank')}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold leading-tight flex-1 text-foreground">{project.name}</h3>
                      {project.live && <FaExternalLinkAlt className="w-5 h-5 text-primary" title="Live Demo" />}
                      <FaGithub className="w-5 h-5 text-muted-foreground" title="GitHub Repo" />
                    </div>
                    <div className="mb-4 text-sm text-muted-foreground min-h-[60px]">{project.description}</div>
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
                          onClick={e => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" /> GitHub
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/projects" className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
                View All Projects
              </Link>
            </div>
          </motion.div>
        </section>
        {/* End Featured Projects Section */}
        <BlogPreview />
        <Contact />
      </main>
    </motion.div>
  );
}