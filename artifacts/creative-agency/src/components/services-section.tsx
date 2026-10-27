import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceRow {
  num: string;
  title: string;
  desc: string;
  isInverted?: boolean;
  deliverables: [string, string, string, string];
}

const SERVICES_DATA: ServiceRow[] = [
  {
    num: '01',
    title: 'CUSTOM WEB & 3D WEBSITES',
    desc: 'High-performance bespoke websites, immersive 3D digital experiences, and high-impact personal or portfolio websites built with modern engineering.',
    isInverted: false,
    deliverables: ['Custom Websites', '3D Web Experiences', 'Personal Websites', 'High-Speed Architecture'],
  },
  {
    num: '02',
    title: 'CUSTOM E-COMMERCE PLATFORMS',
    desc: 'Tailored digital storefronts engineered for effortless checkout, lightning-fast product filtering, secure payment gateways, and scalable sales growth.',
    isInverted: true,
    deliverables: ['Bespoke Storefronts', 'Checkout Workflows', 'Payment Integrations', 'Catalog Architecture'],
  },
  {
    num: '03',
    title: 'MOBILE APPS & ERP SYSTEMS',
    desc: 'Native iOS & Android apps and mission-critical ERP & warehouse inventory management software built for real-time operational excellence.',
    isInverted: false,
    deliverables: ['iOS & Android Apps', 'Cross-Platform Tech', 'ERP Software', 'Warehouse Inventory'],
  },
];

export function ServicesSection() {
  return (
    <section className="services-section-editorial" id="services">
      {/* Header Container */}
      <div className="section-wrap services-header-wrap">
        <div className="services-title-col">
          <span className="section-kicker">WHAT WE DO</span>
          <h2 className="section-title">
            SERVICES THAT MAKE A LASTING <span className="red">IMPACT</span>
          </h2>
        </div>
        <Link href="/services" className="explore-more-link">
          <span>ALL SERVICES</span>
          <span className="square-arrow-icon" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
        </Link>
      </div>

      {/* 3 Full-Width Rows */}
      <div className="services-rows-container">
        {SERVICES_DATA.map((item) => (
          <div
            key={item.num}
            className={`service-editorial-row ${item.isInverted ? 'service-row-inverted' : 'service-row-light'}`}
          >
            <div className="section-wrap service-row-grid">
              <span className="service-row-num">{item.num}</span>

              <div className="service-row-main">
                <h3 className="service-row-title">{item.title}</h3>
                <p className="service-row-desc">{item.desc}</p>
              </div>

              <div className="service-row-deliverables">
                {item.deliverables.map((bullet) => (
                  <div key={bullet} className="service-bullet-item">
                    <span className="service-red-dot" aria-hidden="true" />
                    <span className="service-bullet-text">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
