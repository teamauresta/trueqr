import Link from 'next/link'

export function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(245,245,247,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg text-white text-xs font-bold tracking-tight"
              style={{
                background: 'linear-gradient(145deg, #14b8a6, #0d9488)',
                boxShadow: '0 1px 4px rgba(13,148,136,0.35)',
              }}
            >
              QR
            </div>
            <span
              className="text-[15px] font-semibold text-apple-black"
              style={{ letterSpacing: '-0.02em' }}
            >
              TrueQR
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {[
              { href: '/', label: 'Generator' },
              { href: '/about', label: 'About' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-lg text-sm text-apple-secondary hover:text-apple-black hover:bg-black/5 transition-all duration-150 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Placeholder for future actions */}
          <div className="w-8" />

        </div>
      </div>
    </header>
  )
}
