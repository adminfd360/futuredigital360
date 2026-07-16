"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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

/**
 * True once mounted on a wide viewport with motion allowed. Starts false so
 * SSR and first paint always render the swipe carousel; the pinned track is a
 * progressive upgrade.
 */
const usePinnedLayout = () => {
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPinned(wide.matches && !still.matches);

    sync();
    wide.addEventListener("change", sync);
    still.addEventListener("change", sync);
    return () => {
      wide.removeEventListener("change", sync);
      still.removeEventListener("change", sync);
    };
  }, []);

  return pinned;
};

const PackageCard = ({
  pkg,
  index,
}: {
  pkg: BotPackage;
  index: number;
}) => {
  const rate = effectiveRate(pkg);
  const savings = savingsVsSmallest(pkg);
  const isBestRate = index === botPackages.length - 1;

  return (
    <article
      className={cx(
        "flex h-[46vh] max-h-[400px] min-h-[330px] w-[78vw] shrink-0 snap-center flex-col justify-between rounded-3xl p-7 lg:w-[42vw] lg:p-9",
        isBestRate
          ? "bg-gradient-to-br from-[#05060f] to-[#141a3a] text-white"
          : "border border-black/10 bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="flex items-start justify-between gap-4">
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

      <div>
        <h3
          className={cx(
            "font-black uppercase leading-none tracking-[-0.03em] text-[clamp(1.75rem,3vw,2.5rem)]",
            isBestRate ? "text-white" : "text-black"
          )}
        >
          {pkg.name}
        </h3>
        <p
          className={cx(
            "mt-2 text-[14px] font-medium lg:text-[16px]",
            isBestRate ? "text-white/60" : "text-black/50"
          )}
        >
          {formatHours(pkg.hours)}
        </p>

        <p
          className={cx(
            "mt-6 bg-gradient-to-r bg-clip-text font-black leading-none tracking-[-0.03em] text-transparent text-[clamp(2.25rem,4vw,3.5rem)] tabular-nums",
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
          "flex items-end justify-between gap-4 border-t pt-6",
          isBestRate ? "border-white/15" : "border-black/10"
        )}
      >
        <div>
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
              "mt-2 font-black tracking-tight text-[20px] lg:text-[26px] tabular-nums",
              isBestRate ? "text-white" : "text-black"
            )}
          >
            {formatRate(rate)}
          </p>
        </div>

        {savings > 0 && (
          <p
            className={cx(
              "flex items-center gap-2 pb-1 text-right text-[13px] font-bold lg:text-[15px]",
              isBestRate ? "text-white/70" : "text-black/60"
            )}
          >
            <Bolt className="w-4 h-4 shrink-0 text-brand-500" />
            {savings}% lower than {botPackages[0].name}
          </p>
        )}
      </div>
    </article>
  );
};

const SectionHeading = () => (
  <div className="px-5 lg:px-10">
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
  </div>
);

const Note = ({ className }: { className?: string }) => (
  <p
    className={cx(
      "flex items-center justify-center gap-2 px-5 text-center text-[13px] font-medium text-black/60 lg:px-10 lg:text-[15px]",
      className
    )}
  >
    <Bolt className="w-4 h-4 shrink-0 text-brand-500" />
    {BOT_PRICING_NOTE}
  </p>
);

/** Swipe carousel: mobile, and anywhere motion is reduced. */
const CarouselPricing = () => (
  <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f6f9ff] via-white to-[#f3f0ff] py-20 lg:py-32">
    <Aurora variant="light" className="-z-10 opacity-50" />
    <SectionHeading />
    <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {botPackages.map((pkg, index) => (
        <PackageCard key={pkg.name} pkg={pkg} index={index} />
      ))}
    </div>
    <Note className="mt-4" />
  </section>
);

/**
 * Pinned horizontal track. Lives in its own component so `useScroll`'s target
 * ref is always attached to a rendered element — sharing one component with
 * the carousel left the ref dangling on first render and motion threw.
 */
const PinnedPricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // How far the track must travel left for its last card to sit flush with the
  // viewport's right edge. Drives both the x transform and the section height,
  // so vertical scroll maps 1:1 to horizontal travel.
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-gradient-to-b from-[#f6f9ff] via-white to-[#f3f0ff]"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <Aurora variant="light" className="-z-10 opacity-50" />

      {/* pt clears the fixed header, which overlays the pinned viewport. */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-28 pb-12">
        <SectionHeading />

        <div ref={viewportRef} className="mt-10 w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 px-10"
          >
            {botPackages.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 px-10">
          <div className="h-[3px] w-full max-w-[240px] overflow-hidden rounded-full bg-black/10">
            <motion.div
              style={{ scaleX: progressScale }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#0084e9] to-[#7c5cff]"
            />
          </div>
          <Note className="!px-0" />
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (usePinnedLayout() ? <PinnedPricing /> : <CarouselPricing />);

export default Pricing;
