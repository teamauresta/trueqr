import { formatUrl } from '@/lib/utils'
import type {
  QRType, QRTypeData, URLData, TextData, WiFiData, EmailData,
  SMSData, PhoneData, VCardData, LocationData, WhatsAppData,
  GoogleReviewData, PayIDData, CalendarData,
} from './types'

export function buildQRContent(type: QRType, data: QRTypeData): string {
  switch (type) {
    case 'url': {
      const d = data as URLData
      return formatUrl(d.url)
    }

    case 'text': {
      const d = data as TextData
      return d.text.slice(0, 500)
    }

    case 'wifi': {
      const d = data as WiFiData
      const hidden = d.hidden ? 'true' : 'false'
      return `WIFI:T:${d.security};S:${escapeWifi(d.ssid)};P:${escapeWifi(d.password)};H:${hidden};;`
    }

    case 'email': {
      const d = data as EmailData
      const params: string[] = []
      if (d.subject) params.push(`subject=${encodeURIComponent(d.subject)}`)
      if (d.body) params.push(`body=${encodeURIComponent(d.body)}`)
      return `mailto:${d.to}${params.length ? '?' + params.join('&') : ''}`
    }

    case 'sms': {
      const d = data as SMSData
      return `SMSTO:${d.phone}:${d.message}`
    }

    case 'phone': {
      const d = data as PhoneData
      return `tel:${d.phone}`
    }

    case 'vcard': {
      const d = data as VCardData
      const lines = [
        'BEGIN:VCARD', 'VERSION:3.0',
        `N:${d.lastName};${d.firstName};;;`,
        `FN:${d.firstName} ${d.lastName}`.trim(),
      ]
      if (d.organization) lines.push(`ORG:${d.organization}`)
      if (d.title) lines.push(`TITLE:${d.title}`)
      if (d.phone) lines.push(`TEL;TYPE=CELL:${d.phone}`)
      if (d.email) lines.push(`EMAIL:${d.email}`)
      if (d.website) lines.push(`URL:${formatUrl(d.website)}`)
      if (d.address) lines.push(`ADR:;;${d.address};;;;`)
      lines.push('END:VCARD')
      return lines.join('\n')
    }

    case 'location': {
      const d = data as LocationData
      if (!d.lat || !d.lng) return ''
      return d.useGoogleMaps
        ? `https://www.google.com/maps?q=${d.lat},${d.lng}`
        : `geo:${d.lat},${d.lng}`
    }

    case 'whatsapp': {
      const d = data as WhatsAppData
      if (!d.phone) return ''
      const digits = d.phone.replace(/\D/g, '').replace(/^0/, '')
      const intl = digits.startsWith('61') ? digits : `61${digits}`
      const query = d.message ? `?text=${encodeURIComponent(d.message)}` : ''
      return `https://wa.me/${intl}${query}`
    }

    case 'googlereview': {
      const d = data as GoogleReviewData
      return d.reviewUrl.trim()
    }

    case 'payid': {
      const d = data as PayIDData
      if (!d.payid) return ''
      // payto URI scheme (RFC 8905) — supported by ANZ, CBA, NAB, Westpac etc.
      const params: string[] = []
      if (d.amount) params.push(`amount=AUD:${d.amount}`)
      if (d.name) params.push(`receiver-name=${encodeURIComponent(d.name)}`)
      if (d.reference) params.push(`message=${encodeURIComponent(d.reference)}`)
      const query = params.length ? `?${params.join('&')}` : ''
      return `payto://payid/${d.payid.trim()}${query}`
    }

    case 'calendar': {
      const d = data as CalendarData
      if (!d.title || !d.startDate) return ''

      const fmt = (date: string, time: string, allDay: boolean): string => {
        const [y, m, day] = date.split('-')
        if (allDay) return `${y}${m}${day}`
        const [h, min] = (time || '00:00').split(':')
        return `${y}${m}${day}T${h}${min}00`
      }

      const dtstart = fmt(d.startDate, d.startTime, d.allDay)
      const endDate = d.endDate || d.startDate
      const dtend = fmt(endDate, d.endTime, d.allDay)

      const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `SUMMARY:${escapeIcal(d.title)}`,
        d.allDay ? `DTSTART;VALUE=DATE:${dtstart}` : `DTSTART:${dtstart}`,
        d.allDay ? `DTEND;VALUE=DATE:${dtend}` : `DTEND:${dtend}`,
      ]
      if (d.location) lines.push(`LOCATION:${escapeIcal(d.location)}`)
      if (d.description) lines.push(`DESCRIPTION:${escapeIcal(d.description)}`)
      lines.push('END:VEVENT', 'END:VCALENDAR')
      return lines.join('\r\n')
    }

    default:
      return ''
  }
}

function escapeWifi(str: string): string {
  return str.replace(/([\\;,":])/g, '\\$1')
}

function escapeIcal(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}
