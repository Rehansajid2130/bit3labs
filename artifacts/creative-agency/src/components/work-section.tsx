import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  image: string;
  secondaryImage?: string;
  client: string;
  year: string;
  timeline: string;
  overview: string;
  challenge: string;
  solution: string;
  stack: string[];
  deliverables: string[];
  metrics: ProjectMetric[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'custom-ecommerce-platform',
    title: 'CUSTOM E-COMMERCE PLATFORM',
    category: 'Custom E-Commerce',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    client: 'Nordic Apparel Co.',
    year: '2025',
    timeline: '8 Weeks',
    overview: 'A bespoke headless e-commerce flagship engineered for an international minimalist apparel brand, delivering lightning-fast product filtering, zero-friction cart drawers, and instant localized checkout.',
    challenge: 'The client faced slow monolithic storefront speeds (>4.5s load times), cart abandonment on mobile, and complex multi-currency synchronization issues across European and US markets.',
    solution: 'We engineered a custom Next.js and Shopify Hydrogen headless storefront with edge-rendered catalog pages, optimistic cart state, Stripe international payment rails, and sub-second page transitions.',
    stack: ['Next.js 15', 'Shopify Storefront API', 'TypeScript', 'TailwindCSS', 'Stripe Elements', 'Redis Cache'],
    deliverables: ['Custom Storefront Architecture', 'One-Click Checkout Funnel', 'Dynamic Multi-Currency Engine', 'Automated ERP Inventory Sync'],
    metrics: [
      { label: 'Page Load Speed', value: '0.62s' },
      { label: 'Checkout Conversion Lift', value: '+142%' },
      { label: 'Mobile Bounce Rate', value: '-38%' },
    ],
  },
  {
    id: 'interactive-3d-experience',
    title: '3D INTERACTIVE SHOWCASE',
    category: 'Web Dev & 3D',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    client: 'Aura Spatial Audio',
    year: '2025',
    timeline: '6 Weeks',
    overview: 'An immersive 3D web experience crafted for next-generation spatial acoustics hardware, featuring interactive physics, real-time procedural lighting, and seamless audio visualizers.',
    challenge: 'Rendering heavy 3D GLTF models with complex material shaders on web browsers without causing GPU lag or draining mobile battery was the core technical hurdle.',
    solution: 'We developed custom GLSL fragment shaders with Three.js and React Three Fiber, implementing level-of-detail (LOD) geometry streaming and adaptive frame rate throttling.',
    stack: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'WebGL 2.0', 'Web Audio API', 'Vite'],
    deliverables: ['Interactive 3D Product Explorer', 'Procedural Lighting Controls', 'Real-time Audio Visualizer', 'Cross-Device Performance Tuning'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Average Session Duration', value: '4m 12s' },
      { label: 'Global Traffic Growth', value: '+210%' },
    ],
  },
  {
    id: 'mobile-app-product',
    title: 'VELOX MOBILE APPLICATION',
    category: 'Mobile App Dev',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
    client: 'Velox Mobility Labs',
    year: '2024',
    timeline: '10 Weeks',
    overview: 'A cross-platform iOS and Android application built for micro-mobility fleet management, real-time GPS asset telemetry, biometric unlocking, and in-app trip settlements.',
    challenge: 'Unreliable network coverage in dense urban canyons required an offline-first data sync engine that could safely buffer ride telemetry and sync without data duplication.',
    solution: 'We architected the mobile app using React Native with offline-first SQLite synchronization, background location streaming via native bridges, and biometric Apple Pay / Google Pay one-tap activation.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Mapbox SDK', 'SQLite Offline Sync', 'Fastlane CI/CD'],
    deliverables: ['iOS & Android App Store Builds', 'Background Telemetry Engine', 'Biometric Hardware Unlocking', 'Fleet Dispatch Mobile Portal'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Daily Active Users', value: '85K+' },
      { label: 'Crash-Free Sessions', value: '99.96%' },
    ],
  },
  {
    id: 'erp-inventory-hub',
    title: 'ENTERPRISE ERP & INVENTORY',
    category: 'ERP Systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    client: 'Synapse Industrial Supply',
    year: '2025',
    timeline: '12 Weeks',
    overview: 'A comprehensive, multi-facility Enterprise Resource Planning system connecting procurement, supplier PO generation, automated stock allocation, and real-time ledger accounting.',
    challenge: 'The enterprise relied on legacy disconnected spreadsheets, causing stock discrepancies, manual re-keying errors, and delayed order fulfillment across 4 regional warehouses.',
    solution: 'We engineered a resilient web-based ERP system featuring automated double-entry ledgering, real-time SKU reservation locks, barcode scanning APIs, and executive KPI reporting dashboards.',
    stack: ['React 19', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'WebSockets'],
    deliverables: ['Multi-Warehouse Inventory Ledger', 'Automated PO Dispatching', 'Role-Based Access Control', 'Financial Audit Trail System'],
    metrics: [
      { label: 'Inventory Discrepancies', value: '-94%' },
      { label: 'Order Processing Time', value: '3x Faster' },
      { label: 'Annual Operational Savings', value: '$280K+' },
    ],
  },
  {
    id: 'creator-personal-portfolio',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    category: 'Personal Websites',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    client: 'Kaelen Vance (Architectural Director)',
    year: '2024',
    timeline: '4 Weeks',
    overview: 'A high-craft personal showcase and visual archive for an acclaimed architectural director, emphasizing bold typography, smooth fluid transitions, and project narrative pacing.',
    challenge: 'Displaying massive high-resolution architectural photography without slowing down mobile page loads or compromising typographic precision.',
    solution: 'We crafted a bespoke, ultra-lean web experience utilizing next-gen WebP/AVIF image transformations, smooth gesture interactions, and meticulous grid typography.',
    stack: ['Vite', 'Vanilla CSS', 'TypeScript', 'Lenis Smooth Scroll', 'Responsive AVIF Media'],
    deliverables: ['Editorial Portfolio Layout', 'Bespoke Typography System', 'Interactive Project Index', 'Full Technical SEO Optimization'],
    metrics: [
      { label: 'Lighthouse Performance', value: '100 / 100' },
      { label: 'Total Bundle Size', value: '<48 KB' },
      { label: 'Inbound Inquiries Lift', value: '+320%' },
    ],
  },
  {
    id: 'warehouse-inventory-system',
    title: 'WAREHOUSE INVENTORY SYSTEM',
    category: 'ERP & Inventory',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    client: 'Apex Global Logistics',
    year: '2025',
    timeline: '9 Weeks',
    overview: 'A high-throughput warehouse logistics and inventory tracking system featuring mobile barcode scanners, automated bin allocation, picking route optimization, and live dispatching.',
    challenge: 'High pick error rates in peak seasons and manual stock reconciliations were driving customer dissatisfaction and fulfillment bottlenecks.',
    solution: 'We built a high-speed web application with scanner integration, real-time WebSocket stock state synchronization, pick-to-light routing, and automated supplier re-ordering triggers.',
    stack: ['Next.js', 'PostgreSQL', 'Redis Pub/Sub', 'Zebra Scanner SDK', 'TailwindCSS'],
    deliverables: ['Barcode Scanner PWA', 'Optimized Picking Route Engine', 'Live Stock Heatmaps', 'Supplier Re-order Automations'],
    metrics: [
      { label: 'Pick Error Reduction', value: '99.2%' },
      { label: 'Order Dispatch Speed', value: '+65%' },
      { label: 'Live Stock Accuracy', value: '99.98%' },
    ],
  },
];

