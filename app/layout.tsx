import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'TrueQR — Free QR Codes That Never Deactivate',
    template: '%s | TrueQR',
  },
  description:
    'Generate free, permanent QR codes for URLs, WiFi, WhatsApp, PayID, calendar events, Google Reviews and more. No signup. No deactivation. Ever. Made in Australia.',
  keywords: ['QR code generator', 'free QR codes', 'no signup', 'Australia', 'permanent QR codes', 'PayID QR', 'WhatsApp QR', 'static QR codes'],
  authors: [{ name: 'TrueQR' }],
  openGraph: {
    title: 'TrueQR — Free QR codes that never deactivate',
    description: 'The QR tool that doesn\'t trick you. Free forever, no signup.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 11%;
            --primary: 173 90% 32%;
            --primary-foreground: 0 0% 100%;
            --secondary: 0 0% 96%;
            --secondary-foreground: 0 0% 11%;
            --muted: 0 0% 96%;
            --muted-foreground: 0 0% 43%;
            --accent: 173 90% 32%;
            --accent-foreground: 0 0% 100%;
            --border: 0 0% 90%;
            --input: 0 0% 90%;
            --ring: 173 90% 32%;
            --radius: 0.75rem;
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col bg-apple-gray">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
