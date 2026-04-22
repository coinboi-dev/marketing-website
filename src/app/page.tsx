import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const styles = {
  page: { fontFamily: 'system-ui, sans-serif', maxWidth: 800, margin: '0 auto', padding: '60px 24px', lineHeight: 1.6, color: '#1a1a1a' },
  h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 12 },
  h2: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginTop: 56, marginBottom: 16 },
  h3: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4, marginTop: 24, marginBottom: 8 },
  sub: { fontSize: '1.15rem', color: '#444', lineHeight: 1.7, marginBottom: 24 },
  p: { fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 },
  ul: { paddingLeft: 24, marginBottom: 20 },
  li: { fontSize: '1rem', lineHeight: 1.7, marginBottom: 8 },
  ctaPrimary: { display: 'inline-block', padding: '14px 28px', background: '#111', color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: '1rem', marginTop: 8 },
  ctaSecondary: { display: 'inline-block', padding: '14px 28px', border: '1.5px solid #111', color: '#111', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: '1rem', marginTop: 8, marginLeft: 12 },
  section: { marginTop: 48, paddingTop: 32, borderTop: '1px solid #e5e5e5' },
  stat: { fontSize: '2rem', fontWeight: 700, color: '#111' },
  statLabel: { fontSize: '0.9rem', color: '#666' },
  badge: { display: 'inline-block', padding: '4px 12px', background: '#f0f0f0', borderRadius: 4, fontSize: '0.85rem', color: '#333', marginRight: 8, marginBottom: 8 },
  quote: { borderLeft: '3px solid #ccc', paddingLeft: 16, color: '#555', fontStyle: 'italic', marginBottom: 16 },
}

export default function HomePage() {
  return (
    <main style={styles.page}>
      <h1 style={styles.h1}>Stop monitoring vendor changelogs manually. Get code-aware tickets only when a change likely affects your repos.</h1>
      <p style={styles.sub}>
        We watch OpenAI, Anthropic, Shopify, and Stripe changelogs for you. Automatically create actionable tickets in Jira or GitHub Issues—no more manual tracking, no more missed breaking changes.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {flags.waitlist && <WaitlistForm />}
        {!flags.waitlist && (
          <a href="#cta" style={styles.ctaPrimary}>Start Your AI API Deprecation Audit (Free)</a>
        )}
        <a href="#how-it-works" style={styles.ctaSecondary}>See How It Works</a>
      </div>

      <section style={styles.section}>
        <h2 style={styles.h2}>Is your team getting burned by surprise API deprecations?</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>The Morning Scramble:</strong> An OpenAI model sunset or a Claude API protocol change breaks your production app. Your team spends the day firefighting instead of shipping.</li>
          <li style={styles.li}><strong>Manual Oversight:</strong> Your best engineers are wasting hours every month reading vendor changelogs, manually checking if repo-A uses deprecated-feature-X.</li>
          <li style={styles.li}><strong>The Shopify Scripts Deadline:</strong> June 2026 is closer than it looks. Are you sure every client project is ready for the migration?</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Get tickets, not notifications.</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Code-Aware Monitoring:</strong> We don&apos;t just alert you that a changelog updated. We scan your repositories to verify if the change actually impacts your codebase.</li>
          <li style={styles.li}><strong>Auto-Generated Tickets:</strong> Breaking changes and deprecations become Jira or GitHub Issues instantly—complete with the relevant code snippet and vendor documentation.</li>
          <li style={styles.li}><strong>Low Noise, High Action:</strong> No more false positives from features you don&apos;t use. Get only the tickets that matter to your release cycle.</li>
        </ul>
      </section>

      <section id="how-it-works" style={styles.section}>
        <h2 style={styles.h2}>From Changelog to Ticket — In Three Steps</h2>

        <h3 style={styles.h3}>1. Vendor Input (OpenAI)</h3>
        <blockquote style={styles.quote}>
          &ldquo;On June 13, we will begin retiring gpt-3.5-turbo-0301. Please update your code to use gpt-3.5-turbo-0613 or the latest model.&rdquo;
        </blockquote>

        <h3 style={styles.h3}>2. Code-Aware Analysis</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Scanning Repo:</strong> frontend-main</li>
          <li style={styles.li}><strong>Result:</strong> Found 3 occurrences of gpt-3.5-turbo-0301 in src/api/openai_client.ts.</li>
          <li style={styles.li}><strong>Action:</strong> Matched to high-priority breaking change.</li>
        </ul>

        <h3 style={styles.h3}>3. Generated Ticket Output (Jira)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Title:</strong> [DEPRECATION] Update OpenAI model gpt-3.5-turbo-0301 to gpt-3.5-turbo-0613</li>
          <li style={styles.li}><strong>Priority:</strong> High</li>
          <li style={styles.li}><strong>Impacted Code:</strong> src/api/openai_client.ts:L42, L88, L112</li>
          <li style={styles.li}><strong>Recommendation:</strong> Update to gpt-3.5-turbo-0613</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Stop wasting engineering cycles on manual monitoring.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, marginTop: 20 }}>
          <div><div style={styles.stat}>10+ hrs</div><div style={styles.statLabel}>saved per month</div></div>
          <div><div style={styles.stat}>98%</div><div style={styles.statLabel}>fewer surprise outages</div></div>
          <div><div style={styles.stat}>5,000+</div><div style={styles.statLabel}>edge cases handled</div></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Works with the tools you already use.</h2>
        <p style={styles.p}>
          <span style={styles.badge}>GitHub</span>
          <span style={styles.badge}>GitLab</span>
          <span style={styles.badge}>Bitbucket</span>
          <span style={styles.badge}>Jira</span>
          <span style={styles.badge}>GitHub Issues</span>
          <span style={styles.badge}>OpenAI</span>
          <span style={styles.badge}>Anthropic</span>
          <span style={styles.badge}>Google AI</span>
          <span style={styles.badge}>AWS Bedrock</span>
          <span style={styles.badge}>Shopify</span>
          <span style={styles.badge}>Stripe</span>
        </p>
        {flags.demo && (
          <a href="/demo" style={styles.ctaPrimary}>Explore All Integrations</a>
        )}
      </section>

      {flags.pricing && (
        <section style={styles.section}>
          <a href="/pricing" style={{ fontSize: '0.95rem', color: '#888' }}>See pricing →</a>
        </section>
      )}

      <section id="cta" style={{ ...styles.section, textAlign: 'center', paddingBottom: 40 }}>
        <h2 style={styles.h2}>Don&apos;t wait for your next breaking change.</h2>
        {flags.waitlist ? (
          <WaitlistForm />
        ) : (
          <a href="#cta" style={styles.ctaPrimary}>Get Started for Free</a>
        )}
      </section>
    </main>
  )
}
