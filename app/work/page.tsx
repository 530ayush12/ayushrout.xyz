import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Ayush Rout",
  description: "Selected works by Ayush Rout.",
};

const projects = [
  {
    title: "Lotus",
    desc: "An AI design tool that builds websites and apps from a simple prompt. Type what you want, get a working product.",
    url: "https://trylotus.dev",
    linkLabel: "Live",
    year: "Now",
  },
  {
    title: "SereneQuests",
    desc: "A simple, calming health guidance app for everyday wellness.",
    url: "https://serenequests.com",
    linkLabel: "Live",
    year: "2026",
  },
  {
    title: "QuizAI+",
    desc: "An AI study buddy that quizzes students on any topic, with instant feedback to help you learn faster.",
    url: "https://apps.apple.com/us/app/quizai/id6759224775",
    linkLabel: "App Store",
    year: "2026",
  },
  {
    title: "SciCore",
    desc: "Learn physics, chemistry, and biology through quick lessons and hands-on quizzes.",
    url: "https://apps.apple.com/us/app/scicore/id6757728466",
    linkLabel: "App Store",
    year: "2026",
  },
  {
    title: "MathIQ+",
    desc: "A math app that makes you think. Daily problems, timed challenges, and progress tracking.",
    url: "https://apps.apple.com/us/app/mathiq/id6756983614",
    linkLabel: "App Store",
    year: "Last year",
  },
];

export default function WorkPage() {
  return (
    <div className="w-full max-w-3xl">
      <p className="mb-12 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        03 / Selected Works
      </p>

      <div className="flex w-full flex-col">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-foreground/5 py-8 transition-colors duration-500 hover:border-foreground/20 md:py-12"
          >
            <div className="flex min-w-0 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
              <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {project.title}
                </h3>
                <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                  {project.desc}
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:border-foreground/35 group-hover:text-foreground">
              {project.linkLabel}
              <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
