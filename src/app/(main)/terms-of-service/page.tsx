import type { Metadata } from "next";
import TermsOfServiceView from "@/views/TermsOfService";

export const metadata: Metadata = {
  title: "Text Messaging (SMS/MMS) Terms of Service",
  description:
    "Terms of Service for SMS/MMS text messaging features provided through FD360's VoIP system powered by Bandwidth and Yeastar, including A2P 10DLC compliance, consent requirements, and billing.",
  keywords: [
    "SMS terms of service",
    "MMS terms",
    "text messaging policy",
    "A2P 10DLC compliance",
    "VoIP messaging terms",
    "Bandwidth carrier",
    "Yeastar messaging",
  ],
  openGraph: {
    title: "SMS/MMS Terms of Service | Future Digital 360",
    description:
      "Terms of Service for SMS/MMS messaging through FD360's VoIP system powered by Bandwidth and Yeastar.",
  },
};

const TermsOfService = () => {
  return <TermsOfServiceView />;
};

export default TermsOfService;
