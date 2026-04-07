import Link from "next/link";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        <span className="h-px w-8 bg-primary" />
        About
      </h2>

      <div className="space-y-6 text-muted-foreground">
        <p className="text-pretty leading-relaxed">
          {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are built for performance and usability."}
        </p>

        <p className="text-pretty leading-relaxed">
          {"Currently, I'm a developer building digital products and exploring the latest in web technologies. I contribute to open-source projects and love experimenting with new frameworks and tools to push the boundaries of what's possible on the web."}
        </p>

        <p className="text-pretty leading-relaxed">
          {"In the past, I've had the opportunity to develop software across a variety of settings — from"}{" "}
          <Link href="#" className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary">
            startups
          </Link>{" "}
          {"and"}{" "}
          <Link href="#" className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary">
            agencies
          </Link>{" "}
          {"to"}{" "}
          <Link href="#" className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary">
            product studios
          </Link>
          {". I've also contributed to technical articles and tutorials, helping other developers level up their skills."}
        </p>

        <p className="text-pretty leading-relaxed">
          {"In my spare time, I'm usually reading, exploring new technologies, playing video games, or working on side projects. I'm always open to new opportunities and collaborations."}
        </p>
      </div>
    </section>
  );
}
