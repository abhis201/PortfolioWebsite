import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/lib/theme-context';
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaCloud,
  FaDatabase,
  FaMicrosoft,
  FaJenkins,
  FaCuttlefish,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAndroid,
  FaApple,
  FaCode,
  FaCogs,
} from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiSpring, SiMongodb, SiPostgresql, SiApachecassandra, SiKubernetes, SiSharp, SiGooglecloud, SiApachekafka, SiTypescript } from 'react-icons/si';
import { ApacheCamelIcon } from './ui/ApacheCamelIcon';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: '#007396' },
      { name: "C#", icon: SiSharp, color: '#239120' },
      { name: "JavaScript", icon: FaJsSquare, color: '#F7DF1E' },
      { name: "TypeScript", icon: SiTypescript, color: '#3178C6' },
      { name: "Python", icon: FaPython, color: '#3776AB' },
      { name: "C++", icon: SiCplusplus, color: '#00599C' }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: '#61DAFB' },
      { name: "Next.js", icon: SiNextdotjs, color: '#000000' },
      { name: "React Native", icon: FaReact, color: '#61DAFB' },
      { name: "TailwindCSS", icon: SiTailwindcss, color: '#06B6D4' }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: '#339933' },
      { name: "Express", icon: FaNodeJs, color: '#000000' },
      { name: "Spring", icon: SiSpring, color: '#6DB33F' },
      { name: "MongoDB", icon: SiMongodb, color: '#47A248' },
      { name: "PostgreSQL", icon: SiPostgresql, color: '#336791' },
      { name: "Cassandra", icon: SiApachecassandra, color: '#1287B1' },
      { name: "Kafka", icon: SiApachekafka, color: '#231F20' },
      { name: "Camel", icon: ApacheCamelIcon, color: '#f69923' },
      { name: "Freemarker", icon: FaCode, color: '#005F87' }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud", icon: SiGooglecloud, color: '#4285F4' },
      { name: "AWS", icon: FaAws, color: '#FF9900' },
      { name: "Kubernetes", icon: SiKubernetes, color: '#326CE5' },
      { name: "Docker", icon: FaDocker, color: '#2496ED' },
      { name: "CI/CD", icon: FaCogs, color: '#6366F1' }
    ]
  }
];

export default function Skills() {
  const { theme } = useTheme();

  const getIconColor = (skillName: string, defaultColor: string) => {
    if (theme === 'dark') {
      if (skillName === 'Next.js' || skillName === 'Express' || skillName === 'Kafka') {
        return '#ffffff';
      }
    }
    return defaultColor;
  };

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
                      <skill.icon 
                        className="w-8 h-8" 
                        style={{ color: getIconColor(skill.name, skill.color) }} 
                      />
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