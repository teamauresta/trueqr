/**
 * TrueQR site-wide config
 * All values are driven by environment variables so the open-source
 * version contains no private data. See .env.example for details.
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_OPERATOR_NAME || 'TrueQR',
  tagline: "The QR tool that doesn't trick you.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://trueqr.app',

  /**
   * Optional: URL for a "support / buy me a coffee" link.
   * Leave empty to hide the support button entirely.
   */
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL || '',

  /**
   * Optional: URL for a community / support channel (Discord, Slack, etc).
   * Leave empty to hide community links in legal pages and footer.
   */
  communityUrl: process.env.NEXT_PUBLIC_COMMUNITY_URL || '',
}
