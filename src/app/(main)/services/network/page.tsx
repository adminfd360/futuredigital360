import type { Metadata } from "next";
import { ManageITView } from "@/views/Services";

export const metadata: Metadata = {
  title: "Managed IT Network Services",
  description:
    "24/7 proactive network monitoring, remote remediation, endpoint security, email security, backup & disaster recovery, and lifecycle management. Fully managed IT services from Future Digital 360.",
  keywords: [
    "managed IT services",
    "network monitoring",
    "IT support",
    "remote remediation",
    "endpoint security",
    "email security",
    "disaster recovery",
    "data backup",
    "lifecycle management",
    "managed network services",
  ],
  openGraph: {
    title: "Managed IT Network Services | Future Digital 360",
    description:
      "24/7 proactive network monitoring, endpoint security, backup & disaster recovery, and fully managed IT services.",
  },
};

const Networks = () => {
  return <ManageITView />;
};

export default Networks;
