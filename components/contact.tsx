import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <h2 className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        <span className="h-px w-8 bg-primary" />
        Contact
      </h2>

      <div className="max-w-xl">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {"If you'd like to discuss a project or just say hi, I'm always open to new opportunities and collaborations. Feel free to reach out!"}
        </p>

        <Link
          href="mailto:hello@ayushrout.xyz"
          className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          <Mail className="h-5 w-5" />
          Say Hello
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            {"Designed & Built by Ayush Rout"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
