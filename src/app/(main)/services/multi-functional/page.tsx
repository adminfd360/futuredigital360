import type { Metadata } from "next";
import { MultiFunctionalProductsView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Multi Function Product Services",
  description:
    "Multifunction printers for small, medium, and enterprise businesses. Single low-cost solutions for printing, copying, faxing, and scanning with Lexmark partnership. Covers 2,500 to 10,000+ pages per month.",
  keywords: [
    "multifunction printers",
    "office printers",
    "Lexmark printers",
    "business printing solutions",
    "copier services",
    "scanner solutions",
    "managed print services",
    "office equipment",
    "enterprise printers",
    "MFP solutions",
  ],
  openGraph: {
    title: "Multi Function Product Services | Future Digital 360",
    description:
      "Multifunction printers for all business sizes. Printing, copying, faxing, and scanning with Lexmark partnership.",
  },
};

const MultiFunctionalProducts = () => {
  return <MultiFunctionalProductsView />;
};

export default MultiFunctionalProducts;
