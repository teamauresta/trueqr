'use client'

import { Download } from 'lucide-react'
import { buildQRContent } from '@/lib/qr/formats'
import { generateQRSVG } from '@/lib/qr/generator'
import { formatDate } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/config'
import type { QRState } from '@/lib/qr/types'

interface Props {
  state: QRState
  dataURL: string
}

export function QRDownload({ state, dataURL }: Props) {
  const filename = (ext: string) => `trueqr-${state.type}-${formatDate()}.${ext}`
  const disabled = !dataURL

  const downloadPNG = () => {
    if (!dataURL) return
    const a = document.createElement('a')
    a.href = dataURL
    a.download = filename('png')
    a.click()
  }

  const downloadJPG = () => {
    if (!dataURL) return
    const canvas = document.createElement('canvas')
    canvas.width = 1024; canvas.height = 1024
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 1024, 1024)
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1024, 1024)
      const a = document.createElement('a')
      a.href = canvas.toDataURL('image/jpeg', 0.95)
      a.download = filename('jpg')
      a.click()
    }
    img.src = dataURL
  }

  const downloadSVG = async () => {
    const content = buildQRContent(state.type, state.data)
    if (!content) return
    const svg = await generateQRSVG(content, state.options)
    if (!svg) return
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = filename('svg'); a.click()
    URL.revokeObjectURL(url)
  }

  const formats = [
    { label: 'PNG', action: downloadPNG, primary: true },
    { label: 'SVG', action: downloadSVG, primary: false },
    { label: 'JPG', action: downloadJPG, primary: false },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-4">

      {/* Download buttons row */}
      <div className="flex items-center gap-2 w-full">
        {formats.map(({ label, action, primary }) => (
          <button
            key={label}
            onClick={action}
            disabled={disabled}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-[13px] font-semibold
              transition-all duration-150
              ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
              ${primary
                ? 'text-white'
                : 'text-apple-black'
              }`}
            style={primary
              ? {
                  background: disabled ? '#94a3b8' : 'linear-gradient(145deg, #14b8a6, #0d9488)',
                  boxShadow: disabled ? 'none' : '0 2px 8px rgba(13,148,136,0.3)',
                }
              : {
                  background: 'rgba(0,0,0,0.05)',
                }
            }
            onMouseEnter={e => {
              if (!disabled) {
                if (primary) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(13,148,136,0.35)'
                } else {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.09)'
                }
              }
            }}
            onMouseLeave={e => {
              if (primary) {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(13,148,136,0.3)'
              } else {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.05)'
              }
            }}
          >
            {primary && <Download className="h-3.5 w-3.5" />}
            {label}
          </button>
        ))}
      </div>

      {/* Trust signal */}
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
        <span className="text-[11px] text-apple-tertiary">
          Free forever · No account needed · No watermarks
        </span>
      </div>

      {/* Coffee — shown after QR is generated, only if supportUrl is configured */}
      {!disabled && SITE_CONFIG.supportUrl && (
        <a
          href={SITE_CONFIG.supportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-all duration-150"
          style={{
            background: 'rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(13,148,136,0.05)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,148,136,0.15)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.03)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.05)'
          }}
        >
          <span className="text-xl leading-none group-hover:scale-110 transition-transform duration-150 flex-shrink-0">☕</span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-apple-secondary group-hover:text-teal-700 transition-colors duration-150">
              Enjoying TrueQR?
            </p>
            <p className="text-[11px] text-apple-tertiary">Buy us a coffee — only if you want to</p>
          </div>
          <span className="text-[11px] text-apple-tertiary group-hover:text-teal-600 transition-colors duration-150 flex-shrink-0">→</span>
        </a>
      )}

    </div>
  )
}
