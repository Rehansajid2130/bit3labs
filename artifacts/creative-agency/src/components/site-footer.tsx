import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface SiteFooterProps {
  hideCta?: boolean;
}

export function SiteFooter({ hideCta = false }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div className="footer-brand-col">
          <Link href="/" className="wordmark footer-wordmark">
            bit3labs<span className="period">.</span>
          </Link>
          <p className="footer-tagline">
            Crafting exceptional digital experiences for forward-thinking brands.
          </p>
        </div>

        {!hideCta ? (
          <div className="footer-cta-col">
            <span className="footer-label">HAVE A PROJECT IN MIND?</span>
            <Link href="/contact" className="footer-cta-link">
              <span>LET'S CREATE TOGETHER</span>
              <span className="square-arrow-icon" aria-hidden="true">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        ) : (
          <div className="footer-cta-col">
            <span className="footer-label">DIRECT INQUIRIES</span>
            <a href="mailto:hello@bit3labs.com" className="footer-cta-link">
              <span>HELLO@BIT3LABS.COM</span>
              <span className="square-arrow-icon" aria-hidden="true">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        )}

        <div className="footer-links-col">
          <span className="footer-heading">Company</span>
          <nav className="footer-nav" aria-label="Footer links">
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-links-col">
          <span className="footer-heading">Legal</span>
          <nav className="footer-nav" aria-label="Legal links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>

      <div className="section-wrap footer-bottom-bar">
        <p className="footer-copy">
          © {new Date().getFullYear()} bit3labs. All rights reserved. · <Link href="/privacy" className="footer-mini-link">Privacy</Link> · <Link href="/terms" className="footer-mini-link">Terms</Link>
        </p>
        <span className="footer-eyebrow">INDEPENDENT BY DESIGN · WORKING GLOBALLY</span>
      </div>
    </footer>
  );
}
