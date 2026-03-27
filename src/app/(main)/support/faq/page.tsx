import type { Metadata } from "next";
import { FrequentlyAsk } from "@/views/Faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about VoIP phone setup, voicemail configuration, Linkus mobile app, scan-to-network, Lexmark printer settings, Office 365 security, and more.",
  keywords: [
    "FAQ",
    "VoIP support",
    "voicemail setup",
    "Linkus mobile app",
    "phone system help",
    "Lexmark printer setup",
    "Office 365 security",
    "call transfer",
    "technical support FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Future Digital 360",
    description:
      "Answers to common questions about VoIP, voicemail, mobile apps, printer setup, and Office 365 security.",
  },
};

const Faq = () => {
  return <FrequentlyAsk />;
};

export default Faq;
