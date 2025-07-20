import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaDatabase, FaCloud, FaDocker, FaGlobe, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSpring, SiRedux, SiExpress, SiKubernetes, SiGooglecloud, SiApachekafka } from 'react-icons/si';
import { Link } from 'wouter';
import ParticleBackground from '@/components/particle-background';

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
    description: `A scalable e-commerce platform with microservices architecture, built using Node.js, Express, MongoDB, React, and Docker. Implements JWT auth, payment integration, and CI/CD.\n\nThis project features a robust admin dashboard, real-time order tracking, product recommendations, and a fully responsive UI. It also includes automated testing, containerized deployment, and advanced analytics for sales and user engagement.\n\nThe platform is designed for high availability and scalability, supporting thousands of concurrent users and seamless integration with third-party services.`,
    skills: [FaNodeJs, SiExpress, SiMongodb, FaReact, FaDocker, FaGithub],
    github: 'https://github.com/abhishek-singh-7462215a/ecommerce-platform',
    live: 'https://ecommerce.abhisheksingh.dev',
    featured: true,
  },
  {
    name: 'Real-Time Chat App',
    description: 'A real-time chat application using React, Redux, Node.js, Socket.io, and MongoDB. Features group chats, notifications, and emoji support.',
    skills: [FaReact, SiRedux, FaNodeJs, SiMongodb, FaGithub],
    github: 'https://github.com/abhishek-singh-7462215a/realtime-chat',
    live: '',
    featured: false,
  },
  {
    name: 'Cloud Cost Analyzer',
    description: 'A cloud cost analytics dashboard using Python, AWS Lambda, PostgreSQL, and React. Visualizes and optimizes cloud spend for enterprises.',
    skills: [FaPython, FaAws, SiPostgresql, FaReact, FaGithub],
    github: 'https://github.com/abhishek-singh-7462215a/cloud-cost-analyzer',
    live: '',
    featured: false,
  },
  {
    name: 'Kafka Event Streaming Demo',
    description: 'A demo platform for Apache Kafka event streaming, built with Java, Spring Boot, Kafka, and Docker. Showcases real-time data pipelines and monitoring.',
    skills: [FaJava, SiSpring, SiApachekafka, FaDocker, FaGithub],
    github: 'https://github.com/abhishek-singh-7462215a/kafka-event-streaming',
    live: '',
    featured: false,
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

export default function Projects() {
  // Scroll to top on mount (optional, can be removed if not needed)
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {projects.map((project, idx) => {
              return (
                <div key={project.name} className="relative overflow-visible">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Card
                      className="p-6 h-full shadow-lg border-2 border-primary/20 bg-card/90 backdrop-blur-md rounded-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-primary/40 overflow-visible"
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
                      {project.skills.map((Icon, i) => (
                        <Icon key={i} className="w-6 h-6 text-primary/80 bg-primary/10 rounded p-1" />
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto relative">
                      {project.live && (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition relative"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                        </button>
                      )}
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition relative"
                      >
                        <FaGithub className="w-4 h-4" /> GitHub
                      </button>
                    </div>
                  </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
} 