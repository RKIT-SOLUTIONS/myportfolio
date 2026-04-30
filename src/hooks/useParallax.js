import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for parallax scrolling effect.
 * Returns the current scroll Y position, throttled for performance.
 */
export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollY;
}
