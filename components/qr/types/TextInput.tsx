'use client'

import { Label } from '@/components/ui/label'
import type { TextData } from '@/lib/qr/types'

interface Props {
  data: TextData
  onChange: (data: TextData) => void
}

export function TextInput({ data, onChange }: Props) {
  const remaining = 500 - data.text.length

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="text-input">Plain Text</Label>
          <span className={`text-xs ${remaining < 50 ? 'text-orange-500' : 'text-slate-400'}`}>
            {remaining} chars left
          </span>
        </div>
        <textarea
          id="text-input"
          rows={5}
          maxLength={500}
          placeholder="Enter your text here…"
          value={data.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className="flex w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        />
      </div>
    </div>
  )
}
