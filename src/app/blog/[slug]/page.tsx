import { notFound } from 'next/navigation'
import WaitlistForm from '@/components/WaitlistForm'
import { flags } from '@/lib/flags'
import { getPostBySlug, getRelatedPosts } from '@/lib/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: `${post.title} | The Pulse Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  const shareText = encodeURIComponent(`${post.title} - via @vendorpulse`)
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://vendorpulse.com/blog/${post.slug}`)}`,
    x: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(`https://vendorpulse.com/blog/${post.slug}`)}`,
  }

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

      <article className="article">
        <header className="article-header">
          <span className="category-badge">{post.categoryLabel}</span>
          <h1>{post.title}</h1>
          <div className="meta">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span className="separator">·</span>
            <span>{post.readTime}</span>
          </div>
          <p className="author">By {post.author}</p>
        </header>

        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        <aside className="social-share">
          <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="share-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href={shareUrls.x} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="share-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <button aria-label="Copy link" className="share-btn" onClick={() => navigator.clipboard.writeText(`https://vendorpulse.com/blog/${post.slug}`)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
          </button>
        </aside>
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>Continue reading</h2>
          <div className="related-grid">
            {relatedPosts.map(related => (
              <article key={related.slug} className="related-card">
                <span className="category-badge">{related.categoryLabel}</span>
                <h3>
                  <a href={`/blog/${related.slug}`}>{related.title}</a>
                </h3>
                <p>{related.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="cta-block">
        <h2>Stop reading changelogs. Start shipping.</h2>
        <p>Get started for free. No credit card required. Connect your first repo in minutes.</p>
        {flags.waitlist ? <WaitlistForm /> : <a href="/blog" className="btn primary">Get started for free</a>}
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
          width: min(680px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 1.5rem 0 5rem;
          max-width: 680px;
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

        .article { position: relative; }

        .article-header {
          margin-bottom: 2rem;
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

        .article-header h1 {
          margin: 1rem 0 0.75rem;
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          line-height: 1.15;
          color: #ecf2ff;
        }

        .meta {
          color: #94a3b8;
          font-size: 0.9rem;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .separator {
          opacity: 0.5;
        }

        .author {
          color: #64748b;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .article-body {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #cbd5e1;
        }

        .article-body h2 {
          margin: 2rem 0 1rem;
          font-size: 1.5rem;
          color: #ecf2ff;
        }

        .article-body h3 {
          margin: 1.5rem 0 0.75rem;
          font-size: 1.25rem;
          color: #ecf2ff;
        }

        .article-body p {
          margin: 0 0 1rem;
        }

        .article-body ul,
        .article-body ol {
          margin: 0 0 1rem;
          padding-left: 1.5rem;
        }

        .article-body li {
          margin-bottom: 0.5rem;
        }

        .article-body strong {
          color: #f59e0b;
        }

        .article-body code {
          font-family: 'SF Mono', 'Fira Code', monospace;
          background: #0d1520;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.9em;
          color: #8de8d5;
        }

        .social-share {
          display: flex;
          gap: 0.5rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(143, 165, 192, 0.25);
        }

        .share-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 8px;
          background: rgba(9, 23, 40, 0.62);
          color: #94a3b8;
          text-decoration: none;
          transition: all 150ms;
        }

        .share-btn:hover {
          border-color: #14b8a6;
          color: #14b8a6;
        }

        .share-btn button {
          background: none;
          border: none;
        }

        .related-posts {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(143, 165, 192, 0.25);
        }

        .related-posts h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .related-grid {
          display: grid;
          gap: 1rem;
        }

        .related-card {
          border: 1px solid rgba(143, 165, 192, 0.25);
          border-radius: 16px;
          padding: 1.25rem;
          background: rgba(9, 23, 40, 0.62);
        }

        .related-card h3 {
          margin: 0.75rem 0 0.5rem;
          font-size: 1.1rem;
        }

        .related-card h3 a {
          color: #ecf2ff;
          text-decoration: none;
        }

        .related-card h3 a:hover {
          color: #8de8d5;
        }

        .related-card p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        .footer-col h4 { margin: 0 0 0.75rem; color: #ecf2ff; font-size: 0.9rem; }

        .footer-col a {
          display: block;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .footer-col p { color: #64748b; font-size: 0.85rem; margin: 0; }

        .copyright {
          margin: 2rem 0 0;
          color: #64748b;
          font-size: 0.8rem;
          text-align: center;
        }

        @media (max-width: 760px) {
          .site { width: min(680px, calc(100% - 1.4rem)); }
          .top-nav { border-radius: 16px; flex-wrap: wrap; }
          .nav-links { display: none; }
          .social-share { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(8, 16, 24, 0.95); padding: 0.75rem; justify-content: center; border-top: 1px solid rgba(143, 165, 192, 0.25); }
        }
      `}</style>
    </main>
  )
}