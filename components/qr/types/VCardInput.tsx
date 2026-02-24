'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { VCardData } from '@/lib/qr/types'

interface Props {
  data: VCardData
  onChange: (data: VCardData) => void
}

export function VCardInput({ data, onChange }: Props) {
  const set = (key: keyof VCardData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...data, [key]: e.target.value })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="vc-first">First Name</Label>
          <Input id="vc-first" placeholder="Jane" value={data.firstName} onChange={set('firstName')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vc-last">Last Name</Label>
          <Input id="vc-last" placeholder="Smith" value={data.lastName} onChange={set('lastName')} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-org">Organisation</Label>
        <Input id="vc-org" placeholder="Acme Pty Ltd" value={data.organization} onChange={set('organization')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-title">Job Title</Label>
        <Input id="vc-title" placeholder="CEO" value={data.title} onChange={set('title')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-phone">Phone</Label>
        <Input id="vc-phone" type="tel" placeholder="+61 4xx xxx xxx" value={data.phone} onChange={set('phone')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-email">Email</Label>
        <Input id="vc-email" type="email" placeholder="jane@company.com.au" value={data.email} onChange={set('email')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-website">Website</Label>
        <Input id="vc-website" placeholder="yoursite.com.au" value={data.website} onChange={set('website')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vc-address">Address</Label>
        <Input id="vc-address" placeholder="123 Collins St, Melbourne VIC 3000" value={data.address} onChange={set('address')} />
      </div>
    </div>
  )
}
