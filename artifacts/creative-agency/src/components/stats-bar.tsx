import { useCountUp } from '@/hooks/use-count-up';

interface StatData {
  value: string;
  label: string;
}

const STATS: StatData[] = [
  { value: '250+', label: 'PROJECTS DELIVERED' },
  { value: '98%', label: 'CLIENT SATISFACTION' },
  { value: '15', label: 'YEARS EXPERIENCE' },
  { value: '50+', label: 'INDUSTRY AWARDS' },
];

// ponytail: dedicated counter item with intersection animation
function StatCounterItem({ stat }: { stat: StatData }) {
  const { elementRef, display } = useCountUp(stat.value);

  return (
    <div ref={elementRef} className="stat-item">
      <strong className="stat-value">{display}</strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="stats-section">
      <div className="section-wrap stats-container">
        {STATS.map((stat) => (
          <StatCounterItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
