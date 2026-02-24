import { QRBuilder } from '@/components/qr/QRBuilder'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do free QR codes expire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueQR generates static QR codes — the content is encoded directly into the image. They never expire and cannot be deactivated, even if TrueQR shuts down. Most other free QR generators use redirect URLs that can be turned off when you stop paying.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TrueQR really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TrueQR is 100% free, forever. No account required, no credit card, no watermarks, no rate limits. All 12 QR code types are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a static QR code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A static QR code encodes your content (URL, WiFi password, contact info, etc.) directly into the QR image itself. When scanned, it goes directly to your content — no redirect server is involved. This means it works forever and cannot be deactivated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I generate a PayID QR code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TrueQR supports PayID QR codes using the payto:// URI standard, compatible with major Australian banks including ANZ, CBA, NAB, and Westpac. You can optionally include a payment amount and reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What QR code types does TrueQR support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueQR supports 12 types: URL, Text, WiFi, Email, SMS, Phone, vCard (digital business card), Location, WhatsApp, Google Review, PayID (Australia), and Calendar Event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TrueQR requires no account, no signup, and no email address. Just generate and download your QR code.',
      },
    },
  ],
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'TrueQR',
  url: 'https://trueqr.app',
  description: 'Free, permanent QR code generator. No signup, no dark patterns, no expiry. 12 QR types including PayID.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  featureList: [
    'Static QR codes that never expire',
    '12 QR code types',
    'No account required',
    'PNG SVG JPG download',
    'PayID QR code support',
    'Open source AGPL-3.0',
  ],
}

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      {/* ── HERO ── clean white, confident, high contrast */}
      <div className="bg-white border-b border-black/[0.06]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-14 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Text side ── */}
            <div className="flex-1 text-center lg:text-left">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100"
                style={{ animation: 'fadeSlideUp 0.45s ease both' }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-teal-700 tracking-wide">
                  Free · No Signup · No Deactivation
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-[40px] sm:text-[54px] md:text-[62px] font-bold leading-[1.04] mb-5"
                style={{ letterSpacing: '-0.035em', color: '#111827', animation: 'fadeSlideUp 0.5s 0.07s ease both' }}
              >
                QR codes that
                <br />
                <span className="text-teal-700">never trick you.</span>
              </h1>

              {/* Body */}
              <p
                className="text-[17px] sm:text-[19px] leading-relaxed mb-8 max-w-md"
                style={{ color: '#374151', animation: 'fadeSlideUp 0.5s 0.14s ease both' }}
              >
                Permanent static QR codes — free forever. No subscriptions.
                No codes that die when you stop paying.
              </p>

              {/* Trust signals */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5"
                style={{ animation: 'fadeSlideUp 0.5s 0.21s ease both' }}
              >
                {[
                  'No account required',
                  'Static codes never expire',
                  'PNG · SVG · JPG',
                  '12 QR types',
                ].map((text) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#374151' }}>
                    <span className="text-teal-600 font-bold text-xs">✓</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* ── QR demo card ── */}
            <div
              className="flex-shrink-0"
              style={{ animation: 'fadeScaleIn 0.55s 0.15s ease both' }}
            >
              <div
                className="relative rounded-3xl p-5 bg-white"
                style={{
                  boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)',
                }}
              >
                {/* Subtle teal halo behind the QR */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 60% 40%, rgba(13,148,136,0.08) 0%, transparent 70%)',
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-qr.png"
                  alt="TrueQR demo — scan to visit trueqr.app"
                  width={180}
                  height={180}
                  className="relative block rounded-xl"
                  style={{ imageRendering: 'pixelated' }}
                />
                <p className="mt-3 text-center text-[11px] font-medium tracking-wide" style={{ color: '#6b7280' }}>
                  Scan me → trueqr.app
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BUILDER SECTION ── */}
      <div className="bg-apple-gray">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-12 pb-24">
          <QRBuilder />
        </div>
      </div>

    </div>
  )
}
