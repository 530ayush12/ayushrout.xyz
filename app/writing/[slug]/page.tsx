import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "building-with-ai": {
    title: "Building with AI: Lessons from Lotus",
    date: "april 2026",
    content: `
      <p>i started working on trylotus.dev because i was frustrated. every ai design tool i tried felt like it was missing something — the output always looked generic, soulless, like it was designed by committee.</p>
      
      <p>so i decided to build my own. at fourteen, i did not have decades of experience to draw from. what i had was curiosity and a willingness to ship fast and learn from mistakes.</p>
      
      <p>the first version of lotus was terrible. i mean truly awful. but it worked, and that was enough to start learning. i watched how people used it, where they got stuck, what made them leave.</p>
      
      <p>the biggest lesson? ai is not magic. it is a tool, and like any tool, it is only as good as the person wielding it. the real value is not in the ai itself — it is in understanding what users actually need and building around that.</p>
      
      <p>i am still learning. every day brings new challenges and new insights. but i would not trade this journey for anything.</p>
    `,
  },
  "shipping-fast": {
    title: "Shipping Fast as a 14-Year-Old",
    date: "march 2026",
    content: `
      <p>people often ask me how i manage to ship so many projects at my age. the honest answer? i do not overthink it.</p>
      
      <p>when i have an idea, i build it. not perfectly, not completely — just enough to see if it works. i have launched apps that were barely functional, websites that broke on mobile, features that nobody used. and that is okay.</p>
      
      <p>every failure taught me something. every mistake made the next project better. the key is not avoiding failure — it is failing fast enough to learn before you run out of energy.</p>
      
      <p>being young actually helps here. i do not have years of "best practices" weighing me down. i do not worry about what the industry thinks. i just build what feels right and see what happens.</p>
      
      <p>my advice to anyone starting out: stop planning and start shipping. the feedback from real users is worth more than months of theorizing.</p>
    `,
  },
  "why-ios": {
    title: "Why I Build iOS Apps",
    date: "february 2026",
    content: `
      <p>i get this question a lot: why ios? why not web apps, or android, or something else entirely?</p>
      
      <p>the honest answer is that i love the apple ecosystem. i grew up with it. the attention to detail, the focus on user experience, the way everything just works together — it resonated with how i think about building products.</p>
      
      <p>but there is a practical reason too. the app store gave me distribution. as a teenager with no marketing budget, being able to put my apps in front of millions of potential users was invaluable.</p>
      
      <p>mathiq+, scicore, quizai+ — each of these apps taught me something different about mobile development. about constraints, about performance, about designing for touch interfaces.</p>
      
      <p>i still love the web. trylotus.dev is proof of that. but ios will always have a special place in my journey as a developer.</p>
    `,
  },
  "elegance-of-shipping": {
    title: "The Elegance of Shipping Fast",
    date: "january 2026",
    content: `
      <p>there is an elegance to shipping fast that most people miss. it is not about being sloppy or cutting corners. it is about focus.</p>
      
      <p>when you commit to shipping quickly, you are forced to ask hard questions. what actually matters? what can wait? what is essential versus what is just nice to have?</p>
      
      <p>i have learned that most features i thought were essential turned out to be unnecessary. users do not care about half the things i worried about. they care about whether the product solves their problem.</p>
      
      <p>shipping fast is a forcing function. it strips away the ego, the perfectionism, the endless tweaking. it makes you confront reality instead of hiding in your comfortable assumptions.</p>
      
      <p>is it scary? absolutely. every launch feels like jumping off a cliff. but that is where the learning happens — in the freefall, not in the planning.</p>
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
    <article className="space-y-12">
      <header className="space-y-6">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
        >
          <ArrowLeft className="h-4 w-4" />
          back to writing
        </Link>

        <div>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">
            {post.title}
          </h1>
          <time className="mt-2 block text-sm text-muted-foreground">{post.date}</time>
        </div>
      </header>

      <div
        className="space-y-6 text-lg leading-relaxed text-foreground [&>p]:text-foreground/80"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
