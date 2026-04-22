import WaitlistForm from '@/components/WaitlistForm'
import { flags } from '@/lib/flags'
import { posts } from '@/lib/posts'
export const runtime = 'edge';

export const metadata = {
  title: 'The Pulse Blog | API Monitoring, AI Deprecations, and Platform Stability',
  description: 'Expert insights on tracking OpenAI model sunsets, Shopify Scripts migrations, and automating your API changelog-to-ticket workflow.',
}

const categories = [
  { id: 'all', label: 'All posts' },
  { id: 'api-monitoring', label: 'API Monitoring' },
  { id: 'ai-deprecations', label: 'AI Deprecations' },
  { id: 'platform-engineering', label: 'Platform Engineering' },
  { id: 'case-studies', label: 'Case Studies' },
]

export default async function BlogPage(props: { searchParams: Promise<{ category?: string }> }) {
  const searchParams = await props.searchParams
  const activeCategory = searchParams.category || 'all'
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  return (
    <main className="site">
      <nav className="top-nav">
        <a href="/" className="brand">Vendor Pulse</a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/integrations">Integrations</a>
          <a href="/blog" className="current">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Blog</p>
        <h1>The Pulse Blog</h1>
        <p className="hero-copy">
          Expert insights on API monitoring, vendor deprecations, and platform stability.
        </p>
      </section>

      <section className="category-filter">
        {categories.map(cat => (
          <a
            key={cat.id}
            href={cat.id === 'all' ? '/blog' : `/blog?category=${cat.id}`}
            className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </a>
        ))}
      </section>

      <section className="post-list">
        {filteredPosts.length === 0 ? (
          <div className="empty-state">
            <p>No posts found in this category.</p>
            <a href="/blog" className="btn secondary">View all posts</a>
          </div>
        ) : (
          filteredPosts.map(post => (
            <article key={post.slug} className="post-card">
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span className="category-badge">{post.categoryLabel}</span>
              <h2>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="excerpt">{post.excerpt}</p>
              <div className="tags">
                {post.keywords.slice(0, 3).map(keyword => (
                  <span key={keyword} className="tag">{keyword}</span>
                ))}
              </div>
            </article>
          ))
        )}
      </section>

      {filteredPosts.length > 0 && (
        <section className="load-more">
          <button className="btn secondary">Load more posts</button>
        </section>
      )}

      <section className="cta-block">
        <h2>Stop reading changelogs. Start shipping.</h2>
        <p>Get started for free. No credit card required.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="#top" className="btn primary">Get started for free</a>}
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="/" className="brand">Vendor Pulse</a>
            <p>Code-aware API monitoring for engineering teams.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/integrations">Integrations</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Changelog</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
        <p className="copyright">© 2026 Vendor Pulse. All rights reserved.</p>
      </footer>

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
        .nav-links a.current { color: #8de8d5; }

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
        }

        .hero-copy {
          color: #b5c5db;
          font-size: 1.08rem;
          line-height: 1.7;
          max-width: 60ch;
          margin: 0;
        }

        .category-filter {
          display: flex;
          gap: 0.5rem;
          margin-top: 1.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }

        .category-pill {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 999px;
          padding: 0.5rem 1rem;
          color: #b5c5db;
          text-decoration: none;
          font-size: 0.875rem;
          white-space: nowrap;
          transition: all 150ms;
        }

        .category-pill:hover {
          border-color: rgba(141, 232, 213, 0.4);
          color: #ecf2ff;
        }

        .category-pill.active {
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          border-color: transparent;
          color: #081018;
          font-weight: 600;
        }

        .post-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .post-card {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
          padding: 1.5rem;
          background: rgba(9, 23, 40, 0.62);
          transition: all 150ms;
        }

        .post-card:hover {
          border-color: rgba(141, 232, 213, 0.4);
        }

        .post-card time {
          color: #6b7a8f;
          font-size: 0.8rem;
          float: right;
        }

        .category-badge {
          display: inline-block;
          background: rgba(20, 184, 166, 0.2);
          color: #8de8d5;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .post-card h2 {
          margin: 0.75rem 0 0.5rem;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .post-card h2 a {
          color: #ecf2ff;
          text-decoration: none;
        }

        .post-card h2 a:hover {
          color: #8de8d5;
        }

        .excerpt {
          color: #b5c5db;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(100, 116, 139, 0.2);
          color: #94a3b8;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
        }

        .empty-state p {
          color: #b5c5db;
          margin: 0 0 1rem;
        }

        .load-more {
          margin-top: 2rem;
          text-align: center;
        }

        .cta-block {
          margin-top: 3.5rem;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 20px;
          padding: 2.5rem;
          background: linear-gradient(150deg, rgba(6, 78, 59, 0.55), rgba(9, 23, 40, 0.62));
          text-align: center;
        }

        .cta-block h2 {
          margin: 0;
          font-size: clamp(1.4rem, 3.5vw, 2rem);
        }

        .cta-block p {
          margin: 0.75rem 0 1.25rem;
          color: #b5c5db;
          font-size: 1rem;
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
          cursor: pointer;
          transition: opacity 150ms;
        }

        .btn.primary {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #1a1301;
          border-color: transparent;
          font-weight: 700;
        }

        .btn:hover { opacity: 0.85; }

        .site-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(143, 165, 192, 0.2);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-col h4 {
          margin: 0 0 0.75rem;
          color: #ecf2ff;
          font-size: 0.9rem;
        }

        .footer-col a {
          display: block;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .footer-col a:hover { color: #8de8d5; }

        .footer-col p {
          color: #64748b;
          font-size: 0.85rem;
          margin: 0;
        }

        .copyright {
          margin: 2rem 0 0;
          color: #64748b;
          font-size: 0.8rem;
          text-align: center;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 760px) {
          .site { width: min(1160px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; flex-wrap: wrap; }
          .nav-links { display: none; }
          .hero { padding: 1.35rem; }
          .footer-grid { grid-template-columns: 1fr; }
          .post-card time { float: none; display: block; margin-bottom: 0.5rem; }
          .btn { min-width: 44px; min-height: 44px; }
        }
      `}</style>
    </main>
  )
}