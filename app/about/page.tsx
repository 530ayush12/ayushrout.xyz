import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Ayush Rout",
  description: "Learn more about Ayush Rout, a developer and designer building software that scales.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          01 / about
        </p>

        <h1 className="mb-8 text-2xl font-light tracking-tight text-foreground md:text-3xl">
          about me
        </h1>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            i am <span className="text-foreground">ayush rout</span>, a developer and designer based in the united states. i build software that scales and create digital experiences that feel crafted.
          </p>
          <p>
            my approach to building products is rooted in simplicity. i believe the best tools are the ones that get out of your way — quiet, intentional, and powerful.
          </p>
          <p>
            i have worked across the stack, from designing interfaces to architecting backend systems. i enjoy the entire process of bringing an idea to life.
          </p>
        </div>
      </section>

      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          02 / experience
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-foreground">software engineer</h3>
              <span className="text-xs text-muted-foreground">2023 — present</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              building products at scale. working on distributed systems, api design, and frontend architecture.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-foreground">freelance developer</h3>
              <span className="text-xs text-muted-foreground">2021 — 2023</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              worked with startups and agencies on web applications, design systems, and product development.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          03 / skills
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="mb-3 text-foreground">languages</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>typescript</li>
              <li>javascript</li>
              <li>python</li>
              <li>go</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-foreground">frameworks</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>next.js</li>
              <li>react</li>
              <li>node.js</li>
              <li>tailwind css</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
          04 / colophon
        </p>

        <p className="text-sm text-muted-foreground">
          this site is built with next.js and tailwind css. set in geist. deployed on vercel.
        </p>
      </section>
    </div>
  );
}
