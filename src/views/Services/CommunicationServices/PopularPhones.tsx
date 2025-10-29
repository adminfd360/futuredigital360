"use client";
import AnimateDiv from "@/components/AnimateDiv";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import cp920 from "./assets/phones/cp920.webp";
import cp930w from "./assets/phones/cp930w.webp";
import cp960 from "./assets/phones/cp960.webp";
import mp50 from "./assets/phones/mp50.webp";
import mp54 from "./assets/phones/mp54.webp";
import mp56 from "./assets/phones/mp56.webp";
import mp58 from "./assets/phones/mp58.webp";
import t31g from "./assets/phones/t31g.webp";
import t31p from "./assets/phones/t31p.webp";
import t48s from "./assets/phones/t48s.webp";
import t53 from "./assets/phones/t53w.webp";
import t53w from "./assets/phones/t53w.webp";
import t54w from "./assets/phones/t54w.webp";
import t57w from "./assets/phones/t57w.webp";
import w53h from "./assets/phones/w53h.webp";
import w53p from "./assets/phones/w53p.webp";
import w56h from "./assets/phones/w56h.webp";
import w59r from "./assets/phones/w59r.webp";
import w60p from "./assets/phones/w60p.webp";
import w73p from "./assets/phones/w73p.webp";
import wh66 from "./assets/phones/wh66.webp";
import t58a from "./assets/phones/t58a.webp";
import vp59 from "./assets/phones/vp59.webp";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Phone = {
  title: string;
  image: StaticImageData | string;
  price: string;
  description: string;
};

