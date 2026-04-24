'use client';
import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="top" id="nav">
      <div className="inner">
        <a className="brand" href="/">
          <div className="brand-mark">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <polyline points="2,10 5,10 7,4 9,16 11,7 13,13 15,10 18,10" stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="brand-name">Vendor Pulse</span>
        </a>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/integrations">Integrations</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/changelog">Changelog</a></li>
          <li><a href="/deprecation-audit">Audit</a></li>
        </ul>
        <div className="cta-row">
          <a href="#" className="btn btn-ghost">Sign in</a>
          <a href="/pricing" className="btn btn-primary">Start free</a>
        </div>
      </div>
    </nav>
  );
}
