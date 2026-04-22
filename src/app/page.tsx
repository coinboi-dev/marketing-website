import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }}>
        Turn changelogs into tickets — automatically.
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: 16, color: '#555', lineHeight: 1.6 }}>
        [Copy TBD — CMO to provide]
      </p>

      {flags.waitlist && (
        <section style={{ marginTop: 40 }}>
          <WaitlistForm />
        </section>
      )}

      {flags.demo && (
        <section style={{ marginTop: 40 }}>
          <a href="/demo" style={{ display: 'inline-block', padding: '12px 24px', background: '#111', color: '#fff', borderRadius: 6, textDecoration: 'none' }}>
            Try the demo
          </a>
        </section>
      )}

      {flags.pricing && (
        <section style={{ marginTop: 40 }}>
          <a href="/pricing" style={{ fontSize: '0.9rem', color: '#888' }}>See pricing →</a>
        </section>
      )}
    </main>
  )
}
