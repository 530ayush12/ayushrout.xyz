import type { Metadata } from "next";
import Image from "next/image";
import { InteriorShell } from "@/components/interior-shell";

export const metadata: Metadata = {
  title: "Art — Ayush Rout",
  description: "Selected dither artwork made with DitherStudio.",
};

const artworks = [
  { src: "/art/dither-mountain.png", title: "Mountain Study", method: "Atkinson / 01", className: "art-wide" },
  { src: "/art/dither-waterfall.png", title: "Falling Water", method: "Atkinson / 06", className: "" },
  { src: "/art/dither-coast.png", title: "Coastline", method: "Blue noise / 07", className: "" },
  { src: "/art/dither-red-study.png", title: "Red Study", method: "Atkinson / 11", className: "art-tall" },
  { src: "/art/dither-solitude.png", title: "Solitude", method: "Blue noise / 12", className: "" },
  { src: "/art/dither-green-study.png", title: "Green Study", method: "Blue noise / 17", className: "art-wide" },
];

export default function ArtPage() {
  return (
    <InteriorShell pageNumber="04">
      <section className="interior-hero art-hero">
        <p className="eyebrow">04 / dither studies</p>
        <h1>images,<br /><em>reimagined.</em></h1>
        <p className="interior-lede">A selection of images transformed with DitherStudio—exploring limited palettes, visible pattern, and the character inside digital noise.</p>
      </section>
      <section className="art-grid" data-scroll-depth aria-label="Selected DitherStudio artwork">
        {artworks.map((artwork, index) => (
          <a
            className={`art-piece ${artwork.className}`}
            href="https://ditherstudio.trylotus.dev"
            target="_blank"
            rel="noreferrer"
            key={artwork.src}
          >
            <div className="art-frame">
              <Image
                src={artwork.src}
                alt={`${artwork.title}, a dithered image made with DitherStudio`}
                width={1920}
                height={1080}
                sizes={artwork.className === "art-wide" ? "(max-width: 800px) 100vw, 80vw" : "(max-width: 800px) 100vw, 48vw"}
                priority={index === 0}
              />
            </div>
            <span className="art-caption"><b>{String(index + 1).padStart(2, "0")} / {artwork.title}</b><small>{artwork.method} · DitherStudio ↗</small></span>
          </a>
        ))}
      </section>
    </InteriorShell>
  );
}
