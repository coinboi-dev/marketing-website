'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { changelog, typeColors, changeTypeIcons, changeTypeLabels } from '@/lib/changelog'

export default function ChangelogPage() {
  const [activeType, setActiveType] = useState<string>('all');
  const [expandedVersion, setExpandedVersion] = useState<string | null>(changelog[0]?.version || null);

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

  const filteredChangelog = activeType === 'all'
    ? changelog
    : changelog.filter(entry => entry.type === activeType);

  const typeFilters = [
    { id: 'all', label: 'All releases' },
    { id: 'major', label: 'Major' },
    { id: 'minor', label: 'Minor' },
    { id: 'patch', label: 'Patch' },
  ];

  return (
    <>
      <Nav />
      <main className="wrap">
        <section className="hero reveal">
          <div className="hero-aurora" />
          <div className="hero-grid" />
          <div className="hero-eyebrow">
            <span className="tag">Live</span>
            <span className="sep" />
            <span>Product Updates</span>
          </div>
          <h1 className="hero-title">
            What&apos;s <span className="serif">new</span> at Vendor Pulse.
          </h1>
          <p className="hero-sub">
            Every update, improvement, and fix — tracked right here. From policy engine releases to the smallest patch.
          </p>
        </section>

        <section className="row reveal">
          <div className="changelog-filters">
            <div className="filter-row">
              {typeFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveType(filter.id)}
                  className={activeType === filter.id ? 'btn btn-primary' : 'btn'}
                  style={{ borderRadius: '99px', fontSize: '12px' }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="changelog-timeline">
            {filteredChangelog.map((entry, index) => {
              const colors = typeColors[entry.type];
              const isExpanded = expandedVersion === entry.version;

              return (
                <div
                  key={entry.version}
                  className="changelog-entry reveal"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot" style={{ background: colors.text, boxShadow: `0 0 0 4px ${colors.bg}` }} />
                    {index < filteredChangelog.length - 1 && <div className="marker-line" />}
                  </div>

                  <div className="entry-content">
                    <button
                      className="entry-header"
                      onClick={() => setExpandedVersion(isExpanded ? null : entry.version)}
                      aria-expanded={isExpanded}
                    >
                      <div className="entry-meta">
                        <span
                          className="version-badge"
                          style={{ background: colors.bg, color: colors.text }}
                        >
                          v{entry.version}
                        </span>
                        <span
                          className="type-badge"
                          style={{ background: colors.bg, color: colors.text }}
                        >
                          {entry.typeLabel}
                        </span>
                        <span className="entry-date">{entry.date}</span>
                      </div>
                      <div className="entry-title-row">
                        <h3 className="entry-title">{entry.title}</h3>
                        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </span>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="entry-body">
                        <p className="entry-description">{entry.description}</p>
                        <div className="changes-list">
                          {entry.changes.map((changeGroup, groupIndex) => (
                            <div key={groupIndex} className="change-group">
                              <div className="change-type">
                                <span className="change-icon">{changeTypeIcons[changeGroup.type as keyof typeof changeTypeIcons]}</span>
                                <span>{changeTypeLabels[changeGroup.type as keyof typeof changeTypeLabels]}</span>
                              </div>
                              <ul className="change-items">
                                {changeGroup.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {filteredChangelog.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ color: 'var(--mute)' }}>No releases found for this filter.</p>
                <button
                  onClick={() => setActiveType('all')}
                  className="btn"
                  style={{ marginTop: '16px' }}
                >
                  View all releases
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="final reveal">
          <h2>Stay <em>in the loop.</em></h2>
          <p>Get notified when new releases ship. No spam, just the updates that matter to your integration stack.</p>
          <div className="hero-cta">
            <a href="/pricing" className="btn btn-primary btn-lg">Get started for free</a>
            <a href="/blog" className="btn btn-lg">Read the blog</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}