import studioImage from '@/assets/about-studio.webp';
import { SiteFooter } from '@/components/site-footer';

export function AboutPage() {
  return (
    <main className="page-main about-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">ABOUT US</span>
          <h1 className="page-hero-title">
            WE DESIGN AND BUILD <span className="red">DIGITAL PRODUCTS</span>
          </h1>
        </div>
      </div>

      <section className="editorial-section">
        <div className="section-wrap about-studio-layout">
          <div className="about-studio-copy">
            <h2 className="section-title">One <span className="red">studio</span>, from design to launch</h2>
            <p>
              bit3labs is an independent design and software studio. We build websites, online stores,
              mobile apps, and internal tools for businesses that need a new product or have outgrown
              the one they use today.
            </p>
          </div>
          <img
            src={studioImage}
            className="about-studio-photo"
            alt="A laptop, printed interface sketches, and a red color swatch on a worktable"
            width={1368}
            height={912}
            decoding="async"
          />
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-wrap about-studio-layout">
          <h2 className="section-title">Why we <span className="red">started</span></h2>
          <div className="about-studio-copy">
            <p>
              We started bit3labs because we saw good ideas lose their shape between design and
              implementation. A screen could look finished in a mockup, then turn out to be awkward
              to use on a phone or difficult to update after launch.
            </p>
            <p>
              We built the studio around a simple decision. The people designing the product and the
              people building it stay involved from the first sketch through the finished release.
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-section about-process">
        <div className="section-wrap">
          <h2 className="section-title">How our team works together</h2>
          <ol className="about-process-grid" role="list">
            <li>
              <h3>Start with one brief</h3>
              <p>Designers and developers agree on the user flows, technical constraints, and priorities before the screens are finalized.</p>
            </li>
            <li>
              <h3>Review the working product</h3>
              <p>As features are built, the team reviews the actual interface together and checks how it behaves on different screen sizes.</p>
            </li>
            <li>
              <h3>Test the release together</h3>
              <p>Before launch, design and engineering walk through the main user journeys and resolve issues they find in the build.</p>
            </li>
          </ol>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
