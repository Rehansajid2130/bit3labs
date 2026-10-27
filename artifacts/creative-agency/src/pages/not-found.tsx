import { Link } from 'wouter';
import { ArrowRight, Home, Compass, Terminal, ShieldAlert } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

export default function NotFound() {
  return (
    <main className="page-main notfound-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">// ERROR PROTOCOL 404</span>
          <h1 className="notfound-huge-code">
            404<span className="red">.</span>
          </h1>
          <h2 className="page-hero-title">
            COORDINATE NOT FOUND IN <span className="red">SYSTEM</span> ARCHIVE
          </h2>
          <p className="page-hero-desc">
            The requested endpoint or document cannot be located. It may have been decommissioned, migrated to a new architecture, or typed incorrectly. Use the system recovery coordinates below to re-enter bit3labs.
          </p>
        </div>
      </div>

      <section className="editorial-section notfound-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">SYSTEM TELEMETRY</span>
          </aside>

          <div className="editorial-main">
            {/* Terminal Diagnostic Block */}
            <div className="notfound-diagnostic-box">
              <div className="notfound-diag-header">
                <span className="diag-dot red-dot"></span>
                <span className="diag-title">// RECOVERY CONSOLE &amp; ROUTE DIAGNOSTIC</span>
              </div>
              <div className="notfound-diag-rows">
                <div className="notfound-diag-row">
                  <span className="diag-label">STATUS CODE:</span>
                  <span className="diag-val red">404 NOT FOUND</span>
                </div>
                <div className="notfound-diag-row">
                  <span className="diag-label">ERROR ORIGIN:</span>
                  <span className="diag-val">ROUTER_CATCH_ALL_DISPATCH</span>
                </div>
                <div className="notfound-diag-row">
                  <span className="diag-label">HOST SYSTEM:</span>
                  <span className="diag-val">BIT3LABS PRODUCTION EDGE CLUSTER</span>
                </div>
                <div className="notfound-diag-row">
                  <span className="diag-label">RECOMMENDED ACTION:</span>
                  <span className="diag-val">RETURN_TO_SYSTEM_HUB</span>
                </div>
              </div>
            </div>

            {/* Quick Recovery Navigation Bento Grid */}
            <div className="work-header-row" style={{ marginTop: '48px' }}>
              <div className="work-title-wrap">
                <h3 className="section-title">
                  RECOVERY <span className="red">DESTINATIONS</span>
                </h3>
                <p className="editorial-lead">
                  Select a verified destination below to continue navigating our projects, capabilities, and technical journal.
                </p>
              </div>
            </div>

            <div className="notfound-links-grid">
              <Link href="/" className="notfound-nav-card">
                <div className="notfound-nav-icon">
                  <Home size={20} />
                </div>
                <div className="notfound-nav-content">
                  <span className="notfound-nav-path">ROUTE: /</span>
                  <h4 className="notfound-nav-title">STUDIO HOMEPAGE</h4>
                  <p className="notfound-nav-desc">Return to root overview of bit3labs engineering and digital craft.</p>
                </div>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link href="/work" className="notfound-nav-card">
                <div className="notfound-nav-icon">
                  <Compass size={20} />
                </div>
                <div className="notfound-nav-content">
                  <span className="notfound-nav-path">ROUTE: /work</span>
                  <h4 className="notfound-nav-title">SELECTED WORK</h4>
                  <p className="notfound-nav-desc">Explore production case studies across 3D, e-commerce, mobile, and ERP.</p>
                </div>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link href="/services" className="notfound-nav-card">
                <div className="notfound-nav-icon">
                  <Terminal size={20} />
                </div>
                <div className="notfound-nav-content">
                  <span className="notfound-nav-path">ROUTE: /services</span>
                  <h4 className="notfound-nav-title">SERVICES &amp; CAPABILITIES</h4>
                  <p className="notfound-nav-desc">Review our 4 core disciplines and technical architecture standards.</p>
                </div>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link href="/blog" className="notfound-nav-card">
                <div className="notfound-nav-icon">
                  <ShieldAlert size={20} />
                </div>
                <div className="notfound-nav-content">
                  <span className="notfound-nav-path">ROUTE: /blog</span>
                  <h4 className="notfound-nav-title">ENGINEERING JOURNAL</h4>
                  <p className="notfound-nav-desc">Read architecture teardowns, WebGL performance tips, and database reports.</p>
                </div>
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
