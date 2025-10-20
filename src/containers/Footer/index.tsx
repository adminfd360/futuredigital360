"use client";
import Section from "@/components/Section";
import Image from "next/image";
import Text from "@/components/Text";
import SocialMedias from "./SocialMedias";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "./assets/logo-colored.png";
import map from "./assets/map.png";
import phone from "./assets/phone.png";
import email from "./assets/mail.png";
import customer from "./assets/customer.png";
import bgMap from "./assets/bg-map.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Support",
    url: "/support/faq",
  },
  {
    label: "Partners",
    url: "/partners",
  },
  {
    label: "Blogs",
    url: "https://blogs.futuredigital360.com/",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    label: "Communication Services",
    url: "/services/communication",
  },
  {
    label: "Manage IT Network",
    url: "/services/network",
  },
  {
    label: "Web Services",
    url: "/services/web",
  },
  {
    label: "Cyber & Network",
    url: "/services/cybersecurity",
  },
  {
    label: "Multi Function Product",
    url: "/services/multi-functional",
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className="bg-[#f9f9f9] bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage: `url(${bgMap.src})`,
      }}
    >
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="flex flex-col gap-8 col-span-1 lg:col-span-5">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="w-[200px] lg:w-[309px] h-auto"
              />
            </Link>
            <Text className="2xl:pr-[50px]">
              Future Digital 360 empowers businesses with smart tech solutions
              in communication, IT, and security. We deliver trusted results and
              foster a culture of innovation. It is our vision to build a
              culture based on traditions of innovation and creativity.
            </Text>
            <SocialMedias />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <Text
              variant="caption"
              className="pb-4 border-b-[1px] border-dotted mt-4"
            >
              Quicks Links
            </Text>
            <ul className="grid lg:grid-rows-5 grid-flow-row lg:grid-flow-col gap-4 mt-6">
              {links.map((link) => {
                const isActive = pathname === link.url;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className={`flex gap-2 items-center transition-colors duration-200 ${
                        isActive ? "text-brand-500 font-semibold" : ""
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-all duration-200 ${
                          isActive ? "text-brand-500" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className={isActive ? "text-brand-500" : ""}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <Text
              variant="caption"
              className="pb-4 border-b-[1px] border-dotted mt-4"
            >
              Get in Touch
            </Text>
            <Text className="flex items-center gap-4 mt-6">
              <Image src={map} alt="map" className="w-[22px] h-auto" />
              <span>Scottsdale, Arizona, USA</span>
            </Text>
            <Text className="flex items-center gap-4 mt-6">
              <Image
                src={customer}
                alt="customer"
                className="w-[22px] h-auto relative -top-2"
              />
              <span className="flex flex-col">
                Customer Service:
                <Link className="text-brand-green" href="8555533360">
                  855.55-FD360 (3.3360)
                </Link>
              </span>
            </Text>
            <Text className="flex items-center gap-4 mt-6">
              <Image src={phone} alt="phone" className="w-[22px] h-auto " />
              <span className="flex gap-2">
                Tech Support:
                <Link className="text-brand-green" href="4808096328">
                  480.809.6328
                </Link>
              </span>
            </Text>
            <Text className="flex items-center gap-4 mt-6">
              <Image src={email} alt="email" className="w-[22px] h-auto" />
              <Link
                className="text-brand-green max-2xl:break-all"
                href="mailto:customercare@futuredigital360.com"
              >
                customercare@futuredigital360.com
              </Link>
            </Text>
          </div>
        </div>
      </Section>
      <div className="flex items-center justify-center w-full h-[50px] bg-brand-700">
        <Text className="text-center text-white text-xs">
          © Copyright 2025 by Future Digital 360. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
