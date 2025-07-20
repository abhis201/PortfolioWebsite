import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/lib/theme-context';

export default function About() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-3/4 h-[600px] overflow-hidden rounded-lg bg-black/5 flex items-center justify-center"
          >
            <img
              src={theme === 'dark' ? "./assets/about_dark.jpg" : "./assets/about_light.jpg"}
              alt="Professional photo"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className={`absolute inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black/70' : 'bg-white/20'}`}>
              <Card className={`${theme === 'dark' ? 'bg-white/10' : 'bg-black/50'} backdrop-blur-md p-6 md:p-12 max-w-4xl w-[95vw] md:w-full mx-auto shadow-lg overflow-y-auto max-h-[80vh] md:max-h-none`}>
                <p className="text-lg mb-4 text-white">
                  Software Engineer at Scope Retail Systems Inc. (Bentonville, Arkansas). Graduated with an MS in Computer Science from Purdue University.
                </p>
                <p className="text-lg mb-4 text-white">
                  <strong>Full-time (Jun 2025 - Present):</strong> Design, develop, and maintain RESTful APIs and microservices using Spring Boot (Java). Build interactive, responsive user interfaces with React and TypeScript. Collaborate with cross-functional teams, facilitate sprint planning, write clean and testable code, mentor junior engineers, debug production issues, and maintain CI/CD pipelines.
                </p>
                <p className="text-lg mb-4 text-white">
                  <strong>Internship (Aug 2024 - Jun 2025):</strong> Integrated systems for U.S. retailers and implemented Enterprise Integration Patterns using Apache Camel, Freemarker, Google Cloud Storage, Pub/Sub, and Spanner. Improved system monitoring with OpenTelemetry, Loki, Tempo, and Grafana. Developed product documentation and demos using Markdoc, Next.js, and TailwindUI.
                </p>
                <p className="text-lg text-white">
                  I am passionate about building scalable solutions, leveraging modern technologies, and continuously improving code quality and team productivity.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}