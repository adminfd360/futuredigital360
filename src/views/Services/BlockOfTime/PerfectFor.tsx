"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import Bolt from "./Bolt";
import Aurora from "./Aurora";

const audiences: string[] = [
  "Small & Mid-Sized Businesses",
  "Organizations Without Full-Time IT Staff",
  "Microsoft 365 Support Needs",
  "Special Projects & Migrations",
  "Supplemental IT Support",
];

const PerfectFor = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-[#eef4ff] px-5 lg:px-10 py-20 lg:py-32">
      <Aurora variant="light" className="-z-10 opacity-60" />
      <Reveal>
        <p className="flex items-center justify-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-black/50">
          <Bolt className="w-4 h-4 text-brand-500" />
          Perfect For
        </p>
      </Reveal>

      <ul className="mx-auto mt-10 lg:mt-14 flex max-w-[1000px] flex-wrap justify-center gap-3 lg:gap-4">
        {audiences.map((audience, index) => (
          <li key={audience}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block cursor-default rounded-full border-2 border-black px-5 py-2.5 lg:px-7 lg:py-3.5 font-black uppercase tracking-tight text-black text-[13px] lg:text-[18px] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              {audience}
            </motion.span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PerfectFor;
