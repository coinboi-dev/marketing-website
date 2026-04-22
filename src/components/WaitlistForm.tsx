'use client'

import { useState } from 'react'
import { track } from '@/lib/analytics'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        track.waitlistSignup(email)
        setStatus('success')
        setMessage(data.message ?? "You're on the list! We'll be in touch.")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 420 }}>
      <label htmlFor="waitlist-email" style={{ fontWeight: 600, fontSize: '0.95rem' }}>
        Get early access
      </label>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          id="waitlist-email"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          style={{
            flex: 1,
            padding: '10px 14px',
            border: '1.5px solid #ddd',
            borderRadius: 6,
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          style={{
            padding: '10px 20px',
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontSize: '1rem',
            cursor: status === 'loading' || status === 'success' ? 'default' : 'pointer',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading' ? 'Joining…' : status === 'success' ? 'Joined!' : 'Join waitlist'}
        </button>
      </div>
      {message && (
        <p style={{ fontSize: '0.9rem', color: status === 'error' ? '#c00' : '#090', margin: 0 }}>
          {message}
        </p>
      )}
    </form>
  )
}
