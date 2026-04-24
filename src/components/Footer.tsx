export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="/">
              <div className="brand-mark">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><polyline points="2,10 5,10 7,4 9,16 11,7 13,13 15,10 18,10" stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>
              </div>
              <span className="brand-name">Vendor Pulse</span>
            </a>
            <p>Code-aware monitoring for the vendor APIs your product depends on. Built in Melbourne, shipped globally.</p>
          </div>
          <div className="foot-col">
            <h5>Product</h5>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/integrations">Integrations</a>
            <a href="/blog">Blog</a>
            <a href="/deprecation-audit">Audit</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="#">Security</a>
            <a href="#">Careers</a>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <a href="#">Docs</a>
            <a href="#">API reference</a>
            <a href="#">System status</a>
            <a href="#">Trust center</a>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="#">Cookie policy</a>
          </div>
        </div>
        <div className="foot-bot">
          <p>© 2026 Vendor Pulse. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
