import Section from "@/components/Section";
import Text from "@/components/Text";
import Image, { StaticImageData } from "next/image";
import AnimateDiv from "@/components/AnimateDiv";
import webDesign from "./assets/website-dev.png";
import redesign from "./assets/redesign.png";
import webApplication from "./assets/web-application.png";
import migration from "./assets/migration.png";
import maintenance from "./assets/maintenance.png";
import mobileFriendly from "./assets/support.png";

type OurServices = {
  icon: string | StaticImageData;
  title: string;
  description: string;
};

const ourServices: OurServices[] = [
  {
    icon: webDesign,
    title: "Full Website Design and Development",
    description:
      "We custom build a website from scratch including design, implementation, quality assurance, maintenance and support.",
  },
  {
    icon: redesign,
    title: "Redesign",
    description:
      "Migrate your existing website with all your data to an updated modern solution (maybe another content management system) through the convenient and responsive user interface.",
  },
  {
    icon: webApplication,
    title: "Web application development and integration",
    description:
      "Enrich your website with ready-made and customizable social media applications, payment solutions, advanced analytics and other tools to increase user engagement.",
  },
  {
    icon: migration,
    title: "Migration to the cloud",
    description:
      "To improve scalability, manageability, and cost reduction, migrate your existing websites and applications to another cloud service platform.",
  },
  {
    icon: maintenance,
    title: "Maintenance and support",
    description:
      "We enhance scalability and performance to handle more visitors and data, fix bugs to improve user experience and engagement, and conduct security audits and SSL/TLS validation to keep your data and users protected.",
  },
  {
    icon: mobileFriendly,
    title: "Mobile friendly development",
    description:
      "We build a strong foundation for your online presence using robust, industry-leading technologies. Our solutions are interactive, media-rich, and personalized to keep your visitors engaged and make your business stand out.",
  },
];

const OurServices = () => {
  return (
    <Section>
      <AnimateDiv>
        <Text className="text-center" variant="title">
          Web Design
        </Text>
      </AnimateDiv>
      <AnimateDiv>
        <Text
          className="text-center mt-4 lg:max-w-[1120px] mx-auto"
          variant="body"
        >
          Using our custom-built approach, we design, develop, implement, ensure
          quality assurance, maintain, and support a website from scratch.
        </Text>
        <Text
          className="mt-4 text-center lg:max-w-[1120px] mx-auto leading-7"
          variant="body"
        >
          We will take your vision and bring it to life with our Web Services
          Package! A business who had online presence has a massive impact on a
          company's success. Majority of customers will visit your business
          digitally rather than driving to your store, which takes them a lot of
          time. "Time is GOLD". Building a website for your business could reach
          these unreachable customers. Your business might be local, but you
          might be able to sell your products or services to a wider market,
          whether it be people in the next town, the nation as a whole or even
          the International market.
        </Text>
      </AnimateDiv>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        {ourServices.map(({ icon, title, description }, index) => (
          <AnimateDiv key={index}>
            <div className="flex flex-col gap-6 items-center rounded-xl min-h-[380px] shadow-md p-6">
              <Image src={icon} alt={title} />
              <Text className="text-center" variant="caption">
                {title}
              </Text>
              <Text className="text-center leading-7" variant="body">
                {description}
              </Text>
            </div>
          </AnimateDiv>
        ))}
      </div>
    </Section>
  );
};

export default OurServices;
