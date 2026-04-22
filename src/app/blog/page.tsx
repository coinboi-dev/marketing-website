'use client';

import { useState, useEffect } from 'react';
import WaitlistForm from '@/components/WaitlistForm'
import { flags } from '@/lib/flags'
import { posts } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const categories = [
  { id: 'all', label: 'All posts' },
  { id: 'api-monitoring', label: 'API Monitoring' },
  { id: 'ai-deprecations', label: 'AI Deprecations' },
  { id: 'platform-engineering', label: 'Platform Engineering' },
  { id: 'case-studies', label: 'Case Studies' },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

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
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);

  const featuredPost = posts[0];
  const remainingPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug || activeCategory !== 'all');

  return (
    <>
      <Nav />
      <main className="wrap">
        <section className="hero reveal">
          <div className="hero-aurora" />
          <div className="hero-grid" />
          <div className="hero-eyebrow">
            <span className="tag">Pulse</span>
            <span className="sep" />
            <span>Engineering Insights</span>
          </div>
          <h1 className="hero-title">
            The <span className="serif">Pulse</span> Blog.
          </h1>
          <p className="hero-sub">
            Expert insights on API monitoring, vendor deprecations, and platform stability.
          </p>
        </section>

        <section className="row reveal">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'btn btn-primary' : 'btn'}
                style={{ borderRadius: '99px', fontSize: '12px' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {activeCategory === 'all' && (
            <div className="feat wide reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '40px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span className="chip lime">Featured Post</span>
                <h2 style={{ fontSize: '32px', margin: '0', lineHeight: '1.1' }}>
                  <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                </h2>
                <p style={{ color: 'var(--dim)', fontSize: '16px', lineHeight: '1.6' }}>{featuredPost.excerpt}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--mute)' }}>
                  <span>{featuredPost.author}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <a href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ width: 'fit-content', marginTop: '12px' }}>
                  Read now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
              <div style={{ background: 'var(--panel-2)', borderRadius: '12px', border: '1px solid var(--hair)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <div className="chg">
                    <div className="dot high" />
                    <span>Vendor API Change Detected</span>
                 </div>
                 <div style={{ padding: '12px', border: '1px solid var(--hair)', borderRadius: '6px', fontSize: '11px', background: 'var(--bg-2)', color: 'var(--mute)', fontFamily: 'var(--mono)' }}>
                    {`// Affected code matched\nif (vendor.version === 'v2') {\n  // migration required\n}`}
                 </div>
                 <div className="chg">
                    <div className="dot act" />
                    <span>Jira Ticket Created</span>
                 </div>
              </div>
            </div>
          )}

          {remainingPosts.length === 0 && activeCategory !== 'all' ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ color: 'var(--mute)', marginBottom: '20px' }}>No posts found in this category.</p>
              <button onClick={() => setActiveCategory('all')} className="btn">View all posts</button>
            </div>
          ) : (
            <div className="feat-grid">
              {remainingPosts.map(post => (
                <div key={post.slug} className="feat reveal" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="chip">{post.categoryLabel}</span>
                    <span style={{ fontSize: '11px', color: 'var(--mute)' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '20px', margin: '0 0 12px', lineHeight: '1.2' }}>
                    <a href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>{post.title}</a>
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: '1.55', marginBottom: '24px' }}>{post.excerpt}</p>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {post.keywords.slice(0, 2).map(keyword => (
                        <span key={keyword} style={{ fontSize: '11px', color: 'var(--mute)' }}>#{keyword}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--panel-2)', border: '1px solid var(--hair)' }} />
                      <span style={{ fontSize: '12px', color: 'var(--mute)' }}>{post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="row reveal">
           <div className="final" style={{ background: 'radial-gradient(ellipse at top right, var(--accent-soft), transparent 60%), var(--bg-2)', borderColor: 'var(--hair)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                <div>
                  <span className="section-label">Newsletter</span>
                  <h2 style={{ fontSize: '32px', margin: '12px 0' }}>Subscribe to the Pulse</h2>
                  <p style={{ fontSize: '16px', color: 'var(--dim)', margin: '0' }}>Get the latest API deprecation alerts and platform engineering best practices delivered to your inbox weekly.</p>
                </div>
                <div>
                  <form className="hero-cta" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="engineering@company.com" 
                      style={{ background: 'var(--bg)', border: '1px solid var(--hair)', borderRadius: '8px', padding: '12px 16px', color: '#fff', width: '100%', outline: 'none' }}
                    />
                    <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>Subscribe Now</button>
                    <p style={{ fontSize: '11px', color: 'var(--faint)', textAlign: 'center', width: '100%' }}>No spam. Just engineering signal. Unsubscribe anytime.</p>
                  </form>
                </div>
              </div>
           </div>
        </section>

        <section className="final reveal">
          <h2>Stop reading changelogs. <em>Start shipping.</em></h2>
          <p>Get started for free. No credit card required. Connect your first repo in minutes.</p>
          <div className="hero-cta">
            {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary btn-lg">Get started for free</a>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}