import Text from "@/components/Text";
import Section from "@/components/Section";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";
import checkIcon from "./assets/check.png";
import crossIcon from "./assets/cross.png";
import Button from "@/components/Button";

type Plan = {
  name: string;
  price: string;
  features: string[];
  notIncluded?: Set<string>;
};

const features: string[] = [
  "Unlimited Calling within U.S.",
  "24/7 Customer Support",
  "Virtual Receptionist",
  "Multi-Level Virtual Receptionist",
  "Mobile App",
  "Ring Group",
  "Music on Hold",
  "Extension Dialing",
  "Conference Bridge",
  "Electronic Inbound Fax",
  "Intercom",
  "Paging",
  "Call Log",
  "Call Park",
  "Multi-Device Ring",
  "E-911 Service",
  "Voicemail to Email",
  "Dial by Name",
  "Multi-Site Management",
  "Caller ID",
  "Audio Conferencing",
  "Speed Dial",
  "Call Recording",
  "Software Phone/Desktop App",
  "Call Barge, Listen, Coach",
  "CRM Integration",
  "Toll – Free Number for Free",
  "SMS Texting",
  "Directory Listing",
  "Video Conferencing",
];

const basicPlanFeatures = [
  "Mobile App",
  "Call Recording",
  "Software Phone/Desktop App",
  "Call Barge, Listen, Coach",
  "CRM Integration",
  "Toll – Free Number for Free",
  "SMS Texting",
  "Directory Listing",
  "Video Conferencing",
];

const proPlanFeatures = [
  "SMS Texting",
  "Directory Listing",
  "Video Conferencing",
];

const basicPlanFeaturesSet = new Set(basicPlanFeatures);
const proPlanFeaturesSet = new Set(proPlanFeatures);

const plans: Plan[] = [
  {
    name: "Basic",
    price: "19.95",
    features: features,
    notIncluded: basicPlanFeaturesSet,
  },
  {
    name: "Pro",
    price: "24.95",
    features: features,
    notIncluded: proPlanFeaturesSet,
  },
  {
    name: "Enterprise",
    price: "29.95",
    features: features,
  },
];

const PhonePlans = () => {
  return (
    <Section className="bg-[#F9F9F9]">
      <AnimateDiv>
        <Text className="text-center" variant="subtitle">
          Phone Plans & Pricing
        </Text>
        <Text className="mt-3 text-center" variant="caption">
          VoIP Phone Service
        </Text>
      </AnimateDiv>
      <div className="flex w-full max-w-[1320px] gap-4 mt-10 mx-auto flex-wrap">
        {plans.map(({ name, price, features, notIncluded }, index) => (
          <div
            key={index}
            className="bg-white flex-1 shadow-lg rounded-sm px-8 py-12 min-h-[400px]"
          >
            <AnimateDiv>
              <Text className="text-center font-semibold text-2xl">{name}</Text>
              <div className="flex justify-center items-center gap-2">
                <Text className="pl-3 font-bold text-[#5A5D80] text-[40px] relative before:content-['$'] before:absolute before:left-0 before:top-1 before:text-base before:font-bold">
                  {price}
                </Text>
                <div className="flex flex-col gap-[2px]">
                  <Text className="text-[#5A5D80] text-xs" variant="body">
                    / Per Month
                  </Text>
                  <Text className="text-[#5A5D80] text-xs" variant="body">
                    / Per User
                  </Text>
                </div>
              </div>
            </AnimateDiv>

            <ul className="flex flex-col gap-6 mt-10">
              {features.map((item, index) => {
                const isNotIncluded = notIncluded && notIncluded.has(item);
                return (
                  <li className="" key={index}>
                    <AnimateDiv className="flex justify-between items-center">
                      <Text variant="body">{item}</Text>
                      <Image
                        src={isNotIncluded ? crossIcon : checkIcon}
                        alt={isNotIncluded ? "cross" : "check"}
                        width={20}
                        height={20}
                      />
                    </AnimateDiv>
                  </li>
                );
              })}
            </ul>
            <Button
              variant="primary"
              label="Get a Free Quote"
              href="/"
              className="tracking-widest text-sm px-6 w-full mt-7 hover:bg-brand-500 hover:text-white"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PhonePlans;
