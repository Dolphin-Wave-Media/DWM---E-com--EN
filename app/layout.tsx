import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#0c0a14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Dolphin Wave Media | Performance Marketing Agency',
  description: 'We help e-commerce brands scale with Meta Ads, Google Ads & TikTok Ads — built on data, sharp creative, and proven strategy.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dolphin Wave Media',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${dmSans.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
