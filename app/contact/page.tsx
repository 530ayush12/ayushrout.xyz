import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = { title: "Contact — Ayush Rout", description: "Get in touch with Ayush Rout." };

export default function ContactPage() {
  return (
    <InteriorShell pageNumber="06">
      <section className="interior-hero contact-hero">
        <p className="eyebrow">06 / correspondence</p>
        <h1>say<br /><em>hello.</em></h1>
        <p className="interior-lede">I&apos;m always open to talking about startups, artificial intelligence, or design.</p>
      </section>
      <section className="contact-grid" data-scroll-depth>
        <a href="mailto:ayushrout.ar@gmail.com"><span>email</span>ayushrout.ar@gmail.com ↗</a>
        <a href="https://x.com/ayushrout2012" target="_blank" rel="noreferrer"><span>x / twitter</span>@ayushrout2012 ↗</a>
        <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer"><span>github</span>530ayush12 ↗</a>
        <a href="https://www.instagram.com/ayushrout2012/" target="_blank" rel="noreferrer"><span>instagram</span>@ayushrout2012 ↗</a>
      </section>
    </InteriorShell>
  );
}
