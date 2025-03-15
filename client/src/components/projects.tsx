import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: "SharePrompt",
    description: "A modern AI prompt-sharing platform built with Next.js, MongoDB, and TailwindCSS featuring glassmorphism design and secure Google authentication.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "NextAuth"]
  },
  {
    title: "SentinelSafe",
    description: "Risk assessment model for enhancing school safety using React.js and Recoil, leveraging CNN and deep neural networks with 85% accuracy.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["React.js", "Recoil", "CNN", "Machine Learning"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
