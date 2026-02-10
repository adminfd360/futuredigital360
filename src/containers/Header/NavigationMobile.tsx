import { navigation, NavigationType } from "./navigation";

import Link from "next/link";
import { cx } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavigationMobile = ({ open }: { open: boolean }) => {
  const pathname = usePathname();

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
    <div
      className={cx(
        "px-4 py-6 z-50 w-full h-[calc(100dvh-65px)] fixed top-0 left-0 bg-white transition all duration-300 translate-y-[1999px] lg:hidden overflow-y-auto",
        open && "translate-y-[65px]"
      )}
    >
      <ul className="flex flex-col gap-4 bg-sky-100 rounded-lg p-4">
        {navigation.map(({ label, href, hasSubMenu, subMenu }, index) => (
          <li key={index}>
            {hasSubMenu ? (
              <span
                className={cx(
                  "transition-colors duration-200 font-semibold",
                  isActive({ label, href, hasSubMenu, subMenu }) &&
                    "text-brand-green font-bold"
                )}
              >
                {label}
              </span>
            ) : href.startsWith("http") ? (
              <a
                className={cx(
                  "transition-colors duration-200",
                  isActive({ label, href, hasSubMenu, subMenu }) &&
                    "text-brand-green font-bold"
                )}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <Link
                className={cx(
                  "transition-colors duration-200",
                  isActive({ label, href, hasSubMenu, subMenu }) &&
                    "text-brand-green font-bold"
                )}
                href={href}
              >
                {label}
              </Link>
            )}
            {hasSubMenu && (
              <ul className="flex flex-col gap-4 mt-3 bg-sky-50 rounded-lg p-4">
                {subMenu?.map(({ label, href }, index) => (
                  <li key={index}>
                    <Link
                      className={cx(
                        "transition-colors duration-200",
                        pathname === href && "text-brand-green font-bold"
                      )}
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMobile;
