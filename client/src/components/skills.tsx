import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Code2,
  FileCode2,
  BrainCircuit,
  Terminal,
  Database,
  Server,
  Cloud,
  GitBranch,
  Container,
  Smartphone
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FileCode2 },
      { name: "C#", icon: Code2 },
      { name: "JavaScript", icon: BrainCircuit },
      { name: "Python", icon: Terminal },
      { name: "C++", icon: FileCode2 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Terminal },
      { name: "React Native", icon: Smartphone },
      { name: "TailwindCSS", icon: FileCode2 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Spring", icon: GitBranch },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Cassandra", icon: Database }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure", icon: Cloud },
      { name: "AWS", icon: Cloud },
      { name: "Kubernetes", icon: Container },
      { name: "Docker", icon: Container },
      { name: "Jenkins", icon: GitBranch }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <skill.icon className="w-8 h-8 text-primary" />
                      <span className="text-xs text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}