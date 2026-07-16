"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import Bolt from "./Bolt";
import Aurora from "./Aurora";
import { EASE } from "./variants";
import banner from "./assets/banner.webp";

// Must fit one pass around the circle below (~450px of arc). Longer strings
// wrap back over themselves.
const BADGE_TEXT = "PREPAID HOURS ⚡ NO MONTHLY CONTRACT ⚡ ";

/** Rotating circular badge — the page's one purely decorative flourish. */
const RotatingBadge = () => (
  <motion.div
    aria-hidden
    animate={{ rotate: 360 }}
    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    className="w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] relative shrink-0"
  >
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <path
          id="bot-badge-circle"
          d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
        />
      </defs>
      <text className="fill-white text-[13px] font-bold tracking-[0.14em]">
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
      {/* Background stack, back to front: photo, darkening scrim, colour wash,
          fade-out. The scrim is what makes the white type legible over a busy
          mid-tone photo — don't drop it without re-checking contrast. */}
      <Image
        src={banner}
        alt=""
        aria-hidden
        priority
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-40 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-black/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/60 via-black/30 to-black/70"
      />
      <Aurora variant="dark" className="-z-10 opacity-45 mix-blend-screen" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-white/70"
      >
        <Bolt className="w-4 h-4 text-brand-500" />
        Managed IT Services
      </motion.p>

      <h1 className="mt-8 lg:mt-10 text-center font-black uppercase leading-[0.9] tracking-[-0.03em] text-white text-[clamp(2.5rem,8vw,7rem)]">
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
                  <span className="inline-block bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#a78bfa] bg-clip-text text-transparent">
                    (BOT)
                  </span>
                </>
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-12 lg:mt-14 flex flex-col-reverse items-center gap-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-[560px] text-center text-[17px] lg:text-[22px] font-light leading-[1.4] text-white/85"
        >
          Professional IT support when you need it.{" "}
          <span className="font-black text-white">
            No monthly contract required.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="relative flex items-center justify-center"
        >
          <RotatingBadge />
          <Bolt className="absolute w-7 h-7 lg:w-9 lg:h-9 text-brand-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
