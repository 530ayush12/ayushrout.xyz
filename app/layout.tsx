import type { Metadata, Viewport } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AccessBoundary } from "@/components/access-boundary";
import SpotifyPlayer from "@/app/components/SpotifyPlayer";
import { ScrollScene } from "@/components/scroll-scene";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushrout.xyz"),
  title: "Ayush Rout — Developer & Designer",
  description: "Ayush Rout builds AI-powered education tools, iOS apps, and experimental web products.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpg",
  },
  openGraph: {
    title: "Ayush Rout — Developer & Designer",
    description: "AI-powered education tools, iOS apps, and experimental web products.",
    url: "https://ayushrout.xyz",
    siteName: "Ayush Rout",
    type: "website",
    images: [{ url: "/ayush.png", width: 1200, height: 630, alt: "Ayush Rout portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Rout — Developer & Designer",
    description: "AI-powered education tools, iOS apps, and experimental web products.",
    creator: "@ayushrout201230",
    images: ["/ayush.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <AccessBoundary>
          {children}
          <ScrollScene />
          <SpotifyPlayer />
        </AccessBoundary>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
