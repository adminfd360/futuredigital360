import type { Metadata } from "next";
import PartnersView from "@/views/Partners";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Future Digital 360 partners with industry-leading technology brands including Yealink, Yeastar, Lenovo, Lexmark, Google, and Microsoft to deliver best-in-class business solutions.",
  keywords: [
    "technology partners",
    "Yealink partner",
    "Yeastar partner",
    "Lenovo partner",
    "Lexmark authorized dealer",
    "Google partner",
    "Microsoft partner",
    "business technology partnerships",
  ],
  openGraph: {
    title: "Our Partners | Future Digital 360",
    description:
      "Partnered with Yealink, Yeastar, Lenovo, Lexmark, Google, and Microsoft for best-in-class business solutions.",
  },
};

const Partners = () => {
  return <PartnersView />;
};

export default Partners;
