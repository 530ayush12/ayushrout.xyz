import type { Metadata } from "next";
import Image from "next/image";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = { title: "About — Ayush Rout", description: "Learn more about Ayush Rout, a developer and entrepreneur." };

export default function AboutPage() {
  return (
    <InteriorShell pageNumber="02">
      <section className="interior-hero">
        <p className="eyebrow">02 / trajectory</p>
        <h1>curious by<br /><em>default.</em></h1>
        <p className="interior-lede">I&apos;m 14 and I build like a founder: solve real problems, ship, listen, and keep improving the system.</p>
      </section>
      <section className="about-story" data-scroll-depth>
        <div className="about-portrait">
          <Image src="/images/ayush.jpg" alt="Ayush Rout" width={800} height={600} priority />
          <span>Fig. 01 — momentum over perfection</span>
        </div>
        <div className="interior-prose">
          <p>My journey started with iOS apps—MathIQ+, SciCore, and QuizAI+. They taught me how to turn an idea into a product and listen to the people actually using it.</p>
          <p>Now I&apos;m focused on the intersection of artificial intelligence, product-level design, and execution. That&apos;s why I&apos;m building Lotus and the rest of the work around it.</p>
          <p className="muted-copy">Based in the United States.</p>
        </div>
      </section>
    </InteriorShell>
  );
}
