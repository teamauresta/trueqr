import { SITE_CONFIG } from '@/lib/config'

export default function TermsPage() {
  return (
    <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">

      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">Legal</p>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: February 2026</p>

      <div className="space-y-8 text-sm text-slate-600">

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Using {SITE_CONFIG.name}</h2>
          <p className="leading-relaxed">
            {SITE_CONFIG.name} is a free, browser-based QR code generator. By using this site,
            you agree to use it for lawful purposes only. You may generate and download QR codes
            for personal or commercial use without restriction.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Your content</h2>
          <p className="leading-relaxed">
            You are solely responsible for the content you encode into QR codes generated via{' '}
            {SITE_CONFIG.name}. Do not use {SITE_CONFIG.name} to create QR codes that link to
            illegal content, malware, phishing pages, or content that violates the rights of
            others. We reserve the right to block abuse of this service.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">No warranties</h2>
          <p className="leading-relaxed">
            {SITE_CONFIG.name} is provided &ldquo;as is&rdquo; without warranties of any kind.
            We make no guarantees about uptime, accuracy, or fitness for a particular purpose.
            QR codes generated are static and will continue to work regardless of{' '}
            {SITE_CONFIG.name}&apos;s operational status — but we accept no liability for how
            generated codes are used.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Intellectual property</h2>
          <p className="leading-relaxed">
            QR codes you generate using {SITE_CONFIG.name} are yours. The {SITE_CONFIG.name}{' '}
            source code is licensed under AGPL-3.0 — you are free to use, modify, and
            redistribute it under the terms of that licence. The {SITE_CONFIG.name} name and
            logo of this hosted instance remain the property of the operator.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        {SITE_CONFIG.supportUrl && (
          <>
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">Optional donations</h2>
              <p className="leading-relaxed">
                Any donations made via this site are entirely voluntary. They are not purchases of
                goods or services, carry no refund obligation, and do not entitle you to any
                additional features or support.
              </p>
            </section>
            <div className="h-px bg-black/[0.05]" />
          </>
        )}

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Open source</h2>
          <p className="leading-relaxed">
            {SITE_CONFIG.name} is open source under the{' '}
            <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">
              GNU Affero General Public Licence v3.0
            </a>.
            Anyone who modifies and runs this software as a network service must make their
            source code available under the same licence.
          </p>
        </section>

        <div className="h-px bg-black/[0.05]" />

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Contact</h2>
          <p className="leading-relaxed">
            Questions?{' '}
            {SITE_CONFIG.communityUrl ? (
              <>
                Come chat on{' '}
                <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">
                  Discord
                </a>.
              </>
            ) : (
              <>Open an issue on <a href="https://github.com/teamauresta/trueqr" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">GitHub</a>.</>
            )}
          </p>
        </section>

      </div>
    </div>
  )
}
