import Banner from "./Banner";
import WelcomeContent from "./WelcomeContent";
import CompanyValues from "./CompanyValues";
import CompanyStats from "./CompanyStats";
import OurPartners from "./OurPartners";
import Testimonials from "./Testimonials";
import ParticlesApp from "@/lib/Particles";

const Home = () => {
  return (
    <>
      <Banner />
      <WelcomeContent />
      <CompanyValues />
      <CompanyStats />
      <OurPartners />
      <Testimonials />
    </>
  );
};

export default Home;
