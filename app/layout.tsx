import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SideNav } from '@/components/side-nav'
import { LotusBadge } from '@/components/lotus-badge'
import { PasskeyGateway } from '@/components/passkey-gateway'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f5f5f5",
};

export const metadata: Metadata = {
  title: 'Ayush Rout — Profile',
  description: 'Personal portfolio of Ayush Rout. Building polished software and crafting digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.jpg',
    shortcut: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ayush Rout',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <PasskeyGateway>
          <div className="min-h-screen">
            <header className="fixed left-0 top-0 z-50 p-8 md:p-12">
              <a href="/" className="font-mono text-sm tracking-wider text-foreground transition-opacity hover:opacity-60">
                A. ROUT
              </a>
            </header>
            <SideNav />
            <main className="animate-page-in mx-auto max-w-3xl px-8 pb-24 pt-32 md:px-16 md:pr-48">
              {children}
            </main>
          </div>
          <LotusBadge />
        </PasskeyGateway>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
