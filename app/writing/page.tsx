import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing - Ayush Rout",
  description: "Thoughts on design, engineering, and building products.",
};

const posts = [
  {
    title: "on building products that matter",
    description: "reflections on what it means to build software that people actually want to use.",
    date: "january 2024",
    slug: "building-products",
  },
  {
    title: "the art of simplicity in design",
    description: "why less is almost always more, and how to achieve it.",
    date: "december 2024",
    slug: "simplicity",
  },
  {
    title: "lessons from shipping fast",
    description: "what i learned from launching products quickly and iterating in public.",
    date: "november 2023",
    slug: "shipping-fast",
  },
  {
    title: "designing for developers",
    description: "thoughts on creating tools that developers actually enjoy using.",
    date: "october 2023",
    slug: "designing-for-developers",
  },
  {
    title: "the craft of code",
    description: "on writing code that is readable, maintainable, and elegant.",
    date: "august 2023",
    slug: "craft-of-code",
  },
];

export default function WritingPage() {
  return (
    <div className="space-y-16">
      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          writing
        </p>

        <h1 className="mb-4 text-2xl font-light tracking-tight text-foreground md:text-3xl">
          notes & thoughts
        </h1>

        <p className="text-muted-foreground">
          writing about design, engineering, and building products.
        </p>
      </section>

      <section className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group -mx-3 block rounded-lg px-3 py-4 transition-colors hover:bg-secondary"
          >
            <article>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <time className="shrink-0 text-xs text-muted-foreground">
                  {post.date}
                </time>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {post.description}
              </p>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
