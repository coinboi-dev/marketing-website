'use client'

// Thin analytics wrapper — Plausible-compatible event emitter.
// When NEXT_PUBLIC_ANALYTICS_URL is set, fires events to that endpoint.
// Otherwise logs to console in development, silently drops in production.

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === 'undefined') return

  if (window.plausible) {
    window.plausible(name, { props })
    return
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[analytics]', name, props)
  }
}

export const track = {
  waitlistSignup: (email: string) => trackEvent('Waitlist Signup', { email }),
  pageView: (path: string) => trackEvent('pageview', { path }),
  ctaClick: (label: string) => trackEvent('CTA Click', { label }),
}
