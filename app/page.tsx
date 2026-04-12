export default function ComingSoon() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
        coming soon
      </p>
      
      <h1 className="mb-4 text-3xl font-light tracking-tight text-foreground md:text-4xl">
        ayush rout
      </h1>
      
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        something new is in the works. check back soon.
      </p>
      
      <div className="mt-10">
        <a 
          href="mailto:hello@ayushrout.xyz"
          className="text-sm text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
        >
          get in touch
        </a>
      </div>
    </div>
  );
}
