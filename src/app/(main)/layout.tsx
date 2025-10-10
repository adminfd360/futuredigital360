import { PropsWithChildren } from "react";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
