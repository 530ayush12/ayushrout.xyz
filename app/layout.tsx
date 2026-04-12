import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Nav } from '@/components/nav'
import { LotusBadge } from '@/components/lotus-badge'
import { PasskeyGateway } from '@/components/passkey-gateway'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f5f5f5",
};

export const metadata: Metadata = {
  title: 'Ayush Rout - Developer & Designer',
  description: 'Personal portfolio of Ayush Rout. Building polished software and crafting digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
          <Nav />
          <main className="mx-auto max-w-2xl px-6 pb-16 pt-8">
            {children}
          </main>
          <footer className="border-t border-border">
            <div className="mx-auto max-w-2xl px-6 py-8">
              <p className="text-xs text-muted-foreground">
                built by ayush rout
              </p>
            </div>
          </footer>
          <LotusBadge />
        </PasskeyGateway>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
