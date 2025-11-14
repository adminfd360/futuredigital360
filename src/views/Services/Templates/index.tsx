import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import WebTemplates from "./Templates";

import banner from "./assets/template-banner.jpg";

const Templates = () => {
  return (
    <>
      <PageBanner title="Templates" bannerImg={banner.src} />
      <Section>
        <AnimateDiv>
          <Text className="text-center" variant="subtitle">
            Choose from our templates
          </Text>
        </AnimateDiv>
        <WebTemplates />
      </Section>
    </>
  );
};

export default Templates;
