import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export function ContactPage() {
  return (
    <main className="page-main contact-page">
      <ContactSection />
      <SiteFooter hideCta={true} />
    </main>
  );
}
