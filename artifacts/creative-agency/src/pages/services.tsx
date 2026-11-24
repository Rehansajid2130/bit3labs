import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
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
        </div>
      </div>

      <ServicesSection linkProjects />

      <section className="editorial-section">
        <div className="section-wrap service-delivery-layout">
          <div className="service-delivery-copy">
            <h2 className="section-title">What you take with <span className="red">you</span></h2>
            <p>
              We agree on handover deliverables in the project scope so your team knows what it will
              receive and how to keep working with it after launch.
            </p>
          </div>
          <dl className="service-deliverables">
            <div>
              <dt>Design source files</dt>
              <dd>Editable screens, reusable components, and exported assets for design engagements.</dd>
            </div>
            <div>
              <dt>Source code and setup</dt>
              <dd>The agreed codebase and instructions for running and deploying it for development engagements.</dd>
            </div>
            <div>
              <dt>Handover notes</dt>
              <dd>Guidance for the tasks your team will handle, such as updating content or managing the catalog.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="editorial-section service-resources">
        <div className="section-wrap">
          <h2 className="section-title">Get to know our work</h2>
          <div className="service-resource-grid">
            <Link href="/work" className="service-resource-link">
              <div>
                <h3>Project case studies</h3>
                <p>See the problem each project set out to solve, how it was built, and what shipped.</p>
              </div>
              <span className="square-arrow-icon" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </Link>
            <Link href="/blog" className="service-resource-link">
              <div>
                <h3>Engineering dispatches</h3>
                <p>Read about the technical decisions behind interactive websites, online stores, and mobile apps.</p>
              </div>
              <span className="square-arrow-icon" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection />
      <SiteFooter />
    </main>
  );
}
