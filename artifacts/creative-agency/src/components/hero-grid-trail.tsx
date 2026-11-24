import { useEffect, useRef } from 'react';

export function HeroGridTrail() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const hero = overlay?.parentElement;
    if (!overlay || !hero) return;

    const cellSize = Number.parseFloat(getComputedStyle(overlay).getPropertyValue('--site-grid-cell-size'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeCell: { left: number; top: number; element: HTMLDivElement } | undefined;

    function fadeCell() {
      if (!activeCell) return;

      const { element } = activeCell;
      element.addEventListener('animationend', () => element.remove(), { once: true });
      element.classList.add('hero-grid-cell-fading');
      activeCell = undefined;
    }

    function highlightCell(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || reducedMotion.matches || !overlay) return;

      const bounds = overlay.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const left = Math.floor(x / cellSize) * cellSize;
      const top = Math.floor(y / cellSize) * cellSize;

      if (!activeCell || activeCell.left !== left || activeCell.top !== top) {
        fadeCell();
        if (overlay.childElementCount >= 8) overlay.firstElementChild?.remove();

        const element = document.createElement('div');
        element.className = 'hero-grid-cell';
        element.style.transform = `translate(${left}px, ${top}px)`;
        overlay.append(element);
        activeCell = { left, top, element };
      }

      activeCell.element.style.setProperty('--cell-pointer-x', `${x - left}px`);
      activeCell.element.style.setProperty('--cell-pointer-y', `${y - top}px`);
    }

    function clearTrail() {
      overlay?.replaceChildren();
      activeCell = undefined;
    }

    hero.addEventListener('pointermove', highlightCell);
    hero.addEventListener('pointerleave', fadeCell);
    hero.addEventListener('pointercancel', fadeCell);
    reducedMotion.addEventListener('change', clearTrail);

    return () => {
      hero.removeEventListener('pointermove', highlightCell);
      hero.removeEventListener('pointerleave', fadeCell);
      hero.removeEventListener('pointercancel', fadeCell);
      reducedMotion.removeEventListener('change', clearTrail);
      clearTrail();
    };
  }, []);

  return <div ref={overlayRef} className="hero-grid-trail" aria-hidden="true" />;
}
