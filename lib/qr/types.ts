export type QRType =
  | 'url'
  | 'text'
  | 'wifi'
  | 'email'
  | 'sms'
  | 'phone'
  | 'vcard'
  | 'location'
  | 'whatsapp'
  | 'googlereview'
  | 'payid'
  | 'calendar'

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

export interface QROptions {
  foreground: string
  background: string
  errorCorrection: ErrorCorrectionLevel
  size: number
}

export interface URLData { url: string }
export interface TextData { text: string }
export interface WiFiData {
  ssid: string
  password: string
  security: 'WPA' | 'WEP' | 'nopass'
  hidden: boolean
}
export interface EmailData { to: string; subject: string; body: string }
export interface SMSData { phone: string; message: string }
export interface PhoneData { phone: string }
export interface VCardData {
  firstName: string; lastName: string; organization: string; title: string
  phone: string; email: string; website: string; address: string
}
export interface LocationData { lat: string; lng: string; useGoogleMaps: boolean }
export interface WhatsAppData { phone: string; message: string }
export interface GoogleReviewData { reviewUrl: string }
export interface PayIDData {
  payid: string        // phone, email, ABN, or org ID
  name: string         // payee display name
  amount: string       // optional, e.g. "25.00"
  reference: string    // optional payment reference
}
export interface CalendarData {
  title: string
  location: string
  startDate: string    // YYYY-MM-DD
  startTime: string    // HH:MM
  endDate: string
  endTime: string
  description: string
  allDay: boolean
}

export type QRTypeData =
  | URLData | TextData | WiFiData | EmailData | SMSData
  | PhoneData | VCardData | LocationData | WhatsAppData | GoogleReviewData
  | PayIDData | CalendarData

export interface QRState {
  type: QRType
  data: QRTypeData
  options: QROptions
}

export const QR_TYPE_LABELS: Record<QRType, string> = {
  url: 'URL',
  text: 'Text',
  wifi: 'WiFi',
  email: 'Email',
  sms: 'SMS',
  phone: 'Phone',
  vcard: 'vCard',
  location: 'Location',
  whatsapp: 'WhatsApp',
  googlereview: 'Google Review',
  payid: 'PayID',
  calendar: 'Calendar',
}

export const DEFAULT_OPTIONS: QROptions = {
  foreground: '#1d1d1f',
  background: '#ffffff',
  errorCorrection: 'M',
  size: 300,
}
