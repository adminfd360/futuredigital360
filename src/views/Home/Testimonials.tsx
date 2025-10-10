"use client";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import qoute from "./assets/qoute.png";
import avatar from "./assets/avatar.png";
import fireworks from "./assets//fireworks.png";
import Button from "@/components/Button";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="relative">
      <div className="w-full h-[320px] absolute top-0 left-0 bg-gradient-to-b from-brand-600 to-brand-500 bg-no-repeat bg-center bg-contain"></div>
      <div
        className="w-full h-[320px] absolute top-0 left-0 bg-no-repeat bg-top bg-cover opacity-70"
        style={{
          backgroundImage: `url(${fireworks.src})`,
        }}
      ></div>
      <Section className="z-20">
        <Text className="text-white text-center" variant="subtitle">
          Clients Testimonials
        </Text>

        <Swiper
          pagination={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          className="client-swiper mt-16 !pb-12"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6">
              <Image src={qoute} alt="qoute" />
              <Text>
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt anim id est laborum anim.
              </Text>
              <div className="flex gap-3">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col justify-center">
                  <Text>John Doe</Text>
                  <Text>CEO</Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6">
              <Image src={qoute} alt="qoute" />
              <Text>
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt anim id est laborum anim.
              </Text>
              <div className="flex gap-3">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col justify-center">
                  <Text>John Doe</Text>
                  <Text>CEO</Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6">
              <Image src={qoute} alt="qoute" />
              <Text>
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt anim id est laborum anim.
              </Text>
              <div className="flex gap-3">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col justify-center">
                  <Text>John Doe</Text>
                  <Text>CEO</Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6">
              <Image src={qoute} alt="qoute" />
              <Text>
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt anim id est laborum anim.
              </Text>
              <div className="flex gap-3">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col justify-center">
                  <Text>John Doe</Text>
                  <Text>CEO</Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center items-center gap-6 mt-8">
          <Button
            variant="primary"
            label="Leave a Review"
            href="/reviews/write-a-review"
            className="tracking-widest text-sm px-6"
          />
          <Button
            variant="secondary"
            label="View all Reviews"
            href="/reviews"
            className="tracking-widest text-sm px-6"
          />
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
