"use client";

import { useEffect } from "react";
import Accordion from "@/components/Accordion";
import { sendingTopics } from "./data";
import { slugifyTopic } from "./slug";
import chevron from "../assets/down-arrow.png";

type Props = {
  activeSlug?: string | null;
};

const TAB_KEY = "sending";

const IFaxSending = ({ activeSlug }: Props) => {
  useEffect(() => {
    if (!activeSlug) return;
    const id = `ifax-${TAB_KEY}-${activeSlug}`;
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [activeSlug]);

  return (
    <Accordion
      key={activeSlug ?? "__default__"}
      items={sendingTopics.map(({ title, content }) => {
        const slug = slugifyTopic(title);
        return {
          id: `ifax-${TAB_KEY}-${slug}`,
          header: title,
          children: content,
          initialEntered: activeSlug === slug,
          contentClassName: "bg-accent-100",
        };
      })}
      chevronIcon={chevron}
    />
  );
};

export default IFaxSending;
