import { ServicesSection } from '@/components/services-section';
import { FaqSection } from '@/components/faq-section';
import { SiteFooter } from '@/components/site-footer';

export function ServicesPage() {
  return (
    <main className="page-main services-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">CAPABILITIES</span>
          <h1 className="page-hero-title">
            PRECISION <span className="red">DISCIPLINES</span> FOR DIGITAL EXCELLENCE
          </h1>
          <p className="page-hero-desc">
            From bespoke websites and 3D web experiences to custom e-commerce engines, native mobile apps, and enterprise ERP/inventory software—engineered with precision.
          </p>
        </div>
      </div>

      <ServicesSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
