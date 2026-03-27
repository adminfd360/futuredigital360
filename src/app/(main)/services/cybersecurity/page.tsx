import type { Metadata } from "next";
import { CyberSecurityServicesView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Cyber & Network Security Services",
  description:
    "Protect your business with comprehensive cybersecurity and network security solutions. Firewall management, endpoint security, WiFi protection, and data backup services from Future Digital 360.",
  keywords: [
    "cybersecurity services",
    "network security",
    "firewall management",
    "endpoint security",
    "data backup",
    "business cybersecurity",
    "WiFi security",
    "cyber threat protection",
    "antivirus solutions",
    "intrusion prevention",
  ],
  openGraph: {
    title: "Cyber & Network Security Services | Future Digital 360",
    description:
      "Comprehensive cybersecurity and network security solutions including firewall management, endpoint security, and data backup.",
  },
};

const Cybersecurity = () => {
  return <CyberSecurityServicesView />;
};

export default Cybersecurity;