const phoneItems: Phone[] = [
  {
    title: "Yealink SIP-T31P",
    image: t31p,
    price: "$59.95",
    description:
      "Yealink SIP-T31P has an extra-large 132x64-pixel graphical LCD with backlight that brings clear visual experience for users. The T31P offers support for two VoIP accounts and includes local 5-way conferencing to maximize productivity. Working with the adjustable multi-angle stand, the T31P IP phone ensures you to work in different situation. The T31P features built-in power over Ethernet (PoE) and superb high definition (HD) sound quality. Easy-to-use and powerful features together with reasonable price deliver excellent voice communications solution.",
  },
  {
    title: "Yealink SIP-T31G",
    image: t31g,
    price: "$69.95",
    description:
      "Yealink SIP-T31G has an extra-large 132x64-pixel graphical LCD with backlight that brings clear visual experience for users. The T31G offers support for two VoIP accounts and includes local 5-way conferencing to maximize productivity. Working with the adjustable multi-angle stand, the T31G IP phone ensures you to work in different situation.",
  },
  {
    title: "Yealink SIP-T53",
    image: t53,
    price: "$149.99",
    description:
      "Yealink SIP-T53 is an easy-to-use Prime Business Phone with an adjustable 3.7-inch graphical LCD that you can easily and flexibly find the comfortable viewing angle according to the personal and environmental needs. Working with Yealink Bluetooth USB Dongle BT40 and Yealink Wi-Fi USB Dongle WF40/WF50, the SIP T53 IP Phone ensures you to keep up with the modern wireless technology and take the first chance in the future wireless age. Its built-in USB 2.0 port allows for USB recording or a direct wired/wireless USB headset or up to three Yealink expansion modules.",
  },
  {
    title: "Yealink SIP-T53W",
    image: t53w,
    price: "$169.95",
    description:
      "Yealink SIP-T53w is a powerful and expandable office phone that keeps your productivity levels high. It comes with a 3.7-inch graphical LCD you can easily adjust to find a comfortable viewing angle. With built-in Bluetooth 4.2 and the dual band 2.4G/5G Wi-Fi, the SIP-T53W IP Phone keeps you up to date with latest in modern wireless technology and enables you to place this phone anywhere you have an electrical outlet. Its USB 2.0 port also allows for USB recording or a direct wired/wireless USB headset.",
  },
  {
    title: "Yealink SIP-T54W",
    image: t54w,
    price: "$197.95",
    description:
      "Yealink SIP-T54W is an easy-to-use Prime Business Phone with an adjustable 4.3-inch color LCD screen that you can easily and flexibly find the comfortable viewing angle according to the personal and environmental needs. With the built-in Bluetooth 4.2 and the built-in dual band 2.4G/5G Wi-Fi, the SIP-T54W IP Phone ensures you to keep up with the modern wireless technology and take the first chance in the future wireless age. Its built-in USB 2.0 port allows for USB recording or a direct wired/wireless USB headset or up to three Yealink EXP50 expansion modules connection.",
  },
  {
    title: "Yealink SIP-T48s",
    image: t48s,
    price: "$189.95",
    description:
      "The SIP-T48s IP Phone is a dynamic business communications solution for executives and professionals. This phone offers a large touch screen that makes switching between pages and applications swift, easy and convenient. The SIP-T48S is also with Yealink's Optima HD Voice technology and wideband codec of Opus for unparalleled audio clarity. Phone users will think they are sitting in the same room with one another. The phone uses Gigabit Ethernet technology for rapid call handling.",
  },
  {
    title: "Yealink SIP-T57W",
    image: t57w,
    price: "$218.95",
    description:
      "Yealink SIP-T57W is an easy-to-use Prime Business Phone with an adjustable 7-inch multi-point touch screen that you can not only easily and flexibly find the comfortable viewing angle according to the personal and environmental needs, but also get a rich visual presentation and easy navigation with just one-touch. With the built-in Bluetooth 4.2 and the built-in dual band 2.4G/5G Wi-Fi, the SIP-T57W IP Phone ensures you to keep up with the modern wireless technology and take the first chance in the future wireless age. Its built-in USB 2.0 port allows for USB recording or a direct wired/wireless USB headset or up to three Yealink EXP50 expansion modules connection.",
  },
  {
    title: "Yealink SIP-T58A",
    image: t58a,
    price: "$399.95",
    description:
      "The Yealink SIP-T58A is a simple-to-use smart media phone that provides an enriched HD audio and video calling experience for business professionals. This all-new smart media phone enables productivity-enhancing visual communication with the ease of a standard phone. Based on Android 5.1.1 operating system, the SIP-T58A features a seven-inch adjustable multi-point touch screen, integrated Wi-Fi and Bluetooth 4.0+ EDR, and it is coupled with a built-in web browser, calendar, recorder and more, which also supports the installation of third-party applications for business customization. More than that, you can easily turn your SIP-T58A smart media phone into a video phone ready with an optional removable two-megapixel HD camera CAM50.",
  },
  {
    title: "Yealink MP56",
    image: mp56,
    price: "$194.95",
    description:
      "Yealink MP56 is a Teams-tailored IP phone based on Android 9 OS, with a 7-inch capacitive touch screen, which offers a faster response speed and the upgradability of firmware to SfB edition. It facilitates high-quality collaboration with flexibility thanks to Yealink Optima HD voice and magnet handset, dedicated Teams button and Bluetooth connectivity to Bluetooth headsets. This easy-to-use and reliable option is ideal for office workers.",
  },
  {
    title: "Yealink MP54",
    image: mp54,
    price: "$224.95",
    description:
      "Yealink MP54 is an Android 9-based phone that owns a faster response speed and dedicated Teams button, is ideal for office workers, front desks and common areas. Presenting a standalone voice solution and an unparalleled audio clarity, the MP54 is armed with Yealink's Optima HD Voice and Yealink Noise Proof Technology. Moreover, MP54 makes the collaboration easier than ever thanks to its support for SIP & Teams Hybrid mode, and its USB port for a Wi-Fi, Bluetooth and a USB headset.",
  },
  {
    title: "Yealink MP50",
    image: mp50,
    price: "$108.95",
    description:
      "Yealink MP50 is a brand-new and affordable USB phone which can integrate a variety of devices into a single phone via USB wired connection and Bluetooth wireless pairing, creates an all-in-one UC workstation. MP50 features a 4.0-inch capacitive touch screen and the consistent Teams-tailored interaction, will provide you a UC calling experience with PC and Mobile.",
  },
  {
    title: "Yealink CP960 Wireless Mic",
    image: cp960,
    price: "$699.95",
    description:
      "The Yealink Optima HD IP Conference Phone CP960, comprising the power of the Android 5.1 operating system. With user-centric design philosophy, this Y-shape brand new release from Yealink combines simplicity of use with sophistication of features, being perfect for any team environment, especially for medium to large conference room. In regard of its crystal clear audio quality, your conversation will sound natural and bright anywhere with well-designed CP960, and beyond that, you can connect an external loudspeaker to it if necessary. The Yealink CP960 provides wireless and wired pairing with your mobile staff - smartphone or PC/tablet via Bluetooth and USB Micro-B port; As a valuable complement for your conference room.",
  },
  {
    title: "Yealink CP930W Base",
    image: cp930w,
    price: "$435.95",
    description:
      "The Yealink CP930W Wireless DECT Conference Phone allows you to hold meetings wherever or whenever is convenient for you. Working with Yealink W60B base station, which owns the DECT radio coverage up to 50m indoors, CP930W can be provided with good and stable signal. Thanks to its built-in battery and the DECT technology, CP930W entirely frees you from the network and power outlets troubles, giving you a tidy conference table with only one elegant CP930W.",
  },
  {
    title: "Yealink CP920",
    image: cp920,
    price: "$379.95",
    description:
      "The Yealink CP920 IP Conference Phone is designed for small to medium conference rooms. It delivers crystal-clear audio quality and features Yealink Noise Proof Technology. The CP920 offers 360-degree voice pickup with a 20-foot radius coverage, making it ideal for productive conference calls. With its sleek design and easy setup, the CP920 provides an excellent conference solution for businesses.",
  },
  {
    title: "Yealink VP59",
    image: vp59,
    price: "$529.95",
    description:
      "The Yealink flagship smart video phone VP59 is designed for executives and teleworkers that strikes the perfect balance between simplicity and sophistication, enabling high quality communications for business executives and professionals alike. Based on Android 7.1 operating system, the VP59 features an eight-inch LCD touch screen that gives you a smartphone-like user experience, and it also supports the installation of third-party applications for business customization as well as the DoorPhone features. When working with Yealink DD10K DECT USB Dongle, VP59 will turn into a corded cordless phone and support you up to 4 DECT handsets in total to meet your daily demands.",
  },
  {
    title: "Yealink MP58",
    image: mp58,
    price: "$315.95",
    description:
      "Based on Android 9.0 OS, Yealink MP58 smart business phone with the 7-inch touchscreen provides a vivid visual presentation and a premium Teams experience for executives and managers. Thanks to Yealink Optima HD voice, dedicated Teams button, an adjustable display, as well as built-in Wi-Fi and Bluetooth connectivity, the MP58 facilitates high-efficiency communications and collaboration experiences for every user. The innovative wireless Bluetooth handset BTH58 model also adds flexibility and mobility. The model also supports changing to Skype for Business edition firmware for more flexibility.",
  },
  {
    title: "Yealink WH66 Dual/Mono UC Workstation DECT Wireless Headset",
    image: wh66,
    price: "$299.95",
    description:
      "The Yealink WH66 is the industry-leading DECT wireless headset, with WH66 Dual and WH66 Mono two models, opening an entirely new form of desktop collaboration. Work seamlessly with major UC platforms and integrate natively with Yealink IP Phones. 4.0 inch (480 x 800) capacitive touch screen of base offers new work experience, just one touch, all control. Act as a workstation, managing phone calls, connecting with multiple devices (desk phone/mobile phone/computer), charging mobile phone wirelessly, and even playing a speakerphone's role. Best of all, deploying such a multifunctional workstation only needs to plug directly. Easiest things to do, greatest convenience to enjoy.",
  },
  {
    title: "Yealink W60P",
    image: w60p,
    price: "$159.95",
    description:
      "The Yealink W60P, being a high-performance SIP cordless phone system, is the ideal solution for small and medium-sized businesses. Pairing with up to a total of 8 Yealink W52H/W56H DECT handsets, it allows you to enjoy superb mobility and efficient flexibility immediately as well as significantly eliminates additional wiring troubles and charges. To provide a better and higher performance, this DECT IP phone not only supports up to 8 VoIP accounts and 8 concurrent calls, but also speeds up its startup and signal connection, slashes its upgrade downtime as well.",
  },
  {
    title: "Yealink W53H",
    image: w53h,
    price: "$89.95",
    description:
      "The Yealink W53H is the next-generation wireless handset designed for business use with excellent battery life and high compatibility. Combining the benefits of wireless communication with rich business features of Voice-over-IP telephony, it empowers users with convenience of wireless communication that users can enjoy conversations in excellent speech quality, and benefit from freedom of movement and its professional features.",
  },
  {
    title: "Yealink W56H",
    image: w56h,
    price: "$99.95",
    description:
      "The Yealink W56H is the next-generation wireless handset designed for business use with excellent battery life and high compatibility. Combining the benefits of wireless communication with rich business features of Voice-over-IP telephony, it empowers users with convenience of wireless communication that users can enjoy conversations in excellent speech quality, benefit from freedom of movement and its professional features.",
  },
  {
    title: "Yealink W73P",
    image: w73p,
    price: "$149.95",
    description:
      "The Yealink W73P, being a high-performance SIP cordless phone system, which can register 10 Yealink DECT W73H handsets, is the ideal solution for small and medium-sized businesses. It allows you to enjoy superb mobility and efficient flexibility immediately as well as significantly eliminates additional wiring troubles and charges. Featuring more functions, lines and mobility, it supports up to 10 SIP accounts and 20 simultaneous calls, improving signal strength and responsiveness to provide a stable and good experience for your mobile communications.",
  },
  {
    title: "Yealink W59R",
    image: w59r,
    price: "$181.95",
    description:
      "Yealink W59R, certified to rigorous IP67 standard, is a professional ruggedized DECT handset with integrated Bluetooth and vibration alarm that is perfectly suitable for environments where there may be dusty, humid, and harsh conditions. Not only combining the advantages of wireless communication and the rich features of Voice-over-IP phone, but also fully compatible with Yealink W80 Multi-Cell System for seamless roaming and handover of the calls, this handset provides users with the convenience and good experience of mobile communication in and between each zone and keeps stable in the complicated and harsh locations.",
  },
  {
    title: "Yealink W53P",
    image: w53p,
    price: "$134.95",
    description:
      "The Yealink W53P, being a high-performance SIP cordless phone system, is the ideal solution for small and medium-sized businesses. Pairing with up to a total of 8 Yealink W53H DECT handsets, it allows you to enjoy superb mobility and efficient flexibility immediately as well as significantly eliminates additional wiring troubles and charges. To provide a better and higher performance, this DECT IP phone not only supports up to 8 SIP accounts and 8 concurrent calls, but also speeds up its startup and signal connection, slashes its upgrade downtime as well.",
  },
];

