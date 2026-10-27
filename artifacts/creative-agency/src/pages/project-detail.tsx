import { useRoute, Link } from 'wouter';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  User,
  Clock,
  Sparkles,
} from 'lucide-react';
import { WORK_PROJECTS } from '@/components/work-section';
import { SiteFooter } from '@/components/site-footer';

export function ProjectDetailPage() {
  const [, params] = useRoute('/work/:id');
  const projectId = params?.id;

  const project = WORK_PROJECTS.find((p) => p.id === projectId) || WORK_PROJECTS[0];

  // Suggest 3 complementary or related projects (excluding active)
  const similarProjects = WORK_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="page-main project-detail-page">
      {/* 1. Page Hero Banner matching AboutPage & WorkPage */}
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <div className="project-top-nav-bar">
            <Link href="/work" className="project-back-link">
              <ArrowLeft size={14} />
              <span>ALL PROJECTS</span>
            </Link>
            <span className="section-kicker">// {project.category.toUpperCase()}</span>
          </div>

          <h1 className="page-hero-title">
            {project.title}
          </h1>

          <p className="page-hero-desc">
            {project.overview}
          </p>

          {/* Meta Specifications Rail */}
          <div className="project-hero-meta-bar">
            <div className="project-meta-cell">
              <span className="project-meta-tag"><User size={13} /> CLIENT</span>
              <span className="project-meta-value">{project.client}</span>
            </div>

            <div className="project-meta-cell">
              <span className="project-meta-tag"><Clock size={13} /> TIMELINE</span>
              <span className="project-meta-value">{project.timeline}</span>
            </div>

            <div className="project-meta-cell">
              <span className="project-meta-tag"><Calendar size={13} /> YEAR</span>
              <span className="project-meta-value">{project.year}</span>
            </div>

            <div className="project-meta-cell">
              <span className="project-meta-tag"><Layers size={13} /> DISCIPLINE</span>
              <span className="project-meta-value">{project.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Primary Showcase Section - Editorial Rail Grid */}
      <section className="editorial-section project-media-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">SHOWCASE</span>
          </aside>

          <div className="editorial-main">
            {/* Primary Controlled Frame - Standard 440px height matching about-media-wrap */}
            <div className="project-media-frame">
              <img
                src={project.image}
                alt={project.title}
                className="project-frame-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Architecture & Tech Specs - Editorial Rail Grid */}
      <section className="editorial-section project-breakdown-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">ANALYSIS</span>
          </aside>

          <div className="editorial-main">
            <div className="project-two-col-layout">
              {/* Left Column: Narrative & Deliverables */}
              <div className="project-narrative-flow">
                <div className="project-story-item">
                  <span className="story-step-num">// 01 THE CHALLENGE</span>
                  <h2 className="project-block-title">OPERATIONAL CONSTRAINTS &amp; OBJECTIVES</h2>
                  <p className="editorial-lead">
                    {project.challenge}
                  </p>
                </div>

                <div className="project-story-item">
                  <span className="story-step-num">// 02 THE ARCHITECTURE</span>
                  <h2 className="project-block-title">ENGINEERING &amp; SYSTEM DESIGN</h2>
                  <p className="editorial-lead">
                    {project.solution}
                  </p>
                </div>

                <div className="project-story-item">
                  <span className="story-step-num">// 03 KEY DELIVERABLES</span>
                  <h2 className="project-block-title">DELIVERED MODULES &amp; SYSTEMS</h2>
                  <ul className="project-deliverables-checklist">
                    {project.deliverables.map((item) => (
                      <li key={item} className="deliverable-row">
                        <span className="deliverable-bullet">
                          <CheckCircle2 size={15} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Dark Charcoal Tech Specs Card */}
              <div className="project-specs-sidebar">
                <div className="project-dark-specs-card">
                  <div className="card-specs-header">
                    <Cpu size={16} className="red-icon" />
                    <span>TECHNOLOGY STACK</span>
                  </div>

                  <div className="specs-pill-group">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-badge-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-specs-header metrics-top-border">
                    <Sparkles size={16} className="red-icon" />
                    <span>IMPACT &amp; PERFORMANCE</span>
                  </div>

                  <div className="specs-stats-list">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="specs-stat-entry">
                        <span className="specs-stat-number">{metric.value}</span>
                        <span className="specs-stat-caption">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="specs-start-btn">
                    <span>DISCUSS SIMILAR BUILD</span>
                    <span className="square-arrow-icon" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Visual Accent (if available) - Controlled 320px frame */}
            {project.secondaryImage && (
              <div className="project-secondary-frame">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} detailed interface`}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Similar Projects - Editorial Rail Grid */}
      <section className="editorial-section similar-projects-section">
        <div className="section-wrap editorial-grid">
          <aside className="editorial-rail">
            <span className="section-kicker">RELATED</span>
          </aside>

          <div className="editorial-main">
            <div className="work-header-row">
              <div className="work-title-wrap">
                <h2 className="section-title">
                  SIMILAR <span className="red">PROJECTS</span> &amp; BUILDS
                </h2>
              </div>
              <Link href="/work" className="explore-more-link">
                <span>VIEW ALL WORK</span>
                <span className="square-arrow-icon" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            <div className="similar-cards-grid">
              {similarProjects.map((item) => (
                <Link
                  key={item.id}
                  href={`/work/${item.id}`}
                  className="similar-bento-card"
                >
                  <div className="similar-img-frame">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="similar-card-tag">
                      {item.category}
                    </span>
                  </div>

                  <div className="similar-card-caption">
                    <div>
                      <h3 className="similar-project-name">{item.title}</h3>
                      <span className="similar-project-specs">{item.timeline} • {item.year}</span>
                    </div>
                    <span className="similar-arrow-badge" aria-hidden="true">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
