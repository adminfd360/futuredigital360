"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cx } from "../../lib/utils";
import SearchBar from "@/components/SearchBar";
import NavigationMobile from "./NavigationMobile";
import { navigation, NavigationType } from "./navigationData";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchPanelRef = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close the search panel on Escape or when clicking outside it.
  useEffect(() => {
    if (!searchOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        searchPanelRef.current?.contains(target) ||
        searchButtonRef.current?.contains(target)
      ) {
        return;
      }
      setSearchOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [searchOpen]);

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
    setSearchOpen(false);
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
    <nav className="relative">
      <ul className="items-center gap-4 xl:gap-6 text-white uppercase font-semibold hidden lg:flex">
        {navigation.map((item) => (
          <li
            key={item.label}
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
            ) : item.href.startsWith("http") ? (
              <a
                className={`hover:text-sky-300 transition-colors duration-500 ${
                  isActive(item) ? "text-sky-200" : ""
                }`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                {item.label}
              </a>
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

        <li>
          <button
            ref={searchButtonRef}
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            aria-controls="header-search-panel"
            className={cx(
              "flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 cursor-pointer hover:text-sky-300",
              searchOpen && "text-sky-200 bg-white/10"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.85-5.4a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
              />
            </svg>
          </button>
        </li>
      </ul>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            id="header-search-panel"
            ref={searchPanelRef}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden lg:block absolute top-full right-0 mt-3 w-[420px] max-w-[calc(100vw-2rem)] z-40"
            role="dialog"
            aria-label="Site search"
          >
            <SearchBar autoFocus placeholder="Search FAQs, services, guides…" />
          </motion.div>
        )}
      </AnimatePresence>
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
