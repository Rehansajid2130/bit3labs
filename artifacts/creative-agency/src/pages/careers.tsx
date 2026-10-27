import { useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Laptop,
  Globe2,
  DollarSign,
  Coffee,
  X,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  stack: string[];
  responsibilities: string[];
  requirements: string[];
}

const OPEN_ROLES: JobRole[] = [
  {
    id: 'frontend-3d-engineer',
    title: 'Lead 3D & Creative Frontend Engineer',
    department: 'Web Engineering',
    location: '100% Remote (Worldwide)',
    type: 'Full-Time',
    experience: '5+ Years',
    summary: 'Lead the architecture and visual execution of high-performance interactive 3D web experiences, bespoke web applications, and editorial brand platforms running at 60 FPS.',
    stack: ['React 19', 'Next.js 15', 'Three.js', 'React Three Fiber', 'GLSL Shaders', 'TypeScript', 'TailwindCSS'],
    responsibilities: [
      'Architect and build custom 3D web applications and fluid interactive animations.',
      'Optimize WebGL fragment shaders and GLTF geometry streaming for low-powered mobile devices.',
      'Collaborate closely with technical directors to push the limits of modern browser capabilities.',
      'Deliver clean, reusable component libraries adhering to strict accessibility standards.',
    ],
    requirements: [
      'Deep mastery of modern TypeScript, React, and Three.js / React Three Fiber.',
      'Experience writing custom shaders (GLSL) and canvas-based animations.',
      'Strong portfolio demonstrating high-craft digital experiences and micro-interactions.',
      'Proven understanding of Core Web Vitals, browser rendering pipelines, and frame budgets.',
    ],
  },
  {
    id: 'ecommerce-solutions-architect',
    title: 'Senior E-Commerce Solutions Architect',
    department: 'Commerce Engineering',
    location: '100% Remote (Worldwide)',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Architect bespoke headless e-commerce platforms, checkout funnels, dynamic multi-currency systems, and ERP inventory integrations for high-volume retail brands.',
    stack: ['Next.js', 'Shopify Hydrogen', 'Storefront API', 'Stripe Elements', 'TypeScript', 'Redis', 'Node.js'],
    responsibilities: [
      'Engineer custom headless storefronts that load in under 1 second globally.',
      'Integrate international payment gateways, custom checkout drawers, and tax/shipping logic.',
      'Connect storefront catalog states with real-time warehouse ERP and inventory backends.',
      'Conduct rigorous security, PCI compliance, and high-load traffic testing.',
    ],
    requirements: [
      'Extensive hands-on experience with Shopify Storefront API, Hydrogen, or headless commerce stacks.',
      'Deep knowledge of payment rails (Stripe, Adyen), webhooks, and idempotent transactions.',
      'Track record building e-commerce engines that handle high concurrency and flash sales.',
    ],
  },
  {
    id: 'mobile-application-engineer',
    title: 'Senior Mobile Application Engineer (iOS / Android)',
    department: 'Mobile Development',
    location: '100% Remote (Worldwide)',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Build and deploy native and cross-platform mobile applications for fleet management, consumer products, and internal warehouse operations.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Native Bridges (Swift / Kotlin)', 'Fastlane'],
    responsibilities: [
      'Develop robust mobile applications with offline-first synchronization and real-time telemetry.',
      'Implement biometric authentication, background geolocation services, and native device APIs.',
      'Manage CI/CD release pipelines and App Store / Google Play submissions.',
      'Maintain crash-free session metrics above 99.9% across thousands of active devices.',
    ],
    requirements: [
      'Demonstrated expertise shipping React Native applications to production.',
      'Solid grasp of native iOS (Swift) or Android (Kotlin) bridge integration when required.',
      'Experience building offline-first databases (SQLite / WatermelonDB) and sync engines.',
    ],
  },
  {
    id: 'backend-erp-engineer',
    title: 'Senior Backend & ERP Systems Architect',
    department: 'Systems Engineering',
    location: '100% Remote (Worldwide)',
    type: 'Full-Time',
    experience: '5+ Years',
    summary: 'Design scalable distributed backends, real-time inventory ledgers, multi-facility warehouse synchronization engines, and high-security internal software.',
    stack: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Docker', 'WebSockets', 'AWS / GCP'],
    responsibilities: [
      'Design reliable relational schemas and transaction ledgers for enterprise inventory systems.',
      'Build low-latency WebSocket APIs for real-time barcode scanning and automated picking routes.',
      'Implement multi-tenant role-based access control (RBAC) and comprehensive audit logging.',
      'Ensure high database availability, indexing optimization, and automated backup disaster recovery.',
    ],
    requirements: [
      'Extensive experience with PostgreSQL query optimization, transactions, and indexing strategies.',
      'Deep understanding of distributed systems, queueing engines (BullMQ / RabbitMQ), and caching.',
      'Experience building mission-critical internal business systems, ERPs, or financial software.',
    ],
  },
];

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

