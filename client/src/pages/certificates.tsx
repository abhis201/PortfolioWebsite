import { useState, useCallback, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaUniversity, FaJava, FaDatabase, FaPython, FaCloud, FaRobot, FaFeatherAlt } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiApachekafka, SiOracle, SiLinkedin, SiUdemy, SiHackerone } from 'react-icons/si';
import { Link } from 'wouter';

const certificates = [
  {
    title: 'Master of Science in Computer Science',
    issuer: 'Purdue University',
    date: 'May 2025',
    credentialId: '25w3-84bb-a8hh',
    icon: FaUniversity,
    skills: ['Advanced Algorithms', 'Distributed Systems', 'Cloud Computing', 'Software Engineering'],
    file: null,
    image: '/certificates/MS_CS.png',
  },
  {
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Professional',
    issuer: 'Oracle',
    date: 'Jul 2024',
    icon: SiOracle,
    skills: ['Generative AI', 'Large Language Models', 'OCI', 'RAG', 'LangChain', 'AI Deployment'],
    file: null,
    image: '/certificates/Oracle_GenAI.png',
  },
  {
    title: 'Apache Kafka Essential Training: Building Scalable Applications',
    issuer: 'LinkedIn',
    date: 'Apr 2023',
    icon: SiApachekafka,
    skills: ['Apache Kafka', 'Event Streaming', 'Scalable Systems'],
    file: null,
    image: '/certificates/kafka_essential_training.png',
  },
  {
    title: 'Apache Kafka Essential',
    issuer: 'LinkedIn',
    date: 'Mar 2023',
    icon: SiApachekafka,
    skills: ['Apache Kafka'],
    file: null,
    image: '/certificates/kafka_essential.png',
  },
  {
    title: 'Java Persistence with JPA',
    issuer: 'LinkedIn',
    date: 'Mar 2023',
    icon: FaJava,
    skills: ['Java', 'JPA', 'ORM', 'Database Design'],
    file: null,
    image: '/certificates/jpa.png',
  },
  {
    title: 'Spring & Hibernate (includes Spring Boot)',
    issuer: 'Udemy',
    date: 'Jan 2023',
    icon: SiSpring,
    skills: ['Spring Boot', 'Hibernate', 'Java', 'Backend Development'],
    file: null,
    image: '/certificates/springboot.jpg',
  },
  {
    title: 'Java Basic',
    issuer: 'HackerRank',
    date: 'Jul 2022',
    icon: FaJava,
    skills: ['Java', 'OOP', 'Problem Solving'],
    file: null,
    image: '/certificates/java_cert_hackerrank.png',
  },
  {
    title: 'Nail Your SQL Interview',
    issuer: 'LinkedIn',
    date: 'Jul 2022',
    icon: FaDatabase,
    skills: ['SQL', 'Database Queries', 'Interview Preparation'],
    file: null,
    image: '/certificates/sql_nailed.png',
  },
  {
    title: 'Introduction to Programming Using Python',
    issuer: 'Eduonix Learning Solutions Pvt Ltd',
    date: 'Apr 2019',
    icon: FaPython,
    skills: ['Python', 'Programming Fundamentals'],
    file: null,
    image: '/certificates/python_eduonix.jpg',
  },
];

export default function Certificates() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    if (!modalImg) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImg]);

  // Close modal on overlay click
  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setModalImg(null);
  }, []);

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-8">
          <Link href="/">
            <a className="inline-block px-6 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">← Back to Portfolio</a>
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6">Certifications & Achievements</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my commitment to continuous learning and technical excellence. Each certificate represents a milestone in mastering new technologies, frameworks, and industry best practices. Explore the credentials that power my expertise!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title + cert.issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full shadow-lg border-2 border-primary/20 bg-white/90 backdrop-blur-md rounded-xl flex flex-col justify-between group">
                {cert.image && (
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title + ' certificate'}
                      className="rounded-lg object-contain w-full max-h-40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10 cursor-pointer"
                      style={{ background: '#f8fafc' }}
                      onClick={() => setModalImg(cert.image!)}
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  {cert.icon && <cert.icon className="w-8 h-8 text-primary" />}
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mb-2 text-sm text-muted-foreground">Issued {cert.date}</div>
                {cert.credentialId && (
                  <div className="mb-2 text-xs text-muted-foreground">Credential ID: {cert.credentialId}</div>
                )}
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary hover:underline text-sm font-semibold"
                  >
                    View Certificate
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all"
          onClick={handleOverlayClick}
        >
          <img
            src={modalImg}
            alt="Certificate Full Size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white animate-fadeIn"
            style={{ background: '#fff' }}
          />
        </div>
      )}
    </section>
  );
} 