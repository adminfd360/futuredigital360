"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "../../lib/utils";
import NavigationMobile from "./NavigationMobile";
import { NavigationType } from "./navigation";
import { navigation } from "./navigation";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Apply styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Store scroll position for restoration
      document.body.setAttribute("data-scroll-y", scrollY.toString());
    } else {
      // Get stored scroll position
      const scrollY = document.body.getAttribute("data-scroll-y");

      // Restore body styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute("data-scroll-y");
      }
    }

    return () => {
      // Cleanup function to ensure body styles are reset
      const scrollY = document.body.getAttribute("data-scroll-y");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute("data-scroll-y");
      }
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const isActive = (item: NavigationType) => {
    if (item.href === "/" && pathname === "/") return true;
    if (
      item.href !== "/" &&
      item.href !== "" &&
      item.href !== "#" &&
      pathname.startsWith(item.href)
    )
      return true;
    if (item.hasSubMenu && item.subMenu) {
      return item.subMenu.some((subItem) => pathname === subItem.href);
    }
    return false;
  };

  return (
    <nav>
      <ul className="items-center gap-4 xl:gap-6 text-white uppercase font-semibold hidden lg:flex">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={item.hasSubMenu ? "relative" : ""}
            onMouseEnter={() => item.hasSubMenu && setOpenDropdown(item.label)}
            onMouseLeave={() => item.hasSubMenu && setOpenDropdown(null)}
          >
            {item.hasSubMenu ? (
              <button
                className={`uppercase flex items-center gap-1 hover:text-sky-200 transition-colors duration-500 ${
                  isActive(item) ? "text-sky-200" : ""
                }`}
                type="button"
              >
                {item.label}
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
              </button>
            ) : (
              <Link
                className={`hover:text-sky-300 transition-colors duration-500 ${
                  isActive(item) ? "text-sky-200" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            )}

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
      <div className="lg:hidden">
        <NavigationMobile open={open} />
      </div>
      <div
        className="flex lg:hidden items-center justify-center w-[35px] h-[35px] relative cursor-pointer"
        onClick={handleMenuClick}
      >
        <div
          className={cx(
            "absolute h-[2px] w-full top-0 bottom-0 left-0 m-auto transition-all duration-300 -translate-y-2.5 bg-white",
            open &&
              "[transform:translatex(3.5px)_rotate(-135deg)] w-[28px] -bottom-[20px]"
          )}
        ></div>
        <div
          className={cx(
            "absolute h-[2px] w-full top-0 bottom-0 left-0 m-auto transition-all duration-300 bg-white",
            open && "scale-0"
          )}
        ></div>
        <div
          className={cx(
            "absolute h-[2px] w-full top-0 bottom-0 left-0 m-auto transition-all duration-300 translate-y-2.5 bg-white",
            open &&
              "[transform:translatex(3.5px)_rotate(135deg)] w-[28px] bottom-[20px]"
          )}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;
