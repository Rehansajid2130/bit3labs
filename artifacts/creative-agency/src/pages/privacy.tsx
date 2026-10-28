import { Link } from 'wouter';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Cpu,
  Clock,
  EyeOff,
  Scale,
  Building2,
  Mail
} from 'lucide-react';
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
          <span className="section-kicker">GOVERNANCE, PRIVACY &amp; TRUST</span>
          <h1 className="page-hero-title">
            PRIVACY <span className="red">POLICY</span>
          </h1>
          <p className="page-hero-desc">
            Effective Date: October 28, 2026 | Version 2.4 (Enterprise Edition). How bit3labs safeguards client data, proprietary codebases, technical specifications, and intellectual property in compliance with EU/UK GDPR, CCPA/CPRA, and SOC 2 Type II Privacy Trust Services Criteria.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="legal-badge-pill">
              <ShieldCheck size={13} color="var(--color-red)" /> SOC 2 TYPE II ALIGNED
            </span>
            <span className="legal-badge-pill">
              <Lock size={13} color="var(--color-red)" /> GDPR &amp; UK GDPR COMPLIANT
            </span>
            <span className="legal-badge-pill">
              <Scale size={13} color="var(--color-red)" /> CCPA / CPRA VERIFIED
            </span>
            <span className="legal-badge-pill">
              <EyeOff size={13} color="var(--color-red)" /> ZERO-TRACKING ENFORCED
            </span>
          </div>

          {/* Quick Trust Highlights Grid */}
          <div className="legal-trust-grid">
            <div className="legal-trust-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <EyeOff size={16} color="var(--color-red)" />
                <span className="legal-trust-card-title">Zero Advertising Trackers</span>
              </div>
              <p className="legal-trust-card-desc">
                No third-party marketing cookies, cross-site beacons, or behavioral pixels. We respect privacy by design; no intrusive cookie popups required.
              </p>
            </div>

            <div className="legal-trust-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} color="var(--color-red)" />
                <span className="legal-trust-card-title">Zero AI Training on Client Code</span>
              </div>
              <p className="legal-trust-card-desc">
                Your proprietary source code, software architectures, schemas, and briefs are never used to train public LLMs or foundation models.
              </p>
            </div>

            <div className="legal-trust-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--color-red)" />
                <span className="legal-trust-card-title">Statutory SLA Commitment</span>
              </div>
              <p className="legal-trust-card-desc">
                5-business-day acknowledgment and guaranteed 30-calendar-day fulfillment for all Data Subject Access, Portability, and Deletion requests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Content in Editorial Grid */}
      <section className="editorial-section legal-content-section">
        <div className="section-wrap editorial-grid">
          {/* Sticky Left Rail with Navigation Index */}
          <aside className="editorial-rail">
            <span className="section-kicker">POLICY INDEX</span>
            <ul className="legal-toc-list">
              <li><a href="#section-01" className="legal-toc-link">// 01 CONTROLLER &amp; DPO</a></li>
              <li><a href="#section-02" className="legal-toc-link">// 02 DATA WE COLLECT</a></li>
              <li><a href="#section-03" className="legal-toc-link">// 03 LAWFUL BASES</a></li>
              <li><a href="#section-04" className="legal-toc-link">// 04 AI &amp; IP ISOLATION</a></li>
              <li><a href="#section-05" className="legal-toc-link">// 05 DATA RETENTION</a></li>
              <li><a href="#section-06" className="legal-toc-link">// 06 SUB-PROCESSORS</a></li>
              <li><a href="#section-07" className="legal-toc-link">// 07 ZERO COOKIES</a></li>
              <li><a href="#section-08" className="legal-toc-link">// 08 GLOBAL TRANSFERS</a></li>
              <li><a href="#section-09" className="legal-toc-link">// 09 DATA SUBJECT RIGHTS</a></li>
              <li><a href="#section-10" className="legal-toc-link">// 10 SECURITY MEASURES</a></li>
              <li><a href="#section-11" className="legal-toc-link">// 11 MINORS &amp; COPPA</a></li>
              <li><a href="#section-12" className="legal-toc-link">// 12 CONTACT &amp; COMPLAINTS</a></li>
            </ul>

            <div style={{ marginTop: '32px', padding: '16px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
              <span className="section-kicker" style={{ fontSize: '10px' }}>DPO DIRECT DESK</span>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.4' }}>
                Questions regarding data protection or bilateral NDAs?
              </p>
              <a
                href="mailto:dpo@bit3labs.com"
                className="red"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '8px' }}
              >
                <Mail size={12} /> dpo@bit3labs.com
              </a>
            </div>
          </aside>

          {/* Main Legal Body Flow */}
          <div className="editorial-main legal-body-flow">
            
            {/* 01 CONTROLLER & DPO */}
            <div className="legal-block" id="section-01">
              <span className="story-step-num">// 01 DATA CONTROLLER &amp; GOVERNANCE</span>
              <h2 className="project-block-title">WHO WE ARE &amp; HOW TO CONTACT OUR PRIVACY OFFICE</h2>
              <p className="editorial-lead">
                This Privacy Policy is issued by <strong>bit3labs Inc.</strong> ("bit3labs", "we", "us", or "our"), an engineering and digital product studio specializing in high-performance web applications, bespoke e-commerce engines, native mobile applications, and enterprise ERP/inventory software.
              </p>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '16px' }}>
                Under Regulation (EU) 2016/679 (General Data Protection Regulation or "GDPR") and the UK Data Protection Act 2018, bit3labs acts as the <strong>Data Controller</strong> for personal data collected through our public website (<code style={{ color: 'var(--color-red)' }}>bit3labs.com</code>), discovery sessions, and direct business communications. For custom software engineering client engagements, bit3labs processes personal data strictly as a <strong>Data Processor</strong> pursuant to executed Data Processing Agreements (DPAs) and Master Services Agreements (MSAs).
              </p>
              <div className="deliverable-row" style={{ marginTop: '12px' }}>
                <Building2 size={16} color="var(--color-red)" />
                <span><strong>Corporate Office:</strong> bit3labs Inc., 401 Broadway, Suite 1200, New York, NY 10013, USA | Designated Data Protection Officer (DPO): <a href="mailto:dpo@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>dpo@bit3labs.com</a></span>
              </div>
            </div>

            {/* 02 DATA WE COLLECT */}
            <div className="legal-block" id="section-02">
              <span className="story-step-num">// 02 CATEGORIES OF DATA WE COLLECT</span>
              <h2 className="project-block-title">DATA MINIMIZATION IN ACTION</h2>
              <p className="editorial-lead">
                In strict adherence to GDPR Article 5(1)(c) (Data Minimization), we collect only the personal information strictly necessary to evaluate project briefs, conduct technical feasibility assessments, and maintain our engineering relationships.
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Category</th>
                      <th style={{ width: '45%' }}>Data Elements</th>
                      <th style={{ width: '30%' }}>Collection Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Contact Identifiers</strong></td>
                      <td>Full name, business email address, company affiliation, organizational role/title, telephone number.</td>
                      <td>Voluntarily submitted via the contact form, direct email, or discovery scheduling.</td>
                    </tr>
                    <tr>
                      <td><strong>Project Discovery Data</strong></td>
                      <td>Architectural requirements, budget brackets, target launch timelines, tech stack preferences, and RFP briefs.</td>
                      <td>Submitted during project intake and pre-contractual scoping consultations.</td>
                    </tr>
                    <tr>
                      <td><strong>Edge Diagnostic Telemetry</strong></td>
                      <td>Truncated IP address, HTTP user-agent string, operating system, referrer URL, request timestamp, latency metrics.</td>
                      <td>Collected ephemerally by Edge CDN servers (Vercel) solely for rate limiting and DDoS defense.</td>
                    </tr>
                    <tr>
                      <td><strong>Contractual Deliverables</strong></td>
                      <td>Authorized signer names, corporate billing addresses, tax identification numbers, and wire routing details.</td>
                      <td>Direct exchange during SOW execution and commercial invoicing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ padding: '16px', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', marginTop: '16px' }}>
                <span className="section-kicker" style={{ color: 'var(--color-text-dark)' }}>DATA CATEGORIES WE EXPLICITLY DO NOT COLLECT</span>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.5' }}>
                  bit3labs <strong>does not</strong> collect, harvest, or process Special Category Data under GDPR Article 9 (biometrics, health metrics, religious affiliations, racial or ethnic origin, sexual orientation) or PCI-DSS cardholder data. All invoices are settled via corporate bank wire transfer (ACH / SEPA / SWIFT).
                </p>
              </div>
            </div>

            {/* 03 LAWFUL BASES */}
            <div className="legal-block" id="section-03">
              <span className="story-step-num">// 03 LAWFUL BASES FOR PROCESSING</span>
              <h2 className="project-block-title">GDPR &amp; UK GDPR LEGAL BASES (ARTICLE 6)</h2>
              <p className="editorial-lead">
                Every processing activity conducted by bit3labs is grounded in an established, documented lawful basis under European and international data protection laws:
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Processing Activity</th>
                      <th style={{ width: '30%' }}>GDPR Lawful Basis</th>
                      <th style={{ width: '45%' }}>Operational Justification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Discovery &amp; Scoping</strong></td>
                      <td>Art. 6(1)(b) Contractual Steps &amp; Art. 6(1)(f) Legitimate Interests</td>
                      <td>Necessary to evaluate technical scope, compute sprint estimates, and prepare binding Statements of Work (SOWs).</td>
                    </tr>
                    <tr>
                      <td><strong>Software Delivery &amp; Sprints</strong></td>
                      <td>Art. 6(1)(b) Performance of Contract</td>
                      <td>Fulfilling engineering commitments, sprint demonstrations, repository access, and staging deployment reviews.</td>
                    </tr>
                    <tr>
                      <td><strong>Edge Security &amp; DDoS Defense</strong></td>
                      <td>Art. 6(1)(f) Legitimate Interests</td>
                      <td>Defending web infrastructure against unauthorized intrusion, bot scrapes, brute force, and Denial-of-Service attacks.</td>
                    </tr>
                    <tr>
                      <td><strong>Financial &amp; Statutory Records</strong></td>
                      <td>Art. 6(1)(c) Legal Obligation</td>
                      <td>Compliance with US federal, state, and international corporate taxation and statutory audit requirements.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 04 AI & IP ISOLATION */}
            <div className="legal-block" id="section-04">
              <span className="story-step-num">// 04 AI MODEL TRAINING &amp; CODE ISOLATION</span>
              <h2 className="project-block-title">STRICT ZERO-TRAINING GUARANTEE FOR CLIENT CODE</h2>
              <p className="editorial-lead">
                As an elite software development consultancy, bit3labs enforces rigorous technological and contractual boundaries to protect client trade secrets, proprietary algorithms, and intellectual property from AI model leakage.
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Zero Foundation Model Training:</strong> Client source code, data models, schema diagrams, internal documentation, and project briefs are <strong>never</strong> fed into, shared with, or used to fine-tune public or commercial AI models (including OpenAI, Anthropic, Google, or open-source foundation models).</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Enterprise Zero Data Retention (ZDR):</strong> Where automated developer tooling (such as static analysis or test generators) is enabled, it is restricted strictly to enterprise-tier environments enforcing commercial zero-data-retention APIs and tenant isolation.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Full IP Conveyance:</strong> Under our Terms of Service, 100% of custom source code, design systems, and software assets belong exclusively to the client upon milestone payment clearance. bit3labs claims no ongoing license or residual ownership in custom client software.</span>
                </li>
              </ul>
            </div>

            {/* 05 DATA RETENTION */}
            <div className="legal-block" id="section-05">
              <span className="story-step-num">// 05 DATA RETENTION &amp; STORAGE LIMITATION</span>
              <h2 className="project-block-title">DEFINED RETENTION WINDOWS</h2>
              <p className="editorial-lead">
                In compliance with GDPR Article 5(1)(e) (Storage Limitation) and SOC 2 Privacy Criteria P4.1, bit3labs maintains automated retention schedules to ensure records are not kept longer than necessary:
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Record Type</th>
                      <th style={{ width: '25%' }}>Retention Window</th>
                      <th style={{ width: '45%' }}>Disposition Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pre-Contractual Inquiries</strong></td>
                      <td>24 Months</td>
                      <td>Inquiries and discovery briefs that do not result in an active contract are permanently purged 24 months from last contact.</td>
                    </tr>
                    <tr>
                      <td><strong>Client Project &amp; SOW Records</strong></td>
                      <td>7 Years Post-Engagement</td>
                      <td>Statutory accounting, milestone acceptance logs, and tax records retained to satisfy statutory audit limitations.</td>
                    </tr>
                    <tr>
                      <td><strong>Edge CDN Server Diagnostics</strong></td>
                      <td>30 Days (Rolling)</td>
                      <td>Transient IP addresses and request logs at the edge network are automatically overwritten after 30 days.</td>
                    </tr>
                    <tr>
                      <td><strong>Client-Side Browser Storage</strong></td>
                      <td>Session Only (<code style={{ color: 'var(--color-red)' }}>sessionStorage</code>)</td>
                      <td>Destroyed immediately upon closing the browser tab. We write zero persistent personally identifiable data to <code style={{ color: 'var(--color-red)' }}>localStorage</code>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 06 SUB-PROCESSORS */}
            <div className="legal-block" id="section-06">
              <span className="story-step-num">// 06 CLOUD INFRASTRUCTURE &amp; SUB-PROCESSORS</span>
              <h2 className="project-block-title">ENTERPRISE AUDITED PARTNERS</h2>
              <p className="editorial-lead">
                bit3labs operates exclusively on enterprise-grade infrastructure providers that maintain independent SOC 2 Type II, ISO/IEC 27001, and PCI-DSS Level 1 audit certifications.
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Sub-Processor</th>
                      <th style={{ width: '25%' }}>Function &amp; Service</th>
                      <th style={{ width: '25%' }}>Primary Location</th>
                      <th style={{ width: '25%' }}>Security Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Vercel, Inc.</strong></td>
                      <td>Frontend hosting &amp; Edge CDN routing</td>
                      <td>United States / Global Edge</td>
                      <td>SOC 2 Type II, ISO 27001, TLS 1.3</td>
                    </tr>
                    <tr>
                      <td><strong>Google Cloud Platform</strong></td>
                      <td>Cloud compute &amp; database staging</td>
                      <td>United States &amp; European Union</td>
                      <td>SOC 2 Type II, ISO 27001, HIPAA Ready</td>
                    </tr>
                    <tr>
                      <td><strong>GitHub, Inc. (Microsoft)</strong></td>
                      <td>Private git source repositories</td>
                      <td>United States</td>
                      <td>SOC 2 Type II, Hardware 2FA / FIDO2</td>
                    </tr>
                    <tr>
                      <td><strong>Proton AG / Google Workspace</strong></td>
                      <td>Enterprise encrypted communications</td>
                      <td>Switzerland &amp; United States</td>
                      <td>Zero-Access / High-Entropy Encryption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 07 ZERO COOKIES */}
            <div className="legal-block" id="section-07">
              <span className="story-step-num">// 07 ZERO COOKIE &amp; TRACKER POLICY</span>
              <h2 className="project-block-title">PRIVACY BY DEFAULT: NO TRACKING BEACONS</h2>
              <p className="editorial-lead">
                bit3labs respects user autonomy. We do not use third-party advertising cookies, retargeting pixels (such as Meta Pixel or LinkedIn Insight Tag), or cross-site fingerprinting scripts.
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>EU ePrivacy Directive Compliance:</strong> Because our website uses zero non-essential tracking cookies, our platform complies inherently with Directive 2002/58/EC without requiring disruptive tracking consent banners.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Do Not Track (DNT) &amp; GPC Signals:</strong> We honor Global Privacy Control (GPC) and DNT browser signals by default by not tracking cross-site user sessions.</span>
                </li>
              </ul>
            </div>

            {/* 08 GLOBAL TRANSFERS */}
            <div className="legal-block" id="section-08">
              <span className="story-step-num">// 08 CROSS-BORDER DATA TRANSFERS</span>
              <h2 className="project-block-title">INTERNATIONAL SAFEGUARDS &amp; DPF ADHERENCE</h2>
              <p className="editorial-lead">
                When personal data originating from the European Economic Area (EEA), United Kingdom, or Switzerland is transferred to servers located in the United States, bit3labs ensures an equivalent standard of protection through validated transfer mechanisms:
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>EU-U.S. Data Privacy Framework (DPF):</strong> Reliance on the adequacy decisions adopted under the EU-U.S. DPF and the UK Extension to the EU-U.S. DPF.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Standard Contractual Clauses (SCCs):</strong> Execution of the European Commission’s Standard Contractual Clauses (Decision 2021/914/EU) and the UK International Data Transfer Addendum.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Technical Safeguards:</strong> Enforced TLS 1.3 encryption in transit with HSTS preload, AES-256 encryption at rest, and regular Transfer Impact Assessments (TIAs).</span>
                </li>
              </ul>
            </div>

            {/* 09 DATA SUBJECT RIGHTS */}
            <div className="legal-block" id="section-09">
              <span className="story-step-num">// 09 DATA SUBJECT RIGHTS &amp; STATUTORY SLA</span>
              <h2 className="project-block-title">YOUR ENFORCEABLE PRIVACY RIGHTS</h2>
              <p className="editorial-lead">
                Whether you reside in the European Union, United Kingdom, California, or another jurisdiction with modern privacy legislation (e.g. VCDPA, CPA, CTDPA, PIPEDA), you hold explicit legal rights regarding your personal information:
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Statutory Right</th>
                      <th style={{ width: '25%' }}>Legal Provision</th>
                      <th style={{ width: '50%' }}>Scope &amp; Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Right of Access &amp; Know</strong></td>
                      <td>GDPR Art. 15 / CCPA § 1798.100</td>
                      <td>Request confirmation of whether we process your data and receive an itemized disclosure copy.</td>
                    </tr>
                    <tr>
                      <td><strong>Right to Rectification</strong></td>
                      <td>GDPR Art. 16 / CCPA § 1798.106</td>
                      <td>Request correction of inaccurate, outdated, or incomplete corporate contact data.</td>
                    </tr>
                    <tr>
                      <td><strong>Right to Erasure ("To Be Forgotten")</strong></td>
                      <td>GDPR Art. 17 / CCPA § 1798.105</td>
                      <td>Request irreversible deletion of your contact records and pre-contractual briefs from our active databases.</td>
                    </tr>
                    <tr>
                      <td><strong>Right to Data Portability</strong></td>
                      <td>GDPR Art. 20</td>
                      <td>Receive your personal data in a structured, commonly used, machine-readable format (JSON/CSV).</td>
                    </tr>
                    <tr>
                      <td><strong>Right to Restrict or Object</strong></td>
                      <td>GDPR Art. 18 &amp; 21</td>
                      <td>Object to processing based on legitimate interests or request temporary restriction of processing.</td>
                    </tr>
                    <tr>
                      <td><strong>Opt-Out of Sale / Sharing</strong></td>
                      <td>CCPA § 1798.120 / CPRA</td>
                      <td><strong>Notice of Non-Sale:</strong> bit3labs does not sell or share personal information for cross-context behavioral advertising.</td>
                    </tr>
                    <tr>
                      <td><strong>Right to Non-Discrimination</strong></td>
                      <td>CCPA § 1798.125</td>
                      <td>We will never deny services, adjust sprint rates, or degrade service quality for exercising privacy rights.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SLA Box */}
              <div className="sla-callout-box">
                <span className="section-kicker" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={13} color="var(--color-red)" /> STATUTORY SERVICE LEVEL AGREEMENT (SLA)
                </span>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-dark)', marginTop: '8px', lineHeight: '1.6' }}>
                  All verified Data Subject Access, Correction, or Deletion requests submitted to <a href="mailto:privacy@bit3labs.com" className="red" style={{ textDecoration: 'underline', fontWeight: 600 }}>privacy@bit3labs.com</a> will receive:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '12px' }}>
                  <div style={{ padding: '10px 14px', backgroundColor: '#F8F7F4', border: '1px solid var(--color-border)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-red)' }}>PHASE 1: RECEIPT &amp; VERIFICATION</span>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>Acknowledged within <strong>5 business days</strong> of receipt.</p>
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: '#F8F7F4', border: '1px solid var(--color-border)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-red)' }}>PHASE 2: FULFILLMENT</span>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>Completed in full within <strong>30 calendar days</strong> at zero cost.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 SECURITY MEASURES */}
            <div className="legal-block" id="section-10">
              <span className="story-step-num">// 10 TECHNICAL &amp; ORGANIZATIONAL MEASURES</span>
              <h2 className="project-block-title">SOC 2 DEFENSE-IN-DEPTH CONTROLS</h2>
              <p className="editorial-lead">
                In compliance with GDPR Article 32 (Security of Processing), bit3labs maintains rigorous organizational safeguards:
              </p>
              <ul className="project-deliverables-checklist" style={{ marginTop: '16px' }}>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Cryptographic Standards:</strong> TLS 1.3 for all web and API traffic; AES-256 for all stored data, database backups, and staging archives.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Hardware-Backed MFA:</strong> All engineer access to internal systems, git repositories, and cloud consoles requires hardware FIDO2 / WebAuthn tokens.</span>
                </li>
                <li className="deliverable-row">
                  <CheckCircle2 size={16} color="var(--color-red)" className="deliverable-bullet" />
                  <span><strong>Incident &amp; Breach Protocol:</strong> In the unlikely event of a security incident involving personal data, bit3labs executes runbooks adhering to the <strong>72-hour GDPR Article 33</strong> regulatory notification clock.</span>
                </li>
              </ul>
            </div>

            {/* 11 MINORS & COPPA */}
            <div className="legal-block" id="section-11">
              <span className="story-step-num">// 11 PROTECTION OF MINORS</span>
              <h2 className="project-block-title">CHILDREN'S ONLINE PRIVACY PROTECTION (COPPA)</h2>
              <p className="editorial-lead">
                Our services, website, and engineering offerings are strictly tailored for enterprise businesses and adult professionals. We do not knowingly solicit, collect, or maintain personal information from individuals under the age of 18 (or under 16/13 as stipulated by GDPR Art. 8 and US COPPA). If we discover that personal data of a minor has been submitted without verified parental or guardian consent, we will purge such records immediately.
              </p>
            </div>

            {/* 12 CONTACT & COMPLAINTS */}
            <div className="legal-block" id="section-12">
              <span className="story-step-num">// 12 CONTACT OUR PRIVACY OFFICE &amp; REGULATORY COMPLAINTS</span>
              <h2 className="project-block-title">REACH OUT TO OUR GOVERNANCE TEAM</h2>
              <p className="editorial-lead">
                For questions regarding this policy, bilateral NDAs, security questionnaires, or exercising data subject rights, contact our Data Protection Officer:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
                <div style={{ padding: '20px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
                  <span className="section-kicker" style={{ fontSize: '10.5px' }}>PRIVACY &amp; DPO INQUIRIES</span>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
                    Email: <a href="mailto:privacy@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>privacy@bit3labs.com</a><br />
                    DPO Direct: <a href="mailto:dpo@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>dpo@bit3labs.com</a>
                  </p>
                </div>
                <div style={{ padding: '20px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
                  <span className="section-kicker" style={{ fontSize: '10.5px' }}>LEGAL &amp; COMMERCIAL COUNSEL</span>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
                    Email: <a href="mailto:legal@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>legal@bit3labs.com</a><br />
                    Studio Desk: <a href="mailto:hello@bit3labs.com" className="red" style={{ textDecoration: 'underline' }}>hello@bit3labs.com</a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#F8F7F4', border: '1px solid var(--color-border)' }}>
                <span className="section-kicker" style={{ color: 'var(--color-text-dark)', fontSize: '10.5px' }}>RIGHT TO LODGE A COMPLAINT</span>
                <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.55' }}>
                  If you are located in the European Union or United Kingdom and believe our processing infringes data protection laws, you hold the legal right to lodge a complaint with your local supervisory authority:
                  in the UK, the <strong>Information Commissioner’s Office (ICO)</strong> (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="red" style={{ textDecoration: 'underline' }}>ico.org.uk</a>);
                  in France, the <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="red" style={{ textDecoration: 'underline' }}>cnil.fr</a>);
                  in Germany, the federal and state Data Protection Commissioners;
                  and in California, the <strong>California Privacy Protection Agency (CPPA)</strong> (<a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer" className="red" style={{ textDecoration: 'underline' }}>cppa.ca.gov</a>).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
