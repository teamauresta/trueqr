'use client'

import { useEffect, useState } from 'react'
import { generateQRDataURL } from '@/lib/qr/generator'
import { buildQRContent } from '@/lib/qr/formats'
import type { QRState } from '@/lib/qr/types'

interface Props {
  state: QRState
  onDataURL: (url: string) => void
}

export function QRPreview({ state, onDataURL }: Props) {
  const [dataURL, setDataURL] = useState<string>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const content = buildQRContent(state.type, state.data)
    if (!content) {
      setDataURL('')
      onDataURL('')
      return
    }

    setLoading(true)
    generateQRDataURL(content, state.options).then((url) => {
      setDataURL(url)
      onDataURL(url)
      setLoading(false)
    })
  }, [state, onDataURL])

  return (
    <div className="flex flex-col items-center w-full">

      {/* QR frame — premium card feel */}
      <div
        className="relative flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          width: 280,
          height: 280,
          background: '#ffffff',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)',
        }}
      >
        {/* Loading shimmer */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 backdrop-blur-sm">
            <div
              className="h-7 w-7 rounded-full border-2 border-teal-500/30 border-t-teal-500 animate-spin"
            />
          </div>
        )}

        {dataURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dataURL}
            alt="Generated QR code"
            width={280}
            height={280}
            className="block animate-scale-in"
            style={{ imageRendering: 'pixelated' }}
          />
        ) : (
          <div className="flex flex-col items-center gap-4 px-8 text-center">
            {/* Placeholder pattern — deterministic so SSR matches client */}
            <div className="grid grid-cols-5 gap-1 opacity-10">
              {[1,0,1,1,0, 0,1,0,1,1, 1,1,0,0,1, 0,1,1,0,1, 1,0,1,1,0].map((on, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-sm bg-apple-black"
                  style={{ opacity: on }}
                />
              ))}
            </div>
            <p className="text-[13px] text-apple-tertiary leading-snug">
              Enter content above to generate your QR code
            </p>
          </div>
        )}
      </div>

      {/* Scan hint */}
      {dataURL && (
        <p className="mt-3 text-[12px] text-apple-tertiary text-center animate-fade-in">
          Scan with any camera app
        </p>
      )}

    </div>
  )
}
