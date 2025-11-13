import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";

import printer1 from "./assets/printer1.png";
import printer2 from "./assets/printer2.png";
import lexmark from "./assets/lexmark.png";

const MultiFunctional = () => {
  return (
    <>
      <Section className="bg-accent-100">
        <AnimateDiv>
          <Text className="text-center" variant="subtitle">
            Multifunction Printers That Do It All
          </Text>
        </AnimateDiv>
        <AnimateDiv>
          <Text
            variant="body"
            className="mt-12 text-center w-full max-w-[1050px] mx-auto leading-8"
          >
            Our product brand is based on your requirements, we put you in
            charge allowing for an ethical, honest discussion on your needs. We
            provide a single low-cost solution, covering all your office
            equipment requirements.
          </Text>
        </AnimateDiv>
        <AnimateDiv>
          <Text className="mt-8 text-center w-full max-w-[1050px] mx-auto leading-8">
            A <strong>multifunction printer (MFP)</strong> is a piece of office
            equipment that serves as the centralized hub where all{" "}
            <strong>printing, copying, faxing, and scanning occurs</strong>.
            Most MFPs also provide finishing options including, stapling,
            folding, hole punching, and booklet making.
          </Text>
        </AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 max-w-[1200px] mx-auto">
          <div className="flex items-center">
            <AnimateDiv>
              <Image src={printer1} alt="printer" />
            </AnimateDiv>
          </div>
          <div className="flex flex-col gap-6">
            <AnimateDiv>
              <Text className="font-extralight" variant="title">
                Small and Meduim{" "}
                <strong className="font-semibold">Business</strong>
              </Text>
              <Text variant="body" className="leading-8">
                Versatile printers and multifunction products for individuals
                and workgroups who print{" "}
                <strong>2,500 to 10,000 pages per month</strong>.
              </Text>
            </AnimateDiv>
            <ul className="flex flex-col gap-5">
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="leading-8">
                    Reliable performance tailored for small and medium
                    businesses.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="leading-8">
                    Cost-effective solutions for high-volume printing.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text>
                    Multifunction capabilities (print, scan, copy, fax) in one
                    device.
                  </Text>
                </AnimateDiv>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 max-w-[1200px] mx-auto gap-8">
          <div className="flex items-center order-2 w-full lg:justify-end">
            <AnimateDiv>
              <Image src={printer2} alt="printer" />
            </AnimateDiv>
          </div>
          <div className="flex flex-col gap-6 order-1">
            <AnimateDiv>
              <Text className="font-extralight" variant="title">
                Enterprise and Large{" "}
                <strong className="font-semibold">Business</strong>
              </Text>
              <Text variant="body" className="leading-8">
                Advanced, high-capacity devices to support teams of 20 or more
                people that print more than{" "}
                <strong>6,000 pages per month</strong>.
              </Text>
            </AnimateDiv>
            <ul className="flex flex-col gap-5">
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="leading-8">
                    Scalable solutions to handle enterprise-level workloads.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="leading-8">
                    High-speed, high-volume printing for large teams.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text>
                    Robust security and management features for business
                    continuity.
                  </Text>
                </AnimateDiv>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="">
        <AnimateDiv>
          <Text className="text-center" variant="subtitle">
            Service Partner
          </Text>
          <Image
            src={lexmark}
            alt="lexmark"
            className="mt-12 mx-auto w-full max-w-[400px] max-sm:w-4/5"
          />
        </AnimateDiv>
      </Section>
    </>
  );
};

export default MultiFunctional;
