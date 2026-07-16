"use client";

import { motion, type Variants } from "motion/react";
import Bolt from "./Bolt";
import Aurora from "./Aurora";
import { EASE } from "./variants";

// Must fit one pass around the circle below (~450px of arc). Longer strings
// wrap back over themselves.
const BADGE_TEXT = "PREPAID HOURS ⚡ NO MONTHLY CONTRACT ⚡ ";

/** Rotating circular badge — the page's one purely decorative flourish. */
const RotatingBadge = () => (
  <motion.div
    aria-hidden
    animate={{ rotate: 360 }}
    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    className="w-[130px] h-[130px] lg:w-[170px] lg:h-[170px] relative shrink-0"
  >
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <path
          id="bot-badge-circle"
          d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
        />
      </defs>
      <text className="fill-black text-[13px] font-bold tracking-[0.14em]">
        <textPath href="#bot-badge-circle">{BADGE_TEXT}</textPath>
      </text>
    </svg>
  </motion.div>
);

const line: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.15 + i * 0.12, ease: EASE },
  }),
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-5 lg:px-10 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <Aurora variant="light" className="-z-10" />
      {/* Fades the wash out into the section below it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-black/50"
      >
        <Bolt className="w-4 h-4 text-brand-500" />
        Managed IT Services
      </motion.p>

      <h1 className="mt-8 lg:mt-10 font-black uppercase leading-[0.82] tracking-[-0.04em] text-black text-[clamp(3.2rem,13vw,13rem)]">
        {["Prepaid", "Block of", "Time"].map((text, i) => (
          <span key={text} className="block overflow-hidden">
            <motion.span
              custom={i}
              variants={line}
              initial="hidden"
              animate="show"
              className="block"
            >
              {text}
              {text === "Time" && (
                <>
                  {" "}
                  <span className="inline-block bg-gradient-to-r from-[#0084e9] via-[#292dc2] to-[#00c2ff] bg-clip-text text-transparent">
                    (BOT)
                  </span>
                </>
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-12 lg:mt-16 flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-[620px] text-[22px] lg:text-[34px] font-light leading-[1.3] text-black"
        >
          Professional IT support when you need it.{" "}
          <span className="font-black">No monthly contract required.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="relative flex items-center justify-center self-start lg:self-auto"
        >
          <RotatingBadge />
          <Bolt className="absolute w-7 h-7 lg:w-9 lg:h-9 text-brand-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
