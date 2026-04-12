import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects - Ayush Rout",
  description: "Selected projects by Ayush Rout. Exploring the intersection of design and engineering.",
};

const projects = [
  {
    title: "project one",
    description: "a modern web application built with next.js and typescript. features real-time collaboration, auth, and a custom design system.",
    tech: ["next.js", "typescript", "tailwind"],
    link: "https://github.com",
    year: "2024",
  },
  {
    title: "project two",
    description: "an open-source design system for building beautiful interfaces. includes components, tokens, and documentation.",
    tech: ["react", "storybook", "figma"],
    link: "https://github.com",
    year: "2024",
  },
  {
    title: "project three",
    description: "a real-time collaboration tool for distributed teams. built with websockets and optimistic ui patterns.",
    tech: ["node.js", "websockets", "redis"],
    link: "https://github.com",
    year: "2023",
  },
  {
    title: "project four",
    description: "a cli tool for scaffolding projects quickly. supports multiple templates and custom configurations.",
    tech: ["go", "cli", "templates"],
    link: "https://github.com",
    year: "2023",
  },
  {
    title: "project five",
    description: "personal knowledge base and note-taking system. markdown-based with full-text search.",
    tech: ["next.js", "mdx", "search"],
    link: "https://github.com",
    year: "2022",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          01 / overview
        </p>

        <h1 className="mb-4 text-2xl font-light tracking-tight text-foreground md:text-3xl">
          selected work
        </h1>

        <p className="text-muted-foreground">
          a collection of projects i have worked on. some are open source, some are experiments.
        </p>
      </section>

      <section className="space-y-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          02 / projects
        </p>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="border-b border-border pb-10 last:border-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h2>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
