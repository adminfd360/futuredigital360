import Image from "next/image";
import Section from "@/components/Section";
import Text from "@/components/Text";
import CountUp from "@/components/CountUp";
import city from "./assets/city.png";
import rocket from "./assets/rocket.png";
import AnimateDiv from "@/components/AnimateDiv";

type Stats = {
  title: number;
  suffix: string;
  description: string;
};

const stats: Stats[] = [
  {
    title: 15,
    suffix: "+",
    description: "Experience Years",
  },

  {
    title: 634,
    suffix: "+",
    description: "Happy Clients",
  },
  {
    title: 951,
    suffix: "+",
    description: "Finished Projects",
  },
  {
    title: 5,
    suffix: "k",
    description: "Skilled Experts",
  },
];

const CompanyStats = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <AnimateDiv delay={0.3} className="absolute -bottom-1 right-0">
        <Image
          src={rocket}
          alt="rocket"
          className="relative max-sm:w-[150px]"
        />
      </AnimateDiv>

      <div
        className="z-10 absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${city.src})` }}
      ></div>
      <Section className="z-20 bg-gradient-to-b from-brand-500 to-brand-600">
        <AnimateDiv>
          <div className="flex flex-col items-center justify-center">
            <Text className="text-center text-white">
              We provide only the best
            </Text>
            <Text className="text-center text-white mt-2" variant="subtitle">
              Simplifying Growth for Your Business
            </Text>

            <div className="flex mt-10 justify-around w-full max-lg:flex-wrap">
              {stats.map(({ title, description, suffix }, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center max-lg:w-1/2 max-lg:mb-16"
                >
                  <CountUp
                    end={title}
                    suffix={suffix}
                    duration={2}
                    delay={index * 0.2}
                    className="text-4xl font-bold"
                    startOnView={true}
                  />
                  <Text className="text-center">{description}</Text>
                </div>
              ))}
            </div>
          </div>
        </AnimateDiv>
      </Section>
    </div>
  );
};

export default CompanyStats;
