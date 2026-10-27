import { useState } from 'react';
import { WorkSection } from '@/components/work-section';
import { SiteFooter } from '@/components/site-footer';

export function WorkPage() {
  const [filter, setFilter] = useState('ALL');
  const categories = [
    'ALL',
    'WEB DEV & 3D',
    'CUSTOM E-COMMERCE',
    'MOBILE APPS',
    'ERP & INVENTORY',
    'PERSONAL SITES',
  ];

  return (
    <main className="page-main work-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">PORTFOLIO</span>
          <h1 className="page-hero-title">
            FEATURED <span className="red">PROJECTS</span> &amp; BUILDS
          </h1>
          <p className="page-hero-desc">
            Explore a curated selection of our custom websites, bespoke e-commerce platforms, mobile applications, and enterprise inventory systems engineered for scale.
          </p>

          <div className="work-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`work-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <WorkSection showAll={true} filter={filter} />
      <SiteFooter />
    </main>
  );
}
