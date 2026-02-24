import QRCode from 'qrcode'
import type { QROptions } from './types'

export async function generateQRDataURL(
  content: string,
  options: QROptions
): Promise<string> {
  if (!content) return ''
  try {
    return await QRCode.toDataURL(content, {
      errorCorrectionLevel: options.errorCorrection,
      color: {
        dark: options.foreground,
        light: options.background,
      },
      width: options.size,
      margin: 2,
    })
  } catch {
    return ''
  }
}

export async function generateQRSVG(
  content: string,
  options: QROptions
): Promise<string> {
  if (!content) return ''
  try {
    return await QRCode.toString(content, {
      type: 'svg',
      errorCorrectionLevel: options.errorCorrection,
      color: {
        dark: options.foreground,
        light: options.background,
      },
      width: options.size,
      margin: 2,
    })
  } catch {
    return ''
  }
}
