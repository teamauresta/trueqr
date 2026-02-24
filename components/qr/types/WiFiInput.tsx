'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { WiFiData } from '@/lib/qr/types'

interface Props {
  data: WiFiData
  onChange: (data: WiFiData) => void
}

export function WiFiInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
        <Input
          id="wifi-ssid"
          placeholder="My WiFi Network"
          value={data.ssid}
          onChange={(e) => onChange({ ...data, ssid: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="wifi-password">Password</Label>
        <Input
          id="wifi-password"
          type="password"
          placeholder="••••••••"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="wifi-security">Security Type</Label>
        <select
          id="wifi-security"
          value={data.security}
          onChange={(e) =>
            onChange({ ...data, security: e.target.value as WiFiData['security'] })
          }
          className="flex h-9 w-full rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">None (open)</option>
        </select>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={data.hidden}
          onChange={(e) => onChange({ ...data, hidden: e.target.checked })}
          className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
        />
        <span className="text-sm text-slate-700">Hidden network</span>
      </label>
    </div>
  )
}
