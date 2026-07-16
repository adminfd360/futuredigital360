"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const COPY =
  "Our Block of Time service provides flexible, prepaid IT support for businesses needing expert assistance with Microsoft 365, servers, networks, cybersecurity, cloud services, and end-user support.";

const WORDS = COPY.split(" ");

/**
 * Scroll-linked copy: each word fades from grey to black as the block moves
 * through the viewport.
 */
const Statement = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section className="bg-gradient-to-b from-white via-[#f4f8ff] to-white px-5 lg:px-10 py-24 lg:py-40">
      <p
        ref={ref}
        className="flex flex-wrap max-w-[1200px] text-[26px] lg:text-[54px] font-bold leading-[1.25] tracking-tight"
      >
        {WORDS.map((word, index) => {
          const start = index / WORDS.length;
          const end = start + 1 / WORDS.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </section>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mr-[0.25em]">
      <motion.span style={{ opacity }} className="text-black">
        {children}
      </motion.span>
    </span>
  );
};

export default Statement;
