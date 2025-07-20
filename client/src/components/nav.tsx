import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/lib/theme-context';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Blog', action: () => scrollToSection('blog') },
    { label: 'Contact', action: () => scrollToSection('contact') },
    { label: 'Certificates', action: null, href: '/certificates' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold text-foreground"
        >
          Abhishek S.
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            item.href ? (
              <li key={item.label}>
                <Link href={item.href} className="relative group cursor-pointer font-semibold text-primary hover:underline">
                  {item.label}
                </Link>
              </li>
            ) : (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.1 }}
                className="relative group cursor-pointer text-foreground"
                onClick={item.action ? item.action : undefined}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.li>
            )
          ))}
          
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <FaMoon className="w-5 h-5 text-foreground" />
            ) : (
              <FaSun className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle Button for Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <FaMoon className="w-5 h-5 text-foreground" />
            ) : (
              <FaSun className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
          
          <button
            className="text-2xl text-primary focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-card shadow-lg z-50 flex flex-col p-8 md:hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-primary focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
              <ul className="flex flex-col gap-6 mt-8">
                {navLinks.map((item) => (
                  item.href ? (
                    <li key={item.label}>
                      <Link 
                        href={item.href}
                        className="block text-lg font-semibold text-primary py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className="block text-lg font-semibold text-primary py-2 cursor-pointer"
                      onClick={item.action ? item.action : undefined}
                    >
                      {item.label}
                    </li>
                  )
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}