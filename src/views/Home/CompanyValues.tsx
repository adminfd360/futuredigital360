import Section from "@/components/Section";
import Text from "@/components/Text";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import chevron from "./assets/down-arrow.png";
import mission from "./assets/mission.svg";
import AnimateDiv from "@/components/AnimateDiv";

type CompanyValues = {
  header: string;
  content: string;
};

const companyValues: CompanyValues[] = [
  {
    header: "Our Mission",
    content:
      "Our mission is to fuse business with advanced office technology, equipment, and supplies and provide steadfast service and support. Our customer service shall be at the highest of standards. It is our vision to build a culture based on traditions of innovation and competitiveness.",
  },
  {
    header: "Our Vision",
    content:
      "Our vision Is to be a world-class service company that helps businesses achieve their goals. We will accomplish our Vision through our commitment to strategic growth, outstanding service, and community involvement. Steadfast, Dedication & Security.",
  },
  {
    header: "Our Commitment",
    content:
      "Future Digital 360 is committed to serving the communities where we do business, providing our clients with innovative, high-quality products and services and providing for the financial and social needs of our workers and our environment.",
  },
];

const CompanyValues = () => {
  return (
    <Section className="bg-accent-100">
      <AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div>
            <Text variant="subtitle">Who We Are and What We Stand For</Text>

            <Accordion
              items={companyValues.map(({ header, content }, index) => ({
                header,
                children: content,
                initialEntered: index === 0,
              }))}
              chevronIcon={chevron}
            />
          </div>
          <div className="">
            <Image
              src={mission}
              alt="Mission"
              className="w-full h-auto max-w-[620px] max-lg:m-auto lg:ml-auto"
            />
          </div>
        </div>
      </AnimateDiv>
    </Section>
  );
};

export default CompanyValues;