export function WorkSection({
  showAll = false,
  filter = 'ALL',
}: {
  showAll?: boolean;
  filter?: string;
}) {
  const allProjects = showAll ? WORK_PROJECTS : WORK_PROJECTS.slice(0, 6);
  const projects = allProjects.filter((item) => {
    if (!filter || filter === 'ALL') return true;
    if (filter === 'WEB DEV & 3D') return item.category.includes('Web') || item.category.includes('3D');
    if (filter === 'CUSTOM E-COMMERCE') return item.category.includes('Commerce');
    if (filter === 'MOBILE APPS') return item.category.includes('Mobile');
    if (filter === 'ERP & INVENTORY') return item.category.includes('ERP') || item.category.includes('Inventory');
    if (filter === 'PERSONAL SITES') return item.category.includes('Personal');
    return item.category.toUpperCase() === filter.toUpperCase();
  });

  return (
    <section className="editorial-section work-section" id="work">
      <div className="section-wrap">
        {/* Header Row with WORKS above the title and EXPLORE MORE aligned */}
        <div className="work-header-row">
          <div className="work-title-wrap">
            <span className="section-kicker">WORKS</span>
            <h2 className="section-title">
              SELECTED <span className="red">WORK</span> FROM RECENT PROJECTS
            </h2>
          </div>
          <Link href="/work" className="explore-more-link">
            <span>EXPLORE MORE</span>
            <span className="square-arrow-icon" aria-hidden="true">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

          {/* Bento Grid (Matching image4.png layout) */}
          <div className="work-bento-grid">
            {/* Left Column: Tall Minimal Aesthetics */}
            <div className="bento-col-left">
              {projects[0] && (
                <Link href={`/work/${projects[0].id}`} className="bento-card bento-card-tall">
                  <div className="bento-img-wrap">
                    <img src={projects[0].image} alt={projects[0].title} loading="lazy" decoding="async" />
                  </div>
                  <div className="bento-card-footer">
                    <span className="bento-title">{projects[0].title}</span>
                    <span className="bento-icon"><ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              )}
            </div>

            {/* Right Column: 2 Stacked Cards */}
            <div className="bento-col-right-top">
              {projects[1] && (
                <Link href={`/work/${projects[1].id}`} className="bento-card bento-card-stacked">
                  <div className="bento-img-wrap">
                    <img src={projects[1].image} alt={projects[1].title} loading="lazy" decoding="async" />
                  </div>
                  <div className="bento-card-footer">
                    <span className="bento-title">{projects[1].title}</span>
                    <span className="bento-icon"><ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              )}

              {projects[2] && (
                <Link href={`/work/${projects[2].id}`} className="bento-card bento-card-stacked">
                  <div className="bento-img-wrap fashion-bw">
                    <img src={projects[2].image} alt={projects[2].title} loading="lazy" decoding="async" />
                  </div>
                  <div className="bento-card-footer">
                    <span className="bento-title">{projects[2].title}</span>
                    <span className="bento-icon"><ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              )}
            </div>

            {/* Bottom Row: Equal Cards */}
            {projects.length > 3 && (
              <div className="bento-row-bottom">
                {projects.slice(3).map((item) => (
                  <Link key={item.id} href={`/work/${item.id}`} className="bento-card bento-card-bottom">
                    <div className="bento-img-wrap">
                      <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="bento-card-footer">
                      <span className="bento-title">{item.title}</span>
                      <span className="bento-icon"><ArrowUpRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
  );
}
