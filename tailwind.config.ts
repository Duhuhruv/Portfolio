import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium Purdue color system - lighter charcoal for comfortable viewing
        "bg-primary": "#1a1d24",
        "text-primary": "#F4F4F4",
        "text-secondary": "#BEBBB0",
        "accent-gold": "#C7B77A",
        "accent-gold-dark": "#BFA96A",
        // Legacy colors (kept for compatibility)
        "purdue-gold": "#C7B77A",
        "purdue-gold-dark": "#BFA96A",
        "purdue-sand": "#EDE6D4",
        "purdue-black": "#1A1B22",
      },
    },
  },
  plugins: [],
};
export default config;
