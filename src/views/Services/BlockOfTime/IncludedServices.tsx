"use client";

import { motion } from "motion/react";
import Bolt from "./Bolt";
import { LIST_ITEM, lineVariants } from "./variants";

const services: string[] = [
  "Help Desk & End User Support",
  "Microsoft 365 Administration",
  "Server & Active Directory Management",
  "Network & Wi-Fi Troubleshooting",
  "Firewall & VPN Support",
  "Cybersecurity Assistance",
  "Cloud Services Support",
  "IT Consulting & Project Assistance",
];

const IncludedServices = () => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#f6f9ff] px-5 lg:px-10 py-20 lg:py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-black/50"
      >
        <Bolt className="w-4 h-4 text-brand-500" />
        Included Services
      </motion.p>

      <ul className="mx-auto mt-10 lg:mt-14 max-w-[1100px]">
        {services.map((service, index) => (
          // The clip lives on the <li>, which never transforms — so the
          // viewport observer measures it correctly. The inner line inherits
          // the variant and slides up out of the clip.
          <motion.li
            key={service}
            className="overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={LIST_ITEM}
          >
            <motion.div
              variants={lineVariants(index)}
              className="group flex items-baseline justify-center gap-3 lg:gap-5 border-b border-black/10 py-3 lg:py-4"
            >
              <span className="font-mono text-[11px] lg:text-[12px] font-bold text-black/30 tabular-nums shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-center font-black uppercase leading-[1.1] tracking-[-0.03em] text-black text-[clamp(1.15rem,3vw,2.5rem)] transition-colors duration-300 group-hover:text-brand-500">
                {service}
              </span>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default IncludedServices;
