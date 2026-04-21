import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Ayush Rout",
  description: "Learn more about Ayush Rout, a 14-year-old developer and entrepreneur.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          02 / trajectory
        </p>

        <div className="space-y-6 text-xl leading-relaxed text-foreground md:text-2xl">
          <p>
            age is just a constraint. i approach engineering and product design with the mindset of a founder who needs to solve real problems, right now.
          </p>
          <p>
            my journey started with building ios apps — mathiq+, scicore, and quizai+. that taught me how to ship, iterate, and build for real users.
          </p>
        </div>
      </section>

      <section>
        <Image
          src="/images/ayush.jpg"
          alt="Ayush Rout"
          width={800}
          height={600}
          className="w-full rounded-sm"
          priority
        />
      </section>

      <section className="space-y-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          03 / now
        </p>

        <div className="space-y-6 text-xl leading-relaxed text-foreground md:text-2xl">
          <p>
            currently focused on ai and scaling products to thousands of users. building tools that make creation faster and more accessible.
          </p>
          <p>
            based in the united states.
          </p>
        </div>
      </section>
    </div>
  );
}
