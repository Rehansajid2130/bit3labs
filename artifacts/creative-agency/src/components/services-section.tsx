import { useState } from 'react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  image?: string;
  deliverables: [string, string, string, string];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev-3d',
    num: '01',
    title: 'CUSTOM WEB & 3D WEBSITES',
    desc: 'High-performance bespoke websites, immersive 3D digital experiences, and high-impact personal or portfolio websites built with modern engineering.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['CUSTOM WEBSITES', '3D WEB EXPERIENCES', 'PERSONAL WEBSITES', 'HIGH-SPEED ARCHITECTURE'],
  },
  {
    id: 'ecommerce',
    num: '02',
    title: 'CUSTOM E-COMMERCE PLATFORMS',
    desc: 'Tailored digital storefronts engineered for effortless checkout, lightning-fast product filtering, secure payment gateways, and scalable sales growth.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    deliverables: ['BESPOKE STOREFRONTS', 'CHECKOUT WORKFLOWS', 'PAYMENT INTEGRATIONS', 'CATALOG ARCHITECTURE'],
  },
  {
    id: 'mobile-apps',
    num: '03',
    title: 'MOBILE APPLICATION DEV',
    desc: 'Native iOS & Android apps and fluid cross-platform solutions built with intuitive user interaction, offline sync, and real-time responsiveness.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['IOS & ANDROID APPS', 'CROSS-PLATFORM TECH', 'OFFLINE-FIRST SYNC', 'MOBILE UI/UX DESIGN'],
  },
  {
    id: 'erp-inventory',
    num: '04',
    title: 'ERP & INVENTORY SYSTEMS',
    desc: 'Bespoke enterprise resource planning, warehouse automation, live stock tracking, and centralized internal management dashboards that keep operations in sync.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['CUSTOM ERP SOFTWARE', 'INVENTORY MANAGEMENT', 'WAREHOUSE OPS', 'INTERNAL DASHBOARDS'],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>('ecommerce');

  return (
    <section className="editorial-section services-section" id="services">
      <div className="section-wrap editorial-grid">
        {/* Left Rail */}
        <aside className="editorial-rail">
          <span className="section-kicker">WHAT WE DO</span>
        </aside>

        {/* Main Column */}
        <div className="editorial-main">
          <div className="services-header-block">
            <h2 className="section-title">
              SERVICES THAT MAKE A<br />
              LASTING <span className="red">IMPACT</span>
            </h2>
            <p className="editorial-lead">
              We craft state-of-the-art custom websites, high-conversion e-commerce engines, mobile applications, and enterprise inventory &amp; ERP systems built to accelerate operational excellence.
            </p>
          </div>

          {/* Services List */}
          <div className="services-interactive-list">
            {SERVICES.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`service-card-row ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(item.id);
                    }
                  }}
                >
                  <div className="service-num-col">
                    <span className="service-num-badge">{item.num}</span>
                  </div>

                  <div className="service-info-col">
                    {isActive && item.image && (
                      <div className="service-preview-thumb">
                        <img src={item.image} alt={item.title} loading="lazy" />
                      </div>
                    )}
                    <div className="service-text-wrap">
                      <h3 className="service-card-title">{item.title}</h3>
                      <p className="service-card-desc">{item.desc}</p>
                    </div>
                  </div>

                  <div className="service-deliverables-col">
                    <ul className="service-bullets">
                      {item.deliverables.map((bullet) => (
                        <li key={bullet}>
                          <span className="bullet-sq" aria-hidden="true">■</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
