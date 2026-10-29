import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'wouter';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What kind of projects does bit3labs build?',
    a: 'We build custom web applications, 3D interactive websites, bespoke e-commerce platforms, native and cross-platform mobile apps (iOS & Android), and custom ERP & inventory management systems tailored to your business operations.',
  },
  {
    q: 'How does a typical development project begin?',
    a: 'We kick off with a collaborative technical and architecture discovery workshop covering your business requirements, integrations, UI/UX expectations, and tech stack before defining a phased sprint roadmap.',
  },
  {
    q: 'Can you work alongside our existing in-house team?',
    a: 'Absolutely. We can operate as an autonomous end-to-end delivery team or embed directly alongside your technical leads and developers to accelerate product velocity.',
  },
  {
    q: 'What are typical project timelines?',
    a: 'Custom websites, personal portfolios, and 3D showcases typically take 3–6 weeks. Full-scale custom e-commerce storefronts, mobile apps, or enterprise ERP and inventory hubs usually take 6–14 weeks with milestone-based delivery.',
  },
  {
    q: 'Do you provide ongoing support, maintenance, and hosting?',
    a: 'Yes. We offer continuous SLA-backed maintenance, cloud infrastructure monitoring, database optimization, and active feature expansion after go-live.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="editorial-section faq-section" id="faq">
      <div className="section-wrap editorial-grid">
        {/* Left Rail */}
        <aside className="editorial-rail">
          <span className="section-kicker">QUESTION</span>
        </aside>

        {/* Main Column */}
        <div className="editorial-main">
          <div className="faq-title-wrap">
            <h2 className="section-title">
              FREQUENTLY ASKED <span className="red">QUESTIONS</span>
            </h2>
            <p className="editorial-lead">
              Discover all the essential details about our work process. If you have any further questions, feel free to reach out at any time!
            </p>
          </div>

          {/* Accordion */}
          <div className="faq-accordion-list">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.q} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    id={`faq-question-${idx}`}
                    className="faq-toggle-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <span className={`faq-icon-rotator ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </button>

                  {/* ponytail: CSS grid transition (0fr -> 1fr) provides silky smooth height animation without DOM pops */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`faq-body-collapse ${isOpen ? 'is-open' : ''}`}
                  >
                    <div className="faq-body-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA below accordion */}
          <div className="faq-bottom-cta">
            <Link href="/contact" className="faq-contact-btn">
              <span>CONTACT US</span>
              <span className="square-arrow-icon" aria-hidden="true">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
