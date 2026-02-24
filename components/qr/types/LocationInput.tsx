'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { LocationData } from '@/lib/qr/types'

interface Props {
  data: LocationData
  onChange: (data: LocationData) => void
}

export function LocationInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="loc-lat">Latitude</Label>
          <Input
            id="loc-lat"
            placeholder="-37.8136"
            value={data.lat}
            onChange={(e) => onChange({ ...data, lat: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="loc-lng">Longitude</Label>
          <Input
            id="loc-lng"
            placeholder="144.9631"
            value={data.lng}
            onChange={(e) => onChange({ ...data, lng: e.target.value })}
          />
        </div>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={data.useGoogleMaps}
          onChange={(e) => onChange({ ...data, useGoogleMaps: e.target.checked })}
          className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
        />
        <span className="text-sm text-slate-700">Open in Google Maps</span>
      </label>
      <p className="text-xs text-slate-400">
        Example: Melbourne CBD is -37.8136, 144.9631
      </p>
    </div>
  )
}
