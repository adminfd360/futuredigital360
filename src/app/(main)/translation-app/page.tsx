import type { Metadata } from "next";
import TranslationAppView from "@/views/TranslationApp";

export const metadata: Metadata = {
  title: "Lexmark Translation App",
  description:
    "Interactive demo of the Lexmark Translation App for scanning and printing documents in different languages. Step-by-step walkthrough of the translation workflow on Lexmark printers.",
  keywords: [
    "Lexmark Translation App",
    "document translation",
    "Lexmark printer app",
    "scan and translate",
    "multilingual printing",
    "Lexmark demo",
  ],
  openGraph: {
    title: "Lexmark Translation App | Future Digital 360",
    description:
      "Interactive demo of the Lexmark Translation App for scanning and printing documents in different languages.",
  },
};

const TranslationApp = () => {
  return <TranslationAppView />;
};

export default TranslationApp;
