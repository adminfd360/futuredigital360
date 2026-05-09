"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
import { IFAX_TAB_SLUGS, type IFaxTabSlug } from "./slug";

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
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab") as IFaxTabSlug | null;

  const initialTabIndex =
    tabFromUrl && IFAX_TAB_SLUGS.includes(tabFromUrl)
      ? IFAX_TAB_SLUGS.indexOf(tabFromUrl)
      : 0;

  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Sync tab when arriving via search/deep-link (e.g. ?tab=sending) or back/
  // forward navigation that changes the search params on the same route.
  useEffect(() => {
    if (tabFromUrl && IFAX_TAB_SLUGS.includes(tabFromUrl)) {
      setTabIndex(IFAX_TAB_SLUGS.indexOf(tabFromUrl));
    }
    if (typeof window !== "undefined") {
      setActiveSlug(window.location.hash.slice(1) || null);
    }
  }, [tabFromUrl]);

  // Native hash changes (e.g. user edits the URL) — Next's <Link> hash changes
  // are picked up by the searchParams effect above when paired with ?tab.
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSlug(window.location.hash.slice(1) || null);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <PageBanner title="IFax FAQs" bannerImg={banner.src} />
      <Section className="bg-accent-100">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
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
            <IFaxAccount activeSlug={tabIndex === 0 ? activeSlug : null} />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxNavigation activeSlug={tabIndex === 1 ? activeSlug : null} />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxReceived activeSlug={tabIndex === 2 ? activeSlug : null} />
          </TabPanel>
          <TabPanel className="transition-all duration-300 ease-in-out">
            <IFaxSending activeSlug={tabIndex === 3 ? activeSlug : null} />
          </TabPanel>
        </Tabs>
      </Section>
    </>
  );
};

export default IFax;
