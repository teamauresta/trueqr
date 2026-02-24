# TrueQR

**The QR tool that doesn't trick you.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-trueqr.app-14b8a6?style=flat-square)](https://trueqr.app)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](https://www.gnu.org/licenses/agpl-3.0)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=flat-square)](https://nextjs.org)

> Free, permanent QR code generator. No signup. No dark patterns. No codes that stop working after a billing lapse.

---

## Why TrueQR?

Most QR code generators use a redirect trick: your QR code doesn't encode your URL — it encodes *their* redirect URL. They can deactivate your code the moment you stop paying.

Businesses have printed thousands of flyers and business cards only to discover their QR codes stopped working.

**TrueQR generates static QR codes.** Your content is encoded directly into the image. No redirect. No server call. Works forever — with or without us.

---

## Features

- **12 QR code types** — URL, Text, WiFi, Email, SMS, Phone, vCard, Location, WhatsApp, Google Review, PayID (🇦🇺), Calendar Event
- **Static codes, forever** — no expiry, no deactivation, no redirect servers
- **No account required** — generate and download instantly
- **PNG, SVG, JPG** download
- **Custom colours** and error correction level
- **100% client-side** — your data never leaves your browser
- **No watermarks, no rate limits**
- **Open source** — AGPL-3.0, verify every claim

---

## Live Demo

👉 **[trueqr.app](https://trueqr.app)**

---

## Self-Hosting

TrueQR is a static Next.js site. Host it anywhere: Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own server.

### Quick start

```bash
git clone https://github.com/teamauresta/trueqr.git
cd trueqr
npm install
cp .env.example .env.local   # optional — see below
npm run build                # outputs to /out
```

Serve the `out/` directory with any static file server.

### Environment variables

All variables are optional. See [`.env.example`](.env.example) for details.

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_OPERATOR_NAME` | `TrueQR` | Your deployment name |
| `NEXT_PUBLIC_SITE_URL` | `https://trueqr.app` | Your public URL |
| `NEXT_PUBLIC_SUPPORT_URL` | _(empty)_ | Optional support/donation URL — hides the button entirely if empty |
| `NEXT_PUBLIC_COMMUNITY_URL` | _(empty)_ | Discord / community link — falls back to GitHub if empty |

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/teamauresta/trueqr)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/teamauresta/trueqr)

---

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router, static export
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v3](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [qrcode](https://github.com/soldair/node-qrcode) — QR generation

---

## Docker

> 🔜 Docker support coming soon. PRs welcome.

---

## Contributing

PRs and issues welcome. Please:

1. Fork the repo and create a feature branch
2. Run `npm run build` to confirm no TypeScript errors before submitting
3. Keep PRs focused — one feature or fix per PR

---

## Roadmap

- [ ] Docker + docker-compose for self-hosting
- [ ] Bulk QR generation (CSV upload)
- [ ] Custom logo / centre image
- [ ] Dot and corner shape styles
- [ ] Scan analytics (opt-in, self-hosted)

---

## License

[GNU Affero General Public License v3.0](LICENSE) — if you run a modified version as a network service, you must make your source code available under the same licence.

---

*Built with ❤️ in Australia. Free forever.*
