import type { Metadata } from "next";
import { IFax as IFaxView } from "@/views/Faq";

export const metadata: Metadata = {
  title: "IFax FAQs",
  description:
    "Step-by-step IFax guides covering account setup, team configuration, number management, navigation, sending faxes, and processing received faxes through your digital fax system.",
  keywords: [
    "iFax guide",
    "digital fax",
    "online fax setup",
    "send fax online",
    "receive fax online",
    "fax account setup",
    "iFax configuration",
    "business fax solution",
  ],
  openGraph: {
    title: "IFax FAQs | Future Digital 360",
    description:
      "Step-by-step IFax guides for account setup, navigation, sending faxes, and processing received faxes.",
  },
};

const IFax = () => {
  return <IFaxView />;
};

export default IFax;
