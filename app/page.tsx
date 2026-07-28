"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Moon, Sun } from "lucide-react";

const projects = [
  { name: "geniusmath ai", description: "ai-powered math practice with adjustable difficulty, instant scoring, and step-by-step explanations", meta: "ios · ai · education", href: "https://apps.apple.com" },
  { name: "serenequests", description: "a calm, reflective ios experience built around meaningful daily quests", meta: "ios · swiftui", href: "https://apps.apple.com" },
  { name: "lotus", description: "an ai website builder focused on fast creation, expressive design, and simple publishing", meta: "web · ai · product", href: "https://trylotus.dev" },
  { name: "solvegpt", description: "a multimodal homework assistant for scanning, understanding, and solving academic problems", meta: "ios · vision · ai", href: "#connect" },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(saved ? saved === "dark" : true);
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

      <header className="topbar reveal">
        <a href="#top" className="wordmark">ayush rout</a>
        <nav>
          <a href="#about">about</a><a href="#journey">journey</a><a href="#projects">projects</a><a href="#connect">connect</a>
          <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label="toggle theme">{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>
        </nav>
      </header>

      <section id="top" className="hero reveal">
        <p className="eyebrow">14 · founder · developer · bay area</p>
        <h1>ayush rout<span>crafted software · ai products · shipped with intent</span></h1>
        <div className="status-grid hero-stats">
          <div><span>live apps</span><strong>2</strong></div>
          <div><span>focus</span><strong>ai + education</strong></div>
          <div><span>currently</span><strong>building fast</strong></div>
        </div>
        <p className="hero-copy">I build software that feels thoughtful, useful, and complete — from SwiftUI apps to AI-native web products.</p>
        <div className="hero-links"><a href="#about">jump to → about · journey · projects · music · connect</a></div>
      </section>

      <section id="about" className="split-section reveal">
        <p className="section-label">about</p>
        <div className="section-content large-copy"><p>i am ayush — a student developer and founder building tools for learning, creativity, and better digital experiences.</p><p className="muted">quiet interfaces. strong ideas. useful in practice.</p></div>
      </section>

      <section id="journey" className="split-section reveal">
        <p className="section-label">journey</p>
        <div className="section-content status-grid">
          <div><span>2026</span><strong>launched GeniusMath AI and SereneQuests on the App Store</strong></div>
          <div><span>now</span><strong>refining Lotus and exploring multimodal AI products</strong></div>
          <div><span>next</span><strong>competitions, hackathons, and ambitious product launches</strong></div>
        </div>
      </section>

      <section id="projects" className="work-section reveal">
        <div className="section-heading"><p className="section-label">projects</p><p className="muted">selected builds →</p></div>
        <div className="project-list">{projects.map((project,index)=><a className="project-row" href={project.href} key={project.name} target={project.href.startsWith("http")?"_blank":undefined} rel="noreferrer"><span className="project-number">0{index+1}</span><span className="project-main"><strong>{project.name}</strong><span>{project.description}</span></span><span className="project-meta">{project.meta}</span><ArrowUpRight className="project-arrow" size={20}/></a>)}</div>
      </section>

      <section className="split-section reveal">
        <p className="section-label">stack</p>
        <div className="section-content large-copy"><p>swift · swiftui · typescript · react · next.js · tailwind · firebase · ai apis · product design</p></div>
      </section>

      <section className="music-card reveal">
        <div><p className="eyebrow">now playing</p><h2>losing interest (sped up)</h2><p className="muted">shiloh dynasty · lit cosmo</p></div>
        <iframe title="Spotify player" src="https://open.spotify.com/embed/search/losing%20interest%20sped%20up" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
      </section>

      <footer id="connect" className="footer reveal">
        <p className="eyebrow">connect</p><h2>always open to talking about apps, ai, startups, and product design.</h2>
        <div className="footer-links"><a href="mailto:contact@ayushrout.xyz">email <ArrowUpRight size={14}/></a><a href="https://github.com/530ayush12" target="_blank" rel="noreferrer"><Github size={14}/> github</a><a href="https://x.com/ayushrout201230" target="_blank" rel="noreferrer">x / twitter <ArrowUpRight size={14}/></a></div>
        <p className="copyright">signed, a.r. · © 2026</p>
      </footer>
    </main>
  );
}
