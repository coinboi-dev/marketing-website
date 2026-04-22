'use client';

import { useEffect } from 'react';
import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SiShopify, SiOpenai, SiStripe } from 'react-icons/si';

const deprecations = [
  {
    vendor: 'Shopify Scripts',
    Icon: SiShopify,
    color: '#95bf47',
    deadline: 'June 30, 2026',
    status: 'active',
    affected: 'scripts/*.js, scripts/*.lua',
    action: 'Migrate to Shopify Functions',
    severity: 'critical',
  },
  {
    vendor: 'OpenAI GPT-4',
    Icon: SiOpenai,
    color: '#412991',
    deadline: 'Q3 2026',
    status: 'warning',
    affected: 'config/models/*, lib/ai.ts',
    action: 'Update model references',
    severity: 'high',
  },
  {
    vendor: 'Stripe API v2',
    Icon: SiStripe,
    color: '#635bff',
    deadline: 'December 2026',
    status: 'upcoming',
    affected: 'lib/payments/*',
    action: 'Upgrade to API v3',
    severity: 'medium',
  },
]

const marqueeItems = [
  'Shopify Scripts EOL: June 2026',
  'GPT-4-0314 Shutdown: Sept 2026',
  'Stripe v2 API Sunset: Dec 2026',
  'Twilio Programmable Fax EOL',
  'SendGrid Legacy API Deprecation',
  'Google Ads API v14 Sunset',
  'OpenAI Embeddings-v2 Retirement',
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
    body: 'We keep watching after the initial audit. New deprecations trigger alerts before they become crises.',
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
        <section id="top" className="hero reveal">
          <div className="hero-aurora" />
          <div className="hero-grid" />
          <div className="hero-eyebrow">
            <span className="tag">Audit</span>
            <span className="sep" />
            <span>Risk Assessment</span>
          </div>
          <h1 className="hero-title">
            Find every deprecated API before it <span className="strike">breaks.</span>
          </h1>
          <p className="hero-sub">
            Connect your repositories once. We scan for deprecated vendor API usage across your entire organization
            and generate a prioritized audit report with migration guidance and timelines.
          </p>
          <div className="hero-cta">
            <a href="#start" className="btn btn-primary btn-lg">Start free audit</a>
            <a href="#how" className="btn btn-lg">See how it works</a>
          </div>

          <div style={{ marginTop: '56px', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)', padding: '16px 0', overflow: 'hidden' }}>
             <div style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'marquee 30s linear infinite' }}>
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <div key={i} style={{ fontSize: '12px', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="dot high" />
                    {item}
                  </div>
                ))}
             </div>
          </div>
          <style jsx>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>

          <div style={{ marginTop: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
              <div className="stage-title">
                <span className="live">Active deprecations we're tracking</span>
              </div>
            </div>
            <div className="feat-grid">
              {deprecations.map((dep) => (
                <div key={dep.vendor} className="feat reveal" style={{ 
                  borderLeft: dep.severity === 'critical' ? '2px solid var(--high)' : '1px solid var(--hair)',
                  background: dep.severity === 'critical' ? 'linear-gradient(to right, var(--high-soft), transparent)' : 'var(--panel)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <div style={{ color: dep.color }}>
                          <dep.Icon size={24} />
                       </div>
                       <h3 style={{ margin: 0 }}>{dep.vendor}</h3>
                    </div>
                    <span className={['chip', dep.severity === 'critical' ? 'high' : 'accent'].join(' ')} style={{ 
                      background: dep.severity === 'critical' ? 'var(--high-soft)' : 'var(--panel-2)',
                      color: dep.severity === 'critical' ? 'var(--high)' : 'var(--accent-2)'
                    }}>
                      {dep.severity}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--mute)', marginBottom: '8px' }}>Deadline: {dep.deadline}</p>
                  <p style={{ fontSize: '12px', color: 'var(--faint)', fontFamily: 'var(--mono)' }}>Affected: {dep.affected}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="row reveal" id="how">
          <div className="section-intro">
            <span className="section-label">Process</span>
            <h2>From connected repo to prioritized findings in minutes.</h2>
          </div>
          <div className="feat-grid">
            {auditSteps.map((item) => (
              <div className="feat reveal" key={item.step}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent-2)', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '12px', marginBottom: '16px' }}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal" id="sample-report">
           <div className="section-intro">
              <span className="section-label">Output</span>
              <h2>Sample Audit Report</h2>
              <p>What you'll see in your dashboard once the scan completes.</p>
           </div>
           
           <div className="feat reveal" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--hair-2)' }}>
              <div style={{ padding: '12px 20px', background: 'var(--panel)', borderBottom: '1px solid var(--hair)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--mute)', fontFamily: 'var(--mono)' }}>REPORT_ID: AUDIT-9920-X</span>
                <span className="chip lime">Generated 2m ago</span>
              </div>
              <div style={{ padding: '32px' }}>
                 <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--mute)', marginBottom: '4px' }}>Summary</div>
                    <div style={{ fontSize: '24px', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>12 Critical Risks Found across 3 Repositories</div>
                 </div>
                 
                 <div style={{ background: 'var(--bg-2)', border: '1px solid var(--hair)', borderRadius: '8px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontWeight: '500', fontSize: '14px' }}>Shopify Scripts (Legacy)</span>
                      <span className="chip" style={{ background: 'var(--high-soft)', color: 'var(--high)', border: 'none' }}>CRITICAL</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--dim)', fontFamily: 'var(--mono)', lineHeight: '1.6' }}>
                      {`repo: marketing-site-liquid\nfile: snippets/cart-discounts.liquid:12\nfile: templates/checkout.liquid:45\n\nRemediation: Migrate to Shopify Functions before June 30, 2026.`}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <section className="row reveal" id="benefits">
          <div className="section-intro">
            <span className="section-label">Benefits</span>
            <h2>Don't wait for production failures.</h2>
          </div>
          <div className="feat-grid">
            {benefits.map((benefit) => (
              <div className="feat reveal" key={benefit.title}>
                <div className="icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal" id="faq">
          <div className="section-intro">
            <span className="section-label">FAQ</span>
            <h2>The practical details.</h2>
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

        <section id="start" className="final reveal">
          <h2>Know what needs to change before <em>it breaks.</em></h2>
          <p>Run your first deprecation audit today. Results in minutes.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Start free audit</a>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}