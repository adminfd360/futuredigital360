import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image, { StaticImageData } from "next/image";

import networkImage from "./assets/network.svg";
import cycleImage from "./assets/cycle.png";
import remoteImage from "./assets/remote.png";
import endpoinImage from "./assets/security.png";
import emailImage from "./assets/email.png";
import backupImage from "./assets/backup.png";
import remoteRemediationImage from "./assets/remediation.png";

type StandardFeatures = {
  icon: string | StaticImageData;
  title: string;
  description: string;
};

const standardFeatures: StandardFeatures[] = [
  {
    icon: cycleImage,
    title: "LIFE CYCLE MANAGEMENT",
    description:
      "Refresh your hardware with the latest technology improves reliability and performance that keeps you ahead of the technology curve.",
  },
  {
    icon: remoteImage,
    title: "REMOTE MONITORING",
    description:
      "In-dept health performance monitoring of all the elements of your business IT assets.",
  },
  {
    icon: endpoinImage,
    title: "END POINT SECURITY",
    description:
      "Total desktop security solution including antivirus, anti malware and hosted intrusion protection.",
  },
  {
    icon: emailImage,
    title: "EMAIL SECURITY",
    description:
      "Service offers perimeter protection preventing unwanted email and spam from reaching users network.",
  },
  {
    icon: backupImage,
    title: "BACK UP & DISASTER RECOVERY",
    description:
      "Ensures business continuity through schedule backup of critical data and restoration in the event of data loss.",
  },
  {
    icon: remoteRemediationImage,
    title: "REMOTE REMEDIATION",
    description:
      "Technicians work remotely on your network to resolve system issues.",
  },
];

const StandardFeatures = () => {
  return (
    <>
      <Section>
        <AnimateDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4 justify-center">
              <Text variant="subtitle">Our Mission</Text>
              <Text className="my-4 leading-8" variant="body">
                Having <strong>Future Digital 360</strong> as your IT partner
                will give you peace of mind knowing your network is being
                proactively monitored 24/7 and we help eliminate computer
                problems before they occur. Providing customers with fully
                managed and secure network services and infrastructure.
              </Text>
            </div>
            <div>
              <Image
                className="w-full lg:w-auto"
                src={networkImage}
                alt="network"
              />
            </div>
          </div>
        </AnimateDiv>
      </Section>
      <Section className="bg-accent-100">
        <AnimateDiv>
          <Text className="text-center" variant="title">
            Standard Features
          </Text>
          <Text className="text-center mt-4">
            Total network security ensures you are protected from threats and
            able to manage where users spend their time on the internet.
          </Text>
        </AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {standardFeatures.map(({ icon, title, description }, index) => (
            <AnimateDiv key={index}>
              <div className="flex flex-col gap-4 items-center bg-white shadow-xl p-8 rounded-xl min-h-[310px]">
                <Image src={icon} alt={title} />
                <Text variant="caption">{title}</Text>
                <Text className="text-center" variant="body">
                  {description}
                </Text>
              </div>
            </AnimateDiv>
          ))}
        </div>
      </Section>
    </>
  );
};

export default StandardFeatures;
