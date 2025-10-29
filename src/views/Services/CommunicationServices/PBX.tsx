import Image from "next/image";
import Text from "@/components/Text";
import Section from "@/components/Section";
import cloudPBX from "./assets/cloud-pbx.png";
import onPremisePBX from "./assets/premise-pbx.png";
import AnimateDiv from "@/components/AnimateDiv";

const PBX = () => {
  return (
    <Section>
      <AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          <div className="flex justify-center items-center">
            <Image className="w-auto lg:w-[420px]" src={cloudPBX} alt="PBX" />
          </div>
          <div>
            <Text variant="subtitle">Cloud PBX</Text>
            <Text className="text-[#575A7B] my-4" variant="caption">
              Hightlights:
            </Text>
            <Text className="text-[#575A7B]">
              Whether upgrading from an existing phone system or deploying as a
              first time customer, FD360’s Private Cloud will provide an easy to
              manage solution that reduces communications costs.
            </Text>
            <div className="text-[#575A7B] mt-4">
              <ul className="flex flex-col gap-4">
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Complete enterprise class PBX and ACD capabilities
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Full support for Polycom desktop and conference phones
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Delivered as a fully managed cloud service
                </li>
              </ul>
            </div>

            <Text className="text-[#575A7B] mt-6 mb-4" variant="caption">
              Benifits:
            </Text>
            <div className="text-[#575A7B] mt-4">
              <ul className="flex flex-col gap-4">
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Advanced business-class PBX and contact center feature set
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Secure dedicated virtual server, managed 24×7
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Eliminate upfront CAPEX with no PBX hardware to buy
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Reduce IT and OPEX with no on PBX to maintain and or upgrade
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Lower communications costs with integrated SIP trunks (vs. on
                  premise systems)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimateDiv>

      <AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 mt-12">
          <div className="flex justify-center items-center order-2">
            <Image
              className="w-auto lg:w-[420px]"
              src={onPremisePBX}
              alt="PBX"
            />
          </div>
          <div className="order-1">
            <Text variant="subtitle">On-Premise PBX</Text>
            <Text className="text-[#575A7B] my-4" variant="caption">
              Hightlights:
            </Text>
            <div className="text-[#575A7B] mt-4">
              <ul className="flex flex-col gap-4">
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  All software business communications solution
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Complete enterprise class PBX and ACD capabilities
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Full support for Polycom desktop and conference phones
                </li>
              </ul>
            </div>

            <Text className="text-[#575A7B] mt-6 mb-4" variant="caption">
              Benifits:
            </Text>
            <div className="text-[#575A7B] mt-4">
              <ul className="flex flex-col gap-4">
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Advanced business-class PBX and contact center feature set
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Reduces OPEX by leveraging existing IT infrastructure
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Able to lower communications costs with native SIP trunk
                  support
                </li>
                <li className="pl-8 relative before:w-4 before:h-4 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  Flexible upfront or monthly subscription licensing models
                  designed to fit any budget
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimateDiv>
    </Section>
  );
};

export default PBX;
