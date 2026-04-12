import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "building-products": {
    title: "on building products that matter",
    date: "january 2024",
    content: `
      <p>there is a difference between building software and building products. software is code. products are solutions to problems people actually have.</p>
      
      <p>i have spent years thinking about this distinction. early in my career, i was obsessed with the technical side — clean architecture, elegant algorithms, the craft of code. these things matter, but they are not enough.</p>
      
      <p>the best products i have used share a common trait: they understand me. they anticipate what i need before i know i need it. they stay out of my way until the moment i need them.</p>
      
      <p>building products that matter requires empathy. it requires talking to users, understanding their pain, and caring enough to solve it well. it requires shipping something imperfect and learning from real feedback.</p>
      
      <p>i believe in shipping fast, iterating relentlessly, and never losing sight of the humans on the other end of the screen.</p>
    `,
  },
  "simplicity": {
    title: "the art of simplicity in design",
    date: "december 2024",
    content: `
      <p>simplicity is not about having less. it is about having just enough.</p>
      
      <p>every element in a design should earn its place. every feature in a product should solve a real problem. everything else is noise.</p>
      
      <p>i have learned that achieving simplicity is surprisingly difficult. it requires saying no more than saying yes. it requires removing until you cannot remove anymore without breaking something essential.</p>
      
      <p>the best interfaces feel invisible. they do not demand attention — they give it back to the user. they are tools, not destinations.</p>
      
      <p>simplicity is a discipline. it is a practice. and it is worth pursuing relentlessly.</p>
    `,
  },
  "shipping-fast": {
    title: "lessons from shipping fast",
    date: "november 2023",
    content: `
      <p>speed is a feature. not because users care about how fast you build, but because building fast means learning fast.</p>
      
      <p>every week you spend perfecting something in isolation is a week you are not learning from real users. every assumption you make is a risk you carry.</p>
      
      <p>i have learned to embrace imperfection. ship the thing. see what happens. iterate based on reality, not speculation.</p>
      
      <p>this does not mean shipping garbage. it means shipping something good enough to learn from. it means optimizing for feedback over perfection.</p>
      
      <p>the best products are not designed — they are discovered, one iteration at a time.</p>
    `,
  },
  "designing-for-developers": {
    title: "designing for developers",
    date: "october 2023",
    content: `
      <p>developers are users too. they have preferences, frustrations, and workflows that matter.</p>
      
      <p>the best developer tools share common traits: they are fast, they are predictable, and they stay out of the way. they do not force you to context switch. they do not surprise you with unexpected behavior.</p>
      
      <p>documentation matters. error messages matter. defaults matter. every interaction is an opportunity to earn trust or lose it.</p>
      
      <p>i try to build tools that i would want to use myself. that is the simplest test i know.</p>
    `,
  },
  "craft-of-code": {
    title: "the craft of code",
    date: "august 2023",
    content: `
      <p>code is communication. it is written once and read many times. the best code tells a story.</p>
      
      <p>i believe in naming things well. in keeping functions small. in making the implicit explicit. these are not arbitrary rules — they are investments in future understanding.</p>
      
      <p>the craft of code is about more than making things work. it is about making things clear, maintainable, and kind to the next person who reads them.</p>
      
      <p>that next person is often yourself, six months later, wondering what you were thinking.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} - Ayush Rout`,
    description: `${post.title} by Ayush Rout`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <header>
        <Link
          href="/writing"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          back to writing
        </Link>

        <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
          01 / article
        </p>

        <h1 className="mb-3 text-2xl font-light tracking-tight text-foreground md:text-3xl">
          {post.title}
        </h1>

        <time className="text-sm text-muted-foreground">{post.date}</time>
      </header>

      <section>
        <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
          02 / content
        </p>
        <div
          className="prose-custom space-y-5 text-base leading-relaxed text-muted-foreground [&>p]:first:mt-0"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </article>
  );
}
