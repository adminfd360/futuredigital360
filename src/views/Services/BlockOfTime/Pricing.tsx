"use client";

import { motion } from "motion/react";
import Bolt from "./Bolt";
import Aurora from "./Aurora";
import { cx } from "@/lib/utils";
import {
  botPackages,
  BOT_PRICING_NOTE,
  effectiveRate,
  formatHours,
  formatPrice,
  formatRate,
  savingsVsSmallest,
  type BotPackage,
} from "../botPackages";

const PackageCard = ({ pkg, index }: { pkg: BotPackage; index: number }) => {
  const rate = effectiveRate(pkg);
  const savings = savingsVsSmallest(pkg);
  const isBestRate = index === botPackages.length - 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cx(
        // Top-aligned (not justify-between): keeps name/price/rate at the same
        // vertical offset across every card even though BOT 10 has no savings
        // line. Spare height pools at the bottom of the shorter card.
        "flex h-full flex-col rounded-3xl p-6 lg:p-7",
        isBestRate
          ? "bg-gradient-to-br from-[#05060f] to-[#141a3a] text-white"
          : "border border-black/10 bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cx(
            "font-mono text-[12px] font-bold tabular-nums",
            isBestRate ? "text-white/40" : "text-black/30"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {isBestRate && (
          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Lowest rate
          </span>
        )}
      </div>

      <div className="mt-6">
        <h3
          className={cx(
            "font-black uppercase leading-none tracking-[-0.03em] text-[26px] lg:text-[30px]",
            isBestRate ? "text-white" : "text-black"
          )}
        >
          {pkg.name}
        </h3>
        <p
          className={cx(
            "mt-2 text-[13px] font-medium lg:text-[14px]",
            isBestRate ? "text-white/60" : "text-black/50"
          )}
        >
          {formatHours(pkg.hours)}
        </p>

        <p
          className={cx(
            "mt-5 bg-gradient-to-r bg-clip-text font-black leading-none tracking-[-0.03em] text-transparent text-[32px] lg:text-[40px] tabular-nums",
            isBestRate
              ? "from-[#38bdf8] via-[#0084e9] to-[#7c5cff]"
              : "from-[#0084e9] via-[#292dc2] to-[#00c2ff]"
          )}
        >
          {formatPrice(pkg.price)}
        </p>
      </div>

      <div
        className={cx(
          "mt-6 border-t pt-5",
          isBestRate ? "border-white/15" : "border-black/10"
        )}
      >
        <p
          className={cx(
            "text-[10px] font-bold uppercase tracking-[0.2em]",
            isBestRate ? "text-white/40" : "text-black/40"
          )}
        >
          Effective rate
        </p>
        <p
          className={cx(
            "mt-1.5 font-black tracking-tight text-[22px] lg:text-[26px] tabular-nums",
            isBestRate ? "text-white" : "text-black"
          )}
        >
          {formatRate(rate)}
        </p>

        {savings > 0 && (
          <p
            className={cx(
              "mt-3 flex items-center gap-2 text-[12px] font-bold lg:text-[13px]",
              isBestRate ? "text-white/70" : "text-black/60"
            )}
          >
            <Bolt className="w-4 h-4 shrink-0 text-brand-500" />
            {savings}% lower than {botPackages[0].name}
          </p>
        )}
      </div>
    </motion.article>
  );
};

const Pricing = () => (
  <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f6f9ff] via-white to-[#f3f0ff] px-5 py-20 lg:px-10 lg:py-32">
    <Aurora variant="light" className="-z-10 opacity-50" />

    <p className="flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-black/50 lg:text-[14px]">
      <Bolt className="w-4 h-4 text-brand-500" />
      Packages
    </p>
    <h2 className="mt-5 text-center font-black uppercase leading-[0.9] tracking-[-0.03em] text-black text-[clamp(1.75rem,4vw,3.25rem)]">
      Block of time{" "}
      <span className="inline-block bg-gradient-to-r from-[#0084e9] via-[#292dc2] to-[#00c2ff] bg-clip-text text-transparent">
        packages
      </span>
    </h2>

    <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
      {botPackages.map((pkg, index) => (
        <PackageCard key={pkg.name} pkg={pkg} index={index} />
      ))}
    </div>

    <p className="mt-10 flex items-center justify-center gap-2 text-center text-[13px] font-medium text-black/60 lg:text-[15px]">
      <Bolt className="w-4 h-4 shrink-0 text-brand-500" />
      {BOT_PRICING_NOTE}
    </p>
  </section>
);

export default Pricing;
