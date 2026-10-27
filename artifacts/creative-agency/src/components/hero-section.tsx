import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HeroSection() {
  const disciplines = [
    { num: '//01', label: 'Web Dev & 3D Sites' },
    { num: '//02', label: 'Custom E-Commerce' },
    { num: '//03', label: 'Mobile App Development' },
    { num: '//04', label: 'ERP & Inventory Systems' },
  ];

  return (
    <section className="hero-section site-grid" id="top">
      {/* Floating subtle architectural geometry squares snapping to grid */}
      <div aria-hidden="true" className="hero-floating-square hero-square-1" />
      <div aria-hidden="true" className="hero-floating-square hero-square-2" />
      <div aria-hidden="true" className="hero-floating-square hero-square-3" />

      <div className="section-wrap hero-container">
        {/* Top region: Headline on left, Disciplines + Explore Work CTA on right */}
        <div className="hero-top-grid">
          <div className="hero-headline-block">
            <h1 className="hero-display-title">
              <span className="hero-line">WE CREATE</span>
              <span className="hero-line">EXCEPTIONAL</span>
            </h1>
          </div>

          <div className="hero-disciplines-cta-col">
            <div className="hero-disciplines-list" aria-label="Core disciplines">
              {disciplines.map((item) => (
                <div key={item.num} className="discipline-line">
                  <span className="discipline-num">{item.num}</span>
                  <span className="discipline-rule" aria-hidden="true" />
                  <span className="discipline-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-explore-cta">
              <Link href="/work" className="hero-explore-btn">
                <span>EXPLORE WORK</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: Info box flush alongside giant red EXPERIENCES */}
        <div className="hero-lockup-bottom">
          <div className="hero-desc-box">
            <p>
              An innovative design studio dedicated to creating striking
              digital solutions for brands that are fearless in their pursuit of
              uniqueness and excellence, allowing them to stand out
              brilliantly in a crowded marketplace.
            </p>
          </div>

          <span className="hero-display-title hero-line-red">EXPERIENCES</span>
        </div>
      </div>
    </section>
  );
}


