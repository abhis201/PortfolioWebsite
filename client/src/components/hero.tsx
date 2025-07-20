import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between relative px-4 md:px-8 pt-24 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center md:justify-start"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-[600px] overflow-hidden rounded-2xl mt-4 md:mt-0">
          <img
            src="./assets/hero_img.jpeg"
            alt="Abhishek Singh"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left md:pl-12 mt-4 md:mt-0 z-10"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Abhishek Singh
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-xl whitespace-pre-line"
        >
          Software Engineer @ Scope Retail Systems
          {"\n"}From APIs to interfaces, crafting complete solutions
          {"\n"}🎓 MS Computer Science - Purdue University
          {"\n"}⚡ Expertise: Scalable APIs - Modern UI/UX - Cloud-Native Architecture
          {"\n"}Transforming ideas into robust, scalable, production-ready applications
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-start gap-6"
        >
          <a href="https://linkedin.com/in/abhishek-singh-7462215a/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-200 flex items-center gap-2 group">
            <FaLinkedin className="w-6 h-6 group-hover:scale-110 group-hover:text-blue-600 transition-transform duration-200" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group">
            <FaGithub className="w-6 h-6 group-hover:scale-110 group-hover:text-orange-500 transition-transform duration-200" />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a href="mailto:sing1290@purdue.edu" className="text-primary hover:text-green-600 transition-colors duration-200 flex items-center gap-2 group">
            <FaEnvelope className="w-6 h-6 group-hover:scale-110 group-hover:text-green-500 transition-transform duration-200" />
            <span className="hidden md:inline">Email</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}