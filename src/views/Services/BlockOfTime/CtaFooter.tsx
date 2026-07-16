"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Bolt from "./Bolt";
import Aurora from "./Aurora";
import logo from "@/containers/Header/assets/Logo.png";

const CtaFooter = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#05060f] to-black px-5 lg:px-10 pb-14 pt-8 lg:pt-16">
      <Aurora variant="dark" className="-z-10 opacity-70" />

      <Reveal>
        <Link href="/contact-us" className="group block text-center">
          <span className="block bg-gradient-to-r from-white via-white to-white bg-clip-text font-black uppercase leading-[0.9] tracking-[-0.03em] text-transparent text-[clamp(2.75rem,9vw,8rem)] transition-[background-image] duration-500 group-hover:from-[#38bdf8] group-hover:via-[#0084e9] group-hover:to-[#7c5cff]">
            Let&apos;s talk
          </span>
          <span className="mt-6 inline-flex items-center gap-3 text-[13px] lg:text-[16px] font-bold uppercase tracking-tight text-white">
            <Bolt className="w-5 h-5 text-brand-500" />
            Get started
            <motion.span
              aria-hidden
              className="inline-block h-[2px] w-12 bg-brand-500 origin-left"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: 1.6 }}
            />
          </span>
        </Link>
      </Reveal>

      <div className="mt-20 flex flex-col-reverse gap-8 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-5">
          {/* Full-colour logo on a white chip — inverting it flattens the
              badge detail into a silhouette. */}
          <span className="inline-flex rounded-md px-4 py-2.5">
            <Image
              src={logo}
              alt="Future Digital 360"
              className="w-[190px] h-auto"
            />
          </span>
          <p className="text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} Future Digital 360
          </p>
        </div>

        <p className="text-[13px] lg:text-[15px] font-bold uppercase tracking-tight text-white/60">
          Professional IT Support <span className="text-brand-500">&bull;</span>{" "}
          Flexible Pricing <span className="text-brand-500">&bull;</span> No
          Monthly Commitment
        </p>
      </div>
    </footer>
  );
};

export default CtaFooter;
