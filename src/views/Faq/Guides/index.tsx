import PageBanner from "@/containers/PageBanner";
import banner from "../assets/faq-banner.webp";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { pdfs } from "./pdf";
import Image from "next/image";
import Link from "next/link";
import AnimateDiv from "@/components/AnimateDiv";

const Guides = () => {
  return (
    <>
      <PageBanner title="PDF Guides" bannerImg={banner.src} />
      <Section className="bg-accent-100">
        <Text className="text-center" variant="title">
          PDF Guides
        </Text>
        <div className="mt-10 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pdfs.map(({ img, name, path }, index) => (
              <AnimateDiv key={index}>
                <div className="shadow-lg relative p-6 pb-16 lg:min-h-[700px] hover:scale-105 transition-all duration-300 flex items-center flex-col bg-white">
                  <Link target="_blank" href={path}>
                    <Image
                      className="w-full h-auto max-w-[400px] m-auto object-cover"
                      src={img}
                      alt={name}
                    />
                    <div className="relative mt-10 lg:mt-0 lg:absolute lg:bottom-6 lg:left-8 ">
                      <Text className="uppercase font-bold" variant="body">
                        {name}
                      </Text>
                      <Text className="text-gray-500">User Guide</Text>
                    </div>
                  </Link>
                </div>
              </AnimateDiv>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Guides;
