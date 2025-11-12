"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

type AnimateDivProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const createSlideUpVariants = (delay: number = 0) => ({
  offscreen: {
    transform: "translateY(40px)",
    opacity: 0,
  },
  onscreen: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      type: "spring" as const,
      bounce: 0.4,
      duration: 0.8,
      delay,
    },
  },
});

const AnimateDiv = ({ children, delay = 0, className }: AnimateDivProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkInView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const threshold = windowHeight * 0.3; // 30% of viewport height
        const isVisible =
          rect.top < windowHeight - threshold && rect.bottom > threshold;

        if (isVisible) {
          setIsInView(true);
        }
      }
    };

    // Check immediately on mount
    checkInView();

    // Also check after a short delay to handle any layout shifts
    const timeoutId = setTimeout(checkInView, 100);

    // Check on scroll/resize as fallback
    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={isInView ? "onscreen" : "offscreen"}
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: false }}
      variants={createSlideUpVariants(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDiv;
