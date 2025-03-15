import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between relative px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center md:justify-start"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-[600px] overflow-hidden rounded-2xl">
          <img
            src="./assets/A5DD8012-E34B-47A3-AB35-138FB6143AA8.jpeg"
            alt="Abhishek Singh"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left md:pl-12 mt-8 md:mt-0 z-10"
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
          className="text-lg text-muted-foreground mb-8 max-w-xl"
        >
          A passionate Software Engineer with expertise in full-stack development, distributed systems, and cloud technologies. Currently pursuing MS in Computer Science at Purdue University while contributing to enterprise-scale solutions at Scope Retail.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-start gap-6"
        >
          <a href="https://linkedin.com/in/abhishek-singh-7462215a/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
            GitHub
          </a>
          <a href="mailto:sing1290@purdue.edu" className="text-primary hover:text-primary/80">
            Email
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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