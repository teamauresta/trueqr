'use client'

import { useState, useCallback } from 'react'
import {
  Globe, AlignLeft, Wifi, Mail, MessageSquare, Phone,
  User, MapPin, MessageCircle, Star, CreditCard, CalendarDays,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { QRPreview } from './QRPreview'
import { QRCustomiser } from './QRCustomiser'
import { QRDownload } from './QRDownload'
import { URLInput } from './types/URLInput'
import { TextInput } from './types/TextInput'
import { WiFiInput } from './types/WiFiInput'
import { EmailInput } from './types/EmailInput'
import { SMSInput } from './types/SMSInput'
import { PhoneInput } from './types/PhoneInput'
import { VCardInput } from './types/VCardInput'
import { LocationInput } from './types/LocationInput'
import { WhatsAppInput } from './types/WhatsAppInput'
import { GoogleReviewInput } from './types/GoogleReviewInput'
import { PayIDInput } from './types/PayIDInput'
import { CalendarInput } from './types/CalendarInput'
import {
  type QRType,
  type QRState,
  type QRTypeData,
  type URLData,
  type TextData,
  type WiFiData,
  type EmailData,
  type SMSData,
  type PhoneData,
  type VCardData,
  type LocationData,
  type WhatsAppData,
  type GoogleReviewData,
  type PayIDData,
  type CalendarData,
  QR_TYPE_LABELS,
  DEFAULT_OPTIONS,
} from '@/lib/qr/types'

const DEFAULT_DATA: Record<QRType, QRTypeData> = {
  url: { url: '' } as URLData,
  text: { text: '' } as TextData,
  wifi: { ssid: '', password: '', security: 'WPA', hidden: false } as WiFiData,
  email: { to: '', subject: '', body: '' } as EmailData,
  sms: { phone: '', message: '' } as SMSData,
  phone: { phone: '' } as PhoneData,
  vcard: {
    firstName: '', lastName: '', organization: '', title: '',
    phone: '', email: '', website: '', address: '',
  } as VCardData,
  location: { lat: '', lng: '', useGoogleMaps: false } as LocationData,
  whatsapp: { phone: '', message: '' } as WhatsAppData,
  googlereview: { reviewUrl: '' } as GoogleReviewData,
  payid: { payid: '', name: '', amount: '', reference: '' } as PayIDData,
  calendar: {
    title: '', location: '', startDate: '', startTime: '',
    endDate: '', endTime: '', description: '', allDay: false,
  } as CalendarData,
}

const QR_TYPES = Object.keys(QR_TYPE_LABELS) as QRType[]

const QR_TYPE_ICONS: Record<QRType, LucideIcon> = {
  url: Globe,
  text: AlignLeft,
  wifi: Wifi,
  email: Mail,
  sms: MessageSquare,
  phone: Phone,
  vcard: User,
  location: MapPin,
  whatsapp: MessageCircle,
  googlereview: Star,
  payid: CreditCard,
  calendar: CalendarDays,
}

export function QRBuilder() {
  const [state, setState] = useState<QRState>({
    type: 'url',
    data: DEFAULT_DATA.url,
    options: DEFAULT_OPTIONS,
  })
  const [dataURL, setDataURL] = useState('')

  const handleTypeChange = (type: QRType) => {
    setState((prev) => ({ ...prev, type, data: DEFAULT_DATA[type] }))
  }

  const handleDataChange = (data: QRTypeData) => {
    setState((prev) => ({ ...prev, data }))
  }

  const handleOptionsChange = (options: typeof state.options) => {
    setState((prev) => ({ ...prev, options }))
  }

  const handleDataURL = useCallback((url: string) => {
    setDataURL(url)
  }, [])

  const renderInput = () => {
    switch (state.type) {
      case 'url':          return <URLInput data={state.data as URLData} onChange={handleDataChange} />
      case 'text':         return <TextInput data={state.data as TextData} onChange={handleDataChange} />
      case 'wifi':         return <WiFiInput data={state.data as WiFiData} onChange={handleDataChange} />
      case 'email':        return <EmailInput data={state.data as EmailData} onChange={handleDataChange} />
      case 'sms':          return <SMSInput data={state.data as SMSData} onChange={handleDataChange} />
      case 'phone':        return <PhoneInput data={state.data as PhoneData} onChange={handleDataChange} />
      case 'vcard':        return <VCardInput data={state.data as VCardData} onChange={handleDataChange} />
      case 'location':     return <LocationInput data={state.data as LocationData} onChange={handleDataChange} />
      case 'whatsapp':     return <WhatsAppInput data={state.data as WhatsAppData} onChange={handleDataChange} />
      case 'googlereview': return <GoogleReviewInput data={state.data as GoogleReviewData} onChange={handleDataChange} />
      case 'payid':        return <PayIDInput data={state.data as PayIDData} onChange={handleDataChange} />
      case 'calendar':     return <CalendarInput data={state.data as CalendarData} onChange={handleDataChange} />
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">

      {/* ── LEFT PANEL ── */}
      <div className="space-y-4">

        {/* QR type grid — 4 columns, clean icon grid */}
        <div className="apple-card p-3">
          <div
            className="grid grid-cols-4 sm:grid-cols-6 gap-1.5"
            role="tablist"
            aria-label="QR code type"
          >
            {QR_TYPES.map((type) => {
              const active = state.type === type
              const Icon = QR_TYPE_ICONS[type]
              return (
                <button
                  key={type}
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleTypeChange(type)}
                  className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl
                    text-[11px] font-medium transition-all duration-150 ease-out cursor-pointer
                    ${active
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-apple-secondary hover:text-apple-black hover:bg-black/[0.06] bg-black/[0.02]'
                    }`}
                >
                  <Icon className={`h-[18px] w-[18px] ${active ? 'text-white' : 'text-apple-secondary'}`} strokeWidth={1.75} />
                  <span className="leading-tight text-center">{QR_TYPE_LABELS[type]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Input form */}
        <div className="apple-card p-6">
          <div className="animate-fade-in" key={state.type}>
            {renderInput()}
          </div>
        </div>

        {/* Customiser */}
        <div className="apple-card p-6">
          <QRCustomiser options={state.options} onChange={handleOptionsChange} />
        </div>

      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="lg:sticky lg:top-20 space-y-4">
        <div className="apple-card p-8 flex flex-col items-center gap-6">
          <QRPreview state={state} onDataURL={handleDataURL} />
          <QRDownload state={state} dataURL={dataURL} />
        </div>
      </div>

    </div>
  )
}
