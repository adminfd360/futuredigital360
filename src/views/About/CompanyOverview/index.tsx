import PageBanner from "@/containers/PageBanner";
import banner from "../assets/aboutus-banner.webp";
import CompanyOverview from "./CompanyOverview";

const AboutUs = () => {
  return (
    <>
      <PageBanner title="About Us" bannerImg={banner.src} />
      <CompanyOverview />
    </>
  );
};

export default AboutUs;
