import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Ayush Rout",
  description: "Get in touch with Ayush Rout.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          05 / correspondence
        </p>

        <div className="space-y-8">
          <h1 className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            i am always open to talking about startups, artificial intelligence, or design.
          </h1>

          <div className="space-y-4 font-mono text-sm">
            <Link 
              href="mailto:ayushrout@example.com"
              className="block text-foreground transition-opacity hover:opacity-60"
            >
              ayushrout@example.com
            </Link>
            <Link 
              href="https://x.com/ayushrout"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground transition-opacity hover:opacity-60"
            >
              x.com/ayushrout
            </Link>
            <Link 
              href="https://github.com/ayushrout"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground transition-opacity hover:opacity-60"
            >
              github.com/ayushrout
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <p className="font-serif italic text-muted-foreground">signed,</p>
        <p className="font-serif italic text-muted-foreground">a.r.</p>
      </section>
    </div>
  );
}
