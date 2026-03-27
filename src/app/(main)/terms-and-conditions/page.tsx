import type { Metadata } from "next";
import TermsAndConditionsView from "@/views/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions governing the use of Future Digital 360 services, including VoIP, IT solutions, web services, and equipment agreements.",
  keywords: [
    "terms and conditions",
    "FD360 terms",
    "service agreement",
    "VoIP terms",
    "business service terms",
  ],
  openGraph: {
    title: "Terms and Conditions | Future Digital 360",
    description:
      "Terms and conditions governing the use of Future Digital 360 services.",
  },
};

const TermsAndConditions = () => {
  return <TermsAndConditionsView />;
};

export default TermsAndConditions;
