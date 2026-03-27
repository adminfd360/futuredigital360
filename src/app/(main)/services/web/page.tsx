import type { Metadata } from "next";
import { WebServicesView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Web Services",
  description:
    "Custom website design, development, redesign, cloud migration, SEO, SSL, hosting, and ongoing maintenance. Future Digital 360 builds mobile-friendly websites tailored to your business.",
  keywords: [
    "web design",
    "website development",
    "web hosting",
    "SEO services",
    "SSL certificates",
    "website redesign",
    "cloud migration",
    "web application development",
    "mobile-friendly websites",
    "website maintenance",
  ],
  openGraph: {
    title: "Web Services | Future Digital 360",
    description:
      "Custom website design, development, hosting, SEO, and maintenance. Mobile-friendly solutions tailored to your business.",
  },
};

const WebServices = () => {
  return <WebServicesView />;
};

export default WebServices;
