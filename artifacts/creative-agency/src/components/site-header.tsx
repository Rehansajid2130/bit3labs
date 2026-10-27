import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  // ponytail: keep active link check minimal and reliable
  const isActive = (path: string) => location === path;

  return (
    <header className="topbar">
      <Link href="/" className="wordmark" aria-label="bit3labs home">
        bit3labs<span className="period">.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/about" className={isActive('/about') ? 'nav-active' : ''}>ABOUT</Link>
        <Link href="/work" className={isActive('/work') ? 'nav-active' : ''}>WORK</Link>
        <Link href="/services" className={isActive('/services') ? 'nav-active' : ''}>SERVICES</Link>
        <Link href="/blog" className={isActive('/blog') ? 'nav-active' : ''}>BLOG</Link>
        <Link href="/careers" className={isActive('/careers') ? 'nav-active' : ''}>CAREERS</Link>
        <Link href="/contact" className={isActive('/contact') ? 'nav-active' : ''}>CONTACT</Link>
      </nav>

      <Link href="/contact" className="nav-cta-btn">
        START PROJECT
      </Link>

      <button
        className="menu-toggle"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/about" onClick={close}>ABOUT</Link>
          <Link href="/work" onClick={close}>WORK</Link>
          <Link href="/services" onClick={close}>SERVICES</Link>
          <Link href="/blog" onClick={close}>BLOG</Link>
          <Link href="/careers" onClick={close}>CAREERS</Link>
          <Link href="/contact" onClick={close}>CONTACT</Link>
          <Link href="/contact" className="mobile-cta" onClick={close}>START PROJECT</Link>
        </nav>
      )}
    </header>
  );
}
