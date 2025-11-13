import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";

import cyberSecurityImage from "./assets/cybersecurity.svg";
import securityImage from "./assets/networksecurity.svg";

const CyberSecurity = () => {
  return (
    <Section className="bg-[#F9F9F9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6 items-center justify-center">
          <AnimateDiv>
            <Image
              className="w-4/5 lg:w-auto max-sm:m-auto"
              src={cyberSecurityImage}
              alt="Cyber Security"
            />
          </AnimateDiv>
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <AnimateDiv>
            <Text className="font-semibold" variant="subtitle">
              Cyber Security
            </Text>
          </AnimateDiv>
          <AnimateDiv>
            <Text variant="body" className="leading-8 w-full lg:max-w-[590px]">
              Refers to a set of techniques and methodologies used to protect
              integrity of networks, devices, programs, and data from damage,
              attack, or unauthorized access. In simple terms, cyber security is
              the practice of protecting internet-connected systems and networks
              from digital attacks.
            </Text>
          </AnimateDiv>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mt-12">
        <div className="flex flex-col gap-6 items-center justify-center lg:order-2">
          <AnimateDiv>
            <Image
              className="w-4/5 lg:w-auto max-w-[700px] max-sm:m-auto"
              src={securityImage}
              alt="Network Security"
            />
          </AnimateDiv>
        </div>
        <div className="flex flex-col gap-6 justify-center lg:order-1">
          <AnimateDiv>
            <Text
              className="font-semibold lg:w-[590px] lg:ml-auto"
              variant="subtitle"
            >
              Network Security
            </Text>
          </AnimateDiv>
          <AnimateDiv>
            <Text
              variant="body"
              className="leading-8 w-full lg:max-w-[590px] lg:ml-auto"
            >
              Consists of the policies, processes and practices adopted to
              prevent, detect and monitor unauthorized access, misuse,
              modification, or denial of a computer network and
              network-accessible resources. Network security involves the
              authorization of access to data in a network, which is controlled
              by the network administrator. Users choose or are assigned an ID
              and password or other authenticating information that allows them
              access to information and programs within their authority. Network
              security covers a variety of computer networks, both public and
              private, that are used in everyday jobs: conducting transactions
              and communications among businesses, government agencies and
              individuals. Networks can be private, such as within a company,
              and others which might be open to public access. Network security
              is involved in organizations, enterprises, and other types of
              institutions. It does as its title explains: it secures the
              network, as well as protecting and overseeing operations being
              done. The most common and simple way of protecting a network
              resource is by assigning it a unique name and a corresponding
              password.
            </Text>
          </AnimateDiv>
        </div>
      </div>
    </Section>
  );
};

export default CyberSecurity;
