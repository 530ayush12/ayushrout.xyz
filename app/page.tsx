"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    description: "An AI wellness companion for mindful conversations, daily growth, and healthier habits.",
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
    name: "DitherStudio",
    label: "web · creative tools",
    description: "A focused studio for turning images into expressive dithered artwork with a fast, visual workflow.",
    links: [{ label: "Open project", href: "https://ditherstudio.trylotus.dev" }],
  },
];

const notes = [
  ["01", "Building products that make learning feel simpler, faster, and more personal."],
  ["02", "Interested in AI, interface design, SwiftUI, and shipping ideas into real products."],
  ["03", "Currently developing new educational tools and preparing my projects for competitions."],
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [playerMinimized, setPlayerMinimized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("ayush-theme");
    const nextDark = savedTheme ? savedTheme === "dark" : true;
    const savedPlayerState = localStorage.getItem("ayush-spotify-minimized");
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    setPlayerMinimized(
      savedPlayerState === null
        ? matchMedia("(max-width: 600px)").matches
        : savedPlayerState === "true",
    );
  }, []);

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = matchMedia("(pointer: coarse)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-3d]"),
    );

    if (reducedMotion.matches) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    if (coarsePointer.matches) {
      return () => observer.disconnect();
    }

    const hero = document.querySelector<HTMLElement>("[data-hero-stage]");
    const rows = Array.from(
      document.querySelectorAll<HTMLElement>("[data-project-card]"),
    );
    let frame = 0;

    const setHeroPerspective = (event: PointerEvent) => {
      if (!hero) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        hero.style.setProperty("--hero-rx", `${(-y * 3.5).toFixed(2)}deg`);
        hero.style.setProperty("--hero-ry", `${(x * 5).toFixed(2)}deg`);
        hero.style.setProperty("--hero-x", `${(x * 12).toFixed(2)}px`);
        hero.style.setProperty("--hero-y", `${(y * 10).toFixed(2)}px`);
      });
    };

    const resetHeroPerspective = () => {
      hero?.style.removeProperty("--hero-rx");
      hero?.style.removeProperty("--hero-ry");
      hero?.style.removeProperty("--hero-x");
      hero?.style.removeProperty("--hero-y");
    };

    const rowCleanups = rows.map((row) => {
      const tilt = (event: PointerEvent) => {
        const bounds = row.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        row.style.setProperty("--row-rx", `${(-y * 2.2).toFixed(2)}deg`);
        row.style.setProperty("--row-ry", `${(x * 3).toFixed(2)}deg`);
      };
      const reset = () => {
        row.style.removeProperty("--row-rx");
        row.style.removeProperty("--row-ry");
      };
      row.addEventListener("pointermove", tilt);
      row.addEventListener("pointerleave", reset);
      return () => {
        row.removeEventListener("pointermove", tilt);
        row.removeEventListener("pointerleave", reset);
      };
    });

    hero?.addEventListener("pointermove", setHeroPerspective);
    hero?.addEventListener("pointerleave", resetHeroPerspective);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      hero?.removeEventListener("pointermove", setHeroPerspective);
      hero?.removeEventListener("pointerleave", resetHeroPerspective);
      rowCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("ayush-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("ayush-spotify-minimized", String(playerMinimized));
  }, [playerMinimized]);

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
            <Link href="/about">about</Link>
            <Link href="/work">work</Link>
            <Link href="/art">art</Link>
            <Link href="/writing">writing</Link>
            <Link href="/contact">connect</Link>
          </nav>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">
            <span aria-hidden="true">{dark ? "☼" : "●"}</span>
          </button>
        </header>

        <section id="top" className="hero reveal reveal-2" data-hero-stage>
          <div className="hero-depth" aria-hidden="true">
            <span className="hero-depth-plane hero-depth-plane-1" />
            <span className="hero-depth-plane hero-depth-plane-2" />
            <span className="hero-depth-orbit" />
          </div>
          <p className="eyebrow hero-eyebrow">developer · designer · student</p>
          <h1 className="hero-title">
            <span>I build thoughtful</span>
            <em> digital products.</em>
          </h1>
          <div className="hero-meta">
            <p>
              I&apos;m Ayush, a 14-year-old developer in the Bay Area creating AI-powered education tools, iOS apps, and experimental web products.
            </p>
            <span>Morgan Hill, California</span>
          </div>
        </section>

        <section id="about" className="section-grid depth-section" data-reveal-3d>
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

        <section id="work" className="work-section depth-section" data-reveal-3d>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name} data-project-card>
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

        <section id="notes" className="section-grid notes-section depth-section" data-reveal-3d>
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

        <footer id="contact" className="site-footer depth-section" data-reveal-3d>
          <div>
            <p className="eyebrow">04 / connect</p>
            <h2>Have an idea worth building?</h2>
          </div>
          <div className="footer-links">
            <a href="mailto:ayushrout.ar@gmail.com">email ↗</a>
            <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">github ↗</a>
            <a href="https://x.com/ayushrout201230" target="_blank" rel="noreferrer">x / twitter ↗</a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ayush Rout</span>
            <a href="#top">back to top ↑</a>
          </div>
        </footer>
      </main>

      <aside
        className={`${styles.floatingPlayer} ${playerMinimized ? styles.minimized : ""}`}
        aria-label="Spotify player"
      >
        <button
          type="button"
          className={styles.spotifyToggle}
          onClick={() => setPlayerMinimized((value) => !value)}
          aria-label={playerMinimized ? "Expand Spotify player" : "Minimize Spotify player"}
          title={playerMinimized ? "Expand Spotify player" : "Minimize Spotify player"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.58 14.42a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.16-2.55-11.98-1.4a.94.94 0 1 1-.54-1.8c4.37-1.32 9.81-.68 13.5 1.58.44.27.58.85.31 1.31Zm.13-3.4C14.3 7.45 7.9 7.24 4.2 8.35a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.34-1.03 15.78 1.6a1.13 1.13 0 0 1-1.15 1.96Z" />
          </svg>
        </button>

        <div className={styles.embedShell} aria-hidden={playerMinimized}>
          <iframe
            title="Spotify player"
            src="https://open.spotify.com/embed/track/469kz2Vls0uvgMpFsOfRpu?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </aside>
    </>
  );
}
