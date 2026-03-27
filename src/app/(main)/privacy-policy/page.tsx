import type { Metadata } from "next";
import PrivacyPolicyView from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Acceptable Use & Privacy Policy",
  description:
    "Read the Future Digital 360 Acceptable Use and Privacy Policy covering VoIP services, SMS/MMS messaging, data handling practices, security requirements, and customer responsibilities.",
  keywords: [
    "privacy policy",
    "acceptable use policy",
    "FD360 privacy",
    "VoIP privacy policy",
    "SMS terms",
    "data security policy",
    "customer data protection",
  ],
  openGraph: {
    title: "Acceptable Use & Privacy Policy | Future Digital 360",
    description:
      "FD360 Acceptable Use and Privacy Policy for VoIP, SMS/MMS, and data services.",
  },
};

const PrivacyPolicy = () => {
  return <PrivacyPolicyView />;
};

export default PrivacyPolicy;
