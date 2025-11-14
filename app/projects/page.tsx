import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | My Portfolio",
  description: "Browse all my projects and work",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of projects I've worked on. Click on any project to learn more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              {project.featured && (
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              {project.shortDescription}
            </p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-600 dark:text-gray-400"
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
