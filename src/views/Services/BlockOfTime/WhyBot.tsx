"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import Bolt from "./Bolt";
import Aurora from "./Aurora";
import { LIST_ITEM, lineVariants } from "./variants";

const reasons: string[] = [
  "No Long-Term Contracts",
  "Predictable IT Spending",
  "Access to Experienced IT Professionals",
  "Reduced Downtime",
  "Flexible Support When You Need It",
];

const WhyBot = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#05060f] via-black to-[#05060f] px-5 lg:px-10 py-24 lg:py-40">
      <Aurora variant="dark" className="-z-10" />

      <Reveal>
        <p className="flex items-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-white/50">
          <Bolt className="w-4 h-4 text-brand-500" />
          Why BOT
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 font-black uppercase leading-[0.85] tracking-[-0.04em] text-white text-[clamp(3rem,11vw,11rem)]">
          Why{" "}
          <span className="inline-block bg-gradient-to-r from-[#38bdf8] via-[#0084e9] to-[#7c5cff] bg-clip-text text-transparent">
            BOT?
          </span>
        </h2>
      </Reveal>

      <ul className="mt-16 lg:mt-24">
        {reasons.map((reason, index) => (
          <motion.li
            key={reason}
            className="overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={LIST_ITEM}
          >
            <motion.div
              variants={lineVariants(index)}
              className="group flex items-baseline gap-4 lg:gap-8 border-b border-white/15 py-3 lg:py-5 transition-colors duration-300 hover:border-brand-500"
            >
              <span className="font-mono text-[11px] lg:text-[13px] font-bold text-white/30 tabular-nums shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-black uppercase leading-[1.02] tracking-[-0.035em] text-white text-[clamp(1.5rem,4.6vw,4.25rem)] transition-colors duration-300 group-hover:text-brand-500">
                {reason}
              </span>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhyBot;
