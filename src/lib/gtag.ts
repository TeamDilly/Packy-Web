export const NEXT_PUBLIC_GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window.gtag == 'undefined') return

  window.gtag('config', NEXT_PUBLIC_GOOGLE_ID as string, {
    page_path: url,
  })
}

interface GTagEventProps {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
