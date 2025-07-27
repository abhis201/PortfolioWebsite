import { motion } from "framer-motion";
import { useState } from "react";
import BlogNav from "@/components/blog-nav";
import Cursor from "@/components/cursor";
import BlogEditor from "@/components/blog-editor";
import { AdminAuthModal } from "./admin-auth";

export default function Admin() {
  const [showAuth, setShowAuth] = useState(true);
  const [error, setError] = useState("");
  const envPassword = import.meta.env.VITE_ADMIN_PASS;

  const handleValidate = (inputPassword: string) => {
    if (inputPassword === envPassword) {
      setShowAuth(false);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <>
      {showAuth ? (
        <AdminAuthModal onValidate={handleValidate} error={error} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-background text-foreground overflow-hidden"
        >
          <Cursor />
          <BlogNav />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Manage your blog posts and website content.
              </p>
            </motion.div>
            <BlogEditor />
          </main>
        </motion.div>
      )}
    </>
  );
}