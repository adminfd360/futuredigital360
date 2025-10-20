import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/Logo.png";

const Header = () => {
  return (
    <header className="w-full max-w-[1500px] m-auto absolute left-0 right-0 z-50">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-[200px] lg:w-[297px] h-auto"
            />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
