import type { Metadata } from "next";
import { Guides as GuidesView } from "@/views/Faq";

export const metadata: Metadata = {
  title: "PDF Guides",
  description:
    "Download user guides for Yealink phones (T31P, T53W, T54W, W60P, W76P), Lorex security cameras, Yeastar P-Series PBX, VoIP plans, and Future Digital 360 service brochures.",
  keywords: [
    "Yealink phone guides",
    "VoIP user manuals",
    "Lorex camera setup",
    "Yeastar PBX guide",
    "phone system documentation",
    "PDF user guides",
    "wireless phone setup",
    "communication services guide",
  ],
  openGraph: {
    title: "PDF Guides | Future Digital 360",
    description:
      "Download user guides for Yealink phones, Lorex cameras, Yeastar PBX, and Future Digital 360 service brochures.",
  },
};

const Guides = () => {
  return <GuidesView />;
};

export default Guides;
