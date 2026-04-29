"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(false);
  const previousPathname = useRef(pathname);

  // Fade in on initial mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  // Handle route changes
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      // Fade out
      setIsVisible(false);
      
      const timeout = setTimeout(() => {
        // Update content and fade in
        setDisplayChildren(children);
        previousPathname.current = pathname;
        setIsVisible(true);
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className={`transition-all duration-400 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      {displayChildren}
    </div>
  );
}
