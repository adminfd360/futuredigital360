import type { Metadata } from "next";
import ContactUsView from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Future Digital 360. Visit us in Scottsdale, AZ, call Customer Service at 855.55-FD360 or Tech Support at 480.809.6328, or send us an inquiry online.",
  keywords: [
    "contact Future Digital 360",
    "Scottsdale AZ tech support",
    "business technology support",
    "FD360 customer service",
    "get a free quote",
    "IT support phone number",
  ],
  openGraph: {
    title: "Contact Us | Future Digital 360",
    description:
      "Reach Future Digital 360 in Scottsdale, AZ. Customer Service: 855.55-FD360. Tech Support: 480.809.6328.",
  },
};

const ContactUs = () => {
  return <ContactUsView />;
};

export default ContactUs;
