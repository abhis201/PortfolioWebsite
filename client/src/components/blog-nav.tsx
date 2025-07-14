import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogNav() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold"
        >
          Abhishek S.
        </motion.div>

        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Button>
      </div>
    </motion.nav>
  );
} 