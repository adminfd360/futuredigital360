import type { Metadata } from "next";
import MeetOurLeadersView from "@/views/About/MeetOurLeaders";

export const metadata: Metadata = {
  title: "Meet Our Leaders",
  description:
    "Meet the Future Digital 360 team — experienced professionals in VoIP engineering, IT networking, cybersecurity, web development, digital marketing, and customer service led by CEO Jim Sauerhoefer, a USAF veteran.",
  keywords: [
    "FD360 team",
    "Future Digital 360 leadership",
    "IT professionals",
    "VoIP engineers",
    "web development team",
    "veteran-owned business team",
    "technology experts",
  ],
  openGraph: {
    title: "Meet Our Leaders | Future Digital 360",
    description:
      "Meet the FD360 team of IT, VoIP, web development, cybersecurity, and digital marketing professionals.",
  },
};

const MeetOurLeaders = () => {
  return <MeetOurLeadersView />;
};

export default MeetOurLeaders;
