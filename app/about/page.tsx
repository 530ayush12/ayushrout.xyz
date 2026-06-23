import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Ayush Rout",
  description: "Learn more about Ayush Rout, a 14-year-old developer and entrepreneur.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <p className="mb-12 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        02 / Trajectory
      </p>

      <div className="space-y-8 text-lg leading-relaxed text-foreground/80 md:text-xl">
        <p>
          i am 14 and i build like a founder. the goal is not to make things look
          impressive in isolation. it is to solve real problems, ship, and keep
          improving the system.
        </p>
        <p>
          my journey started with building ios apps — mathiq+, scicore, and
          quizai+. that taught me how to turn an idea into a product, how to ship
          it, and how to listen to the people actually using it.
        </p>

        <div className="py-8">
          <Image
            src="/images/ayush.jpg"
            alt="Ayush Rout"
            width={800}
            height={600}
            className="h-auto w-full rounded-md object-cover shadow-md"
            priority
          />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Fig 1. Momentum over perfection.
          </p>
        </div>

        <p>
          now i am focused on the intersection of artificial intelligence,
          product-level design, and execution. that is why i am building lotus and
          the rest of the work around it.
        </p>
        <p>based in the united states.</p>
      </div>
    </div>
  );
}
