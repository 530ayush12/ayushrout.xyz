"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Moon, Sun } from "lucide-react";

const projects = [
  {
    name: "GeniusMath AI",
    description: "AI-generated math practice with adjustable difficulty, instant scoring, and step-by-step explanations.",
    meta: "iOS · AI · Education",
    href: "https://apps.apple.com",
  },
  {
    name: "SereneQuests",
    description: "A thoughtful iOS experience designed around reflection, calm, and meaningful daily quests.",
    meta: "iOS · SwiftUI",
    href: "https://apps.apple.com",
  },
  {
    name: "Lotus",
    description: "An AI-powered website builder focused on fast, expressive design and one-click publishing.",
    meta: "Web · AI · Product",
    href: "https://trylotus.dev",
  },
  {
    name: "SolveGPT",
    description: "A multimodal homework assistant concept for scanning, understanding, and solving academic problems.",
    meta: "iOS · Vision · AI",
    href: "#contact",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="site-shell">
      <div className="custom-cursor" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} />

      <header className="topbar reveal" style={{ animationDelay: "40ms" }}>
        <a href="#top" className="wordmark">ayush rout</a>
        <nav aria-label="Primary navigation">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero reveal" style={{ animationDelay: "100ms" }}>
        <p className="eyebrow">student developer · designer · founder</p>
        <h1>
          I build useful software
          <span>for learning, creativity, and ambitious ideas.</span>
        </h1>
        <p className="hero-copy">
          I&apos;m Ayush, a young developer in California creating AI products, iOS apps, and web experiences with a focus on clarity and real-world impact.
        </p>
        <div className="hero-links">
          <a href="#work">explore my work <ArrowUpRight size={15} /></a>
          <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer"><Github size={15} /> github</a>
        </div>
      </section>

      <section id="about" className="split-section reveal">
        <p className="section-label">01 / about</p>
        <div className="section-content large-copy">
          <p>I care about products that feel simple, intentional, and genuinely helpful.</p>
          <p className="muted">My work blends artificial intelligence, education, interface design, and software engineering. I learn by shipping.</p>
        </div>
      </section>

      <section id="work" className="work-section reveal">
        <div className="section-heading">
          <p className="section-label">02 / selected work</p>
          <p className="muted">Projects I&apos;ve designed and built.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-row" href={project.href} key={project.name} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="project-number">0{index + 1}</span>
              <span className="project-main">
                <strong>{project.name}</strong>
                <span>{project.description}</span>
              </span>
              <span className="project-meta">{project.meta}</span>
              <ArrowUpRight className="project-arrow" size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="split-section reveal">
        <p className="section-label">03 / currently</p>
        <div className="section-content status-grid">
          <div><span>building</span><strong>GeniusMath AI & SereneQuests</strong></div>
          <div><span>exploring</span><strong>AI-native product design</strong></div>
          <div><span>based in</span><strong>California, USA</strong></div>
        </div>
      </section>

      <section className="music-card reveal" aria-label="Spotify player">
        <div>
          <p className="eyebrow">on repeat</p>
          <h2>losing interest (sped up)</h2>
          <p className="muted">shiloh dynasty · lit cosmo</p>
        </div>
        <iframe
          title="Spotify player"
          src="https://open.spotify.com/embed/search/losing%20interest%20sped%20up"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      <footer id="contact" className="footer reveal">
        <div>
          <p className="eyebrow">have an idea?</p>
          <h2>Let&apos;s build something memorable.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:contact@ayushrout.xyz">email <ArrowUpRight size={14} /></a>
          <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">github <ArrowUpRight size={14} /></a>
          <a href="https://x.com/ayushrout201230" target="_blank" rel="noreferrer">x / twitter <ArrowUpRight size={14} /></a>
        </div>
        <p className="copyright">© 2026 Ayush Rout</p>
      </footer>
    </main>
  );
}
