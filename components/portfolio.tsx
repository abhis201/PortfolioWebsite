/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export function PortfolioComponent() {
  const [activeTab, setActiveTab] = useState("about");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "Java",
    "C#",
    "JavaScript",
    "Python",
    "C++",
    "C",
    "MongoDB",
    "SQL",
    "Cassandra",
    "Node",
    "Express",
    "React",
    "Next",
    "Recoil",
    "Spring",
    "NoSQL",
    "Git",
    "Azure",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Docker",
    "EIP",
    "OpenTelemetry",
    "Kafka",
    "Camel",
    "Freemaker",
    "Google Pub/Sub",
    "Markdoc",
    "ML",
    "GenAI",
    "Microservices",
    "Distributed Systems",
    "Frontend",
    "Backend",
    "Full-Stack",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const email = "sing1290@purdue.edu";

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-gray-700 to-blue-500 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism p-8 rounded-3xl shadow-2xl mb-8 bg-white bg-opacity-10 backdrop-blur-lg">
          <header className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4898-K7aks1HaWbp74voauS8lptOsHPSniQ.jpeg"
                alt="Abhishek Singh"
                className="w-40 h-40 object-cover object-top rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Abhishek Singh
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Software Engineer | Data Scientist
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                <LinkedInLogoIcon className="mr-2 h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/abhishek-singh-7462215a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <a href={`mailto:${email}`}>Email</a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                <a
                  href="https://github.com/abhis201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </header>

          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsList className="grid w-full grid-cols-5 bg-white bg-opacity-20">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <motion.div
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="about" className="text-white">
                <Card className="bg-white bg-opacity-30 border-none">
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PngPassportPhotoAbhi-fnMx4rzzO7nbskFpIspl0unkfZDPRr.png"
                        alt="Abhishek Singh Portrait"
                        className="w-24 h-24 rounded-full border-2 border-white"
                      />
                      <p>
                        I&apos;m a passionate Software Engineer and Data Scientist
                        with a strong background in full-stack development,
                        machine learning, and data analysis. Currently pursuing
                        my Master&apos;s in Computer Science at Purdue University
                        Northwest, I&apos;m always eager to take on new challenges
                        and contribute to innovative projects.
                      </p>
                    </div>
                    <p>
                      With experience ranging from developing sophisticated
                      order management systems to creating AI-powered safety
                      solutions, I bring a blend of technical expertise and
                      creative problem-solving to every project I undertake.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="experience" className="space-y-4">
                {["Scope Retail", "Purdue University", "Scopesys Innovation"].map((company, index) => (
                  <ExperienceCard
                    key={company}
                    title={
                      index === 0
                        ? "Software Engineer Intern"
                        : index === 1
                        ? "Data Scientist and Software Developer"
                        : "Associate Software Engineer"
                    }
                    company={company}
                    location={
                      index === 0
                        ? "Bentonville, AR, USA"
                        : index === 1
                        ? "Hammond, IN, USA"
                        : "Pune, MH, India"
                    }
                    date={
                      index === 0
                        ? "08/2024 - 12/2024"
                        : index === 1
                        ? "01/2024 - 05/2024"
                        : "11/2022 - 08/2023"
                    }
                    responsibilities={
                      index === 0
                        ? [
                            "Led system integrations for prominent U.S. retailers using FUSION.",
                            "Enhanced system monitoring using OpenTelemetry, Loki, Tempo, and Grafana.",
                            "Documented product guides using Markdoc, Next.js, and TailwindUI.",
                          ]
                        : index === 1
                        ? [
                            "Developed Gunshot Detection System using React.js, Recoil, Python, and Express.js.",
                            "Performed data analysis on mass shooting incidents using data science techniques.",
                            "Created a YOLOv8 model for rail track defect detection.",
                          ]
                        : [
                            "Developed COSMOS, an Order Management System handling $10M+ monthly transactions.",
                            "Led the design of UNITI, improving operational efficiency by 40%.",
                            "Enhanced software stability, reducing downtimes by 30%.",
                          ]
                    }
                  />
                ))}
              </TabsContent>
              <TabsContent value="skills">
                <Card className="bg-white bg-opacity-10 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="projects" className="space-y-4">
                {["SharePrompt", "SentinelSafe"].map((project) => (
                  <ProjectCard
                    key={project}
                    title={project}
                    description={
                      project === "SharePrompt"
                        ? "AI prompt-sharing web app developed with Next.js, MongoDB, and TailwindCSS. Features modern glass-morphism design, AI prompt management, and secure Google login."
                        : "School safety enhancement model using React.js and Recoil. Utilizes CNN and deep neural networks to assess mass shooting risks with 85% accuracy."
                    }
                    link={
                      project === "SharePrompt"
                        ? "https://share-prompt-azure.vercel.app/"
                        : "https://www.publicsafetyinfo.com/mass-shooting/index.html"
                    }
                  />
                ))}
              </TabsContent>
              <TabsContent value="contact">
                <Card className="bg-white bg-opacity-10 border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                      />
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-opacity-90 transition-all"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </Tabs>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Other Achievements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>
                Certified as an Oracle Cloud Infrastructure 2024 Generative AI
                Professional
              </li>
              <li>
                Certified Java, Springboot and Hibernate Developer (By
                Hackerrank and Udemy)
              </li>
              <li>
                Achieved 88th global rank in a CodeChef coding competition
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, location, date, responsibilities }: {
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
}) {
  return (
    <Card className="bg-white bg-opacity-10 border-none hover:bg-opacity-20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <p className="text-sm text-gray-300">
          {company} | {location} | {date}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-white">
          {responsibilities.map((resp: string, index: number) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card className="bg-white bg-opacity-10 border-none hover:bg-opacity-20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white mb-4">{description}</p>
        <Button
          variant="outline"
          className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}