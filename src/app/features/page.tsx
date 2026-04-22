import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const coreFeatures = [
  {
    title: 'Triage inbox, not a feed',
    body: 'Review only matched changes with confidence, owner, and evidence. Approve, merge duplicates, suppress, or snooze in one flow.',
    details: [
      'Prioritized queue sorted by severity and repo impact',
      'One-click actions: approve, merge similar, suppress, or snooze',
      'Clear missing-evidence notes when confidence is low',
      '90-day replay to revisit changes you paused on',
    ],
  },
  {
    title: 'Code-aware matching',
    body: 'We map vendor changes directly to affected files and CODEOWNERS instead of sending generic change notifications.',
    details: [
      'File-level evidence showing which files reference vendor APIs',
      'CODEOWNERS routing for automatic assignment',
      'Dependency scanning for package.json, requirements.txt, gemspec',
      'Historical pattern matching against past updates',
    ],
  },
  {
    title: 'Policy-driven automation',
    body: 'Auto-create tickets for high-confidence breaking changes while routing low-confidence notices into human review.',
    details: [
      'Configurable thresholds for auto-creation vs. triage',
      'Severity scoring with confidence percentages',
      'Break vs. benign classification with reasoning',
      'Custom rules for vendor-specific handling',
    ],
  },
  {
    title: 'Least privilege by default',
    body: 'GitHub App access stays read-only for source and metadata, with explicit destination permissions for ticket creation.',
    details: [
      'Read-only contents and metadata by default',
      'Ticket creation only when GitHub Issues enabled',
      'OAuth-scoped access, no full repo control',
      'Audit log of all actions taken',
    ],
  },
]

const advancedFeatures = [
  {
    title: 'Multi-repo intelligence',
    body: 'Connect multiple repositories and see cross-repo impact from a single vendor change.',
  },
  {
    title: 'Slack integration',
    body: 'Real-time alerts to Slack channels with action buttons to approve or snooze without context-switching.',
  },
  {
    title: 'Jira native',
    body: 'Create Jira issues directly with custom fields for severity, due dates, and component mapping.',
  },
  {
    title: 'Webhook exports',
    body: 'Forward webhooks to your internal systems for custom ticket workflows beyond Jira and GitHub.',
  },
  {
    title: 'Custom connectors',
    body: 'Enterprise plans include custom API connectors for internal or niche vendors not in our catalog.',
  },
  {
    title: 'Version pinning',
    body: 'Track specific API versions or deprecate old versions when vendors release updates.',
  },
]

const metrics = [
  { value: '82%', label: 'ticket acceptance without heavy edits' },
  { value: '<15%', label: 'false positive rate at default thresholds' },
  { value: '30m', label: '95th percentile feed freshness' },
  { value: '3 min', label: 'connect repo to first drafted ticket' },
]

const faqs = [
  {
    q: 'How does file-level evidence work?',
    a: 'We scan your repositories for imports, references, and dependencies that match vendor API surfaces. Each match shows the file path, relevant code snippet, and confidence of the connection.',
  },
  {
    q: 'Can I create tickets in both Jira and GitHub?',
    a: 'Yes. Configure your ticket destinations independently per repository. Some teams use GitHub Issues for triage and Jira for final execution.',
  },
  {
    q: 'What happens to low-confidence changes?',
    a: 'Changes with confidence below your threshold go to triage with clear evidence notes showing what we found and what is missing. You can approve, suppress, or adjust thresholds.',
  },
  {
    q: 'Does this work for GraphQL APIs?',
    a: 'Yes. We support REST, GraphQL, and SDK-based APIs. We match on schema references, operation names, and deprecation notices across all formats.',
  },
  {
    q: 'Can I track internal vendor APIs?',
    a: 'Enterprise plans include custom connectors for internal APIs. Contact sales to discuss your internal vendor surfaces.',
  },
]

