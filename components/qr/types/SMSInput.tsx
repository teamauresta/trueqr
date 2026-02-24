'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { SMSData } from '@/lib/qr/types'

interface Props {
  data: SMSData
  onChange: (data: SMSData) => void
}

export function SMSInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="sms-phone">Phone Number</Label>
        <Input
          id="sms-phone"
          type="tel"
          placeholder="+61 4xx xxx xxx"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="sms-message">Message (optional)</Label>
        <textarea
          id="sms-message"
          rows={4}
          placeholder="Pre-filled SMS message…"
          value={data.message}
          onChange={(e) => onChange({ ...data, message: e.target.value })}
          className="flex w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 resize-none"
        />
      </div>
    </div>
  )
}
