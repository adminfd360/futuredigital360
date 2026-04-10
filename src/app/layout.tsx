import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futuredigital360.com"),

  title: {
    default:
      "VoIP, IT Services, Web Design & Hosting in Scottsdale | Future Digital 360",
    template: "%s | Future Digital 36",
  },

  description:
    "Future Digital 360 provides VoIP phone systems, managed IT services, cybersecurity, web design, web hosting, and digital solutions in Scottsdale & Phoenix, Arizona. Trusted since 1986.",

  keywords: [
    // Core services
    "VoIP Scottsdale",
    "VoIP Phoenix",
    "business phone systems Arizona",
    "cloud PBX solutions",

    // IT + security
    "managed IT services Scottsdale",
    "IT support Phoenix",
    "cybersecurity services Arizona",
    "network security services",

    // Web services (NEW - optimized)
    "web design Scottsdale",
    "web design Phoenix",
    "website development Arizona",
    "web hosting Scottsdale",
    "web hosting Phoenix",
    "business website services",
    "website maintenance services",

    // Supporting
    "office printers Scottsdale",
    "multifunction printers Phoenix",
    "business technology solutions",

    // Brand
    "Future Digital 360",
    "FD360",
  ],

  authors: [{ name: "Future Digital 360" }],
  creator: "Future Digital 360",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://futuredigital360.com",
    siteName: "Future Digital 360",
    title:
      "VoIP, IT Services, Web Design & Hosting in Scottsdale | Future Digital 360",
    description:
      "Business VoIP, IT support, cybersecurity, web design, and web hosting solutions in Scottsdale and Phoenix. Serving Arizona since 1986.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Future Digital 360 Web, IT & VoIP Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "VoIP, IT Services, Web Design & Hosting | Future Digital 360",
    description:
      "Complete digital solutions: VoIP, IT, cybersecurity, web design & hosting in Arizona.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}