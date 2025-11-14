import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image Placeholder */}
      {project.heroImage ? (
        <div className="mb-8">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full rounded-lg"
          />
        </div>
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 h-64 rounded-lg mb-8 flex items-center justify-center">
          <p className="text-gray-400">Project Image Placeholder</p>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Details Placeholder */}
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a placeholder for detailed project information. You can add more
          details about the project, including challenges faced, solutions
          implemented, and key features.
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-6">Key Features</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Feature description placeholder</li>
          <li>Another feature placeholder</li>
          <li>Third feature placeholder</li>
        </ul>
      </div>
    </div>
  );
}
