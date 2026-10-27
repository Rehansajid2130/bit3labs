import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Clock, User, Tag, Sparkles } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data';
import { SiteFooter } from '@/components/site-footer';

const CATEGORIES = [
  'ALL',
  '3D & Creative Frontend',
  'Headless Commerce',
  'Mobile Engineering',
  'Systems & ERP',
] as const;

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredPosts = selectedCategory === 'ALL'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <main className="page-main blog-page">
      {/* 1. Page Hero Banner */}
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">ENGINEERING &amp; INSIGHTS</span>
          <h1 className="page-hero-title">
            THE BIT3LABS <span className="red">DISPATCH</span>
          </h1>
          <p className="page-hero-desc">
            Deep technical teardowns, WebGL performance profiling, distributed systems architecture, and brutalist design principles direct from the studio engineering team.
          </p>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <section className="blog-filter-section">
        <div className="section-wrap">
          <div className="blog-filter-row">
            <span className="blog-filter-label">// FILTER BY DOMAIN:</span>
            <div className="blog-filter-buttons">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blog-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blog Content Section */}
      <section className="editorial-section blog-articles-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">INDEX ARCHIVE</span>
            <div className="blog-rail-stats">
              <span className="blog-rail-count">{filteredPosts.length}</span>
              <span className="blog-rail-label">ARTICLES AVAILABLE</span>
            </div>
          </aside>

          <div className="editorial-main">
            {/* Featured Post (Hero Post) */}
            {featuredPost && (
              <article className="blog-featured-card">
                <div className="blog-card-meta">
                  <span className="blog-category-badge">// {featuredPost.category.toUpperCase()}</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-meta-item">{featuredPost.date}</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-meta-item">
                    <Clock size={12} className="inline-icon" /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="blog-featured-title">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="blog-featured-summary">{featuredPost.summary}</p>

                <div className="blog-card-footer">
                  <div className="blog-author-info">
                    <span className="blog-author-name">{featuredPost.author.name}</span>
                    <span className="blog-author-role">// {featuredPost.author.role}</span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`} className="blog-read-cta">
                    <span>READ FULL DISPATCH</span>
                    <span className="square-arrow-icon" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </article>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="blog-grid-list">
                {regularPosts.map((post) => (
                  <article key={post.slug} className="blog-card-item">
                    <div className="blog-card-meta">
                      <span className="blog-category-badge">// {post.category.toUpperCase()}</span>
                      <span className="blog-meta-dot">•</span>
                      <span className="blog-meta-item">{post.date}</span>
                    </div>

                    <h3 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="blog-card-summary">{post.summary}</p>

                    <div className="blog-card-tags">
                      {post.tags.map((t) => (
                        <span key={t} className="tech-badge-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="blog-card-footer">
                      <span className="blog-read-time">
                        <Clock size={12} className="inline-icon" /> {post.readTime}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="blog-card-link">
                        <span>READ DISPATCH</span>
                        <span className="square-arrow-icon" aria-hidden="true">
                          <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Studio Engineering Newsletter / Inquiries */}
      <section className="editorial-section blog-newsletter-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">COLLABORATE</span>
          </aside>

          <div className="editorial-main">
            <div className="general-apply-banner">
              <div>
                <h3 className="general-apply-title">
                  HAVE A COMPLEX <span className="red">TECHNICAL</span> CHALLENGE?
                </h3>
                <p className="general-apply-desc">
                  We partner with ambitious enterprises and high-growth startups to design and deploy bespoke software solutions that move the needle.
                </p>
              </div>
              <Link href="/contact" className="general-apply-btn">
                <span>TALK TO AN ENGINEER</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
