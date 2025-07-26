import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava, FaGlobe, FaCode, FaChartBar, FaHtml5, FaCss3Alt, FaJs, FaMap, FaCube } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiCplusplus, SiRecoil, SiD3Dotjs, SiBootstrap, SiJquery, SiMui, SiThreedotjs, SiVite, SiApache, SiGit, SiGithub, SiJupyter, SiUbuntu, SiLangchain, SiStreamlit, SiOracle } from 'react-icons/si';
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
    featured: false,
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
  {
    name: 'Java Data Structures & Algorithms Practice Workspace',
    description: 'Comprehensive Java programming workspace featuring data structure implementations, algorithm solutions, and educational exercises. Organized into modular sections covering core Java fundamentals, object-oriented programming concepts, advanced Java features, and hands-on problem-solving practice. Includes implementations of LinkedList, Binary Trees, Graphs, Hash Tables, sorting algorithms, graph traversal, and string manipulation with modern Java features like Generics, Stream API, and Lambda Expressions.',
    skills: [FaJava, SiApache, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/Java-DSA-Algorithms-Practice',
    live: '',
    featured: false,
  },
  {
    name: 'Competitive Programming Solutions Repository',
    description: 'Comprehensive collection of 34+ competitive programming solutions in Java and Python, systematically categorized by data structures and algorithms. Features solutions for Arrays, Sorting, Hash Maps/Sets, Math/Number Theory, and Greedy algorithms. Demonstrates algorithm optimization, time/space complexity analysis, and systematic problem-solving approaches for competitive programming challenges.',
    skills: [FaJava, FaPython, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/Competitive_Programming',
    live: '',
    featured: false,
  },
  {
    name: 'Advanced Data Structures Library',
    description: 'Comprehensive Java library implementing advanced data structures including Trie, Segment Tree, AVL Tree, Red-Black Tree, B-Tree, B+ Tree, Fenwick Tree, Hash Tables, and Priority Queues. Features detailed documentation, complexity analysis, and practical examples designed for learning, research, and interview preparation. Demonstrates mastery of object-oriented programming, generics, and performance optimization techniques.',
    skills: [FaJava, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/advanced-data-structures',
    live: '',
    featured: false,
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    description: 'Comprehensive AI coursework covering search algorithms, machine learning fundamentals, intelligent agents, and practical implementations including K-NN, MDP, and classification projects.',
    skills: [FaPython, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/artificial-intelligence-fundamentals',
    live: '',
    featured: false,
  },
  {
    name: 'Data Mining and Analytics',
    description: 'Comprehensive data mining coursework covering preprocessing, classification, clustering, and visualization. Includes real-world datasets, R/Python implementations, and practical applications in housing market and financial sector analysis.',
    skills: [FaPython, FaChartBar, FaCode, SiGit, SiGithub],
    github: 'https://github.com/abhis201/data-mining-and-analytics',
    live: '',
    featured: false,
  },
  {
    name: 'Machine Learning & Deep Learning',
    description: 'Comprehensive ML/DL coursework featuring PyTorch, computer vision, GANs, and practical projects. Includes CIFAR-10/MNIST implementations, music genre classification, and model deployment with ONNX.',
    skills: [FaPython, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/machine-learning-deep-learning',
    live: '',
    featured: false,
  },
  {
    name: 'Object-Oriented Design Java',
    description: 'Comprehensive Java OOP coursework featuring design patterns, SOLID principles, and practical implementations. Includes Minesweeper game, Factory pattern projects, and extensive study materials covering 10 chapters of design patterns.',
    skills: [FaJava, FaCode, SiGit, SiGithub],
    github: 'https://github.com/abhis201/object-oriented-design-java',
    live: '',
    featured: false,
  },
  {
    name: 'OCI Project',
    description: 'Comprehensive setup for working with Oracle Cloud Infrastructure (OCI) and related tools. Includes scripts, configurations, and notebooks for building and deploying a chatbot using Generative AI, Chroma, and Streamlit.',
    skills: [FaPython, SiGit, SiJupyter, SiUbuntu, SiLangchain, SiStreamlit, SiOracle],
    github: 'https://github.com/abhis201/oci-project',
    live: '',
    featured: false,
  },
  {
    name: 'Mass Shooting Analysis Model',
    description: 'Analyzes and classifies mass shooting incidents using both tabular and satellite image data. Combines deep learning (CNN, ResNet), XGBoost, and custom data processing to predict risk levels and visualize incident locations.',
    skills: [FaPython, SiGit, SiJupyter, SiStreamlit, FaChartBar, FaCode, SiGithub],
    github: 'https://github.com/abhis201/mass-shooting-analysis-model',
    live: '',
    featured: false,
  },
  {
    name: 'RailGuard - Railway Track Crack Detection',
    description: 'Computer vision project for detecting cracks in railway tracks using the YOLOv8 deep learning model. Automates defect identification in rail infrastructure for improved safety and predictive maintenance.',
    skills: [FaPython, SiGit, SiJupyter, SiStreamlit, FaChartBar, FaCode, SiGithub],
    github: 'https://github.com/abhis201/RailGuard',
    live: '',
    featured: false,
  },
  {
    name: 'Super Resolution Application',
    description: 'Web-based tool for upscaling low-resolution images using advanced machine learning models (ESRGAN, Bicubic, SFTGAN). Provides a user-friendly interface for image enhancement, comparison, and network transfer.',
    skills: [FaPython, FaHtml5, FaCss3Alt, FaJs, SiBootstrap, FaCode, FaChartBar, SiGit, SiGithub],
    github: 'https://github.com/abhis201/ESRGAN-Super-Resolution-Application',
    live: '',
    featured: true,
  },
  {
    name: 'Java LAN Chat Application',
    description: 'A desktop chat application enabling real-time messaging and file transfer over LAN, featuring user authentication and a simple UI. Includes both server and client modules.',
    skills: [FaJava, FaCode, FaChartBar, SiGit, SiGithub, FaHtml5],
    github: 'https://github.com/abhis201/Java-LAN-chat',
    live: '',
    featured: false,
  },
  {
    name: 'Eventer',
    description: 'A desktop event management application built with Java, following the MVC architecture. It allows users to create, manage, and export events, with a user-friendly interface and robust data handling.',
    skills: [FaJava, FaCode, FaChartBar, SiGit, SiGithub, FaHtml5],
    github: 'https://github.com/abhis201/Eventer',
    live: '',
    featured: false,
  },
  {
    name: 'Socket Malware',
    description: 'A Python-based socket malware project that extracts WiFi SSIDs and passwords from a target machine, aggregates credentials on a server, and manages password wordlists for penetration testing and research.',
    skills: [FaPython, FaCode, SiGit, SiGithub, SiUbuntu],
    github: 'https://github.com/abhis201/Socket-Malware',
    live: '',
    featured: false,
  },
  {
    name: 'Denial-of-Service (UDP DoS Script)',
    description: 'Demonstrates a simple UDP-based Denial-of-Service (DoS) attack script for educational and research purposes. Allows users to send UDP packets to a target IP and port, simulating a DoS scenario. Includes documentation and guidance on DoS concepts and safe usage.',
    skills: [FaPython, SiUbuntu],
    github: 'https://github.com/abhis201/Denial-of-Service',
    live: '',
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
