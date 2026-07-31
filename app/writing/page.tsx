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
    title: "Why I Built Lotus",
    content: [
      "I started building Lotus because the AI design tools I tried kept producing work that felt generic. They could generate a page, but they rarely captured the clarity, personality, and finish that make a product feel intentional.",
      "I wanted Lotus to feel less like a code generator and more like a creative partner. A person should be able to describe an idea, see it become real, refine it visually, and publish it without stitching together a complicated workflow.",
      "My first version was rough, but shipping it gave me something more useful than another month of planning: real feedback. I watched where people hesitated, which outputs they kept, and what made a generated site feel trustworthy instead of artificial.",
      "Building Lotus has taught me that the model is only one part of an AI product. The harder work is designing the system around it—the prompts, editing experience, preview loop, and small decisions that help someone stay in control.",
      "I am still improving Lotus with every version. My goal is simple: help more people turn an idea into a polished product while keeping the process fast, visual, and genuinely enjoyable.",
    ],
  },
  {
    date: "New project",
    title: "Making DitherStudio",
    content: [
      "I built DitherStudio because I love the character of dithered images, but I did not love the friction of making them. Most workflows required bouncing between tools, guessing at settings, and exporting repeatedly just to understand the result.",
      "I wanted the experience to be immediate. When I adjust an image, palette, or dither pattern, I should see the visual consequence right away. That fast feedback loop became the central idea behind the product.",
      "The biggest design challenge was deciding how much control to expose. Dithering can become technical quickly, so I focused on making the important choices visible while keeping the interface calm enough for experimentation.",
      "DitherStudio also became a test of the system I am building around Lotus. I used the same product instincts—generate quickly, refine visually, remove unnecessary steps—to make a smaller creative tool with a distinct identity.",
      "I see DitherStudio as proof that focused tools can still feel expressive. It does one thing, but I want that one thing to feel fast, playful, and carefully made.",
    ],
  },
  {
    date: "Product story",
    title: "Building SereneQuests",
    content: [
      "I created SereneQuests around a question: could an AI wellness product feel calm and supportive without becoming clinical, overwhelming, or demanding? I wanted to make something people could return to when they needed a quiet moment to think.",
      "That goal affected every part of the product. I kept the conversations approachable, reduced visual noise, and focused the experience on small daily progress instead of streaks or pressure.",
      "Working on SereneQuests made me think more carefully about tone. In an education app, a direct correction can be helpful. In a wellness product, the same wording can feel cold. I learned that product design includes not only what a system does, but how it makes a person feel while doing it.",
      "I also had to be honest about the role of AI. SereneQuests is not a replacement for professional care. I designed it as an everyday companion for reflection, healthier habits, and mindful conversation.",
      "The product continues to shape how I build. It reminds me that a useful feature is not enough—the pacing, language, and atmosphere around that feature matter just as much.",
    ],
  },
  {
    date: "Lessons learned",
    title: "What My Education Apps Taught Me",
    content: [
      "I began building education apps because I was already close to the problem. As a student, I knew how frustrating it felt when practice was repetitive, feedback arrived too late, or an explanation skipped the exact step I did not understand.",
      "MathIQ+ taught me how important momentum is. A learner should be able to open the app, understand the next action immediately, and finish a meaningful challenge without navigating through layers of setup.",
      "SciCore pushed me to organize complex subjects into smaller lessons and hands-on quizzes. QuizAI+ taught me how to use AI for adaptive questions and immediate feedback without letting the technology distract from the learning goal.",
      "Across these products, I learned that more features do not automatically create a better learning experience. The best tools make the next step clear, respond to the learner, and explain mistakes without making them feel like failures.",
      "Those lessons now influence everything I build. Whether I am working on an AI design platform or a creative image tool, I still ask the same question: how can I make this complicated task feel simpler and more personal?",
    ],
  },
];

export default function WritingPage() {
  const [selected, setSelected] = useState<Essay>(essays[0]);

  return (
    <InteriorShell pageNumber="05">
      <section className="interior-hero compact">
        <p className="eyebrow">05 / product stories</p>
        <h1>notes from<br /><em>building.</em></h1>
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
