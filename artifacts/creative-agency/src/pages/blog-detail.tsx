import { Link, useRoute } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Share2, Check, User, Terminal } from 'lucide-react';
import { useState } from 'react';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data';
import { SiteFooter } from '@/components/site-footer';

export function BlogDetailPage() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="page-main notfound-page">
        <div className="page-hero-banner site-grid">
          <div className="section-wrap">
            <span className="section-kicker">// ARTICLE NOT FOUND</span>
            <h1 className="page-hero-title">
              DISPATCH <span className="red">NOT</span> FOUND
            </h1>
            <p className="page-hero-desc">
              The engineering article you are looking for does not exist in our archive.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/blog" className="hero-explore-btn">
                <span>RETURN TO DISPATCH INDEX</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <SiteFooter />
      </main>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="page-main blog-detail-page">
      {/* Top Banner Navigation */}
      <div className="blog-detail-topbar site-grid">
        <div className="section-wrap">
          <Link href="/blog" className="blog-back-link">
            <ArrowLeft size={14} />
            <span>RETURN TO ALL DISPATCHES</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <header className="blog-article-header site-grid">
        <div className="section-wrap">
          <div className="blog-card-meta">
            <span className="blog-category-badge">// {post.category.toUpperCase()}</span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-item">{post.date}</span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-item">
              <Clock size={12} className="inline-icon" /> {post.readTime}
            </span>
          </div>

          <h1 className="blog-article-headline">{post.title}</h1>
          <p className="blog-article-lead">{post.summary}</p>

          <div className="blog-article-byline">
            <div className="blog-author-block">
              <div className="blog-author-avatar">
                {post.author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className="blog-author-text">
                <span className="blog-author-name">{post.author.name}</span>
                <span className="blog-author-role">// {post.author.role}</span>
              </div>
            </div>

            <button type="button" className="blog-share-btn" onClick={handleShare}>
              {copied ? (
                <>
                  <Check size={14} className="red" />
                  <span>COPIED LINK</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>SHARE DISPATCH</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <section className="editorial-section blog-content-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">TECHNICAL SPECS</span>
            <div className="blog-tags-rail">
              <span className="blog-tags-label">TOPIC TAGS:</span>
              <div className="blog-tags-list">
                {post.tags.map((t) => (
                  <span key={t} className="tech-badge-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="editorial-main">
            <article className="blog-prose-flow">
              {post.content.map((block, idx) => (
                <div key={block.heading} className="blog-content-block">
                  <span className="story-step-num">// 0{idx + 1}</span>
                  <h2 className="blog-block-heading">{block.heading}</h2>

                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="blog-block-para">
                      {p}
                    </p>
                  ))}

                  {block.codeSnippet && (
                    <div className="blog-code-box">
                      <div className="blog-code-header">
                        <div className="code-header-left">
                          <Terminal size={12} className="red-icon" />
                          <span className="code-lang-label">
                            {block.codeSnippet.language.toUpperCase()}
                          </span>
                        </div>
                        <span className="code-status-pill">VERIFIED ARCHITECTURE</span>
                      </div>
                      <pre className="blog-code-pre">
                        <code>{block.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </article>

            {/* Inquiries Box */}
            <div className="general-apply-banner" style={{ marginTop: '64px' }}>
              <div>
                <h3 className="general-apply-title">
                  NEED THIS <span className="red">ARCHITECTURE</span> IN YOUR APP?
                </h3>
                <p className="general-apply-desc">
                  bit3labs designs custom 3D web applications, headless e-commerce platforms, and mission-critical enterprise systems.
                </p>
              </div>
              <Link href="/contact" className="general-apply-btn">
                <span>SCHEDULE DISCOVERY CALL</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            {/* Related Articles */}
            {otherPosts.length > 0 && (
              <div className="blog-related-section">
                <div className="work-header-row">
                  <div className="work-title-wrap">
                    <h3 className="section-title">
                      RELATED <span className="red">DISPATCHES</span>
                    </h3>
                  </div>
                </div>

                <div className="blog-related-grid">
                  {otherPosts.map((op) => (
                    <Link key={op.slug} href={`/blog/${op.slug}`} className="blog-related-card">
                      <span className="blog-category-badge">// {op.category.toUpperCase()}</span>
                      <h4 className="blog-related-title">{op.title}</h4>
                      <p className="blog-related-summary">{op.summary}</p>
                      <div className="blog-card-link" style={{ marginTop: '12px' }}>
                        <span>READ DISPATCH</span>
                        <span className="square-arrow-icon" aria-hidden="true">
                          <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
