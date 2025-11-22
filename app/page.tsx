"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { about } from "@/data/about";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "experience", label: "Experience", number: "01" },
    { id: "featured", label: "Featured", number: "02" },
    { id: "skills", label: "Skills", number: "03" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="about" className="w-full relative overflow-hidden min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center py-16 md:py-20" style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(200, 175, 110, 0.22) 0%, rgba(160, 140, 95, 0.15) 20%, rgba(100, 90, 65, 0.08) 35%, rgba(29, 27, 36, 0.4) 50%, rgba(29, 27, 36, 0.6) 70%, rgba(29, 27, 36, 0.3) 85%, transparent 100%)',
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 lg:gap-16">
            {/* Left: Hero Content Container with Accent Line */}
            <div className="max-w-3xl lg:max-w-4xl mx-auto md:mx-0 relative opacity-0 animate-fade-slide-up" style={{animation: 'fadeSlideUp 0.8s ease-out forwards'}}>
              {/* Vertical Accent Line with Glow */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purdue-gold via-purdue-gold to-purdue-gold/40 shadow-[0_0_12px_rgba(200,175,110,0.5)] hidden md:block"></div>

              {/* Content with left padding for accent line */}
              <div className="md:pl-8">
              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight text-text-primary text-center md:text-left">
                {about.name}
              </h1>

              {/* Role */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-tight text-accent-gold text-center md:text-left">
                Embedded & Software Engineer
              </h2>

              {/* Concise Summary */}
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 text-center md:text-left">
                Purdue Computer Engineer building end-to-end systems across embedded devices, RF communication, firmware, and modern cloud software. I've built real-time imaging systems with FreeRTOS, cloud-connected tools in React and AWS, and supported Boeing Defense programs at SeaTec.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 items-center mb-8">
                <Link
                  href="/projects"
                  className="inline-block border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-purdue-gold/10 hover:scale-[1.02] transition-all duration-300"
                >
                  View Projects
                </Link>
                <a
                  href={about.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-purdue-gold/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </a>
                <a
                  href={about.portfolioPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-purdue-gold text-purdue-gold px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-purdue-gold/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Portfolio
                </a>
              </div>

              {/* Contact Row */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-300 mt-8">
                <span className="text-gray-500 font-medium">Find me:</span>
                <a
                  href={`mailto:${about.email}`}
                  className="inline-flex items-center gap-2 hover:text-accent-gold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent-gold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent-gold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Vertical Scroll Navigation */}
          <div className="hidden md:flex flex-col justify-center items-end min-w-[160px] lg:min-w-[180px] pr-4 lg:pr-8 opacity-0 animate-fade-in-delay-1 scale-105 lg:scale-110">
            <div className="relative flex flex-col gap-10 lg:gap-12">
              {/* Vertical connecting line */}
              <div className="absolute left-[14px] lg:left-[16px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-600/30 via-gray-600/60 to-gray-600/30"></div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative flex items-center gap-4 lg:gap-5 group cursor-pointer"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 flex items-center justify-center font-mono text-xs lg:text-sm tracking-widest transition-all duration-300 border-gray-600/80 bg-[#1D1B24] text-gray-500 group-hover:border-accent-gold group-hover:text-accent-gold group-hover:shadow-[0_0_16px_rgba(199,183,122,0.6)]">
                    {/* Solid background to block the connecting line */}
                    <div className="absolute inset-0 bg-[#1D1B24] rounded-full -z-10"></div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-accent-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    {item.number}
                  </div>

                  {/* Label */}
                  <span className="text-sm lg:text-base font-medium tracking-wide transition-all duration-300 text-gray-500 group-hover:text-accent-gold">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Subtle bottom fade for smooth transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#1D1B24]"></div>

        {/* Scroll down cue */}
        <button
          onClick={() => scrollToSection("experience")}
          className="group absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
          aria-label="Scroll to experience section"
        >
          <span className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm text-gray-400 shadow-[0_0_12px_rgba(199,183,122,0.25)] group-hover:text-accent-gold group-hover:border-accent-gold/50 transition-colors duration-300">
            <svg className="h-3 w-3 animate-scroll-cue" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </button>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full mt-16 md:mt-24 lg:mt-32 py-8 sm:py-10 md:py-12 scroll-mt-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary">Experience</h2>
            <div className="w-20 h-1 bg-accent-gold rounded-full"></div>
          </div>
          <div className="space-y-12">
            {experience.filter(exp => exp.company !== "Senior Design: Object Detection Drone").map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-700 pl-6 sm:pl-8">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-accent-gold font-medium mb-1">
                    <span>{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="text-text-secondary text-sm">{exp.location}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">{exp.start} – {exp.end}</p>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-text-secondary">
                      <span className="text-accent-gold mr-3 mt-1 flex-shrink-0">▸</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="w-full py-8 sm:py-10 md:py-12 scroll-mt-20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent-gold rounded-full"></div>
          </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative bg-[#141416] border border-gray-800/50 rounded-lg p-6 hover:bg-[#141416]/90 hover:border-accent-gold/60 hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-1 transition-all duration-250 ease-out"
            >
              {project.thumbnail && (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 400px, 100vw"
                  />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-text-primary group-hover:text-accent-gold transition-colors duration-200">{project.title}</h3>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-accent-gold/60 text-accent-gold px-3 py-1.5 rounded-full group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-[#0d0e10] border border-gray-700/50 text-text-secondary px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-accent-gold hover:text-accent-gold-dark transition-colors duration-200 font-medium group"
          >
            View all projects
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-8 sm:py-10 md:py-12 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary">Skills</h2>
            <div className="w-20 h-1 bg-accent-gold rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div key={category.name} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-gold">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full border border-gray-700/60 bg-[#141416] text-text-secondary hover:border-accent-gold/80 hover:bg-accent-gold/10 hover:text-accent-gold hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
