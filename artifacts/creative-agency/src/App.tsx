import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { SiteHeader } from '@/components/site-header';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { WorkPage } from '@/pages/work';
import { ProjectDetailPage } from '@/pages/project-detail';
import { ServicesPage } from '@/pages/services';
import { ContactPage } from '@/pages/contact';
import { CareersPage } from '@/pages/careers';
import { BlogPage } from '@/pages/blog';
import { BlogDetailPage } from '@/pages/blog-detail';
import { PrivacyPage } from '@/pages/privacy';
import { TermsPage } from '@/pages/terms';
import NotFound from '@/pages/not-found';
import { WORK_PROJECTS } from '@/components/work-section';
import { BLOG_POSTS } from '@/lib/blog-data';

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
      <SiteHeader />
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
    </div>
  );
}

export default App;
