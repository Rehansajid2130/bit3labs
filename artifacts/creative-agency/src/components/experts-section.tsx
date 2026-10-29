import { useCountUp } from '@/hooks/use-count-up';

interface ExpertStat {
  value: string;
  label: string;
}

const EXPERT_STATS: ExpertStat[] = [
  { value: '45+', label: 'TEAM MEMBERS' },
  { value: '12', label: 'COUNTRIES' },
  { value: '8', label: 'SPECIALIZATIONS' },
  { value: '100%', label: 'REMOTE FIRST' },
];

// ponytail: smooth count-up item triggered when scrolled into view
function ExpertStatItem({ item }: { item: ExpertStat }) {
  const { elementRef, display } = useCountUp(item.value);

  return (
    <div ref={elementRef} className="expert-stat-card">
      <strong className="expert-stat-value">{display}</strong>
      <span className="expert-stat-label">{item.label}</span>
    </div>
  );
}

export function ExpertsSection() {
  return (
    <section className="experts-section">
      <div className="experts-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
          alt="bit3labs passionate expert team members"
          className="experts-bg-img"
          loading="lazy"
          decoding="async"
        />
        <div className="experts-scrim-overlay" />

        <div className="section-wrap experts-content">
          <h2 className="experts-headline">
            BUILT BY PASSIONATE <span className="expert-badge-red">EXPERTS</span>
          </h2>

          <div className="experts-stats-grid">
            {EXPERT_STATS.map((item) => (
              <ExpertStatItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
