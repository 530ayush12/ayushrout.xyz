"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "index" },
  { href: "/about", label: "about" },
  { href: "/journey", label: "journey" },
  { href: "/writing", label: "writing" },
  { href: "/contact", label: "contact" },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-start justify-between p-6 mix-blend-difference md:p-12">
      <Link
        href="/"
        className="pointer-events-auto font-mono text-[10px] uppercase tracking-widest text-background"
      >
        A. Rout
      </Link>

      <div className="pointer-events-auto flex flex-col items-end gap-2">
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className={`font-mono text-[10px] uppercase tracking-widest text-background transition-opacity duration-300 hover:opacity-100 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
