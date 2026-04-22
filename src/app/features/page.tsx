'use client';

import { useEffect } from 'react';
import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SiSlack, SiJira } from 'react-icons/si';
import { LuLayers, LuWebhook, LuPlug, LuPin } from 'react-icons/lu';

const coreFeatures = [
  {
    title: 'Triage inbox, not a feed',
    body: 'Review only matched changes with confidence, owner, and evidence. Approve, merge duplicates, suppress, or snooze in one flow.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11"/><path d="m7 8 5 3 5-3"/><path d="m16 19 2 2 4-4"/></svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
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
    Icon: LuLayers
  },
  {
    title: 'Slack integration',
    body: 'Real-time alerts to Slack channels with action buttons to approve or snooze without context-switching.',
    Icon: SiSlack
  },
  {
    title: 'Jira native',
    body: 'Create Jira issues directly with custom fields for severity, due dates, and component mapping.',
    Icon: SiJira
  },
  {
    title: 'Webhook exports',
    body: 'Forward webhooks to your internal systems for custom ticket workflows beyond Jira and GitHub.',
    Icon: LuWebhook
  },
  {
    title: 'Custom connectors',
    body: 'Enterprise plans include custom API connectors for internal or niche vendors not in our catalog.',
    Icon: LuPlug
  },
  {
    title: 'Version pinning',
    body: 'Track specific API versions or deprecate old versions when vendors release updates.',
    Icon: LuPin
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
            <span className="tag">New</span>
            <span className="sep" />
            <span>Platform Capabilities</span>
          </div>
          <h1 className="hero-title">
            The complete solution for vendor API <span className="serif">risk.</span>
          </h1>
          <p className="hero-sub">
            From ingest to actionable ticket, every step is designed to minimize noise and maximize action.
          </p>
        </section>

        <section className="row reveal">
          <div className="stat-band">
            {metrics.map((metric) => (
              <div className="stat-item" key={metric.label}>
                <div className="v">{metric.value}</div>
                <div className="l">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Core capabilities</span>
            <h2>Built for engineering teams who ship.</h2>
            <p>We've automated the tedious parts of vendor management so you can focus on code.</p>
          </div>
          
          <div className="feat-grid">
            {coreFeatures.map((feature) => (
              <div className="feat reveal" key={feature.title}>
                <div className="icon-box">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <ul style={{ marginTop: '20px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(feature.details || []).map((detail) => (
                    <li key={detail} style={{ fontSize: '13px', color: 'var(--mute)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-2)', marginTop: '2px' }}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="quote-card">
            <blockquote>"Vendor Pulse turned our 40-hour Shopify Scripts audit into a 15-minute verification. It's the first tool that actually understands our code."</blockquote>
            <div className="quote-attr">
              <div className="ava" />
              <div>
                <strong>Sarah Chen</strong>
                <span>Head of Platform, CommerceOS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">More features</span>
            <h2>Everything you need to scale.</h2>
          </div>
          <div className="feat-grid">
            {advancedFeatures.map((feature) => (
              <div className="feat reveal" key={feature.title}>
                <div className="icon-box">
                  <feature.Icon size={20} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
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
          <h2>Ready to see it <em>in action?</em></h2>
          <p>Connect one repo and two vendors to draft your first ticket in minutes. Free forever on one repo.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Start watching free</a>}
            <a href="#" className="btn btn-lg">Book a demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}