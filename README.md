# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Dark/Light Mode**: Toggle between dark and light themes with a theme switch in the navigation bar
- **Responsive Design**: Fully responsive across all devices
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Particle Background**: Dynamic 3D particle background that adapts to the current theme
- **Blog System**: Built-in blog functionality with admin panel
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured projects section with live demos and GitHub links

## Theme System

The website includes a comprehensive theme system with:

- **Light Mode**: Clean, professional design with light backgrounds and dark text
- **Dark Mode**: Modern dark theme with enhanced particle effects and contrasting colors
- **Theme Persistence**: User's theme preference is saved in localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **Smooth Transitions**: All theme changes include smooth transitions

## Technology Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Animation**: Framer Motion
- **Routing**: Wouter
- **3D Graphics**: Three.js (for particle background)
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom shadcn/ui components

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to the local development URL

## Theme Toggle

The theme toggle button is located in the navigation bar:
- **Desktop**: Top-right corner of the navigation
- **Mobile**: Next to the hamburger menu
- **Icons**: Sun icon for light mode, moon icon for dark mode

## Customization

The theme system can be customized by modifying:
- `client/src/index.css`: CSS custom properties for both themes
- `client/src/lib/theme-context.tsx`: Theme context and logic
- `client/src/components/particle-background.tsx`: Particle colors and background gradients

## License

MIT License 