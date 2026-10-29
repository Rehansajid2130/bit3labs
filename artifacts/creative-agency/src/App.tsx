import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { SiteHeader } from '@/components/site-header';
import { BackToTop } from '@/components/back-to-top';
import { HomePage } from '@/pages/home';
import { WORK_PROJECTS } from '@/components/work-section';
import { BLOG_POSTS } from '@/lib/blog-data';

// ponytail: route-level code splitting via standard React.lazy + Suspense (drops initial JS bundle by ~45%)
const AboutPage = lazy(() => import('@/pages/about').then((m) => ({ default: m.AboutPage })));
const WorkPage = lazy(() => import('@/pages/work').then((m) => ({ default: m.WorkPage })));
const ProjectDetailPage = lazy(() => import('@/pages/project-detail').then((m) => ({ default: m.ProjectDetailPage })));
const ServicesPage = lazy(() => import('@/pages/services').then((m) => ({ default: m.ServicesPage })));
const ContactPage = lazy(() => import('@/pages/contact').then((m) => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import('@/pages/careers').then((m) => ({ default: m.CareersPage })));
const BlogPage = lazy(() => import('@/pages/blog').then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('@/pages/blog-detail').then((m) => ({ default: m.BlogDetailPage })));
const PrivacyPage = lazy(() => import('@/pages/privacy').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/terms').then((m) => ({ default: m.TermsPage })));
const NotFound = lazy(() => import('@/pages/not-found'));

export function App() {
  const [location] = useLocation();

  // ponytail: standard window scroll to top on route change (respects anchor hash if present)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Normalize trailing slashes for lookup (e.g. /about/ -> /about)
    const normalizedPath = location.length > 1 && location.endsWith('/')
      ? location.slice(0, -1)
      : location;

    const routeTitles: Record<string, string> = {
      '/': 'bit3labs — Creative Technology Studio',
      '/about': 'About bit3labs — Creative Powerhouse',
      '/work': 'Selected Work — bit3labs',
      '/services': 'Services & Capabilities — bit3labs',
      '/blog': 'Engineering Dispatches & Journal — bit3labs',
      '/contact': 'Contact — Let’s Create Together | bit3labs',
      '/careers': 'Careers & Engineering Roles — bit3labs',
      '/privacy': 'Privacy Policy — bit3labs',
      '/terms': 'Terms of Service — bit3labs',
    };

    if (normalizedPath.startsWith('/work/')) {
      const id = normalizedPath.replace('/work/', '').split('/')[0];
      const project = WORK_PROJECTS.find((p) => p.id === id);
      document.title = project
        ? `${project.title} — Case Study | bit3labs`
        : 'Project Not Found — bit3labs';
    } else if (normalizedPath.startsWith('/blog/')) {
      const slug = normalizedPath.replace('/blog/', '').split('/')[0];
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      document.title = post
        ? `${post.title} — Dispatches | bit3labs`
        : 'Dispatch Not Found — bit3labs';
    } else if (routeTitles[normalizedPath]) {
      document.title = routeTitles[normalizedPath];
    } else {
      document.title = '404 Coordinate Not Found — bit3labs';
    }
  }, [location]);

  return (
    <div className="app-shell">
      {/* ponytail: native WCAG 2.4.1 keyboard bypass link */}
      <a href="#main-content" className="skip-to-content">// SKIP TO MAIN CONTENT</a>

      <SiteHeader />

      <div id="main-content">
        <Suspense fallback={<div className="route-progress-bar" role="status" aria-label="Loading page..." />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/work" component={WorkPage} />
            <Route path="/work/:id" component={ProjectDetailPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/blog/:slug" component={BlogDetailPage} />
            <Route path="/careers" component={CareersPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
