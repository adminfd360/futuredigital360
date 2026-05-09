import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import Section from "@/components/Section";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for doesn't exist. Search Future Digital 360 for FAQs, services, and support.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/support/faq", label: "FAQs" },
  { href: "/support/guides", label: "Guides" },
  { href: "/contact-us", label: "Contact Us" },
];

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <Section className="bg-gradient-to-r from-brand-500 to-brand-600 min-h-[70vh] flex items-center">
          <div className="max-w-[720px] mx-auto text-center pt-16">
            <p className="font-extrabold text-[120px] sm:text-[160px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100">
              404
            </p>

            <h1 className="font-bold text-[28px] sm:text-[36px] text-white mt-2">
              We couldn&apos;t find that page
            </h1>

            <p className="mt-4 text-white leading-relaxed">
              The link may be broken or the page may have moved. Try searching
              for what you need below, or jump to one of the popular sections.
            </p>

            <div className="mt-8">
              <SearchBar placeholder="Search FAQs, services, guides…" />
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-text-DEFAULT transition-all duration-200 hover:border-brand-500 hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
