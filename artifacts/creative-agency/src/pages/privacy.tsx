import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

export function PrivacyPage() {
  return (
    <main className="page-main legal-page">
      {/* Page Hero */}
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <Link href="/" className="project-back-link" style={{ marginBottom: '16px' }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <span className="section-kicker">COMPLIANCE &amp; TRUST</span>
          <h1 className="page-hero-title">
            PRIVACY <span className="red">POLICY</span>
          </h1>
          <p className="page-hero-desc">
            Last Updated: January 2025. How bit3labs handles your information, project specifications, and intellectual property with rigorous confidentiality.
          </p>
        </div>
      </div>

      {/* Legal Content in Editorial Grid */}
      <section className="editorial-section legal-content-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">GOVERNANCE</span>
          </aside>

          <div className="editorial-main legal-body-flow">
            <div className="legal-block">
              <span className="story-step-num">// 01 CORE COMMITMENT</span>
              <h2 className="project-block-title">WE PROTECT YOUR DATA &amp; INTELLECTUAL PROPERTY</h2>
              <p className="editorial-lead">
                bit3labs operates on a foundational principle of strict client confidentiality. We build custom software, e-commerce engines, proprietary algorithms, and enterprise ERP systems. We treat all client business logic, trade secrets, data schemas, and design assets as confidential.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 02 INFORMATION WE COLLECT</span>
              <h2 className="project-block-title">INQUIRY DATA &amp; TECHNICAL TELEMETRY</h2>
              <p className="editorial-lead">
                When you initiate an inquiry via our contact form or email, we collect:
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <span><strong>Contact Information:</strong> Your name, business email address, company name, and phone number.</span>
                </li>
                <li className="deliverable-row">
                  <span><strong>Project Scope &amp; Specifications:</strong> Technical requirements, target launch windows, and project descriptions shared during discovery.</span>
                </li>
                <li className="deliverable-row">
                  <span><strong>Anonymous Website Analytics:</strong> Standard non-identifying telemetry (browser type, referral source, screen resolution) used solely to improve site responsiveness.</span>
                </li>
              </ul>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 03 HOW WE USE YOUR INFORMATION</span>
              <h2 className="project-block-title">DIRECT PROJECT DELIVERY ONLY</h2>
              <p className="editorial-lead">
                We never sell, rent, monetize, or broker your personal information or business concepts. Data collected is used exclusively to:
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <span>Respond directly to project inquiries and prepare bespoke architectural proposals.</span>
                </li>
                <li className="deliverable-row">
                  <span>Execute contractual agreements, milestone delivery, and client communication.</span>
                </li>
                <li className="deliverable-row">
                  <span>Maintain security standards and verify authentic requests against automated spam bots.</span>
                </li>
              </ul>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 04 NON-DISCLOSURE &amp; SECURITY</span>
              <h2 className="project-block-title">MUTUAL NDAS &amp; ENCRYPTION</h2>
              <p className="editorial-lead">
                Prior to discussing sensitive internal codebases or proprietary databases, bit3labs readily executes bilateral Non-Disclosure Agreements (NDAs). All communication channels and repository access are governed by multi-factor authentication and role-based access control.
              </p>
            </div>

            <div className="legal-block">
              <span className="story-step-num">// 05 YOUR RIGHTS &amp; CONTACT</span>
              <h2 className="project-block-title">DATA DELETION &amp; INQUIRIES</h2>
              <p className="editorial-lead">
                You have the right to request access to, correction of, or permanent deletion of any personal data stored in our communication archives. For all privacy inquiries, please contact our team directly at <a href="mailto:hello@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>hello@bit3labs.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
