import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SideNav } from '@/components/side-nav'
import { LotusBadge } from '@/components/lotus-badge'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f5f5f5",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushrout.xyz'),

  title: 'ayush rout',
  description: 'portfolio, blog, and builds',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.jpg',
  },

  openGraph: {
    title: 'ayush rout',
    description: 'portfolio, blog, and builds',
    url: 'https://ayushrout.xyz',
    siteName: 'ayush rout',
    type: 'website',
    images: [
      {
        url: 'https://ayushrout.xyz/ayush.png?v=3',
        width: 1200,
        height: 630,
        alt: 'ayush rout preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ayush rout',
    description: 'portfolio, blog, and builds',
    creator: '@ayushrout2012',
    images: ['https://ayushrout.xyz/ayush.png?v=3'],
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
      className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen">
          <header className="fixed left-0 top-0 z-50 p-8 md:p-12">
            <a
              href="/"
              className="font-mono text-sm tracking-wider text-foreground transition-opacity hover:opacity-60"
            >
              A. ROUT
            </a>
          </header>

          <SideNav />

          <main className="mx-auto max-w-3xl px-8 pb-24 pt-32 md:px-16 md:pr-48">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>

        <LotusBadge />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
