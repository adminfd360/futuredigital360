import type { Metadata } from "next";
import { TemplatesView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Website Templates",
  description:
    "Browse our collection of professionally designed website templates for restaurants, medical, automotive, fitness, insurance, and more. Find the perfect design for your brand.",
  keywords: [
    "website templates",
    "web design templates",
    "business website templates",
    "restaurant website",
    "medical website",
    "automotive website",
    "professional web design",
    "custom templates",
  ],
  openGraph: {
    title: "Website Templates | Future Digital 360",
    description:
      "Professionally designed website templates for various industries. Find the perfect design for your brand.",
  },
};

const Templates = () => {
  return <TemplatesView />;
};

export default Templates;