const PopularPhones = () => {
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isModalOpen]);

  const handlePhoneClick = (phone: Phone) => {
    setSelectedPhone(phone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhone(null);
  };

  return (
    <>
      <Section className="bg-accent-100">
        <Text className="text-center mb-12" variant="subtitle">
          Popular Phones
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center items-center">
          {phoneItems.map(({ title, image, description, price }, index) => (
            <AnimateDiv className="w-full" key={index}>
              <div
                className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-md p-4 w-full h-full min-h-[292px] cursor-pointer hover:shadow-lg transition-shadow duration-300 relative"
                onClick={() =>
                  handlePhoneClick({ title, image, description, price })
                }
              >
                <Image
                  className="w-auto h-[225px] m-auto"
                  src={image}
                  alt="telephone"
                />
                <Text
                  className="text-center mb-4 font-semibold absolute left-0 right-0 m-auto bottom-4 pl-3 pr-3"
                  variant="body"
                >
                  {title}
                </Text>
              </div>
            </AnimateDiv>
          ))}
        </div>

        {/* Modal - Rendered using Portal */}
        {isModalOpen &&
          selectedPhone &&
          createPortal(
            <div
              className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4"
              style={{ zIndex: 9999 }}
              onClick={closeModal}
            >
              <AnimateDiv>
                <div
                  className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-custom font-bold text-gray-800">
                        {selectedPhone.title}
                      </h3>
                      <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
                        aria-label="Close modal"
                      >
                        ×
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <Image
                          src={selectedPhone.image}
                          alt={selectedPhone.title}
                          className="w-full md:w-64 h-auto object-contain rounded-lg"
                        />
                        <p className="flex justify-center items-center">
                          <span className="bg-red-500 text-white p-2 px-6 rounded-md leading-snug">
                            {selectedPhone.price}
                          </span>
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {selectedPhone.description}
                        </p>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={closeModal}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateDiv>
            </div>,
            document.body
          )}
      </Section>
    </>
  );
};

export default PopularPhones;
