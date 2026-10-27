import { HeroSection } from '@/components/hero-section';
import { StatsBar } from '@/components/stats-bar';
import { AboutSection } from '@/components/about-section';
import { WorkSection } from '@/components/work-section';
import { ServicesSection } from '@/components/services-section';
import { ExpertsSection } from '@/components/experts-section';
import { FaqSection } from '@/components/faq-section';
import { SiteFooter } from '@/components/site-footer';

export function HomePage() {
  return (
    <main className="page-main home-page">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ExpertsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
