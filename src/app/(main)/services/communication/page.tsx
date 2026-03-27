import type { Metadata } from "next";
import { CommunicationServicesView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Communication Services",
  description:
    "Enterprise-class VoIP phone systems with Cloud PBX and On-Premise PBX solutions. Explore Yealink IP phones, conference phones, and affordable business phone plans starting at $19.95/month.",
  keywords: [
    "VoIP phone systems",
    "cloud PBX",
    "on-premise PBX",
    "business phone plans",
    "Yealink phones",
    "SIP trunking",
    "conference phones",
    "business communication",
    "IP phone systems",
    "enterprise phone solutions",
  ],
  openGraph: {
    title: "Communication Services | Future Digital 360",
    description:
      "Enterprise-class Cloud PBX and On-Premise PBX solutions with Yealink IP phones. Plans from $19.95/month per user.",
  },
};

const Communication = () => {
  return <CommunicationServicesView />;
};

export default Communication;
