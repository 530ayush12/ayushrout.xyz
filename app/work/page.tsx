import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Ayush Rout",
  description: "Selected works by Ayush Rout.",
};

const projects = [
  {
    title: "trylotus.dev",
    description: "an ai design tool that builds websites and apps from a simple prompt. type what you want, get a working product.",
    link: "https://trylotus.dev",
    year: "Now",
  },
  {
    title: "serenequests.com",
    description: "a travel and adventure platform for discovering unique experiences and destinations.",
    link: "https://serenequests.com",
    year: "Now",
  },
  {
    title: "mathiq+",
    description: "a math app that makes you think. daily problems, timed challenges, and progress tracking.",
    link: "https://apps.apple.com/us/app/mathiq/id6756983614",
    year: "2025",
  },
  {
    title: "scicore",
    description: "learn physics, chemistry, and biology through quick lessons and hands-on quizzes.",
    link: "https://apps.apple.com/us/app/scicore/id6757728466",
    year: "2026",
  },
  {
    title: "quizai+",
    description: "an ai study buddy that turns your notes into flashcards and quizzes.",
    link: "https://apps.apple.com/us/app/quizai/id6759224775",
    year: "2026",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          03 / selected works
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="grid grid-cols-[80px_1fr] gap-8 border-t border-border pt-8">
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl text-foreground transition-opacity group-hover:opacity-60 md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
