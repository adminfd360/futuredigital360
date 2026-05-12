"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

import yealink from "./assets/partners/yealink.webp";
import yeastar from "./assets/partners/yeastar.webp";
import lenovo from "./assets/partners/lenovo.webp";
import lexmark from "./assets/partners/lexmark.webp";
import googlePartner from "./assets/partners/google.webp";
import microsoft from "./assets/partners/mssoft.webp";
import AnimateDiv from "@/components/AnimateDiv";
import va360 from "./assets/partners/va360logo.png";
import usamericom from "./assets/partners/usaamericom.webp";

import "swiper/css";

const OurPartners = () => {
  return (
    <Section>
      <AnimateDiv>
        <Text className="text-center" variant="subtitle">
          Our Partners
        </Text>
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
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper mt-12"
        >
          <SwiperSlide className="!flex justify-between items-center !h-[134px]">
            <Image src={yealink} alt="yealink" />
          </SwiperSlide>
          <SwiperSlide className="!flex justify-between items-center !h-[134px]">
            <Link href="https://www.va360.us/" target="_blank">
              <Image className="w-full h-auto" src={va360} alt="VA360" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="!flex justify-between items-center !h-[134px]">
            <Link href="" target="_blank">
              <Image
                className="w-full h-auto object-contain max-w-[240px]"
                src={usamericom}
                alt="usaamericom"
              />
            </Link>
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
  );
};

export default OurPartners;
