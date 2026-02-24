'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { PayIDData } from '@/lib/qr/types'

interface Props {
  data: PayIDData
  onChange: (data: PayIDData) => void
}

export function PayIDInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="payid-id">PayID</Label>
        <Input
          id="payid-id"
          type="text"
          placeholder="0400 000 000 or name@bank.com or ABN"
          value={data.payid}
          onChange={(e) => onChange({ ...data, payid: e.target.value })}
        />
        <p className="mt-1.5 text-[11px] text-apple-tertiary">
          Phone number, email address, ABN, or organisation ID registered as your PayID.
        </p>
      </div>

      <div>
        <Label htmlFor="payid-name">Your Name / Business Name</Label>
        <Input
          id="payid-name"
          type="text"
          placeholder="Acme Plumbing Pty Ltd"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
        <p className="mt-1.5 text-[11px] text-apple-tertiary">
          Shown to the payer so they know who they&apos;re sending to.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="payid-amount">
            Amount (AUD){' '}
            <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
          </Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-apple-tertiary text-sm">$</span>
            <Input
              id="payid-amount"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={data.amount}
              onChange={(e) => onChange({ ...data, amount: e.target.value })}
              className="pl-7"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="payid-ref">
            Reference{' '}
            <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
          </Label>
          <Input
            id="payid-ref"
            type="text"
            placeholder="Invoice #123"
            value={data.reference}
            onChange={(e) => onChange({ ...data, reference: e.target.value })}
          />
        </div>
      </div>

      <div
        className="rounded-xl px-4 py-3 text-[12px] text-amber-800"
        style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
      >
        💡 <strong>Tip:</strong> Leave amount blank for open payments (customer enters what they owe).
        Great for market stalls, tradies, and service businesses.
      </div>
    </div>
  )
}
