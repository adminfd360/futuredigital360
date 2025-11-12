import Section from "@/components/Section";
import AnimateDiv from "@/components/AnimateDiv";
import Text from "@/components/Text";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "@/components/Button";
import TruncateText from "@/components/TruncateText";

import ssl from "./assets/ssl.png";
import domain from "./assets/domain.png";
import hosting from "./assets/hosting.png";
import management from "./assets/management.png";
import seo from "./assets/seo.png";
import templates from "./assets/templates.png";

type Integration = {
  icon: string | StaticImageData;
  title: string;
  description: string;
};

const integrations: Integration[] = [
  {
    icon: ssl,
    title: "SSL",
    description: "Our web services include secured connection",
  },
  {
    icon: domain,
    title: "Domain Name",
    description: "We can help register your name",
  },
  {
    icon: hosting,
    title: "Hosting",
    description: "We offer hosting services for your website",
  },
  {
    icon: management,
    title: "Management",
    description:
      "We make sure the “back end” stuff going that keeps your website live, actually viewable on the internet",
  },
  {
    icon: seo,
    title: "SEO",
    description:
      "SEO combines on-page and off-page strategies to improve and maintain your website’s ranking performance. SEO upkeep may include adding relevant keywords, updating or revising metadata for pages, images, and videos, implementing schema to align with search engine–preferred data structures, and building quality inbound links to enhance your site’s visibility and authority.",
  },
  {
    icon: templates,
    title: "Templates",
    description:
      "Explore our diverse range of website template designs to find the perfect match for your brand—whether you're seeking sleek professionalism or vibrant creativity, we have a design tailored to elevate your online presence.",
  },
];

const Integrations = () => {
  return (
    <Section className="bg-[#F9F9F9]">
      <AnimateDiv>
        <Text className="text-center" variant="subtitle">
          Integrations to make it better
        </Text>
      </AnimateDiv>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {integrations.map(({ icon, title, description }, index) => (
          <AnimateDiv key={index}>
            <div className="flex flex-col gap-6 items-center justify-center rounded-xl min-h-[350px] shadow-md p-8 bg-white">
              <Image className="w-[80px]" src={icon} alt={title} />
              <Text className="text-center" variant="caption">
                {title}
              </Text>
              <TruncateText className="text-center" text={description} />
              {index === integrations.length - 1 && (
                <Button
                  href="web/templates"
                  variant="primary"
                  label="View Our Templates"
                />
              )}
            </div>
          </AnimateDiv>
        ))}
      </div>
    </Section>
  );
};

export default Integrations;
