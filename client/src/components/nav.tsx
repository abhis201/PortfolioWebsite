import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'blog') {
      return; // Don't scroll for blog link
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold"
        >
          <Link href="/">Abhishek S.</Link>
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact', 'Blog'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item === 'Blog' ? (
                <Link href="/blog">{item}</Link>
              ) : (
                item
              )}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}