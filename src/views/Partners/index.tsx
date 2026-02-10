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

import PageBanner from "@/containers/PageBanner";
import banner from "./assets/partners-banner.webp";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";

import "swiper/css";
import "swiper/css/navigation";

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
