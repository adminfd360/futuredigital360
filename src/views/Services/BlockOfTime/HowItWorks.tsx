"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import Bolt from "./Bolt";

const steps: string[] = [
  "Purchase a prepaid block of support hours",
  "Use your hours as needed throughout the year",
  "Time billed in 15-minute increments",
  "Detailed activity tracking available",
  "Hours valid for 12 months from purchase date",
];

const HowItWorks = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#eaf2ff] via-[#f3f0ff] to-[#e8fbff] px-5 lg:px-10 py-20 lg:py-32">
      <Reveal>
        <p className="flex items-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-black/50">
          <Bolt className="w-4 h-4 text-brand-500" />
          How It Works
        </p>
      </Reveal>

      <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        {/* Sticky oversized heading holds while the steps scroll past it. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={0.1}>
            <h2 className="font-black uppercase leading-[0.85] tracking-[-0.04em] text-black text-[clamp(2.75rem,8vw,7rem)]">
              Five
              <br />
              simple
              <br />
              <span className="text-brand-500">steps.</span>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-12 lg:mt-0">
          {steps.map((step, index) => (
            <li key={step}>
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-t border-black/15 py-8 lg:py-10 last:border-b"
              >
                <span className="block font-mono text-[12px] font-bold text-brand-500 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-bold leading-[1.15] tracking-tight text-black text-[22px] lg:text-[34px]">
                  {step}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
