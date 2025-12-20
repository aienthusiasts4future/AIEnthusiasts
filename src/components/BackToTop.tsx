import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop Component
 *
 * A floating button that appears when the user scrolls down the page.
 * Clicking it smoothly scrolls back to the top of the page.
 *
 * Features:
 * - Appears after scrolling 500px down
 * - Respects prefers-reduced-motion for accessibility
 * - Fixed positioning at bottom-right corner
 * - Smooth fade-in/out transition
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Check for prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-accent hover:bg-accent-hover text-white p-3 sm:p-4 rounded-full shadow-cyan-glow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30 motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}
