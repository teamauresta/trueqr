'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { URLData } from '@/lib/qr/types'

interface Props {
  data: URLData
  onChange: (data: URLData) => void
}

export function URLInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url-input">Website URL</Label>
        <Input
          id="url-input"
          type="url"
          placeholder="yoursite.com.au"
          value={data.url}
          onChange={(e) => onChange({ url: e.target.value })}
        />
        <p className="text-xs text-slate-400">
          https:// is added automatically if omitted
        </p>
      </div>
    </div>
  )
}
