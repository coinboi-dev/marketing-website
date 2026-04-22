'use client';

import { useEffect } from 'react';
import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { 
  SiOpenai, SiAnthropic, SiGooglecloud, 
  SiShopify, SiStripe, SiTwilio, SiMeta, SiGithub, 
  SiGoogleads, SiGitlab, SiBitbucket, SiJira, SiSlack 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const aiVendors = [
  { name: 'OpenAI', Icon: SiOpenai, color: '#412991', desc: 'Track gpt-4, gpt-3.5-turbo, and DALL-E API updates.' },
  { name: 'Anthropic', Icon: SiAnthropic, color: '#d97757', desc: 'Monitor Claude model versions and API protocol changes.' },
  { name: 'Google AI', Icon: SiGooglecloud, color: '#4285f4', desc: 'Keep up with Gemini, Palm, and Vertex AI modifications.' },
  { name: 'AWS Bedrock', Icon: FaAws, color: '#ff9900', desc: 'Stay informed on foundation model availability and API updates.' },
]

const saasPlatforms = [
  { name: 'Shopify', Icon: SiShopify, color: '#95bf47', desc: 'Critical tracking for Shopify Scripts and Functions migrations.' },
  { name: 'Stripe', Icon: SiStripe, color: '#635bff', desc: 'Monitor breaking changes in Checkout and Subscriptions.' },
  { name: 'Twilio', Icon: SiTwilio, color: '#f22f46', desc: 'SMS, Voice, and Verify API change tracking.' },
  { name: 'Meta', Icon: SiMeta, color: '#0668e1', desc: 'Facebook Ads and Messenger platform modifications.' },
  { name: 'GitHub', Icon: SiGithub, color: '#ffffff', desc: 'API and webhook updates from the GitHub platform.' },
  { name: 'Google Ads', Icon: SiGoogleads, color: '#34a853', desc: 'Campaign and targeting API modifications.' },
]

const vcs = [
  { name: 'GitHub', Icon: SiGithub, desc: 'Native GitHub App integration with fine-grained permissions.' },
  { name: 'GitLab', Icon: SiGitlab, color: '#fc6d26', desc: 'Support for GitLab.com and self-hosted instances.' },
  { name: 'Bitbucket', Icon: SiBitbucket, color: '#0052cc', desc: 'Secure repository scanning via Bitbucket API.' },
]

const issueTrackers = [
  { name: 'Jira', Icon: SiJira, color: '#0052cc', desc: 'Deep integration with Jira Cloud and Data Center.' },
  { name: 'GitHub Issues', Icon: SiGithub, desc: 'Auto-create and link issues directly in your repo.' },
  { name: 'Slack', Icon: SiSlack, color: '#4a154b', desc: 'Real-time alerts for high-priority breaking changes.', coming: true },
]

const stats = [
  { value: '40+', label: 'Supported Vendors' },
  { value: '3 min', label: 'Average Setup' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'GitHub', label: 'Verified Partner' },
]

export default function IntegrationsPage() {
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
            <span className="tag">Ecosystem</span>
            <span className="sep" />
            <span>Connected Workflows</span>
          </div>
          <h1 className="hero-title">
            Connect Your Stack, <span className="serif">Automate</span> Your Workflow.
          </h1>
          <p className="hero-sub">
            Seamlessly connect your vendor API changelogs to your developer workflows with our native integrations.
          </p>
          <div className="hero-cta">
            <a href="#vendors" className="btn btn-primary btn-lg">Explore Integrations</a>
          </div>
        </section>

        <section className="row reveal">
          <div className="stat-band">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="v">{stat.value}</div>
                <div className="l">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal" id="how-it-works">
          <div className="section-intro">
            <span className="section-label">Architecture</span>
            <h2>How the connection works</h2>
            <p>We sit between your vendors and your code, translating documentation into action.</p>
          </div>

          <div className="flow reveal" style={{ marginTop: '40px' }}>
            <div className="flow-col">
              <h4>Vendor API</h4>
              <p className="sub">OpenAI, Stripe, etc.</p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div className="chip">Docs</div>
                <div className="chip">SDKs</div>
                <div className="chip">Webhooks</div>
              </div>
            </div>
            <div className="flow-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <div className="flow-col" style={{ borderColor: 'var(--accent)', background: 'linear-gradient(180deg, var(--accent-soft), var(--panel))' }}>
              <h4>Vendor Pulse</h4>
              <p className="sub">Intelligence Layer</p>
              <div style={{ marginTop: 'auto' }}>
                <div className="chg" style={{ marginBottom: '8px' }}>
                  <div className="dot high" />
                  <span>Parse & Match</span>
                </div>
                <div className="chg">
                  <div className="dot act" />
                  <span>Risk Analysis</span>
                </div>
              </div>
            </div>
            <div className="flow-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <div className="flow-col">
              <h4>Your Workflow</h4>
              <p className="sub">Jira, GitHub, Slack</p>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '8px', border: '1px solid var(--hair)', borderRadius: '6px', fontSize: '11px', background: 'var(--bg-2)' }}>Ticket Created #402</div>
                <div style={{ padding: '8px', border: '1px solid var(--hair)', borderRadius: '6px', fontSize: '11px', background: 'var(--bg-2)' }}>Slack Alert Sent</div>
              </div>
            </div>
          </div>
        </section>

        <section className="row reveal" id="vendors">
          <div className="section-intro">
            <span className="section-label">AI Providers</span>
            <h2>The "Big 4" AI Vendors</h2>
          </div>
          <div className="feat-grid">
            {aiVendors.map((vendor) => (
              <div className="feat reveal" key={vendor.name}>
                <div className="icon-box" style={{ color: vendor.color }}>
                  <vendor.Icon size={20} />
                </div>
                <h3>{vendor.name}</h3>
                <p>{vendor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Critical Platforms</span>
            <h2>Essential SaaS Integrations</h2>
          </div>
          <div className="feat-grid">
            {saasPlatforms.map((platform) => (
              <div className="feat reveal" key={platform.name}>
                <div className="icon-box" style={{ color: platform.color }}>
                  <platform.Icon size={20} />
                </div>
                <h3>{platform.name}</h3>
                <p>{platform.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Version Control</span>
            <h2>Repository Connections</h2>
          </div>
          <div className="feat-grid">
            {vcs.map((v) => (
              <div className="feat reveal" key={v.name}>
                <div className="icon-box" style={{ color: v.color }}>
                  <v.Icon size={20} />
                </div>
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Project Management</span>
            <h2>Issue Tracking & Automation</h2>
          </div>
          <div className="feat-grid">
            {issueTrackers.map((tracker) => (
              <div key={tracker.name} className="feat reveal">
                <div className="icon-box" style={{ color: tracker.color }}>
                  <tracker.Icon size={20} />
                </div>
                <h3>
                  {tracker.name}
                  {tracker.coming && <span className="chip accent" style={{ marginLeft: '10px' }}>Soon</span>}
                </h3>
                <p>{tracker.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="final reveal">
          <h2>Ready to <em>automate?</em></h2>
          <p>Connect your first repo and start receiving actionable tickets in minutes.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Connect Your First Repo</a>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}