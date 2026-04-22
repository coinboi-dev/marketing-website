import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const aiVendors = [
  { name: 'OpenAI', desc: 'Track model sunsets, rate limit changes, and API deprecations (gpt-4, gpt-3.5-turbo, etc.).' },
  { name: 'Anthropic', desc: 'Monitor Claude API protocol updates and model versions.' },
  { name: 'Google AI', desc: 'Keep up with Gemini and Palm API changes.' },
  { name: 'AWS Bedrock', desc: 'Stay informed on model availability and API updates.' },
]

const saasPlatforms = [
  { name: 'Shopify', desc: 'Essential for agencies tracking the June 2026 Shopify Scripts deadline.' },
  { name: 'Stripe', desc: 'Monitor breaking changes in Checkout, Subscriptions, and Payment Intents.' },
  { name: 'Twilio', desc: 'SMS and communications API change tracking.' },
  { name: 'Meta', desc: 'Facebook Ads API and Messenger platform changes.' },
  { name: 'GitHub', desc: 'API and webhook updates from GitHub.' },
  { name: 'Google Ads', desc: 'Campaign and targeting API modifications.' },
]

const vcs = [
  { name: 'GitHub', desc: 'Native GitHub App integration.' },
  { name: 'GitLab', desc: 'Support for GitLab.com and self-hosted instances.' },
  { name: 'Bitbucket', desc: 'Secure repository scanning.' },
]

const issueTrackers = [
  { name: 'Jira', desc: 'Deep integration with Jira Cloud and Server.' },
  { name: 'GitHub Issues', desc: 'Auto-create and link issues directly in your repo.' },
  { name: 'Slack', desc: 'Coming Soon: Real-time alerts for high-priority breaking changes.', coming: true },
]

export default function IntegrationsPage() {
  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/integrations" className="current">Integrations</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Integrations</p>
        <h1>
          Connect Your Stack, <span>Automate</span> Your Workflow
        </h1>
        <p className="hero-copy">
          Seamlessly connect your vendor API changelogs to your developer workflows with our native integrations.
        </p>
        <div className="hero-actions">
          <a href="#vendors" className="btn primary">Explore All Integrations</a>
        </div>
      </section>

      <section className="section" id="vendors">
        <p className="eyebrow">AI Providers</p>
        <h2>The "Big 4" AI Vendors</h2>
        <div className="cards">
          {aiVendors.map((vendor) => (
            <article key={vendor.name}>
              <h3>{vendor.name}</h3>
              <p>{vendor.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Critical Platforms</p>
        <h2>Essential SaaS Integrations</h2>
        <div className="cards">
          {saasPlatforms.map((platform) => (
            <article key={platform.name}>
              <h3>{platform.name}</h3>
              <p>{platform.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Version Control</p>
        <h2>Repository Connections</h2>
        <div className="cards">
          {vcs.map((v) => (
            <article key={v.name}>
              <h3>{v.name}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Project Management</p>
        <h2>Issue Tracking & Automation</h2>
        <div className="cards">
          {issueTrackers.map((tracker) => (
            <article key={tracker.name} className={tracker.coming ? 'coming-soon' : ''}>
              <h3>
                {tracker.name}
                {tracker.coming && <span className="badge">Coming Soon</span>}
              </h3>
              <p>{tracker.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section security">
        <p className="eyebrow">Security</p>
        <h2>Enterprise-Grade Protection</h2>
        <div className="security-grid">
          <article>
            <h3>Least Privilege</h3>
            <p>We only request read-only access to your source code.</p>
          </article>
          <article>
            <h3>Secure Handling</h3>
            <p>Your code is scanned but never stored.</p>
          </article>
          <article>
            <h3>Enterprise Ready</h3>
            <p>SOC2 compliant infrastructure.</p>
          </article>
        </div>
      </section>

      <section className="section final-cta">
        <h2>Ready to integrate?</h2>
        <p>Connect your first repo and start receiving actionable tickets.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="/" className="btn primary">Connect Your First Repo</a>}
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
          font-size: clamp(2rem, 5.3vw, 4.2rem);
          line-height: 1.02;
          max-width: 18ch;
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
        }

        .section { margin-top: 3.5rem; }

        .section h2 {
          margin: 0.6rem 0 1.25rem;
          font-size: clamp(1.6rem, 4.2vw, 2.8rem);
          max-width: 20ch;
          line-height: 1.12;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .cards article {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.62);
        }

        .cards h3 {
          margin: 0 0 0.6rem;
          font-size: 1.1rem;
        }

        .cards p,
        .section p {
          color: #b5c5db;
          line-height: 1.65;
          margin: 0;
        }

        .badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(141, 232, 213, 0.2);
          color: #8de8d5;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          margin-left: 0.6rem;
          font-weight: 600;
        }

        .security {
          background: rgba(9, 23, 40, 0.4);
          border-radius: 20px;
          padding: 2rem;
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .security-grid article {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.62);
        }

        .security-grid h3 {
          margin: 0 0 0.6rem;
          font-size: 1.1rem;
          color: #8de8d5;
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

        .final-cta {
          margin-top: 3.5rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 2rem;
          background: linear-gradient(150deg, rgba(6, 78, 59, 0.65), rgba(9, 23, 40, 0.62));
          text-align: center;
        }

        .final-cta h2 {
          margin: 0;
          font-size: clamp(1.6rem, 4.2vw, 2.4rem);
        }

        .final-cta p {
          margin: 0.7rem 0 1.1rem;
          max-width: 55ch;
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .cards,
          .security-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}