import type { Metadata } from "next";
import HomeView from "@/views/Home";

export const metadata: Metadata = {
  title: "Complete Digital Solutions, Total Peace of Mind",
  description:
    "Future Digital 360 offers centralized business solutions for telephone, email, web, security, IT, and office equipment. A single point of contact for all your digital needs since 1986.",
  keywords: [
    "digital business solutions",
    "VoIP phone systems",
    "managed IT services",
    "cybersecurity solutions",
    "web development",
    "office equipment",
    "Future Digital 360",
    "Scottsdale AZ",
    "cloud PBX",
    "business technology",
  ],
  openGraph: {
    title: "Future Digital 360 | Complete Digital Solutions, Total Peace of Mind",
    description:
      "Centralized business solutions for telephone, email, web, security, IT, and office equipment since 1986.",
  },
};

const Home = () => {
  return <HomeView />;
};

export default Home;
