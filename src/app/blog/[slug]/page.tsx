import { notFound } from 'next/navigation'
import WaitlistForm from '@/components/WaitlistForm'
import { flags } from '@/lib/flags'
import { getPostBySlug, getRelatedPosts } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const runtime = 'edge';

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

  return (
    <>
      <Nav />
      <main className="wrap">
        <article className="feat" style={{ marginTop: '40px', padding: '40px' }}>
          <header style={{ marginBottom: '40px' }}>
            <div style={{ marginBottom: '16px' }}><span className="chip">{post.categoryLabel}</span></div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '20px', lineHeight: '1.1' }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: 'var(--mute)', flexWrap: 'wrap' }}>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--text)' }} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {relatedPosts.length > 0 && (
          <section className="row">
            <p className="eyebrow">More to read</p>
            <h2 style={{ marginBottom: '32px' }}>Related posts</h2>
            <div className="feat-grid">
              {relatedPosts.map(related => (
                <div key={related.slug} className="feat">
                  <span className="chip" style={{ marginBottom: '12px' }}>{related.categoryLabel}</span>
                  <h3 style={{ margin: '12px 0' }}>
                    <a href={`/blog/${related.slug}`} style={{ color: 'inherit' }}>{related.title}</a>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)' }}>{related.excerpt}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="final">
          <h2>Stop reading changelogs. Start shipping.</h2>
          <p>Get started for free. No credit card required.</p>
          {flags.waitlist ? <WaitlistForm /> : <a href="/pricing" className="btn btn-primary">Get started for free</a>}
        </section>
      </main>
      <Footer />
    </>
  )
}