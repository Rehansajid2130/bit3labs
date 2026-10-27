export function ExpertsSection() {
  const expertStats = [
    { value: '45+', label: 'TEAM MEMBERS' },
    { value: '12', label: 'COUNTRIES' },
    { value: '8', label: 'SPECIALIZATIONS' },
    { value: '100%', label: 'REMOTE FIRST' },
  ];

  return (
    <section className="experts-section">
      <div className="experts-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
          alt="bit3labs passionate expert team members"
          className="experts-bg-img"
          loading="lazy"
        />
        <div className="experts-scrim-overlay" />

        <div className="section-wrap experts-content">
          <h2 className="experts-headline">
            BUILT BY PASSIONATE <span className="red">EXPERTS</span>
          </h2>

          <div className="experts-stats-grid">
            {expertStats.map((item) => (
              <div key={item.label} className="expert-stat-card">
                <strong className="expert-stat-value">{item.value}</strong>
                <span className="expert-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
