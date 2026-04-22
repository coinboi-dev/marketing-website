import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const deprecations = [
  {
    vendor: 'Shopify Scripts',
    deadline: 'June 30, 2026',
    status: 'active',
    affected: 'scripts/*.js, scripts/*.lua',
    action: 'Migrate to Shopify Functions',
    severity: 'critical',
  },
  {
    vendor: 'OpenAI GPT-4',
    deadline: 'Q3 2026',
    status: 'warning',
    affected: 'config/models/*, lib/ai.ts',
    action: 'Update model references',
    severity: 'high',
  },
  {
    vendor: 'Stripe API v2',
    deadline: 'December 2026',
    status: 'upcoming',
    affected: 'lib/payments/*',
    action: 'Upgrade to API v3',
    severity: 'medium',
  },
]

const auditSteps = [
  {
    step: '1',
    title: 'Connect Repositories',
    body: 'Link your GitHub repos containing vendor integrations. We scan for code references automatically.',
  },
  {
    step: '2',
    title: 'Detect Exposure',
    body: 'We match your code against known deprecations, EOL notices, and breaking change alerts from your vendor list.',
  },
  {
    step: '3',
    title: 'Generate Report',
    body: 'Get a comprehensive audit report with risk scores, affected files, migration paths, and recommended timelines.',
  },
]

const benefits = [
  {
    title: 'Complete Coverage',
    body: 'Scan every repository across your organization for deprecated API usage in a single pass.',
  },
  {
    title: 'Risk Scoring',
    body: 'Prioritize by severity, deadline proximity, and business impact so you tackle what matters first.',
  },
  {
    title: 'Migration Guidance',
    body: 'Each finding includes remediation steps, relevant docs, and estimated effort to help teams plan.',
  },
  {
    title: 'Ongoing Monitoring',
    body: 'We keep watching After the initial audit. New deprecations trigger alerts before they become crises.',
  },
]

const faqs = [
  {
    q: 'How does the audit work?',
    a: 'We connect to your GitHub repositories via a GitHub App, scan for vendor API references, and cross-reference against our deprecation database. The scan is read-only—we never modify your code.',
  },
  {
    q: 'What vendors do you support?',
    a: 'We track 40+ vendors including Shopify, Stripe, OpenAI, Anthropic, Twilio, SendGrid, and more. Custom vendor feeds can be added.',
  },
  {
    q: 'Is this only for the Shopify Scripts deadline?',
    a: 'No. The audit covers all tracked vendors and deprecations. Shopify Scripts is one example of a critical upcoming deadline.',
  },
  {
    q: 'How long does an audit take?',
    a: 'Most orgs see results within minutes. The initial scan typically completes in 5-15 minutes depending on repository size.',
  },
]

export default function DeprecationAuditPage() {
  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/integrations">Integrations</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">Deprecation Audit</p>
        <h1>
          Find every deprecated API <span>before</span> it breaks.
        </h1>
        <p className="hero-copy">
          Connect your repositories once. We scan for deprecated vendor API usage across your entire organization
          and generate a prioritized audit report with migration guidance and timelines.
        </p>

        <div className="hero-actions">
          <a href="#start" className="btn primary">Start free audit</a>
          <a href="#how" className="btn">See how it works</a>
        </div>

        <div className="active-deprecations">
          <p className="eyebrow">Active deprecations we're tracking</p>
          <div className="deprecation-list">
            {deprecations.map((dep) => (
              <article key={dep.vendor} className={`deprecation-card ${dep.status}`}>
                <div className="dep-header">
                  <h3>{dep.vendor}</h3>
                  <span className={`badge ${dep.severity}`}>{dep.severity}</span>
                </div>
                <p className="deadline">Deadline: {dep.deadline}</p>
                <p className="affected">Affected: {dep.affected}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <p className="eyebrow">How it works</p>
        <h2>From connected repo to prioritized findings in minutes.</h2>
        <div className="steps">
          {auditSteps.map((item) => (
            <article key={item.step}>
              <span className="step-num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="benefits">
        <p className="eyebrow">Why audit</p>
        <h2>Don't wait for production failures to find deprecated code.</h2>
        <div className="cards">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <p className="eyebrow">Questions answered</p>
        <h2>The practical details.</h2>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="start" className="section final-cta">
        <h2>Know what needs to change before it breaks.</h2>
        <p>Run your first deprecation audit today. Results in minutes.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="#top" className="btn primary">Start free audit</a>}
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
          max-width: 16ch;
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
          color: #1a13001;
          border-color: transparent;
          font-weight: 700;
        }

        .active-deprecations {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(143, 165, 192, 0.2);
        }

        .active-deprecations .eyebrow {
          font-size: 0.7rem;
          margin-bottom: 1rem;
        }

        .deprecation-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .deprecation-card {
          border: 1px solid rgba(143, 165, 192, 0.22);
          border-radius: 14px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.7);
        }

        .deprecation-card.active {
          border-color: rgba(239, 68, 68, 0.5);
        }

        .deprecation-card.warning {
          border-color: rgba(251, 146, 60, 0.5);
        }

        .deprecation-card.upcoming {
          border-color: rgba(96, 165, 250, 0.5);
        }

        .dep-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .dep-header h3 {
          margin: 0;
          font-size: 1rem;
        }

        .badge {
          font-size: 0.65rem;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .badge.critical {
          background: rgba(239, 68, 68, 0.25);
          color: #fca5a5;
        }

        .badge.high {
          background: rgba(251, 146, 60, 0.25);
          color: #fdba74;
        }

        .badge.medium {
          background: rgba(96, 165, 250, 0.25);
          color: #93c5fd;
        }

        .deadline, .affected {
          margin: 0;
          font-size: 0.85rem;
          color: #b5c5db;
        }

        .deadline {
          color: #8de8d5;
          margin-bottom: 0.25rem;
        }

        .section { margin-top: 3.5rem; }

        .section h2 {
          margin: 0.6rem 0 1.25rem;
          font-size: clamp(1.6rem, 4.2vw, 2.8rem);
          max-width: 24ch;
          line-height: 1.12;
        }

        .steps,
        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .steps article,
        .cards article,
        .faq details,
        .final-cta {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 18px;
          padding: 1rem;
          background: rgba(9, 23, 40, 0.62);
        }

        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
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

        @media (max-width: 1000px) {
          .deprecation-list { grid-template-columns: 1fr; }
          .steps, .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .deprecation-list,
          .steps,
          .cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}