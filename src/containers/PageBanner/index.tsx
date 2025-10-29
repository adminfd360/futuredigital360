"use client";
import Text from "@/components/Text";
import Section from "@/components/Section";
import banner from "./assets/banner-pages.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateDiv from "@/components/AnimateDiv";

type Props = {
  title: string;
};

const PageBanner = ({ title }: Props) => {
  const pathname = usePathname();
  const segments = (pathname || "/").split("/").filter(Boolean);

  const toTitleCase = (value: string): string => {
    return value
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  return (
    <div className="relative">
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      <Section
        className="flex items-center bg-cover bg-center bg-no-repeat min-h-auto lg:min-h-[364px] text-white"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <AnimateDiv>
          <div className="w-full h-full mt-10">
            <Text className="text-white" variant="hero">
              {title}
            </Text>
            <nav className="mt-2" aria-label="Breadcrumb">
              <span>
                <Link className="text-gray-300 hover:text-sky-300" href="/">
                  Home
                </Link>
              </span>
              {segments.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");
                const isLast = index === segments.length - 1;
                const label = toTitleCase(decodeURIComponent(segment));
                return (
                  <span key={href}>
                    <span className="w-4 h-4 bg-brand-500 inline-block rounded-full mx-3 relative top-[2px] after:absolute after:w-3 after:h-3 after:bg-white after:left-[-2px] after:rounded-full after:top-0 after:bottom-0 after:m-auto"></span>
                    {isLast ? (
                      <span className="text-white font-semibold">{label}</span>
                    ) : (
                      <Link
                        className="text-gray-300 hover:text-sky-300"
                        href={href}
                      >
                        {label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>
          </div>
        </AnimateDiv>
      </Section>
    </div>
  );
};

export default PageBanner;
