import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const plans = [
  {
    tier: 'Free',
    price: '$0',
    cadence: 'forever',
    positioning: 'Try it out. No commitment.',
    features: [
      '1 repository',
      '2 vendors',
      'Draft tickets only',
      '90-day replay',
      'Community support',
    ],
    cta: 'Start Free',
  },
  {
    tier: 'Starter',
    price: '$49',
    cadence: '/ repo / month',
    positioning: 'Connect one repo and automate tickets.',
    features: [
      '5 vendors',
      'Jira or GitHub Issues',
      'Auto-create above threshold',
      'Slack alerts',
    ],
    cta: 'Choose Starter',
  },
  {
    tier: 'Team',
    price: '$149',
    cadence: '/ month',
    positioning: 'Everything you need for a small team.',
    features: [
      '3 repositories',
      '10 vendors',
      'Jira & GitHub Issues',
      'Approval policies',
      'CODEOWNERS routing',
      'Priority support',
    ],
    cta: 'Choose Team',
    featured: true,
    badge: 'Best Value',
  },
  {
    tier: 'Enterprise',
    price: null,
    cadence: null,
    positioning: 'Scale across your organization.',
    features: [
      'Unlimited repos & vendors',
      'Custom connectors',
      'SSO & advanced security',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    q: 'How do you count vendors?',
    a: 'A vendor is any API provider you monitor. For example, OpenAI, Stripe, or Shopify each count as one vendor.',
  },
  {
    q: 'Can I switch plans anytime?',
    a: 'Yes. Upgrade or downgrade from your dashboard at any time.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes. Contact sales for annual billing options and discounts.',
  },
  {
    q: 'What are "draft tickets"?',
    a: 'On the Free plan, we draft tickets in your dashboard but do not push them to Jira or GitHub. You copy the content manually.',
  },
  {
    q: 'How does per-repo pricing work?',
    a: 'Starter is priced per connected repository per month. Team is a flat monthly rate for up to 3 repositories.',
  },
]

export default function PricingPage() {
  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <a href="/pricing" className="current">Pricing</a>
          <a href="/integrations">Integrations</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Pricing</p>
        <h1>Simple, Predictable Pricing</h1>
        <p className="hero-copy">
          Priced on repos and vendors, not seats. Scale your API monitoring as your product grows.
        </p>
        <p className="trust-line">No credit card required. Cancel anytime.</p>
      </section>

      <section className="tiers">
        {plans.map((plan) => (
          <article
            key={plan.tier}
            className={[
              'plan-card',
              plan.featured ? 'featured' : '',
              plan.price === null ? 'enterprise' : '',
            ].filter(Boolean).join(' ')}
          >
            {plan.badge && <span className="badge">{plan.badge}</span>}
            <h2 className="plan-tier">{plan.tier}</h2>
            {plan.price !== null ? (
              <div className="plan-price">
                {plan.price}
                <span className="cadence"> / {plan.cadence}</span>
              </div>
            ) : (
              <div className="plan-price">
                <span className="contact-text">Custom</span>
              </div>
            )}
            <p className="plan-positioning">{plan.positioning}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5L6.5 12L13 5" stroke="#8de8d5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className={plan.price !== null ? 'btn primary' : 'btn outline'}>
              {plan.cta}
            </a>
          </article>
        ))}
      </section>

      <section className="section faq" id="faq">
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
        <h2>Not sure which plan is right for you?</h2>
        <p>Start with a free audit. Connect one repo and two vendors. See the drafted ticket in minutes.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="#tiers" className="btn primary">Start with a Free Audit</a>}
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
          margin: 0 0 0.75rem;
        }

        .trust-line {
          color: #8de8d5;
          font-size: 0.9rem;
          margin: 0;
        }

        .tiers {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .plan-card {
          position: relative;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
          padding: 1.5rem;
          background: rgba(9, 23, 40, 0.62);
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(1, 7, 16, 0.4);
        }

        .plan-card.featured {
          background: linear-gradient(160deg, rgba(245, 158, 11, 0.18), rgba(9, 23, 40, 0.62));
          border-color: rgba(245, 158, 11, 0.4);
        }

        .plan-card.enterprise {
          border-style: dashed;
          background: rgba(9, 23, 40, 0.3);
        }

        .badge {
          position: absolute;
          top: -1px;
          right: 1rem;
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.6rem;
          border-radius: 0 0 8px 8px;
        }

        .plan-tier {
          margin: 0 0 0.75rem;
          font-size: 1.1rem;
          color: #ecf2ff;
        }

        .plan-price {
          font-size: 2rem;
          font-weight: 700;
          color: #8de8d5;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }

        .cadence {
          font-size: 0.85rem;
          font-weight: 400;
          color: #b5c5db;
        }

        .contact-text {
          font-size: 1.6rem;
        }

        .plan-positioning {
          color: #b5c5db;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0 0 1rem;
        }

        ul {
          list-style: none;
          margin: 0 0 1.25rem;
          padding: 0;
          flex: 1;
        }

        ul li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #b5c5db;
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 0.6rem;
        }

        ul li svg {
          flex-shrink: 0;
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
          margin-top: auto;
        }

        .btn:hover {
          opacity: 0.85;
        }

        .btn.primary {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          border-color: transparent;
          font-weight: 700;
        }

        .btn.outline {
          background: transparent;
          border-color: rgba(143, 165, 192, 0.5);
        }

        .section { margin-top: 4rem; }

        .section h2 {
          margin: 0.6rem 0 1.25rem;
          font-size: clamp(1.6rem, 4.2vw, 2.4rem);
          max-width: 20ch;
          line-height: 1.12;
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

        @media (max-width: 1100px) {
          .tiers { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .tiers { grid-template-columns: 1fr; }
          .section h2 { max-width: none; }
        }
      `}</style>
    </main>
  )
}