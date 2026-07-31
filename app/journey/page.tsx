import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior-shell";
import { JourneyTimeline } from "@/components/journey-timeline";

export const metadata: Metadata = {
  title: "Journey — Ayush Rout",
  description: "The journey so far for Ayush Rout, from discovering code to building ambitious products.",
};

export default function JourneyPage() {
  return (
    <InteriorShell pageNumber="03">
      <section className="interior-hero compact journey-hero">
        <p className="eyebrow">03 / timeline</p>
        <h1>the journey<br /><em>so far.</em></h1>
        <p className="interior-lede">A nonlinear path through curiosity, false starts, shipped products, and increasingly ambitious ideas.</p>
      </section>
      <JourneyTimeline />
    </InteriorShell>
  );
}
