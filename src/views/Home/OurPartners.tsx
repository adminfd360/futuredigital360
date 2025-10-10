"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";

import yealink from "./assets/partners/yealink.webp";
import yeastar from "./assets/partners/yeastar.webp";
import lenovo from "./assets/partners/lenovo.webp";
import lexmark from "./assets/partners/lexmark.webp";
import googlePartner from "./assets/partners/google.webp";
import microsoft from "./assets/partners/mssoft.webp";

import "swiper/css";

const OurPartners = () => {
  return (
    <Section>
      <Text className="text-center" variant="subtitle">
        Our Partners
      </Text>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
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
    </Section>
  );
};

export default OurPartners;
