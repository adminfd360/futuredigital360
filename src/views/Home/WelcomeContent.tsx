import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { cx } from "@/lib/utils";
import AnimateDiv from "@/components/AnimateDiv";

import communicationIcon from "./assets/communication.png";
import cybersecurityIcon from "./assets/cybersecurity.png";
import manageITIcon from "./assets/network.png";
import websiteIcon from "./assets/web.png";
import multiFunctionalIcon from "./assets/products.png";

type Services = {
  icon: string | StaticImageData;
  iconColor: string;
  title: string;
  description: string;
};

const services: Services[] = [
  {
    icon: communicationIcon,
    iconColor: "#007D62",
    title: "Communication Solutions",
    description:
      "Offering both private cloud, SasS and on premise communication solutions with technology in mind and ease of use.",
  },
  {
    icon: cybersecurityIcon,
    iconColor: "#292DC2",
    title: "Cybersecurity and Network",
    description:
      "We help you take the right steps to safeguard sensitive business and personnel information.",
  },
  {
    icon: manageITIcon,
    iconColor: "#FF6262",
    title: "Manage IT Network",
    description:
      "We offer a well delivered comprehensive suite of IT and computer services catered to your budget and requirements.",
  },
  {
    icon: websiteIcon,
    iconColor: "#7C3AED",
    title: "Website Services",
    description:
      "As a single resource with multi-levels of Web capabilities, Future Digital 360 can simplify and streamline your efforts.",
  },
  {
    icon: multiFunctionalIcon,
    iconColor: "#38BDF8",
    title: "Multi Functional Products",
    description:
      " We provide a single low-cost solution, covering all your office equipment requirements.",
  },
];

const WelcomeContent = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute w-[392px] h-[392px] rounded-full bg-[#F1F7FF] -right-[214px] top-0"></div>
      <div className="absolute w-[392px] h-[392px] rounded-full bg-[#F1F7FF] -left-[214px] top-0 bottom-0 my-auto"></div>
      <Section>
        <AnimateDiv>
          <Text variant="title" className="text-center">
            Welcome to Future Digital 360
          </Text>
          <Text
            variant="body"
            className="text-center mt-10 leading-9 w-full max-w-[930px] mx-auto"
          >
            Since 1986 <strong>Future Digital 360</strong> has provided
            innovative and effective business solutions globally. We specialize
            in electronic document management, managed print services and
            advanced office technology scanning solutions. We provide dedicated,
            dependable and unparalleled customer support. We tailor innovative
            solutions to fully meet each of our customer’s individual needs. Our
            solutions include:
          </Text>
        </AnimateDiv>
        <div className="flex flex-wrap justify-center gap-16 mt-12 lg:mt-20">
          {services.map(({ icon, iconColor, title, description }, index) => (
            <AnimateDiv key={index}>
              <div
                key={index}
                className={cx(
                  "p-12 flex flex-col gap-6 justify-center items-center w-full max-w-[395px] shadow-[0px_0px_8px_4px_rgba(0,0,0,0.03)]",
                  `border-b-[1px] h-full`
                )}
                style={{ borderColor: iconColor }}
              >
                <div
                  className={cx(
                    "flex justify-center items-center p-5 rounded-full"
                  )}
                  style={{ backgroundColor: `${iconColor}52` }}
                >
                  <Image src={icon} alt={title} className="w-9 h-9" />
                </div>
                <Text variant="caption" className="text-center">
                  {title}
                </Text>
                <Text variant="body" className="text-center">
                  {description}
                </Text>
              </div>
            </AnimateDiv>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WelcomeContent;
