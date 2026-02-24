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
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      {/* Very subtle ambient glow — restrained, not garish */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(13,148,136,0.12) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-24">

        {/* Hero — Apple-style: large, confident, tight */}
        <div className="text-center mb-16">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full bg-teal-50 border border-teal-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-medium text-teal-700 tracking-wide">
              Free · No Signup · No Deactivation
            </span>
          </div>

          <h1
            className="text-[42px] sm:text-[56px] md:text-[64px] font-bold text-apple-black leading-[1.05] mb-5"
            style={{ letterSpacing: '-0.035em' }}
          >
            QR codes that
            <br />
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              never trick you.
            </span>
          </h1>

          <p
            className="text-[17px] sm:text-[19px] text-apple-secondary max-w-xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.01em' }}
          >
            Generate beautiful, permanent QR codes — free forever.
            No hidden subscriptions. No codes that die after a trial.
          </p>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: '✓', text: 'No account required' },
              { icon: '✓', text: 'Static codes never expire' },
              { icon: '✓', text: 'PNG · SVG · JPG export' },
              { icon: '✓', text: 'Made in Australia 🇦🇺' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-sm text-apple-secondary">
                <span className="text-teal-500 font-semibold text-xs">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* QR Builder — the main event */}
        <QRBuilder />
      </div>

    </div>
  )
}
