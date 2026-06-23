import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Ayush Rout",
  description: "Get in touch with Ayush Rout.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <p className="mb-12 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        05 / Correspondence
      </p>

      <div className="space-y-12">
        <p className="text-2xl leading-snug tracking-tight md:text-4xl">
          i am always open to talking about startups, artificial intelligence, or
          design.
        </p>

        <div className="flex flex-col gap-4 font-mono text-sm tracking-wide">
          <Link
            href="mailto:ayushrout.ar@gmail.com"
            className="w-fit border-b border-foreground/20 pb-1 text-foreground transition-colors hover:border-transparent"
          >
            ayushrout.ar@gmail.com
          </Link>
          <Link
            href="https://x.com/ayushrout2012"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-foreground/20 pb-1 text-foreground transition-colors hover:border-transparent"
          >
            x.com/ayushrout2012
          </Link>
          <Link
            href="https://github.com/ayushrout12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-foreground/20 pb-1 text-foreground transition-colors hover:border-transparent"
          >
            github.com/ayushrout12
          </Link>
        </div>

        <div className="space-y-1 text-lg italic text-muted-foreground">
          <p>signed,</p>
          <p>a.r.</p>
        </div>
      </div>
    </div>
  );
}
