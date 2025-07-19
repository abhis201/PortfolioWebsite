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
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiSpring, SiMongodb, SiPostgresql, SiApachecassandra, SiKubernetes, SiSharp, SiGooglecloud, SiApachekafka } from 'react-icons/si';
import { ApacheCamelIcon } from './ui/ApacheCamelIcon';

const skillIconMap = {
  Java: { icon: FaJava, color: '#007396' },
  'C#': { icon: SiSharp, color: '#239120' },
  JavaScript: { icon: FaJsSquare, color: '#F7DF1E' },
  Python: { icon: FaPython, color: '#3776AB' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  React: { icon: FaReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'React Native': { icon: FaReact, color: '#61DAFB' },
  TailwindCSS: { icon: SiTailwindcss, color: '#06B6D4' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  Express: { icon: FaNodeJs, color: '#000000' },
  Spring: { icon: SiSpring, color: '#6DB33F' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  Cassandra: { icon: SiApachecassandra, color: '#1287B1' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4' },
  AWS: { icon: FaAws, color: '#FF9900' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  Docker: { icon: FaDocker, color: '#2496ED' },
  'CI/CD': { icon: FaCogs, color: '#6366F1' },
  Jenkins: { icon: FaJenkins, color: '#D24939' },
  GitHub: { icon: FaGithub, color: '#181717' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  HTML5: { icon: FaHtml5, color: '#E34F26' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6' },
  Android: { icon: FaAndroid, color: '#3DDC84' },
  iOS: { icon: FaApple, color: '#000000' },
  Kafka: { icon: SiApachekafka, color: '#231F20' },
  Camel: { icon: ApacheCamelIcon, color: '#f69923' },
  Freemarker: { icon: FaCode, color: '#005F87' },
};

const experiences = [
  {
    title: "Software Engineer I",
    company: "Scope Retail Systems Inc.",
    period: "06/2025 - Present",
    location: "Bentonville, AR, USA (On-site)",
    description: `Lead the design, development, and maintenance of RESTful APIs and microservices using Spring Boot (Java), ensuring scalable and fault-tolerant architectures for high-traffic retail environments. Architected and implemented interactive, responsive UIs with React.js and TypeScript, focusing on reusable components and robust state management. Collaborated with cross-functional teams (product, QA, DevOps) to deliver features, facilitate agile ceremonies, and accelerate time-to-market. Championed code quality through rigorous code reviews, mentoring, and adherence to best practices (unit/integration testing with JUnit, Jest). Automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times and minimizing downtime. Proactively resolved production issues, optimized performance, and drove innovation by evaluating emerging technologies and proposing PoCs.`,
    skills: ["Java", "Spring", "React", "TypeScript", "CI/CD", "Jenkins", "GitHub", "REST APIs", "Microservices", "Agile", "JUnit", "Jest", "Docker", "Kubernetes", "AWS", "Google Cloud", "Kafka", "Camel", "Freemarker"] as (keyof typeof skillIconMap)[]
  },
  {
    title: "Software Engineer Intern",
    company: "Scope Retail Systems Inc.",
    period: "08/2024 - 06/2025",
    location: "Bentonville, AR, USA (On-site)",
    description: `Integrated enterprise systems for U.S. retailers, implementing Enterprise Integration Patterns with Apache Camel, Freemarker, Google Cloud Storage, Pub/Sub, and Spanner. Instrumented Dockerized microservices with OpenTelemetry, integrating Loki, Tempo, and Grafana for comprehensive log and trace analysis. Developed product documentation and interactive demos using Markdoc, Next.js, and TailwindUI. Collaborated with engineering teams to enhance system interoperability, monitoring, and user engagement.`,
    skills: ["Apache Camel", "Google Cloud", "Docker", "OpenTelemetry", "Loki", "Tempo", "Grafana", "Markdoc", "Next.js", "TailwindCSS", "System Integration", "Microservices", "Kafka", "Camel", "Freemarker"] as (keyof typeof skillIconMap)[]
  },
  {
    title: "Data Scientist and Software Developer",
    company: "Purdue University",
    period: "01/2024 - 05/2024",
    location: "Hammond, IN, USA",
    description: `Developed and deployed a Gunshot Detection System for campus safety, leveraging machine learning and real-time data processing across 150+ buildings. Enhanced risk analysis and predictive maintenance using advanced ML models. Built and trained a YOLOv8-based computer vision model for rail defect classification, improving detection accuracy and operational safety. Collaborated with research teams to publish findings and present at industry conferences.`,
    skills: ["Python", "Machine Learning", "YOLOv8", "Computer Vision", "Data Science", "PostgreSQL", "React", "Docker"] as (keyof typeof skillIconMap)[]
  },
  {
    title: "Associate Software Engineer",
    company: "Scopesys Innovation",
    period: "11/2022 - 08/2023",
    location: "Pune, MH, India",
    description: `Engineered and maintained the COSMOS transaction platform, processing $10M+ monthly transactions for retail clients. Enhanced warehouse management efficiency by 40% through the UNITI system, leveraging Node.js, React, and MongoDB. Reduced system downtimes by 30% via codebase refactoring, improved monitoring, and automated deployment pipelines. Collaborated with global teams to deliver scalable, secure, and high-performance solutions.`,
    skills: ["Node.js", "React", "MongoDB", "PostgreSQL", "Docker", "CI/CD", "Agile", "Microservices"] as (keyof typeof skillIconMap)[]
  }
];

export default function Experience() {
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
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full shadow-xl border-2 border-primary/30 bg-card/90 backdrop-blur-md rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="mb-6 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {exp.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills && exp.skills.map((skill: keyof typeof skillIconMap) => {
                    const iconData = skillIconMap[skill] || {};
                    const Icon = iconData.icon;
                    return Icon ? (
                      <Icon 
                        key={skill} 
                        className="w-5 h-5" 
                        style={{ 
                          color: getIconColor(skill, iconData.color), 
                          opacity: 0.85 
                        }} 
                        title={skill} 
                      />
                    ) : null;
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
