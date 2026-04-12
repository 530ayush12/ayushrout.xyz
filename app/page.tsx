import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "github" },
  { icon: Twitter, href: "https://twitter.com", label: "twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "linkedin" },
  { icon: Mail, href: "mailto:hello@ayushrout.xyz", label: "email" },
];

const projects = [
  {
    title: "project one",
    description: "a modern web application built with next.js and typescript.",
    link: "https://github.com",
  },
  {
    title: "project two",
    description: "an open-source design system for building beautiful interfaces.",
    link: "https://github.com",
  },
  {
    title: "project three",
    description: "a real-time collaboration tool for distributed teams.",
    link: "https://github.com",
  },
];

const writing = [
  {
    title: "on building products that matter",
    date: "2024",
    link: "/blog/building-products",
  },
  {
    title: "the art of simplicity in design",
    date: "2024",
    link: "/blog/simplicity",
  },
  {
    title: "lessons from shipping fast",
    date: "2023",
    link: "/blog/shipping-fast",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Header / Intro */}
        <section className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
            01 / introduction
          </p>

          <h1 className="mb-6 text-2xl font-light tracking-tight text-foreground md:text-3xl">
            hello.
          </h1>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              i am <span className="text-foreground">ayush</span>. i am a developer and designer building software that scales.
            </p>
            <p>
              i believe in shipping fast, iterating relentlessly, and creating tools that feel crafted. quiet, intentional, and powerful.
            </p>
            <p>
              currently building things on the web — exploring the intersection of design and engineering.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
            02 / projects
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
            03 / writing
          </p>

          <div className="space-y-4">
            {writing.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="group flex items-center justify-between"
              >
                <span className="text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {article.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
            04 / contact
          </p>

          <p className="text-muted-foreground">
            want to work together?{" "}
            <Link
              href="mailto:hello@ayushrout.xyz"
              className="text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
            >
              reach out
            </Link>
            .
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            built by ayush rout
          </p>
        </footer>
      </main>
    </div>
  );
}
