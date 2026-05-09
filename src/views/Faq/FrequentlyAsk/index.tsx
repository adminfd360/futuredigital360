"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Accordion from "@/components/Accordion";
import AnimateDiv from "@/components/AnimateDiv";
import SearchBar from "@/components/SearchBar";
import { frequentlyAskData } from "./data";
import banner from "../assets/faq-banner.webp";
import chevron from "../assets/down-arrow.png";
import faqMan from "../assets/faq-man.webp";

const FrequentlyAsk = () => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Track URL hash so deep links like /support/faq#voicemail-greeting open and
  // scroll to that specific item (e.g. when arriving from a search result).
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.slice(1);
      setActiveSlug(hash || null);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useEffect(() => {
    if (!activeSlug) return;
    // Defer until after the Accordion remount so the target item is in the DOM
    // with its expanded state already applied.
    const timer = setTimeout(() => {
      const target = document.getElementById(`faq-${activeSlug}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
    return () => clearTimeout(timer);
  }, [activeSlug]);

  return (
    <>
      <PageBanner title="Frequently Ask Questions" bannerImg={banner.src} />
      <Section>
        <AnimateDiv>
          <SearchBar placeholder="Search FAQs, services, guides…" />
          <p className="text-center text-sm text-text-DEFAULT mt-3">
            Looking for something specific? Search across the entire site.
          </p>
        </AnimateDiv>

        <div className="mt-12 max-w-[1200px] mx-auto">
          {/* <div className="col-span-1 lg:col-span-3">
            <Image
              className="mt-12 sticky top-20 max-sm:m-auto max-sm:w-auto max-sm:h-[150px] max-sm:object-contain"
              src={faqMan}
              alt="Frequently Ask Questions"
            />
          </div> */}
          <div className="">
            <AnimateDiv>
              <Text className="text-center" variant="title">
                Most Popular Questions
              </Text>
            </AnimateDiv>
            <Accordion
              key={activeSlug ?? "__default__"}
              items={frequentlyAskData.map(
                ({ slug, question, answer }, index) => ({
                  id: `faq-${slug}`,
                  header: question,
                  children: answer,
                  initialEntered: activeSlug
                    ? activeSlug === slug
                    : index === 0,
                  contentClassName: "bg-accent-100",
                }),
              )}
              chevronIcon={chevron}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default FrequentlyAsk;
