import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Future Digital 360 | Complete Digital Solutions, Total Peace of Mind",
    template: "%s | Future Digital 360",
  },
  description:
    "Future Digital 360 delivers complete digital business solutions including VoIP communication, managed IT network services, cybersecurity, web design, and multifunction products. Serving businesses since 1986 from Scottsdale, Arizona.",
  keywords: [
    "Future Digital 360",
    "FD360",
    "business technology solutions",
    "VoIP phone systems",
    "managed IT services",
    "cybersecurity",
    "web design",
    "multifunction printers",
    "Scottsdale Arizona",
    "cloud PBX",
    "business communication",
    "IT support",
    "network security",
    "office equipment",
    "telecommunications",
    "telecom company",
    "telecommunication engineering",
    "telecommunications companies",
    "web services",
    "phone service",
    "domain",
    "fax machines",
    "xerox machine",
    "copier",
    "Professional Telephone Solutions Scottsdale",
    "Professional Telephone Solutions Phoenix",
    "VoIP Scottsdale",
    "VoIP Phoenix",
    "Lexmark Scottsdale",
    "Lexmark Phoenix",
    "Multi Function Printer Scottsdale",
    "Multi Function Printer Phoenix",
    "MFP Scottsdale",
    "MFP Phoenix",
    "Arizona 85258",
  ],
  authors: [{ name: "Future Digital 360" }],
  creator: "Future Digital 360",
  metadataBase: new URL("https://futuredigital360.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Future Digital 360",
    title: "Future Digital 360 | Complete Digital Solutions, Total Peace of Mind",
    description:
      "Future Digital 360 delivers complete digital business solutions including VoIP communication, managed IT services, cybersecurity, web design, and multifunction products since 1986.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Digital 360 | Complete Digital Solutions",
    description:
      "Complete digital business solutions: VoIP, IT services, cybersecurity, web design & more. Serving businesses since 1986.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
