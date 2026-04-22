// Feature flags — controlled via NEXT_PUBLIC_FF_* env vars in .env.local
// Flip values in .env.local to enable/disable features without code changes.

export const flags = {
  waitlist: process.env.NEXT_PUBLIC_FF_WAITLIST === 'true',
  pricing: process.env.NEXT_PUBLIC_FF_PRICING === 'true',
  demo: process.env.NEXT_PUBLIC_FF_DEMO === 'true',
} as const

export type FlagKey = keyof typeof flags
