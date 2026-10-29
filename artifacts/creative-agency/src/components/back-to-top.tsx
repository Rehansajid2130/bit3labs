import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

// ponytail: native window.scrollTo smooth, accessible back-to-top button
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top-btn ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top of page"
      title="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}

