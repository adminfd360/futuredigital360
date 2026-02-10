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
import AnimateDiv from "@/components/AnimateDiv";
import Link from "next/link";

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
        <AnimateDiv>
          <Text className="text-white text-center" variant="subtitle">
            Clients Testimonials
          </Text>

          <Swiper
            pagination={true}
            slidesPerView={1}
            breakpoints={{
              620: {
                slidesPerView: 1.4,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            // loop={true}
            spaceBetween={50}
            modules={[Pagination, Autoplay]}
            className="client-swiper mt-16 !pb-12"
          >
            <SwiperSlide>
              <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6 min-h-[267px] justify-between">
                <Image src={qoute} alt="qoute" />
                <Text>
                  Signed up with Future Digital for our phone system all the way
                  from Wisconsin and we have loved everything about them.
                  <Link
                    className="text-brand-500"
                    target="_blank"
                    href="https://share.google/xm3rdEtE2oZbozvcD"
                  >
                    ...Read more
                  </Link>
                </Text>
                <div className="flex gap-3">
                  <Image src={avatar} alt="avatar" />
                  <div className="flex flex-col justify-center">
                    <Text>Jerry Arenas</Text>
                    {/* <Text>CEO</Text> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6 min-h-[267px] justify-between">
                <Image src={qoute} alt="qoute" />
                <Text>
                  I have been a customer of Future Digital for several years. I
                  love how they handle my issues in a timely manner.
                  <Link
                    className="text-brand-500"
                    target="_blank"
                    href="https://share.google/RfpSd9sxvg9nh0sCR"
                  >
                    ...Read more
                  </Link>
                </Text>
                <div className="flex gap-3">
                  <Image src={avatar} alt="avatar" />
                  <div className="flex flex-col justify-center">
                    <Text>Chosen Auto Sales</Text>
                    {/* <Text>CEO</Text> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6 bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)] rounded-md py-4 px-6 min-h-[267px] justify-between">
                <Image src={qoute} alt="qoute" />
                <Text>
                  Your representatives listened to the issues I was having with
                  our printer from the first contact by phone to the onsite
                  visit, and they resolved the matter quickly.
                  <Link
                    className="text-brand-500"
                    target="_blank"
                    href="https://share.google/9FWnSfTbRWAmgNTPs"
                  >
                    ...Read more
                  </Link>
                </Text>
                <div className="flex gap-3">
                  <Image src={avatar} alt="avatar" />
                  <div className="flex flex-col justify-center">
                    <Text>Michele Newcomb</Text>
                    {/* <Text>CEO</Text> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="flex justify-center items-center gap-6 mt-8">
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
          </div> */}
        </AnimateDiv>
      </Section>
    </div>
  );
};

export default Testimonials;
