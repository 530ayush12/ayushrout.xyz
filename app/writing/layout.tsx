import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ayush Rout",
  description: "Notes and essays by Ayush Rout.",
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
