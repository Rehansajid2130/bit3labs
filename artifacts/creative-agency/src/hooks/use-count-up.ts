import { useEffect, useRef, useState } from 'react';

// ponytail: native IntersectionObserver + RAF counter, 0 extra dependencies
export function useCountUp(rawTarget: string, durationMs = 1200) {
  // Parse numeric part and prefix/suffix (e.g., '250+' -> 250 and '+')
  const match = rawTarget.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  const prefix = match ? match[1] : '';
  const targetNum = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If not a parseable number or user prefers reduced motion, display raw immediately
    if (isNaN(targetNum) || targetNum === 0) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(targetNum);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.floor(ease * targetNum));

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCurrent(targetNum);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) observer.observe(currentEl);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [targetNum, durationMs]);

  const display = targetNum === 0 ? rawTarget : `${prefix}${current}${suffix}`;
  return { elementRef, display };
}

