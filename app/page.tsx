import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
