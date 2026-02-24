# TrueQR — PROJECT.md

**Status:** ACTIVE  
**Path:** `projects/trueqr/`  
**Last Active:** 2026-02-24

---

## Overview

TrueQR is a Next.js 15 App Router + TypeScript web app — a free, no-signup QR code generator with 9 QR types. Positioned against "dark pattern" QR tools that deactivate codes on downgrade.

- **Tagline:** "The QR tool that doesn't trick you."
- **Accent:** teal `#0d9488` / `#14b8a6`
- **Design:** glassmorphism, clean, premium

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 App Router |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui primitives (hand-written) |
| QR generation | `qrcode` v1.5.4 |
| Icons | `lucide-react` |
| Utils | `clsx` + `tailwind-merge` |

---

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Full QR builder (9 types, live preview, download) |
| `/pricing` | 3-tier pricing (Free / Pro $9 / Agency $29) |
| `/about` | Brand story + anti-dark-pattern values |

---

## QR Types

1. **URL** — raw URL, auto https://
2. **Text** — raw text, 500 char limit
3. **WiFi** — `WIFI:T:WPA;S:{ssid};P:{pass};H:{hidden};;`
4. **Email** — `mailto:` with subject + body
5. **SMS** — `SMSTO:{phone}:{msg}`
6. **Phone** — `tel:{phone}`
7. **vCard** — full vCard 3.0
8. **Location** — `geo:{lat},{lng}` or Google Maps URL
9. **Crypto** — BTC/ETH/LTC/BCH/DASH URI format

---

## Architecture

```
lib/qr/types.ts      → QRType, interfaces, defaults
lib/qr/formats.ts    → buildQRContent(type, data) → string
lib/qr/generator.ts  → generateQRDataURL() + generateQRSVG()
lib/utils.ts         → cn(), formatUrl(), formatDate()

components/qr/QRBuilder.tsx    → state orchestrator (client)
components/qr/QRPreview.tsx    → live canvas preview
components/qr/QRCustomiser.tsx → colour pickers + error correction
components/qr/QRDownload.tsx   → PNG / SVG / JPG download
components/qr/types/           → 9 form components
```

---

## Build Status

- **`npm run build`:** ✅ PASS (exit 0)
- All 4 routes statically exported to `out/`
- TypeScript strict: clean
- Compiled JS: 134 kB first load (homepage), ~106 kB shared

---

## Known Issues / Notes

- Next.js 15.1.7 has a flagged security advisory (CVE-2025-66478). Upgrade to latest patched when deploying to prod.
- `qrcode` npm package handles PNG + SVG in browser via Canvas API — no server-side rendering of QR images (all in client components with `useEffect`).
- The `out/` directory is a static export — suitable for CDN/Vercel static hosting.

---

## Dev

```bash
cd /home/aibuilder/.openclaw/workspace/projects/trueqr
npm run dev      # localhost:3000
npm run build    # production build
```

---

## Next Steps

- [ ] Deploy to Vercel or serve via K3s nginx pod
- [ ] Add `npm run dev` dev server to a tmux session for live preview
- [ ] Upgrade Next.js to latest patched (CVE-2025-66478)
- [ ] Consider adding analytics page for Pro tier
- [ ] Add `/api/qr` route if server-side QR generation ever needed
- [ ] Mobile nav hamburger menu
- [ ] SEO: per-page OG images

---

## Progress Log

### 2026-02-24 — Initial scaffold
- Created full project structure (38 files)
- All 9 QR type input forms
- Live QR preview with debounce via useEffect
- PNG / SVG / JPG download (no signup wall)
- QRCustomiser with colour pickers + error correction level
- Pro feature teasers (locked)
- Pricing page (3 tiers) with trust callout
- About page with dark pattern explainer
- Glassmorphism design, floating teal orbs
- `npm run build` → ✅ PASS, exit 0, static export complete
