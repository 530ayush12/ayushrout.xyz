import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing - Ayush Rout",
  description: "Notes and essays on building products, ai, and design.",
};

const recentPosts = [
  {
    title: "Building with AI: Lessons from Lotus",
    slug: "building-with-ai",
  },
];

const archivePosts = [
  {
    title: "Shipping Fast as a 14-Year-Old",
    slug: "shipping-fast",
  },
  {
    title: "Why I Build iOS Apps",
    slug: "why-ios",
  },
  {
    title: "The Elegance of Shipping Fast",
    slug: "elegance-of-shipping",
  },
];

export default function WritingPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          04 / notes & essays
        </p>

        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              recent
            </p>
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <h2 className="font-serif text-2xl text-foreground transition-opacity group-hover:opacity-60 md:text-3xl">
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              archive
            </p>
            {archivePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <h2 className="font-serif text-2xl text-foreground transition-opacity group-hover:opacity-60 md:text-3xl">
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-6 text-lg leading-relaxed text-foreground md:text-xl">
          <p>
            we are entering an era where software can build software.
          </p>
          <p>
            ask an ai to generate a website and it will give you one in seconds. ask it for a landing page and you get a fully functioning product. buttons, sections, components, colors — all assembled instantly.
          </p>
          <p>
            on the surface, this feels like magic. but if you look closely, something feels off.
          </p>
        </div>
      </section>
    </div>
  );
}
