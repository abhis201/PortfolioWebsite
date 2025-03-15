import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Scope Retail",
    period: "08/2024 - current",
    location: "Bentonville, AR, USA",
    points: [
      "Improved system interoperability and efficiency across 500+ systems",
      "Enhanced operational insights using OpenTelemetry",
      "Boosted user comprehension with Markdoc documentation",
      "Streamlined warehouse management with React apps"
    ]
  },
  {
    title: "Data Scientist and Software Developer",
    company: "Purdue University",
    period: "01/2024 - 05/2024",
    location: "Hammond, IN, USA",
    points: [
      "Developed Gunshot Detection System for 150+ buildings",
      "Improved risk analysis using machine learning",
      "Built YOLOv8 model for rail defect classification"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Scopesys Innovation",
    period: "11/2022 - 08/2023",
    location: "Pune, MH, India",
    points: [
      "Processed $10M+ monthly transactions with COSMOS",
      "Boosted warehouse efficiency by 40% through UNITI",
      "Minimized downtimes by 30% via code enhancements"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-muted-foreground"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
