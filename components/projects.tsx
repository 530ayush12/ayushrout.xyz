"use client";

import { ArrowUpRight, Folder } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "DevFlow",
    description:
      "A modern developer productivity tool with real-time collaboration features. Built with a focus on performance and intuitive UX.",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    link: "https://github.com",
    featured: true,
  },
  {
    title: "PixelCraft",
    description:
      "An open-source design system and component library for building beautiful React applications with minimal effort.",
    technologies: ["React", "Storybook", "Tailwind CSS", "Radix UI"],
    link: "https://github.com",
    featured: true,
  },
  {
    title: "CloudSync",
    description:
      "A cloud file synchronization service with end-to-end encryption and cross-platform support.",
    technologies: ["Go", "AWS S3", "React Native", "PostgreSQL"],
    link: "https://github.com",
    featured: true,
  },
  {
    title: "TaskMaster",
    description:
      "A minimalist task management app with smart scheduling and AI-powered prioritization.",
    technologies: ["Vue.js", "Firebase", "OpenAI API"],
    link: "https://github.com",
    featured: false,
  },
  {
    title: "CodeSnippets",
    description:
      "A curated collection of useful code snippets and utilities for everyday development tasks.",
    technologies: ["TypeScript", "Node.js", "MongoDB"],
    link: "https://github.com",
    featured: false,
  },
  {
    title: "WeatherNow",
    description:
      "A beautiful weather app with animated backgrounds and 7-day forecasts.",
    technologies: ["React", "OpenWeather API", "Framer Motion"],
    link: "https://github.com",
    featured: false,
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <h2 className="mb-12 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        <span className="h-px w-8 bg-primary" />
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all",
              "hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <div className="flex items-center justify-between">
              <Folder className="h-10 w-10 text-primary" />
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
              {project.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
