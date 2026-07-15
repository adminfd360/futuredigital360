"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { cx } from "@/lib/utils";
import logo from "@/containers/Footer/assets/logo-colored.png";
import Bolt from "./Bolt";

/**
 * Minimal standalone header for this page — logo left, single action right.
 * Hides on scroll down, returns on scroll up.
 */
const BotHeader = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 200);
    setScrolled(y > 40);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled && "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        <Link href="/" aria-label="Future Digital 360 home">
          <Image
            src={logo}
            alt="Future Digital 360"
            priority
            className="w-[165px] lg:w-[265px] h-auto"
          />
        </Link>

        <Link
          href="/contact-us"
          className="group flex items-center gap-2 text-black font-bold text-[13px] lg:text-[15px] uppercase tracking-tight"
        >
          <Bolt className="w-4 h-4 text-brand-500 transition-transform duration-300 group-hover:scale-125" />
          <span className="relative">
            Contact Us
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
      </div>
    </motion.header>
  );
};

export default BotHeader;
