import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Building Accessible React Components",
    description:
      "A comprehensive guide to creating inclusive web experiences with proper ARIA attributes and keyboard navigation.",
    date: "Mar 2024",
    link: "/blog/accessible-react-components",
  },
  {
    title: "The Art of Clean Code",
    description:
      "Principles and patterns for writing maintainable, readable, and scalable code that your future self will thank you for.",
    date: "Feb 2024",
    link: "/blog/clean-code",
  },
  {
    title: "Optimizing React Performance",
    description:
      "Deep dive into performance optimization techniques including memoization, code splitting, and bundle analysis.",
    date: "Jan 2024",
    link: "/blog/react-performance",
  },
  {
    title: "Modern CSS Techniques",
    description:
      "Exploring the latest CSS features including container queries, cascade layers, and the :has() selector.",
    date: "Dec 2023",
    link: "/blog/modern-css",
  },
];

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 py-16">
      <h2 className="mb-12 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        <span className="h-px w-8 bg-primary" />
        Writing
      </h2>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <article key={index} className="group">
            <Link
              href={article.link}
              className="block rounded-lg border border-transparent p-4 transition-all hover:border-border hover:bg-secondary/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {article.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {article.date}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center font-medium text-foreground transition-colors hover:text-primary"
        >
          View All Articles
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
