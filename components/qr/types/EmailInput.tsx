'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { EmailData } from '@/lib/qr/types'

interface Props {
  data: EmailData
  onChange: (data: EmailData) => void
}

export function EmailInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email-to">To</Label>
        <Input
          id="email-to"
          type="email"
          placeholder="hello@example.com.au"
          value={data.to}
          onChange={(e) => onChange({ ...data, to: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-subject">Subject (optional)</Label>
        <Input
          id="email-subject"
          placeholder="Subject line"
          value={data.subject}
          onChange={(e) => onChange({ ...data, subject: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-body">Body (optional)</Label>
        <textarea
          id="email-body"
          rows={4}
          placeholder="Email body…"
          value={data.body}
          onChange={(e) => onChange({ ...data, body: e.target.value })}
          className="flex w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 resize-none"
        />
      </div>
    </div>
  )
}
