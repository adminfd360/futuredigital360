export type NavigationType = {
  label: string;
  href: string;
  hasSubMenu: boolean;
  subMenu?: NavigationType[];
};

export const navigation: NavigationType[] = [
  {
    label: "Home",
    href: "/",
    hasSubMenu: false,
  },
  {
    label: "Services",
    href: "#",
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
    href: "#",
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
    href: "#",
    hasSubMenu: true,
    subMenu: [
      {
        label: "Company Overview",
        href: "/about-us/company-overview",
        hasSubMenu: false,
      },
      {
        label: "Meet Our Leders",
        href: "/about-us/meet-out-leaders",
        hasSubMenu: false,
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    hasSubMenu: false,
  },
];
