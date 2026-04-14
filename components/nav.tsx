"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-all duration-200 hover:opacity-70"
        >
          ayush rout
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || 
              (href !== "/" && pathname.startsWith(href));
            
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm transition-all duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground/50" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
