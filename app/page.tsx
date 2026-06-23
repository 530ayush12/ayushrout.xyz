import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl">
      <p className="mb-12 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        01 / Introduction
      </p>

      <div className="space-y-8 text-xl font-light leading-relaxed tracking-tight md:text-3xl md:leading-relaxed">
        <p>hello.</p>
        <p>
          i am ayush. i am a 14-year-old developer and founder building software
          that scales.
        </p>
        <p>
          i believe in shipping fast, iterating relentlessly, and creating tools
          that feel crafted. quiet, intentional, and powerful.
        </p>
        <p className="mt-12 text-lg italic text-muted-foreground md:text-2xl">
          currently building{" "}
          <Link
            href="https://trylotus.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            trylotus.dev
          </Link>{" "}
          — an ai design tool that builds websites from a simple prompt.
        </p>
      </div>
    </div>
  );
}
