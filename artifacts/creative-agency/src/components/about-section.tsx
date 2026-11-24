import teamImage from '@/assets/team-project-review.webp';

export function AboutSection() {
  return (
    <section className="editorial-section about-section" id="about">
      <div className="section-wrap about-studio-layout">
        <div className="about-studio-copy">
          <span className="section-kicker">ABOUT US</span>
          <h2 className="section-title">
            WE ARE A <span className="red">CREATIVE</span> POWERHOUSE
          </h2>
          <p>
            We engineer high-performance web applications, bespoke e-commerce platforms, native mobile apps, and robust ERP systems. By combining cutting-edge frontend craft with reliable system architecture, we turn complex digital ideas into fast, scalable software.
          </p>
        </div>
        <img
          src={teamImage}
          alt="Three teammates reviewing interface sketches together at a worktable"
          className="about-studio-photo"
          width={1280}
          height={853}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

