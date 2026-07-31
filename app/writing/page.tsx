"use client";

import { useState } from "react";
import { InteriorShell } from "@/components/interior-shell";

type Essay = {
  date: string;
  title: string;
  content: string[];
};

const essays: Essay[] = [
  {
    date: "Recent",
    title: "Building with AI: Lessons from Lotus",
    content: [
      "i started working on trylotus.dev because i was frustrated. every ai design tool i tried felt like it was missing something — the output always looked generic, soulless, like it was designed by committee.",
      "so i decided to build my own. at fourteen, i did not have decades of experience to draw from. what i had was curiosity and a willingness to ship fast and learn from mistakes.",
      "the first version of lotus was terrible. i mean truly awful. but it worked, and that was enough to start learning. i watched how people used it, where they got stuck, what made them leave.",
      "the biggest lesson? ai is not magic. it is a tool, and like any tool, it is only as good as the person wielding it. the real value is not in the ai itself — it is in understanding what users actually need and building around that.",
      "i am still learning. every day brings new challenges and new insights. but i would not trade this journey for anything.",
    ],
  },
  {
    date: "Archive",
    title: "Shipping Fast as a 14-Year-Old",
    content: [
      "people often ask me how i manage to ship so many projects at my age. the honest answer? i do not overthink it.",
      "when i have an idea, i build it. not perfectly, not completely — just enough to see if it works. i have launched apps that were barely functional, websites that broke on mobile, features that nobody used. and that is okay.",
      "every failure taught me something. every mistake made the next project better. the key is not avoiding failure — it is failing fast enough to learn before you run out of energy.",
      "being young actually helps here. i do not have years of \u201Cbest practices\u201D weighing me down. i do not worry about what the industry thinks. i just build what feels right and see what happens.",
      "my advice to anyone starting out: stop planning and start shipping. the feedback from real users is worth more than months of theorizing.",
    ],
  },
  {
    date: "Archive",
    title: "Why I Build iOS Apps",
    content: [
      "i get this question a lot: why ios? why not web apps, or android, or something else entirely?",
      "the honest answer is that i love the apple ecosystem. i grew up with it. the attention to detail, the focus on user experience, the way everything just works together — it resonated with how i think about building products.",
      "but there is a practical reason too. the app store gave me distribution. as a teenager with no marketing budget, being able to put my apps in front of millions of potential users was invaluable.",
      "mathiq+, scicore, quizai+ — each of these apps taught me something different about mobile development. about constraints, about performance, about designing for touch interfaces.",
      "i still love the web. trylotus.dev is proof of that. but ios will always have a special place in my journey as a developer.",
    ],
  },
  {
    date: "Archive",
    title: "The Elegance of Shipping Fast",
    content: [
      "there is an elegance to shipping fast that most people miss. it is not about being sloppy or cutting corners. it is about focus.",
      "when you commit to shipping quickly, you are forced to ask hard questions. what actually matters? what can wait? what is essential versus what is just nice to have?",
      "i have learned that most features i thought were essential turned out to be unnecessary. users do not care about half the things i worried about. they care about whether the product solves their problem.",
      "shipping fast is a forcing function. it strips away the ego, the perfectionism, the endless tweaking. it makes you confront reality instead of hiding in your comfortable assumptions.",
      "is it scary? absolutely. every launch feels like jumping off a cliff. but that is where the learning happens — in the freefall, not in the planning.",
    ],
  },
];

export default function WritingPage() {
  const [selected, setSelected] = useState<Essay>(essays[0]);

  return (
    <InteriorShell pageNumber="04">
      <section className="interior-hero compact">
        <p className="eyebrow">04 / notes &amp; essays</p>
        <h1>Thinking in<br /><em>public.</em></h1>
      </section>
      <section className="writing-layout" data-scroll-depth>
        <div className="essay-index">
        {essays.map((essay) => (
          <button
            type="button"
            key={essay.title}
            onClick={() => setSelected(essay)}
            className={selected.title === essay.title ? "is-active" : ""}
          >
            <span>{essay.date}</span>
            <strong>{essay.title}</strong>
          </button>
        ))}
        </div>
        <article key={selected.title} className="essay-body">
          <p className="eyebrow">{selected.date}</p>
          <h2>{selected.title}</h2>
          {selected.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      </section>
    </InteriorShell>
  );
}
