"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.css";

const projects = [
  {
    name: "GeniusMath AI",
    label: "iOS · education",
    description: "AI-generated math practice with adjustable difficulty, custom quiz lengths, instant scoring, and step-by-step explanations.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/geniusmath-ai/id6790629890" },
    ],
  },
  {
    name: "SereneQuests",
    label: "iOS + web · wellness",
    description: "A calm, quest-based app that turns healthy routines into approachable daily progress.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/serenequests/id6786419127" },
      { label: "Web", href: "https://serenequests.com" },
    ],
  },
  {
    name: "Lotus",
    label: "web · AI design",
    description: "An AI website builder focused on fast generation, live previews, publishing, and polished design output.",
    links: [{ label: "Website", href: "https://trylotus.dev" }],
  },
  {
    name: "SolveGPT",
    label: "iOS · AI assistant",
    description: "A visual homework assistant concept combining chat, image input, and guided problem solving.",
    links: [{ label: "Details", href: "#contact" }],
  },
];

const notes = [
  ["01", "Building products that make learning feel simpler, faster, and more personal."],
  ["02", "Interested in AI, interface design, SwiftUI, and shipping ideas into real products."],
  ["03", "Currently developing new educational tools and preparing my projects for competitions."],
];

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("ayush-theme");
    const nextDark = savedTheme ? savedTheme === "dark" : true;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("ayush-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("[data-cursor]");
    if (!cursor || matchMedia("(pointer: coarse)").matches) return;

    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const grow = () => cursor.classList.add("is-hovering");
    const shrink = () => cursor.classList.remove("is-hovering");
    const targets = document.querySelectorAll("a, button, iframe");

    window.addEventListener("mousemove", move);
    targets.forEach((target) => {
      target.addEventListener("mouseenter", grow);
      target.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", grow);
        target.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" data-cursor aria-hidden="true" />

      <main className="portfolio-shell">
        <header className="site-header reveal reveal-1">
          <a className="wordmark" href="#top">ayush rout</a>
          <nav aria-label="Primary navigation">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#notes">notes</a>
            <a href="#contact">connect</a>
          </nav>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">
            <span aria-hidden="true">{dark ? "☼" : "●"}</span>
          </button>
        </header>

        <section id="top" className="hero reveal reveal-2">
          <p className="eyebrow">developer · designer · student</p>
          <h1>
            I build thoughtful
            <em> digital products.</em>
          </h1>
          <div className="hero-meta">
            <p>
              I&apos;m Ayush, a 14-year-old developer in the Bay Area creating AI-powered education tools, iOS apps, and experimental web products.
            </p>
            <span>Morgan Hill, California</span>
          </div>
        </section>

        <section id="about" className="section-grid reveal reveal-3">
          <div className="section-index">01 / about</div>
          <div className="section-copy large-copy">
            <p>
              I care about making technology feel <em>clear, useful, and crafted.</em> My work sits where product thinking, engineering, and visual design meet.
            </p>
            <p className="muted-copy">
              I build with SwiftUI, Next.js, TypeScript, React, Firebase, and AI APIs. Most of my ideas begin as a problem I personally want solved, then become products other students can use.
            </p>
          </div>
        </section>

        <section id="work" className="work-section reveal reveal-4">
          <div className="section-heading">
            <span>02 / selected work</span>
            <span>{String(projects.length).padStart(2, "0")} projects</span>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-main">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <div className="project-side">
                  <span>{project.label}</span>
                  <span>
                    {project.links.map((link, linkIndex) => (
                      <span key={link.href}>
                        {linkIndex > 0 ? " · " : ""}
                        <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {link.label} ↗
                        </a>
                      </span>
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="notes" className="section-grid notes-section reveal reveal-5">
          <div className="section-index">03 / notes</div>
          <div className="notes-list">
            {notes.map(([number, text]) => (
              <article key={number}>
                <span>{number}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="site-footer reveal reveal-5">
          <div>
            <p className="eyebrow">04 / connect</p>
            <h2>Have an idea worth building?</h2>
          </div>
          <div className="footer-links">
            <a href="mailto:hello@ayushrout.xyz">email ↗</a>
            <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">github ↗</a>
            <a href="https://x.com/ayushrout201230" target="_blank" rel="noreferrer">x / twitter ↗</a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ayush Rout</span>
            <a href="#top">back to top ↑</a>
          </div>
        </footer>
      </main>

      <aside className={styles.floatingPlayer} aria-label="Spotify player">
        <iframe
          title="Spotify player"
          src="https://open.spotify.com/embed/track/3P3UA61WRQqwCXaoFOTENd?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </aside>
    </>
  );
}
