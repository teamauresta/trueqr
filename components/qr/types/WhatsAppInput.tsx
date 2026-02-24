'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { WhatsAppData } from '@/lib/qr/types'

interface Props {
  data: WhatsAppData
  onChange: (data: WhatsAppData) => void
}

export function WhatsAppInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="wa-phone">Phone Number</Label>
        <Input
          id="wa-phone"
          type="tel"
          placeholder="+61 4xx xxx xxx"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
        <p className="mt-1.5 text-[11px] text-apple-tertiary">
          Australian numbers: enter with or without +61. International numbers: include country code.
        </p>
      </div>

      <div>
        <Label htmlFor="wa-message">
          Pre-filled Message{' '}
          <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
        </Label>
        <textarea
          id="wa-message"
          rows={3}
          placeholder="Hi, I'd like to enquire about…"
          value={data.message}
          onChange={(e) => onChange({ ...data, message: e.target.value })}
          className="apple-input resize-none"
        />
        <p className="mt-1.5 text-[11px] text-apple-tertiary">
          When scanned, WhatsApp opens with this message pre-typed for the customer.
        </p>
      </div>
    </div>
  )
}
