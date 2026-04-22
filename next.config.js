/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Feature flags are injected via env vars — see .env.local
  env: {
    NEXT_PUBLIC_FF_WAITLIST: process.env.NEXT_PUBLIC_FF_WAITLIST ?? 'true',
    NEXT_PUBLIC_FF_PRICING: process.env.NEXT_PUBLIC_FF_PRICING ?? 'false',
    NEXT_PUBLIC_FF_DEMO: process.env.NEXT_PUBLIC_FF_DEMO ?? 'false',
    NEXT_PUBLIC_ANALYTICS_URL: process.env.NEXT_PUBLIC_ANALYTICS_URL ?? '',
    NEXT_PUBLIC_ANALYTICS_DOMAIN: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN ?? 'localhost',
  },
}

module.exports = nextConfig
