'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { CalendarData } from '@/lib/qr/types'

interface Props {
  data: CalendarData
  onChange: (data: CalendarData) => void
}

export function CalendarInput({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cal-title">Event Title</Label>
        <Input
          id="cal-title"
          type="text"
          placeholder="Summer BBQ, Team Meeting, Market Day…"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
      </div>

      {/* All day toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={data.allDay}
          onClick={() => onChange({ ...data, allDay: !data.allDay })}
          className={`relative inline-flex h-6 w-10 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200
            ${data.allDay ? 'bg-teal-500' : 'bg-black/10'}`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 mt-0.5
              ${data.allDay ? 'translate-x-4' : 'translate-x-0.5'}`}
          />
        </button>
        <span className="text-sm text-apple-secondary">All day event</span>
      </div>

      {/* Start */}
      <div className={`grid gap-3 ${data.allDay ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div>
          <Label htmlFor="cal-start-date">Start Date</Label>
          <Input
            id="cal-start-date"
            type="date"
            value={data.startDate}
            onChange={(e) => onChange({ ...data, startDate: e.target.value })}
          />
        </div>
        {!data.allDay && (
          <div>
            <Label htmlFor="cal-start-time">Start Time</Label>
            <Input
              id="cal-start-time"
              type="time"
              value={data.startTime}
              onChange={(e) => onChange({ ...data, startTime: e.target.value })}
            />
          </div>
        )}
      </div>

      {/* End */}
      <div className={`grid gap-3 ${data.allDay ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div>
          <Label htmlFor="cal-end-date">
            End Date{' '}
            <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
          </Label>
          <Input
            id="cal-end-date"
            type="date"
            value={data.endDate}
            onChange={(e) => onChange({ ...data, endDate: e.target.value })}
          />
        </div>
        {!data.allDay && (
          <div>
            <Label htmlFor="cal-end-time">End Time</Label>
            <Input
              id="cal-end-time"
              type="time"
              value={data.endTime}
              onChange={(e) => onChange({ ...data, endTime: e.target.value })}
            />
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="cal-location">
          Location{' '}
          <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
        </Label>
        <Input
          id="cal-location"
          type="text"
          placeholder="12 Smith St, Melbourne VIC 3000"
          value={data.location}
          onChange={(e) => onChange({ ...data, location: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="cal-desc">
          Description{' '}
          <span className="font-normal text-apple-tertiary normal-case tracking-normal">(optional)</span>
        </Label>
        <textarea
          id="cal-desc"
          rows={2}
          placeholder="BYO, free entry, RSVP to…"
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
          className="apple-input resize-none"
        />
      </div>

      <div
        className="rounded-xl px-4 py-3 text-[12px] text-teal-800"
        style={{ background: 'rgba(13,148,136,0.06)', border: '1px solid rgba(13,148,136,0.12)' }}
      >
        📅 When scanned, this opens an &ldquo;Add to Calendar&rdquo; prompt on iOS, Android, and most QR apps.
      </div>
    </div>
  )
}
