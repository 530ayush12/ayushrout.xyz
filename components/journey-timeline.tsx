"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    marker: "7",
    title: "the first spark",
    copy: "Found coding through Tynker and started learning Python. For the first time, ideas could become things I could actually use.",
  },
  {
    marker: "9",
    title: "the pause",
    copy: "Rage quit because syntax kept getting between the idea and the thing. The curiosity never really disappeared.",
  },
  {
    marker: "12",
    title: "the return",
    copy: "Came back as a vibe coder. AI made building feel like possibility again, and experiments started becoming real products.",
  },
  {
    marker: "13",
    title: "shipping for real",
    copy: "Shipped GeniusMath AI and SereneQuests on the App Store, trained neural networks, built SaaS products, and won Stanford GSB LISA with Rooted AI.",
  },
  {
    marker: "14",
    title: "momentum",
    copy: "Reached the podium at Chamath's 8090 Hackathon, placed second at the Composio + Nebius Builders Ship Hackathon, presented at events, received $20k in E2B credits, and built Lotus, DitherStudio, Loopy, SuperCompress, ASCII Skill, Pincer, and Jasmine.",
  },
  {
    marker: "now",
    title: "the next system",
    copy: "Building infrastructure for agents that can work longer, remember better, and make software that feels intentional.",
  },
];

export function JourneyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = timeline.getBoundingClientRect();
      const start = window.innerHeight * 0.68;
      const distance = Math.max(1, rect.height - window.innerHeight * 0.25);
      const progress = Math.max(0, Math.min(1, (start - rect.top) / distance));
      timeline.style.setProperty("--journey-progress", progress.toFixed(3));

      const focusLine = window.innerHeight * 0.48;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemDistance = Math.abs(itemRect.top + itemRect.height * 0.35 - focusLine);
        if (itemDistance < nearestDistance) {
          nearestDistance = itemDistance;
          nearestIndex = index;
        }
      });
      setActiveIndex((current) => current === nearestIndex ? current : nearestIndex);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    if (reducedMotion.matches) {
      timeline.style.setProperty("--journey-progress", "1");
      return;
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="journey-section" aria-labelledby="journey-heading">
      <div className="journey-section-heading">
        <p className="eyebrow" id="journey-heading">the journey so far</p>
        <span>scroll to trace the path ↓</span>
      </div>
      <div className="journey-timeline" ref={timelineRef} data-scroll-depth>
        <div className="journey-rail" aria-hidden="true"><span /></div>
        {milestones.map((milestone, index) => (
          <article
            className={`journey-milestone${activeIndex === index ? " is-active" : ""}`}
            key={milestone.marker}
            ref={(element) => { itemRefs.current[index] = element; }}
            aria-current={activeIndex === index ? "step" : undefined}
          >
            <span className="journey-node" aria-hidden="true"><i /></span>
            <span className="journey-age">{milestone.marker}</span>
            <div>
              <p className="journey-title">{milestone.title}</p>
              <p className="journey-copy">{milestone.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
