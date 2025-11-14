export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  tags: string[];
  stack: string[];
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
    featured: true,
    tags: ["Web Development", "Full Stack"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    heroImage: undefined,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    shortDescription: "Collaborative task management tool with real-time updates and team communication features.",
    featured: true,
    tags: ["Web Development", "Productivity"],
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    heroImage: undefined,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "Interactive weather dashboard with forecasts, maps, and historical data visualization.",
    featured: false,
    tags: ["Web Development", "Data Visualization"],
    stack: ["Vue.js", "D3.js", "OpenWeather API"],
    heroImage: undefined,
  },
  {
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    shortDescription: "CLI tool to generate customizable portfolio websites from templates and configuration files.",
    featured: false,
    tags: ["Developer Tools", "CLI"],
    stack: ["Node.js", "TypeScript", "Commander.js"],
    heroImage: undefined,
  },
];
