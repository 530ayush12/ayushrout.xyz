import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushrout.xyz"),
  title: "Ayush Rout — Developer & Designer",
  description: "Student developer building AI products, iOS apps, and thoughtful web experiences.",
  icons: { icon: "/favicon.ico", apple: "/apple-icon.jpg" },
  openGraph: {
    title: "Ayush Rout — Developer & Designer",
    description: "AI products, iOS apps, and thoughtful web experiences.",
    url: "https://ayushrout.xyz",
    siteName: "Ayush Rout",
    type: "website",
    images: [{ url: "/ayush.png", width: 1200, height: 630, alt: "Ayush Rout portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Rout — Developer & Designer",
    description: "AI products, iOS apps, and thoughtful web experiences.",
    creator: "@ayushrout201230",
    images: ["/ayush.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
