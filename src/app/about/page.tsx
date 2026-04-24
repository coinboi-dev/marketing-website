// @ts-nocheck

'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { flags } from '@/lib/flags'
import WaitlistForm from '@/components/WaitlistForm'

const team = [
  {
    name: 'Alex Rivera',
    role: 'Co-founder & CEO',
    bio: 'Previously led platform at Stripe. Spent years watching teams scramble when APIs break.',
    color: 'linear-gradient(135deg, var(--accent), var(--lime))',
  },
  {
    name: 'Maya Patel',
    role: 'Co-founder & CTO',
    bio: 'Built changelog monitoring at GitHub. Knows what it takes to keep systems running.',
    color: 'linear-gradient(135deg, var(--lime), var(--watch))',
  },
  {
    name: 'Jordan Kim',
    role: 'Head of Engineering',
    bio: 'Former lead at Twilio. Obsessed with developer experience and reliable integrations.',
    color: 'linear-gradient(135deg, var(--accent-2), var(--act))',
  },
  {
    name: 'Sam Chen',
    role: 'Head of Product',
    bio: 'Previously product at Notion. Focuses on making complex workflows feel simple.',
    color: 'linear-gradient(135deg, var(--watch), var(--lime))',
  },
]

const values = [
  {
    title: 'Noise is the enemy',
    body: 'Engineers have enough on their plates. We obsess over signal-to-noise ratio above everything else.',
  },
  {
    title: 'Evidence over assumptions',
    body: 'Every action we take is backed by data. We show our work and invite scrutiny.',
  },
  {
    title: 'Ship to learn',
    body: 'We move fast and iterate. The best way to understand what teams need is to ship and listen.',
  },
  {
    title: 'Security by default',
    body: 'Least privilege isn\'t a feature—it\'s the only way we operate. Read-only by default.',
  },
]

const timeline = [
  { year: '2023', event: 'Founded after watching 3 companies burn weeks on vendor changes' },
  { year: '2024 Q1', event: 'Seed round. First 12 design partners joined the beta' },
  { year: '2024 Q3', event: 'Public launch. 400 repos connected on day one' },
  { year: '2025', event: 'Jira and Slack integrations. Enterprise plan launched' },
  { year: '2026', event: 'Now tracking 50+ vendors. 10,000+ repos protected' },
]

export default function AboutPage() {
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
            <span className="sep" />
            <span>About Vendor Pulse</span>
          </div>
          <h1 className="hero-title">
            We believe vendor changes shouldn't break <span className="serif">production.</span>
          </h1>
          <p className="hero-sub">
            Vendor Pulse monitors API changelogs, maps changes to your code, and creates actionable tickets—so your team stays ahead of breaking changes instead of scrambling to fix them.
          </p>
        </section>

        <section className="row reveal">
          <div className="quote-card">
            <blockquote>"We built this because we lived the problem. Three companies, hundreds of vendor updates, and too many late nights."</blockquote>
            <div className="quote-attr">
              <div className="ava" />
              <div>
                <strong>Alex Rivera</strong>
                <span>Co-founder & CEO, Vendor Pulse</span>
              </div>
            </div>
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">Our story</span>
            <h2>Built by engineers, for engineers.</h2>
            <p>We've been on the other side—scrambling when a vendor pushes a breaking change, explaining to leadership why the sprint is blown, wishing we had warning.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: '16px', overflow: 'hidden' }}>
            {timeline.map((item, i) => (
              <div 
                key={item.year} 
                style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  padding: '24px 28px', 
                  borderTop: i > 0 ? '1px solid var(--hair)' : 'none',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--mono)', 
                  fontSize: '12px', 
                  color: 'var(--accent-2)', 
                  minWidth: '80px',
                  fontWeight: 500,
                }}>
                  {item.year}
                </span>
                <span style={{ color: 'var(--dim)', fontSize: '14px' }}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">The team</span>
            <h2>The people behind the platform.</h2>
            <p>We've worked at companies where vendor changes cost weeks of engineering time. We're building the tool we wished we had.</p>
          </div>
          
          <div className="feat-grid">
            {team.map((member) => (
              <div className="feat reveal" key={member.name}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  background: member.color,
                  marginBottom: '20px',
                }} />
                <h3>{member.name}</h3>
                <span style={{ fontSize: '12px', color: 'var(--accent-2)', display: 'block', marginBottom: '10px' }}>
                  {member.role}
                </span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="row reveal">
          <div className="section-intro">
            <span className="section-label">What we believe</span>
            <h2>Our values shape our product.</h2>
          </div>
          
          <div className="feat-grid">
            {values.map((value) => (
              <div className="feat reveal" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="final reveal">
          <h2>Join the teams shipping with <em>confidence.</em></h2>
          <p>Start protecting your repos today. Free forever on one repo, no credit card required.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Start free</a>}
            <a href="#" className="btn btn-lg">Book a demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}