export function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

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

      {/* 3. Open Roles Section */}
      <section className="editorial-section careers-roles-section" id="roles">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">OPENINGS</span>
          </aside>

          <div className="editorial-main">
            <div className="work-header-row">
              <div className="work-title-wrap">
                <h2 className="section-title">
                  CURRENT <span className="red">OPPORTUNITIES</span>
                </h2>
                <p className="editorial-lead">
                  Explore our active engineering and design roles. Every position is 100% remote with competitive global compensation.
                </p>
              </div>
              <span className="roles-count-pill">{OPEN_ROLES.length} ROLES AVAILABLE</span>
            </div>

            <div className="roles-listing-list">
              {OPEN_ROLES.map((role) => (
                <div key={role.id} className="role-listing-card">
                  <div className="role-main-info">
                    <div className="role-badge-row">
                      <span className="role-dep-badge">// {role.department.toUpperCase()}</span>
                      <span className="role-meta-pill">{role.type}</span>
                      <span className="role-meta-pill">{role.location}</span>
                    </div>

                    <h3 className="role-display-title">{role.title}</h3>
                    <p className="role-summary-text">{role.summary}</p>

                    <div className="role-stack-pills">
                      {role.stack.map((t) => (
                        <span key={t} className="tech-badge-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="role-action-wrap">
                    <button
                      type="button"
                      className="role-view-btn"
                      onClick={() => setSelectedRole(role)}
                    >
                      <span>VIEW SPECS &amp; APPLY</span>
                      <span className="square-arrow-icon" aria-hidden="true">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
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

      {/* Role Details Modal */}
      {selectedRole && (
        <div className="role-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="role-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="role-modal-header">
              <div>
                <span className="role-dep-badge">// {selectedRole.department.toUpperCase()}</span>
                <h2 className="role-modal-title">{selectedRole.title}</h2>
                <div className="role-badge-row" style={{ marginTop: '8px' }}>
                  <span className="role-meta-pill">{selectedRole.type}</span>
                  <span className="role-meta-pill">{selectedRole.location}</span>
                  <span className="role-meta-pill">{selectedRole.experience}</span>
                </div>
              </div>
              <button
                type="button"
                className="role-modal-close"
                onClick={() => setSelectedRole(null)}
                aria-label="Close role details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="role-modal-body">
              <div className="modal-section-block">
                <span className="story-step-num">// OVERVIEW</span>
                <p className="editorial-lead">{selectedRole.summary}</p>
              </div>

              <div className="modal-section-block">
                <span className="story-step-num">// RESPONSIBILITIES</span>
                <ul className="project-deliverables-checklist">
                  {selectedRole.responsibilities.map((item) => (
                    <li key={item} className="deliverable-row">
                      <span className="deliverable-bullet"><CheckCircle2 size={15} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-block">
                <span className="story-step-num">// REQUIREMENTS &amp; STACK</span>
                <ul className="project-deliverables-checklist">
                  {selectedRole.requirements.map((item) => (
                    <li key={item} className="deliverable-row">
                      <span className="deliverable-bullet"><CheckCircle2 size={15} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="role-modal-footer">
              <a
                href={`mailto:careers@bit3labs.com?subject=Application:%20${encodeURIComponent(selectedRole.title)}&body=Hi%20bit3labs%20team,%0A%0AI%20am%20applying%20for%20the%20${encodeURIComponent(selectedRole.title)}%20role.%0A%0AMy%20Portfolio%20/%20GitHub:%20%0AMy%20LinkedIn:%20%0A%0AOverview%20of%20my%20experience:%0A`}
                className="role-apply-submit-btn"
              >
                <span>APPLY VIA EMAIL [careers@bit3labs.com]</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
