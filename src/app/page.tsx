import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const vendors = ['Shopify', 'Stripe', 'OpenAI', 'Anthropic', 'GitHub', 'Google Ads', 'Twilio', 'Meta']

const features = [
  {
    title: 'Triage inbox, not a feed',
    body: 'Review only matched changes with confidence, owner, and evidence. Approve, merge duplicates, suppress, or snooze in one flow.',
  },
  {
    title: 'Code-aware matching',
    body: 'We map vendor changes directly to affected files and CODEOWNERS instead of sending generic change notifications.',
  },
  {
    title: 'Policy-driven automation',
    body: 'Auto-create tickets for high-confidence breaking changes while routing low-confidence notices into human review.',
  },
  {
    title: 'Least privilege by default',
    body: 'GitHub App access stays read-only for source and metadata, with explicit destination permissions for ticket creation.',
  },
]

const metrics = [
  { value: '82%', label: 'ticket acceptance without heavy edits' },
  { value: '<15%', label: 'false positive rate at default thresholds' },
  { value: '30m', label: '95th percentile feed freshness' },
  { value: '3 min', label: 'connect repo to first drafted ticket' },
]

const plans = [
  {
    tier: 'Free',
    price: 'A$0',
    cadence: 'forever',
    points: ['1 repo, 2 vendors', 'Draft tickets only', '90-day replay', 'Community support'],
  },
  {
    tier: 'Starter',
    price: 'A$49',
    cadence: 'repo / month',
    points: ['5 vendors', 'Jira or GitHub Issues', 'Auto-create above threshold', 'Slack alerts'],
  },
  {
    tier: 'Team',
    price: 'A$149',
    cadence: 'month',
    points: ['3 repos, 10 vendors', 'Approval policies', 'CODEOWNERS routing', 'Priority support'],
    featured: true,
  },
]

const faqs = [
  {
    q: 'What permissions does the GitHub App request?',
    a: 'Read-only contents and metadata, plus ticket destination permissions when GitHub Issues is enabled.',
  },
  {
    q: 'What happens when confidence is low?',
    a: 'We abstain from auto-creation and place the change in triage with clear missing-evidence notes.',
  },
  {
    q: 'How is this different from changelog readers?',
    a: 'Vendor Pulse is upstream-aware and repo-aware, then outputs assignable tickets with file-level evidence.',
  },
]

