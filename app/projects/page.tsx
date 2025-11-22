import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dhruv Chaudhary",
  description: "Browse my engineering projects spanning embedded systems, RF communication, cloud architecture, and AI/ML.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-text-primary">All Projects</h1>
        <div className="w-20 h-1 bg-accent-gold rounded-full mb-6"></div>
        <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
          Engineering projects spanning embedded systems, RF communication, cloud architecture, and AI/ML. Click on any project to learn more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:bg-gray-900/50 hover:border-accent-gold/60 hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-1 transition-all duration-250 ease-out"
          >
            {project.thumbnail && (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-accent-gold transition-colors duration-200">{project.title}</h2>
              {project.featured && (
                <span className="text-xs bg-accent-gold/20 border border-accent-gold/60 text-accent-gold px-2 py-1 rounded font-medium flex-shrink-0 ml-2">
                  Featured
                </span>
              )}
            </div>
            <p className="text-text-secondary mb-4 text-sm leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-accent-gold/60 text-accent-gold px-2 py-1 rounded-full group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800/60 border border-gray-700/50 text-text-secondary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
