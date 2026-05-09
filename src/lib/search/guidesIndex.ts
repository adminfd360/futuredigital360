import type { SearchEntry } from "./types";

/**
 * Curated search entries for the downloadable PDF user guides on
 * `/support/guides`. Each entry links directly to the PDF asset and carries
 * rich keyword aliases so users can find a guide by model number, brand,
 * service category, or related topic.
 */
export const guidesIndex: SearchEntry[] = [
  // Yealink desk phones
  {
    id: "guide-yealink-t31p",
    title: "Yealink T31P User Guide",
    description:
      "Quick start and user guide for the Yealink T31P entry-level IP desk phone.",
    keywords: [
      "t31p",
      "yealink",
      "yealink t31p",
      "ip phone",
      "voip phone",
      "desk phone",
      "deskphone",
      "handset",
      "phone guide",
    ],
    href: "/guides/T31P.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-t31-t31p-t31g-qsg",
    title: "Yealink T31 / T31P / T31G Quick Start Guide",
    description:
      "Quick start guide for the Yealink T31, T31P, and T31G IP desk phone family.",
    keywords: [
      "t31",
      "t31p",
      "t31g",
      "yealink",
      "qsg",
      "quick start guide",
      "ip phone",
      "voip phone",
      "desk phone",
    ],
    href: "/guides/Yealink_T31_T31P_T31G_QSG.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-t53w",
    title: "Yealink T53W User Guide",
    description:
      "User guide for the Yealink T53W mid-range IP desk phone with built-in Wi-Fi.",
    keywords: [
      "t53w",
      "yealink",
      "yealink t53w",
      "ip phone",
      "voip phone",
      "wifi phone",
      "desk phone",
    ],
    href: "/guides/T53W.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-t54w",
    title: "Yealink T54W User Guide",
    description:
      "User guide for the Yealink T54W color-screen IP desk phone with built-in Wi-Fi.",
    keywords: [
      "t54w",
      "yealink",
      "yealink t54w",
      "ip phone",
      "voip phone",
      "wifi phone",
      "color screen phone",
      "desk phone",
    ],
    href: "/guides/T54W.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-w60p",
    title: "Yealink W60P DECT Phone Guide",
    description:
      "User guide for the Yealink W60P DECT cordless phone system base station and handset.",
    keywords: [
      "w60p",
      "yealink",
      "yealink w60p",
      "dect",
      "cordless phone",
      "wireless phone",
      "base station",
    ],
    href: "/guides/W60P.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-w70b",
    title: "Yealink W70B DECT Base Station Guide",
    description:
      "User guide for the Yealink W70B DECT base station for cordless VoIP phones.",
    keywords: [
      "w70b",
      "yealink",
      "yealink w70b",
      "dect",
      "base station",
      "cordless",
      "wireless",
    ],
    href: "/guides/w70b.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-yealink-w76p",
    title: "Yealink W76P DECT Phone Guide",
    description:
      "User guide for the Yealink W76P ruggedized DECT cordless phone system.",
    keywords: [
      "w76p",
      "yealink",
      "yealink w76p",
      "dect",
      "cordless phone",
      "wireless phone",
      "ruggedized",
    ],
    href: "/guides/W76P.pdf",
    category: "Guide",
    external: true,
  },

  // Yeastar PBX
  {
    id: "guide-yeastar-p-series",
    title: "Yeastar P-Series PBX Guide",
    description:
      "Configuration and user guide for the Yeastar P-Series IP-PBX phone system.",
    keywords: [
      "yeastar",
      "p-series",
      "p series",
      "pbx",
      "ip pbx",
      "phone system",
      "voip pbx",
      "office phone system",
    ],
    href: "/guides/Yeastar_P_Series.pdf",
    category: "Guide",
    external: true,
  },

  // Lorex security cameras
  {
    id: "guide-lorex-e841ca",
    title: "Lorex E841CA Camera Guide",
    description:
      "User guide for the Lorex E841CA security camera system.",
    keywords: [
      "lorex",
      "e841ca",
      "lorex e841ca",
      "camera",
      "security camera",
      "cctv",
      "surveillance",
      "ip camera",
    ],
    href: "/guides/Lorex_E841CA.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-lorex-e841ca-with-cover",
    title: "Lorex E841CA Guide (with cover)",
    description:
      "User guide for the Lorex E841CA security camera, with full cover sheet.",
    keywords: [
      "lorex",
      "e841ca",
      "lorex e841ca",
      "camera",
      "security camera",
      "cctv",
      "surveillance",
    ],
    href: "/guides/Lorex_E841CA_with_cover.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-lorex-without-cover",
    title: "Lorex Camera Guide (no cover)",
    description:
      "User guide for the Lorex security camera, alternate version without cover sheet.",
    keywords: [
      "lorex",
      "camera",
      "security camera",
      "cctv",
      "surveillance",
    ],
    href: "/guides/Lorex_without_cover.pdf",
    category: "Guide",
    external: true,
  },

  // VoIP plans / phone configurations
  {
    id: "guide-sms-mms",
    title: "SMS & MMS Guide",
    description:
      "Reference for sending and receiving SMS and MMS messages on the FD360 phone system.",
    keywords: [
      "sms",
      "mms",
      "text message",
      "messaging",
      "texting",
      "business sms",
    ],
    href: "/guides/SMS_MMS.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-wireless-phones",
    title: "Wireless Phones Guide",
    description:
      "Overview of the wireless phone options offered with FD360 communication services.",
    keywords: [
      "wireless phones",
      "wireless",
      "cordless",
      "dect",
      "phones",
    ],
    href: "/guides/Wireless_Phones.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-revised-standard",
    title: "Revised Standard Plan Guide",
    description:
      "Plan details and pricing for the FD360 Revised Standard VoIP package.",
    keywords: [
      "revised standard",
      "standard plan",
      "voip plan",
      "phone plan",
      "pricing",
    ],
    href: "/guides/Revised_Standard.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-voip-hd-standard-with-wireless",
    title: "VoIP HD Standard with Wireless Phones",
    description:
      "Plan guide for the VoIP HD Standard package bundled with wireless phones.",
    keywords: [
      "voip hd",
      "hd standard",
      "wireless phones",
      "voip plan",
      "phone plan",
      "bundle",
    ],
    href: "/guides/VOIP_HD_STANDARD_WITH_WIRELESS_PHONES.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-standard-voip-hd-standard-phones",
    title: "Standard VoIP HD with Standard Phones",
    description:
      "Plan guide for the Standard VoIP HD package with standard desk phones.",
    keywords: [
      "voip hd",
      "standard phones",
      "voip plan",
      "phone plan",
      "desk phone",
    ],
    href: "/guides/Standard_VoIP_HD_Standard_Phones.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-voip-hd-microsoft-teams",
    title: "VoIP HD with Microsoft Teams Phones",
    description:
      "Plan guide for VoIP HD service paired with Microsoft Teams certified phones.",
    keywords: [
      "voip hd",
      "microsoft teams",
      "ms teams",
      "teams phones",
      "teams certified",
      "voip plan",
    ],
    href: "/guides/VoIP_HD_Microsoft_Teams_Phones.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-ivrp-annual",
    title: "IVRP Annual Guide",
    description: "Annual IVRP (Interactive Voice Response Package) overview.",
    keywords: [
      "ivrp",
      "ivr",
      "interactive voice response",
      "annual plan",
      "voice menu",
    ],
    href: "/guides/IVRP_Annual.pdf",
    category: "Guide",
    external: true,
  },

  // Service brochures / overviews
  {
    id: "guide-local-seo",
    title: "Local SEO Guide",
    description:
      "Overview of FD360 local SEO services for getting your business found in local searches.",
    keywords: [
      "local seo",
      "seo",
      "search engine optimization",
      "google business",
      "local search",
      "marketing",
    ],
    href: "/guides/Local_SEO.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-full-services",
    title: "Full Services Brochure",
    description:
      "Brochure summarizing the full range of services offered by Future Digital 360.",
    keywords: [
      "full services",
      "all services",
      "brochure",
      "overview",
      "services brochure",
    ],
    href: "/guides/Full_Services.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-web-hosting",
    title: "Web Hosting Guide",
    description:
      "Details on FD360 web hosting plans, features, and support.",
    keywords: [
      "web hosting",
      "hosting",
      "website hosting",
      "domains",
      "ssl",
    ],
    href: "/guides/Web_Hosting.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-website-services",
    title: "Website Services Brochure",
    description:
      "Brochure for FD360 website design, development, and maintenance services.",
    keywords: [
      "website services",
      "web design",
      "web development",
      "website",
      "brochure",
    ],
    href: "/guides/WEBSITE_SERVICES.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-multi-functional-products",
    title: "Multi Functional Products Brochure",
    description:
      "Brochure for Lexmark and other multi-functional printers, copiers, and office equipment.",
    keywords: [
      "multi functional",
      "mfp",
      "printer",
      "copier",
      "scanner",
      "lexmark",
      "office equipment",
      "brochure",
    ],
    href: "/guides/MULTI_FUNCTIONAL_PRODUCTS.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-managed-network-services",
    title: "Managed Network Services Brochure",
    description:
      "Brochure for managed IT and network services, including monitoring and support.",
    keywords: [
      "managed network",
      "managed it",
      "network services",
      "it services",
      "msp",
      "brochure",
    ],
    href: "/guides/MANAGED_NETWORK_SERVICES.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-cyber-security",
    title: "Cyber Security Brochure",
    description:
      "Brochure for FD360 cyber and network security services.",
    keywords: [
      "cyber security",
      "cybersecurity",
      "security",
      "network security",
      "firewall",
      "threat protection",
      "brochure",
    ],
    href: "/guides/CYBER_SECURITY.pdf",
    category: "Guide",
    external: true,
  },
  {
    id: "guide-communication-services",
    title: "Communication Services Brochure",
    description:
      "Brochure for FD360 communication services — VoIP, cloud PBX, and unified communications.",
    keywords: [
      "communication services",
      "voip",
      "phone system",
      "cloud pbx",
      "unified communications",
      "brochure",
    ],
    href: "/guides/COMMUNICATION_SERVICES.pdf",
    category: "Guide",
    external: true,
  },
];
