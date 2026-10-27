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
      <div className="section-wrap hero-container">
        {/* Kicker */}

        {/* Top line: WE CREATE */}
        <div className="hero-headline-top">
          <h1 className="hero-display-title">
            <span className="hero-line">WE CREATE</span>
          </h1>
        </div>

        {/* Middle row: EXCEPTIONAL aligned horizontally with disciplines list */}
        <div className="hero-row-middle">
          <span className="hero-display-title hero-line-exceptional">EXCEPTIONAL</span>

          <div className="hero-disciplines-list" aria-label="Core disciplines">
            {disciplines.map((item) => (
              <div key={item.num} className="discipline-line">
                <span className="discipline-num">{item.num}</span>
                <span className="discipline-rule" aria-hidden="true" />
                <span className="discipline-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: Info box, EXPERIENCES, and Explore Work CTA on the right bottom */}
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

          <div className="hero-explore-cta">
            <Link href="/work" className="hero-explore-btn">
              <span>EXPLORE WORK</span>
              <span className="square-arrow-icon" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


