import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = { title: "Work — Ayush Rout", description: "Selected work by Ayush Rout." };

const projects = [
  ["Now", "Lotus", "AI design tool that turns a prompt into a working website or app.", "https://trylotus.dev", "Live"],
  ["Now", "DitherStudio", "A focused studio for transforming images into expressive dithered artwork.", "https://ditherstudio.trylotus.dev", "Open"],
  ["2026", "SereneQuests", "A calm AI companion for everyday wellness and healthier habits.", "https://serenequests.com", "Live"],
  ["2026", "QuizAI+", "An AI study buddy with quizzes and immediate feedback.", "https://apps.apple.com/us/app/quizai/id6759224775", "App Store"],
  ["2026", "SciCore", "Physics, chemistry, and biology through quick lessons and hands-on quizzes.", "https://apps.apple.com/us/app/scicore/id6757728466", "App Store"],
  ["2025", "MathIQ+", "Daily math problems, timed challenges, and progress tracking.", "https://apps.apple.com/us/app/mathiq/id6756983614", "App Store"],
];

export default function WorkPage() {
  return (
    <InteriorShell pageNumber="03">
      <section className="interior-hero compact">
        <p className="eyebrow">03 / selected work</p>
        <h1>Ideas made<br /><em>tangible.</em></h1>
      </section>
      <section className="interior-projects" data-scroll-depth>
        {projects.map(([year, name, description, href, label], index) => (
          <a className="interior-project" href={href} target="_blank" rel="noreferrer" key={name}>
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-year">{year}</span>
            <span className="project-title">{name}<small>{description}</small></span>
            <span className="project-link">{label} ↗</span>
          </a>
        ))}
      </section>
    </InteriorShell>
  );
}
