import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Accordion from "@/components/Accordion";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";
import { frequentlyAskData } from "./data";
import banner from "../assets/faq-banner.webp";
import chevron from "../assets/down-arrow.png";
import faqMan from "../assets/faq-man.webp";

const FrequentlyAsk = () => {
  return (
    <>
      <PageBanner title="Frequently Ask Questions" bannerImg={banner.src} />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <AnimateDiv>
              <Image
                className="mt-12 sticky top-20 max-sm:m-auto max-sm:w-auto max-sm:h-[150px] max-sm:object-contain"
                src={faqMan}
                alt="Frequently Ask Questions"
              />
            </AnimateDiv>
          </div>
          <div className="col-span-1 lg:col-span-9">
            <AnimateDiv>
              <Text className="text-center" variant="title">
                Most Popular Questions
              </Text>
            </AnimateDiv>
            <Accordion
              items={frequentlyAskData.map(({ question, answer }, index) => ({
                header: question,
                children: answer,
                initialEntered: index === 0,
                contentClassName: "bg-accent-100",
              }))}
              chevronIcon={chevron}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default FrequentlyAsk;
