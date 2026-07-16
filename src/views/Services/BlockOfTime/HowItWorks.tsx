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
        <p className="flex items-center justify-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-black/50">
          <Bolt className="w-4 h-4 text-brand-500" />
          How It Works
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 text-center font-black uppercase leading-[0.9] tracking-[-0.03em] text-black text-[clamp(2rem,5vw,4rem)]">
          Five simple <span className="text-brand-500">steps.</span>
        </h2>
      </Reveal>

      <ol className="mx-auto mt-12 lg:mt-16 max-w-[820px]">
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
              className="group border-t border-black/15 py-6 lg:py-8 last:border-b"
            >
              <span className="block text-center font-mono text-[12px] font-bold text-brand-500 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-center font-bold leading-[1.25] tracking-tight text-black text-[17px] lg:text-[24px]">
                {step}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
