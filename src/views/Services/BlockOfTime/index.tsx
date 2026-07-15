import SmoothScroll from "./SmoothScroll";
import BotHeader from "./BotHeader";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Statement from "./Statement";
import IncludedServices from "./IncludedServices";
import Pricing from "./Pricing";
import HowItWorks from "./HowItWorks";
import PerfectFor from "./PerfectFor";
import WhyBot from "./WhyBot";
import CtaFooter from "./CtaFooter";

const TICKER = [
  "No Contracts",
  "Prepaid Hours",
  "15-Minute Billing",
  "12-Month Validity",
  "Expert IT Support",
];

/**
 * Standalone design language — deliberately not built on the site's shared
 * Section/Text primitives. Rendered outside the (main) layout so it carries
 * its own header and footer.
 */
const BlockOfTime = () => {
  return (
    // overflow-x-clip, not -hidden: `hidden` forces overflow-y to compute as
    // `auto`, which makes this a scroll container and breaks position:sticky
    // in Pricing and HowItWorks. `clip` contains the same overflow without it.
    <div className="bg-white font-[family-name:var(--font-inter)] overflow-x-clip">
      <SmoothScroll />
      <BotHeader />
      <main>
        <Hero />
        <Marquee items={TICKER} />
        <Statement />
        <IncludedServices />
        <Pricing />
        <HowItWorks />
        <PerfectFor />
        <WhyBot />
      </main>
      <CtaFooter />
    </div>
  );
};

export default BlockOfTime;
