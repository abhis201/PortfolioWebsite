import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava, FaGlobe, FaCode, FaChartBar, FaHtml5, FaCss3Alt, FaJs, FaMap, FaCube } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiCplusplus, SiRecoil, SiD3Dotjs, SiBootstrap, SiJquery, SiMui, SiThreedotjs, SiVite } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Project {
  name: string;
  description: string;
  skills: IconType[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: 'Mass Shooting Data Analysis Platform',
    description: 'Comprehensive React-based web application for analyzing and visualizing mass shooting incidents in the United States. Features interactive data tables with sorting/filtering capabilities, geographic visualizations using D3.js maps, statistical dashboards, and data export functionality. Implemented responsive design with Tailwind CSS and state management using Recoil for optimal user experience across devices.',
    skills: [FaReact, SiJavascript, SiTailwindcss, SiD3Dotjs, SiRecoil, FaChartBar],
    github: 'https://github.com/abhis201/mass-shooting-data-website',
    live: 'https://www.publicsafetyinfo.com/mass-shooting/index.html#/',
    featured: true,
  },
  {
    name: 'SharePrompt - AI Prompt Sharing Platform',
    description: 'Sleek AI prompt-sharing web application developed with Next.js, MongoDB, and TailwindCSS. Features modern glassmorphism design, user prompt management, profile access, and quick links to popular AI apps. Includes "Copy to Clipboard" functionality, tag-based search, and secure Google login using NextAuth for seamless user experience across devices.',
    skills: [SiNextdotjs, SiMongodb, SiTailwindcss, FaReact, FaGlobe],
    github: 'https://github.com/abhis201/SharePrompt',
    live: 'https://share-prompt-azure.vercel.app/',
    featured: true,
  },
  {
    name: 'Amazon Music Backend API',
    description: 'Full-featured music streaming backend with user authentication, song/album management, playlist creation, and music charts. Implements complete CRUD operations with secure JWT-based authentication and role-based access control using Node.js, Express.js, and MongoDB.',
    skills: [FaNodeJs, SiExpress, SiMongodb, FaCode],
    github: 'https://github.com/abhis201/nodejs-amazon-music-backend',
    live: '',
    featured: true,
  },
  {
    name: 'Twitter Backend Clone',
    description: 'Social media backend API replicating Twitter\'s core functionality including user profiles, tweet posting, follow/unfollow system, and real-time interactions. Features secure JWT authentication and comprehensive user management with MongoDB integration.',
    skills: [FaNodeJs, SiExpress, SiMongodb, FaCode],
    github: 'https://github.com/abhis201/twitter-backend-nodejs',
    live: '',
    featured: false,
  },
  {
    name: 'StackOverload Q&A Platform',
    description: 'Complete Stack Overflow clone with question-answer system, user voting, commenting functionality, and responsive frontend. Includes user authentication, reputation system, and modern web interface using Handlebars templating with full-stack Node.js implementation.',
    skills: [FaNodeJs, SiExpress, SiMongodb, FaCode],
    github: 'https://github.com/abhis201/stackoverload-qa-platform',
    live: '',
    featured: false,
  },
  {
    name: 'Operating System Simulators',
    description: 'C++ simulators for core OS concepts including virtual memory management and CPU scheduling. Implemented TLB operations, page fault handling, and multiple scheduling algorithms (FCFS, SJF, Priority, Round Robin). Features address translation, performance metrics analysis, and statistical reporting with Gantt chart generation.',
    skills: [SiCplusplus, FaCode, FaChartBar],
    github: 'https://github.com/abhis201/Operating_System',
    live: '',
    featured: false,
  },
  {
    name: 'Programming Languages & Compilers',
    description: 'Implemented three comprehensive compiler construction projects demonstrating lexical analysis, parsing, and code generation. Built complete compiler frontend with PLY, ANTLR-based parser generator, and AST/symbol table management system using Python and Java.',
    skills: [FaPython, FaJava, FaCode],
    github: 'https://github.com/abhis201/programming-languages-compilers',
    live: '',
    featured: false,
  },
  {
    name: 'Simple Todo App',
    description: 'A complete full-stack todo application with CRUD functionality, featuring a RESTful API backend and responsive frontend interface. The app allows users to create, read, update, and delete todos with persistent JSON file storage. Built with Node.js/Express backend and vanilla JavaScript frontend with Bootstrap styling.',
    skills: [FaNodeJs, SiExpress, FaJs, FaHtml5, FaCss3Alt, SiBootstrap],
    github: 'https://github.com/abhis201/todo-app',
    live: '',
    featured: false,
  },
  {
    name: 'Interactive Campus Map - Purdue University Northwest',
    description: 'Comprehensive, responsive web application for Purdue University Northwest providing real-time campus navigation, building information, and interactive services. Features GPS-powered directions, 3D campus visualization, live parking capacity data, emergency services locator, and personal class scheduling integration. Implements progressive web design principles with mobile-first responsive layouts and optimized performance.',
    skills: [FaReact, SiMui, SiJavascript, SiThreedotjs, SiRecoil, FaMap, FaNodeJs, SiMongodb],
    github: 'https://github.com/abhis201/CampusMap',
    live: 'https://campus-map.vercel.app/',
    featured: false,
  },
];

// Helper function to get featured projects (top 3)
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).slice(0, 3);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
  return projects;
};
