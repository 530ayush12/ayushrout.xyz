"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SCENE_SELECTOR = "[data-scroll-depth], [data-project-card], .art-piece, .notes-list article";

export function ScrollScene() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SCENE_SELECTOR));
    let frame = 0;

    const updateScene = () => {
      frame = 0;
      document.documentElement.style.setProperty("--page-scroll-y", `${(window.scrollY * 0.08).toFixed(2)}px`);
      document.documentElement.style.setProperty("--page-turn", `${Math.min(8, window.scrollY * 0.006).toFixed(2)}deg`);
      const viewportCenter = window.innerHeight / 2;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / window.innerHeight));
        element.style.setProperty("--scroll-y", `${(-distance * 18).toFixed(2)}px`);
        element.style.setProperty("--scroll-z", `${(-Math.abs(distance) * 46).toFixed(2)}px`);
        element.style.setProperty("--scroll-rx", `${(distance * 2.4).toFixed(2)}deg`);
        element.style.setProperty("--scroll-light", `${(1 - Math.abs(distance) * 0.35).toFixed(2)}`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateScene);
    };

    updateScene();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      document.documentElement.style.removeProperty("--page-scroll-y");
      document.documentElement.style.removeProperty("--page-turn");
    };
  }, [pathname]);

  return null;
}
