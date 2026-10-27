export function StatsBar() {
  const stats = [
    { value: '250+', label: 'PROJECTS DELIVERED' },
    { value: '98%', label: 'CLIENT SATISFACTION' },
    { value: '15', label: 'YEARS EXPERIENCE' },
    { value: '50+', label: 'INDUSTRY AWARDS' },
  ];

  return (
    <section className="stats-section">
      <div className="section-wrap stats-container">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <strong className="stat-value">{stat.value}</strong>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
