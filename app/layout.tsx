import type { Metadata, Viewport } from "next"
import { Newsreader, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SideNav } from "@/components/side-nav"
import { LotusBadge } from "@/components/lotus-badge"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f2f0e9",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushrout.xyz"),

  title: "ayush rout",
  description: "portfolio, blog, and builds",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpg",
  },

  openGraph: {
    title: "ayush rout",
    description: "portfolio, blog, and builds",
    url: "https://ayushrout.xyz",
    siteName: "ayush rout",
    type: "website",
    images: [
      {
        url: "/ayush.png",
        width: 1200,
        height: 630,
        alt: "ayush rout preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ayush rout",
    description: "portfolio, blog, and builds",
    creator: "@ayushrout201230",
    images: ["/ayush.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-serif antialiased">
        <div className="relative flex min-h-screen w-full flex-col">
          <SideNav />

          <main className="flex min-h-screen flex-grow items-center justify-center p-6 pt-32 md:p-24 md:pt-48 lg:p-32">
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <div className="pointer-events-none fixed inset-0 z-[-1] shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />
        </div>

        <LotusBadge />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
