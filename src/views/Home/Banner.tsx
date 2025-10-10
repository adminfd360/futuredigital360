"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import infographic from "./assets/banner-infographic.png";
import whiteBanner from "./assets/white-bg.png";
import Text from "@/components/Text";
const Banner = () => {
  return (
    <div className="w-full h-[934px] bg-gradient-to-r from-[#292dc2] to-[#0084e9]">
      <Section className="relative z-10 !pt-48">
        <div className="grid grid-cols-[45%_55%]">
          <div className="flex flex-col gap-10 text-white">
            <Text as={"h1"} className="font-bold text-5xl leading-[70px]">
              Complete Digital Solutions <br />
              Total Peace of Mind
            </Text>
            <Text className="leading-[1.7]">
              <strong>Future Digital 360 </strong>offers you a centralized,
              single point of contact for questions concerning all of your
              Telephone, Email, Web, Security, IT related issues and Office
              Equipment. Over the past three decades, Future Digital 360 has
              vetted out partners that are industry leaders in their respective
              field resulting in superior client satisfaction
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
              onClick={() => {}}
              variant="outline"
              label="Get a Free Quote"
            />
          </div>
          <div>
            <Image
              src={infographic}
              className="w-full max-w-[806px] h-auto relative -top-[56px]"
              alt="infographic"
            />
          </div>
        </div>
      </Section>
      <div className="absolute left-0 bottom-0 w-full h-full">
        <Image src={whiteBanner} className="w-full h-full" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
