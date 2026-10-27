export function AboutSection() {
  return (
    <section className="editorial-section about-section" id="about">
      <div className="section-wrap editorial-grid">
        <aside className="editorial-rail">
          <span className="section-kicker">ABOUT US</span>
        </aside>

        <div className="editorial-main">
          <h2 className="section-title">
            WE ARE A <span className="red">CREATIVE</span> POWERHOUSE
          </h2>
          <p className="editorial-lead">
            We engineer high-performance web applications, bespoke e-commerce platforms, native mobile apps, and robust ERP systems. By combining cutting-edge frontend craft with reliable system architecture, we turn complex digital ideas into fast, scalable software.
          </p>

          <div className="about-media-wrap">
            <img
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Collaborative creative team working together at studio table"
              className="about-studio-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

