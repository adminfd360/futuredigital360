"use client";

import { motion } from "motion/react";
import { cx } from "@/lib/utils";

type Blob = {
  className: string;
  /** x/y drift in px, and seconds for one full loop. */
  x: number[];
  y: number[];
  duration: number;
};

// Sizes are viewport-relative, so they need a much larger vw share on phones
// to read as a wash rather than a faint dot.
const LIGHT_BLOBS: Blob[] = [
  {
    className:
      "top-[-18%] left-[-10%] w-[85vw] h-[85vw] lg:w-[45vw] lg:h-[45vw] bg-[#0084e9]/35",
    x: [0, 80, 0],
    y: [0, 60, 0],
    duration: 20,
  },
  {
    className:
      "top-[6%] right-[-20%] w-[80vw] h-[80vw] lg:w-[42vw] lg:h-[42vw] bg-[#292dc2]/28",
    x: [0, -70, 0],
    y: [0, 90, 0],
    duration: 26,
  },
  {
    className:
      "top-[38%] left-[10%] w-[75vw] h-[75vw] lg:w-[38vw] lg:h-[38vw] bg-[#00d4ff]/25",
    x: [0, 60, 0],
    y: [0, -70, 0],
    duration: 23,
  },
];

const DARK_BLOBS: Blob[] = [
  {
    className:
      "top-[-15%] left-[-5%] w-[90vw] h-[90vw] lg:w-[46vw] lg:h-[46vw] bg-[#0084e9]/40",
    x: [0, 90, 0],
    y: [0, 70, 0],
    duration: 24,
  },
  {
    className:
      "bottom-[-25%] right-[-15%] w-[85vw] h-[85vw] lg:w-[44vw] lg:h-[44vw] bg-[#292dc2]/45",
    x: [0, -80, 0],
    y: [0, -60, 0],
    duration: 28,
  },
];

/**
 * Soft drifting colour wash. Sits behind content and is purely decorative —
 * heavy blur keeps it from competing with the display type.
 */
const Aurora = ({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) => {
  const blobs = variant === "light" ? LIGHT_BLOBS : DARK_BLOBS;

  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={cx(
            "absolute rounded-full blur-[70px] lg:blur-[110px] will-change-transform",
            blob.className
          )}
          animate={{ x: blob.x, y: blob.y }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Aurora;
