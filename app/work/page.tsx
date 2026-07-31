import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = { title: "Work — Ayush Rout", description: "Selected work by Ayush Rout." };

const projects = [
  {
    year: "now",
    name: "Lotus",
    description: "AI design tool that turns a prompt into a working website or app.",
    links: [{ label: "website", href: "https://trylotus.dev" }],
  },
  {
    year: "now",
    name: "DitherStudio",
    description: "A focused studio for transforming images into expressive dithered artwork.",
    links: [{ label: "open studio", href: "https://ditherstudio.trylotus.dev" }],
  },
  {
    year: "2026",
    name: "GeniusMath AI",
    description: "Adaptive math practice with custom quizzes, instant scoring, and clear explanations.",
    links: [{ label: "app store", href: "https://apps.apple.com/us/app/geniusmath-ai/id6790629890" }],
  },
  {
    year: "2026",
    name: "SereneQuests",
    description: "A calm AI companion for mindful conversations, everyday wellness, and healthier habits.",
    links: [
      { label: "website", href: "https://serenequests.com" },
      { label: "app store", href: "https://apps.apple.com/us/app/serenequests/id6786419127" },
    ],
  },
];

export default function WorkPage() {
  return (
    <InteriorShell pageNumber="03">
      <section className="interior-hero compact">
        <p className="eyebrow">03 / selected work</p>
        <h1>things i&apos;ve<br /><em>made.</em></h1>
      </section>
      <section className="interior-projects" data-scroll-depth>
        {projects.map((project, index) => (
          <article className="interior-project" key={project.name}>
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-year">{project.year}</span>
            <span className="project-title">{project.name}<small>{project.description}</small></span>
            <span className="project-links">
              {project.links.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>
              ))}
            </span>
          </article>
        ))}
      </section>
    </InteriorShell>
  );
}
