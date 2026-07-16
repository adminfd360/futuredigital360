import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

/**
 * Standalone layout: no site Header/Footer. Pages in this group own their
 * full chrome so they can carry a different design language from the rest of
 * the site. Inter is scoped here rather than added to the root layout.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={inter.variable}>{children}</div>;
};

export default Layout;
