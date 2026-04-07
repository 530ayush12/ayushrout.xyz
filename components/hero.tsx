import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@ayushrout.xyz", label: "Email" },
];

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center pb-16">
      <div className="max-w-3xl">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ayush Rout
        </h1>
        <h2 className="mt-3 text-xl font-medium text-primary md:text-2xl">
          Full Stack Developer
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I build accessible, pixel-perfect digital experiences for the web.
          Currently focused on creating thoughtful interfaces that blend
          design with robust engineering.
        </p>

        <div className="mt-10 flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
