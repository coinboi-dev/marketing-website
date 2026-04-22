import { NextRequest, NextResponse } from 'next/server'
import { appendFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Persists signups to a local CSV file and optionally notifies via email.
// Production would swap this for a DB write + transactional email service.

const SIGNUP_FILE = join(process.cwd(), 'data', 'waitlist.csv')

function persistSignup(email: string) {
  mkdirSync(join(process.cwd(), 'data'), { recursive: true })
  const line = `${new Date().toISOString()},${email}\n`
  appendFileSync(SIGNUP_FILE, line, 'utf8')
}

async function notifyBoard(email: string) {
  const apiKey = process.env.MAILEROO_API_KEY
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL
  if (!apiKey || !notifyEmail) return

  const body = new URLSearchParams({
    from: 'paperclip@dominus.casa',
    from_name: 'Marketing Website',
    to: notifyEmail,
    subject: 'New waitlist signup',
    html: `<p>New signup: <strong>${email}</strong></p><p>Time: ${new Date().toISOString()}</p>`,
  })

  await fetch('https://smtp.maileroo.com/send', {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
}

export async function POST(req: NextRequest) {
  let email: string
  try {
    const body = await req.json()
    email = (body.email ?? '').trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 422 })
  }

  persistSignup(email)

  // Fire-and-forget notification — don't block the response
  notifyBoard(email).catch(err => console.error('[waitlist] notify failed:', err))

  return NextResponse.json({ message: "You're on the list! We'll reach out soon." })
}
