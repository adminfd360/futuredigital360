"use client";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { cx } from "@/lib/utils";

type CountUpProps = {
  /** The target number to count up to */
  end: number;
  /** The starting number (default: 0) */
  start?: number;
  /** Animation duration in seconds (default: 2) */
  duration?: number;
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** Whether to start animation when component mounts (default: true) */
  autoStart?: boolean;
  /** Whether to start animation when element is in viewport (default: false) */
  startOnView?: boolean;
  /** Custom className for the number display */
  className?: string;
  /** Custom styling for the number display */
  style?: React.CSSProperties;
  /** Suffix to add after the number (e.g., "+", "%", "k") */
  suffix?: string;
  /** Prefix to add before the number (e.g., "$", "#") */
  prefix?: string;
  /** Number of decimal places to show (default: 0) */
  decimals?: number;
  /** Animation easing function */
  easing?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Callback when animation starts */
  onStart?: () => void;
};

const CountUp = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  autoStart = true,
  startOnView = false,
  className,
  style,
  suffix = "",
  prefix = "",
  decimals = 0,
  easing = "easeOut",
  onComplete,
  onStart,
}: CountUpProps) => {
  const count = useMotionValue(start);
  const rounded = useTransform(() => {
    const value = count.get();
    return decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toString();
  });
  const elementRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const startAnimation = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    onStart?.();

    const controls = animate(count, end, {
      duration,
      delay,
      ease: easing,
      onComplete,
    });

    return () => controls.stop();
  };

  useEffect(() => {
    if (autoStart && !startOnView) {
      const cleanup = startAnimation();
      return cleanup;
    }
  }, [autoStart, startOnView]);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  return (
    <motion.div
      ref={elementRef}
      className={cx("inline-block", className)}
      style={style}
    >
      <motion.span>
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.span>
    </motion.div>
  );
};

export default CountUp;
