import { flushSync } from 'react-dom';
import { navigate, useBrowserLocation, type BrowserLocationHook } from 'wouter/use-browser-location';

let latestNavigation = 0;
let committingTransition = false;

export function isCommittingPageTransition() {
  return committingTransition;
}

const navigateWithTransition: typeof navigate = (to, options) => {
  const navigation = ++latestNavigation;
  const currentPath = window.location.pathname;
  const destination = new URL(to, window.location.href);

  if (
    !document.startViewTransition ||
    destination.pathname === currentPath ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    navigate(to, options);
    return;
  }

  const transition = document.startViewTransition(() => {
    // An older click can still reach this callback after a newer navigation starts.
    if (navigation !== latestNavigation || window.location.pathname !== currentPath) return;

    committingTransition = true;
    try {
      flushSync(() => navigate(to, options));
    } finally {
      committingTransition = false;
    }
  });
  void transition.finished.catch((error) => console.error('Page navigation failed:', error));
};

export const usePageTransitionLocation: BrowserLocationHook = (options) => {
  const [path] = useBrowserLocation(options);
  return [path, navigateWithTransition];
};
