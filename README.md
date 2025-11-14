# Portfolio Website

A minimal, clean portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Landing page (/)
│   ├── globals.css        # Global styles with Tailwind
│   └── projects/
│       ├── page.tsx       # Projects index (/projects)
│       └── [slug]/
│           └── page.tsx   # Dynamic project detail (/projects/[slug])
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
├── data/                 # Data files
│   └── projects.ts       # Project data with TypeScript types
└── public/               # Static assets
```

## Features

- **Next.js 14 App Router**: Modern routing with server components
- **TypeScript**: Full type safety across the project
- **Tailwind CSS**: Utility-first styling with dark mode support
- **Dynamic Routes**: Static generation for project detail pages
- **Responsive Design**: Mobile-first responsive layout
- **Clean Architecture**: Well-organized, production-ready code

## Customization

### Update Project Data

Edit `data/projects.ts` to add, remove, or modify projects:

```typescript
export const projects: Project[] = [
  {
    slug: "your-project-slug",
    title: "Your Project Title",
    shortDescription: "Brief description",
    featured: true,
    tags: ["Tag1", "Tag2"],
    stack: ["Tech1", "Tech2"],
    heroImage: undefined,
  },
];
```

### Update Personal Information

- Edit `app/page.tsx` to update the hero section
- Edit `components/Footer.tsx` to update the footer text
- Edit `app/layout.tsx` to update site metadata

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React 18](https://react.dev/) - UI library

## License

This project is open source and available under the MIT License.
