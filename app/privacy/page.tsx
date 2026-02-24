import { SITE_CONFIG } from '@/lib/config'

export default function PrivacyPage() {
  return (
    <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">

      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">Legal</p>
      <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{ letterSpacing: '-0.025em' }}>Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: February 2026</p>

      <div className="prose prose-slate prose-base max-w-none space-y-8">

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">The short version</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {SITE_CONFIG.name} generates QR codes <strong>entirely in your browser</strong>. Your
            data never leaves your device. We don&apos;t collect it, store it, or share it —
            because we never see it in the first place.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">What we collect</h2>
          <p className="text-base text-slate-600 leading-relaxed mb-3">Almost nothing. Specifically:</p>
          <ul className="space-y-2 text-base text-slate-600">
            <li className="flex gap-2">
              <span className="text-teal-600 font-bold mt-0.5">✓</span>
              <span><strong>QR code content:</strong> Processed entirely in your browser. Never sent to any server.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600 font-bold mt-0.5">✓</span>
              <span><strong>No account data:</strong> {SITE_CONFIG.name} requires no signup, login, or personal information.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600 font-bold mt-0.5">✓</span>
              <span><strong>Basic analytics:</strong> The hosting provider may collect anonymous page-view counts. No cookies, no fingerprinting, no personal data.</span>
            </li>
          </ul>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Cookies</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {SITE_CONFIG.name} does not use cookies for tracking, advertising, or analytics. Your
            browser may cache static assets (CSS, JS) for performance — this is standard browser
            behaviour and contains no personal data.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Third-party services</h2>
          <ul className="space-y-2 text-base text-slate-600">
            <li className="flex gap-2">
              <span className="text-slate-400 mt-0.5">→</span>
              <span><strong>Hosting provider:</strong> Hosts this website and may log anonymous request metadata per their own privacy policy.</span>
            </li>
            {SITE_CONFIG.supportUrl && (
              <li className="flex gap-2">
                <span className="text-slate-400 mt-0.5">→</span>
                <span><strong>Payment processor:</strong> If you choose to make an optional donation, your payment is handled by a third-party payment processor. {SITE_CONFIG.name} never receives your payment details.</span>
              </li>
            )}
          </ul>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Your QR code data</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The URLs, Wi-Fi passwords, contact details, or any other content you enter to generate
            a QR code are processed <strong>locally in your browser</strong> using JavaScript.
            This data is never transmitted to any server — there is no server-side component
            involved in QR code generation.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Contact</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Questions about privacy?{' '}
            {SITE_CONFIG.communityUrl ? (
              <>
                Come chat with us on{' '}
                <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">
                  Discord
                </a>.
              </>
            ) : (
              <>Please open an issue on our <a href="https://github.com/teamauresta/trueqr" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">GitHub repository</a>.</>
            )}
          </p>
        </section>

      </div>
    </div>
  )
}
