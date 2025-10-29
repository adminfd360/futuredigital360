import PageBanner from "@/containers/PageBanner";
import PBX from "./PBX";
import PopularPhones from "./PopularPhones";
import PhonePlans from "./PhonePlans";

const CommunicationServices = () => {
  return (
    <>
      <PageBanner title="Communication Services" />
      <PBX />
      <PopularPhones />
      <PhonePlans />
    </>
  );
};

export default CommunicationServices;
