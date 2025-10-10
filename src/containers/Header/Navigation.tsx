"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type Navigation = {
  label: string;
  href: string;
  hasSubMenu: boolean;
  subMenu?: Navigation[];
};

const navigation: Navigation[] = [
  {
    label: "Home",
    href: "/",
    hasSubMenu: false,
  },
  {
    label: "Services",
    href: "",
    hasSubMenu: true,
    subMenu: [
      {
        label: "Communication Services",
        href: "/services/communication",
        hasSubMenu: false,
      },
      {
        label: "Manage IT Network Services",
        href: "/services/network",
        hasSubMenu: false,
      },

      {
        label: "Web Services",
        href: "/services/web",
        hasSubMenu: false,
      },

      {
        label: "Cyber & Network Security Services",
        href: "/services/cybersecurity",
        hasSubMenu: false,
      },

      {
        label: "Multi Function Product Services",
        href: "/services/multi-functional",
        hasSubMenu: false,
      },
    ],
  },
  {
    label: "Support",
    href: "",
    hasSubMenu: true,
    subMenu: [
      {
        label: "Frequently Asked Questions",
        href: "/support/faq",
        hasSubMenu: false,
      },
      {
        label: "IFax FAQs",
        href: "/support/ifax",
        hasSubMenu: false,
      },
      {
        label: "PDF Guides",
        href: "/support/guides",
        hasSubMenu: false,
      },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    hasSubMenu: false,
  },
  {
    label: "About Us",
    href: "/about-us",
    hasSubMenu: false,
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    hasSubMenu: false,
  },
];

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (item: Navigation) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href !== "/" && item.href !== "" && pathname.startsWith(item.href))
      return true;
    if (item.hasSubMenu && item.subMenu) {
      return item.subMenu.some((subItem) => pathname === subItem.href);
    }
    return false;
  };

  return (
    <nav>
      <ul className="flex items-center gap-8 text-white uppercase font-semibold">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={item.hasSubMenu ? "relative" : ""}
            onMouseEnter={() => item.hasSubMenu && setOpenDropdown(item.label)}
            onMouseLeave={() => item.hasSubMenu && setOpenDropdown(null)}
          >
            <Link
              className={
                item.hasSubMenu
                  ? `flex items-center gap-1 hover:text-sky-200 transition-colors duration-500 ${
                      isActive(item) ? "text-sky-200" : ""
                    }`
                  : `hover:text-sky-300 transition-colors duration-500 ${
                      isActive(item) ? "text-sky-200" : ""
                    }`
              }
              href={item.href}
            >
              {item.label}
              {item.hasSubMenu && (
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.hasSubMenu && item.subMenu && (
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                  openDropdown === item.label
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`block px-4 py-3 text-black hover:bg-gray-50 transition-colors duration-150 text-sm font-medium normal-case hover:text-brand-500 ${
                        pathname === subItem.href ? "text-brand-500" : ""
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