export default function HomePage() {
  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/integrations">Integrations</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">Now watching Shopify Scripts retirement - Jun 30, 2026</p>
        <h1>
          Catch vendor API changes <span>before</span> your customers do.
        </h1>
        <p className="hero-copy">
          Vendor Pulse tracks the changelogs you cannot monitor every day, maps changes to the exact files in your repos,
          and drafts code-aware tickets with evidence and ownership.
        </p>

        <div className="hero-actions">
          {flags.waitlist ? <WaitlistForm /> : <a href="#cta" className="btn primary">Start watching free</a>}
          <a href="#how" className="btn">See how it works</a>
        </div>

        <div className="signal-grid" aria-label="Realtime change flow preview">
          <article>
            <h2>1. Ingest</h2>
            <p>Shopify Scripts retire Jun 30</p>
            <p>OpenAI model sunset notice</p>
            <p>Stripe Checkout session update</p>
          </article>
          <article>
            <h2>2. Match</h2>
            <p>2 matching script files</p>
            <p>package.json dependency evidence</p>
            <p>CODEOWNERS route to commerce-platform</p>
          </article>
          <article>
            <h2>3. Ticket</h2>
            <p>[ACTION REQUIRED] migrate to Functions</p>
            <p>Priority P0 with due date</p>
            <p>Remediation steps and owner included</p>
          </article>
        </div>
      </section>

      <section className="vendors">
        <p>Watching changelogs from</p>
        <div>
          {vendors.map((vendor) => (
            <span key={vendor}>{vendor}</span>
          ))}
        </div>
      </section>

      <section className="section" id="how">
        <p className="eyebrow">How it works</p>
        <h2>From upstream change to assignable ticket in under a minute.</h2>
        <div className="steps">
          <article>
            <h3>Ingest</h3>
            <p>Normalize changelog posts, deprecation notices, and release feeds into one event stream.</p>
          </article>
          <article>
            <h3>Match</h3>
            <p>Scan integration surfaces in connected repositories and keep only evidence-backed matches.</p>
          </article>
          <article>
            <h3>Classify</h3>
            <p>Score severity with confidence and abstain when evidence is weak or contradictory.</p>
          </article>
          <article>
            <h3>Ticket</h3>
            <p>Draft Jira or GitHub Issues with impact summary, file links, owner, and due dates.</p>
          </article>
        </div>
      </section>

      <section className="section" id="features">
        <p className="eyebrow">The product</p>
        <h2>Not another dashboard. An autonomous teammate for vendor risk.</h2>
        <div className="cards">
          {features.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <h3>{metric.value}</h3>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="section" id="pricing">
        <p className="eyebrow">Pricing</p>
        <h2>Priced on repos and vendors, not seats.</h2>
        <div className="plans">
          {plans.map((plan) => (
            <article key={plan.tier} className={plan.featured ? 'featured' : ''}>
              <h3>{plan.tier}</h3>
              <p className="price">{plan.price} <span>/ {plan.cadence}</span></p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <p className="eyebrow">Questions answered</p>
        <h2>The practical details that matter.</h2>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="section final-cta">
        <h2>Stop reading changelogs. Start shipping against them.</h2>
        <p>Connect one repo and two vendors to see the first drafted ticket in minutes.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="#top" className="btn primary">Start watching free</a>}
      </section>

      {flags.demo && (
        <section className="section link-row">
          <a href="/demo" className="btn">Explore integrations</a>
        </section>
      )}

      {flags.pricing && (
        <section className="section link-row">
          <a href="/pricing" className="btn">Open full pricing page</a>
        </section>
      )}

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

        .hero {
          margin-top: 2.5rem;
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
          font-size: clamp(2rem, 5.3vw, 4.2rem);
          line-height: 1.02;
          max-width: 14ch;
        }

        h1 span { font-style: italic; color: #f59e0b; }

        .hero-copy {
          color: #b5c5db;
          font-size: 1.08rem;
          line-height: 1.7;
          max-width: 63ch;
          margin-bottom: 1.8rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          align-items: center;
          margin-bottom: 2rem;
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
        }

        .btn.primary {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          border-color: transparent;
          font-weight: 700;
        }

        .signal-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .signal-grid article {
          border: 1px solid rgba(143, 165, 192, 0.22);
          border-radius: 18px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.7);
        }

        .signal-grid h2 {
          margin: 0 0 0.8rem;
          font-size: 1rem;
          color: #8de8d5;
        }

        .signal-grid p {
          margin: 0 0 0.5rem;
          color: #b5c5db;
          font-size: 0.95rem;
        }

        .vendors {
          margin-top: 1.5rem;
          border: 1px solid rgba(143, 165, 192, 0.22);
          border-radius: 20px;
          background: rgba(9, 23, 40, 0.58);
          padding: 1rem 1.2rem;
        }

        .vendors p {
          margin: 0;
          color: #8de8d5;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .vendors div {
          margin-top: 0.75rem;
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .vendors span {
          border: 1px solid rgba(143, 165, 192, 0.24);
          border-radius: 999px;
          padding: 0.4rem 0.7rem;
          color: #d2deec;
          font-size: 0.86rem;
          background: rgba(8, 16, 24, 0.65);
        }

        .section { margin-top: 3.5rem; }

        .section h2 {
          margin: 0.6rem 0 1.25rem;
          font-size: clamp(1.6rem, 4.2vw, 2.8rem);
          max-width: 20ch;
          line-height: 1.12;
        }

        .steps,
        .cards,
        .plans {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .plans { grid-template-columns: repeat(3, minmax(0, 1fr)); }

        .steps article,
        .cards article,
        .plans article,
        .metrics article,
        .faq details,
        .final-cta {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.62);
        }

        h3 {
          margin: 0 0 0.6rem;
          font-size: 1.1rem;
        }

        .section p,
        li {
          color: #b5c5db;
          line-height: 1.65;
          margin: 0;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .metrics h3 {
          font-size: 2rem;
          margin-bottom: 0.45rem;
          color: #f59e0b;
        }

        .price {
          margin: 0;
          font-size: 1.9rem;
          font-weight: 700;
          color: #8de8d5;
        }

        .price span {
          font-size: 0.95rem;
          color: #b5c5db;
          font-weight: 400;
        }

        ul {
          margin: 0.85rem 0 0;
          padding-left: 1.2rem;
        }

        .featured {
          background: linear-gradient(160deg, rgba(245, 158, 11, 0.22), rgba(9, 23, 40, 0.62));
        }

        .faq {
          display: grid;
          gap: 0.8rem;
          max-width: 860px;
        }

        summary {
          cursor: pointer;
          font-weight: 600;
        }

        .faq p { margin-top: 0.6rem; }

        .final-cta {
          background: linear-gradient(150deg, rgba(6, 78, 59, 0.65), rgba(9, 23, 40, 0.62));
        }

        .final-cta p {
          margin: 0.7rem 0 1.1rem;
          max-width: 55ch;
        }

        .link-row { margin-top: 1.25rem; }

        @media (max-width: 1000px) {
          .metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .plans { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .signal-grid,
          .steps,
          .cards,
          .plans,
          .metrics { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
