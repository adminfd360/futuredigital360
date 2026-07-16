import type { Metadata } from "next";
import { BlockOfTimeView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Block of Time (BOT)",
  description:
    "Prepaid Block of Time (BOT) managed IT services — flexible, prepaid IT support with no monthly contract. Expert help with Microsoft 365, servers, networks, cybersecurity, cloud services, and end-user support. Packages from 10 to 40 hours.",
  keywords: [
    "block of time",
    "bot",
    "prepaid it support",
    "hourly it support",
    "no contract it support",
    "managed it services",
    "microsoft 365 support",
    "help desk",
    "it consulting",
    "prepaid support hours",
  ],
  openGraph: {
    title: "Block of Time (BOT) | Future Digital 360",
    description:
      "Flexible, prepaid IT support when you need it. No monthly contract required.",
  },
};

const BlockOfTime = () => {
  return <BlockOfTimeView />;
};

export default BlockOfTime;