export default function FeaturesPage() {
  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/features" className="current">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/integrations">Integrations</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Features</p>
        <h1>The complete solution for vendor API risk.</h1>
        <p className="hero-copy">
          From ingest to actionable ticket, every step is designed to minimize noise and maximize action.
        </p>
      </section>

      <section className="section core-features">
        <p className="eyebrow">Core capabilities</p>
        <h2>Built for engineering teams who ship.</h2>
        <div className="feature-grid">
          {coreFeatures.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p className="feature-body">{feature.body}</p>
              <ul>
                {(feature.details || []).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section metrics">
        <p className="eyebrow">How we measure up</p>
        <h2>Built to ship, not to debug.</h2>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section advanced">
        <p className="eyebrow">More features</p>
        <h2>Everything you need to scale.</h2>
        <div className="advanced-grid">
          {advancedFeatures.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <p className="eyebrow">Questions answered</p>
        <h2>The practical details that matter.</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="not-sure">
        <h2>Ready to see it in action?</h2>
        <p>Connect one repo and two vendors to draft your first ticket in minutes.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="#top" className="btn primary">Start watching free</a>}
      </section>

      <style>{`
        :global(*) { box-sizing: border-box; }
        :global(body) {
          margin: 0;
          font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
          background:
            radial-gradient(circle at 20% -10%, rgba(249, 115, 22, 0.24), transparent 48%),
            radial-gradient(circle at 88% 8%, rgba(20, 184, 166, 0.2), transparent 45%),
            #081018;
          color: #ecf2ff;
        }

        .site {
          width: min(1160px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 1.5rem 0 5rem;
        }

        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 999px;
          background: rgba(7, 19, 34, 0.72);
          backdrop-filter: blur(6px);
          position: sticky;
          top: 1rem;
          z-index: 10;
        }

        .brand {
          color: #ecf2ff;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .nav-links { display: flex; gap: 1rem; flex-wrap: wrap; }
        .nav-links a {
          color: #b5c5db;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .nav-links a.current {
          color: #8de8d5;
        }

        .hero {
          margin-top: 2rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 28px;
          background: linear-gradient(150deg, rgba(13, 29, 49, 0.95), rgba(7, 16, 24, 0.86));
          padding: 3rem;
          box-shadow: 0 35px 80px rgba(1, 7, 16, 0.5);
        }

        .eyebrow {
          margin: 0;
          color: #8de8d5;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.13em;
          font-weight: 700;
        }

        h1 {
          margin: 1rem 0 1rem;
          font-size: clamp(2rem, 5.3vw, 3.8rem);
          line-height: 1.02;
          max-width: 18ch;
        }

        .hero-copy {
          color: #b5c5db;
          font-size: 1.08rem;
          line-height: 1.7;
          max-width: 60ch;
          margin: 0;
        }

        .section { margin-top: 4rem; }

        .section h2 {
          margin: 0.6rem 0 1.5rem;
          font-size: clamp(1.6rem, 4.2vw, 2.4rem);
          max-width: 22ch;
          line-height: 1.12;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .core-features article,
        .advanced article {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
          padding: 1.5rem;
          background: rgba(9, 23, 40, 0.62);
        }

        .core-features h3,
        .advanced h3 {
          margin: 0 0 0.75rem;
          font-size: 1.15rem;
          color: #ecf2ff;
        }

        .feature-body {
          color: #b5c5db;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 1rem;
        }

        .core-features ul {
          margin: 0;
          padding-left: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .core-features li {
          color: #b5c5db;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .metrics article {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 1.25rem;
          background: rgba(9, 23, 40, 0.62);
          text-align: center;
        }

        .metrics h3 {
          margin: 0 0 0.45rem;
          font-size: 2rem;
          color: #f59e0b;
        }

        .metrics p {
          margin: 0;
          color: #b5c5db;
          font-size: 0.9rem;
          line-height: 1.45;
        }

        .advanced-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .advanced p {
          margin: 0;
          color: #b5c5db;
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .faq-list {
          display: grid;
          gap: 0.75rem;
          max-width: 800px;
        }

        details {
          border: 1px solid rgba(143, 165, 192, 0.22);
          border-radius: 14px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.55);
        }

        summary {
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          color: #ecf2ff;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        summary::-webkit-details-marker { display: none; }

        summary::after {
          content: '+';
          font-size: 1.4rem;
          color: #8de8d5;
          font-weight: 300;
        }

        details[open] summary::after {
          content: '−';
        }

        details p {
          margin: 0.75rem 0 0;
          color: #b5c5db;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .not-sure {
          margin-top: 3.5rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
          padding: 2.5rem;
          background: linear-gradient(150deg, rgba(6, 78, 59, 0.55), rgba(9, 23, 40, 0.62));
          text-align: center;
        }

        .not-sure h2 {
          margin: 0;
          font-size: clamp(1.4rem, 3.5vw, 2rem);
        }

        .not-sure p {
          margin: 0.75rem 0 1.25rem;
          color: #b5c5db;
          font-size: 1rem;
          max-width: 50ch;
          margin-left: auto;
          margin-right: auto;
        }

        .btn {
          border: 1px solid rgba(143, 165, 192, 0.4);
          color: #ecf2ff;
          text-decoration: none;
          border-radius: 12px;
          padding: 0.7rem 1rem;
          background: rgba(13, 29, 49, 0.65);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
          cursor: pointer;
          transition: opacity 150ms;
        }

        .btn.primary {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          border-color: transparent;
          font-weight: 700;
        }

        .btn:hover {
          opacity: 0.85;
        }

        @media (max-width: 1100px) {
          .feature-grid { grid-template-columns: 1fr; }
          .metrics-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .advanced-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; flex-wrap: wrap; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .section h2 { max-width: none; }
          .feature-grid,
          .metrics-grid,
          .advanced-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}