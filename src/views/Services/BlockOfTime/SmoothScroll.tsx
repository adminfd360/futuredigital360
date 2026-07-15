"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial scrolling for this page only. Lenis drives real scrollTop rather
 * than transforming a wrapper, so `useScroll` and IntersectionObserver-based
 * reveals keep working untouched.
 */
const SmoothScroll = () => {
  useEffect(() => {
    // Honour reduced-motion: hijacking scroll is exactly what it asks us not
    // to do.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
