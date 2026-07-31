"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["/", "index"],
  ["/about", "about"],
  ["/work", "work"],
  ["/art", "art"],
  ["/writing", "writing"],
  ["/contact", "connect"],
];

export function InteriorShell({ children, pageNumber }: { children: React.ReactNode; pageNumber: string }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("ayush-theme");
    const nextDark = saved ? saved === "dark" : true;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-depth]"));
    if (reducedMotion.matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("ayush-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="interior-shell">
      <header className="interior-header">
        <Link className="wordmark" href="/">ayush rout</Link>
        <nav aria-label="Primary navigation">
          {navigation.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">
          <span aria-hidden="true">{dark ? "☼" : "●"}</span>
        </button>
      </header>
      <div className="interior-orbit" aria-hidden="true"><span /><span /></div>
      <main className="interior-main">{children}</main>
      <footer className="interior-footer">
        <span>{pageNumber} / 06</span>
        <Link href="/">return to index ↗</Link>
      </footer>
    </div>
  );
}
