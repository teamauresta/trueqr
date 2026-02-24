'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { GoogleReviewData } from '@/lib/qr/types'

interface Props {
  data: GoogleReviewData
  onChange: (data: GoogleReviewData) => void
}

export function GoogleReviewInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="review-url">Google Review Link</Label>
        <Input
          id="review-url"
          type="url"
          placeholder="https://g.page/r/YOUR_PLACE_ID/review"
          value={data.reviewUrl}
          onChange={(e) => onChange({ reviewUrl: e.target.value })}
        />
      </div>

      {/* How to find it */}
      <div
        className="rounded-xl p-4 space-y-2"
        style={{ background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.1)' }}
      >
        <p className="text-[12px] font-semibold text-teal-700">
          How to get your review link
        </p>
        <ol className="space-y-1.5 text-[12px] text-apple-secondary list-none">
          {[
            'Go to Google Business Profile (business.google.com)',
            'Select your business',
            'Click "Get more reviews" or "Share review form"',
            'Copy the short link — paste it above',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="flex-shrink-0 h-4 w-4 rounded-full text-[10px] font-bold flex items-center justify-center text-white mt-px"
                style={{ background: '#0d9488' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <a
          href="https://business.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[12px] font-medium text-teal-600 hover:text-teal-700 transition-colors mt-1"
        >
          Open Google Business Profile →
        </a>
      </div>
    </div>
  )
}
