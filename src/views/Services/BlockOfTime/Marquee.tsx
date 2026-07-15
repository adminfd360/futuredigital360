"use client";

import { motion } from "motion/react";
import Bolt from "./Bolt";
import { cx } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  /** Seconds for one full pass. Larger = slower. */
  duration?: number;
  dark?: boolean;
};

const Marquee = ({ items, duration = 28, dark = false }: MarqueeProps) => {
  // Two identical tracks sliding -50% gives a seamless loop.
  const track = [...items, ...items];

  return (
    <div
      className={cx(
        "w-full overflow-hidden border-y py-5 lg:py-7",
        dark
          ? "border-white/15 bg-black"
          : "border-black/10 bg-gradient-to-r from-[#eef5ff] via-white to-[#f0eaff]"
      )}
    >
      <motion.div
        className="flex w-max items-center gap-8 lg:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, index) => (
          <div key={index} className="flex items-center gap-8 lg:gap-12">
            <span
              className={cx(
                "whitespace-nowrap font-black uppercase tracking-tight text-[22px] lg:text-[38px]",
                dark ? "text-white" : "text-black"
              )}
            >
              {item}
            </span>
            <Bolt className="w-5 h-5 lg:w-7 lg:h-7 shrink-0 text-brand-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
