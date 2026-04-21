import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* intro */}
      <section className="space-y-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          01 / introduction
        </p>
        
        <div className="space-y-8">
          <h1 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
            hello.
          </h1>
          
          <div className="space-y-6 text-xl leading-relaxed text-foreground md:text-2xl">
            <p>
              i am ayush. i am a 14-year-old developer and founder building software that scales.
            </p>
            <p>
              i believe in shipping fast, iterating relentlessly, and creating tools that feel crafted. quiet, intentional, and powerful.
            </p>
          </div>
          
          <p className="font-serif text-lg italic text-muted-foreground md:text-xl">
            currently building{" "}
            <Link href="https://trylotus.dev" target="_blank" className="text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground">
              trylotus.dev
            </Link>
            {" "}— an ai design tool that builds websites from a simple prompt.
          </p>
        </div>
      </section>
    </div>
  );
}
