import Gateway from "@/components/Gateway";
import SpotifyPlayer from "@/components/SpotifyPlayer";

const projects = [
  { name: "mathiq+", description: "ai-powered educational math assistant", link: "#" },
  { name: "scicore", description: "interactive science learning platform", link: "#" },
  { name: "supercompress", description: "context compression for ai agents", link: "#" },
  { name: "ditherstudio", description: "dither any image in the browser", link: "#" },
];

export default function Home() {
  return (
    <Gateway>
      <main className="min-h-screen bg-[#0d0d0d] text-zinc-300 font-sans px-6 py-12 max-w-3xl mx-auto lowercase tracking-tight">
        {/* Navigation */}
        <header className="flex justify-between items-center mb-24 text-sm text-zinc-500">
          <span className="text-zinc-200 font-medium">ayush rout</span>
          <nav className="flex gap-6">
            <a href="#blog" className="hover:text-zinc-200 transition-colors">blog</a>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">projects</a>
            <a href="#socials" className="hover:text-zinc-200 transition-colors">socials</a>
          </nav>
        </header>

        {/* Bio */}
        <section className="mb-20 space-y-4 text-zinc-400 text-base leading-relaxed">
          <p className="text-zinc-200">hi, i&apos;m ayush.</p>
          <p>
            i build software and educational tools powered by artificial intelligence. currently refining developer experiences and modern web apps.
          </p>
        </section>

        {/* Selected Work */}
        <section className="space-y-6">
          <h2 className="text-sm text-zinc-500 font-normal">selected work</h2>
          <div className="border-t border-zinc-800/60 divide-y divide-zinc-800/60">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="flex items-center justify-between py-4 group hover:bg-zinc-900/40 px-2 rounded transition-colors"
              >
                <span className="font-medium text-zinc-200 group-hover:text-white">
                  {project.name}
                </span>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span>{project.description}</span>
                  <span className="text-zinc-600 group-hover:text-zinc-300 transition-colors">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Spotify Overlay */}
        <SpotifyPlayer />
      </main>
    </Gateway>
  );
}
