'use client'

import type { QROptions, ErrorCorrectionLevel } from '@/lib/qr/types'

interface Props {
  options: QROptions
  onChange: (options: QROptions) => void
}

const ERROR_LEVELS: { value: ErrorCorrectionLevel; label: string; desc: string }[] = [
  { value: 'L', label: 'L', desc: 'Low — 7% recovery' },
  { value: 'M', label: 'M', desc: 'Medium — 15% recovery' },
  { value: 'Q', label: 'Q', desc: 'Quartile — 25% recovery' },
  { value: 'H', label: 'H', desc: 'High — 30% recovery' },
]

export function QRCustomiser({ options, onChange }: Props) {
  return (
    <div className="space-y-6">

      {/* Colours */}
      <div>
        <span className="apple-label">Colours</span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 'fg', label: 'Foreground', key: 'foreground' as const },
            { id: 'bg', label: 'Background', key: 'background' as const },
          ].map(({ id, label, key }) => (
            <div key={id}>
              <p className="text-[12px] text-apple-secondary mb-2">{label}</p>
              <div
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150"
                style={{
                  background: 'rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <label
                  htmlFor={`${id}-color`}
                  className="cursor-pointer"
                  style={{ lineHeight: 0 }}
                >
                  <div
                    className="h-6 w-6 rounded-md shadow-inner-sm border border-black/10 flex-shrink-0"
                    style={{ backgroundColor: options[key] }}
                  />
                  <input
                    id={`${id}-color`}
                    type="color"
                    value={options[key]}
                    onChange={(e) => onChange({ ...options, [key]: e.target.value })}
                    className="sr-only"
                  />
                </label>
                <span className="text-[12px] font-mono text-apple-secondary">
                  {options[key].toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.05]" />

      {/* Error correction */}
      <div>
        <span className="apple-label">Error Correction</span>
        <div className="grid grid-cols-4 gap-1.5">
          {ERROR_LEVELS.map((level) => {
            const active = options.errorCorrection === level.value
            return (
              <button
                key={level.value}
                onClick={() => onChange({ ...options, errorCorrection: level.value })}
                title={level.desc}
                className={`py-2 rounded-xl text-[13px] font-semibold transition-all duration-150 cursor-pointer
                  ${active
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-black/[0.04] text-apple-secondary hover:bg-black/[0.08] hover:text-apple-black'
                  }`}
              >
                {level.label}
              </button>
            )
          })}
        </div>
        <p className="mt-2 text-[11px] text-apple-tertiary">
          Higher recovery tolerance = slightly larger code
        </p>
      </div>

    </div>
  )
}
