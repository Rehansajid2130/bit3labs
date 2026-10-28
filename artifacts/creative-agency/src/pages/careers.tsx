import { ArrowRight, Sparkles, Laptop, Globe2, DollarSign } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

const PERKS = [
  {
    icon: Globe2,
    title: '100% REMOTE & ASYNC',
    desc: 'Work from anywhere in the world on your schedule. We care about high-caliber code and output, not office politics or arbitrary hours.',
  },
  {
    icon: Laptop,
    title: 'TOP-TIER GEAR STIPEND',
    desc: 'Every engineer receives an M-series MacBook Pro, dual high-res monitors, and an ergonomic home studio equipment allowance.',
  },
  {
    icon: DollarSign,
    title: 'COMPETITIVE COMPENSATION',
    desc: 'Above-market international salaries, milestone performance bonuses, and transparent merit-based compensation reviews.',
  },
  {
    icon: Sparkles,
    title: 'CONTINUOUS LEARNING FUND',
    desc: '$2,500 annual budget for books, technical conferences, certifications, and high-impact engineering courses.',
  },
];

const UPCOMING_DISCIPLINES = [
  '3D WebGL / Three.js Engineers',
  'Headless E-Commerce Architects',
  'React Native Mobile Developers',
  'Distributed ERP Systems Engineers',
  'Senior UI/UX Technical Designers',
];

export function CareersPage() {
  return (
    <main className="page-main careers-page">
      {/* 1. Page Hero Banner */}
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">JOIN BIT3LABS</span>
          <h1 className="page-hero-title">
            BUILD THE <span className="red">FUTURE</span> OF SOFTWARE WITH US
          </h1>
          <p className="page-hero-desc">
            bit3labs is an engineering-first creative technology studio. We eliminate corporate bureaucracy and fluff, focusing exclusively on craft, modern architectures, and tangible products for forward-thinking clients worldwide.
          </p>
        </div>
      </div>

      {/* 2. Culture & Perks Section */}
      <section className="editorial-section careers-perks-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">THE STUDIO</span>
          </aside>

          <div className="editorial-main">
            <div className="work-header-row">
              <div className="work-title-wrap">
                <h2 className="section-title">
                  HOW WE <span className="red">OPERATE</span> &amp; WHAT WE OFFER
                </h2>
                <p className="editorial-lead">
                  We are a small, elite squad of senior builders. When you join bit3labs, you work directly with passionate engineers and designers on projects that get used by thousands of people every day.
                </p>
              </div>
            </div>

            <div className="careers-perks-grid">
              {PERKS.map((perk) => {
                const IconComponent = perk.icon;
                return (
                  <div key={perk.title} className="perk-card">
                    <div className="perk-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="perk-title">{perk.title}</h3>
                    <p className="perk-desc">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coming Soon / Pipeline Section */}
      <section className="editorial-section careers-roles-section" id="roles">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">STATUS // PIPELINE</span>
          </aside>

          <div className="editorial-main">
            <div className="careers-coming-soon-card">
              <div className="coming-soon-badge-row">
                <span className="status-indicator-pill">
                  <span className="status-radar-dot" />
                  APPLICATIONS CURRENTLY PAUSED
                </span>
                <span className="role-meta-pill">NEXT WAVE // 2026</span>
              </div>

              <h2 className="coming-soon-display-title">
                NEW POSITIONS <span className="red">COMING SOON</span>
              </h2>

              <p className="coming-soon-desc">
                We are currently operating at peak capacity with our core engineering roster, fully focused on shipping flagship client platforms. While we do not have active public openings today, our next hiring cycle for 3D specialists, mobile engineers, and systems architects is in preparation.
              </p>

              <div className="coming-soon-disciplines-preview">
                <span className="pipeline-label">// UPCOMING DISCIPLINES IN QUEUE:</span>
                <div className="pipeline-tags-row">
                  {UPCOMING_DISCIPLINES.map((d) => (
                    <span key={d} className="pipeline-tag">{d}</span>
                  ))}
                </div>
              </div>

              <div className="coming-soon-action-box">
                <div className="coming-soon-action-text">
                  <strong>WANT EARLY ACCESS BEFORE ROLES GO PUBLIC?</strong>
                  <p>Send your portfolio, GitHub, or case studies to join our private talent network.</p>
                </div>
                <a
                  href="mailto:careers@bit3labs.com?subject=Early%20Talent%20Roster%20-%20bit3labs"
                  className="role-apply-submit-btn"
                >
                  <span>JOIN TALENT NETWORK</span>
                  <span className="square-arrow-icon" aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Application / General Inquiries */}
      <section className="editorial-section general-apply-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">TALENT ARCHIVE</span>
          </aside>

          <div className="editorial-main">
            <div className="general-apply-banner">
              <div>
                <h3 className="general-apply-title">
                  DON’T SEE YOUR <span className="red">EXACT</span> TITLE?
                </h3>
                <p className="general-apply-desc">
                  We are always on the lookout for world-class frontend specialists, 3D artists, systems engineers, and product designers. Send us your GitHub, portfolio, or past work.
                </p>
              </div>
              <a
                href="mailto:careers@bit3labs.com?subject=Open%20Application%20-%20bit3labs"
                className="general-apply-btn"
              >
                <span>SEND DIRECT APPLICATION</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
