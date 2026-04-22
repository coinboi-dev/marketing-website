import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Automate API Changelog to Jira/GitHub Tickets | No More Breaking Surprises',
  description: 'Stop monitoring vendor changelogs manually. Automatically map OpenAI, Anthropic, and Shopify API changes to your code and create actionable tickets in Jira or GitHub Issues.',
  openGraph: {
    title: 'Automate API Changelog to Jira/GitHub Tickets | No More Breaking Surprises',
    description: 'Stop monitoring vendor changelogs manually. Automatically map OpenAI, Anthropic, and Shopify API changes to your code and create actionable tickets in Jira or GitHub Issues.',
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
