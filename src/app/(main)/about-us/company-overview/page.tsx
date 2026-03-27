import type { Metadata } from "next";
import AboutUsView from "@/views/About/CompanyOverview";

export const metadata: Metadata = {
  title: "Company Overview",
  description:
    "Future Digital 360 has been in the technology business since 1986. A veteran-owned company headquartered in Scottsdale, Arizona, providing communication, IT, cybersecurity, web, and office equipment solutions.",
  keywords: [
    "about Future Digital 360",
    "company history",
    "veteran-owned business",
    "Scottsdale technology company",
    "FD360 company overview",
    "office technology since 1986",
    "authorized Lexmark dealer",
    "business technology provider",
  ],
  openGraph: {
    title: "Company Overview | Future Digital 360",
    description:
      "Veteran-owned technology company since 1986. Providing communication, IT, cybersecurity, web, and office equipment solutions from Scottsdale, AZ.",
  },
};

const CompanyOverview = () => {
  return <AboutUsView />;
};

export default CompanyOverview;
