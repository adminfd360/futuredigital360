"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import yealink from "../Home/assets/partners/yealink.webp";
import yeastar from "../Home/assets/partners/yeastar.webp";
import lenovo from "../Home/assets/partners/lenovo.webp";
import lexmark from "../Home/assets/partners/lexmark.webp";
import googlePartner from "../Home/assets/partners/google.webp";
import microsoft from "../Home/assets/partners/mssoft.webp";
import va360 from "./assets/va360logo.png";
import usamericom from "./assets/usaamericom.webp";

import PageBanner from "@/containers/PageBanner";
import banner from "./assets/partners-banner.webp";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const Partners = () => {
  return (
    <>
      <PageBanner title="Our Partners" bannerImg={banner.src} />
      <Section>
        <AnimateDiv>
          <Text className="text-center" variant="title">
            Meet Our Partners
          </Text>
        </AnimateDiv>
        <div>
          <Text className="mt-6 lg:mt-12 text-center md:mt-0 w-full max-w-[1200px] mx-auto">
            We are proud to collaborate with industry-leading partners to
            provide our customers with the best solutions and services. Our
            partnerships enable us to offer a wide range of products and
            services that meet the diverse needs of our clients. Together, we
            strive to deliver innovative and reliable solutions that drive
            success for our customers.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <AnimateDiv className="p-10 border rounded-xl border-blue-200 bg-gradient-to-b from-transparent to-blue-50 flex items-center justify-center">
              <Link
                href="https://www.va360.us/"
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                <Image src={va360} className="w-full h-auto" alt="VA360" />
              </Link>
            </AnimateDiv>
            <AnimateDiv className="p-10 border rounded-xl border-blue-200 bg-gradient-to-b from-transparent to-blue-50 flex items-center justify-center">
              <Link
                href="https://usamericom.com/"
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={usamericom}
                  className="w-full h-auto max-w-[400px]"
                  alt="usaamericom"
                />
              </Link>
            </AnimateDiv>
          </div>
        </div>
        <AnimateDiv>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              620: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper mt-10 lg:mt-16"
          >
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={yealink} alt="yealink" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={yeastar} alt="yeastart" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={lenovo} alt="lenovo" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={lexmark} alt="lexmark" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={googlePartner} alt="googlePartner" />
            </SwiperSlide>
            <SwiperSlide className="!flex justify-between items-center !h-[134px]">
              <Image src={microsoft} alt="microsoft" />
            </SwiperSlide>
          </Swiper>
        </AnimateDiv>
      </Section>
    </>
  );
};

export default Partners;
