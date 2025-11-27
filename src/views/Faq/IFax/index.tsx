"use client";
import PageBanner from "@/containers/PageBanner";
import banner from "../assets/faq-banner.webp";
import Section from "@/components/Section";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image, { StaticImageData } from "next/image";
import Text from "@/components/Text";
import IFaxAccount from "./IFaxAccount";
import IFaxNavigation from "./IFaxNavigation";
import IFaxReceived from "./IFaxReceived";
import IFaxSending from "./IFaxSending";
import setting from "./assets/setting.png";
import navigation from "./assets/compass.png";
import received from "./assets/printer.png";
import sent from "./assets/fax.png";
import AnimateDiv from "@/components/AnimateDiv";

type TabItem = {
  title: string | React.ReactNode;
  icon: string | StaticImageData;
};

const tabItems: TabItem[] = [
  {
    title: (
      <>
        Account, Team and Number
        <br /> Setup and Configuration
      </>
    ),
    icon: setting,
  },
  {
    title: "Navigation",
    icon: navigation,
  },
  {
    title: "Processing Received Faxed",
    icon: received,
  },
  {
    title: "Sending Faxed",
    icon: sent,
  },
];

const IFax = () => {
  return (
    <>
      <PageBanner title="IFax FAQs" bannerImg={banner.src} />
      <Section className="bg-accent-100">
        <Tabs>
          <AnimateDiv>
            <TabList className="grid grid-cols-4 text-center lg:px-16 mb-10 lg:mb-12">
              {tabItems.map(({ title, icon }, index) => (
                <Tab
                  key={index}
                  className="cursor-pointer outline-0 group"
                  selectedClassName="selected"
                >
                  <div className="relative min-h-[75px] lg:min-h-[130px] flex flex-col gap-2 items-center text-center after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-[3px] after:bg-brand-500 after:mx-auto group-[.selected]:after:w-2/3 after:transition-all after:duration-300 after:ease-in-out">
                    <div className="w-[60px] h-[60px] bg-indigo-100 group-[.selected]:bg-gradient-to-r group-[.selected]:from-brand-500 group-[.selected]:to-brand-600 rounded-full flex justify-center items-center transition-all duration-300 ease-in-out">
                      <Image
                        className="w-[30px] h-[30px] group-[.selected]:invert transition-all duration-300 ease-in-out"
                        src={icon}
                        alt="setting"
                      />
                    </div>
                    <Text className="hidden lg:block group-[.selected]:text-brand-500 group-[.selected]:font-semibold transition-colors duration-300 ease-in-out">
                      {title}
                    </Text>
                  </div>
                </Tab>
              ))}
            </TabList>
          </AnimateDiv>

          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxAccount />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxNavigation />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxReceived />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxSending />
          </TabPanel>
        </Tabs>
      </Section>
    </>
  );
};

export default IFax;
