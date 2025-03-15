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

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] overflow-hidden rounded-lg bg-black/5"
          >
            <img
              src="./assets/IMG_4977 Copy.jpeg"
              alt="Professional photo"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6">
              <p className="text-lg mb-4">
                I am a Software Engineer pursuing my Master's in Computer Science at Purdue University with a strong background in full-stack development, distributed systems, and cloud technologies.
              </p>
              <p className="text-lg mb-4">
                Currently working as a Software Engineer Intern at Scope Retail, where I focus on improving system interoperability and implementing enterprise integration patterns.
              </p>
              <p className="text-lg">
                I'm passionate about building scalable solutions and leveraging modern technologies to solve complex problems. With experience in both frontend and backend development, I bring a comprehensive approach to software engineering.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}