import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Changelog to Tickets — Turn release notes into actionable work',
  description: 'Automatically convert changelogs into structured tickets for your engineering team.',
  openGraph: {
    title: 'Changelog to Tickets',
    description: 'Automatically convert changelogs into structured tickets.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const analyticsUrl = process.env.NEXT_PUBLIC_ANALYTICS_URL
  const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN

  return (
    <html lang="en">
      <head>
        {analyticsUrl && analyticsDomain && (
          <Script
            defer
            data-domain={analyticsDomain}
            src={`${analyticsUrl}/js/script.js`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
