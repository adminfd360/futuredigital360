"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import infographic from "./assets/banner-infographic.png";
import whiteBanner from "./assets/white-bg.png";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import ParticlesApp from "@/lib/Particles";
import Ribbon from "@/components/Ribbon";

import logo from "./assets/logo.webp";

const Banner = () => {
  return (
    <div className="relative w-full h-auto lg:h-[934px] animate-gradient">
      <div className="hidden absolute right-0 bottom-3/12 z-50 lg:flex flex-col items-end gap-2">
        <a href="https://webservices.futuredigital360.com/" target="_blank">
          <Ribbon text="Web Service Bill Pay" />
        </a>
        <a href="https://futuredigital360.billcenter.net/" target="_blank">
          <Ribbon backgroundColor="#007D62" text="Customer Bill Pay" />
        </a>
      </div>

      <ParticlesApp />
      <Section className="relative z-10 !pt-20 lg:!pt-48">
        <AnimateDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-[120px] xl:px-0">
            <div className="flex flex-col gap-6 lg:gap-10 text-white order-2 lg:order-1">
              <Text
                as={"h1"}
                className="font-bold text-2xl lg:text-5xl leading-[40px] lg:leading-[70px]"
              >
                Complete Digital Solutions <br />
                Total Peace of Mind
              </Text>
              <Text className="leading-[1.7]">
                <strong>Future Digital 360 </strong>offers you a centralized,
                single point of contact for questions concerning all of your
                Telephone, Email, Web, Security, IT related issues and Office
                Equipment. Over the past three decades, Future Digital 360 has
                vetted out partners that are industry leaders in their
                respective field resulting in superior client satisfaction
              </Text>
              <div>
                <Text>
                  Customer Service:{" "}
                  <Link className="underline" href="8555533360">
                    855.55-FD360 (3.3360)
                  </Link>
                </Text>
                <Text className="mt-2">
                  Technical Support:{" "}
                  <Link className="underline" href="4808096328">
                    480.809.6328
                  </Link>
                </Text>
              </div>
              <Button
                className="max-w-[213px]"
                href="contact-us#contact-form"
                variant="outline"
                label="Get a Free Quote"
              />
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src={infographic}
                className="w-full max-w-[500px] lg:max-w-[806px] h-auto relative top-0 lg:-top-[56px] max-lg:m-auto"
                alt="infographic"
              />
              <Image
                src={logo}
                className="absolute bottom-[201px] right-[71px] w-[65px] h-auto drop-shadow-xl [transform:perspective(998px)_rotateY(-43deg)_rotateX(16deg)_rotateZ(-4.5deg)_skewX(-4deg)] [transform-origin:center]"
                alt="logo"
              />
            </div>
          </div>
        </AnimateDiv>
      </Section>
      <div className="absolute left-0 bottom-0 w-full h-full hidden min-[1181px]:block">
        <Image src={whiteBanner} className="w-full h-full" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
