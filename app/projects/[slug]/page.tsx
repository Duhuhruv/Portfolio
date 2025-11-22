import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ProjectContentBlock } from "@/data/projects";

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
    title: `${project.title} | Dhruv Chaudhary`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Helper: Extract highlights from existing content
  const getHighlights = () => {
    if (!project.impactBullets || project.impactBullets.length === 0) return null;
    return project.impactBullets.slice(0, 4);
  };

  // Helper: Partition contentBlocks into overview and others
  const partitionContentBlocks = () => {
    if (!project.contentBlocks) return { overviewBlocks: [], otherBlocks: [] };

    const overviewBlocks: ProjectContentBlock[] = [];
    const otherBlocks: ProjectContentBlock[] = [];

    project.contentBlocks.forEach((block) => {
      if (
        block.type === "text" &&
        (block.title?.toLowerCase().includes("overview") ||
         block.id?.toLowerCase().includes("overview"))
      ) {
        overviewBlocks.push(block);
      } else {
        otherBlocks.push(block);
      }
    });

    return { overviewBlocks, otherBlocks };
  };

  const { overviewBlocks, otherBlocks } = partitionContentBlocks();
  const highlights = getHighlights();

  // Helper: Detect DrQ project and extract training curve images
  const isDrqProject = project.slug === "drq-snake-reinforcement-learning" ||
                       project.title?.toLowerCase().includes("drq");

  const getDrqComparisonImages = (): Extract<ProjectContentBlock, { type: "image" }>[] | null => {
    if (!isDrqProject || !project.contentBlocks) return null;

    const comparisonImages = project.contentBlocks.filter(block => {
      if (block.type !== "image") return false;
      const searchText = `${block.caption} ${block.alt}`.toLowerCase();
      return searchText.includes("drq") ||
             searchText.includes("dqn") ||
             searchText.includes("baseline") ||
             searchText.includes("training") ||
             searchText.includes("curve");
    }) as Extract<ProjectContentBlock, { type: "image" }>[];

    return comparisonImages.length === 2 ? comparisonImages : null;
  };

  const drqComparisonImages = getDrqComparisonImages();

  // Helper: Render content blocks with proper image handling
  const renderContentBlocks = (blocks: ProjectContentBlock[]) => {
    const rendered: JSX.Element[] = [];
    let i = 0;

    while (i < blocks.length) {
      const block = blocks[i];

      // Text block - render as-is
      if (block.type === "text") {
        rendered.push(
          <div key={block.id} className="prose prose-invert max-w-none">
            {block.title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-purdue-gold">
                {block.title}
              </h2>
            )}
            <div className="text-gray-400 leading-relaxed text-lg whitespace-pre-wrap">
              {block.body}
            </div>
          </div>
        );
        i++;
      }
      // Image block
      else if (block.type === "image") {
        const imageBlock = block as Extract<ProjectContentBlock, { type: "image" }>;

        // Skip if this image is the same as the hero thumbnail
        if (project.thumbnail && imageBlock.src === project.thumbnail) {
          i++;
          continue;
        }

        // Skip if this is a DrQ comparison image (rendered separately)
        if (drqComparisonImages && drqComparisonImages.some(img => img.src === imageBlock.src)) {
          i++;
          continue;
        }

        // Check if next blocks are also images (for grid layout)
        const consecutiveImages = [block];
        let j = i + 1;
        while (j < blocks.length && blocks[j].type === "image") {
          const nextBlock = blocks[j] as Extract<ProjectContentBlock, { type: "image" }>;
          // Skip duplicates of thumbnail
          if (project.thumbnail && nextBlock.src === project.thumbnail) {
            j++;
            continue;
          }
          // Skip DrQ comparison images
          if (drqComparisonImages && drqComparisonImages.some(img => img.src === nextBlock.src)) {
            j++;
            continue;
          }
          consecutiveImages.push(blocks[j] as typeof block);
          j++;
        }

        // If we have multiple consecutive images, render as grid
        if (consecutiveImages.length > 1) {
          rendered.push(
            <div key={`grid-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consecutiveImages.map((imgBlock) => (
                <section key={imgBlock.id} className="space-y-2">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-gray-800">
                    <Image
                      src={imgBlock.src}
                      alt={imgBlock.alt}
                      fill
                      className="object-contain bg-gray-900/50"
                    />
                  </div>
                  {(imgBlock.caption || imgBlock.alt) && (
                    <p className="text-sm text-gray-400 text-center">
                      {imgBlock.caption || imgBlock.alt}
                    </p>
                  )}
                </section>
              ))}
            </div>
          );
          i = j;
        } else {
          // Single image - render standalone
          rendered.push(
            <section key={block.id} className="space-y-2">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-gray-800">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-contain bg-gray-900/50"
                />
              </div>
              {(block.caption || block.alt) && (
                <p className="text-sm text-gray-400 text-center">
                  {block.caption || block.alt}
                </p>
              )}
            </section>
          );
          i++;
        }
      } else {
        i++;
      }
    }

    return <>{rendered}</>;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center text-purdue-gold hover:text-purdue-gold-dark mb-12 font-medium transition-colors group"
      >
        <svg
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
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

      {/* Hero Thumbnail - Above Title */}
      {project.thumbnail && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-8">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
          {project.title}
        </h1>
        <div className="w-24 h-1 bg-purdue-gold rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Recruiter Highlights - Derived from existing impact bullets */}
        {highlights && highlights.length > 0 && (
          <div className="mb-8 bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purdue-gold mb-4">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-purdue-gold mr-3 mt-0.5 flex-shrink-0 text-lg">
                    •
                  </span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Overview Section - Rendered RIGHT AFTER HIGHLIGHTS, BEFORE TAGS */}
      {overviewBlocks.length > 0 && (
        <div className="mb-8">
          {renderContentBlocks(overviewBlocks)}
        </div>
      )}

      {/* DrQ Comparison Images - Side by Side */}
      {drqComparisonImages && drqComparisonImages.length === 2 && (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drqComparisonImages.map((imgBlock) => (
              <section key={imgBlock.id} className="space-y-2">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-gray-800">
                  <Image
                    src={imgBlock.src}
                    alt={imgBlock.alt}
                    fill
                    className="object-contain bg-gray-900/50"
                  />
                </div>
                {(imgBlock.caption || imgBlock.alt) && (
                  <p className="text-sm text-gray-400 text-center">
                    {imgBlock.caption || imgBlock.alt}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm border border-purdue-gold text-purdue-gold px-4 py-2 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-purdue-gold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Remaining Content Blocks - After Tech Stack */}
      {otherBlocks.length > 0 && (
        <div className="mb-12 space-y-8">
          {renderContentBlocks(otherBlocks)}
        </div>
      )}

      {/* Project Overview (from overview field - fallback) */}
      {project.overview && overviewBlocks.length === 0 && (
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-purdue-gold">Overview</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.overview}
          </p>
        </div>
      )}

      {/* Impact & Results */}
      {project.impactBullets && project.impactBullets.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-purdue-gold">Impact & Results</h2>
          <ul className="space-y-4">
            {project.impactBullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-start text-gray-400"
              >
                <span className="text-purdue-gold mr-4 mt-1 text-lg flex-shrink-0">
                  ▸
                </span>
                <span className="leading-relaxed text-lg">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <div className="mb-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-purdue-gold">Project Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg hover:bg-purdue-gold hover:text-purdue-black hover:scale-105 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                GitHub Repository
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg hover:bg-purdue-gold hover:text-purdue-black hover:scale-105 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Report
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg hover:bg-purdue-gold hover:text-purdue-black hover:scale-105 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Video
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg hover:bg-purdue-gold hover:text-purdue-black hover:scale-105 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Visit Website
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
