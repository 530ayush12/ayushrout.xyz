import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    title: "project one",
    description: "a brief description of what this project does",
    href: "/projects",
  },
  {
    title: "project two",
    description: "another interesting project worth sharing",
    href: "/projects",
  },
];

const recentWriting = [
  {
    title: "thoughts on building in public",
    date: "2024",
    slug: "building-in-public",
  },
  {
    title: "designing for simplicity",
    date: "2024",
    slug: "designing-for-simplicity",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* intro */}
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          01 / introduction
        </p>
        <div className="space-y-4">
          <h1 className="text-2xl font-medium text-foreground">
            ayush rout
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            building things on the internet. i believe in shipping fast,
            iterating relentlessly, and creating software that feels good to
            use.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            currently exploring the intersection of design and engineering.
          </p>
        </div>
      </section>

      {/* projects */}
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          02 / projects
        </p>
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex items-start justify-between border-b border-border pb-4 transition-colors hover:border-foreground/30"
            >
              <div className="space-y-1">
                <h3 className="font-medium text-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          view all projects
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </section>

      {/* writing */}
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          03 / writing
        </p>
        <div className="space-y-4">
          {recentWriting.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-foreground/30"
            >
              <span className="font-medium text-foreground group-hover:text-primary">
                {post.title}
              </span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/writing"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          view all posts
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </section>

      {/* connect */}
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          04 / connect
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            github
          </a>
          <a
            href="mailto:hello@ayushrout.xyz"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            email
          </a>
        </div>
      </section>
    </div>
  );
}
