import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Developer",
    company: "TechCorp",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the company's frontend, working across the full stack. Collaborate with cross-functional teams including designers and product managers to deliver exceptional user experiences.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for a diverse set of clients. Led frontend architecture decisions and mentored junior developers on best practices.",
    technologies: ["JavaScript", "React", "GraphQL", "AWS", "Tailwind CSS"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Built performant and accessible user interfaces for client projects. Worked closely with designers to translate mockups into pixel-perfect implementations.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "SASS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <h2 className="mb-12 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        <span className="h-px w-8 bg-primary" />
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </div>

            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <Link
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline text-base leading-tight transition-colors hover:text-primary focus-visible:text-primary"
                >
                  <span>
                    {exp.title} · {exp.company}
                  </span>
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/resume.pdf"
          className="group inline-flex items-center font-medium text-foreground transition-colors hover:text-primary"
        >
          View Full Resume
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
