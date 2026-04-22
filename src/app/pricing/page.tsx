'use client';

import { useState, useEffect } from 'react';
import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const plans = [
  {
    tier: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
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
    monthlyPrice: 49,
    annualPrice: 39,
    cadence: '/ repo / mo',
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
    monthlyPrice: 149,
    annualPrice: 119,
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
  },
  {
    tier: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
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

const comparisonData = [
  { label: 'Repositories', free: '1', starter: '1', team: '3', enterprise: 'Unlimited' },
  { label: 'Vendors', free: '2', starter: '5', team: '10', enterprise: 'Unlimited' },
  { label: 'Ticket Destination', free: 'Draft only', starter: 'Jira/GitHub', team: 'Jira/GitHub', enterprise: 'Any + Webhooks' },
  { label: 'Auto-creation', free: '—', starter: '✓', team: '✓', enterprise: '✓' },
  { label: 'Approval Policies', free: '—', starter: '—', team: '✓', enterprise: '✓' },
  { label: 'CODEOWNERS', free: '—', starter: '—', team: '✓', enterprise: '✓' },
  { label: 'SSO (SAML)', free: '—', starter: '—', team: '—', enterprise: '✓' },
  { label: 'Support', free: 'Community', starter: 'Standard', team: 'Priority', enterprise: '24/7 Dedicated' },
]

const trustMetrics = [
  { value: 'SOC2', label: 'Type II Compliant' },
  { value: '256-bit', label: 'TLS Encryption' },
  { value: 'GitHub', label: 'Verified Partner' },
  { value: 'GDPR', label: 'Fully Compliant' },
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
    a: 'Yes. Annual billing is available at a 20% discount, as shown in the toggle above.',
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
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main className="wrap">
        <section className="hero reveal">
          <div className="hero-aurora" />
          <div className="hero-grid" />
          <div className="hero-eyebrow">
            <span className="tag">Flexible</span>
            <span className="sep" />
            <span>Scale with your team</span>
          </div>
          <h1 className="hero-title">
            Simple, Predictable <span className="serif">Pricing.</span>
          </h1>
          <p className="hero-sub">
            Priced on repos and vendors, not seats. Scale your API monitoring as your product grows.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
            <span style={{ fontSize: '14px', color: isAnnual ? 'var(--mute)' : 'var(--text)' }}>Monthly</span>
            <div 
              onClick={() => setIsAnnual(!isAnnual)}
              style={{ 
                width: '44px', height: '24px', borderRadius: '99px', background: 'var(--hair-2)', 
                position: 'relative', cursor: 'pointer', transition: 'background .2s'
              }}
              className={isAnnual ? 'tw-toggle on' : 'tw-toggle'}
            >
              <div style={{ 
                width: '18px', height: '18px', borderRadius: '50%', background: 'white',
                position: 'absolute', top: '3px', left: isAnnual ? '23px' : '3px',
                transition: 'left .2s cubic-bezier(0.4, 0, 0.2, 1)'
              }} />
            </div>
            <span style={{ fontSize: '14px', color: isAnnual ? 'var(--text)' : 'var(--mute)' }}>
              Yearly <span className="chip lime" style={{ marginLeft: '8px' }}>Save 20%</span>
            </span>
          </div>
        </section>

        <section className="row price-grid reveal">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={['price', plan.featured ? 'popular' : ''].filter(Boolean).join(' ')}
            >
              <div className="tier">{plan.tier}</div>
              {plan.monthlyPrice !== null ? (
                <div className="amt">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  <small>{plan.cadence}</small>
                </div>
              ) : (
                <div className="amt">Custom</div>
              )}
              <p className="desc">{plan.positioning}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#" className={plan.featured ? 'btn btn-primary' : 'btn'}>
                {plan.cta}
              </a>
            </div>
          ))}
        </section>

        <section className="row reveal">
          <div className="stat-band">
            {trustMetrics.map((metric) => (
              <div className="stat-item" key={metric.label}>
                <div className="v" style={{ fontSize: '32px' }}>{metric.value}</div>
                <div className="l">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Comparison</span>
            <h2>Compare our plans</h2>
            <p>Everything you need to keep your production environment stable.</p>
          </div>

          <div style={{ overflowX: 'auto', background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                  <th style={{ padding: '20px', color: 'var(--mute)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.1em' }}>Feature</th>
                  <th style={{ padding: '20px', fontWeight: '500' }}>Free</th>
                  <th style={{ padding: '20px', fontWeight: '500' }}>Starter</th>
                  <th style={{ padding: '20px', fontWeight: '500', color: 'var(--accent-2)' }}>Team</th>
                  <th style={{ padding: '20px', fontWeight: '500' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.label} style={{ borderBottom: '1px solid var(--hair)' }}>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--dim)' }}>{row.label}</td>
                    <td style={{ padding: '20px', fontSize: '14px' }}>{row.free}</td>
                    <td style={{ padding: '20px', fontSize: '14px' }}>{row.starter}</td>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--accent-2)' }}>{row.team}</td>
                    <td style={{ padding: '20px', fontSize: '14px' }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="row reveal" id="faq">
          <div className="section-intro">
            <span className="section-label">FAQ</span>
            <h2>The practical details that matter.</h2>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <details className="q" key={item.q}>
                <summary>
                  {item.q}
                  <span className="plus">+</span>
                </summary>
                <div className="a">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="final reveal">
          <h2>Ready to scale <em>safely?</em></h2>
          <p>Connect one repo and two vendors to draft your first ticket in minutes. No credit card required.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Start watching free</a>}
            <a href="#" className="btn btn-lg">Book a custom demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}