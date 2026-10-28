import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  // Close mobile navigation drawer on Escape key press
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  // Prevent background scroll bleed when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // ponytail: keep active link check minimal and reliable (handles exact path and slash-delimited sub-paths)
  const isActive = (path: string) => location === path || (path !== '/' && location.startsWith(`${path}/`));

  return (
    <header className="topbar">
      <Link href="/" className="wordmark" aria-label="bit3labs home">
        bit3labs<span className="period">.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/about" className={isActive('/about') ? 'nav-active' : ''} aria-current={isActive('/about') ? 'page' : undefined}>ABOUT</Link>
        <Link href="/work" className={isActive('/work') ? 'nav-active' : ''} aria-current={isActive('/work') ? 'page' : undefined}>WORK</Link>
        <Link href="/services" className={isActive('/services') ? 'nav-active' : ''} aria-current={isActive('/services') ? 'page' : undefined}>SERVICES</Link>
        <Link href="/blog" className={isActive('/blog') ? 'nav-active' : ''} aria-current={isActive('/blog') ? 'page' : undefined}>BLOG</Link>
        <Link href="/contact" className={isActive('/contact') ? 'nav-active' : ''} aria-current={isActive('/contact') ? 'page' : undefined}>CONTACT</Link>
      </nav>

      <Link href="/contact" className="nav-cta-btn">
        START PROJECT
      </Link>

      <button
        className="menu-toggle"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <nav id="mobile-nav-menu" className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/about" className={isActive('/about') ? 'nav-active' : ''} aria-current={isActive('/about') ? 'page' : undefined} onClick={close}>ABOUT</Link>
          <Link href="/work" className={isActive('/work') ? 'nav-active' : ''} aria-current={isActive('/work') ? 'page' : undefined} onClick={close}>WORK</Link>
          <Link href="/services" className={isActive('/services') ? 'nav-active' : ''} aria-current={isActive('/services') ? 'page' : undefined} onClick={close}>SERVICES</Link>
          <Link href="/blog" className={isActive('/blog') ? 'nav-active' : ''} aria-current={isActive('/blog') ? 'page' : undefined} onClick={close}>BLOG</Link>
          <Link href="/contact" className={isActive('/contact') ? 'nav-active' : ''} aria-current={isActive('/contact') ? 'page' : undefined} onClick={close}>CONTACT</Link>
          <Link href="/contact" className="mobile-cta" onClick={close}>START PROJECT</Link>
        </nav>
      )}
    </header>
  );
}
