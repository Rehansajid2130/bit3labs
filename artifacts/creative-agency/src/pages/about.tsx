import { AboutSection } from '@/components/about-section';
import { StatsBar } from '@/components/stats-bar';
import { ExpertsSection } from '@/components/experts-section';
import { SiteFooter } from '@/components/site-footer';

export function AboutPage() {
  return (
    <main className="page-main about-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">WHO WE ARE</span>
          <h1 className="page-hero-title">
            SHAPING BOLD VISIONS INTO <span className="red">CAPABLE</span> PRODUCTS
          </h1>
          <p className="page-hero-desc">
            bit3labs is an independent design technology studio. We eliminate corporate bureaucracy, focusing solely on high-impact strategy, meticulous typography, and world-class digital execution.
          </p>
        </div>
      </div>

      <StatsBar />
      <AboutSection />
      <ExpertsSection />
      <SiteFooter />
    </main>
  );
}
