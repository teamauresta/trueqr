import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} className="bg-apple-gray">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-md text-white text-[10px] font-bold"
              style={{ background: 'linear-gradient(145deg, #14b8a6, #0d9488)' }}
            >
              QR
            </div>
            <span className="text-sm font-semibold text-apple-black" style={{ letterSpacing: '-0.01em' }}>
              TrueQR
            </span>
            <span className="text-apple-tertiary text-sm">·</span>
            <span className="text-xs text-apple-tertiary">Made in Australia 🇦🇺</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: '/', label: 'Generator' },
              { href: '/about', label: 'About' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] text-apple-secondary hover:text-apple-black transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>

        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <p className="text-[11px] text-apple-tertiary text-center">
            © {new Date().getFullYear()} TrueQR · The QR tool that doesn&apos;t trick you. · Free static codes, forever.
          </p>
        </div>
      </div>
    </footer>
  )
}
