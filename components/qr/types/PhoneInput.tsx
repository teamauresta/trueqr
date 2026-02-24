'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { PhoneData } from '@/lib/qr/types'

interface Props {
  data: PhoneData
  onChange: (data: PhoneData) => void
}

export function PhoneInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone-number">Phone Number</Label>
        <Input
          id="phone-number"
          type="tel"
          placeholder="+61 4xx xxx xxx"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
        <p className="text-xs text-slate-400">
          Include country code for international numbers
        </p>
      </div>
    </div>
  )
}
