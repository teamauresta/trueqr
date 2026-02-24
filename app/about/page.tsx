import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Zap, Heart, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

const values = [
  {
    icon: Shield,
    title: 'Transparency first',
    description:
      'Free means free. We tell you exactly what you get and how it works. No bait-and-switch, no hidden catches.',
  },
  {
    icon: Zap,
    title: 'Static codes, forever',
    description:
      'Your QR codes are encoded directly into the image. They don\'t route through our servers. They can\'t be deactivated — ever.',
  },
  {
    icon: Heart,
    title: 'No dark patterns',
    description:
      'No fake countdown timers. No "your code expires soon" emails. No forced signups. Just a tool that works.',
  },
]

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 right-0 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4">
          <Badge variant="secondary" className="bg-teal-50 text-teal-700 border border-teal-100">
            Open Source · AGPL-3.0
          </Badge>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          Why we built {SITE_CONFIG.name}
        </h1>

        {/* The problem */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/70 px-6 py-5 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-amber-800">
            <p className="font-semibold">The dark pattern problem</p>
            <p>
              Most QR code generators use a clever trick: your QR code doesn&apos;t actually
              encode your URL — it encodes <em>their</em> redirect URL. That means they can
              deactivate your code the moment you downgrade, cancel, or stop paying.
            </p>
            <p>
              Businesses have printed thousands of flyers, posters, and business cards only to
              discover their QR codes stopped working because of a billing lapse.
            </p>
          </div>
        </div>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          {SITE_CONFIG.name} generates <strong>static QR codes</strong>. Your content is encoded
          directly into the QR image. There&apos;s no redirect, no tracking pixel, no server call
          when someone scans it. Once downloaded, the code works forever — with or without us.
        </p>

        <p className="text-slate-600 mb-10 leading-relaxed">
          We built {SITE_CONFIG.name} to be the tool we wish existed: fast, honest, completely
          free, and open source — so the community can verify every claim we make.
        </p>

        {/* Values */}
        <div className="space-y-4 mb-12">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="pt-5 pb-5 flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Generator CTA */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-150"
            style={{
              background: 'linear-gradient(145deg, #14b8a6, #0d9488)',
              boxShadow: '0 2px 8px rgba(13,148,136,0.3)',
            }}
          >
            Try {SITE_CONFIG.name} →
          </Link>
        </div>

        {/* Support link — only shown if supportUrl is configured */}
        {SITE_CONFIG.supportUrl && (
          <div className="pt-8 border-t border-black/[0.06]">
            <p className="text-xs text-slate-400 mb-2">Want to support this project?</p>
            <a
              href={SITE_CONFIG.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-600 transition-colors duration-150"
            >
              <span className="underline underline-offset-2">Support {SITE_CONFIG.name}</span>
              <span className="text-xs text-slate-300 ml-1">— totally optional</span>
            </a>
          </div>
        )}

      </div>
    </div>
  )
}
