import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function About() {
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
              src={"./assets/about_light.jpg"}
              alt="Professional photo"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className={`absolute inset-0 flex items-center justify-center`}>
              <Card className={`bg-black/50 backdrop-blur-md w-full h-full box-border p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mx-auto shadow-lg overflow-y-auto`}> 
                <p className="text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-xl text-white leading-relaxed py-2 md:py-3 whitespace-pre-line">
                  Full-Stack Software Engineer with an MS in Computer Science from Purdue University (where I learned that debugging is just being a detective in a crime movie you committed yourself), currently architecting scalable RESTful APIs and microservices with Spring Boot and Java while crafting responsive React and TypeScript interfaces that actually work on the first try (okay, maybe the second… or third) at Scope Retail Systems Inc. in beautiful Bentonville, Arkansas.
                  {"\n\n"}
                  I’ve evolved from integrating enterprise systems using Apache Camel, Kafka, Freemarker, Google Cloud Storage, Pub/Sub, Spanner, and a concerning amount of coffee during my internship, to now collaborating with cross-functional teams who somehow still trust my technical decisions, mentoring junior engineers (teaching them that “it works on my machine” is not a valid deployment strategy).
                  {"\n\n"}
                  Currently maintaining production CI/CD pipelines and orchestrating complex deployments with OpenTelemetry, Loki, Tempo, and Grafana that don’t break at 3 AM (most of the time) with the finesse of a symphony conductor who occasionally drops the baton—all while driving continuous improvements in code quality, system scalability, team productivity, and the office’s caffeine consumption rates across the complete software development lifecycle, because apparently building software that handles real money and doesn’t fall over when more than three people use it simultaneously is considered “a skill.”
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}