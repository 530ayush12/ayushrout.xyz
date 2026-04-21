"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "INDEX" },
  { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORK" },
  { href: "/writing", label: "WRITING" },
  { href: "/contact", label: "CONTACT" },
];

export function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-8 z-[60] p-2 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex h-full flex-col items-center justify-center gap-6">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href || 
                (href !== "/" && pathname.startsWith(href));
              
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/60 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop side nav */}
      <nav className="fixed right-0 top-0 z-50 hidden h-screen flex-col items-end justify-center gap-3 p-8 md:flex md:p-12">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href || 
            (href !== "/" && pathname.startsWith(href));
          
          return (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest transition-all duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
