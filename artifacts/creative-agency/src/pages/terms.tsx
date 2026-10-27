import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

export function TermsPage() {
  return (
    <main className="page-main legal-page">
      {/* Page Hero */}
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <Link href="/" className="project-back-link" style={{ marginBottom: '16px' }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <span className="section-kicker">TERMS &amp; AGREEMENT</span>
          <h1 className="page-hero-title">
            TERMS OF <span className="red">SERVICE</span>
          </h1>
          <p className="page-hero-desc">
            Last Updated: January 2025. Standard terms governing creative technology services, software delivery, and intellectual property transfers by bit3labs.
          </p>
        </div>
      </div>

      {/* Legal Content in Editorial Grid */}
      <section className="editorial-section legal-content-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">AGREEMENT</span>
          </aside>

          <div className="editorial-main legal-body-flow">
            <div className="legal-block">
              <span className="story-step-num">// 01 ENGAGEMENT SCOPE</span>
              <h2 className="project-block-title">SERVICES &amp; STATEMENTS OF WORK</h2>
              <p className="editorial-lead">
                bit3labs delivers custom web development, 3D interactive web experiences, bespoke e-commerce platforms, native mobile applications, and enterprise ERP/inventory software. All client projects are governed by an agreed-upon Statement of Work (SOW) specifying deliverables, sprint milestones, and timelines.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 02 INTELLECTUAL PROPERTY RIGHTS</span>
              <h2 className="project-block-title">CLIENT OWNERSHIP UPON FINAL PAYMENT</h2>
              <p className="editorial-lead">
                Upon receipt of final milestone payment in full, the client holds 100% unrestricted intellectual property ownership of all custom source code, design assets, database models, and documentation created specifically for their engagement. bit3labs retains no proprietary lock-in on custom client code.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 03 SPRINT ROADMAPS &amp; ACCEPTANCE</span>
              <h2 className="project-block-title">MILESTONES &amp; QUALITY ASSURANCE</h2>
              <p className="editorial-lead">
                Projects are delivered in phased sprints. The client has a defined review window (typically 10 business days) following each milestone deployment to conduct User Acceptance Testing (UAT). Feedback is addressed promptly within the active sprint cycle.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 04 PAYMENT TERMS &amp; INVOICING</span>
              <h2 className="project-block-title">TRANSPARENT SCHEDULE</h2>
              <p className="editorial-lead">
                Standard client engagements follow structured milestone schedules (e.g., Initial Deposit, Architecture Review, Beta Deployment, Production Release). Invoices are due within 14 calendar days of issuance unless otherwise stipulated in the client master services agreement.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 05 WARRANTIES &amp; POST-LAUNCH SUPPORT</span>
              <h2 className="project-block-title">CODE QUALITY &amp; BUG WARRANTY</h2>
              <p className="editorial-lead">
                All production deployments include a complimentary 30-day bug warranty covering defect resolution against agreed specifications. Ongoing cloud infrastructure management, security patching, and evolutionary feature development are available under dedicated Service Level Agreements (SLAs).
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 06 GOVERNING LAW</span>
              <h2 className="project-block-title">JURISDICTION &amp; DISPUTES</h2>
              <p className="editorial-lead">
                These terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Questions regarding these terms may be directed to <a href="mailto:legal@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>legal@bit3labs.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
